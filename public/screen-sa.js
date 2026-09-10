// ─── Short Answers screen ─────────────────────────────────────────────────────
Object.assign(app, {

  _screenShortAnswers(subject) {
    return `
      <div class="screen sa-screen">
        <div class="sa-topbar">
          <label class="sa-chapter-select-wrap">
            <span class="sr-only">Chapter</span>
            <select class="sa-chapter-select" id="sa-chapter-select" aria-label="Chapter"
                    onchange="app.setSAChapter('${esc(subject)}', this.value)">
              <option>Loading chapters…</option>
            </select>
          </label>
          <button class="btn quit-btn" onclick="app.go(['home'])">&#10005; Exit</button>
        </div>
        <div id="sa-list" class="sa-list">Loading…</div>
      </div>`;
  },

  _hydrateShortAnswers(subject) {
    loadSABank(subject)
      .then(list => {
        this._renderSAChapterSelect(subject, list);
        this._renderSAList(subject, list);
      })
      .catch(err => {
        const box = document.getElementById('sa-list');
        if (box) box.textContent = err.message;
      });
  },

  _renderSAChapterSelect(subject, list) {
    const box = document.getElementById('sa-chapter-select');
    if (!box) return;
    const chapters = chaptersOf(list);
    if (!state.saChapter[subject] && chapters.length) state.saChapter[subject] = chapters[0].name;
    const active = state.saChapter[subject] || '';
    box.innerHTML = chapters.map(c => `
      <option value="${esc(c.name)}" ${active === c.name ? 'selected' : ''}>${esc(c.name)} (${c.count})</option>`).join('');
  },

  setSAChapter(subject, name) {
    state.saChapter[subject] = name;
    loadSABank(subject).then(list => {
      this._renderSAChapterSelect(subject, list);
      this._renderSAList(subject, list);
    });
  },

  _renderSAList(subject, list) {
    const box = document.getElementById('sa-list');
    if (!box) return;
    const drafts = LS.get(KEY.saDrafts, {})[scopeKey(subject)] || {};
    const chapters = chaptersOf(list);
    const activeChapter = state.saChapter[subject] || (chapters[0] && chapters[0].name) || '';
    const qs = list.filter(q => (q.chapter || 'General') === activeChapter);
    box.innerHTML = qs.map(q => this._renderSACard(subject, q, drafts[q.id])).join('');
  },

  _renderSACard(subject, q, draft) {
    draft = draft || {};
    const revealed = !!draft.revealed;
    const status = draft.status || '';
    const modelCol = revealed ? `
        <div class="sa-model">
          <strong>Model answer</strong>
          <p>${esc(q.modelAnswer)}</p>
          ${q.keyPoints && q.keyPoints.length ? `
            <strong>Key points to cover</strong>
            <ul>${q.keyPoints.map(k => `<li>${esc(k)}</li>`).join('')}</ul>` : ''}
          <div class="sa-markrow">
            <button class="btn small ${status === 'got-it' ? 'primary' : ''}" onclick="app.markSA('${esc(subject)}','${esc(q.id)}','got-it')">&#10003; Got it</button>
            <button class="btn small ${status === 'review' ? 'primary' : ''}" onclick="app.markSA('${esc(subject)}','${esc(q.id)}','review')">&#8635; Review again</button>
          </div>
        </div>`
      : `<div class="sa-model sa-model-placeholder">
          <button class="btn act-btn" onclick="app.revealSA('${esc(subject)}','${esc(q.id)}')">Show model answer</button>
        </div>`;
    return `
      <article class="card sa-card" data-sa-id="${esc(q.id)}">
        <header class="sa-card-head">
          <span class="sa-marks">${q.marks} mark${q.marks === 1 ? '' : 's'}</span>
          ${status ? `<span class="sa-status ${status}">${status === 'got-it' ? '&#10003; Got it' : '&#8635; Review again'}</span>` : ''}
        </header>
        <p class="sa-question">${esc(breakParts(q.text)).replace(/\n/g, '<br>')}</p>
        <div class="sa-body">
          <div class="sa-your-answer">
            <textarea id="sa-ta-${esc(q.id)}" class="sa-textarea" placeholder="Write your answer here (saved automatically)…"
                      oninput="app.saveSADraft('${esc(subject)}','${esc(q.id)}', this.value)">${esc(draft.text || '')}</textarea>
          </div>
          ${modelCol}
        </div>
      </article>`;
  },

  _saveSATimer: null,
  saveSADraft(subject, id, text) {
    const store = LS.get(KEY.saDrafts, {});
    const scope = store[scopeKey(subject)] || (store[scopeKey(subject)] = {});
    scope[id] = { ...(scope[id] || {}), text, at: Date.now() };
    clearTimeout(this._saveSATimer);
    this._saveSATimer = setTimeout(() => LS.set(KEY.saDrafts, store), 300);
  },

  revealSA(subject, id) {
    const store = LS.get(KEY.saDrafts, {});
    const scope = store[scopeKey(subject)] || (store[scopeKey(subject)] = {});
    scope[id] = { ...(scope[id] || {}), revealed: true };
    LS.set(KEY.saDrafts, store);
    const card = document.querySelector(`[data-sa-id="${CSS.escape(id)}"]`);
    if (card) loadSABank(subject).then(list => {
      const q = list.find(x => x.id === id);
      if (q) card.outerHTML = this._renderSACard(subject, q, scope[id]);
    });
  },

  markSA(subject, id, status) {
    const store = LS.get(KEY.saDrafts, {});
    const scope = store[scopeKey(subject)] || (store[scopeKey(subject)] = {});
    const next = scope[id]?.status === status ? '' : status;
    scope[id] = { ...(scope[id] || {}), status: next };
    LS.set(KEY.saDrafts, store);
    if (window.riseSync) riseSync.push();
    loadSABank(subject).then(list => this._renderSAList(subject, list));
  }

});
