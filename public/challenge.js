// ── Arena Async Challenge Codes ───────────────────────────────────────────────
// Stores challenge data in Firestore under challenges/{CODE}.
// Requires firebase + firebase-firestore-compat already loaded (from index.html).

(function () {
  'use strict';

  const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

  function db() {
    return firebase.firestore();
  }

  function challengeRef(code) {
    return db().collection('challenges').doc(code.toUpperCase());
  }

  function genCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I/O to avoid confusion
    let code = '';
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  // ── Create ───────────────────────────────────────────────────────────────────
  // Called from game-over screen after a solo run.
  // questionIds: array of question IDs in the order they were served in the run.
  async function createChallenge({ board, grade, subjects, questionIds, score, stage, combo }) {
    const screenName = window.riseAuth?.user
      ? ((await _getProfile())?.nickname || window.riseAuth.user.displayName || window.riseAuth.user.email?.split('@')[0] || 'Anonymous')
      : 'Anonymous';

    let code, attempts = 0;
    do {
      code = genCode();
      const snap = await challengeRef(code).get();
      if (!snap.exists) break;
      attempts++;
    } while (attempts < 5);

    const doc = {
      code,
      board,
      grade,
      subjects,
      questionIds,
      createdAt: Date.now(),
      creatorName: screenName,
      results: [{
        screenName,
        score,
        stage,
        combo,
        completedAt: Date.now(),
        isCreator: true
      }]
    };

    await challengeRef(code).set(doc);
    return code;
  }

  // ── Load ─────────────────────────────────────────────────────────────────────
  async function loadChallenge(code) {
    const snap = await challengeRef(code).get();
    if (!snap.exists) throw new Error('Challenge not found.');
    const data = snap.data();
    if (Date.now() - data.createdAt > EXPIRY_MS) throw new Error('This challenge has expired (7-day limit).');
    return data;
  }

  // ── Submit result ─────────────────────────────────────────────────────────────
  async function submitChallengeResult(code, { score, stage, combo }) {
    const screenName = window.riseAuth?.user
      ? ((await _getProfile())?.nickname || window.riseAuth.user.displayName || window.riseAuth.user.email?.split('@')[0] || 'Anonymous')
      : 'Anonymous';

    const entry = { screenName, score, stage, combo, completedAt: Date.now() };
    await challengeRef(code).update({
      results: firebase.firestore.FieldValue.arrayUnion(entry)
    });
  }

  // ── Fetch leaderboard ─────────────────────────────────────────────────────────
  async function fetchLeaderboard(code) {
    const snap = await challengeRef(code).get();
    if (!snap.exists) return [];
    const results = snap.data().results || [];
    return results.slice().sort((a, b) => b.score - a.score);
  }

  // ── Profile helper ────────────────────────────────────────────────────────────
  async function _getProfile() {
    try {
      const uid = window.riseAuth?.user?.uid;
      if (!uid) return null;
      const snap = await firebase.firestore().collection('users').doc(uid).collection('sync').doc('profile').get();
      return snap.exists ? snap.data() : null;
    } catch (_) { return null; }
  }

  // ── Public API ────────────────────────────────────────────────────────────────
  window.riseChallenge = { createChallenge, loadChallenge, submitChallengeResult, fetchLeaderboard };
})();
