// ─── Board, Grade, Progress screens ───────────────────────────────────────────
Object.assign(app, {

  _screenBoard() {
    return `
      <div class="screen welcome-screen">
        <div class="welcome-layout">
          <div class="welcome-left">
            <div class="welcome-logo">
              <svg class="welcome-logo-icon" width="48" height="48" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="7" fill="#2563eb"/>
                <rect x="5"  y="22" width="5" height="5"  rx="1.5" fill="rgba(255,255,255,0.55)"/>
                <rect x="13" y="17" width="5" height="10" rx="1.5" fill="rgba(255,255,255,0.78)"/>
                <rect x="21" y="11" width="5" height="16" rx="1.5" fill="#ffffff"/>
                <polygon points="23.5,4 27,9.5 20,9.5" fill="#ffffff"/>
              </svg>
              <span>Rise</span>
            </div>
            <p class="welcome-tagline">Grade X &amp; XII board exam practice — free. Sign-in optional.</p>
            <ul class="welcome-features">
              <li><span class="wf-icon">📝</span><div><strong>Mock tests</strong><span>Timed chapter &amp; full-paper MCQ mocks with instant scoring</span></div></li>
              <li><span class="wf-icon">⚡</span><div><strong>Arena</strong><span>Solo blitz &amp; live challenge rooms — beat the clock, build combos, race friends</span></div></li>
              <li><span class="wf-icon">✏️</span><div><strong>Short answers</strong><span>Board-style VSA &amp; SA questions with model answers</span></div></li>
              <li><span class="wf-icon">📖</span><div><strong>Solved exercises</strong><span>Textbook questions worked step-by-step</span></div></li>
              <li><span class="wf-icon">🗒️</span><div><strong>Revision notes</strong><span>Key formulae, theorems, logic &amp; tips per chapter</span></div></li>
              <li><span class="wf-icon">🔁</span><div><strong>Spaced repetition</strong><span>Leitner system resurfaces your weak questions automatically</span></div></li>
              <li><span class="wf-icon">🔥</span><div><strong>Streaks &amp; goals</strong><span>Daily practice goal with streak tracking to keep you consistent</span></div></li>
              <li><span class="wf-icon">✦</span><div><strong>Ask Cloé</strong><span>AI study companion — ask anything about your Grade 10 subjects, get concise answers &amp; curious follow-up questions</span></div></li>
            </ul>
          </div>
          <div class="welcome-right">
            <p class="welcome-pick-label">Choose your board to get started</p>
            <div class="board-list">
              ${BOARDS.map(b => `
                <button class="btn board-btn" onclick="app.setBoard('${b.id}')">
                  <strong>${esc(b.name)}</strong>
                  <span>${esc(b.desc)}</span>
                </button>`).join('')}
            </div>
            <p class="welcome-foot">You can switch boards any time from the ☰ menu.</p>
          </div>
        </div>
      </div>`;
  },

  setBoard(board) {
    state.board = board;
    LS.set(KEY.board, board);
    this.go(['home'], true);
  },

  switchBoard(board) {
    if (board === state.board) return;
    state.board = board;
    state.openPicker = null;
    state.mobileMenuOpen = false;
    LS.set(KEY.board, board);
    const cur = parseHash();
    if (['results', 'notes', 'progress', 'careers'].includes(cur.name)) {
      this.go(['home']);
    } else {
      this.render();
    }
  },

  setGrade(grade) {
    if (grade === state.grade) return;
    state.grade = grade;
    state.openPicker = null;
    LS.set(KEY.grade, grade);
    this.render();
  },

  _gradeTabs() {
    return `
      <div class="filter-bar grade-tabs" role="group" aria-label="Grade">
        ${GRADES.map(g => {
          const noData = g.id === 'XII';
          return `
          <button class="filter-tab ${g.id === state.grade ? 'active' : ''}"
                  aria-pressed="${g.id === state.grade}" ${noData ? 'disabled title="Coming soon — no question banks yet"' : `onclick="app.setGrade('${g.id}')"`}>${esc(g.label)}</button>`;
        }).join('')}
      </div>`;
  },

  _screenProgress() {
    const subjects = (SUBJECTS[state.board] || []).filter(s => bankSlug(s));
    const store = LS.get(KEY.progress, {});
    const now = Date.now();

    const sections = subjects.map(subject => {
      const bySubj = store[scopeKey(subject)] || {};
      const chapters = {};
      Object.values(bySubj).forEach(r => {
        const name = r.chapter || 'General';
        const c = chapters[name] || (chapters[name] = { correct: 0, wrong: 0, due: 0 });
        c.correct += r.correctCount || 0;
        c.wrong += r.wrongCount || 0;
        if (r.due <= now) c.due++;
      });
      const rows = Object.entries(chapters).sort((a, b) => {
        const accA = a[1].correct / (a[1].correct + a[1].wrong || 1);
        const accB = b[1].correct / (b[1].correct + b[1].wrong || 1);
        return accA - accB;
      });
      if (!rows.length) return '';
      const dueTotal = this._dueCount(subject);
      return `
        <section class="home-section">
          <h2 class="section-title">${esc(subject)}</h2>
          ${dueTotal ? `<button class="btn act-btn ghost small" onclick="app.startSpacedReview('${esc(subject)}')">
                          &#8635; Review ${plural(dueTotal, 'due question')}</button>` : ''}
          <ul class="recent-list">
            ${rows.map(([chapter, c]) => {
              const total = c.correct + c.wrong;
              const pct = total ? Math.round(c.correct / total * 100) : 0;
              return `<li class="recent-row card">
                <span class="recent-score ${pct >= 60 ? 'good' : 'weak'}">${pct}%</span>
                <span class="recent-desc">
                  <strong>${esc(chapter)}</strong>
                  <small>${plural(total, 'attempt')}${c.due ? ` · ${c.due} due for review` : ''}</small>
                </span>
              </li>`;
            }).join('')}
          </ul>
        </section>`;
    }).join('');

    return `
      <div class="screen">
        <div class="progress-topbar">
          <p class="subtitle" style="margin:0">Accuracy by chapter, weakest first — built from your attempted mocks and drills.</p>
          <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
        </div>
        ${sections || '<div class="card empty-state">Take a mock test or chapter drill to start building your progress history.</div>'}
      </div>`;
  }

});
