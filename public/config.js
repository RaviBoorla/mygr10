// ─── Family Worker URL ────────────────────────────────────────────────────────
// Set to your deployed Worker URL after running `wrangler deploy` in
// workers/family/. Set to null to disable transactional emails (invite
// notifications and assignment-completed alerts) without breaking the rest
// of the app — the client silently skips the HTTP call when this is null.
const FAMILY_WORKER_URL = 'https://mygr10-family.ravi-boorla.workers.dev';

// ─── Catalogue ────────────────────────────────────────────────────────────────
const SUBJECTS = {
  IX: {
    CBSE: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi', 'Computer Applications', 'Information Technology'],
    ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English', 'Economics', 'Computer Science']
  },
  X: {
    CBSE: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi', 'Computer Applications', 'Information Technology'],
    ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English', 'Computer Science'],
    // IB: ['Mathematics', 'Biology', 'Individuals & Societies', 'Language & Literature']  // hidden — no banks yet
  },
  XI: {
    CBSE: ['Accountancy', 'Economics', 'Psychology', 'Physics', 'Chemistry', 'Computer Science', 'Mathematics', 'Political Science', 'Informatics Practices', 'Biology'],
    ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science']
  },
  XII: {
    CBSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Informatics Practices', 'Economics', 'Political Science', 'Psychology', 'Information Technology'],
    ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science']
  }
};

const BANKS = {
  'IX CBSE Mathematics':          'IX-CBSE-Mathematics',
  'IX CBSE Social Science':       'IX-CBSE-Social-Science',
  'IX CBSE Science':              'IX-CBSE-Science',

  'IX ICSE Mathematics':          'IX-ICSE-Mathematics',
  'IX ICSE Physics':              'IX-ICSE-Physics',
  'IX ICSE Chemistry':            'IX-ICSE-Chemistry',
  'IX ICSE Biology':              'IX-ICSE-Biology',
  'IX ICSE History & Civics':     'IX-ICSE-History-Civics',
  'IX ICSE Geography':            'IX-ICSE-Geography',
  'IX ICSE English':              'IX-ICSE-English',
  'IX ICSE Economics':            'IX-ICSE-Economics',
  'IX ICSE Computer Science':     'IX-ICSE-Computer-Science',

  'X CBSE Mathematics':           'X-CBSE-Mathematics',
  'X CBSE Science':               'X-CBSE-Science',
  'X CBSE Social Science':        'X-CBSE-Social-Science',
  'X ICSE Mathematics':           'X-ICSE-Mathematics',
  'X ICSE Physics':               'X-ICSE-Physics',
  'X ICSE Chemistry':             'X-ICSE-Chemistry',
  'X ICSE Biology':               'X-ICSE-Biology',
  'X ICSE History & Civics':      'X-ICSE-History-Civics',
  'X ICSE Geography':             'X-ICSE-Geography',
  'X ICSE English':               'X-ICSE-English',
  'X ICSE Computer Science':      'X-ICSE-Computer-Science',
  'X CBSE Hindi':                  'X-CBSE-Hindi',
  'X CBSE English':               'X-CBSE-English',
  'X CBSE Computer Applications':   'X-CBSE-Computer-Applications',
  'X CBSE Information Technology':  'X-CBSE-Information-Technology',

  'XII CBSE Mathematics':        'XII-CBSE-Mathematics',
  'XII CBSE Physics':            'XII-CBSE-Physics',
  'XII CBSE Chemistry':          'XII-CBSE-Chemistry',
  'XII CBSE Biology':            'XII-CBSE-Biology',
  'XII CBSE Computer Science':   'XII-CBSE-Computer-Science',
  'XII ICSE Mathematics':        'XII-ICSE-Mathematics',
  'XII ICSE Physics':            'XII-ICSE-Physics',
  'XII ICSE Chemistry':          'XII-ICSE-Chemistry',
  'XII ICSE Biology':            'XII-ICSE-Biology',
  'XII ICSE Computer Science':   'XII-ICSE-Computer-Science',

  'XII CBSE Economics':             'XII-CBSE-Economics',
  'XII CBSE Political Science':     'XII-CBSE-Political-Science',
  'XII CBSE Psychology':            'XII-CBSE-Psychology',
  'XII CBSE Informatics Practices': 'XII-CBSE-Information-Practices',
  'XII CBSE Information Technology': 'XII-CBSE-Information-Technology',

  'XI CBSE Accountancy':     'XI-CBSE-Accountancy',
  'XI CBSE Economics':       'XI-CBSE-Economics',
  'XI CBSE Psychology':      'XI-CBSE-Psychology',
  'XI CBSE Physics':         'XI-CBSE-Physics',
  'XI CBSE Chemistry':       'XI-CBSE-Chemistry',
  'XI CBSE Computer Science': 'XI-CBSE-Computer-Science',
  'XI CBSE Mathematics':     'XI-CBSE-Mathematics',
  'XI CBSE Political Science': 'XI-CBSE-Political-Science',
  'XI CBSE Informatics Practices': 'XI-CBSE-Information-Practices',
  'XI CBSE Biology':         'XI-CBSE-Biology',

  'XI ICSE Mathematics':     'XI-ICSE-Mathematics',
  'XI ICSE Physics':         'XI-ICSE-Physics',
  'XI ICSE Chemistry':       'XI-ICSE-Chemistry',
  'XI ICSE Biology':         'XI-ICSE-Biology',
  'XI ICSE Computer Science': 'XI-ICSE-Computer-Science'
};

