// Arena — Phase 1: solo mode, CBSE only, client-side grading, localStorage.
// Reads globals from app.js: state, LS, KEY, BANKS, bankSlug, loadBank,
// scopeKey, SRS_INTERVALS, shuffle, esc, app (assigned onto below).

// ─── Constants ────────────────────────────────────────────────────────────────
const ARENA_KEY = 'rise.arena';           // run state (resume mid-run)
const ARENA_HI_KEY = 'rise.arena.hi';    // high scores per grade::board

// Subjects available for Arena per board (those with an MCQ bank)
const ARENA_SUBJECTS = {
  CBSE: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
  ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English'],
  IB:   [], // no IB MCQ banks yet
};

// Stage table per arena.md
const ARENA_STAGES = [
  // [stageFrom, stageTo, difficulty, secondsPerQ, questionsPerStage]
  { from: 1,  to: 3,  diff: 'easy',   secs: 45, qTotal: 5 },
  { from: 4,  to: 6,  diff: 'medium', secs: 40, qTotal: 5 },
  { from: 7,  to: 9,  diff: 'medium', secs: 35, qTotal: 5 },
  { from: 10, to: 10, diff: 'hard',   secs: 35, qTotal: 5 },
];
const ARENA_LIVES = 7;
const COMBO_THRESHOLD_1 = 5;   // 1.5× at 5 in a row
const COMBO_THRESHOLD_2 = 10;  // 2.0× at 10 in a row
const DIFF_MULT = { easy: 1.0, medium: 1.5, hard: 2.0, '': 1.0 };

// ─── Run state ────────────────────────────────────────────────────────────────
let ar = null; // active arena run object

function arenaHiKey() {
  return `${state.grade}::${state.board}`;
}

function saveRun() {
  if (!ar) return;
  const toSave = Object.assign({}, ar);
  delete toSave._banks;        // don't serialise loaded banks
  LS.set(ARENA_KEY, toSave);
}

function clearSavedRun() {
  LS.del(ARENA_KEY);
}

// ─── Stage helpers ────────────────────────────────────────────────────────────
function stageSpec(stageNum) {
  return ARENA_STAGES.find(s => stageNum >= s.from && stageNum <= s.to) || ARENA_STAGES[ARENA_STAGES.length - 1];
}

// Build the question list for one stage from loaded banks (flat qTotal across subjects)
function pickStageQuestions(subjects, difficulty, stageNum) {
  const spec = stageSpec(stageNum);
  const nTotal = spec.qTotal;
  const servedSet = new Set(ar.servedIds);
  const progStore = LS.get(KEY.progress, {});
  const diffMap = { easy: ['easy'], medium: ['medium'], hard: ['hard', 'medium'] };
  const allowed = diffMap[difficulty] || null;
  const now = Date.now();

  // Build a pool from all subjects, tagging each question with its subject
  const allDue = [], allNotDue = [];
  for (const subject of subjects) {
    const bank = ar._banks[subject] || [];
    let pool = bank.filter(q => !servedSet.has(q.id));
    let narrowPool = allowed ? pool.filter(q => allowed.includes((q.difficulty || '').toLowerCase())) : pool;
    if (narrowPool.length === 0) narrowPool = pool;
    const bySubj = progStore[scopeKey(subject)] || {};
    narrowPool.forEach(q => {
      const r = bySubj[q.id];
      (r && r.due <= now ? allDue : allNotDue).push({ ...q, _subject: subject });
    });
  }

  const combined = shuffle(allDue).concat(shuffle(allNotDue));
  let picked = combined.slice(0, nTotal);

  // Fallback: pull from any unserved question if pool was too small
  if (picked.length < nTotal) {
    for (const subject of subjects) {
      const bank = ar._banks[subject] || [];
      bank.filter(q => !servedSet.has(q.id) && !picked.find(p => p.id === q.id))
        .forEach(q => picked.push({ ...q, _subject: subject }));
      if (picked.length >= nTotal) break;
    }
    picked = picked.slice(0, nTotal);
  }

  picked.forEach(q => servedSet.add(q.id));
  return shuffle(picked);
}

