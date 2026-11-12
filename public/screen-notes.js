// ─── Revision Notes screen (with lazy-loaded REVISION + THEOREMS data) ────────
// Notes are scoped to exactly the current grade + board (no merging across
// boards) — a subject with no notes for that grade/board shows "coming soon"
// rather than borrowing another grade's or board's content.

const CBSE_SCIENCE_SPLIT = {
  Chemistry: ['Chemical Reactions & Equations', 'Acids, Bases & Salts', 'Metals & Non-Metals', 'Carbon & its Compounds'],
  Physics:   ['Light — Reflection & Refraction', 'Human Eye & Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy'],
  Biology:   ['Life Processes', 'Control & Coordination', 'Reproduction', 'Heredity & Evolution']
};

// Grade IX CBSE "Science" is one combined subject/bank (unlike X/XII, which
// split into separate Physics/Chemistry/Biology test subjects) — split its
// chapters across the Physics/Chemistry/Biology notes tabs by the same
// `subject` tag used in IX-CBSE-Science.json. The two cross-disciplinary
// chapters are folded into the nearest tab.
const IX_SCIENCE_SPLIT = {
  Physics: ['Exploration: Entering the World of Secondary Science', 'Describing Motion Around Us', 'How Forces Affect Motion', 'Work, Energy, and Simple Machines', 'Sound Waves: Characteristics and Applications'],
  Chemistry: ['Exploring Mixtures and their Separation', 'Journey Inside the Atom', 'Atomic Foundations of Matter'],
  Biology: ['Cell: The Building Block of Life', 'Tissues in Action', 'Reproduction: How Life Continues', 'Patterns in Life: Diversity and Classification', 'Earth as a System: Energy, Matter, and Life']
};

// NOTES_SOURCES[grade][subjectId][board] = [[revisionKey, theoremKey?, onlyChapters?], ...]
// Multiple entries under the SAME board merge into one chapter list (e.g. a
// notes tab fed by two separate test subjects); different boards never merge.
const NOTES_SOURCES = {
  IX: {
    Physics:          { CBSE: [['IX Science', null, IX_SCIENCE_SPLIT.Physics]] },
    Chemistry:        { CBSE: [['IX Science', null, IX_SCIENCE_SPLIT.Chemistry]] },
    Biology:          { CBSE: [['IX Science', null, IX_SCIENCE_SPLIT.Biology]] },
    Mathematics:      { CBSE: [['IX Mathematics']] },
    'Social Science': { CBSE: [['IX Social Science']] }
  },
  X: {
    Mathematics: { CBSE: [['CBSE Mathematics', 'Mathematics']], ICSE: [['ICSE Mathematics', 'Mathematics']], IB: [['IB Mathematics', 'Mathematics']] },
    Physics:     { CBSE: [['Science', null, CBSE_SCIENCE_SPLIT.Physics]], ICSE: [['Physics']] },
    Chemistry:   { CBSE: [['Science', null, CBSE_SCIENCE_SPLIT.Chemistry]], ICSE: [['Chemistry']] },
    Biology:     { CBSE: [['Science', null, CBSE_SCIENCE_SPLIT.Biology]], ICSE: [['Biology']], IB: [['Biology']] },
    English:     { CBSE: [['English']], ICSE: [['English']] },
    Hindi:       { CBSE: [['Hindi']] },
    'Comp App & IT': { ICSE: [['Computer Science']], CBSE: [['Computer Applications'], ['Information Technology']] },
    'Social Science': { CBSE: [['Social Science']] },
    History:     { ICSE: [['ICSE History']] },
    Geography:   { ICSE: [['ICSE Geography']] }
  },
  XI: {
    Accountancy:        { CBSE: [['XI Accountancy']] },
    Economics:          { CBSE: [['XI Economics']] },
    Psychology:         { CBSE: [['XI Psychology']] },
    Physics:            { CBSE: [['XI Physics']], ICSE: [['XI ICSE Physics']] },
    Chemistry:          { CBSE: [['XI Chemistry']] },
    'Comp App & IT':    { CBSE: [['XI Computer Science']] },
    Mathematics:            { CBSE: [['XI Mathematics']] },
    'Political Science':    { CBSE: [['XI Political Science']] },
    'Informatics Practices': { CBSE: [['XI Informatics Practices']] },
    Biology:                { CBSE: [['XI Biology']] }
  },
  XII: {
    Mathematics:        { CBSE: [['XII Mathematics']] },
    Physics:            { CBSE: [['XII Physics']] },
    Chemistry:          { CBSE: [['XII Chemistry']] },
    Biology:            { CBSE: [['XII Biology']] },
    'Comp App & IT':    { CBSE: [['XII Computer Science']] },
    Economics:          { CBSE: [['XII Economics'], ['XII Economics Macro']] },
    'Political Science': { CBSE: [['XII Political Science CWP'], ['XII Political Science PISI']] },
    Psychology:         { CBSE: [['XII Psychology']] },
    'Informatics Practices': { CBSE: [['XII Informatics Practices']] }
  }
};

