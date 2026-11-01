// ─── Working panel: a scratch pad for rough work (touch devices) ──────────────
// On touch screens (tablets, touch laptops, phones) a "Working" button opens a
// drawing pad: in a test it covers the question palette; for short answers it
// slides in from the right. One page per question, kept for the session only.
// Pen pressure, palm rejection (touches are ignored once a stylus is seen),
// pen colour + thickness, eraser, undo, clear, white/black background.

const workPanel = (() => {
  const touch = (navigator.maxTouchPoints || 0) > 0 || matchMedia('(any-pointer: coarse)').matches;
  const COLORS = ['ink', '#2563eb', '#dc2626', '#16a34a', '#f59e0b'];
  const st = { open: false, mode: 'dock', key: null, dark: LS.get('rise.work.dark', false), color: 'ink', size: LS.get('rise.work.size', 3), eraser: false };
  const pages = new Map(); // key → { snap: canvas|null, undo: [canvas] }
  let el = null, canvas = null, ctx = null, ro = null, stroke = null, penSeen = false, lastSession = null;

  const ink = () => st.color === 'ink' ? (st.dark ? '#f8fafc' : '#111827') : st.color;
  const page = key => { if (!pages.has(key)) pages.set(key, { snap: null, undo: [] }); return pages.get(key); };
  const copy = () => { const c = document.createElement('canvas'); c.width = canvas.width; c.height = canvas.height; c.getContext('2d').drawImage(canvas, 0, 0); return c; };

  function save() { if (canvas && st.key) page(st.key).snap = copy(); }
  function paint(snap) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (snap) ctx.drawImage(snap, 0, 0, canvas.width, snap.height * canvas.width / snap.width); // keep scale by width
  }
  function load(key) { st.key = key; paint(page(key).snap); }

  function fit() {
    if (!canvas) return;
    const r = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if (!w || !h || (w === canvas.width && h === canvas.height)) return;
    const keep = canvas.width ? copy() : page(st.key).snap;
    canvas.width = w; canvas.height = h;
    paint(keep);
  }

  // ── Drawing ──
  const pos = e => { const r = canvas.getBoundingClientRect(), dpr = canvas.width / r.width; return { x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr, p: e.pointerType === 'pen' ? (e.pressure || 0.5) : 0.5 }; };
  const width = p => { const dpr = canvas.width / canvas.getBoundingClientRect().width; return (st.eraser ? st.size * 4 : st.size) * dpr * (0.45 + p * 1.1); };
  function down(e) {
    if (e.pointerType === 'pen') penSeen = true;
    else if (e.pointerType === 'touch' && penSeen) return; // palm rejection
    if (stroke) return;
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    const pg = page(st.key);
    pg.undo.push(copy()); if (pg.undo.length > 20) pg.undo.shift();
    const p = pos(e);
    stroke = { id: e.pointerId, last: p, mid: p };
    ctx.globalCompositeOperation = st.eraser ? 'destination-out' : 'source-over';
    ctx.fillStyle = ctx.strokeStyle = ink();
    ctx.lineCap = ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.arc(p.x, p.y, width(p.p) / 2, 0, Math.PI * 2); ctx.fill();
  }
  function move(e) {
    if (!stroke || e.pointerId !== stroke.id) return;
    e.preventDefault();
    for (const ev of (e.getCoalescedEvents ? e.getCoalescedEvents() : [e])) {
      const p = pos(ev), mid = { x: (stroke.last.x + p.x) / 2, y: (stroke.last.y + p.y) / 2 };
      ctx.lineWidth = width(p.p);
      ctx.beginPath(); ctx.moveTo(stroke.mid.x, stroke.mid.y);
      ctx.quadraticCurveTo(stroke.last.x, stroke.last.y, mid.x, mid.y); ctx.stroke();
      stroke.last = p; stroke.mid = mid;
    }
  }
  function up(e) {
    if (!stroke || e.pointerId !== stroke.id) return;
    ctx.lineWidth = width(stroke.last.p);
    ctx.beginPath(); ctx.moveTo(stroke.mid.x, stroke.mid.y); ctx.lineTo(stroke.last.x, stroke.last.y); ctx.stroke();
    stroke = null; save();
  }

  // ── Panel ──
  function tools() {
    return `
      <div class="work-tools">
        <div class="work-swatches" role="group" aria-label="Pen colour">
          ${COLORS.map(c => `<button type="button" class="work-swatch ${!st.eraser && st.color === c ? 'on' : ''}" data-color="${c}"
              style="--sw:${c === 'ink' ? (st.dark ? '#f8fafc' : '#111827') : c}" aria-label="${c === 'ink' ? 'Default ink' : 'Colour ' + c}"></button>`).join('')}
        </div>
        <label class="work-size" title="Pen thickness"><span class="work-size-dot" style="--d:${Math.max(3, st.size * 1.6)}px"></span>
          <input type="range" min="1" max="12" value="${st.size}" aria-label="Pen thickness"></label>
        <div class="work-actions">
          <button type="button" class="work-tool ${st.eraser ? 'on' : ''}" data-act="eraser" title="Eraser" aria-pressed="${st.eraser}">Eraser</button>
          <button type="button" class="work-tool" data-act="undo" title="Undo">↶</button>
          <button type="button" class="work-tool" data-act="clear" title="Clear page">Clear</button>
          <button type="button" class="work-tool" data-act="bg" title="White / black background">${st.dark ? '☀' : '☾'}</button>
          <button type="button" class="work-tool" data-act="close" title="Close rough pad" aria-label="Close">✕</button>
        </div>
      </div>`;
  }
  function refreshTools() { el.querySelector('.work-tools').outerHTML = tools(); bindTools(); }
  function bindTools() {
    el.querySelectorAll('.work-swatch').forEach(b => b.onclick = () => { st.color = b.dataset.color; st.eraser = false; refreshTools(); });
    const r = el.querySelector('.work-size input');
    r.oninput = () => { st.size = +r.value; LS.set('rise.work.size', st.size); el.querySelector('.work-size-dot').style.setProperty('--d', Math.max(3, st.size * 1.6) + 'px'); };
    el.querySelectorAll('.work-tool').forEach(b => b.onclick = () => {
      const a = b.dataset.act, pg = page(st.key);
      if (a === 'eraser') st.eraser = !st.eraser;
      if (a === 'undo' && pg.undo.length) { paint(pg.undo.pop()); save(); }
      if (a === 'clear' && confirm('Clear this page?')) { pg.undo.push(copy()); ctx.clearRect(0, 0, canvas.width, canvas.height); save(); }
      if (a === 'bg') { st.dark = !st.dark; LS.set('rise.work.dark', st.dark); el.classList.toggle('dark', st.dark); }
      if (a === 'close') return close();
      refreshTools();
    });
  }

  function open(mode, key, host) {
    close();
    st.open = true; st.mode = mode; st.eraser = false;
    el = document.createElement('div');
    el.className = `work-panel ${mode} ${st.dark ? 'dark' : ''}`;
    el.setAttribute('role', 'region'); el.setAttribute('aria-label', 'Rough pad');
    el.innerHTML = `${tools()}<canvas class="work-canvas"></canvas>`;
    (host || document.body).appendChild(el);
    canvas = el.querySelector('canvas'); ctx = canvas.getContext('2d');
    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    bindTools();
    st.key = key;
    ro = new ResizeObserver(fit); ro.observe(canvas);
    fit(); load(key);
    document.querySelector('.test-layout')?.classList.toggle('working', mode === 'dock');
    if (mode === 'dock' && window.innerWidth <= 820) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    syncButtons();
  }
  function close() {
    if (!el) { st.open = false; return; }
    save();
    ro?.disconnect(); el.remove();
    el = canvas = ctx = ro = stroke = null;
    st.open = false;
    document.querySelector('.test-layout')?.classList.remove('working');
    syncButtons();
  }
  function syncButtons() {
    document.querySelectorAll('.work-btn').forEach(b => { b.hidden = !touch; b.classList.toggle('on', st.open); b.setAttribute('aria-pressed', st.open); });
  }

  // Test screen: one page per question; a new test starts with blank pages.
  function testKey() { const s = app.session; return s?.questions?.[s.index] ? `t:${s.questions[s.index].id}` : 't:0'; }
  function toggleTest() {
    if (st.open && el?.isConnected) return close();
    const host = document.querySelector('.test-layout');
    if (host) open('dock', testKey(), host);
  }
  function onQuestion() {
    if (app.session !== lastSession) { lastSession = app.session; [...pages.keys()].filter(k => k.startsWith('t:')).forEach(k => pages.delete(k)); }
    if (!st.open || st.mode !== 'dock') return;
    if (!el?.isConnected) { const host = document.querySelector('.test-layout'); return host ? open('dock', testKey(), host) : close(); }
    const k = testKey();
    if (k !== st.key) { save(); load(k); }
  }
  // Short answers (practice screen or an assignment): one page per screen/assignment.
  function toggleFloat(key) { if (st.open && el?.isConnected) close(); else open('float', key); }

  window.addEventListener('hashchange', close); // leaving a screen closes the pad (pages are kept)
  return { touch, toggleTest, toggleFloat, onQuestion, close, syncButtons, get open() { return st.open; } };
})();

// Keep the pad's page in step with the current question, and close the
// floating pad when a short-answer sheet closes.
(() => {
  const rq = app.renderQuestion;
  app.renderQuestion = function () { const r = rq.apply(this, arguments); workPanel.onQuestion(); return r; };
  const cs = app.closeAssignSheet, ov = app._akOverlay;
  if (cs) app.closeAssignSheet = function () { workPanel.close(); return cs.apply(this, arguments); };
  if (ov) app._akOverlay = function () { workPanel.close(); return ov.apply(this, arguments); };
})();
window.workPanel = workPanel;
