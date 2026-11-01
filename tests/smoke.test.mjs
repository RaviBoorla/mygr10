// Browser smoke test: serves public/ locally and checks the main screens render.
// Run: node tests/smoke.test.mjs   (needs `npm install --prefix tests` and a Chromium;
// set CHROMIUM_PATH to use an existing browser binary)
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../public/', import.meta.url));
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  const file = join(ROOT, path.endsWith('/') ? path + 'index.html' : path);
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' }).end(body);
  } catch { res.writeHead(404).end(); }
}).listen(0);
const BASE = `http://localhost:${server.address().port}`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
let failed = 0;
const check = (name, ok, detail = '') => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? ' — ' + detail : ''}`); if (!ok) failed++; };

async function open(hash, { grade = 'X', board = 'CBSE' } = {}) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.addInitScript(([g, b]) => {
    localStorage.setItem('rise.grade', JSON.stringify(g));
    localStorage.setItem('rise.board', JSON.stringify(b));
    localStorage.setItem('rise.classConfirmed', 'true');
  }, [grade, board]);
  await page.goto(`${BASE}/${hash}`);
  await page.waitForTimeout(2500);
  return { page, errors };
}

{
  const { page, errors } = await open('#/home');
  const cards = await page.locator('[data-mock-meta]').count();
  check('X CBSE home shows mock-test cards', cards >= 5, `${cards} cards`);
  const english = await page.locator('[data-mock-meta="English"]').textContent();
  check('mock label fits a small bank', /^42 Q/.test(english || ''), english);
  await page.evaluate(() => app.startTest({ subject: 'Mathematics', mode: 'mock' }));
  await page.waitForTimeout(1500);
  const q = await page.evaluate(() => app.session?.questions.length || 0);
  check('Mathematics mock starts', q === 49, `${q} questions`);
  check('no page errors on home/test', !errors.length, errors.join(' | '));

  // Every question in these banks must render (they once stored options as {a,b,c,d} and crashed).
  for (const subject of ['Computer Applications', 'Information Technology']) {
    const rendered = await page.evaluate(async subject => {
      const all = await loadBank(subject);
      app.startTest({ subject, mode: 'drill' });
      await new Promise(r => setTimeout(r, 300));
      clearInterval(app.timerInterval);
      app.session.questions = all;
      let ok = 0;
      try { for (let i = 0; i < all.length; i++) { app.session.index = i; app.renderQuestion(); ok++; } }
      catch (e) { return `${ok}/${all.length} (crashed on ${all[ok]?.id}: ${e.message})`; }
      return `${ok}/${all.length}`;
    }, subject);
    const [ok, total] = rendered.split(/[/ ]/);
    check(`every ${subject} question renders`, ok === total, rendered);
  }
}
{
  const { page, errors } = await open('#/home', { grade: 'XII', board: 'ICSE' });
  const soon = await page.locator('.soon-tag').count();
  const sa = await page.getByText('Board Short Answers').count();
  // All five XII ICSE subjects have MCQ banks now (ISC Section A papers), so none should be "coming soon".
  check('XII ICSE shows mocks and Short Answers for every subject', soon === 0 && sa >= 5, `${soon} coming-soon, ${sa} SA`);
  check('no page errors on XII ICSE', !errors.length, errors.join(' | '));
}
{
  const { page, errors } = await open('#/notes/Mathematics/2');
  const asks = await page.locator('.note-ask').count();
  check('revision notes render with Ask Cloé buttons', asks > 0, `${asks} buttons`);
  await page.evaluate(() => app.selectChapter(consolidatedChapters('Mathematics').findIndex(c => c.chapter === 'Real Numbers')));
  await page.waitForTimeout(800);
  check('notes chapter offers "Quiz me"', await page.locator('#notes-quiz button').count() === 1);
  await page.fill('#notes-search', 'formula sector');
  await page.waitForTimeout(500);
  const top = await page.locator('#notes-body .rev-item-text').first().textContent();
  check('notes search matches whole words, best first', /Area of (minor )?sector/.test(top || ''), (top || '').slice(0, 40));
  check('no page errors on notes', !errors.length, errors.join(' | '));
}
{
  const { page, errors } = await open('#/home');
  await page.evaluate(() => {
    app.reviewData = [{ id: 'a', num: 1, text: '2+2=?', options: ['3', '4'], correct: 1, userAnswer: 0, isCorrect: false, explanation: '', chapter: 'X' }];
    app.summary = { correct: 0, wrong: 1, skipped: 0, total: 1 };
    app.lastConfig = { subject: 'Mathematics', mode: 'drill', chapter: null };
    app.reviewIndex = 0; app.reviewFilter = 'all'; app.go(['results'], true);
  });
  await page.waitForTimeout(800);
  check('results screen offers Explain my mistakes', await page.getByText('Explain my mistakes').isVisible());
  check('no page errors on results', !errors.length, errors.join(' | '));
}
{
  // X ICSE banks key ~83% of answers to option A; a mock must not inherit that.
  const { page, errors } = await open('#/home', { board: 'ICSE' });
  await page.evaluate(() => app.startTest({ subject: 'Physics', mode: 'mock' }));
  await page.waitForTimeout(1200);
  const atA = await page.evaluate(() => {
    const qs = app.session.questions;
    return Math.round(qs.filter(q => q.correct === 0).length / qs.length * 100);
  });
  check('mock shuffles answer options', atA < 55, `${atA}% keyed to A`);
  check('no page errors on ICSE mock', !errors.length, errors.join(' | '));
}
{
  // An assignment runs in the parent's grade/board even if the child is on another tab.
  const { page, errors } = await open('#/home', { grade: 'XII' });
  const r = await page.evaluate(async () => {
    app.startAssignment({ id: 't', subject: 'Mathematics', gradeBoard: 'X::CBSE', chapters: ['Circles', 'Triangles'], questionCount: 10, childUid: 'k' });
    for (let i = 0; i < 100 && app.session?.loading; i++) await new Promise(r => setTimeout(r, 30));
    clearInterval(app.timerInterval);
    const qs = app.session?.questions || [];
    return { n: qs.length, onlyChosen: qs.every(q => ['Circles', 'Triangles'].includes(q.chapter)), scope: `${state.grade}::${state.board}`, error: app.session?.error };
  });
  check('X assignment started from the XII tab loads X questions', r.n > 0 && r.onlyChosen && r.scope === 'X::CBSE', JSON.stringify(r));
  check('no page errors on cross-grade assignment', !errors.length, errors.join(' | '));
}
{
  // Board-paper assignments: built from MCQ + short-answer banks, incl. 5-mark questions.
  const { page, errors } = await open('#/home');
  const paper = await page.evaluate(async () => {
    const p = _akBuildPaper(await _akBanks('Mathematics', 'X::CBSE'));
    return { sections: p.sections.length, marks: _akPaperMarks(p), five: p.sections.some(s => s.items.some(i => i.m === 5)) };
  });
  check('board paper builds with a 5-mark section', paper.sections >= 4 && paper.marks >= 60 && paper.five, JSON.stringify(paper));
  check('no page errors building a paper', !errors.length, errors.join(' | '));
}
{
  const { page, errors } = await open('#/home', { grade: 'XII' });
  check('XII CBSE lists Information Technology', await page.locator('[data-mock-meta="Information Technology"]').count() === 1);
  check('no page errors on XII CBSE', !errors.length, errors.join(' | '));
}
{
  const { page, errors } = await open('#/careers');
  const nodes = await page.locator('#careers-tsvg [data-id]').count();
  check('career tree renders streams', nodes >= 5, `${nodes} nodes`);
  await page.locator('#careers-tsvg [data-id]').nth(1).click();
  await page.waitForTimeout(300);
  const link = page.locator('#careers-det .careers-dlink').first();
  const target = await link.getAttribute('data-goto');
  await link.click();
  await page.waitForTimeout(500);
  check('career detail links jump to that node',
    !!target && await page.locator(`#careers-tsvg [data-id="${target}"][aria-current="true"]`).count() === 1, target);
  await page.fill('#careers-search', 'zzqx');
  await page.waitForTimeout(400);
  check('career search shows an empty state', await page.locator('#careers-empty').isVisible());
  await page.evaluate(() => app.go(['home']));
  await page.setViewportSize({ width: 900, height: 700 });
  await page.waitForTimeout(300);
  check('no page errors on careers (incl. resize after leaving)', !errors.length, errors.join(' | '));
}

