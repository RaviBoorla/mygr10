// Arena — Phase 1: solo mode, CBSE only, client-side grading, localStorage.
// Reads globals from app.js: state, LS, KEY, BANKS, bankSlug, loadBank,
// scopeKey, SRS_INTERVALS, shuffle, esc, app (assigned onto below).

// ─── Constants ────────────────────────────────────────────────────────────────
const ARENA_KEY = 'rise.arena';           // run state (resume mid-run)
const ARENA_HI_KEY = 'rise.arena.hi';    // high scores per grade::board
const ARENA_SKINS_KEY = 'rise.arena.skins'; // unlock state + active skin
const ARENA_COL_KEY   = 'rise.arena.collectibles'; // collectibles unlock state
const ARENA_DAILY_KEY = 'rise.arena.daily';        // daily challenge results
const DAILY_Q_COUNT   = 15;
const DAILY_SECS      = 40; // seconds per question in daily challenge

function todayStr() {
  return new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
}
function dailyStorageKey() {
  return `${todayStr()}::${state.grade}::${state.board}`;
}
function getDailyResult() {
  return (LS.get(ARENA_DAILY_KEY, {}))[dailyStorageKey()] || null;
}
function saveDailyResult(r) {
  const all = LS.get(ARENA_DAILY_KEY, {});
  const prev = all[dailyStorageKey()];
  all[dailyStorageKey()] = (!prev || r.score > prev.score) ? r : prev;
  LS.set(ARENA_DAILY_KEY, all);
}

// Seeded LCG random + shuffle for deterministic daily question selection
function seededRng(seed) {
  let s = seed >>> 0;
  return () => { s = (Math.imul(1664525, s) + 1013904223) >>> 0; return s / 4294967296; };
}
function seededShuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function dateSeed(str) {
  let h = 5381;
  for (const c of str) h = ((Math.imul(33, h) ^ c.charCodeAt(0)) >>> 0);
  return h;
}

// ─── Skin definitions ─────────────────────────────────────────────────────────
const ARENA_SKINS = [
  { id: 'default', name: 'Classic',  color: '#2563eb', unlockDesc: 'Always available',           unlock: null },
  { id: 'midnight',name: 'Midnight', color: '#4f46e5', unlockDesc: 'Complete 5 arena runs',       unlock: { type: 'runs', n: 5 } },
  { id: 'blaze',   name: 'Blaze',    color: '#ef4444', unlockDesc: 'Achieve a 20× combo',         unlock: { type: 'combo', n: 20 } },
  { id: 'solar',   name: 'Solar',    color: '#f59e0b', unlockDesc: 'Reach stage 5 with Physics',  unlock: { type: 'stage_subject', n: 5, subj: 'Physics' } },
  { id: 'jungle',  name: 'Jungle',   color: '#16a34a', unlockDesc: 'Reach stage 7 with Biology',  unlock: { type: 'stage_subject', n: 7, subj: 'Biology' } },
  { id: 'lab',     name: 'Lab',      color: '#0891b2', unlockDesc: 'Reach stage 7 with Chemistry',unlock: { type: 'stage_subject', n: 7, subj: 'Chemistry' } },
  { id: 'gold',    name: 'Golden',   color: '#d97706', unlockDesc: 'Complete a full clear',       unlock: { type: 'full_clear' } },
];

function getSkinState() {
  const s = LS.get(ARENA_SKINS_KEY, {});
  if (!s.unlocked) s.unlocked = ['default'];
  if (!s.active) s.active = 'default';
  if (!s.runCount) s.runCount = 0;
  if (!s.allTimeCombo) s.allTimeCombo = 0;
  if (!s.stageReached) s.stageReached = {};
  return s;
}

function saveSkinState(s) { LS.set(ARENA_SKINS_KEY, s); }

function applyActiveSkin() {
  const s = getSkinState();
  document.body.dataset.arenaSkin = s.active || 'default';
}

function clearActiveSkin() {
  delete document.body.dataset.arenaSkin;
}

function checkAndUnlockSkins(ar) {
  const s = getSkinState();
  s.runCount += 1;
  s.allTimeCombo = Math.max(s.allTimeCombo, ar.longestCombo);
  (ar.subjects || []).forEach(subj => {
    const prev = s.stageReached[subj] || 0;
    s.stageReached[subj] = Math.max(prev, ar.deepestStage);
  });

  s.maxStage = Math.max(s.maxStage || 0, ar.deepestStage);

  const newlyUnlocked = [];
  ARENA_SKINS.forEach(skin => {
    if (!skin.unlock || s.unlocked.includes(skin.id)) return;
    const u = skin.unlock;
    let earned = false;
    if (u.type === 'runs')          earned = s.runCount >= u.n;
    if (u.type === 'combo')         earned = s.allTimeCombo >= u.n;
    if (u.type === 'stage_subject') earned = (s.stageReached[u.subj] || 0) >= u.n;
    if (u.type === 'full_clear')    earned = !!ar._cleared;
    if (earned) { s.unlocked.push(skin.id); newlyUnlocked.push(skin); }
  });

  saveSkinState(s);
  return newlyUnlocked;
}

window.arenaSetSkin = function(id) {
  const s = getSkinState();
  if (!s.unlocked.includes(id)) return;
  s.active = id;
  saveSkinState(s);
  applyActiveSkin();
  // Re-render the setup screen to refresh swatch selection state
  app.render();
};

