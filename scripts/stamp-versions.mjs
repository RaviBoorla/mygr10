#!/usr/bin/env node
// Sets every local `file.js?v=…` / `file.css?v=…` reference under public/ to a short
// hash of that file's contents, so browsers re-fetch exactly the files that changed.
//   node scripts/stamp-versions.mjs          rewrite references in place
//   node scripts/stamp-versions.mjs --check  exit 1 if any reference is stale (CI)
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const CHECK = process.argv.includes('--check');
const REF = /(["'])([\w./-]+\.(?:js|css))\?v=([\w]+)\1/g;

const hashOf = rel => createHash('sha256').update(readFileSync(join(PUBLIC, rel))).digest('hex').slice(0, 8);
const sources = readdirSync(PUBLIC).filter(f => /\.(html|js)$/.test(f));

const stale = new Set();
// A stamp can change a referencing file's own hash (app.js → index.html), so repeat until stable.
for (let pass = 0, changed = true; changed && pass < 10; pass++) {
  changed = false;
  for (const file of sources) {
    const path = join(PUBLIC, file);
    const before = readFileSync(path, 'utf8');
    const after = before.replace(REF, (m, q, rel, v) => {
      if (!existsSync(join(PUBLIC, rel))) return m;
      const h = hashOf(rel);
      if (h === v) return m;
      stale.add(`${file}: ${rel} ${v} → ${h}`);
      return `${q}${rel}?v=${h}${q}`;
    });
    if (after !== before) {
      changed = true;
      if (!CHECK) writeFileSync(path, after);
    }
  }
  if (CHECK) break;
}

if (stale.size) console.log([...stale].join('\n'));
if (CHECK && stale.size) {
  console.error('\nStale asset versions — run: node scripts/stamp-versions.mjs');
  process.exit(1);
}
if (!stale.size) console.log('Asset versions up to date.');