// Extra lazy-loaded files per grade, beyond the always-loaded base
// revision-data.js (which holds Grade X's CBSE/ICSE/IB content). Each grade
// maps to an ARRAY of {file, probeKey} specs (a grade can be split across
// several sibling files); `probeKey` is a REVISION key that only exists once
// that particular file has loaded. All of a grade's specs load in parallel;
// the grade is "ready" once every one of them has landed.
const REVISION_EXTRA_FILES = {
  IX: [
    { file: 'revision-data-ix.js?v=0fd12941',       probeKey: 'IX Science' },
    { file: 'revision-data-ix-maths.js?v=c70af358', probeKey: 'IX Mathematics' },
    { file: 'revision-data-ix-sst.js?v=2c38d9ce', probeKey: 'IX Social Science' }
  ],
  XI: [
    { file: 'revision-data-xi.js?v=d8f28c28',           probeKey: 'XI Accountancy' },
    { file: 'revision-data-xi-physics.js?v=6df3807c',          probeKey: 'XI Physics' },
    { file: 'revision-data-xi-chemistry.js?v=bbd1886f',        probeKey: 'XI Chemistry' },
    { file: 'revision-data-xi-compsci.js?v=df59f23b',          probeKey: 'XI Computer Science' },
    { file: 'revision-data-xi-maths.js?v=0884abfb',              probeKey: 'XI Mathematics' },
    { file: 'revision-data-xi-polsci.js?v=9893dce3',             probeKey: 'XI Political Science' },
    { file: 'revision-data-xi-infopractices.js?v=3727bfec',   probeKey: 'XI Informatics Practices' },
    { file: 'revision-data-xi-biology.js?v=dd26303f',         probeKey: 'XI Biology' },
    { file: 'revision-data-xi-icse-physics.js?v=d19467ba',           probeKey: 'XI ICSE Physics' }
  ],
  XII: [
    { file: 'revision-data-xii.js?v=2d919395', probeKey: 'XII Mathematics' }
  ]
};

const _consolidatedCache = {};

function consolidatedChapters(subjectId) {
  const cacheKey = `${state.grade}::${state.board}::${subjectId}`;
  if (_consolidatedCache[cacheKey]) return _consolidatedCache[cacheKey];
  const entries = (NOTES_SOURCES[state.grade] || {})[subjectId]?.[state.board] || [];
  const merged = [];
  entries.forEach(([key, theoremKey, only]) => {
    (REVISION[key] || [])
      .filter(ch => !only || only.includes(ch.chapter))
      .forEach(ch => {
        const name = ch.chapter.trim().toLowerCase();
        if (merged.some(m => m.chapter.trim().toLowerCase() === name)) return;
        merged.push({ ...ch, _theoremKey: theoremKey || subjectId });
      });
  });
  merged.sort((a, b) => {
    const ai = a.chapter.startsWith('Important Dates');
    const bi = b.chapter.startsWith('Important Dates');
    return ai && !bi ? -1 : !ai && bi ? 1 : 0;
  });
  return (_consolidatedCache[cacheKey] = merged);
}

