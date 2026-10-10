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
  check('XII ICSE shows Short Answers instead of empty mocks', soon >= 5 && sa >= 5, `${soon} coming-soon, ${sa} SA`);
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
  check('notes search matches whole words, best first', /Area of sector/.test(top || ''), (top || '').slice(0, 40));
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

await browser.close();
server.close();
console.log(failed ? `\n${failed} smoke check(s) failed.` : '\nAll smoke checks passed.');
process.exit(failed ? 1 : 0);
