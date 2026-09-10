// ─── Test session screen ───────────────────────────────────────────────────────
Object.assign(app, {

  startTest({ subject, mode, chapter = null }) {
    const cfg = MODES[mode];
    this.session = {
      subject, mode, chapter,
      questions: [], answers: {}, marked: [], index: 0,
      remaining: cfg.seconds, loading: true, error: null
    };
    LS.del(KEY.draft);
    this.go(['test']);

    const difficulty = state.difficulty[subject] || 'all';
    this.session.difficulty = difficulty;

    loadBank(subject)
      .then(all => {
        const byChapter = chapter ? all.filter(q => (q.chapter || 'General') === chapter) : all;
        const pool = difficulty === 'all' ? byChapter : byChapter.filter(q => q.difficulty === difficulty);
        if (!pool.length) {
          throw new Error(difficulty === 'all'
            ? 'No questions in this chapter yet.'
            : `No ${difficulty} questions available${chapter ? ' in this chapter' : ''}. Try a different difficulty.`);
        }
        const picked = mode === 'mock'
          ? shuffle(pool.filter(q => q.priority || isBoardQuestion(q))).concat(shuffle(pool.filter(q => !q.priority && !isBoardQuestion(q)))).slice(0, cfg.count)
          : shuffle(pool).slice(0, cfg.count);
        this.session.questions = picked.map((q, i) => ({ ...q, id: q.id || `q-${i}` }));
        this.session.loading = false;
        if (state.screen !== 'test') return;
        this.renderQuestion(); this.renderPalette(); this.renderTestMeta();
        this.startTimer();
        this._saveDraft();
      })
      .catch(err => {
        this.session.loading = false;
        this.session.error = err.message || 'Could not load questions.';
        if (state.screen === 'test') this.renderTestMeta();
      });
  },

  startCustomTest(subject, mode, questions) {
    if (!questions.length) return;
    this.session = {
      subject, mode, chapter: null, difficulty: 'all',
      questions: shuffle(questions).slice(0, MODES[mode].count).map((q, i) => ({ ...q, id: q.id || `q-${i}` })),
      answers: {}, marked: [], index: 0,
      remaining: null, loading: false, error: null
    };
    LS.del(KEY.draft);
    this.go(['test']);
    this._saveDraft();
  },

  startBookmarkReview(subject) {
    const store = LS.get(KEY.bookmarks, {});
    const ids = Object.keys(store[scopeKey(subject)] || {});
    if (!ids.length) return;
    loadBank(subject).then(all => this.startCustomTest(subject, 'bookmark', all.filter(q => ids.includes(q.id))));
  },

  startSpacedReview(subject) {
    const store = LS.get(KEY.progress, {});
    const bySubj = store[scopeKey(subject)] || {};
    const now = Date.now();
    const dueIds = Object.keys(bySubj).filter(id => bySubj[id].due <= now);
    if (!dueIds.length) return;
    loadBank(subject).then(all => this.startCustomTest(subject, 'srs', all.filter(q => dueIds.includes(q.id))));
  },

  _screenTest() {
    const s = this.session;
    const diffTag = s.difficulty && s.difficulty !== 'all' ? ` · ${esc(s.difficulty)}` : '';
    const title = `${state.grade} · ${state.board} · ${esc(s.subject)}${s.chapter ? ' · ' + esc(s.chapter) : ''} · ${MODES[s.mode].label}${diffTag}`;
    return `
      <div class="screen test-screen" id="test-session">
        ${this._modalMarkup()}
        <div class="test-topbar">
          <p class="test-title">${title}</p>
          <div class="test-topbar-right">
            <span class="answered-count" id="answered-count"></span>
            <div id="timer" class="timer" role="timer" aria-live="off">--:--</div>
            <button class="btn quit-btn" onclick="app.quitTest()">Exit</button>
            <button class="btn primary submit-btn" onclick="app.submitTest()">Submit test</button>
          </div>
        </div>
        <div class="progress-rail"><div class="progress-fill" id="progress-fill"></div></div>
        <div class="test-layout">
          <div class="card question-area">
            <div id="q-state"></div>
            <p id="q-number" class="q-number"></p>
            <p id="q-chapter" class="q-chapter"></p>
            <p id="q-text"   class="q-text"></p>
            <div id="options-list" role="group" aria-label="Answer options"></div>
            <div class="test-nav">
              <button class="btn nav-btn" onclick="app.prevQuestion()">&#8592; Prev</button>
              <button class="btn review-btn" id="mark-btn" onclick="app.markForReview()">&#9873; Mark</button>
              <button class="btn review-btn" id="bookmark-btn" onclick="app.toggleBookmark()">&#9734; Bookmark</button>
              <button class="btn primary nav-btn" onclick="app.nextQuestion()">Next &#8594;</button>
            </div>
            <p class="kbd-hint">Keyboard: <kbd>A</kbd>–<kbd>D</kbd> or <kbd>1</kbd>–<kbd>4</kbd> answer ·
               <kbd>←</kbd> <kbd>→</kbd> move · <kbd>M</kbd> mark · <kbd>Enter</kbd> next</p>
          </div>
          <details class="card palette-area" id="palette-panel" open>
            <summary class="palette-summary">Question palette</summary>
            <div class="palette-inner">
              <div class="palette-legend">
                <span><span class="dot answered"></span>Answered</span>
                <span><span class="dot review"></span>Marked</span>
                <span><span class="dot current-dot"></span>Current</span>
              </div>
              <label class="autonext">
                <input type="checkbox" id="autonext-toggle" ${this.autoNext ? 'checked' : ''}
                       onchange="app.setAutoNext(this.checked)">
                Jump to next question after answering
              </label>
              <div id="palette" class="omr-grid"></div>
            </div>
          </details>
        </div>
      </div>`;
  },

  renderTestMeta() {
    const s = this.session;
    const box = document.getElementById('q-state');
    if (!box) return;
    if (s.loading) {
      box.innerHTML = '<div class="inline-state">Loading questions…</div>';
    } else if (s.error) {
      box.innerHTML = `<div class="inline-state error">${esc(s.error)}
        <button class="btn small" onclick="app.go(['home'])">Back to practice</button></div>`;
    } else {
      box.innerHTML = '';
    }
    const answered = Object.keys(s.answers).length;
    const total    = s.questions.length || 1;
    const counter  = document.getElementById('answered-count');
    if (counter) counter.textContent = s.questions.length ? `${answered}/${s.questions.length} answered` : '';
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = `${Math.round(answered / total * 100)}%`;
  },

  renderQuestion() {
    const s = this.session;
    if (!s || !s.questions.length) return;
    const q = s.questions[s.index];
    const numEl  = document.getElementById('q-number');
    const chEl   = document.getElementById('q-chapter');
    const textEl = document.getElementById('q-text');
    const optEl  = document.getElementById('options-list');
    if (!numEl || !textEl || !optEl) return;

    numEl.textContent  = `Question ${s.index + 1} of ${s.questions.length}`;
    if (chEl) chEl.textContent = q.chapter || '';
    textEl.textContent = breakParts(q.text);

    optEl.innerHTML = q.options.map((opt, i) => {
      const selected = s.answers[q.id] === i;
      return `<button class="option-btn ${selected ? 'selected' : ''}"
                      aria-pressed="${selected}" onclick="app.selectOption(${i})">
                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                <span>${esc(opt)}</span>
              </button>`;
    }).join('');

    const markBtn = document.getElementById('mark-btn');
    if (markBtn) {
      const marked = s.marked.includes(s.index);
      markBtn.classList.toggle('marked', marked);
      markBtn.innerHTML = marked ? '&#9873; Marked' : '&#9873; Mark';
    }
    this._renderBookmarkBtn('bookmark-btn', s.subject, q.id);
    const prev = document.querySelector('.test-nav .nav-btn');
    if (prev) prev.disabled = s.index === 0;
  },

  _isBookmarked(subject, id) {
    const store = LS.get(KEY.bookmarks, {});
    const key = scopeKey(subject);
    return !!(store[key] && store[key][id]);
  },

  _bookmarkCount(subject) {
    const store = LS.get(KEY.bookmarks, {});
    return Object.keys(store[scopeKey(subject)] || {}).length;
  },

  _dueCount(subject) {
    const store = LS.get(KEY.progress, {});
    const now = Date.now();
    return Object.values(store[scopeKey(subject)] || {}).filter(r => r.due <= now).length;
  },

  _renderBookmarkBtn(btnId, subject, id) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const on = this._isBookmarked(subject, id);
    btn.classList.toggle('marked', on);
    btn.innerHTML = on ? '&#9733; Bookmarked' : '&#9734; Bookmark';
  },

  toggleBookmark(subject, id) {
    if (subject === undefined) {
      const s = this.session;
      if (!s) return;
      subject = s.subject;
      id = s.questions[s.index].id;
    }
    const store = LS.get(KEY.bookmarks, {});
    const key = scopeKey(subject);
    const bySubj = store[key] || (store[key] = {});
    if (bySubj[id]) delete bySubj[id]; else bySubj[id] = { at: Date.now() };
    LS.set(KEY.bookmarks, store);
    if (window.riseSync) riseSync.push();
    this._renderBookmarkBtn('bookmark-btn', subject, id);
    this._renderBookmarkBtn('review-bookmark-btn', subject, id);
  },

  renderPalette() {
    const s = this.session;
    const palette = document.getElementById('palette');
    if (!palette || !s) return;
    palette.innerHTML = s.questions.map((q, i) => {
      const cls = ['omr-bubble',
        s.marked.includes(i) ? 'review' : s.answers[q.id] !== undefined ? 'answered' : '',
        i === s.index ? 'current' : ''
      ].filter(Boolean).join(' ');
      return `<button class="${cls}" ${i === s.index ? 'aria-current="true"' : ''}
                      onclick="app.jumpToQuestion(${i})"
                      aria-label="Question ${i + 1}">${i + 1}</button>`;
    }).join('');
  },

  setAutoNext(on) { this.autoNext = on; LS.set(KEY.autoNext, on); },

  selectOption(index) {
    const s = this.session;
    const q = s.questions[s.index];
    s.answers[q.id] = index;
    this.renderQuestion(); this.renderPalette(); this.renderTestMeta();
    this._saveDraft();
    if (this.autoNext && s.index < s.questions.length - 1) {
      setTimeout(() => { if (this.session === s) this.nextQuestion(); }, 180);
    }
  },

  nextQuestion() { this.jumpToQuestion(this.session.index + 1); },
  prevQuestion() { this.jumpToQuestion(this.session.index - 1); },

  jumpToQuestion(index) {
    const s = this.session;
    if (!s || !s.questions.length) return;
    s.index = Math.max(0, Math.min(index, s.questions.length - 1));
    this.renderQuestion(); this.renderPalette();
    this._saveDraft();
    const area = document.querySelector('.question-area');
    if (area) area.scrollTop = 0;
  },

  markForReview() {
    const s = this.session;
    const at = s.marked.indexOf(s.index);
    at === -1 ? s.marked.push(s.index) : s.marked.splice(at, 1);
    this.renderQuestion(); this.renderPalette();
    this._saveDraft();
  },

  _mmss(sec) {
    const m = Math.floor(sec / 60), r = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  },

  startTimer() {
    clearInterval(this.timerInterval);
    const s = this.session;
    const el = document.getElementById('timer');
    if (!s || !el) return;
    if (s.remaining === null) { el.textContent = 'Untimed'; el.classList.add('untimed'); return; }

    let ticks = 0;
    const tick = () => {
      if (s.remaining <= 0) { clearInterval(this.timerInterval); this.submitTest(true); return; }
      el.textContent = this._mmss(s.remaining);
      el.classList.toggle('timer-low', s.remaining <= 300);
      if (s.remaining === 300) el.setAttribute('aria-live', 'polite');
      s.remaining--;
      if (++ticks % 5 === 0) this._saveDraft();
    };
    this.timerInterval = setInterval(tick, 1000);
    tick();
  },

  _modalMarkup() {
    return `
      <div class="modal-overlay" id="test-modal" hidden>
        <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <p class="modal-title" id="modal-title"></p>
          <p class="modal-body"  id="modal-body"></p>
          <div class="modal-actions">
            <button class="btn" id="modal-cancel" onclick="app._modalCancel()">Cancel</button>
            <button class="btn primary" id="modal-ok" onclick="app._modalOk()">OK</button>
          </div>
        </div>
      </div>`;
  },
  _modalOpen() {
    const o = document.getElementById('test-modal');
    return !!o && !o.hidden;
  },
  _showModal(title, body, onOk, okLabel = 'OK') {
    const overlay = document.getElementById('test-modal');
    if (!overlay) { if (onOk) onOk(); return; }
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent  = body;
    document.getElementById('modal-ok').textContent    = okLabel;
    this._modalOnOk = onOk;
    overlay.hidden = false;
    document.getElementById('modal-ok').focus();
  },
  _modalOk() {
    const o = document.getElementById('test-modal');
    if (o) o.hidden = true;
    const fn = this._modalOnOk; this._modalOnOk = null;
    if (fn) fn();
  },
  _modalCancel() {
    const o = document.getElementById('test-modal');
    if (o) o.hidden = true;
    this._modalOnOk = null;
  },

  quitTest() {
    this._showModal('Exit this test?', 'Your answers so far will be discarded.', () => {
      clearInterval(this.timerInterval);
      this.session = null;
      LS.del(KEY.draft);
      this.go(['home'], true);
    }, 'Exit');
  },

  submitTest(force = false) {
    const s = this.session;
    if (!s || !s.questions.length) return;
    const unanswered = s.questions.filter(q => s.answers[q.id] === undefined).length;

    const doSubmit = () => {
      clearInterval(this.timerInterval);
      let correct = 0;
      this.reviewData = s.questions.map((q, i) => {
        const ua = s.answers[q.id];
        const isCorrect = ua === q.correct;
        if (isCorrect) correct++;
        return {
          id: q.id, num: i + 1, text: q.text, options: q.options, correct: q.correct,
          userAnswer: ua, isCorrect, explanation: q.explanation || '', whyWrong: q.whyWrong || null, chapter: q.chapter || ''
        };
      });
      const skipped = this.reviewData.filter(r => r.userAnswer === undefined).length;
      const wrong   = this.reviewData.length - correct - skipped;

      this.lastConfig  = { subject: s.subject, mode: s.mode, chapter: s.chapter };
      this.reviewIndex = 0;
      this.reviewFilter = 'all';
      this.summary = { correct, wrong, skipped, total: this.reviewData.length };

      this._updateProgress(s.subject, this.reviewData);
      this._recordStreakActivity(correct + wrong);

      const now = Date.now();
      const past = LS.get(KEY.results, []);
      past.unshift({
        ...this.lastConfig, grade: state.grade, board: state.board, correct, total: this.reviewData.length,
        ts: now,
        when: new Date(now).toLocaleString(undefined,
          { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })
      });
      LS.set(KEY.results, past.slice(0, 30));

      this.session = null;
      LS.del(KEY.draft);
      if (window.riseSync) riseSync.push();
      this.go(['results'], true);
    };

    if (!force && unanswered > 0) {
      this._showModal('Submit test?', `${plural(unanswered, 'question')} still unanswered.`, doSubmit, 'Submit');
    } else {
      doSubmit();
    }
  },

  _updateProgress(subject, reviewData) {
    const store = LS.get(KEY.progress, {});
    const key = scopeKey(subject);
    const bySubj = store[key] || (store[key] = {});
    const now = Date.now();
    reviewData.forEach(r => {
      if (r.userAnswer === undefined) return;
      const rec = bySubj[r.id] || { box: 0, correctCount: 0, wrongCount: 0 };
      rec.chapter = r.chapter;
      rec.lastAt = now;
      rec.lastResult = r.isCorrect ? 'correct' : 'wrong';
      if (r.isCorrect) {
        rec.box = Math.min((rec.box || 0) + 1, SRS_INTERVALS.length - 1);
        rec.correctCount = (rec.correctCount || 0) + 1;
      } else {
        rec.box = 0;
        rec.wrongCount = (rec.wrongCount || 0) + 1;
      }
      rec.due = now + SRS_INTERVALS[rec.box] * 86400000;
      bySubj[r.id] = rec;
    });
    LS.set(KEY.progress, store);
  }

});
