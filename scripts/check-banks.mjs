#!/usr/bin/env node
// Validates every question bank the app references (BANKS / SA_BANKS / SOLVED_BANKS in
// public/config.js): the file exists, is a non-empty JSON array, and each item has the
// shape the screens render. Exits 1 on any error. Unreferenced files are only warned about.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const QDIR = join(PUBLIC, 'questions');
const { BANKS, SA_BANKS, SOLVED_BANKS } = vm.runInNewContext(
  readFileSync(join(PUBLIC, 'config.js'), 'utf8') + '\n;({ BANKS, SA_BANKS, SOLVED_BANKS })');

const str = v => typeof v === 'string' && v.trim() !== '';
const CHECKS = {
  mcq: q => [
    !str(q.text) && 'missing text',
    !(Array.isArray(q.options) && q.options.length >= 2 && q.options.every(o => typeof o === 'string')) && 'options must be an array of 2+ strings',
    Array.isArray(q.options) && q.options.some(o => typeof o === 'string' && !o.trim()) && 'WARN blank option',
    !(Number.isInteger(q.correct) && Array.isArray(q.options) && q.correct >= 0 && q.correct < q.options.length) && 'correct must be an index into options',
  ],
  sa: q => [!str(q.text) && 'missing text', !str(q.modelAnswer) && 'missing modelAnswer'],
  solved: q => [!str(q.question) && 'missing question', !(str(q.solution) || Array.isArray(q.steps)) && 'missing solution/steps'],
};

const errors = [];
const warnings = [];
const referenced = new Set();
const check = (kind, map) => {
  for (const [key, slug] of Object.entries(map)) {
    const file = `${slug}.json`;
    referenced.add(file);
    if (!existsSync(join(QDIR, file))) { errors.push(`${key}: ${file} not found`); continue; }
    let list;
    try { list = JSON.parse(readFileSync(join(QDIR, file), 'utf8')); }
    catch (e) { errors.push(`${file}: invalid JSON (${e.message})`); continue; }
    if (!Array.isArray(list) || !list.length) { errors.push(`${file}: must be a non-empty array (selectable as "${key}")`); continue; }
    const ids = new Set();
    let bad = 0;
    const warned = [];
    list.forEach((q, i) => {
      const found = CHECKS[kind](q).filter(Boolean);
      if (q.id !== undefined) { if (ids.has(q.id)) found.push(`duplicate id ${q.id}`); ids.add(q.id); }
      const problems = found.filter(p => !p.startsWith('WARN '));
      if (found.length > problems.length) warned.push(q.id || `#${i}`);
      if (problems.length && bad++ < 3) errors.push(`${file} #${i}${q.id ? ` (${q.id})` : ''}: ${problems.join('; ')}`);
    });
    if (bad > 3) errors.push(`${file}: …and ${bad - 3} more invalid items`);
    if (warned.length) warnings.push(`${file}: ${warned.length} question(s) with a blank option: ${warned.join(', ')}`);
  }
};
check('mcq', BANKS);
check('sa', SA_BANKS);
check('solved', SOLVED_BANKS);

const unreferenced = readdirSync(QDIR).filter(f => f.endsWith('.json') && !referenced.has(f));
if (unreferenced.length) warnings.push(`Not referenced by config.js (not shown in the app): ${unreferenced.join(', ')}`);
if (warnings.length) console.warn(`Warnings:\n${warnings.map(w => '  ' + w).join('\n')}\n`);

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) in question banks.`);
  process.exit(1);
}
console.log(`Question banks OK — ${referenced.size} files checked.`);