const SA_BANKS = {
  'IX CBSE Mathematics':            'IX-CBSE-Mathematics-ShortAnswers',
  'IX CBSE Social Science':         'IX-CBSE-Social-Science-ShortAnswers',

  'IX ICSE Mathematics':            'IX-ICSE-Mathematics-ShortAnswers',
  'IX ICSE Physics':                'IX-ICSE-Physics-ShortAnswers',
  'IX ICSE Chemistry':              'IX-ICSE-Chemistry-ShortAnswers',
  'IX ICSE Biology':                'IX-ICSE-Biology-ShortAnswers',
  'IX ICSE History & Civics':       'IX-ICSE-History-Civics-ShortAnswers',
  'IX ICSE Geography':              'IX-ICSE-Geography-ShortAnswers',
  'IX ICSE English':                'IX-ICSE-English-ShortAnswers',
  'IX ICSE Economics':              'IX-ICSE-Economics-ShortAnswers',
  'IX ICSE Computer Science':       'IX-ICSE-Computer-Science-ShortAnswers',

  'X CBSE Mathematics':            'X-CBSE-Mathematics-ShortAnswers',
  'X CBSE Social Science':         'X-CBSE-Social-Science-ShortAnswers',
  'X CBSE Science':                'X-CBSE-Science-ShortAnswers',
  'X CBSE English':                'X-CBSE-English-ShortAnswers',
  'X ICSE Mathematics':            'X-ICSE-Mathematics-ShortAnswers',
  'X ICSE Physics':                'X-ICSE-Physics-ShortAnswers',
  'X ICSE Chemistry':              'X-ICSE-Chemistry-ShortAnswers',
  'X ICSE Biology':                'X-ICSE-Biology-ShortAnswers',
  'X ICSE History & Civics':       'X-ICSE-History-Civics-ShortAnswers',
  'X ICSE Geography':              'X-ICSE-Geography-ShortAnswers',
  'X ICSE Computer Science':       'X-ICSE-Computer-Science-ShortAnswers',
  'X CBSE Computer Applications':   'X-CBSE-Computer-Applications-ShortAnswers',
  'X CBSE Information Technology':  'X-CBSE-Information-Technology-ShortAnswers',

  'XII ICSE Chemistry': 'XII-ICSE-Chemistry-ShortAnswers',
  'XII ICSE Physics':     'XII-ICSE-Physics-ShortAnswers',
  'XII ICSE Mathematics':      'XII-ICSE-Mathematics-ShortAnswers',
  'XII ICSE Computer Science': 'XII-ICSE-Computer-Science-ShortAnswers',
  'XII ICSE Biology':          'XII-ICSE-Biology-ShortAnswers',
  'XII CBSE Computer Science': 'XII-CBSE-Computer-Science-ShortAnswers',
  'XII CBSE Mathematics':      'XII-CBSE-Mathematics-ShortAnswers',
  'XII CBSE Physics':          'XII-CBSE-Physics-ShortAnswers',
  'XII CBSE Chemistry':        'XII-CBSE-Chemistry-ShortAnswers',
  'XII CBSE Biology':          'XII-CBSE-Biology-ShortAnswers',

  'XII CBSE Economics':             'XII-CBSE-Economics-ShortAnswers',
  'XII CBSE Political Science':     'XII-CBSE-Political-Science-ShortAnswers',
  'XII CBSE Psychology':            'XII-CBSE-Psychology-ShortAnswers',
  'XII CBSE Informatics Practices': 'XII-CBSE-Information-Practices-ShortAnswers',
  'XII CBSE Information Technology': 'XII-CBSE-Information-Technology-ShortAnswers',

  'XI CBSE Physics':         'XI-CBSE-Physics-ShortAnswers',
  'XI CBSE Chemistry':       'XI-CBSE-Chemistry-ShortAnswers',
  'XI CBSE Computer Science': 'XI-CBSE-Computer-Science-ShortAnswers',
  'XI CBSE Mathematics':     'XI-CBSE-Mathematics-ShortAnswers',
  'XI CBSE Political Science': 'XI-CBSE-Political-Science-ShortAnswers',
  'XI CBSE Informatics Practices': 'XI-CBSE-Information-Practices-ShortAnswers',
  // XI CBSE Accountancy/Economics/Psychology/Biology: no Short Answers banks — only MCQ + Solved Exercises

  'XI ICSE Mathematics':     'XI-ICSE-Mathematics-ShortAnswers',
  'XI ICSE Physics':         'XI-ICSE-Physics-ShortAnswers',
  'XI ICSE Chemistry':       'XI-ICSE-Chemistry-ShortAnswers',
  'XI ICSE Biology':         'XI-ICSE-Biology-ShortAnswers',
  'XI ICSE Computer Science': 'XI-ICSE-Computer-Science-ShortAnswers'
};
function saBankSlug(subject, board, grade) {
  board = board || state.board;
  grade = grade || state.grade;
  return SA_BANKS[`${grade} ${board} ${subject}`];
}