// ─── Scoring ─────────────────────────────────────────────────────────────────
function calcScore(difficulty, secondsRemaining, combo) {
  const diffMult = DIFF_MULT[difficulty] || 1.0;
  const comboMult = combo >= COMBO_THRESHOLD_2 ? 2.0
    : combo >= COMBO_THRESHOLD_1 ? 1.5 : 1.0;
  const base = 100 * diffMult + secondsRemaining * 5;
  return Math.round(base * comboMult);
}

// ─── High scores ──────────────────────────────────────────────────────────────
function getHiScores() {
  const all = LS.get(ARENA_HI_KEY, {});
  return all[arenaHiKey()] || { score: 0, stage: 0, combo: 0 };
}

function saveHiScore(score, stage, combo) {
  const all = LS.get(ARENA_HI_KEY, {});
  const key = arenaHiKey();
  const cur = all[key] || { score: 0, stage: 0, combo: 0 };
  all[key] = {
    score: Math.max(cur.score, score),
    stage: Math.max(cur.stage, stage),
    combo: Math.max(cur.combo, combo),
  };
  LS.set(ARENA_HI_KEY, all);
}

// ─── Run lifecycle ────────────────────────────────────────────────────────────
async function arenaStartRun(subjects) {
  // Load all banks for chosen subjects
  const banks = {};
  await Promise.all(subjects.map(s => loadBank(s).then(qs => { banks[s] = qs; })));

  const hiAtStart = getHiScores();
  ar = {
    runId: Date.now().toString(36),
    board: state.board,
    grade: state.grade,
    subjects,
    stage: 1,
    lives: ARENA_LIVES,
    score: 0,
    combo: 0,
    longestCombo: 0,
    deepestStage: 1,
    servedIds: [],
    startedAt: Date.now(),
    stageStartedAt: Date.now(),
    stageQuestions: null,
    stageIndex: 0,
    stageResults: [],
    missedQuestions: [],
    phase: 'question', // 'question' | 'interstitial' | 'gameover'
    _banks: banks,
    _prevHiBefore: hiAtStart.score,  // for newBest detection on game-over
  };

  ar.stageQuestions = pickStageQuestions(subjects, stageSpec(1).diff, 1);
  ar.servedIds.push(...ar.stageQuestions.map(q => q.id));
  saveRun();
}

// Called after all questions in the current stage have been answered.
// Lives are tracked as floats (half-heart granularity).
// Gain: +0.5 per correct answer. Cost: 0→3 lives, 1→2, 2→1, 3+→0.
function arenaEndStage(correct) {
  const total = ar.stageQuestions.length;

  const gained = correct * 0.5;
  const cost = correct === 0 ? 3 : correct === 1 ? 2 : correct === 2 ? 2 : correct === 3 ? 1 : 0;

  ar.lives = Math.min(ARENA_LIVES, ar.lives + gained - cost);

  if (ar.lives <= 0) {
    ar.lives = 0;
    ar.phase = 'gameover';
    return;
  }

  ar.deepestStage = Math.max(ar.deepestStage, ar.stage);
  ar.stageStartedAt = Date.now();
  ar.phase = 'interstitial';
  ar._lastStageCorrect = correct;
  ar._lastStageLiveLost = cost;
  ar._lastStageHeartGained = gained;
  ar._lastStageTotal = total;
}

function arenaNextStage() {
  ar.stage += 1;
  ar.stageIndex = 0;
  ar.stageResults = [];

  if (ar.stage > 10) {
    // Completed all 10 stages — treat as victory (game over with full clear)
    ar.phase = 'gameover';
    ar._cleared = true;
    return;
  }

  const spec = stageSpec(ar.stage);
  ar.stageQuestions = pickStageQuestions(ar.subjects, spec.diff, ar.stage);
  ar.servedIds.push(...ar.stageQuestions.map(q => q.id));
  ar.phase = 'question';
  saveRun();
}

// ─── Screen rendering ─────────────────────────────────────────────────────────
// All render functions return HTML strings and are called by app._screen / app._afterRender.

