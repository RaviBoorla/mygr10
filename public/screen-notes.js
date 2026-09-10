// ─── Revision Notes screen (with lazy-loaded REVISION + THEOREMS data) ────────

const CBSE_SCIENCE_SPLIT = {
  Chemistry: ['Chemical Reactions & Equations', 'Acids, Bases & Salts', 'Metals & Non-Metals', 'Carbon & its Compounds'],
  Physics:   ['Light — Reflection & Refraction', 'Human Eye & Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy'],
  Biology:   ['Life Processes', 'Control & Coordination', 'Reproduction', 'Heredity & Evolution']
};

const NOTES_SOURCES = {
  Mathematics: [
    ['CBSE', 'CBSE Mathematics', 'Mathematics'],
    ['ICSE', 'ICSE Mathematics', 'Mathematics'],
    ['IB',   'IB Mathematics',   'Mathematics']
  ],
  Physics: [
    ['CBSE', 'Science', 'Science', CBSE_SCIENCE_SPLIT.Physics],
    ['ICSE', 'Physics', 'Physics']
  ],
  Chemistry: [
    ['CBSE', 'Science', 'Science', CBSE_SCIENCE_SPLIT.Chemistry],
    ['ICSE', 'Chemistry', 'Chemistry']
  ],
  Biology: [
    ['CBSE', 'Science', 'Science', CBSE_SCIENCE_SPLIT.Biology],
    ['ICSE', 'Biology', 'Biology'],
    ['IB',   'Biology', 'Biology']
  ],
  English: [
    ['CBSE', 'English', 'English'],
    ['ICSE', 'English', 'English']
  ],
  Hindi: [
    ['CBSE', 'Hindi', 'Hindi']
  ],
  'Computer Science': [
    ['ICSE', 'Computer Science', 'Computer Science']
  ]
};

const _consolidatedCache = {};
function consolidatedChapters(subjectId) {
  if (_consolidatedCache[subjectId]) return _consolidatedCache[subjectId];
  const merged = [];
  (NOTES_SOURCES[subjectId] || []).forEach(([board, key, theoremKey, only]) => {
    (REVISION[key] || [])
      .filter(ch => !only || only.includes(ch.chapter))
      .forEach(ch => {
        const name = ch.chapter.trim().toLowerCase();
        const hit = merged.find(m => m.chapter.trim().toLowerCase() === name);
        if (hit) { if (!hit._boards.includes(board)) hit._boards.push(board); }
        else merged.push({ ...ch, _boards: [board], _theoremKey: theoremKey });
      });
  });
  return (_consolidatedCache[subjectId] = merged);
}

let _revisionCallbacks = null; // null = not yet started; [] = loading; undefined = failed

function _ensureRevisionData(cb) {
  if (window.REVISION) { cb(); return; }
  if (_revisionCallbacks === undefined) {
    // Previous load failed — show error state, don't retry endlessly
    cb(); return;
  }
  if (Array.isArray(_revisionCallbacks)) {
    // Already loading — queue the callback
    _revisionCallbacks.push(cb);
    return;
  }
  // First call — start loading
  _revisionCallbacks = [cb];
  const s = document.createElement('script');
  s.src = 'revision-data.js?v=2';
  s.onload = () => {
    const pending = _revisionCallbacks || [];
    _revisionCallbacks = null; // reset so future calls go straight to cb()
    pending.forEach(fn => fn());
  };
  s.onerror = () => {
    _revisionCallbacks = undefined; // mark failed
    app.render(); // re-render to show error message
  };
  document.head.appendChild(s);
}