const SOLVED_BANKS = {
  'IX CBSE Mathematics':        'IX-CBSE-Mathematics-Solved',
  'IX CBSE Science':            'IX-CBSE-Science-Solved',
  'IX CBSE Social Science':     'IX-CBSE-Social-Science-Solved',

  'X CBSE Mathematics':    'X-CBSE-Mathematics-Solved',
  'X CBSE Science':        'X-CBSE-Science-Solved',
  'X CBSE Social Science': 'X-CBSE-Social-Science-Solved',
  'X CBSE Computer Applications':   'X-CBSE-Computer-Applications-Solved',
  'X CBSE Information Technology':  'X-CBSE-Information-Technology-Solved',

  'XII CBSE Computer Science':      'XII-CBSE-Computer-Science-Solved',
  'XII CBSE Physics':               'XII-CBSE-Physics-Solved',
  'XII CBSE Chemistry':             'XII-CBSE-Chemistry-Solved',
  'XII CBSE Biology':               'XII-CBSE-Biology-Solved',
  'XII CBSE Mathematics':           'XII-CBSE-Mathematics-Solved',
  'XII CBSE Informatics Practices': 'XII-CBSE-Information-Practices-Solved',
  'XII CBSE Political Science':     'XII-CBSE-Political-Science-Solved',
  'XII CBSE Psychology':            'XII-CBSE-Psychology-Solved',
  'XII CBSE Economics':             'XII-CBSE-Economics-Solved',

  'XI CBSE Accountancy':     'XI-CBSE-Accountancy-Solved',
  'XI CBSE Economics':       'XI-CBSE-Economics-Solved',
  'XI CBSE Psychology':      'XI-CBSE-Psychology-Solved',
  'XI CBSE Physics':         'XI-CBSE-Physics-Solved',
  'XI CBSE Chemistry':       'XI-CBSE-Chemistry-Solved',
  'XI CBSE Computer Science': 'XI-CBSE-Computer-Science-Solved',
  'XI CBSE Mathematics':     'XI-CBSE-Mathematics-Solved',
  'XI CBSE Political Science': 'XI-CBSE-Political-Science-Solved',
  'XI CBSE Informatics Practices': 'XI-CBSE-Information-Practices-Solved',
  'XI CBSE Biology':         'XI-CBSE-Biology-Solved'
};
function solvedBankSlug(subject, board, grade) {
  board = board || state.board;
  grade = grade || state.grade;
  return SOLVED_BANKS[`${grade} ${board} ${subject}`];
}
function bankSlug(subject, board, grade) {
  board = board || state.board;
  grade = grade || state.grade;
  return BANKS[`${grade} ${board} ${subject}`];
}

const BOARDS = [
  { id: 'CBSE', name: 'CBSE',       short: 'CBSE', desc: 'Central Board of Secondary Education' },
  { id: 'ICSE', name: 'ICSE',       short: 'ICSE', desc: 'Indian Certificate of Secondary Education' },
  // IB hidden until question banks are ready — code retained, not deleted
  // { id: 'IB',   name: 'IB Diploma', short: 'IB',   desc: 'International Baccalaureate (MYP-5)' }
];

const GRADES = [
  { id: 'IX',  label: 'IX' },
  { id: 'X',   label: 'X Board' },
  { id: 'XI',  label: 'XI' },
  { id: 'XII', label: 'XII Board' }
];

