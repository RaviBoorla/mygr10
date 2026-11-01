// ─── Assignment kinds: Short Answers + printable Board Paper ──────────────────
// MCQ assignments run through the normal test screen (screen-test.js).
// Short answers: the child types answers and submits; the parent marks them by
// hand or asks Cloé to mark them against the model answer.
// Board paper: print-only. Built once when assigned (chapters weighted by how
// often they appear in real board papers — the same count behind the 🔥
// high-yield badges, docs/inventory.md) so parent and child print the same
// paper; the parent's copy ends with an answer key.

const ASSIGN_KINDS = { mcq: 'MCQs', sa: 'Short answers', paper: 'Board paper' };

function assignKind(a) { return (a && a.kind) || 'mcq'; }

// The child's banks for a gradeBoard, independent of the viewer's own grade/board.
function _akBanks(subject, gradeBoard) {
  const [grade, board] = (gradeBoard || `${state.grade}::${state.board}`).split('::');
  const load = (cache, slug, label) => slug ? _loadJsonBank(cache, slug, subject, label).catch(() => []) : Promise.resolve([]);
  return Promise.all([
    load(bankCache, bankSlug(subject, board, grade), 'question bank'),
    load(saBankCache, saBankSlug(subject, board, grade), 'Short Answers bank'),
    load(solvedBankCache, solvedBankSlug(subject, board, grade), 'Solved Exercises bank')
  ]).then(([mcq, sa, solved]) => ({ mcq, sa, solved, grade, board }));
}

// Chapter weight = 1 + number of its questions taken from real board papers.
function _akChapterWeights(banks) {
  const w = {};
  [...banks.mcq, ...banks.sa].forEach(q => {
    const c = q.chapter || 'General';
    w[c] = (w[c] || 1) + (isBoardQuestion(q) || q.year ? 1 : 0);
  });
  return w;
}

// Weighted random pick: heavier chapters come up more often, and each pick
// halves that chapter's weight so the paper still spreads across the syllabus.
function _akPick(pool, n, weights) {
  const byCh = {};
  shuffle(pool).forEach(q => { const c = q.chapter || 'General'; (byCh[c] = byCh[c] || []).push(q); });
  const used = {}, out = [];
  while (out.length < n) {
    const chs = Object.keys(byCh).filter(c => byCh[c].length);
    if (!chs.length) break;
    const score = chs.map(c => (weights[c] || 1) * Math.pow(0.5, used[c] || 0));
    let r = Math.random() * score.reduce((s, x) => s + x, 0), i = 0;
    for (; i < chs.length - 1 && r >= score[i]; i++) r -= score[i];
    out.push(byCh[chs[i]].pop());
    used[chs[i]] = (used[chs[i]] || 0) + 1;
  }
  return out;
}

// Sections follow the board layout as far as the banks allow (the banks have
// no case-study items, so Section D uses 4-mark questions where they exist).
// 5-mark questions come from the Short Answers bank; subjects without enough
// fall back to the longest Solved (textbook) exercises, marked 5.
function _akBuildPaper(banks) {
  const xii = banks.grade === 'XII';
  const w = _akChapterWeights(banks);
  const ok = q => !q.hasFigure;
  const sa = m => banks.sa.filter(q => ok(q) && q.marks === m);
  const long = banks.sa.filter(q => ok(q) && q.marks >= 5 && q.marks <= 6);
  const longN = xii ? 3 : 4;
  let longPool = long.map(q => ({ q, s: 'sa', m: q.marks }));
  if (long.length < longN && banks.solved.length) {
    const len = q => String(q.solution || '').length + (q.steps || []).join(' ').length;
    const solved = banks.solved.slice().sort((a, b) => len(b) - len(a));
    longPool = longPool.concat(solved.slice(0, Math.max(10, Math.ceil(solved.length * 0.4))).map(q => ({ q, s: 'solved', m: 5 })));
  }
  const plan = [
    { title: 'Multiple choice questions', pool: banks.mcq.filter(ok).map(q => ({ q, s: 'mcq', m: 1 })), n: xii ? 16 : 20 },
    { title: 'Very short answer questions', pool: sa(2).map(q => ({ q, s: 'sa', m: 2 })), n: 5 },
    { title: 'Short answer questions', pool: sa(3).map(q => ({ q, s: 'sa', m: 3 })), n: xii ? 7 : 6 },
    { title: 'Long answer questions', pool: sa(4).map(q => ({ q, s: 'sa', m: 4 })), n: 3 },
    { title: 'Long answer questions', pool: longPool, n: longN }
  ];
  const sections = plan.map(p => {
    const byId = new Map(p.pool.map(x => [x.s + ':' + x.q.id, x]));
    const picked = _akPick(p.pool.map(x => ({ ...x.q, _k: x.s + ':' + x.q.id })), p.n, w);
    return { title: p.title, items: picked.map(q => { const x = byId.get(q._k); return { s: x.s, id: x.q.id, m: x.m }; }) };
  }).filter(sec => sec.items.length);
  return { seed: Math.random().toString(36).slice(2, 10), sections };
}