let _revisionCallbacks = null;      // null = not started; [] = loading; undefined = failed
// Per grade, same states as above (null/[]/undefined) — every grade key is
// pre-seeded to null so an untouched grade reads as "not started", not
// "failed" (an absent object key and an explicit `undefined` value are the
// same thing to `=== undefined`, which would otherwise make _revisionFailedFor
// report every not-yet-attempted grade as already failed, before its load was
// ever even requested).
const _revisionExtraCallbacks = Object.fromEntries(Object.keys(REVISION_EXTRA_FILES).map(g => [g, null]));

function _loadScript(src, onload, onerror) {
  const s = document.createElement('script');
  s.src = src;
  s.onload = onload;
  s.onerror = onerror;
  document.head.appendChild(s);
}

// Symbol glossary for formulas ("where v = image distance, …") — optional; the
// notes render without it and re-render once it arrives.
let _symbolsRequested = false;
function _ensureRevisionSymbols() {
  if (_symbolsRequested || window.formulaWhere) return;
  _symbolsRequested = true;
  _loadScript('revision-symbols.js?v=abf89756', () => { if (state.screen === 'notes') app.render(); }, () => { _symbolsRequested = false; });
}

function _ensureRevisionData(cb) {
  _ensureRevisionSymbols();
  if (window.REVISION) { cb(); return; }
  if (_revisionCallbacks === undefined) { cb(); return; }
  if (Array.isArray(_revisionCallbacks)) { _revisionCallbacks.push(cb); return; }
  _revisionCallbacks = [cb];
  _loadScript('revision-data.js?v=921acaa5', () => {
    const pending = _revisionCallbacks || [];
    _revisionCallbacks = null;
    pending.forEach(fn => fn());
  }, () => {
    _revisionCallbacks = undefined;
    app.render();
  });
}

// A grade with no entry in REVISION_EXTRA_FILES (currently only X) is fully
// covered by the base file alone. A grade with several specs is ready only
// once every one of its sibling files has landed.
function _revisionReadyFor(grade) {
  if (!window.REVISION) return false;
  const specs = REVISION_EXTRA_FILES[grade] || [];
  return specs.every(s => !!window.REVISION[s.probeKey]);
}
function _revisionFailedFor(grade) {
  if (_revisionCallbacks === undefined) return true;
  return (REVISION_EXTRA_FILES[grade] || []).length > 0 && _revisionExtraCallbacks[grade] === undefined;
}
function _ensureRevisionDataFor(grade, cb) {
  const specs = REVISION_EXTRA_FILES[grade] || [];
  _ensureRevisionData(() => {
    if (_revisionReadyFor(grade)) { cb(); return; }
    const existing = _revisionExtraCallbacks[grade];
    if (existing === undefined) { cb(); return; }
    if (Array.isArray(existing)) { existing.push(cb); return; }
    _revisionExtraCallbacks[grade] = [cb];
    const remaining = specs.filter(s => !window.REVISION[s.probeKey]);
    let failed = false, left = remaining.length;
    const settle = () => {
      const pending = _revisionExtraCallbacks[grade] || [];
      _revisionExtraCallbacks[grade] = null;
      Object.keys(_consolidatedCache).forEach(k => delete _consolidatedCache[k]);
      pending.forEach(fn => fn());
    };
    if (!left) { settle(); return; } // shouldn't happen (ready-check above would have short-circuited), kept as a safety net
    remaining.forEach(spec => {
      _loadScript(spec.file, () => {
        if (failed) return;
        if (--left === 0) settle();
      }, () => {
        if (failed) return;
        failed = true;
        _revisionExtraCallbacks[grade] = undefined;
        app.render();
      });
    });
  });
}

