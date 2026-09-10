// ─── Catalogue ────────────────────────────────────────────────────────────────
const SUBJECTS = {
  CBSE: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
  ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English', 'Computer Science'],
  // IB: ['Mathematics', 'Biology', 'Individuals & Societies', 'Language & Literature']  // hidden — no banks yet
};

const BANKS = {
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
  'X CBSE English':               'X-CBSE-English'
};

const SA_BANKS = {
  'X CBSE Mathematics':            'X-CBSE-Mathematics-ShortAnswers',
  'X CBSE Social Science':         'X-CBSE-Social-Science-ShortAnswers',
  'X CBSE Science':                'X-CBSE-Science-ShortAnswers',
  'X CBSE English':                'X-CBSE-English-ShortAnswers',
  'X ICSE Mathematics':            'X-ICSE-Mathematics-ShortAnswers',
  'X ICSE Physics':                'X-ICSE-Physics-ShortAnswers',
  'X ICSE Chemistry':              'X-ICSE-Chemistry-ShortAnswers',
  'X ICSE Biology':                'X-ICSE-Biology-ShortAnswers',
  'X ICSE History & Civics':       'X-ICSE-History-Civics-ShortAnswers',
  'X ICSE Geography':              'X-ICSE-Geography-ShortAnswers'
};
function saBankSlug(subject, board, grade) {
  board = board || state.board;
  grade = grade || state.grade;
  return SA_BANKS[`${grade} ${board} ${subject}`];
}

const SOLVED_BANKS = {
  'X CBSE Mathematics':    'X-CBSE-Mathematics-Solved',
  'X CBSE Science':        'X-CBSE-Science-Solved',
  'X CBSE Social Science': 'X-CBSE-Social-Science-Solved'
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
  { id: 'X',   label: 'X Board' },
  { id: 'XII', label: 'XII Board' }
];

const MODES = {
  mock:     { label: 'Full Mock Test',    count: 49, seconds: 40 * 60 },
  drill:    { label: 'Chapter Drill',     count: 25, seconds: null },
  bookmark: { label: 'Bookmarked Review', count: 50, seconds: null },
  srs:      { label: 'Spaced Review',     count: 30, seconds: null }
};

const SRS_INTERVALS = [0, 1, 3, 7, 14, 30];

const NOTES_CATALOG = [
  { id: 'Mathematics', label: 'Maths' },
  { id: 'Physics',     label: 'Physics' },
  { id: 'Chemistry',   label: 'Chemistry' },
  { id: 'Biology',     label: 'Biology' },
  { id: 'English',     label: 'English' },
  { id: 'Hindi',       label: 'Hindi' }
];

// ─── Question bank loading (cached — one fetch per subject per session) ───────
const bankCache = {};
function loadBank(subject) {
  const slug = bankSlug(subject);
  const cacheKey = slug || subject;
  if (bankCache[cacheKey]) return Promise.resolve(bankCache[cacheKey]);
  if (!slug) return Promise.reject(new Error('No question bank for ' + subject));
  return fetch(`questions/${slug}.json`)
    .then(r => { if (!r.ok) throw new Error(`Could not load questions (HTTP ${r.status})`); return r.json(); })
    .then(list => { bankCache[cacheKey] = list; return list; });
}

const saBankCache = {};
function loadSABank(subject) {
  const slug = saBankSlug(subject);
  const cacheKey = slug || subject;
  if (saBankCache[cacheKey]) return Promise.resolve(saBankCache[cacheKey]);
  if (!slug) return Promise.reject(new Error('No Short Answers bank for ' + subject));
  return fetch(`questions/${slug}.json`)
    .then(r => { if (!r.ok) throw new Error(`Could not load questions (HTTP ${r.status})`); return r.json(); })
    .then(list => { saBankCache[cacheKey] = list; return list; });
}

const solvedBankCache = {};
function loadSolvedBank(subject) {
  const slug = solvedBankSlug(subject);
  const cacheKey = slug || subject;
  if (solvedBankCache[cacheKey]) return Promise.resolve(solvedBankCache[cacheKey]);
  if (!slug) return Promise.reject(new Error('No Solved Exercises bank for ' + subject));
  return fetch(`questions/${slug}.json`)
    .then(r => { if (!r.ok) throw new Error(`Could not load questions (HTTP ${r.status})`); return r.json(); })
    .then(list => { solvedBankCache[cacheKey] = list; return list; });
}

function realBoardYear(q) {
  const blob = `${q.text || ''} ${q.chapter || ''} ${q.id || ''}`;
  return (blob.match(/(20\d\d)[ -]?Board/) || blob.match(/hindi-(\d{4})-/) || [])[1] || null;
}

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
