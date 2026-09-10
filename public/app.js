// ─── Small helpers ────────────────────────────────────────────────────────────
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function breakParts(str) {
  return String(str).replace(/\s+(?=\((?:[ivxlcdm]{1,6}|[a-hA-H])\))/g, '\n');
}

const LS = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ } },
  del(key)        { try { localStorage.removeItem(key); } catch { /* ignore */ } }
};

const KEY = {
  board:     'rise.board',
  grade:     'rise.grade',
  draft:     'rise.draft',
  results:   'rise.results',
  autoNext:  'rise.autoNext',
  progress:  'rise.progress',
  bookmarks: 'rise.bookmarks',
  streak:    'rise.streak',
  saDrafts:  'rise.saDrafts',
  solvedRevealed: 'rise.solvedRevealed'
};

function scopeKey(subject, grade, board) {
  return `${grade || state.grade}::${board || state.board}::${subject}`;
}

function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function plural(n, word) { return `${n} ${word}${n === 1 ? '' : 's'}`; }

const DAILY_GOAL = 30;

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function addDaysStr(dateStr, delta) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + delta);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  board:   LS.get(KEY.board, null),
  grade:   (g => g === 'XII' ? 'X' : g)(LS.get(KEY.grade, 'X')),
  screen:  'board',
  params:  [],
  notesQuery: '',
  notesFilter: 'all',
  openPicker: null,
  difficulty: {},
  saChapter: {},
  solvedChapter: {},
  solvedExercise: {},
  mobileMenuOpen: false
};

// ─── Routing ──────────────────────────────────────────────────────────────────
function parseHash() {
  const raw = (location.hash || '').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean).map(p => { try { return decodeURIComponent(p); } catch { return p; } });
  return { name: parts[0] || '', parts: parts.slice(1) };
}
function buildHash(parts) {
  return '#/' + parts.map(encodeURIComponent).join('/');
}

