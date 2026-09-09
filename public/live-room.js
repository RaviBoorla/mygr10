// Arena Live Room — real-time synchronous multiplayer quiz.
// Reads globals from app.js: state, LS, bankSlug, loadBank, shuffle, esc, app.
// Reads from arena.js: ARENA_SUBJECTS, SCIENCE_VIRTUAL, stageSpec (indirectly).
// Requires firebase + firebase-firestore-compat already loaded.

(function () {
  'use strict';

  // ── Constants ─────────────────────────────────────────────────────────────
  const ROOM_EXPIRY_MS = 4 * 60 * 60 * 1000; // 4 hours
  const ANON_KEY = 'rise.live.anonId';

  // ── Helpers ───────────────────────────────────────────────────────────────
  function db() { return firebase.firestore(); }
  function roomRef(code) { return db().collection('rooms').doc(code.toUpperCase()); }

  function genCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    let c = '';
    for (let i = 0; i < 6; i++) c += chars[Math.floor(Math.random() * chars.length)];
    return c;
  }

  function myId() {
    if (window.riseAuth?.user?.uid) return window.riseAuth.user.uid;
    let id = sessionStorage.getItem(ANON_KEY);
    if (!id) { id = 'anon-' + Math.random().toString(36).slice(2, 10); sessionStorage.setItem(ANON_KEY, id); }
    return id;
  }

  function myName() {
    if (window.riseAuth?.user) {
      const p = window._liveProfile;
      return p?.nickname || window.riseAuth.user.displayName || window.riseAuth.user.email?.split('@')[0] || 'Player';
    }
    return 'Guest';
  }

  function isHost() { return _room && _room.hostUid === myId(); }

  // ── Live room state ───────────────────────────────────────────────────────
  let _room = null;       // latest snapshot data
  let _code = null;       // active room code
  let _unsub = null;      // Firestore unsubscribe
  let _timerInterval = null;
  let _myAnswer = {};     // { [qIdx]: answerIdx } local cache so we don't re-write

  function _clearTimer() {
    if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
  }

  // ── Question bank loading ─────────────────────────────────────────────────
  const LIVE_EXCLUDE = new Set(['Hindi', 'English']);

  async function _loadBanksForRoom(board, grade, subjects) {
    const banks = {};
    const virtualSubjs = subjects.filter(s =>
      window.SCIENCE_VIRTUAL?.has(s) &&
      !bankSlug(s, board, grade) &&
      !!bankSlug('Science', board, grade)
    );
    const directSubjs = subjects.filter(s => !virtualSubjs.includes(s));
    const loaders = directSubjs.map(s => loadBank(s, board, grade).then(qs => { banks[s] = qs; }).catch(() => {}));
    if (virtualSubjs.length) {
      loaders.push(loadBank('Science', board, grade).then(qs => {
        virtualSubjs.forEach(s => { banks[s] = qs.filter(q => q.subject === s); });
      }).catch(() => {}));
    }
    await Promise.all(loaders);
    return banks;
  }

  // ── Create room ───────────────────────────────────────────────────────────
  async function liveCreateRoom({ board, grade, subjects, questionCount, timerSecs }) {
    const banks = await _loadBanksForRoom(board, grade, subjects);
    let pool = [];
    subjects.forEach(s => (banks[s] || []).forEach(q => pool.push({ ...q, _subject: s })));
    pool = shuffle(pool);
    const picked = pool.slice(0, questionCount);
    const questionIds = picked.map(q => q.id);

    let code, attempts = 0;
    do {
      code = genCode();
      const snap = await roomRef(code).get();
      if (!snap.exists) break;
      attempts++;
    } while (attempts < 5);

    const doc = {
      code,
      state: 'lobby',
      board, grade, subjects,
      questionIds,
      currentQ: -1,
      timerEnd: 0,
      timerSecs,
      createdAt: Date.now(),
      hostUid: myId(),
      hostName: myName(),
      players: { [myId()]: { name: myName(), joinedAt: Date.now() } },
      answers: {},
      scores: {},
    };
    await roomRef(code).set(doc);
    return code;
  }

  // ── Join room ─────────────────────────────────────────────────────────────
  async function liveJoinRoom(code) {
    code = code.toUpperCase().trim();
    const snap = await roomRef(code).get();
    if (!snap.exists) throw new Error('Room not found.');
    const data = snap.data();
    if (Date.now() - data.createdAt > ROOM_EXPIRY_MS) throw new Error('This room has expired.');
    if (data.state === 'done') throw new Error('This game has already ended.');

    await roomRef(code).update({
      [`players.${myId()}`]: { name: myName(), joinedAt: Date.now() }
    });
    return data;
  }

  // ── Subscribe to room ─────────────────────────────────────────────────────
  function liveSubscribe(code) {
    if (_unsub) { _unsub(); _unsub = null; }
    _code = code.toUpperCase();
    _unsub = roomRef(_code).onSnapshot(snap => {
      if (!snap.exists) return;
      const prev = _room ? _room.state : null;
      _room = snap.data();
      _handleRoomUpdate(prev);
    }, err => console.error('Live room listener error', err));
  }

  function liveUnsubscribe() {
    if (_unsub) { _unsub(); _unsub = null; }
    _clearTimer();
    _room = null;
    _code = null;
    _myAnswer = {};
  }

  // ── Handle Firestore updates ──────────────────────────────────────────────
  function _handleRoomUpdate(prevState) {
    if (!_room) return;
    const s = _room.state;

    if (s === 'question') {
      _clearTimer();
      const remaining = Math.max(0, _room.timerEnd - Date.now());
      // Host: auto-advance when timer expires
      if (isHost() && remaining > 0) {
        _timerInterval = setTimeout(() => _hostReveal(), remaining);
      }
    }

    // Re-render current live screen
    const cur = window.location.hash;
    if (cur.startsWith('#/live')) {
      app.render();
    }
  }

  // ── Host actions ──────────────────────────────────────────────────────────
  window.liveStart = async function () {
    if (!_room || !isHost()) return;
    const timerEnd = Date.now() + _room.timerSecs * 1000;
    await roomRef(_code).update({ state: 'question', currentQ: 0, timerEnd });
  };

  async function _hostReveal() {
    if (!_room || !isHost()) return;
    _clearTimer();
    // Calculate scores for current question
    const qIdx = _room.currentQ;
    const questionId = _room.questionIds[qIdx];
    const updates = { state: 'reveal' };

    // Load the correct answer index from bank (we stored questionIds, need bank data)
    // The host client has _liveHostBanks set during createRoom via _liveHostData
    const correctIdx = _liveHostData?.correctMap?.[questionId];
    if (correctIdx !== undefined) {
      const playerIds = Object.keys(_room.players);
      const timerEnd = _room.timerEnd;
      playerIds.forEach(pid => {
        const ans = _room.answers?.[pid]?.[qIdx];
        if (!ans) return;
        if (ans.answerIdx === correctIdx) {
          const secs = Math.max(0, (timerEnd - ans.answeredAt) / 1000);
          const pts = Math.round(100 + secs * 5);
          updates[`scores.${pid}`] = (_room.scores?.[pid] || 0) + pts;
        }
      });
    }
    await roomRef(_code).update(updates);
  }

  window.liveNext = async function () {
    if (!_room || !isHost()) return;
    const nextQ = _room.currentQ + 1;
    if (nextQ >= _room.questionIds.length) {
      await roomRef(_code).update({ state: 'done', currentQ: nextQ });
    } else {
      const timerEnd = Date.now() + _room.timerSecs * 1000;
      await roomRef(_code).update({ state: 'question', currentQ: nextQ, timerEnd });
    }
  };

  window.liveEnd = async function () {
    if (!_room || !isHost()) return;
    await roomRef(_code).update({ state: 'done' });
  };

  // ── Player action: answer ─────────────────────────────────────────────────
  window.liveAnswer = async function (displayIdx) {
    if (!_room || _room.state !== 'question') return;
    const qIdx = _room.currentQ;
    if (_myAnswer[qIdx] !== undefined) return; // already answered
    _myAnswer[qIdx] = displayIdx;

    // Map display idx back to original idx via _liveDisplayOrder
    const origIdx = (_liveDisplayOrder[qIdx] || [])[displayIdx] ?? displayIdx;
    await roomRef(_code).update({
      [`answers.${myId()}.${qIdx}`]: { answerIdx: origIdx, answeredAt: Date.now() }
    });
    app.render(); // re-render to grey out buttons
  };

  // ── Display order (per-question shuffle, deterministic per client) ─────────
  // Stored locally so buttons stay stable across re-renders during a question.
  const _liveDisplayOrder = {}; // { [qIdx]: [origIdx, ...] }
  let _liveQCache = {};         // { [id]: questionObject } populated on join/create
  let _liveHostData = null;     // { correctMap: { [id]: correctIdx } } — host only

  function _getDisplayOrder(qIdx) {
    if (!_liveDisplayOrder[qIdx]) {
      const order = [0, 1, 2, 3];
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      _liveDisplayOrder[qIdx] = order;
    }
    return _liveDisplayOrder[qIdx];
  }

  function _getQuestion(qIdx) {
    if (!_room) return null;
    const id = _room.questionIds[qIdx];
    return _liveQCache[id] || null;
  }

  // ── Load question cache from banks ────────────────────────────────────────
  async function _loadQCache(board, grade, subjects, questionIds) {
    const banks = await _loadBanksForRoom(board, grade, subjects);
    const byId = {};
    subjects.forEach(s => (banks[s] || []).forEach(q => { byId[q.id] = { ...q, _subject: s }; }));
    questionIds.forEach(id => { if (byId[id]) _liveQCache[id] = byId[id]; });
    // Build correct-answer map for host scoring
    _liveHostData = { correctMap: {} };
    questionIds.forEach(id => { if (byId[id]) _liveHostData.correctMap[id] = byId[id].correct; });
  }

  // ── Render: Lobby ─────────────────────────────────────────────────────────
  function renderLiveLobby() {
    if (!_room) return '<div class="screen"><p>Loading…</p></div>';
    const players = Object.values(_room.players || {});
    const playerList = players.map(p => `<li class="live-player-item">${esc(p.name)}</li>`).join('');
    const iAm = isHost();
    return `
      <div class="screen live-screen">
        <h1 class="live-title">⚡ Live Room</h1>
        <div class="live-code-card">
          <p class="live-code-label">Room code — share with friends</p>
          <div class="live-code-row">
            <span class="live-code-text">${esc(_code)}</span>
            <button class="btn small ghost" onclick="navigator.clipboard.writeText('${esc(_code)}').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})">Copy</button>
          </div>
        </div>
        <div class="live-players-box">
          <p class="live-players-label">Players <span class="live-player-count">${players.length}</span></p>
          <ul class="live-player-list">${playerList}</ul>
        </div>
        ${iAm
          ? `<div class="live-host-actions">
               <button class="btn primary live-start-btn" onclick="liveStart()" ${players.length < 1 ? 'disabled' : ''}>▶ Start Game</button>
               <button class="btn ghost" onclick="liveLeave()">Leave</button>
             </div>`
          : `<p class="live-waiting">Waiting for host to start the game…</p>
             <button class="btn ghost" onclick="liveLeave()">Leave</button>`}
        <p class="live-host-note">Host: ${esc(_room.hostName)} · ${_room.questionIds.length} questions · ${_room.timerSecs}s per question</p>
      </div>`;
  }

  // ── Render: Question ──────────────────────────────────────────────────────
  function renderLiveQuestion() {
    if (!_room) return '<div class="screen"><p>Loading…</p></div>';
    const qIdx = _room.currentQ;
    const q = _getQuestion(qIdx);
    const total = _room.questionIds.length;
    const remaining = Math.max(0, Math.ceil((_room.timerEnd - Date.now()) / 1000));
    const pct = Math.round((remaining / _room.timerSecs) * 100);
    const answeredCount = Object.values(_room.answers || {}).filter(a => a[qIdx] !== undefined).length;
    const playerCount = Object.keys(_room.players || {}).length;
    const myAns = _myAnswer[qIdx];
    const iAm = isHost();

    if (!q) {
      return `<div class="screen live-screen"><p class="live-loading">Loading question…</p></div>`;
    }

    const order = _getDisplayOrder(qIdx);
    const opts = order.map((origIdx, displayIdx) => {
      const chosen = myAns === displayIdx;
      return `<button class="live-opt-btn ${myAns !== undefined ? 'answered' : ''} ${chosen ? 'chosen' : ''}"
        onclick="${myAns === undefined ? `liveAnswer(${displayIdx})` : ''}"
        ${myAns !== undefined ? 'disabled' : ''}>
        <span class="live-opt-letter">${'ABCD'[displayIdx]}</span>
        <span class="live-opt-text">${esc(q.options[origIdx])}</span>
      </button>`;
    }).join('');

    const waitDots = myAns !== undefined ? '<p class="live-answered-msg">✓ Answer locked in — waiting for others…</p>' : '';

    return `
      <div class="screen live-screen" id="live-q-screen">
        <div class="live-q-hud">
          <span class="live-q-num">Q ${qIdx + 1} / ${total}</span>
          <span class="live-answered-count">${answeredCount} / ${playerCount} answered</span>
          ${iAm ? `<button class="btn small ghost live-skip-btn" onclick="liveNext()">Skip →</button>` : ''}
        </div>
        <div class="live-timer-row">
          <div class="live-timer-wrap"><div class="live-timer-bar ${remaining <= 5 ? 'low' : ''}" id="live-timer-bar" style="width:${pct}%"></div></div>
          <span class="live-timer-label" id="live-timer-secs">${remaining}s</span>
        </div>
        <div class="live-subject-tag">${esc(q._subject || '')}</div>
        <p class="live-q-text">${esc(q.text)}</p>
        <div class="live-opts-grid">${opts}</div>
        ${waitDots}
      </div>`;
  }

  // ── Render: Reveal ────────────────────────────────────────────────────────
  function renderLiveReveal() {
    if (!_room) return '<div class="screen"><p>Loading…</p></div>';
    const qIdx = _room.currentQ;
    const q = _getQuestion(qIdx);
    const total = _room.questionIds.length;
    const iAm = isHost();

    if (!q) return `<div class="screen live-screen"><p>Loading…</p></div>`;

    const order = _getDisplayOrder(qIdx);
    const correctDisplay = order.indexOf(q.correct);
    const myAns = _myAnswer[qIdx];
    const myOrigAns = myAns !== undefined ? order[myAns] : undefined;
    const iGotIt = myOrigAns === q.correct;

    const opts = order.map((origIdx, displayIdx) => {
      const isCorrect = origIdx === q.correct;
      const iChose = myAns === displayIdx;
      return `<div class="live-opt-reveal ${isCorrect ? 'correct' : ''} ${iChose && !isCorrect ? 'wrong' : ''}">
        <span class="live-opt-letter">${'ABCD'[displayIdx]}</span>
        <span class="live-opt-text">${esc(q.options[origIdx])}</span>
        ${isCorrect ? '<span class="live-correct-tick">✓</span>' : ''}
      </div>`;
    }).join('');

    // Running leaderboard (top 5)
    const scores = _room.scores || {};
    const players = _room.players || {};
    const ranked = Object.entries(scores)
      .map(([uid, sc]) => ({ name: players[uid]?.name || 'Player', score: sc }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    const lbRows = ranked.map((r, i) =>
      `<tr><td>${i + 1}</td><td>${esc(r.name)}</td><td>${r.score.toLocaleString()}</td></tr>`
    ).join('');

    return `
      <div class="screen live-screen">
        <div class="live-reveal-header">
          <span class="live-q-num">Q ${qIdx + 1} / ${total} — ${iGotIt ? '✓ Correct!' : myAns === undefined ? '— Timed out' : '✗ Wrong'}</span>
        </div>
        <p class="live-q-text">${esc(q.text)}</p>
        <div class="live-opts-reveal">${opts}</div>
        ${q.explanation ? `<p class="live-explanation">${esc(q.explanation)}</p>` : ''}
        ${lbRows ? `<div class="live-lb-mini">
          <p class="live-lb-mini-title">Leaderboard</p>
          <table class="arena-lb-table"><tbody>${lbRows}</tbody></table>
        </div>` : ''}
        ${iAm
          ? `<div class="live-host-actions">
               <button class="btn primary" onclick="liveNext()">${qIdx + 1 < total ? 'Next Question →' : 'See Final Results'}</button>
               <button class="btn ghost" onclick="liveEnd()">End Game</button>
             </div>`
          : `<p class="live-waiting">Waiting for host to advance…</p>`}
      </div>`;
  }

  // ── Render: Done ──────────────────────────────────────────────────────────
  function renderLiveDone() {
    if (!_room) return '<div class="screen"><p>Loading…</p></div>';
    const scores = _room.scores || {};
    const players = _room.players || {};
    const ranked = Object.entries(players)
      .map(([uid, p]) => ({ uid, name: p.name, score: scores[uid] || 0 }))
      .sort((a, b) => b.score - a.score);

    const medals = ['🥇', '🥈', '🥉'];
    const rows = ranked.map((r, i) => `
      <tr class="${r.uid === myId() ? 'live-lb-me' : ''}">
        <td>${medals[i] || i + 1}</td>
        <td>${esc(r.name)}</td>
        <td>${r.score.toLocaleString()}</td>
      </tr>`).join('');

    return `
      <div class="screen live-screen">
        <h2 class="live-done-title">🏁 Game Over!</h2>
        <div class="live-final-lb">
          <table class="arena-lb-table live-final-table">
            <thead><tr><th>#</th><th>Player</th><th>Score</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="live-host-actions">
          <button class="btn primary" onclick="app.go(['arena'])">Back to Arena</button>
          <button class="btn ghost" onclick="app.go(['home'])">Home</button>
        </div>
      </div>`;
  }

  // ── Leave room ────────────────────────────────────────────────────────────
  window.liveLeave = function () {
    liveUnsubscribe();
    app.go(['arena']);
  };

  // ── Entry points (called from setup screen) ───────────────────────────────

  window.liveCreateAndGo = async function () {
    const checked = Array.from(document.querySelectorAll('input[name="arena-subj"]:checked')).map(el => el.value);
    if (checked.length < 1) { alert('Select at least one subject.'); return; }
    const qCount = parseInt(document.getElementById('live-q-count')?.value || '10', 10);
    const tSecs  = parseInt(document.getElementById('live-timer-secs')?.value || '20', 10);
    const btn = document.getElementById('live-create-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Creating…'; }
    try {
      const code = await liveCreateRoom({ board: state.board, grade: state.grade, subjects: checked, questionCount: qCount, timerSecs: tSecs });
      _myAnswer = {};
      Object.keys(_liveDisplayOrder).forEach(k => delete _liveDisplayOrder[k]);
      _liveQCache = {};
      await _loadQCache(state.board, state.grade, checked, (await roomRef(code).get()).data().questionIds);
      liveSubscribe(code);
      app.go(['live-lobby']);
    } catch (e) {
      if (btn) { btn.disabled = false; btn.textContent = 'Create Room'; }
      alert('Could not create room: ' + e.message);
    }
  };

  window.liveJoinAndGo = async function () {
    const input = document.getElementById('live-join-input');
    const errEl = document.getElementById('live-join-error');
    const code = (input?.value || '').trim().toUpperCase();
    if (errEl) errEl.hidden = true;
    if (code.length !== 6) {
      if (errEl) { errEl.textContent = 'Enter the full 6-letter code.'; errEl.hidden = false; }
      return;
    }
    const btn = document.getElementById('live-join-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Joining…'; }
    try {
      const data = await liveJoinRoom(code);
      _myAnswer = {};
      Object.keys(_liveDisplayOrder).forEach(k => delete _liveDisplayOrder[k]);
      _liveQCache = {};
      await _loadQCache(data.board, data.grade, data.subjects, data.questionIds);
      liveSubscribe(code);
      app.go(['live-lobby']);
    } catch (e) {
      if (btn) { btn.disabled = false; btn.textContent = 'Join'; }
      if (errEl) { errEl.textContent = e.message || 'Could not join room.'; errEl.hidden = false; }
    }
  };

  // ── Tick timer on question screen ─────────────────────────────────────────
  function _startDisplayTimer() {
    _clearTimer();
    _timerInterval = setInterval(() => {
      if (!_room || _room.state !== 'question') { _clearTimer(); return; }
      const remaining = Math.max(0, Math.ceil((_room.timerEnd - Date.now()) / 1000));
      const pct = Math.round((remaining / _room.timerSecs) * 100);
      const bar = document.getElementById('live-timer-bar');
      const lbl = document.getElementById('live-timer-secs');
      if (lbl) lbl.textContent = remaining + 's';
      if (bar) {
        bar.style.width = pct + '%';
        if (remaining <= 5) bar.classList.add('low'); else bar.classList.remove('low');
      }
    }, 500);
  }

  // ── Route rendering ───────────────────────────────────────────────────────
  function renderLiveScreen() {
    if (!_room) return '<div class="screen"><p class="live-loading">Connecting…</p></div>';
    switch (_room.state) {
      case 'lobby':    return renderLiveLobby();
      case 'question': return renderLiveQuestion();
      case 'reveal':   return renderLiveReveal();
      case 'done':     return renderLiveDone();
      default:         return renderLiveLobby();
    }
  }

  // ── Patch app router ──────────────────────────────────────────────────────
  (function patchApp() {
    const origScreen = app._screen.bind(app);
    app._screen = function (name, params) {
      if (name === 'live-lobby') return renderLiveScreen();
      return origScreen(name, params);
    };

    const origAfter = app._afterRender.bind(app);
    app._afterRender = function (name, params) {
      if (name === 'live-lobby') {
        if (_room?.state === 'question') _startDisplayTimer();
        // If host just got to 'question', schedule auto-reveal
        if (_room?.state === 'question' && isHost()) {
          const remaining = Math.max(0, _room.timerEnd - Date.now());
          if (_timerInterval && typeof _timerInterval === 'object') clearTimeout(_timerInterval);
          if (remaining > 0) setTimeout(() => _hostReveal(), remaining);
        }
        return;
      }
      origAfter(name, params);
    };

    const origRender = app.render.bind(app);
    app.render = function () {
      const r = parseHash();
      if (r.name === 'live-lobby') {
        if (!state.board) { app.go(['board'], true); return; }
        state.screen = r.name;
        state.params = r.parts || [];
        document.getElementById('app').innerHTML = app._header() + `<main>${app._screen(r.name, r.parts || [])}</main>`;
        window.scrollTo(0, 0);
        app._afterRender(r.name, r.parts || []);
        return;
      }
      origRender();
    };
  }());

  // ── Public API ────────────────────────────────────────────────────────────
  window.riseLive = { createRoom: liveCreateRoom, joinRoom: liveJoinRoom, subscribe: liveSubscribe, unsubscribe: liveUnsubscribe };

  // Cache profile for name lookup
  if (window.riseAuth?.user) {
    firebase.firestore().collection('users').doc(window.riseAuth.user.uid).collection('sync').doc('profile').get()
      .then(s => { if (s.exists) window._liveProfile = s.data(); }).catch(() => {});
  }
}());
