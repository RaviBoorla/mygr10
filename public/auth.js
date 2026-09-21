// ── Firebase Auth + Firestore Sync ────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDv-mILuH9bFal_dqkdA35nM12XOW1-6S0",
  authDomain:        "rise-511c6.firebaseapp.com",
  projectId:         "rise-511c6",
  storageBucket:     "rise-511c6.firebasestorage.app",
  messagingSenderId: "226917606953",
  appId:             "1:226917606953:web:c3f108c2c29ab2acc95e38",
  measurementId:     "G-VCPY26R09E"
};

// localStorage keys that are synced to Firestore (keyed as Firestore doc names)
// draft and results are session-only — not synced.
const SYNC_KEYS = {
  progress:      'rise.progress',
  bookmarks:     'rise.bookmarks',
  streak:        'rise.streak',
  saDrafts:      'rise.saDrafts',
  solvedRevealed:'rise.solvedRevealed',
  aiConfig:      'rise-ai-config-sync',  // provider/model/endpoint only — apiKey never leaves device
  aiHistory:     'rise-ai-history'       // Cloé chat history — synced across devices
};

(function () {
  'use strict';

  // ── Init ────────────────────────────────────────────────────────────────────
  let fbAuth, db;
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    // Firestore loaded lazily on first sign-in (see _ensureFirestore)
  } catch (e) {
    console.warn('[Rise auth] Firebase init failed — login disabled.', e);
    window.riseAuth = { user: null, openModal() {}, signOut() {} };
    return;
  }

  // Load firebase-firestore-compat.js on demand and init db once
  function _ensureFirestore() {
    return new Promise((resolve, reject) => {
      if (db) return resolve();
      if (window.firebase && typeof firebase.firestore === 'function') {
        db = firebase.firestore(); return resolve();
      }
      const s = document.createElement('script');
      s.src = 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js';
      s.onload = () => { db = firebase.firestore(); resolve(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // ── State ───────────────────────────────────────────────────────────────────
  let currentUser  = null;
  let _unsubscribe = null; // Firestore real-time listener teardown

  // ── Firestore helpers ────────────────────────────────────────────────────────
  function userDoc(name) {
    return db.collection('users').doc(currentUser.uid).collection('sync').doc(name);
  }

  // Push all localStorage sync keys up to Firestore
  async function pushToCloud() {
    if (!currentUser) return;
    const batch = db.batch();
    for (const [name, lsKey] of Object.entries(SYNC_KEYS)) {
      try {
        const raw = localStorage.getItem(lsKey);
        const data = raw ? JSON.parse(raw) : {};
        batch.set(userDoc(name), { _v: Date.now(), data });
      } catch (_) {}
    }
    await batch.commit();
  }

  // Pull Firestore docs down and merge into localStorage.
  // Firestore wins for progress/bookmarks/streak (cross-device truth).
  // saDrafts and solvedRevealed merge (union) so reveals on either device are kept.
  async function pullFromCloud() {
    if (!currentUser) return;
    for (const [name, lsKey] of Object.entries(SYNC_KEYS)) {
      try {
        const snap = await userDoc(name).get();
        if (!snap.exists) continue;
        const cloudData = snap.data().data || {};
        if (name === 'saDrafts' || name === 'solvedRevealed') {
          // merge: local union cloud (don't lose local reveals)
          const raw   = localStorage.getItem(lsKey);
          const local = raw ? JSON.parse(raw) : {};
          const merged = Object.assign({}, cloudData, local);
          localStorage.setItem(lsKey, JSON.stringify(merged));
        } else if (name === 'aiConfig') {
          // Merge cloud provider/model into local config — but keep local apiKey
          const localRaw = localStorage.getItem('rise-ai-config');
          const local = localRaw ? JSON.parse(localRaw) : {};
          const merged = { ...local, ...cloudData, apiKey: local.apiKey || '' };
          localStorage.setItem('rise-ai-config', JSON.stringify(merged));
          localStorage.setItem(lsKey, JSON.stringify(cloudData)); // keep sync copy current
        } else if (name === 'aiHistory') {
          // Cloud wins; pick whichever array is longer (more history)
          const localRaw = localStorage.getItem(lsKey);
          const local = localRaw ? JSON.parse(localRaw) : [];
          const cloud = Array.isArray(cloudData) ? cloudData : [];
          const winner = cloud.length >= local.length ? cloud : local;
          localStorage.setItem(lsKey, JSON.stringify(winner));
          // Reload in-memory history if AI panel is initialised
          if (typeof aiState !== 'undefined') aiState.messages = winner;
        } else {
          // cloud wins (authoritative cross-device state)
          localStorage.setItem(lsKey, JSON.stringify(cloudData));
        }
      } catch (_) {}
    }
  }

  // Start a real-time listener so changes made on another device arrive live.
  // We only listen to the streak doc (lightweight) — the others are pulled once
  // on login and pushed on every submit (app.js already calls riseSync.push()).
  function startLiveListener() {
    stopLiveListener();
    _unsubscribe = userDoc('streak').onSnapshot(snap => {
      if (!snap.exists) return;
      try {
        const cloudStreak = snap.data().data || {};
        const raw   = localStorage.getItem(SYNC_KEYS.streak);
        const local = raw ? JSON.parse(raw) : {};
        // Only overwrite if cloud version is newer
        const cloudTs = snap.data()._v || 0;
        const localTs = local._ts || 0;
        if (cloudTs > localTs) {
          localStorage.setItem(SYNC_KEYS.streak, JSON.stringify(cloudStreak));
          if (typeof app !== 'undefined' && app.render) app.render();
        }
      } catch (_) {}
    }, () => {}); // ignore listener errors silently
  }

  function stopLiveListener() {
    if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }
  }

  // Wipes every synced key both locally and in Firestore for the current
  // account. Recovery path for contamination that predates the shared-device
  // guard above (clearSyncKeysIfDifferentAccount only stops it going forward —
  // it can't undo data already pushed to Firestore before that fix existed).
  async function resetSyncedData() {
    if (!currentUser) return;
    Object.values(SYNC_KEYS).forEach(k => localStorage.removeItem(k));
    const batch = db.batch();
    for (const name of Object.keys(SYNC_KEYS)) {
      batch.set(userDoc(name), { _v: Date.now(), data: {} });
    }
    // familySummary (public/family.js) is a separate doc, not one of SYNC_KEYS —
    // it's derived FROM progress, so contamination there (a guardian's own
    // attempts bleeding into a linked child's summary on a shared device)
    // survives a plain progress reset unless cleared here too.
    batch.set(db.collection('users').doc(currentUser.uid).collection('sync').doc('familySummary'),
      { byGradeBoard: {}, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
    await batch.commit();
    if (typeof app !== 'undefined' && app.render) app.render();
  }

  // ── Public sync API (called by app.js after each graded submit) ──────────────
  window.riseSync = {
    push: pushToCloud,
    reset: resetSyncedData
  };

  // ── Profile (nickname, country, city) ────────────────────────────────────────
  let _profile = { nickname: '', country: '', city: '' };

  function profileDoc() {
    return db.collection('users').doc(currentUser.uid).collection('sync').doc('profile');
  }

  async function loadProfile() {
    try {
      const snap = await profileDoc().get();
      if (snap.exists) _profile = { nickname: '', country: '', city: '', ...snap.data() };
    } catch (_) {}
  }

  async function saveProfile(nickname, country, city) {
    _profile = { nickname, country, city };
    try { await profileDoc().set(_profile); } catch (_) {}
  }

  // ── Profile modal ─────────────────────────────────────────────────────────────
  const PROFILE_MODAL_ID = 'rise-profile-modal';

  function injectProfileModal() {
    if (document.getElementById(PROFILE_MODAL_ID)) return;
    const el = document.createElement('div');
    el.id = PROFILE_MODAL_ID;
    el.setAttribute('hidden', '');
    el.innerHTML = `
      <div class="auth-backdrop" onclick="riseAuth.closeProfile()"></div>
      <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="My profile">
        <div class="auth-dialog-header">
          <h2 class="auth-title">My Profile</h2>
          <button class="auth-close" onclick="riseAuth.closeProfile()" aria-label="Close">&times;</button>
        </div>
        <p class="auth-sub">Used in Arena group mode to identify you to other players.</p>
        <form onsubmit="riseAuth._saveProfile(event)" class="auth-form">
          <label class="auth-label">Screen Name
            <input id="profile-nickname" type="text" maxlength="30" placeholder="e.g. StarStudent42" autocomplete="off">
          </label>
          <label class="auth-label">Country
            <input id="profile-country" type="text" maxlength="50" placeholder="e.g. India" autocomplete="off">
          </label>
          <label class="auth-label">City
            <input id="profile-city" type="text" maxlength="50" placeholder="e.g. Mumbai" autocomplete="off">
          </label>
          <button type="submit" class="btn primary" style="width:100%">Save</button>
        </form>
        <p id="profile-msg" class="auth-error" style="color:var(--primary)" hidden></p>
        <div id="verify-email-banner" class="verify-email-banner" hidden>
          <p class="auth-sub" style="margin:0">Your email isn't verified yet — required before you can send or accept a family link.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button type="button" class="btn small ghost" onclick="riseAuth.resendVerification()">Resend verification email</button>
            <button type="button" class="btn small ghost" onclick="riseAuth.checkVerifiedNow()">I've verified — check again</button>
          </div>
        </div>
        <div id="family-section-mount"></div>
        <div class="profile-danger-zone">
          <button type="button" class="auth-reset-link" onclick="riseAuth.confirmReset()">Reset my synced data</button>
          <p class="auth-sub" style="margin-top:2px">Clears your progress, bookmarks, streak, and shared family summary — on this device and in the cloud. Use this if a shared device mixed up whose attempts are whose. Cannot be undone.</p>
        </div>
      </div>`;
    document.body.appendChild(el);
  }

  // Re-checks emailVerified whenever the tab regains focus while the profile
  // modal is open — covers "clicked Resend, verified in another tab, switched
  // back to this same still-open modal" without needing to close and reopen it.
  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState !== 'visible') return;
    const modal = document.getElementById(PROFILE_MODAL_ID);
    if (!modal || modal.hidden || !currentUser) return;
    const verified = await window.riseAuth.refreshEmailVerified();
    const banner = document.getElementById('verify-email-banner');
    if (banner) banner.hidden = verified;
  });

  // ── Modal markup ─────────────────────────────────────────────────────────────
  const MODAL_ID = 'rise-auth-modal';

  function injectModal() {
    if (document.getElementById(MODAL_ID)) return;
    const el = document.createElement('div');
    el.id = MODAL_ID;
    el.setAttribute('hidden', '');
    el.innerHTML = `
      <div class="auth-backdrop" onclick="riseAuth.closeModal()"></div>
      <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="Sign in to Rise">
        <button class="auth-close" onclick="riseAuth.closeModal()" aria-label="Close">&times;</button>

        <div class="auth-sub-tabs">
          <button class="auth-sub-tab active" onclick="riseAuth._emailMode('signin')">Sign in</button>
          <button class="auth-sub-tab" onclick="riseAuth._emailMode('signup')">Create account</button>
        </div>

        <form onsubmit="riseAuth._emailSubmit(event)" class="auth-form">
          <label class="auth-label">Email
            <input id="auth-email-input" type="email" autocomplete="email" required placeholder="you@example.com">
          </label>
          <label class="auth-label">Password
            <div class="auth-pw-wrap">
              <input id="auth-pw-input" type="password" autocomplete="current-password" required placeholder="Password" minlength="8">
              <button type="button" class="auth-pw-toggle" title="Show password" onclick="riseAuth._togglePw(this)">👁️</button>
            </div>
            <span id="auth-pw-hint" class="auth-pw-hint" hidden>Min 8 chars · uppercase · lowercase · number · special character</span>
          </label>
          <button type="submit" id="auth-email-btn" class="btn primary" style="width:100%">Sign in</button>
        </form>

        <button class="auth-reset-link" onclick="riseAuth._resetPassword()">Forgot password?</button>

        <div class="auth-divider"><span>or</span></div>

        <button class="btn ghost auth-google-btn" onclick="riseAuth._googleSignIn()">
          <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
          </svg>
          Sign in with Google
        </button>

        <p id="auth-error" class="auth-error" hidden></p>
      </div>`;
    document.body.appendChild(el);
  }

  function showError(msg) {
    const el = document.getElementById('auth-error');
    if (!el) return;
    el.textContent = msg;
    el.hidden = !msg;
  }

  let _emailSignup = false;

  // ── Public auth API ──────────────────────────────────────────────────────────
  window.riseAuth = {
    get user() { return currentUser; },

    openModal() {
      injectModal();
      const m = document.getElementById(MODAL_ID);
      if (m) { m.hidden = false; showError(''); }
    },

    closeModal() {
      const m = document.getElementById(MODAL_ID);
      if (m) m.hidden = true;
    },

    _emailMode(mode) {
      _emailSignup = mode === 'signup';
      document.querySelectorAll('.auth-sub-tab').forEach((t, i) => t.classList.toggle('active', _emailSignup ? i === 1 : i === 0));
      const btn  = document.getElementById('auth-email-btn');
      const pw   = document.getElementById('auth-pw-input');
      const hint = document.getElementById('auth-pw-hint');
      if (btn)  btn.textContent = _emailSignup ? 'Create account' : 'Sign in';
      if (pw)   pw.setAttribute('autocomplete', _emailSignup ? 'new-password' : 'current-password');
      if (hint) hint.hidden = !_emailSignup;
      showError('');
    },

    _togglePw(btn) {
      const pw = document.getElementById('auth-pw-input');
      if (!pw) return;
      const show = pw.type === 'password';
      pw.type = show ? 'text' : 'password';
      btn.textContent = show ? '🙈' : '👁️';
      btn.title = show ? 'Hide password' : 'Show password';
    },

    async _googleSignIn() {
      showError('');
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await fbAuth.signInWithPopup(provider);
        this.closeModal();
      } catch (e) {
        showError(_friendlyError(e));
      }
    },

    async _emailSubmit(e) {
      e.preventDefault();
      showError('');
      const email = document.getElementById('auth-email-input')?.value.trim();
      const pw    = document.getElementById('auth-pw-input')?.value;
      if (_emailSignup) {
        const pwErr = _validatePassword(pw);
        if (pwErr) { showError(pwErr); return; }
      }
      try {
        if (_emailSignup) {
          const cred = await fbAuth.createUserWithEmailAndPassword(email, pw);
          // Family linking (public/family.js) gates invite send/accept on
          // emailVerified — without this call that account could never pass
          // that check, since Firebase never sends the email on its own.
          await cred.user.sendEmailVerification().catch(() => {});
        } else {
          await fbAuth.signInWithEmailAndPassword(email, pw);
        }
        this.closeModal();
      } catch (err) {
        showError(_friendlyError(err));
      }
    },

    async resendVerification() {
      if (!currentUser) return;
      try {
        await currentUser.sendEmailVerification();
        alert('Verification email sent — check your inbox (and spam folder).');
      } catch (e) {
        alert('Could not send verification email: ' + (e.message || e.code || 'unknown error'));
      }
    },

    async checkVerifiedNow() {
      const verified = await this.refreshEmailVerified();
      const banner = document.getElementById('verify-email-banner');
      if (banner) banner.hidden = verified;
      if (!verified) alert("Still not showing as verified. Make sure you clicked the link in the email (it should show a \"Your email has been verified\" confirmation page), then try this again.");
    },

    // Firebase caches emailVerified on the client — it only updates after the
    // user clicks the link in their email AND the app re-fetches their user
    // record. Call this before any emailVerified check that might otherwise
    // be stale (e.g. right after they say they clicked the link).
    async refreshEmailVerified() {
      if (!currentUser) return false;
      try { await currentUser.reload(); } catch (e) { console.warn('[Rise auth] reload() failed:', e); }
      return !!currentUser.emailVerified;
    },

    async _resetPassword() {
      const email = document.getElementById('auth-email-input')?.value.trim();
      if (!email) { showError('Enter your email address above first.'); return; }
      try {
        await fbAuth.sendPasswordResetEmail(email);
        showError('Reset email sent — check your inbox.');
      } catch (err) {
        showError(_friendlyError(err));
      }
    },

    async openProfile() {
      injectProfileModal();
      document.getElementById('profile-nickname').value = _profile.nickname || '';
      document.getElementById('profile-country').value  = _profile.country  || '';
      document.getElementById('profile-city').value     = _profile.city     || '';
      const msg = document.getElementById('profile-msg');
      if (msg) msg.hidden = true;
      const mount = document.getElementById('family-section-mount');
      if (mount && window.riseFamily) mount.innerHTML = window.riseFamily.renderProfileSection();
      document.getElementById(PROFILE_MODAL_ID).hidden = false;
      // Re-fetch verified status (it only updates client-side after a reload)
      // so someone who just clicked the email link sees the banner clear
      // without having to fully reload the app.
      const verified = await this.refreshEmailVerified();
      const banner = document.getElementById('verify-email-banner');
      if (banner) banner.hidden = verified;
    },

    async confirmReset() {
      if (!confirm('Reset all your synced progress, bookmarks, and streak? This cannot be undone.')) return;
      await resetSyncedData();
      this.closeProfile();
    },

    closeProfile() {
      const m = document.getElementById(PROFILE_MODAL_ID);
      if (m) m.hidden = true;
    },

    async _saveProfile(e) {
      e.preventDefault();
      const nickname = document.getElementById('profile-nickname').value.trim();
      const country  = document.getElementById('profile-country').value.trim();
      const city     = document.getElementById('profile-city').value.trim();
      await saveProfile(nickname, country, city);
      const msg = document.getElementById('profile-msg');
      if (msg) { msg.textContent = 'Saved!'; msg.hidden = false; }
      setTimeout(() => this.closeProfile(), 800);
    },

    async signOut() {
      if (currentUser) await pushToCloud(); // final push before signing out
      stopLiveListener();
      _profile = { nickname: '', country: '', city: '' };
      await fbAuth.signOut();
    }
  };

  // ── Auth state listener ──────────────────────────────────────────────────────
  const LAST_UID_KEY = 'rise.lastUid';

  // Guards against shared-device bleed (e.g. a parent's family/guardian account
  // used on the same tablet as their child's). pullFromCloud() silently skips a
  // sync key when that account has no cloud doc for it yet (its very first
  // sign-in) — without this guard, whatever a DIFFERENT account previously left
  // in localStorage on this device would be adopted as this account's own data
  // and then pushed to Firestore under their uid. Clearing first, only on an
  // actual account switch, still allows a genuine guest's local progress to
  // carry over into their own first sign-in (the documented, intended behavior).
  function clearSyncKeysIfDifferentAccount(uid) {
    const lastUid = localStorage.getItem(LAST_UID_KEY);
    if (lastUid && lastUid !== uid) {
      Object.values(SYNC_KEYS).forEach(k => localStorage.removeItem(k));
    }
    localStorage.setItem(LAST_UID_KEY, uid);
  }

  fbAuth.onAuthStateChanged(async user => {
    currentUser = user || null;
    if (user) {
      clearSyncKeysIfDifferentAccount(user.uid);
      await _ensureFirestore();
      await pullFromCloud();
      await pushToCloud();
      await loadProfile();
      startLiveListener();
      // Refresh AI config in memory from synced localStorage
      if (typeof aiState !== 'undefined' && typeof aiLoadConfig === 'function') {
        try { aiState.config = aiLoadConfig(); } catch (_) {}
      }
    } else {
      stopLiveListener();
    }
    if (typeof app !== 'undefined' && app.render) app.render();
  });

  // ── Password validation (signup only) ───────────────────────────────────────
  function _validatePassword(pw) {
    if (pw.length < 8)          return 'Password must be at least 8 characters.';
    if (!/[A-Z]/.test(pw))      return 'Password must include at least one uppercase letter.';
    if (!/[a-z]/.test(pw))      return 'Password must include at least one lowercase letter.';
    if (!/[0-9]/.test(pw))      return 'Password must include at least one number.';
    if (!/[^A-Za-z0-9]/.test(pw)) return 'Password must include at least one special character.';
    return '';
  }

  // ── Error messages ───────────────────────────────────────────────────────────
  function _friendlyError(e) {
    const map = {
      'auth/invalid-email':           'Invalid email address.',
      'auth/user-not-found':          'No account with that email.',
      'auth/wrong-password':          'Incorrect password.',
      'auth/email-already-in-use':    'An account with that email already exists.',
      'auth/weak-password':           'Password too weak — min 8 chars with uppercase, lowercase, number, and special character.',
      'auth/too-many-requests':       'Too many attempts — try again later.',
      'auth/popup-closed-by-user':    '',
      'auth/cancelled-popup-request': '',
      'auth/network-request-failed':  'Network error — check your connection.',
    };
    return map[e.code] || e.message || 'Something went wrong.';
  }
})();