function renderArenaSetup() {
  // Which subjects for this board have a bank?
  const boardSubjects = ARENA_SUBJECTS[state.board] || [];
  const available = boardSubjects.filter(s => bankSlug(s, state.board, state.grade));
  if (!available.length) {
    return `<div class="screen arena-setup-screen">
      <h1 class="arena-title">⚡ Arena</h1>
      <p class="arena-sub">Coming soon for ${esc(state.board)}!</p>
      <p>Question banks for Arena are not yet available for your board.</p>
      <button class="btn ghost" onclick="app.go(['home'])">Back</button>
    </div>`;
  }
  const opts = available.map((s, i) => `
    <label class="arena-subj-opt">
      <input type="checkbox" name="arena-subj" value="${esc(s)}" ${i < 3 ? 'checked' : ''}>
      <span>${esc(s)}</span>
    </label>`).join('');

  return `
    <div class="screen arena-setup-screen">
      <div class="arena-setup-layout">

        <!-- Left: explainer -->
        <div class="arena-explainer">
          <h1 class="arena-title">⚡ Arena</h1>
          <p class="arena-sub">Fast MCQ blitz · ${esc(state.board)} · race the clock</p>

          <div class="arena-how">
            <p class="arena-how-heading">How to play</p>
            <ul class="arena-how-list">
              <li><span class="arena-how-icon">📚</span><span>Each <strong>stage</strong> has 5 MCQs drawn from your 3 chosen subjects.</span></li>
              <li><span class="arena-how-icon">⏱️</span><span>A <strong>timer</strong> counts down per question — answer fast for bonus points.</span></li>
              <li><span class="arena-how-icon">♥</span><span>You start with <strong>7 hearts</strong>. Every correct answer earns +½ heart (capped at 7).</span></li>
              <li><span class="arena-how-icon">⚠️</span><span>Stages <strong>drain hearts</strong> if you score &lt;3: 0 right → −3, 1 right → −1.5, 2 right → −1. Score 3+ to break even or gain.</span></li>
              <li><span class="arena-how-icon">💀</span><span>Hearts hit 0 → <strong>run over</strong>. Survive as many stages as you can.</span></li>
              <li><span class="arena-how-icon">⚡</span><span>Chain correct answers for a <strong>combo multiplier</strong> — 5 in a row = 1.5×, 10 = 2×.</span></li>
              <li><span class="arena-how-icon">🔁</span><span>Weak questions resurface more often — Arena also trains your <strong>spaced repetition</strong>.</span></li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="arena-setup-divider"></div>

        <!-- Right: subject picker + start -->
        <div class="arena-picker">
          <p class="arena-pick-label">Choose 3 subjects</p>
          <div class="arena-subj-grid">${opts}</div>
          <p class="arena-subj-hint">Select exactly 3 subjects to begin.</p>
          <div class="arena-setup-actions">
            <button class="btn primary arena-go-btn" onclick="arenaBegin()">Start Run</button>
            <button class="btn ghost" onclick="app.go(['home'])">Back</button>
          </div>
        </div>

      </div>
    </div>`;
}

function renderArenaQuestion() {
  if (!ar || !ar.stageQuestions) return renderArenaSetup();
  const q = ar.stageQuestions[ar.stageIndex];
  const spec = stageSpec(ar.stage);
  const total = ar.stageQuestions.length;
  const qNum = ar.stageIndex + 1;
  const comboMult = ar.combo >= COMBO_THRESHOLD_2 ? '2.0×' : ar.combo >= COMBO_THRESHOLD_1 ? '1.5×' : '1.0×';

  const opts = q.options.map((opt, i) => `
    <button class="arena-opt-btn" onclick="arenaAnswer(${i})" data-idx="${i}">
      <span class="arena-opt-letter">${'ABCD'[i]}</span>
      <span class="arena-opt-text">${esc(opt)}</span>
    </button>`).join('');

  const fullHearts = Math.floor(ar.lives);
  const hasHalf = (ar.lives - fullHearts) >= 0.5;
  const livePips = Array.from({ length: ARENA_LIVES }, (_, i) => {
    const cls = i < fullHearts ? 'alive' : (i === fullHearts && hasHalf ? 'half' : 'lost');
    return `<span class="arena-life-pip ${cls}">♥</span>`;
  }).join('');

  return `
    <div class="screen arena-screen" id="arena-screen">
      <div class="arena-hud">
        <div class="arena-hud-left">
          <span class="arena-hud-stage">Stage ${ar.stage}</span>
          <span class="arena-hud-q">Q${qNum}/${total}</span>
        </div>
        <div class="arena-hud-center">
          <span class="arena-lives">${livePips}</span>
        </div>
        <div class="arena-hud-right">
          <span class="arena-combo ${ar.combo >= COMBO_THRESHOLD_1 ? 'hot' : ''}">⚡${ar.combo} ${comboMult}</span>
          <span class="arena-score">${ar.score.toLocaleString()}</span>
        </div>
      </div>

      <div class="arena-timer-row">
        <div class="arena-timer-wrap">
          <div class="arena-timer-bar" id="arena-timer-bar"></div>
        </div>
        <div class="arena-timer-label"><span id="arena-timer-secs">${spec.secs}</span>s</div>
      </div>

      <div class="arena-subject-tag">${esc(q._subject)}</div>
      <div class="arena-question-text">${esc(q.text)}</div>
      <div class="arena-opts" id="arena-opts">${opts}</div>
    </div>`;
}