function _akPaperMarks(paper) {
  return (paper?.sections || []).reduce((t, sec) => t + sec.items.reduce((s, it) => s + it.m, 0), 0);
}

// Seeded option order, so every printout of one paper (and its answer key) matches.
function _akRng(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}
function _akOrderOptions(q, seed) {
  if (q.qtype === 'assertion-reason' || _ORDER_SENSITIVE.test(q.text + ' ' + q.options.join(' | ') + ' ' + (q.explanation || ''))) return q;
  const rnd = _akRng(seed + q.id), order = q.options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  return { ...q, options: order.map(i => q.options[i]), correct: order.indexOf(q.correct) };
}

// Question text without its "(2024 Board)" source tag — a paper shouldn't give it away.
function _akQText(t) { return String(t || '').replace(/\s*\((?:19|20)\d\d[^)]*Board[^)]*\)/gi, ''); }

function _akPct(ev) { return ev?.max ? Math.round(ev.score / ev.max * 100) : 0; }

function _akMath(t) { return window.renderMath ? renderMath(t) : esc(t).replace(/\n/g, '<br>'); }

Object.assign(app, {

  // Extra fields for the assignment doc, by kind. Returns { error } on failure.
  async _assignKindPayload(childUid, kind, chapters, count) {
    if (kind === 'mcq') return {};
    const formEl = document.getElementById(`assign-subject-${childUid}`)?.closest('.assign-form');
    const gradeBoard = `${formEl?.dataset.childGrade || state.grade}::${formEl?.dataset.childBoard || state.board}`;
    const subject = document.getElementById(`assign-subject-${childUid}`)?.value;
    const banks = await _akBanks(subject, gradeBoard);
    if (kind === 'sa') {
      const chs = chapters.length ? new Set(chapters) : null;
      const pool = banks.sa.filter(q => !q.hasFigure && (!chs || chs.has(q.chapter || 'General')));
      if (!pool.length) return { error: 'No short-answer questions for that choice.' };
      const n = Math.max(1, Math.min(20, Number(count) || 5));
      return { questionIds: _akPick(pool, n, _akChapterWeights(banks)).map(q => q.id) };
    }
    const paper = _akBuildPaper(banks);
    if (!paper.sections.length) return { error: 'Not enough questions to build a paper for this subject.' };
    return { paper, chapters: [], questionCount: paper.sections.reduce((t, s) => t + s.items.length, 0), timeLimitMinutes: 180 };
  },

  // Card subtitle for any kind.
  _assignMeta(a) {
    const k = assignKind(a);
    if (k === 'paper') return `Board paper · ${_akPaperMarks(a.paper)} marks · print`;
    if (k === 'sa') return `${a.questionCount} short answer${a.questionCount === 1 ? '' : 's'}`;
    return `${a.questionCount} q · ${a.timeLimitMinutes} min`;
  },

  // Result line for completed short-answer / paper assignments.
  _assignKindResult(a) {
    const k = assignKind(a);
    if (k === 'paper') return ' — marked done';
    if (k === 'sa') return a.evaluation ? ` — ${a.evaluation.score}/${a.evaluation.max} (${_akPct(a.evaluation)}%)` : ' — awaiting marking';
    return '';
  },

  // Assign form: switch kind → show/hide fields, limit subjects, reload chapters.
  _onAssignKind(childUid) {
    const formEl = document.getElementById(`assign-subject-${childUid}`)?.closest('.assign-form');
    if (!formEl) return;
    const kind = formEl.querySelector('input[name^="assign-kind"]:checked')?.value || 'mcq';
    const board = formEl.dataset.childBoard, grade = formEl.dataset.childGrade;
    const subjectEl = document.getElementById(`assign-subject-${childUid}`);
    [...subjectEl.options].forEach(o => {
      o.disabled = kind === 'sa' ? !saBankSlug(o.value, board, grade)
        : kind === 'paper' ? !(bankSlug(o.value, board, grade) && saBankSlug(o.value, board, grade))
        : !bankSlug(o.value, board, grade);
    });
    if (subjectEl.selectedOptions[0]?.disabled) subjectEl.value = [...subjectEl.options].find(o => !o.disabled)?.value || '';
    formEl.dataset.kind = kind;
    const countEl = document.getElementById(`assign-count-${childUid}`);
    if (kind === 'sa') { countEl.min = 1; countEl.max = 20; if (+countEl.value > 20 || +countEl.value < 1) countEl.value = 5; }
    else { countEl.min = 5; countEl.max = 50; if (+countEl.value < 5) countEl.value = 10; }
    this._populateAssignChapters(childUid);
  },

  // ── Board paper: print view (questions; answer key for the parent) ─────────
  async printAssignmentPaper(a, withKey) {
    if (!a?.paper) return;
    const win = window.open('', '_blank');
    if (!win) { alert('Please allow pop-ups for this site to print the paper.'); return; }
    win.document.write('<p style="font-family:sans-serif;padding:24px">Preparing the paper…</p>');
    const banks = await _akBanks(a.subject, a.gradeBoard);
    const idx = { mcq: new Map(banks.mcq.map(q => [q.id, q])), sa: new Map(banks.sa.map(q => [q.id, q])), solved: new Map(banks.solved.map(q => [q.id, q])) };
    const letters = 'ABCDEFGH', abcd = 'abcdefgh';
    let n = 0;
    const secs = a.paper.sections.map(sec => ({ ...sec, items: sec.items.map(it => ({ ...it, q: idx[it.s].get(it.id) })).filter(it => it.q) }))
      .filter(sec => sec.items.length);
    const total = secs.reduce((t, s) => t + s.items.reduce((x, it) => x + it.m, 0), 0);
    const marksNote = sec => { const ms = [...new Set(sec.items.map(it => it.m))]; return `${sec.items.length} question${sec.items.length === 1 ? '' : 's'} of ${ms.join('/')} mark${ms.length === 1 && ms[0] === 1 ? '' : 's'} each`; };

    const body = [], key = [];
    secs.forEach((sec, si) => {
      body.push(`<h2>Section ${letters[si]}</h2><p class="sec-note">${esc(sec.title)} — ${marksNote(sec)}</p><ol class="q">`);
      key.push(`<h3>Section ${letters[si]}</h3><ol class="q">`);
      sec.items.forEach(it => {
        n++;
        const q = it.s === 'mcq' ? _akOrderOptions(it.q, a.paper.seed) : it.q;
        const text = it.s === 'solved' ? q.question : q.text;
        const opts = it.s === 'mcq' ? `<div class="opts">${q.options.map((o, i) => `<span>(${abcd[i]}) ${_akMath(o)}</span>`).join('')}</div>` : '';
        body.push(`<li><span class="qn">${n}.</span><div>${_akMath(_akQText(text))}${opts}</div><span class="qm">${it.m}</span></li>`);
        const ans = it.s === 'mcq' ? `<b>(${abcd[q.correct]})</b> ${_akMath(q.options[q.correct])}${q.explanation ? `<div class="ex">${_akMath(q.explanation)}</div>` : ''}`
          : it.s === 'sa' ? `${_akMath(q.modelAnswer)}${(q.keyPoints || []).length ? `<ul>${q.keyPoints.map(k => `<li>${_akMath(k)}</li>`).join('')}</ul>` : ''}`
          : `${(q.steps || []).length ? `<ol class="steps">${q.steps.map(s => `<li>${_akMath(s)}</li>`).join('')}</ol>` : ''}${_akMath(q.solution)}`;
        key.push(`<li><span class="qn">${n}.</span><div class="ans">${ans}</div><span class="qm">${it.m}</span></li>`);
      });
      body.push('</ol>'); key.push('</ol>');
    });
    const [grade, board] = (a.gradeBoard || '').split('::');
    const instr = secs.map((s, i) => `<li>Section ${letters[i]} has ${marksNote(s)}.</li>`).join('');
    win.document.open();
    win.document.write(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(a.subject)} — practice board paper</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<style>
body{font-family:Georgia,'Times New Roman',serif;font-size:12pt;color:#000;background:#fff;max-width:780px;margin:20px auto;padding:0 16px;line-height:1.45}
h1{font-size:17pt;text-align:center;margin:0 0 2px}.sub{text-align:center;margin:0}
.meta{display:flex;justify-content:space-between;border-top:2px solid #000;border-bottom:2px solid #000;padding:6px 0;margin:12px 0;font-weight:bold}
h2{font-size:13pt;text-align:center;margin:22px 0 2px}h3{font-size:12pt;margin:16px 0 6px}
.sec-note{text-align:center;font-style:italic;margin:0 0 10px;font-size:11pt}
ol.q{list-style:none;padding:0;margin:0}ol.q>li{display:grid;grid-template-columns:2.2em 1fr 2.2em;gap:6px;margin:0 0 12px;break-inside:avoid}
.qn{font-weight:bold}.qm{text-align:right;font-weight:bold}
.opts{display:grid;grid-template-columns:1fr 1fr;gap:2px 18px;margin-top:4px}
.key{break-before:page}.ex{font-size:10.5pt;color:#333;margin-top:2px}.ans ul,.ans ol{margin:4px 0;padding-left:20px}
.bar{position:sticky;top:0;background:#fff;padding:8px 0;text-align:right}.bar button{font:inherit;padding:6px 14px;cursor:pointer}
@media print{.bar{display:none}body{margin:0;max-width:none}}@page{margin:15mm}
</style></head><body>
<div class="bar"><button onclick="print()">Print / Save as PDF</button></div>
<h1>${esc(a.subject)}</h1><p class="sub">Class ${esc(grade || '')} · ${esc(board || '')} — Practice board paper</p>
<div class="meta"><span>Time allowed: 3 hours</span><span>Maximum marks: ${total}</span></div>
<p><b>General instructions</b></p><ol>${instr}<li>All questions are compulsory. Marks are shown on the right.</li></ol>
${body.join('')}
${withKey ? `<section class="key"><h1>Answer key</h1><p class="sub">For the parent — model answers and marking points</p>${key.join('')}</section>` : ''}
</body></html>`);
    win.document.close();
    win.onload = () => setTimeout(() => win.print(), 300);
  },

  // Child marks a printed paper as done (no answers are collected online).
  async markPaperDone(assignmentId) {
    if (!confirm('Mark this paper as done?')) return;
    await window.riseFamily?.completeAssignment(window.riseAuth?.user?.uid, assignmentId, { kind: 'paper', done: true });
  },

  // ── Short answers: child answers and submits ────────────────────────────────
  _akOverlay(html) {
    document.querySelector('.ak-overlay')?.remove();
    const el = document.createElement('div');
    el.className = 'modal-overlay ak-overlay';
    el.innerHTML = `<div class="ak-sheet" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(el);
    return el;
  },
  closeAssignSheet() { document.querySelector('.ak-overlay')?.remove(); },

  async openSAAssignment(assignmentId) {
    const a = (window.riseFamily?.myAssignments || []).find(x => x.id === assignmentId);
    if (!a) return;
    const el = this._akOverlay('<p class="subtitle">Loading questions…</p>');
    const { sa } = await _akBanks(a.subject, a.gradeBoard);
    const byId = new Map(sa.map(q => [q.id, q]));
    const qs = (a.questionIds || []).map(id => byId.get(id)).filter(Boolean);
    let draft = {};
    try { draft = JSON.parse(localStorage.getItem(`rise.saAssign.${a.id}`) || '{}'); } catch (_) {}
    el.querySelector('.ak-sheet').innerHTML = `
      <div class="ak-head"><div><h2 class="ak-title">${esc(a.subject)} · Short answers</h2>
        <p class="subtitle">Write your answers, then submit. Your parent will mark them.</p></div>
        <div class="ak-head-actions"><button class="btn small ghost work-btn" ${window.workPanel?.touch ? '' : 'hidden'} aria-pressed="false" title="Rough pad for working out" onclick="workPanel.toggleFloat('sa-assign:${esc(a.id)}')">&#9998; Rough Pad</button>
        <button class="btn small ghost" onclick="app.closeAssignSheet()">Close</button></div></div>
      ${qs.map((q, i) => `
        <div class="ak-q">
          <div class="ak-q-head"><strong>Q${i + 1}.</strong><span class="ak-marks">${q.marks} mark${q.marks === 1 ? '' : 's'}</span></div>
          <div class="ak-q-text">${_akMath(_akQText(q.text))}</div>
          <textarea class="ak-answer" data-id="${esc(q.id)}" rows="${q.marks >= 4 ? 7 : 4}" placeholder="Your answer"
            oninput="app._saveSADraft('${esc(a.id)}')">${esc(draft[q.id] || '')}</textarea>
        </div>`).join('') || '<p class="subtitle">These questions are no longer available.</p>'}
      <div class="ak-actions"><button class="btn primary" ${qs.length ? '' : 'disabled'} onclick="app.submitSAAssignment('${esc(a.id)}')">Submit answers</button></div>`;
  },

  _saveSADraft(assignmentId) {
    const out = {};
    document.querySelectorAll('.ak-answer').forEach(t => { out[t.dataset.id] = t.value; });
    try { localStorage.setItem(`rise.saAssign.${assignmentId}`, JSON.stringify(out)); } catch (_) {}
  },

  async submitSAAssignment(assignmentId) {
    const answers = [...document.querySelectorAll('.ak-answer')].map(t => ({ id: t.dataset.id, text: t.value.trim() }));
    const blank = answers.filter(x => !x.text).length;
    if (!confirm(blank ? `${blank} answer${blank === 1 ? ' is' : 's are'} blank. Submit anyway?` : 'Submit your answers to your parent?')) return;
    const btn = document.querySelector('.ak-actions .btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }
    await window.riseFamily?.completeAssignment(window.riseAuth?.user?.uid, assignmentId, { kind: 'sa', answers });
    try { localStorage.removeItem(`rise.saAssign.${assignmentId}`); } catch (_) {}
    this._akOverlay(`<h2 class="ak-title">Answers sent ✓</h2><p class="subtitle">Your parent will mark them — you'll see the marks under History.</p>
      <div class="ak-actions"><button class="btn primary" onclick="app.closeAssignSheet()">OK</button></div>`);
  },

  // ── MCQ: the parent's view of the child's answered paper (latest attempt) ───
  openAnsweredPaper(childUid, assignmentId) {
    const a = (window.riseFamily?.getChildAssignments(childUid) || []).find(x => x.id === assignmentId);
    const attempts = a?.attempts || (a?.result ? [a.result] : []);
    const latest = attempts[attempts.length - 1];
    const rd = latest?.reviewData;
    if (!rd) return;
    const abcd = 'abcdefgh';
    const skipped = rd.filter(r => r.userAnswer == null).length, correct = rd.filter(r => r.isCorrect).length;
    const when = latest.submittedAt ? new Date(latest.submittedAt).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) : '';
    this._akOverlay(`
      <div class="ak-head"><div><h2 class="ak-title">${esc(a.subject)}${a.chapter ? ' · ' + esc(a.chapter) : ''}</h2>
        <p class="subtitle">Answered paper${attempts.length > 1 ? ` · attempt ${attempts.length}` : ''}${when ? ' · submitted ' + esc(when) : ''}</p></div>
        <button class="btn small ghost" onclick="app.closeAssignSheet()">Close</button></div>
      <div class="ak-score"><span class="ak-score-big">${latest.score} / ${latest.total}</span><span class="ak-score-pct">${latest.accuracy}%</span>
        <small>${correct} correct · ${rd.length - correct - skipped} wrong · ${skipped} not answered</small></div>
      ${rd.map((r, i) => `
        <div class="ak-q ${r.isCorrect ? 'ok' : r.userAnswer == null ? 'skip' : 'bad'}">
          <div class="ak-q-head"><strong>Q${i + 1}.</strong>
            <span class="ak-mark-badge ${r.isCorrect ? 'full' : 'zero'}">${r.isCorrect ? 'Correct' : r.userAnswer == null ? 'Not answered' : 'Wrong'}</span></div>
          <div class="ak-q-text">${_akMath(_akQText(r.text))}</div>
          <ul class="ak-opts">${(r.options || []).map((o, j) => {
            const isRight = j === r.correct, picked = j === r.userAnswer;
            return `<li class="${isRight ? 'right' : picked ? 'picked' : ''}"><span class="ak-opt-letter">${abcd[j]}</span><span>${_akMath(o)}</span>
              ${isRight ? `<em>✓ Right answer${picked ? ' · child\'s answer' : ''}</em>` : picked ? '<em>✗ Child\'s answer</em>' : ''}</li>`;
          }).join('')}</ul>
          ${r.explanation ? `<details class="ak-model"><summary>Explanation</summary>${_akMath(r.explanation)}</details>` : ''}
        </div>`).join('')}
      ${attempts.length > 1 ? '<p class="subtitle">Only the latest attempt keeps its full answers; earlier attempts keep the score.</p>' : ''}`);
  },

  // ── Short answers: parent marks (by hand or with Cloé); child views marks ───
  async openSAEvaluation(childUid, assignmentId, readOnly) {
    const list = readOnly ? (window.riseFamily?.myAssignmentHistory || []) : (window.riseFamily?.getChildAssignments(childUid) || []);
    const a = list.find(x => x.id === assignmentId);
    const attempts = a?.attempts || (a?.result ? [a.result] : []);
    const answers = attempts[attempts.length - 1]?.answers;
    if (!answers) return;
    const el = this._akOverlay('<p class="subtitle">Loading answers…</p>');
    const { sa } = await _akBanks(a.subject, a.gradeBoard);
    const byId = new Map(sa.map(q => [q.id, q]));
    const evn = a.evaluation;
    const ev = new Map((evn?.items || []).map(x => [x.id, x]));
    this._akEval = { childUid, a, rows: answers.map(x => ({ ...x, q: byId.get(x.id) })).filter(r => r.q), by: evn?.by };
    const rows = this._akEval.rows;
    const marked = readOnly && !!evn;
    const who = evn?.by === 'cloe' ? 'Marked with Cloé, checked by your parent' : 'Marked by your parent';
    const head = readOnly
      ? (marked ? `<div class="ak-score"><span class="ak-score-big">${evn.score} / ${evn.max}</span><span class="ak-score-pct">${_akPct(evn)}%</span><small>${who}</small></div>`
                : '<p class="subtitle">Submitted — waiting for your parent to mark it.</p>')
      : `<p class="subtitle">Award marks for each answer (or let Cloé suggest them against the model answer), then submit.</p>
         <div class="ak-score ak-score-live" id="ak-total"></div>`;
    el.querySelector('.ak-sheet').innerHTML = `
      <div class="ak-head"><div><h2 class="ak-title">${esc(a.subject)} · Short answers</h2></div>
        <button class="btn small ghost" onclick="app.closeAssignSheet()">Close</button></div>
      ${head}
      ${rows.map((r, i) => {
        const e = ev.get(r.id) || {};
        const badge = marked && e.marks != null
          ? `<span class="ak-mark-badge ${e.marks >= r.q.marks ? 'full' : e.marks > 0 ? 'part' : 'zero'}">${e.marks} / ${r.q.marks}</span>`
          : `<span class="ak-marks">${r.q.marks} mark${r.q.marks === 1 ? '' : 's'}</span>`;
        return `<div class="ak-q">
          <div class="ak-q-head"><strong>Q${i + 1}.</strong>${badge}</div>
          <div class="ak-q-text">${_akMath(_akQText(r.q.text))}</div>
          <div class="ak-child-ans"><span class="ak-label">${readOnly ? 'Your answer' : 'Child\'s answer'}</span>${r.text ? esc(r.text) : '<em>(left blank)</em>'}</div>
          ${marked && e.feedback ? `<p class="ak-comment"><span class="ak-label">Comment</span>${esc(e.feedback)}</p>` : ''}
          ${!readOnly || marked ? `<details class="ak-model" ${readOnly ? '' : 'open'}><summary>Model answer</summary>${_akMath(r.q.modelAnswer)}
            ${(r.q.keyPoints || []).length ? `<ul>${r.q.keyPoints.map(k => `<li>${_akMath(k)}</li>`).join('')}</ul>` : ''}</details>` : ''}
          ${readOnly ? '' : `<div class="ak-mark-row">
                <label>Award marks <input type="number" class="ak-mark" data-i="${i}" min="0" max="${r.q.marks}" step="0.5" value="${e.marks ?? ''}" oninput="app._akShowTotal()"> / ${r.q.marks}</label>
                <input type="text" class="ak-feedback" data-i="${i}" placeholder="Comment for your child (optional)" value="${esc(e.feedback || '')}">
              </div>`}
        </div>`;
      }).join('')}
      ${readOnly ? '' : `<p id="ak-eval-msg" class="subtitle" hidden></p>
        <div class="ak-actions">
          <button class="btn ghost" onclick="app.evaluateWithCloe()">✦ Evaluate with Cloé</button>
          <button class="btn primary" onclick="app.saveSAEvaluation()">${evn ? 'Update marks' : 'Submit marks'}</button>
        </div>`}`;
    if (!readOnly) this._akShowTotal();
  },

  // Parent's running total while marking.
  _akShowTotal() {
    const el = document.getElementById('ak-total');
    if (!el || !this._akEval) return;
    const max = this._akEval.rows.reduce((t, r) => t + r.q.marks, 0);
    const inputs = [...document.querySelectorAll('.ak-mark')];
    const done = inputs.filter(i => i.value !== '').length;
    const score = inputs.reduce((t, i) => t + (Number(i.value) || 0), 0);
    el.innerHTML = `<span class="ak-score-big">${score} / ${max}</span><span class="ak-score-pct">${max ? Math.round(score / max * 100) : 0}%</span>
      <small>${done} of ${inputs.length} answers marked</small>`;
  },

  async evaluateWithCloe() {
    const msg = document.getElementById('ak-eval-msg');
    const say = (t, bad) => { if (msg) { msg.textContent = t; msg.hidden = false; msg.style.color = bad ? '#dc2626' : 'var(--text-light)'; } };
    if (typeof aiPanel === 'undefined') return say('Cloé is not available.', true);
    if (aiPanel._needsSetup()) { say('Set up Cloé first (it opens on the right), then try again.', true); aiPanel.open(); aiPanel.openConfig(); return; }
    const { a, rows } = this._akEval;
    const [grade, board] = (a.gradeBoard || '').split('::');
    const items = rows.map((r, i) =>
      `Q${i + 1} (max ${r.q.marks} marks): ${r.q.text}\nModel answer: ${r.q.modelAnswer}\n` +
      `${(r.q.keyPoints || []).length ? 'Key points: ' + r.q.keyPoints.join(' | ') + '\n' : ''}Student answer: ${r.text || '(blank)'}`).join('\n\n');
    const systemPrompt = `You are a fair Class ${grade} ${board} board examiner. Mark each student answer against its model answer and key points, ` +
      'giving credit for correct ideas in the student\'s own words. Use whole or half marks from 0 to the maximum; a blank answer gets 0. ' +
      'Reply with ONLY a JSON array, one object per question, like [{"q":1,"marks":2,"feedback":"one short sentence for the parent"}]. No other text.';
    say('Cloé is marking…');
    document.querySelectorAll('.ak-actions .btn').forEach(b => { b.disabled = true; });
    let text = '';
    try {
      const cfg = aiState.config;
      const r = await fetch(AI_ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider: cfg.provider, endpoint: cfg.endpoint, model: cfg.model, apiKey: cfg.apiKey, accountId: cfg.accountId,
          history: [{ role: 'user', content: `${a.subject} — mark these ${rows.length} answers.\n\n${items}` }], systemPrompt })
      });
      const reader = r.body.getReader(), dec = new TextDecoder();
      let buf = '', err = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split('\n'); buf = lines.pop();
        lines.forEach(l => { try { const j = JSON.parse(l); if (j.delta) text += j.delta; if (j.error) err = j.error; } catch (_) {} });
      }
      if (err) throw new Error(err);
      const marks = JSON.parse((text.match(/\[[\s\S]*\]/) || [''])[0]);
      marks.forEach(m => {
        const i = Number(m.q) - 1, row = rows[i];
        if (!row) return;
        const v = row.text ? Math.max(0, Math.min(row.q.marks, Math.round(Number(m.marks) * 2) / 2)) : 0;
        const mEl = document.querySelector(`.ak-mark[data-i="${i}"]`), fEl = document.querySelector(`.ak-feedback[data-i="${i}"]`);
        if (mEl && !isNaN(v)) mEl.value = v;
        if (fEl && m.feedback) fEl.value = String(m.feedback);
      });
      this._akEval.by = 'cloe';
      this._akShowTotal();
      say('Cloé suggested marks and comments below — check them, change anything you disagree with, then Submit marks.');
    } catch (e) {
      say(text ? 'Cloé\'s reply could not be read — try again, or mark by hand.' : `Cloé could not mark these: ${e.message}`, true);
    }
    document.querySelectorAll('.ak-actions .btn').forEach(b => { b.disabled = false; });
  },

  async saveSAEvaluation() {
    const { childUid, a, rows, by } = this._akEval;
    const items = rows.map((r, i) => {
      const raw = document.querySelector(`.ak-mark[data-i="${i}"]`)?.value;
      return { id: r.id, max: r.q.marks, marks: raw === '' ? null : Math.max(0, Math.min(r.q.marks, Number(raw))),
        feedback: document.querySelector(`.ak-feedback[data-i="${i}"]`)?.value.trim() || '' };
    });
    if (items.some(x => x.marks == null || isNaN(x.marks))) { alert('Give marks for every answer (0 if it is wrong or blank).'); return; }
    const evaluation = { items, score: items.reduce((s, x) => s + x.marks, 0), max: items.reduce((s, x) => s + x.max, 0), by: by || 'parent', at: Date.now() };
    evaluation.pct = _akPct(evaluation);
    const res = await window.riseFamily.saveEvaluation(childUid, a.id, evaluation);
    if (!res.ok) { alert(res.msg || 'Could not save the marks.'); return; }
    this._akOverlay(`<h2 class="ak-title">Marks sent ✓</h2>
      <div class="ak-score"><span class="ak-score-big">${evaluation.score} / ${evaluation.max}</span><span class="ak-score-pct">${evaluation.pct}%</span></div>
      <p class="subtitle">Your child can now see the marks for each question and the total.</p>
      <div class="ak-actions"><button class="btn primary" onclick="app.closeAssignSheet()">Done</button></div>`);
  }
});