const MODES = {
  mock:       { label: 'Full Mock Test',    count: 49, seconds: 40 * 60 },
  drill:      { label: 'Chapter Drill',     count: 25, seconds: null },
  bookmark:   { label: 'Bookmarked Review', count: 50, seconds: null },
  srs:        { label: 'Spaced Review',     count: 30, seconds: null },
  assignment: { label: 'Assignment',        count: 25, seconds: null }  // count/seconds overridden per-assignment
};

const SRS_INTERVALS = [0, 1, 3, 7, 14, 30];

// Competency-based question types (CBSE's shift beyond pure recall MCQs —
// see docs/design.md). Optional `qtype` field on a question; absence means
// a plain MCQ. Labels shown as a small badge during test-taking/review.
const QTYPE_LABELS = {
  'assertion-reason': 'Assertion-Reason',
  'statement-based':  'Statement-based',
  'case-study':       'Case Study',
  'application':      'Application'
};

const NOTES_CATALOG = [
  { id: 'Mathematics', label: 'Maths' },
  { id: 'Physics',     label: 'Physics' },
  { id: 'Chemistry',   label: 'Chemistry' },
  { id: 'Biology',     label: 'Biology' },
  { id: 'Social Science',   label: 'Social Science' },
  { id: 'History',          label: 'History & Civics' },
  { id: 'Geography',        label: 'Geography' },
  { id: 'English',          label: 'English' },
  { id: 'Hindi',            label: 'Hindi' },
  { id: 'Comp App & IT',     label: 'Computer Science' },
  { id: 'Accountancy',       label: 'Accountancy' },
  { id: 'Economics',         label: 'Economics' },
  { id: 'Political Science', label: 'Political Science' },
  { id: 'Psychology',        label: 'Psychology' },
  { id: 'Informatics Practices', label: 'Informatics Practices' }
];

// ─── Question bank loading (cached — one fetch per subject per session) ───────
// Some PDF-extracted questions carry Symbol-font private-use glyphs (render as
// boxes) or blank MCQ options — unanswerable, so they're hidden until re-extracted.
// `npm run check` lists them.
const _GARBLED = /[\uf000-\uf8ff]/;
function _readable(q) {
  if (_GARBLED.test(JSON.stringify(q))) return false;
  return !Array.isArray(q.options) || q.options.every(o => String(o).trim());
}

// Caches hold loaded arrays (read synchronously by home + Cloé); in-flight
// fetches are shared so concurrent callers don't download a bank twice.
const bankCache = {}, saBankCache = {}, solvedBankCache = {};
const _bankInflight = {};
function _loadJsonBank(cache, slug, subject, label) {
  const cacheKey = slug || subject;
  if (cache[cacheKey]) return Promise.resolve(cache[cacheKey]);
  if (!slug) return Promise.reject(new Error(`No ${label} for ${subject}`));
  if (_bankInflight[slug]) return _bankInflight[slug];
  return _bankInflight[slug] = fetch(`questions/${slug}.json`)
    .then(r => { if (!r.ok) throw new Error(`Could not load questions (HTTP ${r.status})`); return r.json(); })
    .then(list => (cache[cacheKey] = list.filter(_readable)))
    .finally(() => { delete _bankInflight[slug]; });
}
function loadBank(subject)       { return _loadJsonBank(bankCache, bankSlug(subject), subject, 'question bank'); }
function loadSABank(subject)     { return _loadJsonBank(saBankCache, saBankSlug(subject), subject, 'Short Answers bank'); }
function loadSolvedBank(subject) { return _loadJsonBank(solvedBankCache, solvedBankSlug(subject), subject, 'Solved Exercises bank'); }

function realBoardYear(q) {
  // Check source field first (ICSE style: "Board 2017")
  if (q.source) {
    const sm = q.source.match(/Board\s*(20\d\d)/);
    if (sm) return sm[1];
  }
  const blob = `${q.text || ''} ${q.chapter || ''} ${q.id || ''}`;
  return (blob.match(/(20\d\d)[ -]?Board/) || blob.match(/hindi-(\d{4})-/) || [])[1] || null;
}

// Returns true if the question is from a real board paper (any board/year)
function isBoardQuestion(q) { return !!realBoardYear(q); }

function chaptersOf(list) {
  const seen = new Map();
  list.forEach(q => {
    const name = q.chapter || 'General';
    const c = seen.get(name) || { count: 0, real: 0, years: new Set() };
    c.count++;
    const year = realBoardYear(q);
    if (year) { c.real++; c.years.add(year); }
    seen.set(name, c);
  });
  return [...seen.entries()].map(([name, c]) =>
    ({ name, count: c.count, real: c.real, years: [...c.years].sort() }));
}
