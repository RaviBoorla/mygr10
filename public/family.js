// ── Family — parent/guardian linking (Phase 1: linking & roles only) ─────────
// Spec: docs/family.md. No digests, no assignments yet — this file only
// handles invite/accept/unlink and the exclusive child/guardian role lock.
//
// Firestore collections (see docs/family.md "Data model"):
//   familyInvites/{toEmailLower}/items/{autoId}
//   familyLinks/{linkId}
//
// Depends on `riseAuth` (public/auth.js) having already run and exposed
// `riseAuth.user`. Degrades to a no-op stub if Firebase isn't available,
// same pattern as auth.js.

(function () {
  'use strict';

  let db;
  try {
    db = firebase.firestore();
  } catch (e) {
    window.riseFamily = { pendingCount: 0, openInviteAccept() {}, renderProfileSection() { return ''; } };
    return;
  }

  let _pendingInvites = [];   // invites addressed to me, status:'pending'
  let _myLinks = [];          // familyLinks rows where I'm either side
  let _unsubInvites = null;
  let _unsubLinks = null;

  function uid()   { return window.riseAuth?.user?.uid || null; }
  function email() { return (window.riseAuth?.user?.email || '').toLowerCase(); }

  function emailKey(addr) {
    return String(addr || '').trim().toLowerCase();
  }

  function refresh() {
    if (typeof app !== 'undefined' && app.render) app.render();
    const mount = document.getElementById('family-section-mount');
    if (mount) mount.innerHTML = renderProfileSection();
  }

  // ── Role lock ────────────────────────────────────────────────────────────
  // A user's family role, once fixed, is stored on their profile doc so it
  // survives even after every link is later unlinked (docs/family.md
  // constraint 8: role is permanent, never reversible).
  function profileDoc() {
    return db.collection('users').doc(uid()).collection('sync').doc('profile');
  }

  async function getFamilyRole() {
    try {
      const snap = await profileDoc().get();
      return snap.exists ? (snap.data().familyRole || null) : null;
    } catch (_) { return null; }
  }

  function hasPracticeHistory() {
    try {
      const raw = localStorage.getItem('rise.progress');
      if (!raw) return false;
      const data = JSON.parse(raw);
      return data && typeof data === 'object' && Object.keys(data).length > 0;
    } catch (_) { return false; }
  }

  async function lockFamilyRole(role) {
    try { await profileDoc().set({ familyRole: role }, { merge: true }); } catch (_) {}
  }

  // ── Live listeners ───────────────────────────────────────────────────────
  function startListeners() {
    stopListeners();
    if (!uid()) return;
    _unsubInvites = db.collection('familyInvites').doc(email()).collection('items')
      .where('status', '==', 'pending')
      .onSnapshot(snap => {
        _pendingInvites = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        refresh();
      }, () => {});
    _unsubLinks = db.collection('familyLinks')
      .where('guardianUid', '==', uid())
      .onSnapshot(snap => { _mergeLinks('guardian', snap); refresh(); }, () => {});
    db.collection('familyLinks').where('childUid', '==', uid())
      .onSnapshot(snap => { _mergeLinks('child', snap); refresh(); }, () => {});
  }

  const _linkSets = { guardian: [], child: [] };
  function _mergeLinks(side, snap) {
    _linkSets[side] = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    _myLinks = [..._linkSets.guardian, ..._linkSets.child];
  }

  function stopListeners() {
    if (_unsubInvites) { _unsubInvites(); _unsubInvites = null; }
    if (_unsubLinks)   { _unsubLinks();   _unsubLinks   = null; }
    _pendingInvites = [];
    _linkSets.guardian = []; _linkSets.child = [];
    _myLinks = [];
  }

  // ── Invite ───────────────────────────────────────────────────────────────
  // role = the role the INVITEE is being asked to accept ('guardian' | 'child')
  async function sendInvite(toEmailRaw, role) {
    const toEmail = emailKey(toEmailRaw);
    const me = window.riseAuth?.user;
    if (!me) return { ok: false, msg: 'Sign in first.' };
    if (!me.emailVerified) return { ok: false, msg: 'Verify your email first — check your inbox, or resend from Profile.' };
    if (!toEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toEmail)) return { ok: false, msg: 'Enter a valid email address.' };
    if (toEmail === email()) return { ok: false, msg: "That's your own email." };

    // Dedupe: an existing active link to this email already
    const alreadyLinked = _myLinks.some(l => l.status === 'active' &&
      (l.guardianEmail === toEmail || l.childEmail === toEmail));
    if (alreadyLinked) return { ok: false, msg: 'Already linked with that email.' };

    try {
      // Dedupe: an existing pending invite from me to this email. Requires
      // the security rule to let a sender read items they created (not just
      // the invitee) — see docs/family.md's rules note.
      const existing = await db.collection('familyInvites').doc(toEmail).collection('items')
        .where('fromUid', '==', uid()).where('status', '==', 'pending').limit(1).get();
      if (!existing.empty) return { ok: false, msg: 'Already invited — waiting for them to accept.' };

      const payload = {
        fromUid: uid(),
        fromEmail: email(),
        fromDisplayName: window.riseAuth.user.displayName || email(),
        role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        status: 'pending'
      };
      // If I'm the child sending this (inviting my guardian), record which
      // grade::board it covers so the resulting link is scoped correctly.
      if (role === 'guardian' && typeof state !== 'undefined') {
        payload.gradeBoard = `${state.grade}::${state.board}`;
      }
      await db.collection('familyInvites').doc(toEmail).collection('items').add(payload);
      return { ok: true, msg: 'Invite sent. They will see it next time they sign in — email notification is not wired up yet (needs the Family Worker, phase 4).' };
    } catch (e) {
      return { ok: false, msg: 'Could not send invite: ' + (e.message || e.code || 'unknown error') };
    }
  }

  // ── Accept / ignore ──────────────────────────────────────────────────────
  async function acceptInvite(invite) {
    const me = window.riseAuth?.user;
    if (!me) return { ok: false, msg: 'Sign in first.' };
    if (!me.emailVerified) return { ok: false, msg: 'Verify your email first before accepting.' };

    const myExistingRole = await getFamilyRole();
    const wouldBecome = invite.role; // what I'm accepting to be

    if (myExistingRole && myExistingRole !== wouldBecome) {
      return { ok: false, msg: `You're already a ${myExistingRole} on Rise — an account can't be both a parent/guardian and a child.` };
    }
    if (!myExistingRole && wouldBecome === 'guardian' && hasPracticeHistory()) {
      return { ok: false, msg: "This account already has practice history, so it can't become a guardian account. Use a different account to link as a parent." };
    }

    const gradeBoard = invite.gradeBoard ||
      (typeof state !== 'undefined' ? `${state.grade}::${state.board}` : 'X::CBSE');

    const link = {
      status: 'active',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      digestOptIn: { email: false },
      gradeBoard
    };
    if (wouldBecome === 'guardian') {
      link.guardianUid = uid(); link.guardianEmail = email();
      link.childUid = invite.fromUid; link.childEmail = invite.fromEmail;
    } else {
      link.childUid = uid(); link.childEmail = email();
      link.guardianUid = invite.fromUid; link.guardianEmail = invite.fromEmail;
    }

    try {
      await db.collection('familyLinks').add(link);
      await lockFamilyRole(wouldBecome);
      await db.collection('familyInvites').doc(email()).collection('items').doc(invite.id).delete();
      return { ok: true, msg: 'Linked!' };
    } catch (e) {
      return { ok: false, msg: 'Could not complete the link: ' + (e.message || e.code || 'unknown error') };
    }
  }

  async function ignoreInvite(invite) {
    await db.collection('familyInvites').doc(email()).collection('items').doc(invite.id).delete();
  }

  async function unlink(linkId) {
    await db.collection('familyLinks').doc(linkId).update({
      status: 'unlinked',
      unlinkedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async function toggleDigest(linkId, on) {
    await db.collection('familyLinks').doc(linkId).update({ 'digestOptIn.email': !!on });
  }

  // ── Profile-modal section (rendered by auth.js's injectProfileModal) ────
  function renderProfileSection() {
    if (!uid()) return '';
    const activeLinks = _myLinks.filter(l => l.status === 'active');
    const isGuardianSomewhere = activeLinks.some(l => l.guardianUid === uid());
    const isChildSomewhere    = activeLinks.some(l => l.childUid === uid());

    const invitesHtml = _pendingInvites.length ? `
      <div class="family-invites">
        ${_pendingInvites.map(inv => `
          <div class="family-invite-row">
            <span>${esc(inv.fromDisplayName || inv.fromEmail)} wants to link you as their
              <strong>${inv.role === 'guardian' ? 'parent/guardian' : 'child'}</strong></span>
            <div class="family-invite-actions">
              <button class="btn small primary" onclick="riseFamily._accept('${inv.id}')">Accept</button>
              <button class="btn small ghost" onclick="riseFamily._ignore('${inv.id}')">Ignore</button>
            </div>
          </div>`).join('')}
      </div>` : '';

    const linksHtml = activeLinks.length ? `
      <div class="family-links">
        ${activeLinks.map(l => {
          const otherEmail = l.guardianUid === uid() ? l.childEmail : l.guardianEmail;
          const otherRole  = l.guardianUid === uid() ? 'child' : 'guardian';
          return `
          <div class="family-link-row">
            <span>Linked with <strong>${esc(otherEmail)}</strong> (${otherRole}) — ${esc(l.gradeBoard || '')}</span>
            ${otherRole === 'child' ? `
              <label class="family-digest-toggle">
                <input type="checkbox" ${l.digestOptIn?.email ? 'checked' : ''}
                       onchange="riseFamily._toggleDigest('${l.id}', this.checked)"> Daily digest
              </label>` : ''}
            <button class="btn small ghost" onclick="riseFamily._unlink('${l.id}')">Unlink</button>
          </div>`;
        }).join('')}
      </div>` : '';

    const canInviteGuardian = !isGuardianSomewhere; // child inviting a guardian; blocked if I'm already a guardian myself
    const canInviteChild    = !isChildSomewhere;     // guardian inviting a child; blocked if I'm already a child myself

    const inviteHtml = (canInviteGuardian || canInviteChild) ? `
      <div class="family-invite-form">
        <input id="family-invite-email" type="email" placeholder="their email address" autocomplete="off">
        <div class="family-invite-buttons">
          ${canInviteGuardian ? `<button type="button" class="btn small ghost" onclick="riseFamily._invite('guardian')">Invite my parent/guardian</button>` : ''}
          ${canInviteChild    ? `<button type="button" class="btn small ghost" onclick="riseFamily._invite('child')">Invite my child</button>` : ''}
        </div>
        <p id="family-invite-msg" class="auth-error" hidden></p>
      </div>` : '';

    return `
      <div class="family-section">
        <h3 class="family-heading">Family</h3>
        <p class="auth-sub">Link a parent/guardian account for progress sharing. Either side can invite; a family link needs both sides to agree, and a guardian account can never also be a student account.</p>
        ${invitesHtml}${linksHtml}${inviteHtml}
      </div>`;
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }

  // ── Public API ───────────────────────────────────────────────────────────
  window.riseFamily = {
    get pendingCount() { return _pendingInvites.length; },
    renderProfileSection,

    async _invite(role) {
      const input = document.getElementById('family-invite-email');
      const msg = document.getElementById('family-invite-msg');
      const res = await sendInvite(input?.value, role);
      if (msg) { msg.textContent = res.msg; msg.hidden = false; msg.style.color = res.ok ? 'var(--primary)' : '#dc2626'; }
      if (res.ok && input) input.value = '';
      refresh();
    },
    async _accept(inviteId) {
      const inv = _pendingInvites.find(i => i.id === inviteId);
      if (!inv) return;
      const res = await acceptInvite(inv);
      if (!res.ok) alert(res.msg);
      refresh();
    },
    async _ignore(inviteId) {
      const inv = _pendingInvites.find(i => i.id === inviteId);
      if (inv) await ignoreInvite(inv);
      refresh();
    },
    async _unlink(linkId) {
      if (!confirm('Unlink this family connection? This stops all sharing immediately.')) return;
      await unlink(linkId);
      refresh();
    },
    async _toggleDigest(linkId, on) {
      await toggleDigest(linkId, on);
    }
  };

  // Start/stop listeners as auth state changes — poll briefly for riseAuth
  // to exist since script load order matters (auth.js loads first, but its
  // onAuthStateChanged fires asynchronously).
  let _lastUid = undefined;
  setInterval(() => {
    const u = uid();
    if (u !== _lastUid) {
      _lastUid = u;
      if (u) startListeners(); else stopListeners();
      refresh();
    }
  }, 500);
})();
