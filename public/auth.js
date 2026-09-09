// ── Firebase Auth + Firestore Sync ────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDv-mILuH9bFal_dqkdA35nM12XOW1-6S0",
  authDomain:        "rise.strat101.com",
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
  solvedRevealed:'rise.solvedRevealed'
};

(function () {
  'use strict';

  // ── Init ────────────────────────────────────────────────────────────────────
  let fbAuth, db;
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    db     = firebase.firestore();
  } catch (e) {
    console.warn('[Rise auth] Firebase init failed — login disabled.', e);
    window.riseAuth = { user: null, openModal() {}, signOut() {} };
    return;
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

  // ── Public sync API (called by app.js after each graded submit) ──────────────
  window.riseSync = {
    // Call after any graded attempt, bookmark change, or SA self-mark
    push: pushToCloud
  };

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
        <h2 class="auth-title">Sign in to Rise</h2>
        <p class="auth-sub">Your progress, bookmarks, and streaks sync across devices when you're signed in.</p>

        <div class="auth-tabs">
          <button class="auth-tab active" data-tab="google" onclick="riseAuth._tab('google')">Google</button>
          <button class="auth-tab" data-tab="email"  onclick="riseAuth._tab('email')">Email</button>
        </div>

        <div id="auth-panel-google" class="auth-panel">
          <button class="btn primary auth-google-btn" onclick="riseAuth._googleSignIn()">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <div id="auth-panel-email" class="auth-panel" hidden>
          <div id="auth-email-tabs" class="auth-sub-tabs">
            <button class="auth-sub-tab active" onclick="riseAuth._emailMode('signin')">Sign in</button>
            <button class="auth-sub-tab" onclick="riseAuth._emailMode('signup')">Create account</button>
          </div>
          <form onsubmit="riseAuth._emailSubmit(event)" class="auth-form">
            <label class="auth-label">Email
              <input id="auth-email-input" type="email" autocomplete="email" required placeholder="you@example.com">
            </label>
            <label class="auth-label">Password
              <input id="auth-pw-input" type="password" autocomplete="current-password" required placeholder="Password" minlength="6">
            </label>
            <button type="submit" id="auth-email-btn" class="btn primary" style="width:100%">Sign in</button>
          </form>
          <button class="auth-reset-link" onclick="riseAuth._resetPassword()">Forgot password?</button>
        </div>

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

    _tab(name) {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
      document.getElementById('auth-panel-google').hidden = name !== 'google';
      document.getElementById('auth-panel-email').hidden  = name !== 'email';
      showError('');
    },

    _emailMode(mode) {
      _emailSignup = mode === 'signup';
      document.querySelectorAll('.auth-sub-tab').forEach((t, i) => t.classList.toggle('active', _emailSignup ? i === 1 : i === 0));
      const btn = document.getElementById('auth-email-btn');
      const pw  = document.getElementById('auth-pw-input');
      if (btn) btn.textContent = _emailSignup ? 'Create account' : 'Sign in';
      if (pw)  pw.setAttribute('autocomplete', _emailSignup ? 'new-password' : 'current-password');
      showError('');
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
      try {
        if (_emailSignup) {
          await fbAuth.createUserWithEmailAndPassword(email, pw);
        } else {
          await fbAuth.signInWithEmailAndPassword(email, pw);
        }
        this.closeModal();
      } catch (err) {
        showError(_friendlyError(err));
      }
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

    async signOut() {
      if (currentUser) await pushToCloud(); // final push before signing out
      stopLiveListener();
      await fbAuth.signOut();
    }
  };

  // ── Auth state listener ──────────────────────────────────────────────────────
  fbAuth.onAuthStateChanged(async user => {
    currentUser = user || null;
    if (user) {
      // Pull cloud → local (merge), then push local → cloud, then start live listener
      await pullFromCloud();
      await pushToCloud();
      startLiveListener();
    } else {
      stopLiveListener();
    }
    if (typeof app !== 'undefined' && app.render) app.render();
  });

  // ── Error messages ───────────────────────────────────────────────────────────
  function _friendlyError(e) {
    const map = {
      'auth/invalid-email':           'Invalid email address.',
      'auth/user-not-found':          'No account with that email.',
      'auth/wrong-password':          'Incorrect password.',
      'auth/email-already-in-use':    'An account with that email already exists.',
      'auth/weak-password':           'Password must be at least 6 characters.',
      'auth/too-many-requests':       'Too many attempts — try again later.',
      'auth/popup-closed-by-user':    '',
      'auth/cancelled-popup-request': '',
      'auth/network-request-failed':  'Network error — check your connection.',
    };
    return map[e.code] || e.message || 'Something went wrong.';
  }
})();