function renderArenaInterstitial() {
  const correct = ar._lastStageCorrect;
  const total = ar._lastStageTotal;
  const cost = ar._lastStageLiveLost || 0;
  const gained = ar._lastStageHeartGained || 0;
  const net = gained - cost;
  const scoreMsg = ar._lastStageScore ? `+${ar._lastStageScore.toLocaleString()} pts` : '';
  const lifeMsg = net > 0 ? `+${net}♥ gained — ${ar.lives.toFixed(1)} remaining`
    : net < 0 ? `${net}♥ — ${ar.lives.toFixed(1)} remaining`
    : '';

  return `
    <div class="screen arena-interstitial">
      <div class="arena-inter-badge ${correct === total ? 'perfect' : ''}">
        ${correct === total ? '✦ Stage Cleared!' : '⚡ Advance'}
      </div>
      <p class="arena-inter-detail">${correct}/${total} correct ${scoreMsg}</p>
      ${lifeMsg ? `<p class="arena-inter-life ${net >= 0 ? 'gained' : ''}">${lifeMsg}</p>` : ''}
      <p class="arena-inter-next">Stage ${ar.stage + 1} next</p>
      <button class="btn primary arena-go-btn" onclick="arenaContinue()">Continue</button>
      <button class="btn arena-quit-btn" onclick="arenaQuit()">Quit Run</button>
    </div>`;
}