Object.assign(app, {

  _screenNotes(subjectId, chapterIdx) {
    const id = NOTES_CATALOG.some(s => s.id === subjectId) ? subjectId : NOTES_CATALOG[0].id;

    if (!window.REVISION) {
      const failed = _revisionCallbacks === undefined;
      if (!failed) {
        _ensureRevisionData(() => {
          Object.keys(_consolidatedCache).forEach(k => delete _consolidatedCache[k]);
          app.render();
        });
      }
      return `
        <div class="screen rev-screen">
          <div class="rev-heading-row">
            <div class="filter-bar notes-subj-tabs">${this._subjectTabs(id)}</div>
            <div class="rev-heading-right">
              ${this._gradeTabs()}
              <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
            </div>
          </div>
          <div class="card empty-state">${failed
            ? 'Could not load notes. Check your connection and <button class="btn ghost" onclick="location.reload()">reload the page</button>.'
            : 'Loading notes…'}</div>
        </div>`;
    }

    const chapters = state.grade === 'XII' ? [] : consolidatedChapters(id);
    const idx = chapters.length ? Math.max(0, Math.min(chapterIdx, chapters.length - 1)) : 0;
    return `
      <div class="screen rev-screen">
        <div class="rev-heading-row">
          <div class="filter-bar notes-subj-tabs">${this._subjectTabs(id)}</div>
          <div class="rev-heading-right">
            ${this._gradeTabs()}
            <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
          </div>
        </div>
        ${chapters.length ? `
        <div class="rev-topbar">
          <input class="notes-search" id="notes-search" type="search" placeholder="Search all chapters…  ( / )"
                 value="${esc(state.notesQuery)}" oninput="app.setNotesQuery(this.value)">
          <div class="filter-bar" id="notes-filters">${this._filterBar(this._chapterItems(id, chapters, idx))}</div>
        </div>
        <label class="ch-select-wrap">
          <span class="sr-only">Chapter</span>
          <select class="ch-select" id="notes-select" onchange="app.selectChapter(Number(this.value))">
            ${this._chapterOptions(chapters, idx)}
          </select>
        </label>
        <div class="rev-layout">
          <nav class="rev-nav" id="notes-nav" aria-label="Chapters">${this._chapterTabs(id, chapters, idx)}</nav>
          <div class="rev-content card" id="notes-body">${this._notesBody(id, chapters, idx)}</div>
        </div>` : `<div class="card empty-state">Notes for this subject are coming soon.</div>`}
      </div>`;
  },

  _subjectTabs(activeId) {
    return NOTES_CATALOG.map(s => `<button class="filter-tab ${s.id === activeId ? 'active' : ''}"
             onclick="app.go(['notes','${s.id}','0'])">${esc(s.label)}</button>`).join('');
  },

  _chLabel(ch) { return `${ch.chapter} (${ch._boards.join(', ')})`; },

  _FILTERS: [
    { id: 'all',           label: 'All' },
    { id: 'theorems',      label: 'Theorems' },
    { id: 'formulae',      label: 'Formulae' },
    { id: 'logic',         label: 'Logic' },
    { id: 'tips',          label: 'Tips' },
    { id: 'bestPractices', label: 'Best practices' }
  ],
  _CATS: [
    { key: 'theorems',      label: 'Theorem',       cls: 'badge-th' },
    { key: 'formulae',      label: 'Formula',       cls: 'badge-f'  },
    { key: 'logic',         label: 'Logic',         cls: 'badge-l'  },
    { key: 'tips',          label: 'Tip',           cls: 'badge-t'  },
    { key: 'bestPractices', label: 'Best practice', cls: 'badge-b'  }
  ],

  _filterBar(items) {
    const counts = {};
    (items || []).forEach(it => { counts[it.cat] = (counts[it.cat] || 0) + 1; });
    return this._FILTERS.map(f => {
      const n = f.id === 'all' ? (items || []).length : (counts[f.id] || 0);
      const dead = items && n === 0;
      return `<button class="filter-tab ${state.notesFilter === f.id ? 'active' : ''}"
               ${dead ? 'disabled' : ''} onclick="app.setNotesFilter('${f.id}')">
               ${f.label}${items ? `<span class="chip-count">${n}</span>` : ''}</button>`;
    }).join('');
  },

  _chapterOptions(chapters, idx) {
    return chapters.map((c, i) =>
      `<option value="${i}" ${i === idx ? 'selected' : ''}>${esc(this._chLabel(c))}</option>`).join('');
  },

  _chapterTabs(id, chapters, idx) {
    const q = state.notesQuery.trim().toLowerCase();
    return chapters.map((c, i) => {
      const hits = q ? this._chapterItems(id, chapters, i).filter(it => it.text.toLowerCase().includes(q)).length : 0;
      if (q && !hits) return '';
      return `<button class="ch-tab ${i === idx && !q ? 'active' : ''}" ${i === idx && !q ? 'aria-current="true"' : ''}
                      onclick="app.selectChapter(${i})">
                ${esc(this._chLabel(c))}${q ? `<span class="chip-count">${hits}</span>` : ''}
              </button>`;
    }).join('') || '<p class="empty-inline">No chapter matches.</p>';
  },

  _chapterItems(key, chapters, i) {
    const ch = chapters[i];
    const tKey = ch._theoremKey || key;
    const merged = { ...ch, theorems: [...(ch.theorems || []), ...(((THEOREMS[tKey] || {})[ch.chapter]) || [])] };
    const out = [];
    this._CATS.forEach(cat => (merged[cat.key] || []).forEach(text =>
      out.push({ text, label: cat.label, cls: cat.cls, cat: cat.key, chapter: ch.chapter })));
    return out;
  },

  _notesBody(key, chapters, idx) {
    const q = state.notesQuery.trim().toLowerCase();
    const inFilter = it => state.notesFilter === 'all' || state.notesFilter === it.cat;

    if (q) {
      const hits = chapters.flatMap((_, i) => this._chapterItems(key, chapters, i))
        .filter(inFilter).filter(it => it.text.toLowerCase().includes(q));
      if (!hits.length) return `<div class="empty-state">No notes match "${esc(state.notesQuery)}".</div>`;
      return `<h3 class="rev-ch-title">${plural(hits.length, 'match')} for "${esc(state.notesQuery)}"</h3>
              <ul class="rev-list">${hits.map(it => this._noteItem(it, true)).join('')}</ul>`;
    }

    const items = this._chapterItems(key, chapters, idx).filter(inFilter);
    const chHtml = typeof chapters[idx].html === 'function' ? chapters[idx].html() : '';
    return `<h3 class="rev-ch-title">${esc(this._chLabel(chapters[idx]))}</h3>${chHtml}
      ${items.length ? `<ul class="rev-list">${items.map(it => this._noteItem(it, false)).join('')}</ul>`
                     : (chHtml ? '' : '<div class="empty-state">Nothing under this filter — try "All".</div>')}`;
  },

  _noteItem(it, showChapter) {
    return `<li class="rev-item"><span class="badge ${it.cls}">${it.label}</span>
      <span>${esc(it.text)}${showChapter ? `<em class="note-src">${esc(it.chapter)}</em>` : ''}</span></li>`;
  },

  _repaintNotes() {
    const id = NOTES_CATALOG.some(s => s.id === state.params[0]) ? state.params[0] : NOTES_CATALOG[0].id;
    const chapters = state.grade === 'XII' ? [] : consolidatedChapters(id);
    if (!chapters.length) return;
    const idx = Math.max(0, Math.min(Number(state.params[1]) || 0, chapters.length - 1));
    const nav  = document.getElementById('notes-nav');
    const body = document.getElementById('notes-body');
    const bar  = document.getElementById('notes-filters');
    if (nav)  nav.innerHTML  = this._chapterTabs(id, chapters, idx);
    if (body) body.innerHTML = this._notesBody(id, chapters, idx);
    if (bar)  bar.innerHTML  = this._filterBar(this._chapterItems(id, chapters, idx));
    const sel = document.getElementById('notes-select');
    if (sel && Number(sel.value) !== idx) sel.value = String(idx);
  },

  selectChapter(i) {
    state.params[1] = String(i);
    state.notesQuery = '';
    state.notesFilter = 'all';
    const search = document.getElementById('notes-search');
    if (search) search.value = '';
    location.replace(location.pathname + location.search + buildHash(['notes', state.params[0], String(i)]));
    this._repaintNotes();
    const body = document.getElementById('notes-body');
    if (body) body.scrollTop = 0;
  },

  setNotesFilter(id) { state.notesFilter = id; this._repaintNotes(); },
  setNotesQuery(v)   { state.notesQuery  = v;  this._repaintNotes(); }

});
