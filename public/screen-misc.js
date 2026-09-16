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

  // ── Progress page: two tabs (My Attempts / Assignments), same shell for
  // both roles. The Family section (who I'm shared with, for a child; or
  // nothing extra for a guardian) sits above the tabs, not inside either one.
  _screenProgress() {
    const fam = window.riseFamily;
    const role = fam?.myRole;
    // Show a brief spinner only while the role fetch is still in flight.
    // Once roleLoaded is true, myRole being null means "student".
    if (fam && window.riseAuth?.user && !fam.roleLoaded) {
      return `<div class="screen"><div class="card empty-state" style="margin-top:2rem">Loading…</div></div>`;
    }
    const isGuardian = role === 'guardian';
    const tab = state.progressTab || 'attempts';
    const tabBar = `
      <div class="filter-bar" role="group" aria-label="Progress view">
        <button class="filter-tab ${tab === 'attempts' ? 'active' : ''}" onclick="app.setProgressTab('attempts')">My Attempts</button>
        <button class="filter-tab ${tab === 'assignments' ? 'active' : ''}" onclick="app.setProgressTab('assignments')">Assignments</button>
      </div>`;
    const body = tab === 'assignments'
      ? (isGuardian ? this._screenAssignmentsGuardian() : this._screenAssignmentsChild())
      : this._screenMyAttempts();

    return `
      <div class="screen">
        <div class="progress-topbar">
          <p class="subtitle" style="margin:0">${isGuardian ? 'Your own attempts, and your linked children\'s assignments.' : 'Your attempt history and assignments.'}</p>
          <button class="btn ghost home-btn" onclick="app.go(['home'])">&#8962; Home</button>
        </div>
        ${!isGuardian ? this._familySharedWithSection() : ''}
        ${tabBar}
        ${body}
      </div>`;
  },

  setProgressTab(tab) {
    state.progressTab = tab;
    this.render();
  },

  // ── "My Attempts" tab: full chronological attempt history for the CURRENT
  // account only (guardian sees their own mock/drill attempts if they
  // practice; a child sees theirs) — never the other side's.
  _screenMyAttempts() {
    const history = LS.get(KEY.results, [])
      .filter(h => (h.grade || 'X') === state.grade && h.board === state.board);
    if (!history.length) {
      return '<div class="card empty-state">Take a mock test or chapter drill to start building your attempt history.</div>';
    }
    return `
      <ul class="recent-list">
        ${history.map(h => `
          <li class="recent-row card">
            <span class="recent-score ${h.correct / h.total >= 0.6 ? 'good' : 'weak'}">${Math.round(h.correct / h.total * 100)}%</span>
            <span class="recent-desc">
              <strong>${esc(h.subject)}</strong>
              <small>${esc(MODES[h.mode]?.label || h.mode)}${h.chapter ? ' · ' + esc(h.chapter) : ''} · ${h.correct}/${h.total} · ${esc(h.when)}</small>
            </span>
            <button class="btn small" onclick="app.retryFromHistory(${h.ts})">Retry</button>
          </li>`).join('')}
      </ul>`;
  },

  // Shown above the tabs on a child's own Progress screen — who it's shared
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

  // ── Guardian's "Assignments" tab: a child dropdown (hidden if only one
  // child is linked) driving a single selected child's summary + assign
  // form + history. Replaces the earlier fixed two-column layout.
  _screenAssignmentsGuardian() {
    const links = window.riseFamily?.linksAsGuardian || [];
    if (!links.length) {
      return '<div class="card empty-state">No linked children yet. Ask your child to invite you from their Profile → Family section, or invite them from yours.</div>';
    }
    const selectedUid = links.some(l => l.childUid === state.progressAssignChildUid) ? state.progressAssignChildUid : links[0].childUid;
    const selectedLink = links.find(l => l.childUid === selectedUid);

    const childPicker = links.length > 1 ? `
      <label class="assign-child-picker">Child
        <select onchange="app.setProgressAssignChild(this.value)">
          ${links.map(l => `<option value="${esc(l.childUid)}" ${l.childUid === selectedUid ? 'selected' : ''}>${esc(l.childEmail)}</option>`).join('')}
        </select>
      </label>` : `<h2 class="section-title">${esc(selectedLink.childEmail)}</h2>`;

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
        const selectedGB = gbKeys.includes(state.progressGradeBoardByChild[selectedUid]) ? state.progressGradeBoardByChild[selectedUid] : gbKeys[0];
        const gbTabs = gbKeys.length > 1 ? `
          <div class="filter-bar" role="group" aria-label="Grade and board">
            ${gbKeys.map(gb => `<button class="filter-tab ${gb === selectedGB ? 'active' : ''}"
                        onclick="app.setProgressGradeBoard('${selectedUid}','${gb}')">${esc(gb.replace('::', ' · '))}</button>`).join('')}
          </div>` : '';
        body = gbTabs + this._familyChapterBreakdown(byGB[selectedGB] || []);
      }
    }
    const assignBlock = this._assignmentPanel(selectedUid, selectedLink);
    setTimeout(() => this._populateAssignChapters(selectedUid), 0);
    return `<div class="family-assign-tab">${childPicker}${body}${assignBlock}</div>`;
  },

  setProgressAssignChild(childUid) {
    state.progressAssignChildUid = childUid;
    this.render();
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

  setProgressGradeBoard(childUid, gb) {
    state.progressGradeBoardByChild[childUid] = gb;
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

  // ── Child's "Assignments" tab: pending inbox + history with Review/Reattempt ──
  _screenAssignmentsChild() {
    return `${this._assignmentInbox()}${this._assignmentHistoryChild()}`;
  },

  _assignFmtDue(ts) {
    try { return new Date(ts.toMillis ? ts.toMillis() : ts).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }); } catch (_) { return ''; }
  },

  // ── Child's assignment inbox (pending) ────────────────────────────────────
  _assignmentInbox() {
    const assignments = window.riseFamily?.myAssignments || [];
    if (!assignments.length) return '<div class="card empty-state">No assignments right now.</div>';
    return `
      <section class="home-section">
        <h2 class="section-title">Pending</h2>
        <ul class="recent-list">
          ${assignments.map(a => `
            <li class="recent-row card">
              <span class="recent-desc">
                <strong>${esc(a.subject)}${a.chapter ? ' · ' + esc(a.chapter) : ''}</strong>
                <small>${a.questionCount} questions · ${a.timeLimitMinutes} min · due ${this._assignFmtDue(a.dueAt)}</small>
              </span>
              <button class="btn small primary" onclick="app.startAssignment(riseFamily.myAssignments.find(x=>x.id==='${esc(a.id)}'))">Start</button>
            </li>`).join('')}
        </ul>
      </section>`;
  },

  // ── Child's assignment history (completed/cancelled/expired) — Review shows
  // the exact past attempt's questions/answers; Reattempt starts a fresh
  // shuffled set of the same assignment, same as retrying a mock test. ──────
  _assignmentHistoryChild() {
    const statusLabel = { completed: 'Done', expired: 'Missed', cancelled: 'Cancelled' };
    const assignments = window.riseFamily?.myAssignmentHistory || [];
    if (!assignments.length) return '';
    return `
      <section class="home-section">
        <h2 class="section-title">History</h2>
        <ul class="assign-history-grid">
          ${assignments.map(a => {
            const st = a.status;
            const label = statusLabel[st] || st;
            const attempts = a.attempts || (a.result ? [a.result] : []);
            const latest = attempts[attempts.length - 1];
            const result = latest ? ` — ${latest.accuracy}% (${latest.score}/${latest.total})${attempts.length > 1 ? ` · attempt ${attempts.length}` : ''}` : '';
            const canRetry = st !== 'cancelled';
            return `<li class="assign-history-card card">
              <span class="assign-status-pill ${st}">${label}</span>
              <strong class="assign-history-title">${esc(a.subject)}${a.chapter ? ' · ' + esc(a.chapter) : ''}</strong>
              <small class="assign-history-meta">${a.questionCount} q · ${a.timeLimitMinutes} min</small>
              <small class="assign-history-meta">due ${this._assignFmtDue(a.dueAt)}${result}</small>
              <div class="assign-history-actions">
                ${latest?.reviewData ? `<button class="btn small ghost" onclick="app.reviewAssignment('${esc(a.id)}')">Review</button>` : ''}
                ${canRetry ? `<button class="btn small primary" onclick="app.startAssignment(riseFamily.myAssignmentHistory.find(x=>x.id==='${esc(a.id)}'))">Reattempt</button>` : ''}
              </div>
            </li>`;
          }).join('')}
        </ul>
      </section>`;
  },

  // Opens the read-only Results/Review screen for a PAST assignment attempt,
  // using its stored reviewData — same rendering the live test-results screen
  // uses, just fed historical data instead of a just-finished session.
  reviewAssignment(assignmentId) {
    const a = (window.riseFamily?.myAssignmentHistory || []).find(x => x.id === assignmentId);
    const attempts = a?.attempts || (a?.result ? [a.result] : []);
    const latest = attempts[attempts.length - 1];
    if (!latest?.reviewData) return;
    this.reviewData = latest.reviewData;
    const correct = this.reviewData.filter(r => r.isCorrect).length;
    const skipped = this.reviewData.filter(r => r.userAnswer === undefined).length;
    this.summary = { correct, wrong: this.reviewData.length - correct - skipped, skipped, total: this.reviewData.length };
    this.lastConfig = { subject: a.subject, mode: 'assignment', chapter: a.chapter, assignment: a };
    this.reviewIndex = 0;
    this.reviewFilter = 'all';
    this.go(['results'], true);
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
      <ul class="assign-history-grid">
        ${assignments.map(a => {
          const st = a.status;
          const label = statusLabel[st] || st;
          const attempts = a.attempts || (a.result ? [a.result] : []);
          const latest = attempts[attempts.length - 1];
          const result = latest ? ` — ${latest.accuracy}% (${latest.score}/${latest.total})${attempts.length > 1 ? ` · attempt ${attempts.length}` : ''}` : '';
          return `<li class="assign-history-card card">
            <span class="assign-status-pill ${st}">${label}</span>
            <strong class="assign-history-title">${esc(a.subject)}${a.chapter ? ' · ' + esc(a.chapter) : ''}</strong>
            <small class="assign-history-meta">${a.questionCount} q · ${a.timeLimitMinutes} min</small>
            <small class="assign-history-meta">due ${fmtDue(a.dueAt)}${result}</small>
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
