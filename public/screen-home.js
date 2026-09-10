// ─── Home screen ──────────────────────────────────────────────────────────────
Object.assign(app, {

  _screenHome() {
    const subjects = SUBJECTS[state.board] || [];
    const draft    = this._draft();

    const resume = draft ? `
      <section class="resume-banner card">
        <div>
          <p class="resume-title">Resume your ${esc(MODES[draft.mode].label.toLowerCase())}</p>
          <p class="resume-sub">${esc(draft.subject)}${draft.chapter ? ' · ' + esc(draft.chapter) : ''} —
             ${Object.keys(draft.answers).length} of ${draft.questions.length} answered${draft.remaining !== null ? ` · ${this._mmss(draft.remaining)} left` : ''}</p>
        </div>
        <div class="resume-actions">
          <button class="btn" onclick="app.discardDraft()">Discard</button>
          <button class="btn primary" onclick="app.resumeDraft()">Resume</button>
        </div>
      </section>` : '';

    const cards = subjects.map(subject => {
      const hasBank  = !!bankSlug(subject);
      const open     = state.openPicker === subject;

      const actions = hasBank
        ? `<button class="btn primary act-btn" onclick="app.startTest({subject:'${esc(subject)}',mode:'mock'})">
             Mock test <small>${MODES.mock.count} Q · ${MODES.mock.seconds / 60} min</small>
           </button>
           <button class="btn act-btn" aria-expanded="${open}" onclick="app.togglePicker('${esc(subject)}')">
             Chapter drill <small>${MODES.drill.count} Q · untimed</small>
           </button>`
        : `<span class="soon-tag">Question bank coming soon</span>`;

      const saSlug = saBankSlug(subject);
      const saLink = saSlug
        ? `<button class="btn act-btn ghost half" onclick="app.go(['shortanswers','${esc(subject)}'])">Board Short Answers</button>`
        : '';

      const solvedSlug = solvedBankSlug(subject);
      const solvedLink = solvedSlug
        ? `<button class="btn act-btn ghost half" onclick="app.go(['solved','${esc(subject)}'])">Textbook Solved Exercises</button>`
        : '';

      const bmCount  = hasBank ? this._bookmarkCount(subject) : 0;
      const dueCount = hasBank ? this._dueCount(subject) : 0;
      const reviewLinks = (bmCount || dueCount) ? `
          <div class="subj-actions">
            ${bmCount  ? `<button class="btn act-btn ghost small" onclick="app.startBookmarkReview('${esc(subject)}')">&#9733; Bookmarked <small>${bmCount}</small></button>` : ''}
            ${dueCount ? `<button class="btn act-btn ghost small" onclick="app.startSpacedReview('${esc(subject)}')">&#8635; Due for review <small>${dueCount}</small></button>` : ''}
          </div>` : '';

      return `
        <article class="subj-card card">
          <header class="subj-head">
            <h3>${esc(subject)}</h3>
            <span class="subj-meta" data-meta="${esc(subject)}">${hasBank ? '&nbsp;' : ''}</span>
          </header>
          ${hasBank ? this._difficultyBar(subject) : ''}
          <div class="subj-actions">${actions}${saLink}${solvedLink}</div>
          ${reviewLinks}
          <div class="chapter-picker" data-picker="${esc(subject)}" ${open ? '' : 'hidden'}>
            <p class="picker-hint">Pick a chapter to drill</p>
            <div class="chapter-chips" data-chips="${esc(subject)}">Loading chapters…</div>
          </div>
        </article>`;
    }).join('');

    const history = LS.get(KEY.results, [])
      .filter(h => (h.grade || 'X') === state.grade && h.board === state.board)
      .slice(0, 5);

    const recent = history.length ? `
      <section class="home-section">
        <h2 class="section-title">Recent attempts</h2>
        <ul class="recent-list">
          ${history.map(h => `
            <li class="recent-row card">
              <span class="recent-score ${h.correct / h.total >= 0.6 ? 'good' : 'weak'}">${Math.round(h.correct / h.total * 100)}%</span>
              <span class="recent-desc">
                <strong>${esc(h.subject)}</strong>
                <small>${esc(MODES[h.mode]?.label || h.mode)}${h.chapter ? ' · ' + esc(h.chapter) : ''} · ${h.correct}/${h.total} · ${esc(h.when)}</small>
              </span>
              <button class="btn small" onclick="app.retryFromHistory(${h.ts})">Retry</button>
            </li>`).join('')}
        </ul>
      </section>` : '';

    const streakHtml = this._streakBanner();
    const arenaCard = `
      <a class="streak-arena-card card arena-card" onclick="app.go(['arena'])" role="button" tabindex="0">
        <span class="arena-card-icon">⚡</span>
        <div class="arena-card-body">
          <p class="arena-card-title">Arena</p>
          <p class="arena-card-sub">Fast MCQ blitz · 3 subjects · race the clock</p>
        </div>
      </a>`;

    const streakArenaRow = `
      <div class="streak-arena-row">
        <div class="streak-arena-half">${streakHtml}</div>
        <div class="streak-arena-half">${arenaCard}</div>
      </div>`;

    return `
      <div class="screen home-screen">
        <div class="home-heading-row">
          ${this._gradeTabs()}
          <p class="subtitle">Pick a subject and start — no extra screens in between.</p>
        </div>
        ${streakArenaRow}
        ${resume}
        <section class="home-section">
          <div class="subj-grid">${cards}</div>
        </section>
        ${recent}
      </div>`;
  },

  _hydrateHome() {
    (SUBJECTS[state.board] || []).filter(s => bankSlug(s)).forEach(subject => {
      loadBank(subject).then(list => {
        const meta = document.querySelector(`[data-meta="${CSS.escape(subject)}"]`);
        if (meta) meta.textContent = `${list.length} questions · ${chaptersOf(list).length} chapters`;
        if (state.openPicker === subject) this._renderChips(subject, list);
      }).catch(() => {
        const meta = document.querySelector(`[data-meta="${CSS.escape(subject)}"]`);
        if (meta) meta.textContent = 'Questions unavailable';
      });
    });
    if (state.openPicker) {
      const bank = bankCache[state.openPicker];
      if (bank) this._renderChips(state.openPicker, bank);
    }
  },

  _DIFFICULTIES: [['all', 'All'], ['easy', 'Easy'], ['medium', 'Medium'], ['hard', 'Hard']],

  _difficultyBar(subject) {
    const cur = state.difficulty[subject] || 'all';
    return `<div class="filter-bar diff-bar" data-diff="${esc(subject)}">
      ${this._DIFFICULTIES.map(([id, label]) =>
        `<button class="filter-tab ${cur === id ? 'active' : ''}" data-level="${id}"
                 onclick="app.setDifficulty('${esc(subject)}','${id}')">${label}</button>`).join('')}
    </div>`;
  },

  setDifficulty(subject, level) {
    state.difficulty[subject] = level;
    const bar = document.querySelector(`[data-diff="${CSS.escape(subject)}"]`);
    if (bar) bar.querySelectorAll('.filter-tab').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.level === level));
  },

  togglePicker(subject) {
    state.openPicker = state.openPicker === subject ? null : subject;
    document.querySelectorAll('[data-picker]').forEach(el => {
      el.hidden = el.getAttribute('data-picker') !== state.openPicker;
    });
    document.querySelectorAll('[aria-expanded]').forEach(el => el.setAttribute('aria-expanded', 'false'));
    if (!state.openPicker) return;
    const card = document.querySelector(`[data-picker="${CSS.escape(subject)}"]`);
    const btn  = card && card.parentElement.querySelector('[aria-expanded]');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    loadBank(subject)
      .then(list => this._renderChips(subject, list))
      .catch(err => {
        const box = document.querySelector(`[data-chips="${CSS.escape(subject)}"]`);
        if (box) box.textContent = err.message;
      });
  },

  _renderChips(subject, list) {
    const box = document.querySelector(`[data-chips="${CSS.escape(subject)}"]`);
    if (!box) return;
    const chapters = chaptersOf(list);
    this._chapterIndex = this._chapterIndex || {};
    this._chapterIndex[subject] = chapters.map(c => c.name);
    box.innerHTML = chapters
      .map((c, i) => {
        const badge = c.real
          ? `<span class="chip-badge" title="${esc(c.real)} of ${esc(c.count)} questions are from real board papers (${esc(c.years.join(', '))})">&#128293; ${esc(c.real)}</span>`
          : '';
        return `<button class="chip" onclick="app.drillChapter('${esc(subject)}',${i})">
                   ${esc(c.name)}<span class="chip-count">${c.count}</span>${badge}
                 </button>`;
      }).join('');
  },

  drillChapter(subject, i) {
    const name = ((this._chapterIndex || {})[subject] || [])[i];
    if (name) this.startTest({ subject, mode: 'drill', chapter: name });
  },

  _draft() {
    const d = LS.get(KEY.draft, null);
    if (!d || !d.questions || !d.questions.length) return null;
    if (d.board !== state.board) return null;
    return d;
  },
  _saveDraft() {
    if (!this.session) return;
    LS.set(KEY.draft, { ...this.session, board: state.board });
  },
  discardDraft() { LS.del(KEY.draft); this.render(); },
  resumeDraft() {
    const d = this._draft();
    if (!d) { this.render(); return; }
    this.session = d;
    this.go(['test']);
  },

  _streakScopeKey(grade, board) { return `${grade || state.grade}::${board || state.board}`; },

  _recordStreakActivity(answeredCount) {
    if (!answeredCount) return;
    const today = todayStr();
    const store = LS.get(KEY.streak, {});
    const key = this._streakScopeKey();
    const st = store[key] || (store[key] = { current: 0, longest: 0, lastDate: null, todayDate: null, todayCount: 0 });
    if (st.todayDate !== today) { st.todayDate = today; st.todayCount = 0; }
    st.todayCount += answeredCount;
    if (st.lastDate !== today) {
      st.current = (st.lastDate === addDaysStr(today, -1)) ? st.current + 1 : 1;
      st.longest = Math.max(st.longest || 0, st.current);
      st.lastDate = today;
    }
    LS.set(KEY.streak, store);
  },

  _streakBanner() {
    const store = LS.get(KEY.streak, {});
    const st = store[this._streakScopeKey()];
    if (!st || !st.current) return `
      <section class="streak-banner card">
        <span class="streak-flame" aria-hidden="true">&#128293;</span>
        <div class="streak-body">
          <p class="streak-count">No streak yet</p>
          <p class="streak-sub">Answer ${plural(DAILY_GOAL, 'question')} today to start your streak.</p>
          <div class="streak-goal-bar"><div class="streak-goal-fill" style="width:0%"></div></div>
        </div>
      </section>`;
    const today = todayStr();
    const activeToday = st.lastDate === today;
    const doneToday = st.todayDate === today ? st.todayCount : 0;
    const goalMet = doneToday >= DAILY_GOAL;

    const sub = !activeToday
      ? `Answer ${plural(DAILY_GOAL, 'question')} today to keep it going.`
      : goalMet
        ? `Nice — ${plural(doneToday, 'question')} today, goal met.`
        : `${doneToday}/${DAILY_GOAL} questions today — keep going to hit your goal.`;

    const pct = Math.min(100, Math.round(doneToday / DAILY_GOAL * 100));

    return `
      <section class="streak-banner card">
        <span class="streak-flame" aria-hidden="true">&#128293;</span>
        <div class="streak-body">
          <p class="streak-count">${st.current}-day streak</p>
          <p class="streak-sub">${sub}</p>
          <div class="streak-goal-bar"><div class="streak-goal-fill ${goalMet ? 'met' : ''}" style="width:${pct}%"></div></div>
        </div>
      </section>`;
  }

});
