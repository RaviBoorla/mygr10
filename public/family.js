// ── Family — parent/guardian linking + progress sharing ───────────────────────
// Spec: docs/family.md. Phase 1 (invite/accept/unlink/role-lock) plus Phase 2
// (familySummary aggregation + data feeding the Progress-screen guardian view).
// Still no digests, no assignments, no Worker — those are phases 3-4.
//
// Firestore collections (see docs/family.md "Data model"):
//   familyInvites/{toEmailLower}/items/{autoId}
//   familyLinks/{guardianUid}_{childUid}   -- deterministic id: one link doc
//                                              per (guardian, child) pair, so
//                                              a security rule can check
//                                              exists() on a known path (see
//                                              "Firestore security rules" in
//                                              docs/family.md) without needing
//                                              a query inside the rule.
//   users/{childUid}/sync/familySummary    -- pre-aggregated chapter accuracy,
//                                              written by computeAndPushSummary()
//                                              below, read by the guardian's
//                                              Progress-screen child-switcher.
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
  let _myRole = null;         // cached familyRole, fetched once per uid change
  let _roleLoaded = false;    // true after getFamilyRole() resolves (even if null)
  let _unsubInvites = null;
  let _unsubLinks = null;
  let _unsubLinksChild = null; // second familyLinks query (childUid side)
  const _childSummaries = {}; // childUid -> { byGradeBoard, updatedAt } | 'loading' | null
  const _summaryUnsubs = {};  // childUid -> unsubscribe fn

  // Assignments
  const _childAssignments = {}; // childUid -> array of assignment docs (guardian view)
  const _assignmentUnsubs = {}; // childUid -> unsubscribe fn
  let _myAssignments = [];        // pending assignments addressed to me (child view)
  let _myAssignmentHistory = [];  // completed/cancelled/expired assignments addressed to me (child view)
  let _unsubMyAssignments = null;

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
    _roleLoaded = false;
    getFamilyRole().then(r => { _myRole = r; _roleLoaded = true; refresh(); });
    // Push existing localStorage progress to Firestore on login so the guardian
    // can see data even if the child hasn't submitted a new test since this feature launched.
    computeAndPushSummary();
    _unsubInvites = db.collection('familyInvites').doc(email()).collection('items')
      .where('status', '==', 'pending')
      .onSnapshot(snap => {
        _pendingInvites = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        refresh();
      }, () => {});
    _unsubLinks = db.collection('familyLinks')
      .where('guardianUid', '==', uid())
      .onSnapshot(snap => { _mergeLinks('guardian', snap); refresh(); }, () => {});
    _unsubLinksChild = db.collection('familyLinks').where('childUid', '==', uid())
      .onSnapshot(snap => { _mergeLinks('child', snap); refresh(); }, () => {});
    // Child's own assignments — unfiltered query (the security rule already
    // scopes this to "my own docs" via the childUid path segment, so no
    // .where()/.orderBy() is needed here); split into pending inbox vs.
    // history (completed/cancelled/expired) client-side.
    _unsubMyAssignments = db.collection('users').doc(uid()).collection('assignments')
      .onSnapshot(snap => {
        const all = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        _myAssignments = all.filter(a => a.status === 'pending')
          .sort((a, b) => (a.dueAt?.toMillis?.() || 0) - (b.dueAt?.toMillis?.() || 0));
        _myAssignmentHistory = all.filter(a => a.status !== 'pending')
          .sort((a, b) => (b.dueAt?.toMillis?.() || 0) - (a.dueAt?.toMillis?.() || 0));
        refresh();
      }, (err) => { console.error('[family] my assignments listener error:', err); });
  }

  const _linkSets = { guardian: [], child: [] };
  function _mergeLinks(side, snap) {
    _linkSets[side] = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    _myLinks = [..._linkSets.guardian, ..._linkSets.child];

    // Derive role from active links when no profile-stored role exists.
    // This handles the case where the GUARDIAN initiated the invite — acceptInvite()
    // only locks the accepter's role, so the initiating guardian never gets their
    // familyRole written to their profile doc. Run regardless of _roleLoaded so
    // the screen updates immediately when links arrive; lockFamilyRole backfills the doc.
    if (!_myRole) {
      if (_linkSets.guardian.some(l => l.status === 'active')) {
        _myRole = 'guardian';
        lockFamilyRole('guardian'); // backfill the profile doc
      } else if (_linkSets.child.some(l => l.status === 'active')) {
        _myRole = 'child';
        lockFamilyRole('child');
      }
    }

    if (side === 'guardian') {
      // Start/stop a familySummary + assignment listener per actively-linked child.
      const activeChildUids = new Set(_linkSets.guardian.filter(l => l.status === 'active').map(l => l.childUid));
      Object.keys(_summaryUnsubs).forEach(childUid => {
        if (!activeChildUids.has(childUid)) { _summaryUnsubs[childUid](); delete _summaryUnsubs[childUid]; delete _childSummaries[childUid]; }
      });
      Object.keys(_assignmentUnsubs).forEach(childUid => {
        if (!activeChildUids.has(childUid)) { _assignmentUnsubs[childUid](); delete _assignmentUnsubs[childUid]; delete _childAssignments[childUid]; }
      });
      activeChildUids.forEach(childUid => { watchChildSummary(childUid); watchChildAssignments(childUid); });
    }
  }

  function watchChildSummary(childUid) {
    if (_summaryUnsubs[childUid]) return;
    _childSummaries[childUid] = 'loading';
    _summaryUnsubs[childUid] = db.collection('users').doc(childUid).collection('sync').doc('familySummary')
      .onSnapshot(snap => {
        _childSummaries[childUid] = snap.exists ? snap.data() : { byGradeBoard: {} };
        refresh();
      }, () => { _childSummaries[childUid] = { byGradeBoard: {} }; refresh(); });
  }

  function stopListeners() {
    if (_unsubInvites)     { _unsubInvites();     _unsubInvites     = null; }
    if (_unsubLinks)       { _unsubLinks();       _unsubLinks       = null; }
    if (_unsubLinksChild)  { _unsubLinksChild();  _unsubLinksChild  = null; }
    if (_unsubMyAssignments) { _unsubMyAssignments(); _unsubMyAssignments = null; }
    Object.values(_summaryUnsubs).forEach(fn => fn());
    Object.keys(_summaryUnsubs).forEach(k => delete _summaryUnsubs[k]);
    Object.keys(_childSummaries).forEach(k => delete _childSummaries[k]);
    Object.values(_assignmentUnsubs).forEach(fn => fn());
    Object.keys(_assignmentUnsubs).forEach(k => delete _assignmentUnsubs[k]);
    Object.keys(_childAssignments).forEach(k => delete _childAssignments[k]);
    _pendingInvites = [];
    _linkSets.guardian = []; _linkSets.child = [];
    _myLinks = [];
    _myRole = null;
    _roleLoaded = false;
    _myAssignments = [];
    _myAssignmentHistory = [];
  }

  // ── Invite ───────────────────────────────────────────────────────────────
  // role = the role the INVITEE is being asked to accept ('guardian' | 'child')
  async function sendInvite(toEmailRaw, role) {
    const toEmail = emailKey(toEmailRaw);
    const me = window.riseAuth?.user;
    if (!me) return { ok: false, msg: 'Sign in first.' };
    // emailVerified is cached client-side and only updates after a reload —
    // refresh it here so verifying in another tab moments ago isn't missed.
    if (window.riseAuth?.refreshEmailVerified) await window.riseAuth.refreshEmailVerified();
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
      // Notify invitee immediately via the Worker HTTP route (Phase 4).
      // Silently degrades if FAMILY_WORKER_URL is not configured.
      if (typeof FAMILY_WORKER_URL === 'string' && FAMILY_WORKER_URL) {
        fetch(`${FAMILY_WORKER_URL}/family/notify-invite`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fromName:  window.riseAuth.user.displayName || email(),
            fromEmail: email(),
            toEmail,
            toRole:    role
          })
        }).catch(() => {}); // best-effort, never throw
      }
      return { ok: true, msg: 'Invite sent! They will receive an email notification if the app is fully configured.' };
    } catch (e) {
      return { ok: false, msg: 'Could not send invite: ' + (e.message || e.code || 'unknown error') };
    }
  }

  // ── Accept / ignore ──────────────────────────────────────────────────────
  async function acceptInvite(invite) {
    const me = window.riseAuth?.user;
    if (!me) return { ok: false, msg: 'Sign in first.' };
    if (window.riseAuth?.refreshEmailVerified) await window.riseAuth.refreshEmailVerified();
    if (!me.emailVerified) return { ok: false, msg: 'Verify your email first — check your inbox, or resend from Profile.' };

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

    const linkId = `${link.guardianUid}_${link.childUid}`;
    try {
      await db.collection('familyLinks').doc(linkId).set(link);
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

  // ── familySummary: pre-aggregated chapter accuracy ──────────────────────
  // Computed from the same localStorage progress record the child's own
  // Progress screen already reads (scopeKey = "grade::board::subject"), so
  // there's one implementation of the accuracy math, not two. Called from
  // auth.js's pushToCloud() — the same choke point every graded submit
  // already goes through — so no extra call sites needed elsewhere.
  function computeAndPushSummary() {
    if (!uid()) return;
    try {
      const raw = localStorage.getItem('rise.progress');
      const store = raw ? JSON.parse(raw) : {};
      const byGradeBoard = {};
      Object.entries(store).forEach(([key, bySubj]) => {
        const parts = key.split('::');
        if (parts.length < 3) return;
        const gradeBoard = `${parts[0]}::${parts[1]}`;
        const subject = parts.slice(2).join('::');
        const chapters = byGradeBoard[gradeBoard] || (byGradeBoard[gradeBoard] = {});
        Object.values(bySubj).forEach(rec => {
          const chapter = rec.chapter || 'General';
          const ckey = subject + '||' + chapter;
          const c = chapters[ckey] || (chapters[ckey] = { subject, chapter, correct: 0, wrong: 0, lastAttemptAt: 0 });
          c.correct += rec.correctCount || 0;
          c.wrong += rec.wrongCount || 0;
          if (rec.lastAt && rec.lastAt > c.lastAttemptAt) c.lastAttemptAt = rec.lastAt;
        });
      });
      const out = {};
      Object.entries(byGradeBoard).forEach(([gb, chapters]) => {
        out[gb] = Object.values(chapters).map(c => ({
          subject: c.subject,
          chapter: c.chapter,
          accuracy: (c.correct + c.wrong) ? Math.round(c.correct / (c.correct + c.wrong) * 100) : 0,
          attempts: c.correct + c.wrong,
          lastAttemptAt: c.lastAttemptAt
        }));
      });
      db.collection('users').doc(uid()).collection('sync').doc('familySummary').set({
        byGradeBoard: out,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (_) {}
  }

  // ── Assignments ──────────────────────────────────────────────────────────
  function watchChildAssignments(childUid) {
    if (_assignmentUnsubs[childUid]) return;
    _childAssignments[childUid] = [];
    // Filter by createdBy so Firestore security rules (which check resource.data.createdBy)
    // can be evaluated on the query — an unfiltered query returns permission-denied.
    // No .orderBy() — combined with .where() on a different field it needs a
    // composite index; sorting client-side avoids that requirement entirely.
    _assignmentUnsubs[childUid] = db.collection('users').doc(childUid).collection('assignments')
      .where('createdBy', '==', uid())
      .onSnapshot(snap => {
        _childAssignments[childUid] = snap.docs.map(d => ({ id: d.id, ...d.data() }))
          .sort((a, b) => (b.dueAt?.toMillis?.() || 0) - (a.dueAt?.toMillis?.() || 0));
        refresh();
      }, (err) => { console.error('[family] watchChildAssignments error:', err); _childAssignments[childUid] = []; refresh(); });
  }

  async function createAssignment(childUid, { subject, chapter, gradeBoard, questionCount, timeLimitMinutes, dueAt }) {
    if (!uid()) return { ok: false, msg: 'Sign in first.' };
    const link = _linkSets.guardian.find(l => l.childUid === childUid && l.status === 'active');
    if (!link) return { ok: false, msg: 'No active family link for this child.' };
    try {
      await db.collection('users').doc(childUid).collection('assignments').add({
        createdBy: uid(),
        childUid,
        subject,
        chapter: chapter || null,
        gradeBoard: gradeBoard || link.gradeBoard,
        questionCount: Number(questionCount) || 10,
        timeLimitMinutes: Number(timeLimitMinutes) || 20,
        dueAt: firebase.firestore.Timestamp.fromDate(new Date(dueAt)),
        status: 'pending',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return { ok: true };
    } catch (e) {
      return { ok: false, msg: e.message || 'Could not create assignment.' };
    }
  }

  async function cancelAssignment(childUid, assignmentId) {
    try {
      await db.collection('users').doc(childUid).collection('assignments').doc(assignmentId).update({
        status: 'cancelled',
        cancelledAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (_) {}
  }

  async function completeAssignment(childUid, assignmentId, result) {
    try {
      // Read the assignment doc first to get guardian email + subject info for the notification,
      // and any prior attempts (a Reattempt appends rather than overwrites).
      const ref = db.collection('users').doc(childUid).collection('assignments').doc(assignmentId);
      const snap = await ref.get();
      const prevAttempts = snap.exists ? (snap.data().attempts || (snap.data().result ? [snap.data().result] : [])) : [];
      // Only the LATEST attempt keeps its full reviewData (question text/options/answers) —
      // older attempts keep just the score, so repeated reattempts don't grow the doc unbounded.
      const trimmedPrev = prevAttempts.map(({ reviewData, ...rest }) => rest);
      // FieldValue.serverTimestamp() cannot be used inside an array element — use a client
      // timestamp for entries in `attempts`; only the top-level doc write may use serverTimestamp.
      const entry = { ...result, attemptNumber: trimmedPrev.length + 1, submittedAt: Date.now() };
      const attempts = [...trimmedPrev, entry];
      await ref.update({
        status: 'completed',
        attempts,
        result: entry, // mirrors the latest attempt, for any older readers
        lastSubmittedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      // Notify guardian via Worker HTTP route (best-effort).
      if (typeof FAMILY_WORKER_URL === 'string' && FAMILY_WORKER_URL && snap.exists) {
        const a = snap.data();
        // Find guardian email from active links.
        const link = _linkSets.child.find(l => l.guardianUid === a.createdBy && l.status === 'active');
        if (link) {
          fetch(`${FAMILY_WORKER_URL}/family/notify-assignment-complete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              guardianEmail: link.guardianContact?.email || link.guardianEmail,
              childName: email().split('@')[0],
              subject:   a.subject,
              chapter:   a.chapter || null,
              score:     result.score,
              total:     result.total,
              accuracy:  result.accuracy
            })
          }).catch(() => {});
        }
      }
    } catch (_) {}
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }

  // ── Public API ───────────────────────────────────────────────────────────
  window.riseFamily = {
    get pendingCount() { return _pendingInvites.length; },
    get roleLoaded()   { return _roleLoaded; },
    // 'guardian' | 'child' | null (not yet linked to anything, ever)
    get myRole() { return _myRole; },
    get linksAsGuardian() { return _linkSets.guardian.filter(l => l.status === 'active'); },
    get linksAsChild() { return _linkSets.child.filter(l => l.status === 'active'); },
    get myAssignments() { return _myAssignments; },
    get myAssignmentHistory() { return _myAssignmentHistory; },
    renderProfileSection,
    updateSummary: computeAndPushSummary,

    // Returns the cached familySummary for a linked child.
    getChildSummary(childUid) {
      watchChildSummary(childUid);
      return _childSummaries[childUid];
    },

    // Returns cached assignment list for a linked child (guardian view).
    getChildAssignments(childUid) {
      return _childAssignments[childUid] || [];
    },

    completeAssignment,

    async _createAssignment(childUid) {
      const subjectEl = document.getElementById(`assign-subject-${childUid}`);
      const chapterEl = document.getElementById(`assign-chapter-${childUid}`);
      const countEl   = document.getElementById(`assign-count-${childUid}`);
      const limitEl   = document.getElementById(`assign-limit-${childUid}`);
      const dueEl     = document.getElementById(`assign-due-${childUid}`);
      const msgEl     = document.getElementById(`assign-msg-${childUid}`);
      const res = await createAssignment(childUid, {
        subject: subjectEl?.value,
        chapter: chapterEl?.value || null,
        questionCount: countEl?.value,
        timeLimitMinutes: limitEl?.value,
        dueAt: dueEl?.value
      });
      if (msgEl) { msgEl.textContent = res.ok ? 'Assignment sent!' : (res.msg || 'Error'); msgEl.hidden = false; msgEl.style.color = res.ok ? 'var(--primary)' : '#dc2626'; }
      if (res.ok) { if (subjectEl) subjectEl.selectedIndex = 0; if (chapterEl) chapterEl.value = ''; if (dueEl) dueEl.value = ''; }
    },

    async _cancelAssignment(childUid, assignmentId) {
      if (!confirm('Cancel this assignment?')) return;
      await cancelAssignment(childUid, assignmentId);
    },

    async _invite(role) {
      const input = document.getElementById('family-invite-email');
      const msg = document.getElementById('family-invite-msg');
      if (msg) { msg.textContent = 'Sending…'; msg.hidden = false; msg.style.color = 'var(--text-light)'; }
      const res = await sendInvite(input?.value, role);
      if (msg) { msg.textContent = res.msg; msg.hidden = false; msg.style.color = res.ok ? 'var(--primary)' : '#dc2626'; }
      if (res.ok && input) input.value = '';
      // Don't call refresh() here — it would re-render the mount and wipe the
      // message + email input before the user reads it. The Firestore listeners
      // will call refresh() naturally if any shared state changes.
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