{
  const { page, errors } = await open('#/arena', { board: 'ICSE' });
  check('arena setup renders with its stylesheet',
    await page.locator('.arena-hero').count() === 1 && await page.evaluate(() => !!document.querySelector('link[href^="arena.css"]')?.sheet));
  await page.evaluate(() => arenaBegin());
  await page.waitForTimeout(1500);
  check('arena run shows HUD, timer and four options',
    await page.locator('.arena-stage .arena-hud').count() === 1 && await page.locator('#arena-opts .arena-opt-btn').count() === 4);
  await page.keyboard.press('1');
  await page.waitForTimeout(200);
  const fx = await page.locator('#arena-fx.show').textContent().catch(() => '');
  check('arena answers from the keyboard with feedback', /Correct|Not quite|row|combo/.test(fx || ''), fx);
  await page.waitForTimeout(1200);
  await page.keyboard.press('p');
  await page.waitForTimeout(150);
  check('arena P key pauses', await page.locator('#arena-pause-overlay.active').count() === 1);
  check('no page errors in arena', !errors.length, errors.join(' | '));
}

{
  // First visit: the welcome screen picks board + class together; no grade tabs after.
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${BASE}/`);
  await page.waitForTimeout(1500);
  const startDisabled = await page.locator('.class-start').isDisabled();
  await page.locator('input[name="class-board"][value="ICSE"]').check();
  await page.locator('input[name="class-grade"][value="XII"]').check();
  await page.click('.class-start');
  await page.waitForTimeout(1200);
  const r = await page.evaluate(() => ({ scope: `${state.grade}::${state.board}`, chip: document.querySelector('.hdr-class')?.textContent,
    tabs: document.querySelectorAll('.grade-tabs').length, confirmed: localStorage.getItem('rise.classConfirmed') }));
  check('welcome picks class, home shows only that class', startDisabled && r.scope === 'XII::ICSE' && r.chip === 'Class XII · ICSE' && !r.tabs && r.confirmed === 'true', JSON.stringify(r));
  await page.click('.hdr-class');
  await page.locator('.class-overlay input[name="class-grade"][value="X"]').check();
  await page.click('.class-overlay .class-save');
  await page.waitForTimeout(800);
  check('class picker switches class', await page.evaluate(() => `${state.grade}::${state.board}`) === 'X::ICSE');
  check('no page errors on class picking', !errors.length, errors.join(' | '));
}

{
  // Working panel: only on touch screens; opens over the palette and takes ink.
  const ctx = await browser.newContext({ hasTouch: true, viewport: { width: 1280, height: 860 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.addInitScript(() => { localStorage.setItem('rise.grade', '"X"'); localStorage.setItem('rise.board', '"CBSE"'); localStorage.setItem('rise.classConfirmed', 'true'); });
  await page.goto(`${BASE}/#/home`);
  await page.waitForTimeout(1500);
  await page.evaluate(() => app.startTest({ subject: 'Mathematics', mode: 'mock' }));
  await page.waitForTimeout(1200);
  await page.click('.work-btn');
  const box = await page.locator('.work-canvas').boundingBox();
  await page.mouse.move(box.x + 40, box.y + 60); await page.mouse.down();
  for (let i = 1; i <= 10; i++) await page.mouse.move(box.x + 40 + i * 15, box.y + 60 + i * 5);
  await page.mouse.up();
  const ink = await page.evaluate(() => { const c = document.querySelector('.work-canvas'); const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n; });
  check('working panel opens over the palette on touch screens and draws', ink > 0 && await page.locator('#palette-panel').isHidden(), `${ink} ink px`);
  check('no page errors in working panel', !errors.length, errors.join(' | '));
  await ctx.close();
}

await browser.close();
server.close();
console.log(failed ? `\n${failed} smoke check(s) failed.` : '\nAll smoke checks passed.');
process.exit(failed ? 1 : 0);