// ─── Collectibles ─────────────────────────────────────────────────────────────
const COLLECTIBLES = [
  // ── Instruments ──
  {
    id: 'brass-compass', set: 'Instruments', name: 'Brass Compass', rarity: 'common', color: '#f59e0b',
    desc: 'A draftsman\'s divider compass — used to scribe arcs and transfer measurements since antiquity.',
    unlock: { type: 'good_stages', n: 1 }, unlockDesc: 'Answer 4+ questions correctly in any stage',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><circle cx="40" cy="18" r="4"/><line x1="40" y1="22" x2="24" y2="66"/><line x1="40" y1="22" x2="56" y2="66"/><circle cx="24" cy="66" r="3"/><circle cx="56" cy="66" r="3"/><line x1="28" y1="50" x2="52" y2="50" stroke-dasharray="3,2" opacity=".4"/></svg>`,
  },
  {
    id: 'spirit-level', set: 'Instruments', name: 'Spirit Level', rarity: 'common', color: '#10b981',
    desc: 'A sealed glass tube of liquid with an air bubble — the bubble centres only when the surface is perfectly horizontal.',
    unlock: { type: 'good_stages', n: 2 }, unlockDesc: 'Earn 2 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><rect x="8" y="32" width="64" height="16" rx="5"/><ellipse cx="40" cy="40" rx="14" ry="6"/><circle cx="41" cy="40" r="3.5" fill="currentColor" opacity=".45"/><line x1="8" y1="40" x2="22" y2="40" opacity=".3"/><line x1="58" y1="40" x2="72" y2="40" opacity=".3"/></svg>`,
  },
  {
    id: 'slide-rule', set: 'Instruments', name: 'Slide Rule', rarity: 'common', color: '#f97316',
    desc: 'An analogue calculator using logarithmic scales — standard engineering tool from the 1600s until the 1970s pocket calculator.',
    unlock: { type: 'good_stages', n: 3 }, unlockDesc: 'Earn 3 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><rect x="5" y="28" width="70" height="10" rx="1"/><rect x="5" y="42" width="70" height="10" rx="1"/><line x1="18" y1="28" x2="18" y2="52"/><line x1="32" y1="28" x2="32" y2="52"/><line x1="46" y1="28" x2="46" y2="52"/><line x1="60" y1="28" x2="60" y2="52"/><rect x="24" y="22" width="5" height="36" fill="currentColor" opacity=".18"/></svg>`,
  },
  {
    id: 'abacus', set: 'Instruments', name: 'Abacus', rarity: 'common', color: '#ef4444',
    desc: 'A frame of sliding beads on rods — one of the oldest calculating devices, still used in parts of Asia today.',
    unlock: { type: 'good_stages', n: 5 }, unlockDesc: 'Earn 5 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><rect x="8" y="12" width="64" height="56" rx="2"/><line x1="8" y1="37" x2="72" y2="37"/><line x1="23" y1="12" x2="23" y2="68"/><line x1="40" y1="12" x2="40" y2="68"/><line x1="57" y1="12" x2="57" y2="68"/><circle cx="23" cy="26" r="4.5" fill="currentColor" opacity=".4"/><circle cx="40" cy="23" r="4.5" fill="currentColor" opacity=".4"/><circle cx="57" cy="29" r="4.5" fill="currentColor" opacity=".4"/><circle cx="23" cy="52" r="4.5" fill="currentColor" opacity=".4"/><circle cx="40" cy="55" r="4.5" fill="currentColor" opacity=".4"/><circle cx="57" cy="50" r="4.5" fill="currentColor" opacity=".4"/></svg>`,
  },
  {
    id: 'balance-scale', set: 'Instruments', name: 'Balance Scale', rarity: 'common', color: '#8b5cf6',
    desc: 'The oldest weighing instrument — two pans suspended from a beam; equality of weight means equality of mass.',
    unlock: { type: 'good_stages', n: 7 }, unlockDesc: 'Earn 7 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><line x1="40" y1="10" x2="40" y2="68"/><line x1="14" y1="24" x2="66" y2="24"/><circle cx="40" cy="10" r="3.5"/><path d="M14,24 Q8,36 14,44 Q20,36 14,24"/><path d="M66,24 Q60,36 66,44 Q72,36 66,24"/><line x1="9" y1="44" x2="19" y2="44"/><line x1="61" y1="44" x2="71" y2="44"/></svg>`,
  },
  {
    id: 'vernier-caliper', set: 'Instruments', name: 'Vernier Caliper', rarity: 'rare', color: '#06b6d4',
    desc: 'A precision measuring tool invented by Pierre Vernier in 1631 — reads lengths to 0.1 mm via a sliding auxiliary scale.',
    unlock: { type: 'good_stages', n: 10 }, unlockDesc: 'Earn 10 good stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><rect x="5" y="34" width="68" height="9" rx="1"/><rect x="5" y="34" width="30" height="9" rx="1" fill="currentColor" opacity=".12"/><line x1="5" y1="29" x2="5" y2="50"/><line x1="19" y1="43" x2="19" y2="57"/><line x1="35" y1="29" x2="35" y2="50"/><line x1="45" y1="43" x2="45" y2="57"/><line x1="15" y1="36" x2="15" y2="43" opacity=".4"/><line x1="24" y1="36" x2="24" y2="43" opacity=".4"/><line x1="43" y1="34" x2="43" y2="43" opacity=".4"/><line x1="55" y1="34" x2="55" y2="43" opacity=".4"/></svg>`,
  },
  {
    id: 'prism', set: 'Instruments', name: 'Prism', rarity: 'rare', color: '#a855f7',
    desc: 'A glass triangular prism — Newton used one in 1666 to split white sunlight into its constituent colours.',
    unlock: { type: 'good_stages', n: 14 }, unlockDesc: 'Earn 14 good stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><polygon points="40,10 10,66 70,66"/><line x1="40" y1="10" x2="40" y2="66"/><line x1="40" y1="10" x2="68" y2="66" stroke="#f59e0b" opacity=".5"/><line x1="68" y1="66" x2="78" y2="54" stroke="#ef4444" opacity=".7"/><line x1="68" y1="66" x2="78" y2="63" stroke="#f59e0b" opacity=".7"/><line x1="68" y1="66" x2="76" y2="72" stroke="#22c55e" opacity=".7"/></svg>`,
  },
  {
    id: 'sextant', set: 'Instruments', name: 'Sextant', rarity: 'rare', color: '#0ea5e9',
    desc: 'A navigational instrument measuring the angle between a celestial body and the horizon — ships used it to find latitude at sea.',
    unlock: { type: 'good_stages', n: 20 }, unlockDesc: 'Earn 20 good stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><path d="M40,12 L10,66 L70,66 Z"/><path d="M40,12 A40,40 0 0,1 70,66" stroke-dasharray="4,3"/><line x1="40" y1="12" x2="58" y2="42"/><circle cx="40" cy="12" r="3.5"/><circle cx="58" cy="42" r="3" fill="currentColor" opacity=".35"/><line x1="25" y1="66" x2="55" y2="66"/></svg>`,
  },
  {
    id: 'astrolabe', set: 'Instruments', name: 'Astrolabe', rarity: 'rare', color: '#d97706',
    desc: 'A medieval astronomical computer — used to tell time, find latitude, and locate stars; predates the telescope by a millennium.',
    unlock: { type: 'perfect_stages', n: 1 }, unlockDesc: 'Answer all 5 questions correctly in any stage',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><circle cx="40" cy="42" r="28"/><circle cx="40" cy="42" r="20"/><circle cx="40" cy="42" r="10"/><line x1="12" y1="42" x2="68" y2="42"/><line x1="40" y1="14" x2="40" y2="70"/><line x1="40" y1="42" x2="58" y2="26"/><circle cx="40" cy="13" r="3.5"/></svg>`,
  },
  {
    id: 'armillary-sphere', set: 'Instruments', name: 'Armillary Sphere', rarity: 'exceptional', color: '#f43f5e',
    desc: 'A model of the celestial sphere with Earth at centre — used by ancient Greek and Chinese astronomers to map the heavens.',
    unlock: { type: 'perfect_stages', n: 3 }, unlockDesc: 'Earn 3 perfect stages (5/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><circle cx="40" cy="40" r="26"/><ellipse cx="40" cy="40" rx="26" ry="10"/><ellipse cx="40" cy="40" rx="10" ry="26"/><line x1="40" y1="14" x2="40" y2="66"/><circle cx="40" cy="40" r="5" fill="currentColor" opacity=".35"/></svg>`,
  },
  {
    id: 'planimeter', set: 'Instruments', name: 'Planimeter', rarity: 'exceptional', color: '#84cc16',
    desc: 'A mechanical integrator that traces a closed curve on a map and directly measures the enclosed area — no formulae needed.',
    unlock: { type: 'perfect_stages', n: 6 }, unlockDesc: 'Earn 6 perfect stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><circle cx="14" cy="40" r="7"/><line x1="21" y1="40" x2="44" y2="25"/><line x1="44" y1="25" x2="66" y2="40"/><circle cx="44" cy="25" r="4.5"/><circle cx="66" cy="40" r="3"/><ellipse cx="44" cy="54" rx="16" ry="10" stroke-dasharray="3,2"/></svg>`,
  },
  {
    id: 'pantograph', set: 'Instruments', name: 'Pantograph', rarity: 'exceptional', color: '#ec4899',
    desc: 'A linkage of four bars — tracing one point copies or scales a drawing at another point; used by cartographers and engravers.',
    unlock: { type: 'perfect_stages', n: 9 }, unlockDesc: 'Earn 9 perfect stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><line x1="8" y1="22" x2="50" y2="22"/><line x1="8" y1="52" x2="50" y2="52"/><line x1="8" y1="22" x2="8" y2="52"/><line x1="29" y1="22" x2="29" y2="52"/><line x1="50" y1="22" x2="70" y2="37"/><line x1="50" y1="52" x2="70" y2="67"/><line x1="70" y1="37" x2="70" y2="67"/><circle cx="8" cy="22" r="3" fill="currentColor"/><circle cx="70" cy="37" r="2.5" fill="currentColor" opacity=".4"/></svg>`,
  },
  {
    id: 'orrery', set: 'Instruments', name: 'Orrery', rarity: 'exceptional', color: '#f59e0b',
    desc: 'A clockwork mechanical model of the solar system — named after the Earl of Orrery; built c. 1704 by George Graham.',
    unlock: { type: 'perfect_stages', n: 12 }, unlockDesc: 'Earn 12 perfect stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><circle cx="40" cy="40" r="7" fill="currentColor" opacity=".3"/><circle cx="40" cy="40" r="15"/><circle cx="40" cy="40" r="25"/><circle cx="40" cy="25" r="3.5" fill="currentColor"/><circle cx="65" cy="40" r="2.5" fill="currentColor"/><circle cx="40" cy="15" r="2" fill="currentColor" opacity=".5"/></svg>`,
  },

  // ── Antiques ──
  {
    id: 'napiers-bones', set: 'Antiques', name: "Napier's Bones", rarity: 'common', color: '#78716c',
    desc: 'Numbered rods invented by John Napier in 1617 — a manual multiplication tool that preceded the slide rule.',
    unlock: { type: 'good_stages', n: 4 }, unlockDesc: 'Earn 4 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><rect x="10" y="10" width="12" height="60" rx="1"/><rect x="24" y="10" width="12" height="60" rx="1"/><rect x="38" y="10" width="12" height="60" rx="1"/><rect x="52" y="10" width="12" height="60" rx="1"/><line x1="10" y1="26" x2="22" y2="26"/><line x1="24" y1="26" x2="36" y2="26"/><line x1="38" y1="26" x2="50" y2="26"/><line x1="52" y1="26" x2="64" y2="26"/><line x1="10" y1="43" x2="22" y2="43"/><line x1="24" y1="43" x2="36" y2="43"/><line x1="38" y1="43" x2="50" y2="43"/><line x1="52" y1="43" x2="64" y2="43"/><line x1="10" y1="58" x2="22" y2="58"/><line x1="24" y1="58" x2="36" y2="58"/><line x1="38" y1="58" x2="50" y2="58"/><line x1="52" y1="58" x2="64" y2="58"/></svg>`,
  },
  {
    id: 'microscope', set: 'Antiques', name: 'Early Microscope', rarity: 'common', color: '#22c55e',
    desc: 'The compound microscope, developed c. 1590 by the Janssen family — opened the invisible world of cells and microbes.',
    unlock: { type: 'good_stages', n: 6 }, unlockDesc: 'Earn 6 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><line x1="40" y1="10" x2="40" y2="52"/><ellipse cx="40" cy="18" rx="9" ry="5"/><ellipse cx="40" cy="33" rx="7" ry="4.5"/><line x1="28" y1="52" x2="52" y2="52"/><line x1="28" y1="52" x2="22" y2="68"/><line x1="52" y1="52" x2="58" y2="68"/><line x1="18" y1="68" x2="62" y2="68"/></svg>`,
  },
  {
    id: 'pendulum-clock', set: 'Antiques', name: 'Pendulum Clock', rarity: 'common', color: '#6366f1',
    desc: 'Invented by Christiaan Huygens in 1656 — the pendulum\'s isochronous swing made it the world\'s most accurate clock for 270 years.',
    unlock: { type: 'good_stages', n: 8 }, unlockDesc: 'Earn 8 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><rect x="22" y="6" width="36" height="46" rx="3"/><circle cx="40" cy="27" r="12"/><line x1="40" y1="27" x2="40" y2="18"/><line x1="40" y1="27" x2="49" y2="33"/><line x1="40" y1="52" x2="40" y2="67"/><ellipse cx="40" cy="70" rx="7" ry="3.5"/></svg>`,
  },
  {
    id: 'tuning-fork', set: 'Antiques', name: 'Tuning Fork Set', rarity: 'common', color: '#14b8a6',
    desc: 'Invented by John Shore in 1711 — vibrating steel tines produce a pure musical tone used to tune instruments and measure frequency.',
    unlock: { type: 'good_stages', n: 9 }, unlockDesc: 'Earn 9 good stages (4+/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><line x1="26" y1="55" x2="26" y2="72"/><path d="M20,20 Q15,8 20,26 Q25,38 26,55"/><path d="M32,20 Q37,8 32,26 Q27,38 26,55"/><line x1="52" y1="55" x2="52" y2="72"/><path d="M45,18 Q40,6 45,24 Q50,36 52,55"/><path d="M59,18 Q64,6 59,24 Q54,36 52,55"/><line x1="16" y1="36" x2="36" y2="36"/></svg>`,
  },
  {
    id: 'lodestone', set: 'Antiques', name: 'Lodestone', rarity: 'rare', color: '#64748b',
    desc: 'A naturally magnetised piece of magnetite — ancient navigators noticed it always pointed north, making it the world\'s first compass.',
    unlock: { type: 'good_stages', n: 12 }, unlockDesc: 'Earn 12 good stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><path d="M30,18 Q18,14 13,28 Q8,44 18,56 Q28,68 46,62 Q62,56 64,40 Q66,22 50,16 Q40,12 30,18Z"/><path d="M13,40 Q5,40 3,30" stroke-dasharray="2,2"/><path d="M13,40 Q5,40 3,50" stroke-dasharray="2,2"/><path d="M64,40 Q74,40 77,30" stroke-dasharray="2,2"/><path d="M64,40 Q74,40 77,50" stroke-dasharray="2,2"/></svg>`,
  },
  {
    id: 'leyden-jar', set: 'Antiques', name: 'Leyden Jar', rarity: 'rare', color: '#3b82f6',
    desc: 'The first electrical capacitor, invented 1745 in Leiden — an inner and outer metal foil separated by glass; stored static charge for experiments.',
    unlock: { type: 'good_stages', n: 16 }, unlockDesc: 'Earn 16 good stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><path d="M28,20 Q18,26 18,46 Q18,66 40,69 Q62,66 62,46 Q62,26 52,20Z"/><rect x="28" y="11" width="24" height="11" rx="2"/><line x1="40" y1="11" x2="40" y2="4"/><circle cx="40" cy="3.5" r="3"/><path d="M29,46 Q40,39 51,46" stroke-dasharray="3,2"/></svg>`,
  },
  {
    id: 'camera-obscura', set: 'Antiques', name: 'Camera Obscura', rarity: 'rare', color: '#dc2626',
    desc: 'A darkened box with a small lens that projects an inverted image of the outside onto its interior — a direct ancestor of the photographic camera.',
    unlock: { type: 'perfect_stages', n: 2 }, unlockDesc: 'Earn 2 perfect stages (5/5 correct)',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><rect x="14" y="18" width="42" height="42" rx="2"/><circle cx="56" cy="39" r="9"/><line x1="65" y1="39" x2="74" y2="39"/><line x1="56" y1="18" x2="72" y2="8"/><line x1="56" y1="60" x2="72" y2="70"/><rect x="14" y="24" width="10" height="30" fill="currentColor" opacity=".1"/></svg>`,
  },
  {
    id: 'wimshurst', set: 'Antiques', name: 'Wimshurst Machine', rarity: 'exceptional', color: '#7c3aed',
    desc: 'An electrostatic generator invented by James Wimshurst c. 1880 — two contra-rotating discs build up charge and produce dramatic sparks.',
    unlock: { type: 'perfect_stages', n: 5 }, unlockDesc: 'Earn 5 perfect stages across runs',
    svg: `<svg viewBox="0 0 80 80" stroke="currentColor" fill="none" stroke-width="2"><circle cx="28" cy="38" r="20"/><circle cx="52" cy="38" r="20"/><line x1="8" y1="38" x2="72" y2="38"/><line x1="28" y1="18" x2="28" y2="58"/><line x1="52" y1="18" x2="52" y2="58"/><line x1="15" y1="25" x2="41" y2="51"/><line x1="15" y1="51" x2="41" y2="25"/><circle cx="28" cy="38" r="5" fill="currentColor" opacity=".25"/><circle cx="52" cy="38" r="5" fill="currentColor" opacity=".25"/><line x1="40" y1="10" x2="40" y2="5" stroke-width="3"/><line x1="40" y1="5" x2="44" y2="1"/></svg>`,
  },
];

function getCollectibleState() {
  const s = LS.get(ARENA_COL_KEY, {});
  if (!s.unlocked) s.unlocked = [];
  if (!s.totalAnswers) s.totalAnswers = 0;
  if (!s.goodStages) s.goodStages = 0;
  if (!s.perfectStages) s.perfectStages = 0;
  return s;
}

function saveCollectibleState(s) { LS.set(ARENA_COL_KEY, s); }

function checkAndUnlockCollectibles(ar) {
  const cs = getCollectibleState();
  const ss = getSkinState(); // already updated by checkAndUnlockSkins above
  cs.totalAnswers += (ar._allAnswered || []).length;
  cs.goodStages += (ar.goodStages || 0);
  cs.perfectStages += (ar.perfectStages || 0);

  const newlyUnlocked = [];
  COLLECTIBLES.forEach(col => {
    if (cs.unlocked.includes(col.id)) return;
    const u = col.unlock;
    let earned = false;
    if (u.type === 'runs')          earned = ss.runCount >= u.n;
    if (u.type === 'combo')         earned = ss.allTimeCombo >= u.n;
    if (u.type === 'stage')         earned = (ss.maxStage || 0) >= u.n;
    if (u.type === 'stage_subject') earned = (ss.stageReached[u.subj] || 0) >= u.n;
    if (u.type === 'answers')       earned = cs.totalAnswers >= u.n;
    if (u.type === 'full_clear')    earned = !!ar._cleared;
    if (u.type === 'good_stages')   earned = cs.goodStages >= u.n;
    if (u.type === 'perfect_stages') earned = cs.perfectStages >= u.n;
    if (earned) { cs.unlocked.push(col.id); newlyUnlocked.push(col); }
  });

  saveCollectibleState(cs);
  return newlyUnlocked;
}

function renderArenaCollection() {
  const cs = getCollectibleState();
  const totalUnlocked = cs.unlocked.length;
  const rarityOrder = { common: 0, rare: 1, exceptional: 2 };
  const rarityLabel  = { common: 'Common', rare: 'Rare', exceptional: 'Exceptional' };

  function itemCard(col) {
    const unlocked = cs.unlocked.includes(col.id);
    return `
      <div class="arena-col-card ${unlocked ? '' : 'locked'} rarity-${col.rarity}" style="--col-accent:${col.color || '#6366f1'}">
        <div class="arena-col-art">${col.svg}</div>
        <div class="arena-col-info">
          <span class="arena-col-name">${esc(col.name)}</span>
          <span class="arena-col-rarity rarity-${col.rarity}">${rarityLabel[col.rarity]}</span>
          ${unlocked
            ? `<p class="arena-col-desc">${esc(col.desc)}</p>`
            : `<p class="arena-col-hint">🔒 ${esc(col.unlockDesc)}</p>`}
        </div>
      </div>`;
  }

  function section(setName) {
    const items = COLLECTIBLES.filter(c => c.set === setName)
      .sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
    const unlockedCount = items.filter(c => cs.unlocked.includes(c.id)).length;
    return `
      <div class="arena-col-section">
        <h2 class="arena-col-section-title">${esc(setName)} <span class="arena-col-section-count">${unlockedCount}/${items.length}</span></h2>
        <div class="arena-col-grid">${items.map(itemCard).join('')}</div>
      </div>`;
  }

  return `
    <div class="screen arena-col-screen">
      <div class="arena-col-header">
        <h1 class="arena-col-title">🎒 Collection</h1>
        <span class="arena-col-total">${totalUnlocked} / ${COLLECTIBLES.length} unlocked</span>
        <button class="btn ghost arena-col-back" onclick="app.go(['arena'])">← Arena</button>
      </div>
      <p class="arena-col-sub">Scientific instruments and historical curiosities — each item carries one line of real history.</p>
      ${section('Instruments')}
      ${section('Antiques')}
    </div>`;
}

// Subjects available for Arena per board (those with an MCQ bank)
// Physics, Chemistry, Biology are virtual subjects — all drawn from Science bank,
// filtered by q.subject. No separate bank files needed.
const SCIENCE_VIRTUAL = new Set(['Physics', 'Chemistry', 'Biology']);

const ARENA_SUBJECTS = {
  CBSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'English', 'Hindi'],
  ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English'],
  IB:   [], // no IB MCQ banks yet
};

// Stage table per arena.md
const ARENA_STAGES = [
  // [stageFrom, stageTo, difficulty, secondsPerQ, questionsPerStage]
  { from: 1,  to: 3,  diff: 'easy',   secs: 45, qTotal: 5 },
  { from: 4,  to: 6,  diff: 'medium', secs: 40, qTotal: 5 },
  { from: 7,  to: 9,  diff: 'medium', secs: 35, qTotal: 5 },
  { from: 10, to: 10, diff: 'hard',   secs: 35, qTotal: 5 },
];
const ARENA_LIVES = 7;
const COMBO_THRESHOLD_1 = 5;   // 1.5× at 5 in a row
const COMBO_THRESHOLD_2 = 10;  // 2.0× at 10 in a row
const DIFF_MULT = { easy: 1.0, medium: 1.5, hard: 2.0, '': 1.0 };

// ─── Run state ────────────────────────────────────────────────────────────────
let ar = null; // active arena run object

function arenaHiKey() {
  return `${state.grade}::${state.board}`;
}

function saveRun() {
  if (!ar) return;
  const toSave = Object.assign({}, ar);
  delete toSave._banks;        // don't serialise loaded banks
  delete toSave._virtualSet;   // Set is not JSON-serialisable
  LS.set(ARENA_KEY, toSave);
}

function clearSavedRun() {
  LS.del(ARENA_KEY);
}

// ─── Stage helpers ────────────────────────────────────────────────────────────
function stageSpec(stageNum) {
  return ARENA_STAGES.find(s => stageNum >= s.from && stageNum <= s.to) || ARENA_STAGES[ARENA_STAGES.length - 1];
}

// Build the question list for one stage from loaded banks (flat qTotal across subjects)
function pickStageQuestions(subjects, difficulty, stageNum) {
  const spec = stageSpec(stageNum);
  const nTotal = spec.qTotal;
  const servedSet = new Set(ar.servedIds);
  const progStore = LS.get(KEY.progress, {});
  const diffMap = { easy: ['easy'], medium: ['medium'], hard: ['hard', 'medium'] };
  const allowed = diffMap[difficulty] || null;
  const now = Date.now();

  // Build a pool from all subjects, tagging each question with its subject
  const allDue = [], allNotDue = [];
  for (const subject of subjects) {
    const bank = ar._banks[subject] || [];
    let pool = bank.filter(q => !servedSet.has(q.id));
    let narrowPool = allowed ? pool.filter(q => allowed.includes((q.difficulty || '').toLowerCase())) : pool;
    if (narrowPool.length === 0) narrowPool = pool;
    const leitnerSubject = (ar._virtualSet && ar._virtualSet.has(subject)) ? 'Science' : subject;
    const bySubj = progStore[scopeKey(leitnerSubject)] || {};
    narrowPool.forEach(q => {
      const r = bySubj[q.id];
      (r && r.due <= now ? allDue : allNotDue).push({ ...q, _subject: subject });
    });
  }

  // Board questions come first within each tier (due, then not-due)
  const boardFirst = arr => shuffle(arr.filter(q => isBoardQuestion(q))).concat(shuffle(arr.filter(q => !isBoardQuestion(q))));
  const combined = boardFirst(allDue).concat(boardFirst(allNotDue));
  let picked = combined.slice(0, nTotal);

  // Fallback: pull from any unserved question if pool was too small
  if (picked.length < nTotal) {
    for (const subject of subjects) {
      const bank = ar._banks[subject] || [];
      bank.filter(q => !servedSet.has(q.id) && !picked.find(p => p.id === q.id))
        .forEach(q => picked.push({ ...q, _subject: subject }));
      if (picked.length >= nTotal) break;
    }
    picked = picked.slice(0, nTotal);
  }

  picked.forEach(q => servedSet.add(q.id));
  return shuffle(picked);
}

// ─── Scoring ─────────────────────────────────────────────────────────────────
function calcScore(difficulty, secondsRemaining, combo) {
  const diffMult = DIFF_MULT[difficulty] || 1.0;
  const comboMult = combo >= COMBO_THRESHOLD_2 ? 2.0
    : combo >= COMBO_THRESHOLD_1 ? 1.5 : 1.0;
  const base = 100 * diffMult + secondsRemaining * 5;
  return Math.round(base * comboMult);
}

// ─── High scores ──────────────────────────────────────────────────────────────
function getHiScores() {
  const all = LS.get(ARENA_HI_KEY, {});
  return all[arenaHiKey()] || { score: 0, stage: 0, combo: 0 };
}

function saveHiScore(score, stage, combo) {
  const all = LS.get(ARENA_HI_KEY, {});
  const key = arenaHiKey();
  const cur = all[key] || { score: 0, stage: 0, combo: 0 };
  all[key] = {
    score: Math.max(cur.score, score),
    stage: Math.max(cur.stage, stage),
    combo: Math.max(cur.combo, combo),
  };
  LS.set(ARENA_HI_KEY, all);
}

// ─── Run lifecycle ────────────────────────────────────────────────────────────
async function arenaStartRun(subjects) {
  // Load all banks for chosen subjects.
  // Physics/Chemistry/Biology are virtual — sourced from the Science bank filtered by q.subject.
  const banks = {};
  // A subject is "virtual" only when it has no own bank but Science bank exists.
  // ICSE Physics/Chemistry/Biology have their own banks — load them directly.
  const virtualSubjs = subjects.filter(s =>
    SCIENCE_VIRTUAL.has(s) && !bankSlug(s, state.board, state.grade) && !!bankSlug('Science', state.board, state.grade)
  );
  const directSubjs = subjects.filter(s => !virtualSubjs.includes(s));
  const loaders = directSubjs.map(s => loadBank(s).then(qs => { banks[s] = qs; }));
  if (virtualSubjs.length) {
    loaders.push(loadBank('Science').then(qs => {
      virtualSubjs.forEach(s => { banks[s] = qs.filter(q => q.subject === s); });
    }));
  }
  await Promise.all(loaders);
  // Record which subjects are virtual (drawn from Science bank) for Leitner mapping
  const virtualSet = new Set(virtualSubjs);

  const hiAtStart = getHiScores();
  ar = {
    runId: Date.now().toString(36),
    board: state.board,
    grade: state.grade,
    subjects,
    stage: 1,
    lives: ARENA_LIVES,
    score: 0,
    combo: 0,
    longestCombo: 0,
    deepestStage: 1,
    goodStages: 0,
    perfectStages: 0,
    servedIds: [],
    startedAt: Date.now(),
    stageStartedAt: Date.now(),
    stageQuestions: null,
    stageIndex: 0,
    stageResults: [],
    missedQuestions: [],
    phase: 'question', // 'question' | 'interstitial' | 'gameover'
    _banks: banks,
    _virtualSet: virtualSet,         // subjects drawn from Science bank (CBSE only currently)
    _prevHiBefore: hiAtStart.score,  // for newBest detection on game-over
  };

  ar.stageQuestions = pickStageQuestions(subjects, stageSpec(1).diff, 1);
  ar.servedIds.push(...ar.stageQuestions.map(q => q.id));
  saveRun();
}

// Called after all questions in the current stage have been answered.
// Lives are tracked as floats (half-heart granularity).
// Gain: +0.5 per correct answer. Cost: 0→3 lives, 1→2, 2→1, 3+→0.
function arenaEndStage(correct) {
  const total = ar.stageQuestions.length;

  const gained = correct * 0.5;
  const cost = correct === 0 ? 3 : correct === 1 ? 2 : correct === 2 ? 2 : correct === 3 ? 1 : 0;

  ar.lives = Math.min(ARENA_LIVES, ar.lives + gained - cost);

  if (ar.lives <= 0) {
    ar.lives = 0;
    ar.phase = 'gameover';
    return;
  }

  ar.deepestStage = Math.max(ar.deepestStage, ar.stage);
  if (correct >= 4) ar.goodStages = (ar.goodStages || 0) + 1;
  if (correct === 5) ar.perfectStages = (ar.perfectStages || 0) + 1;
  ar.stageStartedAt = Date.now();
  ar.phase = 'interstitial';
  ar._lastStageCorrect = correct;
  ar._lastStageLiveLost = cost;
  ar._lastStageHeartGained = gained;
  ar._lastStageTotal = total;
}

function arenaNextStage() {
  ar.stage += 1;
  ar.stageIndex = 0;
  ar.stageResults = [];

  if (ar.stage > 10) {
    // Completed all 10 stages — treat as victory (game over with full clear)
    ar.phase = 'gameover';
    ar._cleared = true;
    return;
  }

  if (ar._challengeQs) {
    // Challenge run: serve the next 5 pre-determined questions
    const start = (ar.stage - 1) * 5;
    ar.stageQuestions = ar._challengeQs.slice(start, start + 5);
  } else {
    const spec = stageSpec(ar.stage);
    ar.stageQuestions = pickStageQuestions(ar.subjects, spec.diff, ar.stage);
    ar.servedIds.push(...ar.stageQuestions.map(q => q.id));
  }
  ar.phase = 'question';
  saveRun();
}

// ─── Screen rendering ─────────────────────────────────────────────────────────
// All render functions return HTML strings and are called by app._screen / app._afterRender.

function renderSkinPicker() {
  const s = getSkinState();
  const swatches = ARENA_SKINS.map(skin => {
    const unlocked = s.unlocked.includes(skin.id);
    const active = s.active === skin.id;
    return `<button
      class="arena-skin-swatch ${active ? 'active' : ''} ${unlocked ? '' : 'locked'}"
      style="background:${skin.color}"
      title="${unlocked ? skin.name : '🔒 ' + skin.unlockDesc}"
      onclick="${unlocked ? `arenaSetSkin('${skin.id}')` : ''}"
      ${unlocked ? '' : 'disabled'}
    ></button>`;
  }).join('');
  const unlockedCount = s.unlocked.length;
  return `<div class="arena-skin-row"><span class="arena-skin-label">Skins <span class="arena-meta-count">${unlockedCount}/${ARENA_SKINS.length}</span></span>${swatches}</div>`;
}

function renderDailyCard() {
  const dr = getDailyResult();
  const dateLabel = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  if (dr) {
    return `<div class="arena-daily-card arena-daily-done-card">
      <div class="arena-daily-card-title">📅 Daily Challenge <span class="arena-daily-date">${esc(dateLabel)}</span></div>
      <p class="arena-daily-result">✓ ${dr.correct}/${dr.total} correct · <strong>${dr.score.toLocaleString()}</strong> pts</p>
      <button class="btn ghost arena-daily-btn" onclick="arenaDailyBegin()">Play Again</button>
    </div>`;
  }
  return `<div class="arena-daily-card">
    <div class="arena-daily-card-title">📅 Daily Challenge <span class="arena-daily-date">${esc(dateLabel)}</span></div>
    <p class="arena-daily-sub">${DAILY_Q_COUNT} questions · same set for everyone · one attempt</p>
    <button class="btn primary arena-daily-btn" onclick="arenaDailyBegin()">Start Daily</button>
  </div>`;
}

function renderArenaSetup() {
  // Which subjects for this board have a bank?
  const ARENA_EXCLUDE = new Set(['Hindi', 'English']);
  const boardSubjects = (ARENA_SUBJECTS[state.board] || []).filter(s => !ARENA_EXCLUDE.has(s));
  const available = boardSubjects.filter(s => {
    if (bankSlug(s, state.board, state.grade)) return true;  // has own bank
    if (SCIENCE_VIRTUAL.has(s)) return !!bankSlug('Science', state.board, state.grade); // virtual via Science
    return false;
  });
  if (!available.length) {
    return `<div class="screen arena-setup-screen">
      <h1 class="arena-title">⚡ Arena</h1>
      <p class="arena-sub">Coming soon for ${esc(state.board)}!</p>
      <p>Question banks for Arena are not yet available for your board.</p>
      <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
    </div>`;
  }
  const opts = available.map((s, i) => `
    <label class="arena-subj-opt">
      <input type="checkbox" name="arena-subj" value="${esc(s)}" ${!['Hindi','English'].includes(s) ? 'checked' : ''}>
      <span>${esc(s)}</span>
    </label>`).join('');

  return `
    <!-- How to play modal -->
    <div class="arena-how-backdrop" id="arena-how-backdrop" onclick="document.getElementById('arena-how-backdrop').hidden=true" hidden></div>
    <div class="arena-how-modal" id="arena-how-modal" hidden>
      <div class="arena-how-modal-header">
        <span class="arena-how-modal-title">How to play</span>
        <button class="arena-how-close" onclick="document.getElementById('arena-how-modal').hidden=true;document.getElementById('arena-how-backdrop').hidden=true">✕</button>
      </div>
      <p class="arena-how-section-title">Free Run</p>
      <ul class="arena-how-list">
        <li><span class="arena-how-icon">📚</span><span>Each <strong>stage</strong> has 5 MCQs drawn from your chosen subjects.</span></li>
        <li><span class="arena-how-icon">⏱️</span><span>A <strong>timer</strong> counts down per question — answer fast for bonus points.</span></li>
        <li><span class="arena-how-icon">♥</span><span>You start with <strong>7 hearts</strong>. Every correct answer earns +½ heart (capped at 7).</span></li>
        <li><span class="arena-how-icon">⚠️</span><span>Stages <strong>drain hearts</strong> if you score &lt;3: 0 right → −3, 1 right → −1.5, 2 right → −1. Score 3+ to break even or gain.</span></li>
        <li><span class="arena-how-icon">💀</span><span>Hearts hit 0 → <strong>run over</strong>. Survive as many stages as you can.</span></li>
        <li><span class="arena-how-icon">⚡</span><span>Chain correct answers for a <strong>combo multiplier</strong> — 5 in a row = 1.5×, 10 = 2×.</span></li>
        <li><span class="arena-how-icon">🔁</span><span>Weak questions resurface more often — Arena also trains your <strong>spaced repetition</strong>.</span></li>
      </ul>
      <p class="arena-how-section-title">Challenge a Friend</p>
      <ul class="arena-how-list">
        <li><span class="arena-how-icon">🏁</span><span>Finish a <strong>Free Run</strong> and tap <em>Challenge Friends</em> on the results screen to get a 6-letter code.</span></li>
        <li><span class="arena-how-icon">📤</span><span>Share the code with friends. They enter it under <strong>Join a Challenge</strong> and play the exact same question set at their own pace.</span></li>
        <li><span class="arena-how-icon">🏆</span><span>A <strong>leaderboard</strong> shows everyone's score once they finish. Code expires in 7 days.</span></li>
      </ul>
      <p class="arena-how-section-title">Live Room</p>
      <ul class="arena-how-list">
        <li><span class="arena-how-icon">🎮</span><span>Tap <strong>Create Room</strong>, pick subjects + question count + timer speed, and share the 6-letter room code with friends.</span></li>
        <li><span class="arena-how-icon">👥</span><span>Friends enter the code under <strong>Join a Live Room</strong>. Everyone lands in the lobby and sees the player list live.</span></li>
        <li><span class="arena-how-icon">⏩</span><span>The host presses <em>Start Game</em>. All players see each question at the same moment with a shared countdown.</span></li>
        <li><span class="arena-how-icon">🥇</span><span>Tap your answer before time runs out — faster correct answers score more points. Final leaderboard shows 🥇🥈🥉.</span></li>
      </ul>
    </div>

    <div class="screen arena-setup-screen">
      <div class="arena-setup-header">
        <div>
          <h1 class="arena-title">⚡ Arena</h1>
          <p class="arena-sub">Fast MCQ blitz · ${esc(state.board)} · race the clock</p>
        </div>
        <div class="arena-setup-header-btns">
          <button class="btn ghost arena-how-btn" onclick="document.getElementById('arena-how-modal').hidden=false;document.getElementById('arena-how-backdrop').hidden=false">How to play</button>
          <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
        </div>
      </div>

      <!-- Daily challenge card -->
      ${renderDailyCard()}

      <div class="arena-picker-sep"></div>

      <!-- Free run -->
      <p class="arena-pick-label">Free Run</p>
      <div class="arena-subj-grid">${opts}</div>
      <p class="arena-subj-hint">Select at least 3 subjects to begin.</p>
      <div class="arena-setup-actions">
        <button class="btn primary arena-go-btn" onclick="arenaBegin()">Start Run</button>
      </div>

      <div class="arena-picker-sep"></div>

      <!-- Async challenge code entry -->
      <p class="arena-pick-label">Join a Challenge</p>
      <div class="arena-challenge-entry">
        <input id="arena-code-input" type="text" maxlength="6" placeholder="Enter 6-letter code"
               style="text-transform:uppercase" oninput="this.value=this.value.toUpperCase()">
        <button class="btn primary" onclick="arenaJoinChallenge()">Join</button>
      </div>
      <p id="arena-code-error" class="arena-code-error" hidden></p>

      <div class="arena-picker-sep"></div>

      <!-- Live Room -->
      <p class="arena-pick-label">Live Room <span class="arena-pick-badge">Real-time</span></p>
      <div class="arena-live-options">
        <div class="arena-live-row">
          <label class="arena-live-label">Questions</label>
          <select id="live-q-count" class="arena-live-select">
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <label class="arena-live-label">Seconds/Q</label>
          <select id="live-timer-secs" class="arena-live-select">
            <option value="15">15s</option>
            <option value="20" selected>20s</option>
            <option value="30">30s</option>
            <option value="45">45s</option>
          </select>
        </div>
        <button id="live-create-btn" class="btn primary" onclick="liveCreateAndGo()">Create Room</button>
      </div>
      <p class="arena-pick-label" style="margin-top:10px">Join a Live Room</p>
      <div class="arena-challenge-entry">
        <input id="live-join-input" type="text" maxlength="6" placeholder="Enter room code"
               style="text-transform:uppercase" oninput="this.value=this.value.toUpperCase()">
        <button id="live-join-btn" class="btn primary" onclick="liveJoinAndGo()">Join</button>
      </div>
      <p id="live-join-error" class="arena-code-error" hidden></p>

      <div class="arena-picker-sep"></div>

      <!-- Skins + collectibles -->
      ${renderSkinPicker()}
      <div class="arena-col-row">
        <button class="btn ghost arena-col-link" onclick="app.go(['collection'])">🎒 Collection</button>
        <span class="arena-meta-count">${getCollectibleState().unlocked.length}/${COLLECTIBLES.length} items</span>
      </div>

    </div>`;
}

function renderArenaQuestion() {
  if (!ar || !ar.stageQuestions) return renderArenaSetup();
  const q = ar.stageQuestions[ar.stageIndex];
  const spec = stageSpec(ar.stage);
  const timerSecs = ar.isDaily ? DAILY_SECS : spec.secs;
  const total = ar.stageQuestions.length;
  const qNum = ar.stageIndex + 1;
  const comboMult = ar.combo >= COMBO_THRESHOLD_2 ? '2.0×' : ar.combo >= COMBO_THRESHOLD_1 ? '1.5×' : '1.0×';

  // Shuffle display order once per question; store on the question object so
  // re-renders (e.g. after pause/resume) keep the same layout.
  if (!q._displayOrder) {
    const order = q.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    q._displayOrder = order;
    q._displayCorrect = order.indexOf(q.correct);
  }
  const opts = q._displayOrder.map((origIdx, displayIdx) => `
    <button class="arena-opt-btn" onclick="arenaAnswer(${displayIdx})" data-idx="${displayIdx}">
      <span class="arena-opt-letter">${'ABCD'[displayIdx]}</span>
      <span class="arena-opt-text">${esc(q.options[origIdx])}</span>
    </button>`).join('');



  const fullHearts = Math.floor(ar.lives);
  const hasHalf = (ar.lives - fullHearts) >= 0.5;
  const livePips = Array.from({ length: ARENA_LIVES }, (_, i) => {
    const cls = i < fullHearts ? 'alive' : (i === fullHearts && hasHalf ? 'half' : 'lost');
    return `<span class="arena-life-pip ${cls}">♥</span>`;
  }).join('');

  return `
    <div class="screen arena-screen" id="arena-screen">
      <div class="arena-hud">
        <div class="arena-hud-left">
          <span class="arena-hud-stage">${ar.isDaily ? '📅 Daily' : `Stage ${ar.stage}`}</span>
          <span class="arena-hud-q">Q${qNum}/${total}</span>
        </div>
        <div class="arena-hud-center">
          <span class="arena-lives">${livePips}</span>
        </div>
        <div class="arena-hud-right">
          <span class="arena-combo ${ar.combo >= COMBO_THRESHOLD_1 ? 'hot' : ''}">⚡${ar.combo} ${comboMult}</span>
          <span class="arena-score">${ar.score.toLocaleString()}</span>
          <button class="arena-pause-btn" onclick="arenaPause()" title="Pause">⏸</button>
        </div>
      </div>
      <div class="arena-pause-overlay" id="arena-pause-overlay">
        <div class="arena-pause-card">
          <p class="arena-pause-title">⏸ Paused</p>
          <p class="arena-pause-sub">Stage ${ar.stage} · ${ar.score.toLocaleString()} pts · ${ar.lives.toFixed(1)}♥</p>
          <button class="btn primary arena-pause-resume" onclick="arenaResume()">▶ Resume</button>
          <button class="btn ghost" onclick="arenaQuit()">↩ Back to Arena</button>
        </div>
      </div>

      <div class="arena-timer-row">
        <div class="arena-timer-wrap">
          <div class="arena-timer-bar" id="arena-timer-bar"></div>
        </div>
        <div class="arena-timer-label"><span id="arena-timer-secs">${timerSecs}</span>s</div>
      </div>

      <div class="arena-subject-tag">${esc(q._subject)}</div>
      <div class="arena-question-text">${esc(q.text)}</div>
      <div class="arena-opts-grid" id="arena-opts">${opts}</div>
    </div>`;
}

function renderArenaInterstitial() {
  const correct = ar._lastStageCorrect;
  const total = ar._lastStageTotal;
  const cost = ar._lastStageLiveLost || 0;
  const gained = ar._lastStageHeartGained || 0;
  const net = gained - cost;
  const scoreMsg = ar._lastStageScore ? `+${ar._lastStageScore.toLocaleString()} pts` : '';
  const lifeMsg = net > 0 ? `+${net}♥ gained — ${ar.lives.toFixed(1)} remaining`
    : net < 0 ? `${net}♥ — ${ar.lives.toFixed(1)} remaining`
    : '';

  return `
    <div class="screen arena-interstitial">
      <div class="arena-inter-badge ${correct === total ? 'perfect' : ''}">
        ${correct === total ? '✦ Stage Cleared!' : '⚡ Advance'}
      </div>
      <p class="arena-inter-detail">${correct}/${total} correct ${scoreMsg}</p>
      ${lifeMsg ? `<p class="arena-inter-life ${net >= 0 ? 'gained' : ''}">${lifeMsg}</p>` : ''}
      <p class="arena-inter-next">Stage ${ar.stage + 1} next</p>
      <button class="btn primary arena-go-btn" onclick="arenaContinue()">Continue</button>
      <button class="btn arena-quit-btn" onclick="arenaForfeit()">Quit Run</button>
    </div>`;
}

function renderArenaGameOver() {
  // Flush Leitner + streak exactly once (guard against re-render on back-nav)
  if (!ar._flushed) {
    ar._flushed = true;
    if (ar._allAnswered && ar._allAnswered.length > 0) {
      const bySubject = {};
      ar._allAnswered.forEach(m => {
        (bySubject[m._subject] = bySubject[m._subject] || []).push(m);
      });
      Object.keys(bySubject).forEach(subj => {
        const seen = {};
        bySubject[subj].forEach(r => { seen[r.id] = r; });
        const leitnerSubj = (ar._virtualSet && ar._virtualSet.has(subj)) ? 'Science' : subj;
        app._updateProgress(leitnerSubj, Object.values(seen));
      });
    }
    if (ar._answeredForStreak) app._recordStreakActivity(ar._answeredForStreak);
    if (ar.isDaily) {
      const correct = (ar._allAnswered || []).filter(q => q.isCorrect).length;
      saveDailyResult({ score: ar.score, correct, total: (ar._allAnswered || []).length, combo: ar.longestCombo, completedAt: Date.now() });
    }
    saveHiScore(ar.score, ar.deepestStage, ar.longestCombo);
    clearSavedRun();
    ar._newSkins = checkAndUnlockSkins(ar);
    ar._newCols  = checkAndUnlockCollectibles(ar);

    // Challenge: submit score, then load leaderboard asynchronously
    if (ar._challengeCode && window.riseChallenge) {
      riseChallenge.submitChallengeResult(ar._challengeCode, {
        score: ar.score, stage: ar.deepestStage, combo: ar.longestCombo
      }).then(() => riseChallenge.fetchLeaderboard(ar._challengeCode))
        .then(results => {
          const lb = document.getElementById('arena-leaderboard-box');
          if (lb) lb.innerHTML = renderChallengeLeaderboard(results);
        }).catch(() => {});
    }
  }

  const newBest = ar.score > (ar._prevHiBefore || 0);
  const hi = getHiScores(); // read after save so panel shows updated best

  const cleared = ar._cleared ? '<p class="arena-cleared">🏆 Full clear! All 10 stages!</p>' : '';

  const newSkinsHtml = (ar._newSkins || []).length
    ? `<div class="arena-unlock-banner">🎨 New skin${ar._newSkins.length > 1 ? 's' : ''} unlocked: <strong>${ar._newSkins.map(s => s.name).join(', ')}</strong> — pick it on the setup screen!</div>`
    : '';
  const newColsHtml = (ar._newCols || []).length
    ? `<div class="arena-unlock-banner arena-unlock-col">🎒 New collectible${ar._newCols.length > 1 ? 's' : ''} unlocked: <strong>${ar._newCols.map(c => c.name).join(', ')}</strong></div>`
    : '';

  // Build full question review list (all attempted, correct + wrong)
  const allAnswered = ar._allAnswered || [];
  const reviewHtml = allAnswered.length === 0
    ? '<p class="arena-no-missed">No questions attempted.</p>'
    : allAnswered.map((q, i) => {
        const isRight = q.isCorrect;
        const userOpt = q.userAnswer !== undefined ? q.options[q.userAnswer] : null;
        return `
      <div class="arena-review-item ${isRight ? 'arena-review-correct' : 'arena-review-wrong'}">
        <div class="arena-review-header">
          <span class="arena-review-badge">${isRight ? '✓' : '✗'}</span>
          <span class="arena-review-subj">${esc(q._subject)}${q.chapter ? ` · ${esc(q.chapter)}` : ''}</span>
        </div>
        <p class="arena-review-q">${esc(q.text)}</p>
        ${!isRight && userOpt ? `<p class="arena-review-user-ans">Your answer: ${esc(userOpt)}</p>` : ''}
        ${!isRight && q.userAnswer === undefined ? `<p class="arena-review-user-ans">Timed out</p>` : ''}
        <p class="arena-review-ans">Correct: ${esc(q.options[q.correct])}</p>
        ${q.explanation ? `<p class="arena-review-exp">${esc(q.explanation)}</p>` : ''}
      </div>`;
      }).join('');

  return `
    <div class="screen arena-gameover">
      <div class="arena-go-layout">
        <div class="arena-go-left">
          ${cleared}
          <h2 class="arena-go-title">${ar.isDaily ? `Daily · ${ar.dailyDate}` : ar._cleared ? 'Run Complete' : 'Run Over'}</h2>
          ${newBest ? '<p class="arena-new-best">🌟 New personal best!</p>' : ''}
          ${newSkinsHtml}
          ${newColsHtml}
          <div class="arena-go-stats">
            <div class="arena-stat"><span class="arena-stat-val">${ar.score.toLocaleString()}</span><span class="arena-stat-lbl">Score</span></div>
            <div class="arena-stat"><span class="arena-stat-val">${ar.deepestStage}</span><span class="arena-stat-lbl">Deepest Stage</span></div>
            <div class="arena-stat"><span class="arena-stat-val">${ar.longestCombo}</span><span class="arena-stat-lbl">Longest Combo</span></div>
          </div>
          <div class="arena-go-hi">
            <span class="arena-hi-label">Personal Best</span>
            <span>${hi.score.toLocaleString()} pts · Stage ${hi.stage} · ${hi.combo}× combo</span>
          </div>
          <div class="arena-go-actions">
            ${ar.isDaily
              ? `<button class="btn primary" onclick="arenaDailyBegin()">Play Again</button>`
              : `<button class="btn primary" onclick="app.go(['arena'])">Play Again</button>`}
            <button class="btn ghost" onclick="app.go(['arena'])">Arena</button>
            <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
            <button class="btn ghost" onclick="app.go(['collection'])">🎒 Collection</button>
            ${!ar.isDaily ? `<button class="btn ghost arena-challenge-btn" id="arena-challenge-btn" onclick="arenaCreateChallenge()">⚡ Challenge Friends</button>` : ''}
          </div>
          <div id="arena-challenge-box" class="arena-challenge-box" hidden></div>
          ${ar._challengeCode ? `<div id="arena-leaderboard-box" class="arena-leaderboard-box"><p class="arena-lb-loading">Loading leaderboard…</p></div>` : ''}
        </div>
        <div class="arena-go-right">
          <div class="arena-missed-section">
            <h3>Questions attempted <span class="arena-review-count">${allAnswered.length}</span></h3>
            ${reviewHtml}
          </div>
        </div>
      </div>
    </div>`;
}

// ─── Challenge: create ───────────────────────────────────────────────────────
async function arenaCreateChallenge() {
  if (!window.riseChallenge) return;
  const btn = document.getElementById('arena-challenge-btn');
  const box = document.getElementById('arena-challenge-box');
  if (!box) return;
  if (btn) { btn.disabled = true; btn.textContent = 'Creating…'; }
  try {
    const code = await riseChallenge.createChallenge({
      board:       ar.board,
      grade:       ar.grade,
      subjects:    ar.subjects,
      questionIds: ar.servedIds.slice(),
      score:       ar.score,
      stage:       ar.deepestStage,
      combo:       ar.longestCombo
    });
    box.hidden = false;
    box.innerHTML = `
      <p class="arena-challenge-label">Share this code with friends:</p>
      <div class="arena-code-display">
        <span class="arena-code-text">${esc(code)}</span>
        <button class="btn small ghost" onclick="navigator.clipboard.writeText('${esc(code)}').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})">Copy</button>
      </div>
      <p class="arena-challenge-note">Code expires in 7 days · friends enter it on the Arena setup screen</p>`;
    if (btn) btn.hidden = true;
  } catch (e) {
    if (btn) { btn.disabled = false; btn.textContent = '⚡ Challenge Friends'; }
    box.hidden = false;
    box.innerHTML = `<p class="arena-code-error" style="display:block">Could not create challenge — are you online?</p>`;
  }
}

// ─── Challenge: join ──────────────────────────────────────────────────────────
async function arenaJoinChallenge() {
  if (!window.riseChallenge) return;
  const input = document.getElementById('arena-code-input');
  const errEl = document.getElementById('arena-code-error');
  const code  = (input?.value || '').trim().toUpperCase();
  if (errEl) errEl.hidden = true;

  if (code.length !== 6) {
    if (errEl) { errEl.textContent = 'Enter the full 6-letter code.'; errEl.hidden = false; }
    return;
  }
  try {
    const data = await riseChallenge.loadChallenge(code);
    // Start a run using the stored question IDs
    await arenaBeginChallenge(data, code);
  } catch (e) {
    if (errEl) { errEl.textContent = e.message || 'Invalid or expired code.'; errEl.hidden = false; }
  }
}

async function arenaBeginChallenge(data, code) {
  // Load the banks needed for the challenge's board/grade/subjects
  const banks = {};
  await Promise.all(data.subjects.map(async s => {
    try {
      const slug = bankSlug(s, data.board, data.grade) || bankSlug('Science', data.board, data.grade);
      if (!slug) return;
      const qs = await loadBank(s, data.board, data.grade);
      banks[s] = qs;
    } catch (_) {}
  }));

  // Build ordered question list from IDs
  const allQ = Object.values(banks).flat();
  const byId = {};
  allQ.forEach(q => { byId[q.id] = q; });
  const questions = data.questionIds.map(id => byId[id]).filter(Boolean);
  if (!questions.length) {
    const errEl = document.getElementById('arena-code-error');
    if (errEl) { errEl.textContent = 'Could not load challenge questions.'; errEl.hidden = false; }
    return;
  }

  // Assign subject tag to each question
  questions.forEach(q => {
    if (!q._subject) {
      const subj = data.subjects.find(s => (banks[s] || []).some(x => x.id === q.id));
      q._subject = subj || data.subjects[0];
    }
  });

  const hiAtStart = getHiScores();
  ar = {
    runId: Date.now().toString(36),
    board: data.board,
    grade: data.grade,
    subjects: data.subjects,
    stage: 1,
    lives: ARENA_LIVES,
    score: 0,
    combo: 0,
    longestCombo: 0,
    deepestStage: 1,
    goodStages: 0,
    perfectStages: 0,
    servedIds: data.questionIds.slice(),
    startedAt: Date.now(),
    stageStartedAt: Date.now(),
    stageQuestions: questions.slice(0, 5),
    stageIndex: 0,
    stageResults: [],
    missedQuestions: [],
    phase: 'question',
    _banks: banks,
    _virtualSet: new Set(),
    _prevHiBefore: hiAtStart.score,
    _challengeCode: code,   // track so we can submit score on game-over
    _challengeQs: questions // full ordered list for stage serving
  };
  saveRun();
  app.go(['arena-run'], true);
}

// ─── Challenge: render leaderboard ──────────────────────────────────────────
function renderChallengeLeaderboard(results) {
  if (!results || !results.length) return '';
  const rows = results.map((r, i) => `
    <tr class="${i === 0 ? 'arena-lb-top' : ''}">
      <td>${i + 1}</td>
      <td>${esc(r.screenName)}</td>
      <td>${r.score.toLocaleString()}</td>
      <td>Stage ${r.stage}</td>
      <td>${r.combo}×</td>
    </tr>`).join('');
  return `
    <div class="arena-leaderboard">
      <h3 class="arena-lb-title">⚡ Challenge Leaderboard</h3>
      <table class="arena-lb-table">
        <thead><tr><th>#</th><th>Player</th><th>Score</th><th>Stage</th><th>Combo</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

// ─── Timer ────────────────────────────────────────────────────────────────────
let _arenaTimer = null;
let _arenaSecsLeft = 0;

function arenaClearTimer() {
  if (_arenaTimer) { clearInterval(_arenaTimer); _arenaTimer = null; }
}

function arenaStartTimer(secs) {
  arenaClearTimer();
  _arenaSecsLeft = secs;
  const bar = document.getElementById('arena-timer-bar');
  const lbl = document.getElementById('arena-timer-secs');
  if (bar) bar.style.width = '100%';

  _arenaTimer = setInterval(() => {
    _arenaSecsLeft -= 1;
    const bar = document.getElementById('arena-timer-bar');
    const lbl = document.getElementById('arena-timer-secs');
    if (lbl) lbl.textContent = _arenaSecsLeft;
    if (bar) bar.style.width = `${(_arenaSecsLeft / secs) * 100}%`;
    if (_arenaSecsLeft <= 5 && bar) bar.classList.add('low');
    if (_arenaSecsLeft <= 0) {
      arenaClearTimer();
      arenaAnswer(-1); // timeout = wrong
    }
  }, 1000);
}

let _arenaPaused = false;

window.arenaPause = function() {
  if (_arenaPaused) return;
  _arenaPaused = true;
  arenaClearTimer();
  const overlay = document.getElementById('arena-pause-overlay');
  if (overlay) overlay.classList.add('active');
};

window.arenaResume = function() {
  _arenaPaused = false;
  const overlay = document.getElementById('arena-pause-overlay');
  if (overlay) overlay.classList.remove('active');
  const spec = stageSpec(ar.stage);
  const secs = ar.isDaily ? DAILY_SECS : spec.secs;
  // Resume from remaining time, not full duration
  const remaining = _arenaSecsLeft > 0 ? _arenaSecsLeft : secs;
  _arenaSecsLeft = remaining;
  _arenaTimer = setInterval(() => {
    _arenaSecsLeft -= 1;
    const bar = document.getElementById('arena-timer-bar');
    const lbl = document.getElementById('arena-timer-secs');
    if (lbl) lbl.textContent = _arenaSecsLeft;
    if (bar) bar.style.width = `${(_arenaSecsLeft / secs) * 100}%`;
    if (_arenaSecsLeft <= 5 && bar) bar.classList.add('low');
    if (_arenaSecsLeft <= 0) { arenaClearTimer(); arenaAnswer(-1); }
  }, 1000);
};

window.arenaQuit = function() {
  _arenaPaused = false;
  arenaClearTimer();
  ar = null;
  app.go(['arena']);
};

// ─── Actions (called from HTML onclick) ──────────────────────────────────────
window.arenaBegin = async function() {
  const checked = Array.from(document.querySelectorAll('input[name="arena-subj"]:checked')).map(el => el.value);
  if (checked.length < 3) {
    alert('Please select at least 3 subjects.');
    return;
  }
  const btn = document.querySelector('.arena-go-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Loading…'; }
  await arenaStartRun(checked);
  app.go(['arena-run'], true);
};

window.arenaDailyBegin = async function() {
  const btn = document.querySelector('.arena-daily-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Loading…'; }

  // Load all available banks for this board (exclude Hindi/English)
  const _excludeD = new Set(['Hindi', 'English']);
  const boardSubjects = (ARENA_SUBJECTS[state.board] || []).filter(s => !_excludeD.has(s));
  const available = boardSubjects.filter(s => {
    if (bankSlug(s, state.board, state.grade)) return true;
    if (SCIENCE_VIRTUAL.has(s)) return !!bankSlug('Science', state.board, state.grade);
    return false;
  });

  const banks = {};
  const virtualSubjs = available.filter(s =>
    SCIENCE_VIRTUAL.has(s) && !bankSlug(s, state.board, state.grade) && !!bankSlug('Science', state.board, state.grade)
  );
  const directSubjs = available.filter(s => !virtualSubjs.includes(s));
  const loaders = directSubjs.map(s => loadBank(s).then(qs => { banks[s] = qs; }));
  if (virtualSubjs.length) {
    loaders.push(loadBank('Science').then(qs => {
      virtualSubjs.forEach(s => { banks[s] = qs.filter(q => q.subject === s); });
    }));
  }
  await Promise.all(loaders);

  const today = todayStr();
  const seed = dateSeed(`${today}::${state.grade}::${state.board}`);
  const rng = seededRng(seed);

  // Pool all questions tagged with subject, seeded-shuffle, take DAILY_Q_COUNT
  let pool = [];
  available.forEach(s => { (banks[s] || []).forEach(q => pool.push({ ...q, _subject: s })); });
  const picked = seededShuffle(pool, rng).slice(0, DAILY_Q_COUNT);

  _arenaPaused = false;
  const hiAtStart = getHiScores();
  ar = {
    runId: `daily-${today}`,
    board: state.board,
    grade: state.grade,
    subjects: available,
    isDaily: true,
    dailyDate: today,
    stage: 1,
    lives: ARENA_LIVES,
    score: 0,
    combo: 0,
    longestCombo: 0,
    deepestStage: 1,
    goodStages: 0,
    perfectStages: 0,
    servedIds: picked.map(q => q.id),
    startedAt: Date.now(),
    stageStartedAt: Date.now(),
    stageQuestions: picked,
    stageIndex: 0,
    stageResults: [],
    missedQuestions: [],
    phase: 'question',
    _banks: banks,
    _virtualSet: new Set(virtualSubjs),
    _prevHiBefore: hiAtStart.score,
  };
  saveRun();
  app.go(['arena-run'], true);
};

window.arenaAnswer = function(idx) {
  if (!ar || ar.phase !== 'question') return;
  arenaClearTimer();

  const q = ar.stageQuestions[ar.stageIndex];
  const spec = stageSpec(ar.stage);
  // idx is the display index; _displayCorrect is the display index of the right answer
  const isCorrect = idx !== -1 && idx === (q._displayCorrect ?? q.correct);
  const secondsRemaining = Math.max(0, _arenaSecsLeft);

  // Track for Leitner + streak — store in original (non-shuffled) terms
  const origUserAnswer = idx === -1 ? undefined : (q._displayOrder ? q._displayOrder[idx] : idx);
  const reviewRec = {
    id: q.id, text: q.text, options: q.options, correct: q.correct,
    userAnswer: origUserAnswer,
    isCorrect, explanation: q.explanation || '', chapter: q.chapter || '',
    _subject: q._subject,
  };
  ar._allAnswered = ar._allAnswered || [];
  ar._allAnswered.push(reviewRec);
  ar._answeredForStreak = (ar._answeredForStreak || 0) + 1;

  if (isCorrect) {
    ar.combo += 1;
    ar.longestCombo = Math.max(ar.longestCombo, ar.combo);
    const pts = calcScore(q.difficulty || '', secondsRemaining, ar.combo);
    ar.score += pts;
    ar.stageResults.push({ correct: true, pts });
  } else {
    ar.combo = 0;
    ar.stageResults.push({ correct: false, pts: 0 });
    ar.missedQuestions.push({ ...q });
  }

  saveRun();

  // Flash feedback on the button
  const opts = document.getElementById('arena-opts');
  if (opts) {
    opts.querySelectorAll('.arena-opt-btn').forEach(btn => btn.disabled = true);
    if (idx >= 0) {
      const clicked = opts.querySelector(`[data-idx="${idx}"]`);
      if (clicked) clicked.classList.add(isCorrect ? 'correct' : 'wrong');
    }
    const correctDisplayIdx = q._displayCorrect ?? q.correct;
    const correctBtn = opts.querySelector(`[data-idx="${correctDisplayIdx}"]`);
    if (correctBtn && !isCorrect) correctBtn.classList.add('reveal');
  }

  setTimeout(() => arenaAdvance(), 900);
};

function arenaAdvance() {
  if (!ar) return;
  ar.stageIndex += 1;

  if (ar.isDaily) {
    // Daily: no stage structure — all questions in one flat sequence
    if (ar.stageIndex < ar.stageQuestions.length) {
      ar.phase = 'question';
      app.go(['arena-run'], true);
    } else {
      ar.phase = 'gameover';
      app.go(['arena-over'], true);
    }
    saveRun();
    return;
  }

  if (ar.stageIndex < ar.stageQuestions.length) {
    // More questions in this stage
    ar.phase = 'question';
    app.go(['arena-run'], true);
    return;
  }

  // Stage complete — tally correct answers
  const correct = ar.stageResults.filter(r => r.correct).length;
  const stageScore = ar.stageResults.reduce((s, r) => s + r.pts, 0);
  ar._lastStageScore = stageScore;

  arenaEndStage(correct);

  if (ar.phase === 'gameover') {
    app.go(['arena-over'], true);
  } else {
    app.go(['arena-inter'], true);
  }
}

window.arenaContinue = function() {
  arenaNextStage();
  if (ar.phase === 'gameover') {
    app.go(['arena-over'], true);
  } else {
    app.go(['arena-run'], true);
  }
};

window.arenaForfeit = function() {
  arenaClearTimer();
  ar.phase = 'gameover';
  app.go(['arena-over'], true);
};

// ─── Hook into app routing ────────────────────────────────────────────────────
// Extend app._screen and app._afterRender to handle arena-* routes.
// Called after app.js has been fully evaluated (arena.js loads after it).
(function patchApp() {
  const origScreen = app._screen.bind(app);
  app._screen = function(name, params) {
    if (name === 'arena')       return renderArenaSetup();
    if (name === 'arena-run')   return ar ? renderArenaQuestion() : renderArenaSetup();
    if (name === 'arena-inter') return ar ? renderArenaInterstitial() : renderArenaSetup();
    if (name === 'arena-over')  return ar ? renderArenaGameOver() : renderArenaSetup();
    if (name === 'collection')  return renderArenaCollection();
    return origScreen(name, params);
  };

  const origAfter = app._afterRender.bind(app);
  app._afterRender = function(name, params) {
    if (name === 'arena-run' && ar && ar.phase === 'question') {
      const secs = ar.isDaily ? DAILY_SECS : stageSpec(ar.stage).secs;
      arenaStartTimer(secs);
    } else {
      arenaClearTimer();
    }
    if (['arena', 'arena-run', 'arena-inter', 'arena-over', 'collection'].includes(name)) {
      applyActiveSkin();
    } else {
      clearActiveSkin();
      origAfter(name, params);
    }
  };

  // Extend the guard list in render() by patching the valid-routes check.
  // The simplest way is to monkey-patch render() to whitelist arena routes.
  const origRender = app.render.bind(app);
  app.render = function() {
    const r = parseHash();
    const arenaRoutes = ['arena', 'arena-run', 'arena-inter', 'arena-over', 'collection'];
    if (arenaRoutes.includes(r.name)) {
      // Bypass app.js guard — handle arena screens directly
      if (!state.board) { app.go(['board'], true); return; }
      state.screen = r.name;
      state.params = r.parts || [];
      document.getElementById('app').innerHTML = app._header() + `<main>${app._screen(r.name, r.parts || [])}</main>`;
      window.scrollTo(0, 0);
      app._afterRender(r.name, r.parts || []);
      return;
    }
    clearActiveSkin();
    origRender();
  };
}());