// ─── App ──────────────────────────────────────────────────────────────────────
const app = {

  session: null,
  reviewData: null,

  init() {
    this.autoNext = LS.get(KEY.autoNext, true);
    window.addEventListener('hashchange', () => this.render());
    document.addEventListener('keydown', e => this.onKey(e));
    document.addEventListener('click', e => {
      if (state.mobileMenuOpen && !e.target.closest('.hdr-menu') && !e.target.closest('.hdr-hamburger')) {
        state.mobileMenuOpen = false;
        this.render();
      }
    });
    if (!location.hash && state.board) this.go(['home'], true);
    this.render();
  },

  go(parts, replace = false) {
    state.mobileMenuOpen = false;
    const target = buildHash(parts);
    if (location.hash === target) { this.render(); return; }
    if (replace) {
      location.replace(location.pathname + location.search + target);
      this.render();
    } else {
      location.hash = target;
    }
  },

  render() {
    const r = parseHash();
    let name = r.name || 'home';

    if (!state.board && !['privacy','terms'].includes(name)) name = 'board';
    else if (name === 'test' && !this.session)    name = 'home';
    else if (name === 'results' && !this.reviewData) name = 'home';
    else if (name === 'shortanswers' && !saBankSlug(r.parts[0])) name = 'home';
    else if (name === 'solved' && !solvedBankSlug(r.parts[0])) name = 'home';
    else if (!['home', 'notes', 'test', 'results', 'board', 'progress', 'shortanswers', 'solved', 'privacy', 'terms'].includes(name)) name = 'home';

    if (name !== (r.name || 'home') && name !== 'board') {
      location.replace(location.pathname + location.search + buildHash([name]));
    }

    state.screen = name;
    state.params = r.parts;

    document.getElementById('app').innerHTML = this._header() + `<main>${this._screen(name, r.parts)}</main>`;
    window.scrollTo(0, 0);
    this._afterRender(name, r.parts);
  },

  _header() {
    if (state.screen === 'board') return '';

    const inTest = state.screen === 'test';
    const logoAttrs = inTest ? 'aria-disabled="true"' : `onclick="app.go(['home'])" title="Home"`;
    const logo = `<button class="hdr-logo" ${logoAttrs}>
      <svg class="logo-icon" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#2563eb"/>
        <rect x="5"  y="22" width="5" height="5"  rx="1.5" fill="rgba(255,255,255,0.55)"/>
        <rect x="13" y="17" width="5" height="10" rx="1.5" fill="rgba(255,255,255,0.78)"/>
        <rect x="21" y="11" width="5" height="16" rx="1.5" fill="#ffffff"/>
        <polygon points="23.5,4 27,9.5 20,9.5" fill="#ffffff"/>
      </svg>
      <span>Rise</span>
    </button>`;

    const params = state.params || [];
    const crumbParts = [BOARDS.find(b => b.id === state.board)?.name || ''].filter(Boolean);
    if (state.screen === 'notes') crumbParts.push('Revision Notes');
    else if (state.screen === 'progress') crumbParts.push('Progress');
    else if (state.screen === 'shortanswers') { if (params[0]) crumbParts.push(params[0]); crumbParts.push('Board Short Answers'); }
    else if (state.screen === 'solved')       { if (params[0]) crumbParts.push(params[0]); crumbParts.push('Textbook Solved Exercises'); }
    else if (state.screen === 'privacy')      crumbParts.push('Privacy Policy');
    else if (state.screen === 'terms')        crumbParts.push('Terms & Conditions');
    else if (['arena','arena-run','arena-inter','arena-over'].includes(state.screen)) crumbParts.push('Arena');
    else if (state.screen === 'test' && this.session) {
      crumbParts.push(this.session.subject, MODES[this.session.mode]?.label || 'Test');
    } else if (state.screen === 'results' && this.lastConfig) {
      crumbParts.push(this.lastConfig.subject, (MODES[this.lastConfig.mode]?.label || 'Test') + ' Results');
    }
    const crumb = crumbParts.length ? `<span class="hdr-crumb">${crumbParts.map(esc).join(' <span class="hdr-crumb-sep">&rarr;</span> ')}</span>` : '';

    const notesActive = state.screen === 'notes';
    const progressActive = state.screen === 'progress';

    const menuBoards = BOARDS.map(b => `
      <button class="btn small ${b.id === state.board ? 'primary' : 'ghost'}"
              aria-pressed="${b.id === state.board}" ${inTest ? 'disabled' : ''}
              title="${esc(b.desc)}" onclick="app.switchBoard('${b.id}')">${esc(b.name)}</button>`).join('');
    const hamburgerBtn = `
      <button class="hdr-hamburger" aria-label="Menu" aria-expanded="${state.mobileMenuOpen}"
              ${inTest ? 'disabled' : ''} onclick="app.toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>`;
    const authUser = window.riseAuth?.user;
    const menu = `
      <div class="hdr-menu" ${state.mobileMenuOpen ? '' : 'hidden'}>
        ${menuBoards}
        <button class="btn small ${progressActive ? 'primary' : 'ghost'}"
                ${inTest ? 'disabled' : ''} onclick="app.go(['progress'])">Progress</button>
        <button class="btn small ${notesActive ? 'primary' : 'ghost'}"
                ${inTest ? 'disabled' : ''} onclick="app.go(['notes'])">Revision Notes</button>
        <a class="btn small ghost" href="careers.html">Career Pathing</a>
        ${authUser ? `<button class="btn small ghost auth-signout-btn" onclick="riseAuth.signOut()">Sign out</button>` : ''}
      </div>`;
    const loginBtn = authUser
      ? `<button class="hdr-avatar" title="Edit profile" onclick="riseAuth.openProfile()" aria-label="Edit profile">
           ${authUser.photoURL
             ? `<img src="${esc(authUser.photoURL)}" alt="" width="28" height="28">`
             : `<span>${esc((authUser.displayName || authUser.email || '?')[0].toUpperCase())}</span>`}
         </button>`
      : `<button class="btn small ghost hdr-signin" ${inTest ? 'disabled' : ''}
                 onclick="riseAuth.openModal()">Sign in</button>`;

    return `
      <header class="app-header">
        <div class="hdr-left">${logo}${crumb}</div>
        <div class="hdr-right">${loginBtn}${hamburgerBtn}</div>
        ${menu}
      </header>`;
  },

  toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    this.render();
  },

  _screen(name, params) {
    switch (name) {
      case 'board':    return this._screenBoard();
      case 'home':     return this._screenHome();
      case 'notes':    return this._screenNotes(params[0] || NOTES_CATALOG[0].id, Number(params[1]) || 0);
      case 'progress': return this._screenProgress();
      case 'test':     return this._screenTest();
      case 'results':  return this._screenResults();
      case 'shortanswers': return this._screenShortAnswers(params[0]);
      case 'solved':   return this._screenSolvedExercises(params[0]);
      case 'privacy':  return this._screenPrivacy();
      case 'terms':    return this._screenTerms();
      default:         return '';
    }
  },

  _screenPrivacy() {
    return `
      <div class="screen legal-screen">
        <div class="legal-top-bar"><button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button></div>
        <h1 class="legal-title">Privacy Policy</h1>
        <p class="legal-updated">Last updated: September 2026</p>
        <p>Rise ("the app") is a self-study practice tool for Grade 10 CBSE, ICSE and IB board-exam students. This policy explains what happens to your data when you use it.</p>
        <h2>No account, no personal data collection</h2>
        <p>Rise does not require sign-up or login, and does not ask for your name, email, or any other personal information.</p>
        <h2>Everything stays on your device</h2>
        <p>Your progress, test attempts, bookmarks, streaks, and settings are stored only in your browser's or app's local storage, directly on your device. This data is never transmitted to, or stored on, any server we operate. Uninstalling the app or clearing site data permanently deletes it, since no copy exists anywhere else.</p>
        <h2>Question content</h2>
        <p>The app downloads question-bank content (practice questions, answers, explanations) from our servers so it can display them. These are static content files — no information about you or your device is attached to these requests beyond what any standard web request includes (e.g. IP address, handled transiently by our hosting provider and not linked to any profile).</p>
        <h2>No advertising, no analytics trackers, no third-party sharing</h2>
        <p>Rise does not embed advertising SDKs, analytics/tracking scripts, or any mechanism that shares your activity with third parties.</p>
        <h2>Children's privacy</h2>
        <p>Rise is designed for use by school students. Since no personal data is collected or transmitted, no personal data about children is gathered by this app.</p>
        <h2>Changes to this policy</h2>
        <p>If this policy changes (for example, if an optional account/sync feature is introduced in the future), this page will be updated and the "Last updated" date above will change accordingly.</p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href="mailto:rise@strat101.com">rise@strat101.com</a>.</p>
      </div>`;
  },

  _screenTerms() {
    return `
      <div class="screen legal-screen">
        <div class="legal-top-bar"><button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button></div>
        <h1 class="legal-title">Terms &amp; Conditions</h1>
        <p class="legal-updated">Last updated: September 2026</p>
        <p>These terms govern your use of Rise, a free self-study practice tool for Grade 10 board-exam students. By using the app you agree to these terms.</p>
        <h2>Use of the app</h2>
        <p>Rise is provided for personal, non-commercial educational use. You may not copy, redistribute, or use the question content or software for commercial purposes without written permission.</p>
        <h2>Content accuracy</h2>
        <p>Practice questions and explanations are authored for study purposes. While we take care to ensure accuracy, Rise is a revision aid and not a substitute for your school curriculum, textbooks, or official board guidance. Always verify important information with your teacher or official sources.</p>
        <h2>No warranty</h2>
        <p>Rise is provided "as is", without warranty of any kind. We do not guarantee uninterrupted access, error-free content, or specific exam outcomes. Your use is at your own risk.</p>
        <h2>Intellectual property</h2>
        <p>All question content, explanations, and software in Rise are the property of Strat101 or used under appropriate licence. Reproduction or redistribution without permission is prohibited.</p>
        <h2>Limitation of liability</h2>
        <p>To the maximum extent permitted by law, Strat101 is not liable for any indirect, incidental, or consequential damages arising from your use of Rise.</p>
        <h2>Changes to these terms</h2>
        <p>We may update these terms from time to time. Continued use of the app after an update constitutes acceptance of the revised terms. The "Last updated" date above will reflect any changes.</p>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India.</p>
        <h2>Contact</h2>
        <p>Questions about these terms? Email us at <a href="mailto:rise@strat101.com">rise@strat101.com</a>.</p>
      </div>`;
  },

  _afterRender(name, params) {
    if (name === 'home')    this._hydrateHome();
    if (name === 'test') {
      this.renderQuestion(); this.renderPalette(); this.renderTestMeta();
      if (this.session.questions.length) this.startTimer();
    }
    if (name === 'results') { this._buildReviewPalette(); this.showReviewQuestion(this.reviewIndex || 0); }
    if (name === 'shortanswers') this._hydrateShortAnswers(params[0]);
    if (name === 'solved') this._hydrateSolvedExercises(params[0]);
  },

  onKey(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea' || tag === 'select';

    if (this._modalOpen()) {
      if (e.key === 'Escape') { e.preventDefault(); this._modalCancel(); }
      return;
    }
    if (state.screen === 'test' && !typing && this.session && this.session.questions.length) {
      const k = e.key.toLowerCase();
      const letter = 'abcd'.indexOf(k);
      const digit  = '1234'.indexOf(k);
      const optionCount = this.session.questions[this.session.index].options.length;
      if (letter > -1 && letter < optionCount) { e.preventDefault(); this.selectOption(letter); return; }
      if (digit  > -1 && digit  < optionCount) { e.preventDefault(); this.selectOption(digit);  return; }
      if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); this.nextQuestion(); return; }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prevQuestion(); return; }
      if (k === 'm')              { e.preventDefault(); this.markForReview(); return; }
      return;
    }
    if (state.screen === 'results' && !typing) {
      const visible = this._reviewList();
      const pos = visible.indexOf(this.reviewData[this.reviewIndex]);
      if (e.key === 'ArrowRight' && pos > -1 && pos < visible.length - 1) {
        e.preventDefault(); this.showReviewQuestion(this.reviewData.indexOf(visible[pos + 1]));
      } else if (e.key === 'ArrowLeft' && pos > 0) {
        e.preventDefault(); this.showReviewQuestion(this.reviewData.indexOf(visible[pos - 1]));
      }
      return;
    }
    if (state.screen === 'notes' && e.key === '/' && !typing) {
      const search = document.getElementById('notes-search');
      if (search) { e.preventDefault(); search.focus(); search.select(); }
    }
  }
};

window.app = app;
