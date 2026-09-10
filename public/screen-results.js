// ─── Results / review screen ───────────────────────────────────────────────────
Object.assign(app, {

  _screenResults() {
    const { correct, wrong, skipped, total } = this.summary;
    const pct = Math.round(correct / total * 100);
    const cfg = this.lastConfig;
    const FILTERS = [
      { id: 'all',     label: `All ${total}` },
      { id: 'wrong',   label: `Incorrect ${wrong}` },
      { id: 'skipped', label: `Skipped ${skipped}` }
    ];
    return `
      <div class="screen" id="results">
        <div class="test-topbar">
          <p class="test-title">${esc(cfg.subject)}${cfg.chapter ? ' · ' + esc(cfg.chapter) : ''} · ${MODES[cfg.mode].label} — results</p>
          <div class="score-summary">
            <div class="score-tile pct-tile ${pct >= 60 ? 'good' : 'weak'}"><span class="tile-val">${pct}%</span><span class="tile-lbl">Score</span></div>
            <div class="score-tile correct-tile"><span class="tile-val">${correct}</span><span class="tile-lbl">Correct</span></div>
            <div class="score-tile wrong-tile"><span class="tile-val">${wrong}</span><span class="tile-lbl">Incorrect</span></div>
            <div class="score-tile skip-tile"><span class="tile-val">${skipped}</span><span class="tile-lbl">Skipped</span></div>
            <button class="btn exit-btn" onclick="app.exitReview()">Exit</button>
          </div>
        </div>
        <div class="test-layout">
          <div class="card question-area" id="rev-card-area"></div>
          <div class="card palette-area">
            <div class="palette-inner">
              <div class="filter-bar small-filters">
                ${FILTERS.map(f => `<button class="filter-tab ${this.reviewFilter === f.id ? 'active' : ''}"
                    onclick="app.setReviewFilter('${f.id}')">${f.label}</button>`).join('')}
              </div>
              <div id="rpal-grid" class="omr-grid"></div>
              <div class="results-actions">
                <button class="btn primary" onclick="app.retryLast()">Retry this ${cfg.mode === 'mock' ? 'mock' : cfg.mode === 'bookmark' ? 'bookmarked set' : cfg.mode === 'srs' ? 'review' : 'drill'}</button>
                <button class="btn" onclick="app.exitReview()">Back to practice</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  },

  setReviewFilter(id) {
    this.reviewFilter = id;
    document.querySelectorAll('#results .filter-tab').forEach(btn =>
      btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${id}'`)));
    this._buildReviewPalette();
    const first = this._reviewList()[0];
    if (first) this.showReviewQuestion(this.reviewData.indexOf(first));
  },

  _reviewList() {
    const d = this.reviewData || [];
    if (this.reviewFilter === 'wrong')   return d.filter(r => !r.isCorrect && r.userAnswer !== undefined);
    if (this.reviewFilter === 'skipped') return d.filter(r => r.userAnswer === undefined);
    return d;
  },

  _buildReviewPalette() {
    const grid = document.getElementById('rpal-grid');
    if (!grid || !this.reviewData) return;
    const visible = this._reviewList();
    if (!visible.length) { grid.innerHTML = '<p class="empty-inline">Nothing here — nice work.</p>'; return; }
    grid.innerHTML = visible.map(r => {
      const i = this.reviewData.indexOf(r);
      const cls = r.isCorrect ? 'rev-correct' : r.userAnswer === undefined ? 'rev-skip' : 'rev-wrong';
      return `<button class="omr-bubble ${cls}" onclick="app.showReviewQuestion(${i})"
                      aria-label="Question ${r.num}">${r.num}</button>`;
    }).join('');
  },

  showReviewQuestion(i) {
    const data = this.reviewData || [];
    if (!data.length) return;
    this.reviewIndex = Math.max(0, Math.min(i, data.length - 1));
    const r = data[this.reviewIndex];
    const visible = this._reviewList();
    const pos = visible.indexOf(r);

    const optHtml = r.options.map((opt, oi) => {
      let cls = 'opt-neutral';
      if (oi === r.correct) cls = 'opt-correct';
      else if (oi === r.userAnswer) cls = 'opt-wrong';
      const marker = oi === r.correct ? '✓' : (oi === r.userAnswer && !r.isCorrect ? '✗' : '');
      return `<div class="rev-opt ${cls}">
                <span class="rev-opt-label">${String.fromCharCode(65 + oi)}</span>
                <span>${esc(opt)}</span>
                ${marker ? `<span class="rev-opt-marker">${marker}</span>` : ''}
              </div>`;
    }).join('');

    const badge = r.isCorrect ? '<span class="rev-badge correct">Correct</span>'
      : r.userAnswer === undefined ? '<span class="rev-badge skipped">Not attempted</span>'
      : '<span class="rev-badge wrong">Incorrect</span>';

    const prevR = pos > 0 ? visible[pos - 1] : null;
    const nextR = pos > -1 && pos < visible.length - 1 ? visible[pos + 1] : null;

    const wrongWhyItems = (r.whyWrong || [])
      .map((txt, oi) => (txt && oi !== r.correct) ? `<li><strong>${String.fromCharCode(65 + oi)}:</strong> ${esc(txt)}</li>` : '')
      .join('');
    const wrongWhyBlock = wrongWhyItems
      ? `<div class="rev-wrong-why"><strong>Why the others are wrong:</strong><ul>${wrongWhyItems}</ul></div>` : '';

    const area = document.getElementById('rev-card-area');
    if (area) area.innerHTML = `
      <div class="rev-card-header">
        <span class="rev-q-num">Q${r.num} of ${data.length}</span>${badge}
        <span class="rev-chapter">${esc(r.chapter || '')}</span>
        <button class="btn small review-btn" id="review-bookmark-btn"
                onclick="app.toggleBookmark('${esc(this.lastConfig.subject)}','${esc(r.id)}')">&#9734; Bookmark</button>
      </div>
      <p class="rev-q-text">${esc(breakParts(r.text)).replace(/\n/g, '<br>')}</p>
      <div class="rev-options">${optHtml}</div>
      <div class="rev-explanation"><strong>Why:</strong> ${esc(r.explanation || 'Review this topic in your textbook.')}</div>
      ${wrongWhyBlock}
      <div class="test-nav">
        <button class="btn nav-btn" ${prevR ? `onclick="app.showReviewQuestion(${data.indexOf(prevR)})"` : 'disabled'}>&#8592; Prev</button>
        <button class="btn primary nav-btn" ${nextR ? `onclick="app.showReviewQuestion(${data.indexOf(nextR)})"` : 'disabled'}>Next &#8594;</button>
      </div>`;
    this._renderBookmarkBtn('review-bookmark-btn', this.lastConfig.subject, r.id);

    document.querySelectorAll('#rpal-grid .omr-bubble').forEach(btn => {
      btn.classList.toggle('current', btn.textContent.trim() === String(r.num));
    });
  },

  retryLast() {
    const cfg = this.lastConfig;
    if (cfg.mode === 'bookmark') { this.startBookmarkReview(cfg.subject); return; }
    if (cfg.mode === 'srs')      { this.startSpacedReview(cfg.subject);  return; }
    this.startTest({ ...cfg });
  },

  exitReview() {
    this.reviewData = null;
    this.go(['home'], true);
  },

  retryFromHistory(ts) {
    const h = LS.get(KEY.results, []).find(r => r.ts === ts);
    if (!h) return;
    if (h.mode === 'bookmark') { this.startBookmarkReview(h.subject); return; }
    if (h.mode === 'srs')      { this.startSpacedReview(h.subject);  return; }
    this.startTest({ subject: h.subject, mode: h.mode, chapter: h.chapter || null });
  }

});