function renderArenaGameOver() {
  // Flush Leitner + streak exactly once (guard against re-render on back-nav)
  if (!ar._flushed) {
    ar._flushed = true;
    if (ar._allAnswered && ar._allAnswered.length > 0) {
      const bySubject = {};
      ar._allAnswered.forEach(m => {
        (bySubject[m._subject] = bySubject[m._subject] || []).push(m);
      });
      Object.keys(bySubject).forEach(subj => {
        const seen = {};
        bySubject[subj].forEach(r => { seen[r.id] = r; });
        app._updateProgress(subj, Object.values(seen));
      });
    }
    if (ar._answeredForStreak) app._recordStreakActivity(ar._answeredForStreak);
    saveHiScore(ar.score, ar.deepestStage, ar.longestCombo);
    clearSavedRun();
  }

  const newBest = ar.score > (ar._prevHiBefore || 0);
  const hi = getHiScores(); // read after save so panel shows updated best

  const cleared = ar._cleared ? '<p class="arena-cleared">🏆 Full clear! All 10 stages!</p>' : '';

  // Build full question review list (all attempted, correct + wrong)
  const allAnswered = ar._allAnswered || [];
  const reviewHtml = allAnswered.length === 0
    ? '<p class="arena-no-missed">No questions attempted.</p>'
    : allAnswered.map((q, i) => {
        const isRight = q.isCorrect;
        const userOpt = q.userAnswer !== undefined ? q.options[q.userAnswer] : null;
        return `
      <div class="arena-review-item ${isRight ? 'arena-review-correct' : 'arena-review-wrong'}">
        <div class="arena-review-header">
          <span class="arena-review-badge">${isRight ? '✓' : '✗'}</span>
          <span class="arena-review-subj">${esc(q._subject)}${q.chapter ? ` · ${esc(q.chapter)}` : ''}</span>
        </div>
        <p class="arena-review-q">${esc(q.text)}</p>
        ${!isRight && userOpt ? `<p class="arena-review-user-ans">Your answer: ${esc(userOpt)}</p>` : ''}
        ${!isRight && q.userAnswer === undefined ? `<p class="arena-review-user-ans">Timed out</p>` : ''}
        <p class="arena-review-ans">Correct: ${esc(q.options[q.correct])}</p>
        ${q.explanation ? `<p class="arena-review-exp">${esc(q.explanation)}</p>` : ''}
      </div>`;
      }).join('');

  return `
    <div class="screen arena-gameover">
      <div class="arena-go-layout">
        <div class="arena-go-left">
          ${cleared}
          <h2 class="arena-go-title">${ar._cleared ? 'Run Complete' : 'Run Over'}</h2>
          ${newBest ? '<p class="arena-new-best">🌟 New personal best!</p>' : ''}
          <div class="arena-go-stats">
            <div class="arena-stat"><span class="arena-stat-val">${ar.score.toLocaleString()}</span><span class="arena-stat-lbl">Score</span></div>
            <div class="arena-stat"><span class="arena-stat-val">${ar.deepestStage}</span><span class="arena-stat-lbl">Deepest Stage</span></div>
            <div class="arena-stat"><span class="arena-stat-val">${ar.longestCombo}</span><span class="arena-stat-lbl">Longest Combo</span></div>
          </div>
          <div class="arena-go-hi">
            <span class="arena-hi-label">Personal Best</span>
            <span>${hi.score.toLocaleString()} pts · Stage ${hi.stage} · ${hi.combo}× combo</span>
          </div>
          <div class="arena-go-actions">
            <button class="btn primary" onclick="app.go(['arena'])">Play Again</button>
            <button class="btn ghost" onclick="app.go(['home'])">Home</button>
          </div>
        </div>
        <div class="arena-go-right">
          <div class="arena-missed-section">
            <h3>Questions attempted <span class="arena-review-count">${allAnswered.length}</span></h3>
            ${reviewHtml}
          </div>
        </div>
      </div>
    </div>`;
}

// ─── Timer ────────────────────────────────────────────────────────────────────
let _arenaTimer = null;
let _arenaSecsLeft = 0;

function arenaClearTimer() {
  if (_arenaTimer) { clearInterval(_arenaTimer); _arenaTimer = null; }
}

function arenaStartTimer(secs) {
  arenaClearTimer();
  _arenaSecsLeft = secs;
  const bar = document.getElementById('arena-timer-bar');
  const lbl = document.getElementById('arena-timer-secs');
  if (bar) bar.style.width = '100%';

  _arenaTimer = setInterval(() => {
    _arenaSecsLeft -= 1;
    const bar = document.getElementById('arena-timer-bar');
    const lbl = document.getElementById('arena-timer-secs');
    if (lbl) lbl.textContent = _arenaSecsLeft;
    if (bar) bar.style.width = `${(_arenaSecsLeft / secs) * 100}%`;
    if (_arenaSecsLeft <= 5 && bar) bar.classList.add('low');
    if (_arenaSecsLeft <= 0) {
      arenaClearTimer();
      arenaAnswer(-1); // timeout = wrong
    }
  }, 1000);
}

// ─── Actions (called from HTML onclick) ──────────────────────────────────────
window.arenaBegin = async function() {
  const checked = Array.from(document.querySelectorAll('input[name="arena-subj"]:checked')).map(el => el.value);
  if (checked.length !== 3) {
    alert('Please select exactly 3 subjects.');
    return;
  }
  const btn = document.querySelector('.arena-go-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Loading…'; }
  await arenaStartRun(checked);
  app.go(['arena-run'], true);
};

