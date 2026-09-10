// ─── Solved Exercises screen ───────────────────────────────────────────────────
Object.assign(app, {

  _screenSolvedExercises(subject) {
    return `
      <div class="screen sa-screen">
        <div class="sa-topbar">
          <label class="sa-chapter-select-wrap">
            <span class="sr-only">Chapter</span>
            <select class="sa-chapter-select" id="sol-chapter-select" aria-label="Chapter"
                    onchange="app.setSolvedChapter('${esc(subject)}', this.value)">
              <option>Loading chapters…</option>
            </select>
          </label>
          <div class="sa-tabs sol-exercise-tabs" id="sol-exercise-tabs" role="tablist" aria-label="Exercise" hidden></div>
          <button class="btn quit-btn" onclick="app.go(['home'])">&#10005; Exit</button>
        </div>
        <div id="sol-list" class="sa-list">Loading…</div>
      </div>`;
  },

  _hydrateSolvedExercises(subject) {
    loadSolvedBank(subject)
      .then(list => {
        this._renderSolvedChapterSelect(subject, list);
        this._renderSolvedExerciseTabs(subject, list);
        this._renderSolvedList(subject, list);
      })
      .catch(err => {
        const box = document.getElementById('sol-list');
        if (box) box.textContent = err.message;
      });
  },

  _renderSolvedChapterSelect(subject, list) {
    const box = document.getElementById('sol-chapter-select');
    if (!box) return;
    const chapters = chaptersOf(list);
    if (!state.solvedChapter[subject] && chapters.length) state.solvedChapter[subject] = chapters[0].name;
    const active = state.solvedChapter[subject] || '';
    box.innerHTML = chapters.map(c => `
      <option value="${esc(c.name)}" ${active === c.name ? 'selected' : ''}>${esc(c.name)} (${c.count})</option>`).join('');
  },

  setSolvedChapter(subject, name) {
    state.solvedChapter[subject] = name;
    state.solvedExercise[subject] = '';
    loadSolvedBank(subject).then(list => {
      this._renderSolvedChapterSelect(subject, list);
      this._renderSolvedExerciseTabs(subject, list);
      this._renderSolvedList(subject, list);
    });
  },

  _renderSolvedExerciseTabs(subject, list) {
    const box = document.getElementById('sol-exercise-tabs');
    if (!box) return;
    const chapters = chaptersOf(list);
    const activeChapter = state.solvedChapter[subject] || (chapters[0] && chapters[0].name) || '';

    const inChapter = list.filter(q => (q.chapter || 'General') === activeChapter);
    const exercises = [];
    const counts = new Map();
    inChapter.forEach(q => {
      const ex = q.exercise || 'General';
      counts.set(ex, (counts.get(ex) || 0) + 1);
      if (!exercises.includes(ex)) exercises.push(ex);
    });
    box.hidden = exercises.length < 2;
    const active = state.solvedExercise[subject] || '';
    const tab = (name, label, count) => `
      <button class="filter-tab ${active === name ? 'active' : ''}" aria-pressed="${active === name}"
              onclick="app.setSolvedExercise('${esc(subject)}','${esc(name)}')">${esc(label)}${count != null ? ` <small>${count}</small>` : ''}</button>`;
    box.innerHTML = tab('', 'All exercises', inChapter.length)
      + exercises.map(ex => tab(ex, ex, counts.get(ex))).join('');
  },

  setSolvedExercise(subject, name) {
    state.solvedExercise[subject] = name;
    loadSolvedBank(subject).then(list => {
      this._renderSolvedExerciseTabs(subject, list);
      this._renderSolvedList(subject, list);
    });
  },

  _renderSolvedList(subject, list) {
    const box = document.getElementById('sol-list');
    if (!box) return;
    const revealed = LS.get(KEY.solvedRevealed, {})[scopeKey(subject)] || {};
    const chapters = chaptersOf(list);
    const activeChapter = state.solvedChapter[subject] || (chapters[0] && chapters[0].name) || '';
    const activeExercise = state.solvedExercise[subject] || '';

    let qs = list.filter(q => (q.chapter || 'General') === activeChapter);
    if (activeExercise) qs = qs.filter(q => (q.exercise || 'General') === activeExercise);

    const byExercise = new Map();
    qs.forEach(q => {
      const ex = q.exercise || 'General';
      (byExercise.get(ex) || byExercise.set(ex, []).get(ex)).push(q);
    });
    box.innerHTML = [...byExercise.entries()].map(([ex, exQs]) => `
      <h3 class="sol-exercise-title">${esc(ex)}</h3>
      ${exQs.map(q => this._renderSolvedCard(subject, q, !!revealed[q.id])).join('')}`).join('');
  },

  _renderSolvedCard(subject, q, isRevealed) {
    const solutionCol = isRevealed ? `
        <div class="sa-model">
          <strong>Solution</strong>
          <p>${esc(q.solution).replace(/\n/g, '<br>')}</p>
          ${q.steps && q.steps.length ? `
            <strong>Working, step by step</strong>
            <ul>${q.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}
        </div>`
      : `<div class="sa-model sa-model-placeholder">
          <button class="btn act-btn" onclick="app.revealSolved('${esc(subject)}','${esc(q.id)}')">Show solution</button>
        </div>`;
    return `
      <article class="card sa-card" data-sol-id="${esc(q.id)}">
        <header class="sa-card-head">
          <span class="sa-marks">${esc(q.number)}</span>
        </header>
        <div class="sa-body">
          <div class="sa-your-answer">
            <p class="sa-question">${esc(breakParts(q.question)).replace(/\n/g, '<br>')}</p>
          </div>
          ${solutionCol}
        </div>
      </article>`;
  },

  revealSolved(subject, id) {
    const store = LS.get(KEY.solvedRevealed, {});
    const scope = store[scopeKey(subject)] || (store[scopeKey(subject)] = {});
    scope[id] = true;
    LS.set(KEY.solvedRevealed, store);
    if (window.riseSync) riseSync.push();
    const card = document.querySelector(`[data-sol-id="${CSS.escape(id)}"]`);
    if (card) loadSolvedBank(subject).then(list => {
      const q = list.find(x => x.id === id);
      if (q) card.outerHTML = this._renderSolvedCard(subject, q, true);
    });
  }

});
