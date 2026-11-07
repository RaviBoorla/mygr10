// ─── My class: the one grade + board the app shows ───────────────────────────
// Picked on the welcome screen and changed only from Profile (or the class chip
// in the header) — there are no grade tabs or board switchers elsewhere.
// Signed-in users keep it in users/{uid}/sync/myClass so every device agrees.
// A child's class is also written to their family links, so the parent's
// assignment form always follows the child's current class.

const CLASS_CONFIRMED_KEY = 'rise.classConfirmed';

function classLabel(grade, board) { return `Class ${grade || state.grade} · ${board || state.board}`; }

function _myClassDoc() {
  const u = window.riseAuth?.user;
  try { return u ? firebase.firestore().collection('users').doc(u.uid).collection('sync').doc('myClass') : null; } catch (_) { return null; }
}
function _myClassSave() {
  const d = _myClassDoc();
  if (d && state.board) d.set({ grade: state.grade, board: state.board, at: Date.now() }).catch(e => console.warn('[class] save failed:', e));
}

Object.assign(app, {

  async setClass(grade, board) {
    if (!SUBJECTS[grade]?.[board]) return;
    const changed = grade !== state.grade || board !== state.board;
    state.grade = grade; state.board = board;
    state.openPicker = null; state.mobileMenuOpen = false;
    LS.set(KEY.grade, grade); LS.set(KEY.board, board); LS.set(CLASS_CONFIRMED_KEY, true);
    this.closeClassPicker();
    _myClassSave();
    this._syncChildLinkClass();
    if (!changed && parseHash().name !== 'board') { this.render(); return; }
    this.go(['home'], true);
  },

  // A child's links carry their class (the parent's assign form reads it).
  // Only once the class was chosen on purpose — never from a stale default.
  _syncChildLinkClass() {
    if (!LS.get(CLASS_CONFIRMED_KEY, false) || !state.board) return;
    const gb = `${state.grade}::${state.board}`;
    (window.riseFamily?.linksAsChild || []).filter(l => l.gradeBoard !== gb).forEach(l => {
      try {
        firebase.firestore().collection('familyLinks').doc(l.id).update({ gradeBoard: gb })
          .catch(e => console.warn('[class] link update failed:', e));
      } catch (_) {}
    });
  },

  // Boards valid for a grade (IX is ICSE-only for now).
  _boardsFor(grade) {
    const ids = grade && SUBJECTS[grade] ? Object.keys(SUBJECTS[grade]) : BOARDS.map(b => b.id);
    return BOARDS.filter(b => ids.includes(b.id));
  },

  // Board + grade choices, shared by the welcome screen and the picker sheet.
  _classPickerBody(pick) {
    const isChild = !!window.riseFamily?.linksAsChild?.length;
    return `
      <div class="class-pick-group" role="radiogroup" aria-label="Board" id="class-board-group">
        <span class="class-pick-label">Board</span>
        ${this._boardOptsHtml(this._boardsFor(pick.grade), pick.board)}
      </div>
      <div class="class-pick-group" role="radiogroup" aria-label="Grade">
        <span class="class-pick-label">Class</span>
        <div class="class-grade-row">
          ${GRADES.map(g => `
            <label class="class-opt grade-opt">
              <input type="radio" name="class-grade" value="${g.id}" ${pick.grade === g.id ? 'checked' : ''} onchange="app._onClassPick()">
              <span><strong>Class ${esc(g.id)}</strong></span>
            </label>`).join('')}
        </div>
      </div>
      ${isChild ? '<p class="class-note">Assignments from your parent will use this class.</p>' : ''}`;
  },

  _boardOptsHtml(boards, selected) {
    return boards.map(b => `
      <label class="class-opt board-opt">
        <input type="radio" name="class-board" value="${b.id}" ${selected === b.id ? 'checked' : ''} onchange="app._onClassPick()">
        <span><strong>${esc(b.name)}</strong><small>${esc(b.desc)}</small></span>
      </label>`).join('');
  },

  _onClassPick() {
    let board = document.querySelector('input[name="class-board"]:checked')?.value;
    const grade = document.querySelector('input[name="class-grade"]:checked')?.value;
    const boards = this._boardsFor(grade);
    if (!boards.some(b => b.id === board)) board = null;
    const group = document.getElementById('class-board-group');
    if (group) group.innerHTML = `<span class="class-pick-label">Board</span>${this._boardOptsHtml(boards, board)}`;
    document.querySelectorAll('.class-save').forEach(b => { b.disabled = !(board && grade); });
  },

  _saveClassPick() {
    const board = document.querySelector('input[name="class-board"]:checked')?.value;
    const grade = document.querySelector('input[name="class-grade"]:checked')?.value;
    if (board && grade) this.setClass(grade, board);
  },

  openClassPicker(opts = {}) {
    if (state.screen === 'test' || state.screen === 'board') return;
    this.closeClassPicker();
    const el = document.createElement('div');
    el.className = 'modal-overlay class-overlay';
    el.innerHTML = `
      <div class="class-sheet" role="dialog" aria-modal="true" aria-labelledby="class-title">
        <h2 id="class-title" class="modal-title">${opts.confirm ? 'Confirm your class' : 'My class'}</h2>
        <p class="class-sub">${opts.confirm
          ? 'Rise now shows one class at a time. Pick yours — you can change it any time from your profile.'
          : 'Questions, notes, Arena and progress all follow this class. Progress for other classes is kept.'}</p>
        ${this._classPickerBody({ grade: state.grade, board: state.board })}
        <div class="modal-actions">
          ${opts.confirm ? '' : '<button class="btn ghost" onclick="app.closeClassPicker()">Cancel</button>'}
          <button class="btn primary class-save" onclick="app._saveClassPick()">Save</button>
        </div>
      </div>`;
    document.body.appendChild(el);
  },

  closeClassPicker() { document.querySelector('.class-overlay')?.remove(); },

  // Existing users had grade tabs; ask once so the class is a deliberate choice.
  _maybeConfirmClass() {
    if (!state.board || LS.get(CLASS_CONFIRMED_KEY, false)) return;
    if (['test', 'board'].includes(state.screen) || document.querySelector('.class-overlay')) return;
    this.openClassPicker({ confirm: true });
  },

  // "My class" row at the top of the profile's family section.
  _myClassProfileHtml() {
    if (!state.board) return '';
    const isGuardian = !!window.riseFamily?.linksAsGuardian?.length;
    const isChild = !!window.riseFamily?.linksAsChild?.length;
    return `
      <div class="profile-class-row">
        <div>
          <span class="profile-class-label">My class</span>
          <strong>${esc(classLabel())}</strong>
          <small>${isChild ? 'Assignments from your parent use this class.'
            : isGuardian ? 'Assignments you set follow each child\'s own class.'
            : 'Questions, notes and progress follow this class.'}</small>
        </div>
        <button type="button" class="btn small ghost" onclick="riseAuth.closeProfile(); app.openClassPicker()">Change</button>
      </div>`;
  }
});

