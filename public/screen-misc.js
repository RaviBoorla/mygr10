// ─── Board, Grade, Progress screens ───────────────────────────────────────────
Object.assign(app, {

  _screenBoard() {
    return `
      <div class="screen welcome-screen">
        <div class="welcome-layout">
          <div class="welcome-left">
            <div class="welcome-left-inner">
            <div class="welcome-logo">
              <svg class="welcome-logo-icon" width="48" height="48" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="7" fill="#2563eb"/>
                <rect x="5"  y="22" width="5" height="5"  rx="1.5" fill="rgba(255,255,255,0.55)"/>
                <rect x="13" y="17" width="5" height="10" rx="1.5" fill="rgba(255,255,255,0.78)"/>
                <rect x="21" y="11" width="5" height="16" rx="1.5" fill="#ffffff"/>
                <polygon points="23.5,4 27,9.5 20,9.5" fill="#ffffff"/>
              </svg>
              <span>Rise</span>
            </div>
            <p class="welcome-tagline">Grade X &amp; XII board exam practice — free. Sign-in optional.</p>
            <ul class="welcome-features">
              <li><span class="wf-icon">📝</span><div><strong>Mock tests</strong><span>Timed chapter &amp; full-paper MCQ mocks with instant scoring</span></div></li>
              <li><span class="wf-icon">⚡</span><div><strong>Arena</strong><span>Solo blitz &amp; live challenge rooms — beat the clock, build combos, race friends</span></div></li>
              <li><span class="wf-icon">✏️</span><div><strong>Short answers</strong><span>Board-style VSA &amp; SA questions with model answers</span></div></li>
              <li><span class="wf-icon">📖</span><div><strong>Solved exercises</strong><span>Textbook questions worked step-by-step</span></div></li>
              <li><span class="wf-icon">🗒️</span><div><strong>Revision notes</strong><span>Key formulae, theorems, logic &amp; tips per chapter</span></div></li>
              <li><span class="wf-icon">🔁</span><div><strong>Spaced repetition</strong><span>Leitner system resurfaces your weak questions automatically</span></div></li>
              <li><span class="wf-icon">🔥</span><div><strong>Streaks &amp; goals</strong><span>Daily practice goal with streak tracking to keep you consistent</span></div></li>
              <li><span class="wf-icon">✦</span><div><strong>Ask Cloé</strong><span>AI study companion — ask anything about your Grade 10 subjects, get concise answers &amp; curious follow-up questions</span></div></li>
            </ul>
            </div><!-- welcome-left-inner -->
          </div>
          <div class="welcome-right">
            <p class="welcome-pick-label">Choose your board to get started</p>
            <div class="board-list">
              ${BOARDS.map(b => `
                <button class="btn board-btn" onclick="app.setBoard('${b.id}')">
                  <strong>${esc(b.name)}</strong>
                  <span>${esc(b.desc)}</span>
                </button>`).join('')}
            </div>
            <p class="welcome-foot">You can switch boards any time from the ☰ menu.</p>
          </div>
        </div>
      </div>`;
  },

  setBoard(board) {
    state.board = board;
    LS.set(KEY.board, board);
    this.go(['home'], true);
  },

  switchBoard(board) {
    if (board === state.board) return;
    state.board = board;
    state.openPicker = null;
    state.mobileMenuOpen = false;
    LS.set(KEY.board, board);
    const cur = parseHash();
    if (['results', 'notes', 'progress', 'careers'].includes(cur.name)) {
      this.go(['home']);
    } else {
      this.render();
    }
  },

  setGrade(grade) {
    if (grade === state.grade) return;
    state.grade = grade;
    state.openPicker = null;
    LS.set(KEY.grade, grade);
    this.render();
  },

  _gradeTabs() {
    return `
      <div class="filter-bar grade-tabs" role="group" aria-label="Grade">
        ${GRADES.map(g => {
          const noData = g.id === 'XII';
          return `
          <button class="filter-tab ${g.id === state.grade ? 'active' : ''}"
                  aria-pressed="${g.id === state.grade}" ${noData ? 'disabled title="Coming soon — no question banks yet"' : `onclick="app.setGrade('${g.id}')"`}>${esc(g.label)}</button>`;
        }).join('')}
      </div>`;
  },

  _screenProgress() {
    // A guardian account never has grade/board practice history (docs/family.md
    // constraint 8) — its Progress screen is the child switcher, not the
    // per-chapter accuracy view below.
    const fam = window.riseFamily;
    const role = fam?.myRole;
    if (role === 'guardian') return this._screenProgressGuardian();
    // Show a brief spinner only while the role fetch is still in flight.
    // Once roleLoaded is true, myRole being null means "student" — show child view.
    if (fam && window.riseAuth?.user && !fam.roleLoaded) {
      return `<div class="screen"><div class="card empty-state" style="margin-top:2rem">Loading…</div></div>`;
    }
    return this._screenProgressChild();
  },

  _screenProgressChild() {
    const subjects = (SUBJECTS[state.board] || []).filter(s => bankSlug(s));
    const store = LS.get(KEY.progress, {});
    const now = Date.now();

    const sections = subjects.map(subject => {
      const bySubj = store[scopeKey(subject)] || {};
      const chapters = {};
      Object.values(bySubj).forEach(r => {
        const name = r.chapter || 'General';
        const c = chapters[name] || (chapters[name] = { correct: 0, wrong: 0, due: 0 });
        c.correct += r.correctCount || 0;
        c.wrong += r.wrongCount || 0;
        if (r.due <= now) c.due++;
      });
      const rows = Object.entries(chapters).sort((a, b) => {
        const accA = a[1].correct / (a[1].correct + a[1].wrong || 1);
        const accB = b[1].correct / (b[1].correct + b[1].wrong || 1);
        return accA - accB;
      });
      if (!rows.length) return '';
      const dueTotal = this._dueCount(subject);
      return `
        <section class="home-section">
          <h2 class="section-title">${esc(subject)}</h2>
          ${dueTotal ? `<button class="btn act-btn ghost small" onclick="app.startSpacedReview('${esc(subject)}')">
                          &#8635; Review ${plural(dueTotal, 'due question')}</button>` : ''}
          <ul class="recent-list">
            ${rows.map(([chapter, c]) => {
              const total = c.correct + c.wrong;
              const pct = total ? Math.round(c.correct / total * 100) : 0;
              return `<li class="recent-row card">
                <span class="recent-score ${pct >= 60 ? 'good' : 'weak'}">${pct}%</span>
                <span class="recent-desc">
                  <strong>${esc(chapter)}</strong>
                  <small>${plural(total, 'attempt')}${c.due ? ` · ${c.due} due for review` : ''}</small>
                </span>
              </li>`;
            }).join('')}
          </ul>
        </section>`;
    }).join('');

    return `
      <div class="screen">
        <div class="progress-topbar">
          <p class="subtitle" style="margin:0">Accuracy by chapter, weakest first — built from your attempted mocks and drills.</p>
          <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
        </div>
        ${this._assignmentInbox()}
        ${sections || '<div class="card empty-state">Take a mock test or chapter drill to start building your progress history.</div>'}
        ${this._familySharedWithSection()}
      </div>`;
  },

  // Shown at the bottom of a child's own Progress screen — who it's shared
  // with, plus the invite box when nobody's linked yet.
  _familySharedWithSection() {
    const links = window.riseFamily?.linksAsChild || [];
    const rows = links.length ? `
      <ul class="recent-list">
        ${links.map(l => `<li class="recent-row card">
          <span class="recent-desc">
            <strong>Shared with ${esc(l.guardianEmail)}</strong>
            <small>Daily digest: ${l.digestOptIn?.email ? 'on' : 'off'} · ${esc(l.gradeBoard || '')}</small>
          </span>
          <button class="btn small ghost" onclick="riseAuth.openProfile()">Manage</button>
        </li>`).join('')}
      </ul>` : '';
    return `
      <section class="home-section">
        <h2 class="section-title">Family</h2>
        ${rows || '<p class="subtitle">Not shared with a parent/guardian yet — invite one from Profile → Family.</p>'}
      </section>`;
  },

  // ── Guardian's own Progress screen: the child switcher ──────────────────
  _screenProgressGuardian() {
    const links = window.riseFamily?.linksAsGuardian || [];
    const topbar = `
      <div class="progress-topbar">
        <p class="subtitle" style="margin:0">Your linked children's strengths and focus areas, by subject and chapter.</p>
        <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
      </div>`;

    if (!links.length) {
      return `<div class="screen">${topbar}
        <div class="card empty-state">No linked children yet. Ask your child to invite you from their Profile → Family section, or invite them from yours.</div>
      </div>`;
    }

    const selectedUid = links.some(l => l.childUid === state.progressChildUid) ? state.progressChildUid : links[0].childUid;
    const selectedLink = links.find(l => l.childUid === selectedUid);
    const childTabs = links.length > 1 ? `
      <div class="filter-bar" role="group" aria-label="Child">
        ${links.map(l => `<button class="filter-tab ${l.childUid === selectedUid ? 'active' : ''}"
                    onclick="app.setProgressChild('${l.childUid}')">${esc(l.childEmail)}</button>`).join('')}
      </div>` : '';

    const summary = window.riseFamily.getChildSummary(selectedUid);
    let body;
    if (summary === 'loading' || summary === undefined) {
      body = `<div class="card empty-state">Loading ${esc(selectedLink.childEmail)}'s progress…</div>`;
    } else {
      const byGB = summary.byGradeBoard || {};
      const gbKeys = Object.keys(byGB);
      if (!gbKeys.length) {
        body = `<div class="card empty-state">${esc(selectedLink.childEmail)} hasn't practiced yet — check back after their next mock or drill.</div>`;
      } else {
        const selectedGB = gbKeys.includes(state.progressGradeBoard) ? state.progressGradeBoard : gbKeys[0];
        const gbTabs = gbKeys.length > 1 ? `
          <div class="filter-bar" role="group" aria-label="Grade and board">
            ${gbKeys.map(gb => `<button class="filter-tab ${gb === selectedGB ? 'active' : ''}"
                        onclick="app.setProgressGradeBoard('${gb}')">${esc(gb.replace('::', ' · '))}</button>`).join('')}
          </div>` : '';
        body = gbTabs + this._familyChapterBreakdown(byGB[selectedGB] || []);
      }
    }

    const assignBlock = this._assignmentPanel(selectedUid, selectedLink);
    setTimeout(() => this._populateAssignChapters(selectedUid), 0);
    return `<div class="screen">${topbar}${childTabs}${body}${assignBlock}</div>`;
  },

  // Fills the chapter <select> for the currently-chosen subject in the assign
  // form, reading the child's actual board/grade off the form's data attrs
  // (not the guardian's own state.board/grade — see _assignmentPanel note).
  _populateAssignChapters(childUid) {
    const subjectEl = document.getElementById(`assign-subject-${childUid}`);
    const chapterEl = document.getElementById(`assign-chapter-${childUid}`);
    if (!subjectEl || !chapterEl) return;
    const formEl = subjectEl.closest('.assign-form');
    const board = formEl?.dataset.childBoard || state.board;
    const grade = formEl?.dataset.childGrade || state.grade;
    const subject = subjectEl.value;
    const slug = bankSlug(subject, board, grade);
    if (!slug) { chapterEl.innerHTML = '<option value="">All chapters</option>'; return; }
    fetch(`questions/${slug}.json`)
      .then(r => r.json())
      .then(list => {
        const chapters = [...new Set(list.map(q => q.chapter || 'General'))].sort();
        chapterEl.innerHTML = '<option value="">All chapters</option>' +
          chapters.map(c => `<option>${esc(c)}</option>`).join('');
      })
      .catch(() => { chapterEl.innerHTML = '<option value="">All chapters</option>'; });
  },

  setProgressChild(childUid) {
    state.progressChildUid = childUid;
    state.progressGradeBoard = null;
    this.render();
  },

  setProgressGradeBoard(gb) {
    state.progressGradeBoard = gb;
    this.render();
  },

  // Strengths first, focus areas second — never the reverse — per
  // docs/family.md "Tone and framing". Same underlying numbers the child's
  // own weakest-first Progress view uses, just reordered for this audience.
  _familyChapterBreakdown(rows) {
    if (!rows.length) return '<div class="card empty-state">No practice recorded for this board yet.</div>';
    const STRONG = 70;
    const bySubject = {};
    rows.forEach(r => { (bySubject[r.subject] || (bySubject[r.subject] = [])).push(r); });

    return Object.entries(bySubject).map(([subject, chs]) => {
      const strengths = chs.filter(c => c.accuracy >= STRONG).sort((a, b) => b.accuracy - a.accuracy);
      const focus = chs.filter(c => c.accuracy < STRONG).sort((a, b) => a.accuracy - b.accuracy);
      return `
        <section class="home-section">
          <h2 class="section-title">${esc(subject)}</h2>
          ${strengths.length ? `
            <h3 class="family-subheading">Strengths</h3>
            <ul class="recent-list">${strengths.map(c => this._familyChapterRow(c)).join('')}</ul>` : ''}
          ${focus.length ? `
            <h3 class="family-subheading">Focus areas</h3>
            <ul class="recent-list">${focus.map(c => this._familyChapterRow(c)).join('')}</ul>` : ''}
        </section>`;
    }).join('');
  },

  _familyChapterRow(c) {
    return `<li class="recent-row card">
      <span class="recent-score ${c.accuracy >= 70 ? 'good' : 'weak'}">${c.accuracy}%</span>
      <span class="recent-desc">
        <strong>${esc(c.chapter)}</strong>
        <small>${plural(c.attempts, 'attempt')}</small>
      </span>
    </li>`;
  },

  // ── Child's assignment inbox ──────────────────────────────────────────────
  _assignmentInbox() {
    const assignments = window.riseFamily?.myAssignments || [];
    if (!assignments.length) return '';
    const fmtDue = ts => {
      try { return new Date(ts.toMillis ? ts.toMillis() : ts).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }); } catch (_) { return ''; }
    };
    return `
      <section class="home-section">
        <h2 class="section-title">Assignments</h2>
        <ul class="recent-list">
          ${assignments.map(a => `
            <li class="recent-row card">
              <span class="recent-desc">
                <strong>${esc(a.subject)}${a.chapter ? ' · ' + esc(a.chapter) : ''}</strong>
                <small>${a.questionCount} questions · ${a.timeLimitMinutes} min · due ${fmtDue(a.dueAt)}</small>
              </span>
              <button class="btn small primary" onclick="app.startAssignment(riseFamily.myAssignments.find(x=>x.id==='${esc(a.id)}'))">Start</button>
            </li>`).join('')}
        </ul>
      </section>`;
  },

  // ── Guardian: "Assign practice" form + past assignments per child ─────────
  // Subjects/chapters must come from the CHILD's own gradeBoard (link.gradeBoard),
  // not the guardian's currently-selected state.board/grade — a guardian could be
  // browsing a different board than the one their child actually practices.
  _assignmentPanel(childUid, link) {
    const assignments = window.riseFamily?.getChildAssignments(childUid) || [];
    const [childGrade, childBoard] = (link.gradeBoard || `${state.grade}::${state.board}`).split('::');
    const subjects = (SUBJECTS[childBoard] || []).filter(s => bankSlug(s, childBoard, childGrade));

    const statusLabel = { pending: 'Pending', completed: 'Done', expired: 'Missed', cancelled: 'Cancelled' };
    const fmtDue = ts => {
      try { return new Date(ts.toMillis ? ts.toMillis() : ts).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }); } catch (_) { return ''; }
    };

    // Minimum due datetime: 10 minutes from now, in local datetime-local format
    const minDue = new Date(Date.now() + 10 * 60000).toISOString().slice(0, 16);

    const form = `
      <div class="assign-form card" data-child-board="${esc(childBoard)}" data-child-grade="${esc(childGrade)}">
        <h3 class="family-subheading" style="margin-top:0">Assign practice to ${esc(link.childEmail)}</h3>
        <div class="assign-form-row">
          <label>Subject
            <select id="assign-subject-${esc(childUid)}" onchange="app._populateAssignChapters('${esc(childUid)}')">
              ${subjects.map(s => `<option>${esc(s)}</option>`).join('')}
            </select>
          </label>
          <label>Chapter (optional)
            <select id="assign-chapter-${esc(childUid)}">
              <option value="">All chapters</option>
            </select>
          </label>
        </div>
        <div class="assign-form-row">
          <label>Questions
            <input id="assign-count-${esc(childUid)}" type="number" min="5" max="50" value="10">
          </label>
          <label>Time limit (min)
            <input id="assign-limit-${esc(childUid)}" type="number" min="5" max="120" value="20">
          </label>
          <label>Due by
            <input id="assign-due-${esc(childUid)}" type="datetime-local" min="${minDue}">
          </label>
        </div>
        <button class="btn small primary" onclick="riseFamily._createAssignment('${esc(childUid)}')">Assign</button>
        <p id="assign-msg-${esc(childUid)}" class="auth-error" hidden></p>
      </div>`;

    const historyHtml = assignments.length ? `
      <ul class="recent-list">
        ${assignments.map(a => {
          const st = a.status;
          const label = statusLabel[st] || st;
          const result = a.result ? ` — ${a.result.accuracy}% (${a.result.score}/${a.result.total})` : '';
          return `<li class="recent-row card">
            <span class="assign-status-pill ${st}">${label}</span>
            <span class="recent-desc">
              <strong>${esc(a.subject)}${a.chapter ? ' · ' + esc(a.chapter) : ''}</strong>
              <small>${a.questionCount} q · ${a.timeLimitMinutes} min · due ${fmtDue(a.dueAt)}${result}</small>
            </span>
            ${st === 'pending' ? `<button class="btn small ghost" onclick="riseFamily._cancelAssignment('${esc(childUid)}','${esc(a.id)}')">Cancel</button>` : ''}
          </li>`;
        }).join('')}
      </ul>` : '<p class="subtitle">No assignments sent yet.</p>';

    return `
      <section class="home-section">
        <h2 class="section-title">Assignments</h2>
        ${form}
        ${historyHtml}
      </section>`;
  }

});