Object.assign(app, {

  _screenNotes(subjectId, chapterIdx) {
    const gradeCatalog = this._notesGradeCatalog();
    const id = gradeCatalog.some(s => s.id === subjectId) ? subjectId : gradeCatalog[0].id;

    const needsLoad = !_revisionReadyFor(state.grade);

    if (needsLoad) {
      const failed = _revisionFailedFor(state.grade);
      if (!failed) _ensureRevisionDataFor(state.grade, () => app.render());
      return `
        <div class="screen rev-screen">
          <div class="rev-heading-row">
            ${this._subjectSelect(id)}
            <div class="rev-heading-right">
              <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
            </div>
          </div>
          <div class="card empty-state">${failed
            ? 'Could not load notes. Check your connection and <button class="btn ghost" onclick="location.reload()">reload the page</button>.'
            : 'Loading notes…'}</div>
        </div>`;
    }

    const chapters = consolidatedChapters(id);
    const idx = chapters.length ? Math.max(0, Math.min(chapterIdx, chapters.length - 1)) : 0;
    return `
      <div class="screen rev-screen">
        <div class="rev-heading-row">
          ${this._subjectSelect(id)}
          <div class="rev-heading-right">
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

  _notesGradeCatalog() {
    const BY_GRADE = {
      IX:  new Set(['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Social Science']),
      X:   new Set(['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'History', 'Geography', 'English', 'Hindi', 'Comp App & IT']),
      XI:  new Set(['Accountancy', 'Economics', 'Psychology', 'Physics', 'Chemistry', 'Comp App & IT', 'Mathematics', 'Political Science', 'Informatics Practices', 'Biology']),
      XII: new Set(['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Comp App & IT', 'Economics', 'Political Science', 'Psychology', 'Informatics Practices'])
    };
    const allowed = BY_GRADE[state.grade] || BY_GRADE.X;
    const sources = NOTES_SOURCES[state.grade] || {};
    const forBoard = state.grade === 'XI' ? NOTES_CATALOG.filter(s => allowed.has(s.id) && sources[s.id]?.[state.board]) : [];
    return forBoard.length ? forBoard : NOTES_CATALOG.filter(s => allowed.has(s.id));
  },

  _subjectSelect(activeId) {
    const opts = this._notesGradeCatalog().map(s =>
      `<option value="${esc(s.id)}" ${s.id === activeId ? 'selected' : ''}>${esc(s.label)}</option>`).join('');
    return `<select class="notes-subj-select" onchange="app.go(['notes',this.value,'0'])">${opts}</select>`;
  },

  _chLabel(ch) {
    return ch.chapter;
  },

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
    this._noteItems = [];
    const q = state.notesQuery.trim().toLowerCase();
    const inFilter = it => state.notesFilter === 'all' || state.notesFilter === it.cat;

    if (q) {
      const hits = this._searchNotes(chapters.flatMap((_, i) => this._chapterItems(key, chapters, i)).filter(inFilter), q);
      if (!hits.length) return `<div class="empty-state">No notes match "${esc(state.notesQuery)}".</div>`;
      return `<h3 class="rev-ch-title">${hits.length} ${hits.length === 1 ? 'match' : 'matches'} for "${esc(state.notesQuery)}"</h3>
              <ul class="rev-list">${hits.map(it => this._noteItem(it, true)).join('')}</ul>`;
    }

    const items = this._chapterItems(key, chapters, idx).filter(inFilter);
    const chHtml = typeof chapters[idx].html === 'function' ? chapters[idx].html() : '';
    setTimeout(() => this._hydrateQuiz(chapters[idx].chapter), 0);
    return `<h3 class="rev-ch-title">${esc(this._chLabel(chapters[idx]))}</h3><div id="notes-quiz" class="notes-quiz"></div>${chHtml}
      ${items.length ? `<ul class="rev-list">${items.map(it => this._noteItem(it, false)).join('')}</ul>`
                     : (chHtml ? '' : '<div class="empty-state">Nothing under this filter — try "All".</div>')}`;
  },

  _formulaWhereHtml(it) {
    if (it.cat !== 'formulae' || !window.formulaWhere) return '';
    const w = window.formulaWhere(it.text, it.chapter);
    if (!w) return '';
    const parts = w.split('; ').map(part => {
      const i = part.indexOf(' = ');
      return i < 0 ? renderMath(part) : `<b>${renderMath(part.slice(0, i))}</b> = ${renderMath(part.slice(i + 3))}`;
    });
    return `<span class="formula-where"><span class="formula-where-label">where</span> ${parts.join('; ')}</span>`;
  },

  _noteItem(it, showChapter) {
    const n = this._noteItems.push(it) - 1;
    return `<li class="rev-item"><span class="badge ${it.cls}">${it.label}</span>
      <span class="rev-item-text">${renderMath(it.text)}${this._formulaWhereHtml(it)}${showChapter ? `<em class="note-src">${esc(it.chapter)}</em>` : ''}</span>
      <button class="note-ask" onclick="app.askNote(${n})" title="Ask Cloé to explain this" aria-label="Ask Cloé to explain this">✦</button></li>`;
  },

  // Word-based search: every meaningful word must appear (any order) in the note,
  // its category (e.g. "Formula") or its chapter. Best text matches first.
  _searchNotes(items, query) {
    const STOP = new Set(['the', 'of', 'a', 'an', 'and', 'or', 'in', 'on', 'to', 'for', 'is', 'are', 'what', 'how', 'find', 'with', 'about']);
    const words = query.split(/[^\p{L}\p{N}²³√π]+/u).filter(w => w && !STOP.has(w))
      .map(w => w.length > 3 ? w.replace(/(es|s)$/, '') : w);
    if (!words.length) return items.filter(it => it.text.toLowerCase().includes(query));
    // Match at the start of a word, so "sector" doesn't hit "bisector".
    const res = words.map(w => new RegExp(`(?<![\\p{L}\\p{N}])${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'u'));
    return items
      .map(it => {
        const text = it.text.toLowerCase();
        const hay = `${text} ${it.label} ${it.chapter}`.toLowerCase();
        return res.every(re => re.test(hay)) ? { it, score: res.filter(re => re.test(text)).length } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .map(x => x.it);
  },

  _normChapter(s) {
    return String(s).toLowerCase().replace(/^ch(apter)?\.?\s*\d+\s*[—:–-]\s*/, '')
      .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
  },

  // Shows "Quiz me" when this notes chapter matches a chapter in one of the board's MCQ banks.
  async _hydrateQuiz(chapter) {
    const el = document.getElementById('notes-quiz');
    if (!el) return;
    const want = this._normChapter(chapter);
    for (const subject of (SUBJECTS[state.grade]?.[state.board] || []).filter(s => bankSlug(s))) {
      const list = await loadBank(subject).catch(() => []);
      const match = list.find(q => this._normChapter(q.chapter || 'General') === want);
      if (!match) continue;
      if (!el.isConnected) return;
      const n = list.filter(q => q.chapter === match.chapter).length;
      this._quizTarget = { subject, chapter: match.chapter };
      el.innerHTML = `<button class="btn small primary" onclick="app.startTest({ ...app._quizTarget, mode: 'drill' })">▶ Quiz me on this chapter · ${Math.min(n, MODES.drill.count)} Q</button>`;
      return;
    }
  },

  askNote(n) {
    const it = this._noteItems?.[n];
    if (!it) return;
    aiPanel.ask(
      `Explain this ${it.label.toLowerCase()} from the chapter "${it.chapter}" in simple words, ` +
      `with one short worked example and a common mistake students make:\n\n${it.text}`
    );
  },

  _repaintNotes() {
    const gc2 = app._notesGradeCatalog();
    const id = gc2.some(s => s.id === state.params[0]) ? state.params[0] : gc2[0].id;
    const chapters = consolidatedChapters(id);
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
