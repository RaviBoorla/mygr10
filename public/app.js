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

    // Lazy-load careers.js on first careers navigation
    if (name === 'careers' && !window._careersLoaded) {
      window._careersLoaded = true;
      const sc = document.createElement('script');
      sc.src = 'careers.js?v=2';
      sc.onload = () => this.render();
      document.head.appendChild(sc);
      document.getElementById('app').innerHTML = this._header() + '<main><div style="padding:2rem;text-align:center;opacity:.5">Loading…</div></main>';
      return;
    }

    // Lazy-load arena.js on first arena navigation
    const arenaRoutes = ['arena', 'arena-run', 'arena-inter', 'arena-over', 'collection'];
    if (arenaRoutes.includes(name) && !window._arenaLoaded) {
      window._arenaLoaded = true;
      const s = document.createElement('script');
      s.src = 'arena.js?v=6';
      s.onload = () => this.render();
      document.head.appendChild(s);
      document.getElementById('app').innerHTML = this._header() + '<main><div style="padding:2rem;text-align:center;opacity:.5">Loading Arena…</div></main>';
      return;
    }

    if (!state.board && !['privacy','terms'].includes(name)) name = 'board';
    else if (name === 'test' && !this.session)    name = 'home';
    else if (name === 'results' && !this.reviewData) name = 'home';
    else if (name === 'shortanswers' && !saBankSlug(r.parts[0])) name = 'home';
    else if (name === 'solved' && !solvedBankSlug(r.parts[0])) name = 'home';
    else if (!['home', 'notes', 'test', 'results', 'board', 'progress', 'shortanswers', 'solved', 'privacy', 'terms', 'careers'].includes(name)) name = 'home';

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
    else if (state.screen === 'careers')      crumbParts.push('Career Pathing');
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
        <button class="btn small ghost" ${inTest ? 'disabled' : ''} onclick="app.go(['careers'])">Career Pathing</button>
        ${authUser ? `<button class="btn small ghost auth-signout-btn" onclick="riseAuth.signOut()">Sign out</button>` : ''}
      </div>`;
    const noCloe = ['test','arena','arena-run','arena-inter','arena-over','collection','live-lobby'].includes(state.screen);
    const askAiBtn = authUser && !noCloe
      ? `<button class="btn small ghost hdr-ask-ai" onclick="aiPanel.toggle()" title="Chat with Cloé">✦ Ask Cloé</button>`
      : '';
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
        <div class="hdr-right">${askAiBtn}${loginBtn}${hamburgerBtn}</div>
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
      case 'careers':  return this._screenCareers();
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
        <p>Rise ("the app", "we", "us") is a self-study practice tool for Grade 10 CBSE, ICSE and IB board-exam students, operated by Strat101. This policy explains what personal data we collect, why, how it is used, and your rights over it. It is intended to meet the requirements of applicable privacy laws including the EU General Data Protection Regulation (GDPR), the UK GDPR, the California Consumer Privacy Act (CCPA/CPRA), and India's Digital Personal Data Protection Act (DPDPA).</p>

        <h2>1. Data we collect and why</h2>
        <p><strong>No account required.</strong> The app works without any sign-in. In that mode no personal data is collected or transmitted by us.</p>
        <p><strong>Optional sign-in (Google OAuth).</strong> If you choose to sign in with Google, we receive your Google account email address and display name solely to identify your cloud backup. We do not receive your Google password or payment information. Legal basis: your explicit consent (GDPR Art. 6(1)(a)); you may withdraw it by signing out.</p>
        <p><strong>Optional Arena profile.</strong> For Arena multiplayer features (challenge rooms, leaderboards) you may optionally provide a display name, country, and city. This is shown to other players in Arena sessions. Legal basis: consent. You can update or delete this at any time.</p>
        <p><strong>Practice data.</strong> Your test scores, bookmarks, streaks, and settings are stored only in your browser's local storage on your device. If you are signed in, a copy is synced to cloud storage linked to your account for cross-device restore. We do not analyse or share this data.</p>
        <p><strong>Server logs.</strong> Standard web-server access logs (IP address, browser type, pages accessed, timestamps) are retained for up to 30 days for security and operational purposes by our hosting provider (Cloudflare Pages) and then deleted. These are not linked to any personal profile.</p>

        <h2>2. How we use your data</h2>
        <ul class="legal-list">
          <li>To provide and improve the app's features</li>
          <li>To sync your progress across your own devices (if signed in)</li>
          <li>To display your Arena profile to other players in multiplayer sessions</li>
          <li>To maintain the security and stability of the service</li>
        </ul>
        <p>We do not use your data for advertising, profiling, or automated decision-making.</p>

        <h2>3. Data sharing and third parties</h2>
        <p>We do not sell, rent, or share your personal data with third parties for their own purposes. The only third-party services we use are:</p>
        <ul class="legal-list">
          <li><strong>Google OAuth</strong> — for optional sign-in (governed by Google's Privacy Policy)</li>
          <li><strong>Cloudflare Pages</strong> — for static hosting and CDN delivery (governed by Cloudflare's Privacy Policy)</li>
        </ul>
        <p>Rise does not embed advertising SDKs, analytics/tracking scripts, or third-party cookies.</p>

        <h2>4. Data retention</h2>
        <p>Local storage data is retained until you clear your browser data or uninstall the app. Cloud backup data is retained until you delete your account or request erasure. Arena profile data is deleted on request. Server logs are deleted within 30 days.</p>

        <h2>5. Your rights</h2>
        <p>Depending on your jurisdiction you may have the right to:</p>
        <ul class="legal-list">
          <li><strong>Access</strong> — request a copy of personal data we hold about you</li>
          <li><strong>Correction</strong> — ask us to correct inaccurate data</li>
          <li><strong>Erasure</strong> ("right to be forgotten") — ask us to delete your data</li>
          <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
          <li><strong>Withdrawal of consent</strong> — sign out at any time to stop cloud sync</li>
          <li><strong>Restriction / objection</strong> — object to certain processing</li>
          <li><strong>Non-discrimination</strong> (CCPA) — exercising privacy rights will not affect your access to the app</li>
        </ul>
        <p>To exercise any right, email <a href="mailto:rise@strat101.com">rise@strat101.com</a>. We will respond within 30 days (or the period required by applicable law).</p>

        <h2>6. Children's privacy</h2>
        <p>Rise is designed for school students. We do not knowingly collect personal data from children under 13 (or under 16 where required by law) without verifiable parental consent. If you believe a child has provided personal data without appropriate consent, contact us and we will delete it promptly.</p>

        <h2>7. Data security</h2>
        <p>We use industry-standard measures including HTTPS encryption in transit and access-controlled cloud storage. No method of transmission or storage is 100% secure; we cannot guarantee absolute security.</p>

        <h2>8. International transfers</h2>
        <p>If you are located in the EEA, UK, or other regions with data transfer restrictions, be aware that our hosting infrastructure may process data outside your region. Where required, we rely on standard contractual clauses or equivalent safeguards.</p>

        <h2>9. Changes to this policy</h2>
        <p>If this policy changes materially, we will update the "Last updated" date above. For significant changes affecting your rights we will provide notice within the app where reasonably practicable.</p>

        <h2>10. Contact &amp; complaints</h2>
        <p>Questions or requests: <a href="mailto:rise@strat101.com">rise@strat101.com</a>. If you are in the EEA or UK and are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.</p>
      </div>`;
  },

  _screenTerms() {
    return `
      <div class="screen legal-screen">
        <div class="legal-top-bar"><button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button></div>
        <h1 class="legal-title">Terms &amp; Conditions</h1>
        <p class="legal-updated">Last updated: September 2026</p>
        <p>These terms ("Terms") govern your use of Rise, a free self-study practice tool for Grade 10 board-exam students, operated by Strat101 ("we", "us"). By using the app you agree to these Terms. If you do not agree, do not use the app.</p>

        <h2>1. Eligibility</h2>
        <p>Rise is intended for students aged 13 and above (or 16 where required by applicable law). Users under the applicable minimum age must have parental or guardian consent before using the app. By using Rise you represent that you meet this requirement.</p>

        <h2>2. Licence to use</h2>
        <p>We grant you a limited, non-exclusive, non-transferable, revocable licence to use Rise for personal, non-commercial educational purposes. All other rights are reserved.</p>

        <h2>3. Prohibited conduct</h2>
        <p>You must not:</p>
        <ul class="legal-list">
          <li>Copy, reproduce, redistribute, or commercially exploit any content or software in Rise without our written permission</li>
          <li>Attempt to reverse-engineer, decompile, or extract source code from the app</li>
          <li>Use automated tools (bots, scrapers) to extract question content</li>
          <li>Impersonate another person in Arena or any multiplayer feature</li>
          <li>Upload, post, or transmit any content that is unlawful, harmful, or offensive</li>
          <li>Attempt to gain unauthorised access to any part of the service or its infrastructure</li>
        </ul>

        <h2>4. Optional sign-in and account</h2>
        <p>Sign-in is never required. If you create an account via Google OAuth, you are responsible for maintaining the security of your Google credentials. You may request deletion of your cloud data at any time by emailing <a href="mailto:rise@strat101.com">rise@strat101.com</a>. We reserve the right to suspend or terminate accounts that violate these Terms.</p>

        <h2>5. Content accuracy</h2>
        <p>Practice questions and explanations are authored for study purposes. While we take care to ensure accuracy, Rise is a revision aid and not a substitute for your school curriculum, textbooks, or official board guidance. Always verify important information with your teacher or official sources. We are not liable for exam outcomes.</p>

        <h2>6. Intellectual property</h2>
        <p>All question content, revision notes, explanations, and software in Rise are the property of Strat101 or used under appropriate licence. Reproduction or redistribution without written permission is prohibited. User-provided Arena display names remain your own; by submitting them you grant us a limited licence to display them within the app.</p>

        <h2>7. User-generated content (Arena)</h2>
        <p>Display names and any other content you submit in Arena features must not be defamatory, offensive, or infringe third-party rights. We reserve the right to remove content or suspend users who violate this requirement.</p>

        <h2>8. Third-party services</h2>
        <p>Rise uses Google OAuth for optional sign-in and Cloudflare for hosting. Your use of those services is also governed by their respective terms. We are not responsible for third-party services.</p>

        <h2>9. Disclaimers and no warranty</h2>
        <p>Rise is provided "as is" and "as available" without warranty of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant uninterrupted or error-free access.</p>

        <h2>10. Limitation of liability</h2>
        <p>To the maximum extent permitted by applicable law, Strat101's total liability to you for any claim arising from your use of Rise shall not exceed INR 1,000 (or equivalent). We are not liable for any indirect, incidental, special, consequential, or punitive damages, loss of data, or loss of profits, even if advised of the possibility of such damages.</p>

        <h2>11. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Strat101 and its affiliates from any claims, damages, or expenses (including reasonable legal fees) arising from your violation of these Terms or misuse of the app.</p>

        <h2>12. Termination</h2>
        <p>We may suspend or terminate your access to Rise at any time if you breach these Terms. Provisions that by their nature should survive termination (intellectual property, limitation of liability, governing law) will do so.</p>

        <h2>13. Changes to these terms</h2>
        <p>We may update these Terms from time to time. Material changes will be notified within the app where reasonably practicable. Continued use after an update constitutes acceptance of the revised Terms. The "Last updated" date above will reflect any changes.</p>

        <h2>14. Governing law and disputes</h2>
        <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bengaluru, India. If you are a consumer in the EU or UK, you also retain the benefit of any mandatory consumer-protection provisions of the law of your country of residence.</p>

        <h2>15. Contact</h2>
        <p>Questions about these Terms? Email us at <a href="mailto:rise@strat101.com">rise@strat101.com</a>.</p>
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
    if (name === 'careers' && window.initCareers) window.initCareers();
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