// Sign-in: adopt the class saved in the cloud (or save this device's), then
// bring the child's links in line. Polls like family.js, since Firestore is
// loaded lazily by auth.js once a user signs in.
(function () {
  let lastUid;
  setInterval(async () => {
    const u = window.riseAuth?.user?.uid || null;
    if (u === lastUid) return;
    lastUid = u;
    if (!u) return;
    const d = _myClassDoc();
    if (!d) { lastUid = undefined; return; } // Firestore not ready yet — retry
    try {
      const snap = await d.get();
      const c = snap.exists ? snap.data() : null;
      if (c && SUBJECTS[c.grade]?.[c.board]) {
        LS.set(CLASS_CONFIRMED_KEY, true);
        if (document.querySelector('.class-overlay') && !document.querySelector('.class-overlay .btn.ghost')) app.closeClassPicker();
        if ((c.grade !== state.grade || c.board !== state.board) && state.screen !== 'test') {
          state.grade = c.grade; state.board = c.board;
          LS.set(KEY.grade, c.grade); LS.set(KEY.board, c.board);
          if (state.screen === 'board') app.go(['home'], true); else app.render();
        }
      } else if (LS.get(CLASS_CONFIRMED_KEY, false)) {
        _myClassSave();
      }
      app._syncChildLinkClass();
    } catch (e) { console.warn('[class] load failed:', e); }
  }, 500);
  setTimeout(() => app._maybeConfirmClass(), 1500);
})();