window.arenaAnswer = function(idx) {
  if (!ar || ar.phase !== 'question') return;
  arenaClearTimer();

  const q = ar.stageQuestions[ar.stageIndex];
  const spec = stageSpec(ar.stage);
  const isCorrect = idx === q.correct;
  const secondsRemaining = Math.max(0, _arenaSecsLeft);

  // Track for Leitner + streak
  const reviewRec = {
    id: q.id, text: q.text, options: q.options, correct: q.correct,
    userAnswer: idx === -1 ? undefined : idx,
    isCorrect, explanation: q.explanation || '', chapter: q.chapter || '',
    _subject: q._subject,
  };
  ar._allAnswered = ar._allAnswered || [];
  ar._allAnswered.push(reviewRec);
  ar._answeredForStreak = (ar._answeredForStreak || 0) + 1;

  if (isCorrect) {
    ar.combo += 1;
    ar.longestCombo = Math.max(ar.longestCombo, ar.combo);
    const pts = calcScore(q.difficulty || '', secondsRemaining, ar.combo);
    ar.score += pts;
    ar.stageResults.push({ correct: true, pts });
  } else {
    ar.combo = 0;
    ar.stageResults.push({ correct: false, pts: 0 });
    ar.missedQuestions.push({ ...q });
  }

  saveRun();

  // Flash feedback on the button
  const opts = document.getElementById('arena-opts');
  if (opts) {
    opts.querySelectorAll('.arena-opt-btn').forEach(btn => btn.disabled = true);
    if (idx >= 0) {
      const clicked = opts.querySelector(`[data-idx="${idx}"]`);
      if (clicked) clicked.classList.add(isCorrect ? 'correct' : 'wrong');
    }
    const correctBtn = opts.querySelector(`[data-idx="${q.correct}"]`);
    if (correctBtn && !isCorrect) correctBtn.classList.add('reveal');
  }

  setTimeout(() => arenaAdvance(), 900);
};

function arenaAdvance() {
  if (!ar) return;
  ar.stageIndex += 1;

  if (ar.stageIndex < ar.stageQuestions.length) {
    // More questions in this stage
    ar.phase = 'question';
    app.go(['arena-run'], true);
    return;
  }

  // Stage complete — tally correct answers
  const correct = ar.stageResults.filter(r => r.correct).length;
  const stageScore = ar.stageResults.reduce((s, r) => s + r.pts, 0);
  ar._lastStageScore = stageScore;

  arenaEndStage(correct);

  if (ar.phase === 'gameover') {
    app.go(['arena-over'], true);
  } else {
    app.go(['arena-inter'], true);
  }
}

window.arenaContinue = function() {
  arenaNextStage();
  if (ar.phase === 'gameover') {
    app.go(['arena-over'], true);
  } else {
    app.go(['arena-run'], true);
  }
};

window.arenaQuit = function() {
  arenaClearTimer();
  ar.phase = 'gameover';
  app.go(['arena-over'], true);
};

// ─── Hook into app routing ────────────────────────────────────────────────────
// Extend app._screen and app._afterRender to handle arena-* routes.
// Called after app.js has been fully evaluated (arena.js loads after it).
(function patchApp() {
  const origScreen = app._screen.bind(app);
  app._screen = function(name, params) {
    if (name === 'arena')       return renderArenaSetup();
    if (name === 'arena-run')   return ar ? renderArenaQuestion() : renderArenaSetup();
    if (name === 'arena-inter') return ar ? renderArenaInterstitial() : renderArenaSetup();
    if (name === 'arena-over')  return ar ? renderArenaGameOver() : renderArenaSetup();
    return origScreen(name, params);
  };

  const origAfter = app._afterRender.bind(app);
  app._afterRender = function(name, params) {
    if (name === 'arena-run' && ar && ar.phase === 'question') {
      const spec = stageSpec(ar.stage);
      arenaStartTimer(spec.secs);
    } else {
      arenaClearTimer();
    }
    if (!['arena', 'arena-run', 'arena-inter', 'arena-over'].includes(name)) {
      origAfter(name, params);
    }
  };

  // Extend the guard list in render() by patching the valid-routes check.
  // The simplest way is to monkey-patch render() to whitelist arena routes.
  const origRender = app.render.bind(app);
  app.render = function() {
    const r = parseHash();
    const arenaRoutes = ['arena', 'arena-run', 'arena-inter', 'arena-over'];
    if (arenaRoutes.includes(r.name)) {
      // Bypass app.js guard — handle arena screens directly
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
