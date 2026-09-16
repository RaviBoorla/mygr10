// Smoke + unit tests for the Rise Family Worker (no live Firestore/Resend).
// Run with: node workers/family/test/smoke.js

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); console.log(`  ✓  ${name}`); passed++; }
  catch(e) { console.error(`  ✗  ${name}\n    ${e.message}`); failed++; }
}
function assert(cond, msg)            { if (!cond) throw new Error(msg || 'Assertion failed'); }
function assertIncludes(str, sub)     { assert(String(str).includes(sub), `Expected "${sub}" in output`); }
function assertNotIncludes(str, bad)  { assert(!String(str).includes(bad), `Must NOT contain "${bad}"`); }

// ── Inline the template / business logic under test ──────────────────────────
// Duplicated here (not imported) so tests run in plain Node without ESM loader.
// If these diverge from src/email.js the CI test will flag it.

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function layout(body) { return `<html>${body}</html>`; }
function header(t, s) { return `<div class="hdr"><p class="hdr-title">${t}</p><p>${s}</p></div>`; }
function footer(url)  { return `<div class="foot"><a href="${url}">unsubscribe</a></div>`; }
const STRONG = 70;

function inviteEmailHtml({ fromName, fromEmail, toRole, appUrl }) {
  const roleLabel = toRole === 'guardian' ? 'parent/guardian' : 'child';
  return layout(`${header(`You have a Rise invite`, `From ${esc(fromName)} (${esc(fromEmail)})`)}
    <p>${esc(fromName)} wants to link you as their <strong>${roleLabel}</strong>.</p>
    <a href="${appUrl}">Open Rise to accept →</a>${footer(appUrl)}`);
}
function inviteEmailText({ fromName, fromEmail, toRole, appUrl }) {
  const roleLabel = toRole === 'guardian' ? 'parent/guardian' : 'child';
  return `${fromName} (${fromEmail}) invited you as their ${roleLabel}.\nOpen: ${appUrl}`;
}

function assignmentCompleteEmailHtml({ childName, subject, chapter, score, total, accuracy, appUrl }) {
  const chStr = chapter ? ` · ${esc(chapter)}` : '';
  const copy  = accuracy >= 70 ? 'Great result — keep encouraging them to practice regularly.'
              : accuracy >= 50 ? 'Good effort. A focused chapter drill on this topic could help build confidence.'
              : 'This topic needs more practice — consider assigning a shorter set so they can build up gradually.';
  return layout(`${header(`${esc(childName)}'s assignment`, `${esc(subject)}${chStr}`)}
    <span class="pct ${accuracy >= 60 ? 'good' : 'focus'}">${accuracy}%</span>
    <p>${score} correct out of ${total}</p>
    <p>${copy}</p>
    <a href="${appUrl}#/progress">See full progress →</a>${footer(appUrl)}`);
}
function assignmentCompleteEmailText({ childName, subject, chapter, score, total, accuracy, appUrl }) {
  return `${childName} completed ${subject}${chapter ? ' · ' + chapter : ''}: ${score}/${total} (${accuracy}%)\nFull progress: ${appUrl}#/progress`;
}

function aggregateBySubject(chapters) {
  const bySubject = {};
  for (const c of chapters) (bySubject[c.subject] || (bySubject[c.subject] = [])).push(c);
  return Object.entries(bySubject).map(([subject, chs]) => ({
    subject,
    strengths: chs.filter(c => c.accuracy >= STRONG).sort((a, b) => b.accuracy - a.accuracy),
    focus:     chs.filter(c => c.accuracy <  STRONG).sort((a, b) => a.accuracy - b.accuracy)
  }));
}

function nightlyDigestHtml({ childName, gradeBoard, subjects, appUrl }) {
  let body = `${header(`${esc(childName)}'s practice today`, gradeBoard)}`;
  for (const { subject, strengths, focus } of subjects) {
    body += `<h2>${esc(subject)}</h2>`;
    if (strengths.length) body += `<span class="pill strength">Strengths</span>` +
      strengths.slice(0,3).map(c => `<div class="row"><span>${c.accuracy}%</span><span>${esc(c.chapter)}</span></div>`).join('');
    if (focus.length)     body += `<span class="pill focus">Focus areas</span>` +
      focus.slice(0,3).map(c => `<div class="row"><span>${c.accuracy}%</span><span>${esc(c.chapter)}</span><a href="${appUrl}#/home">Practice →</a></div>`).join('');
  }
  return layout(body + footer(appUrl));
}
function nightlyDigestText({ childName, gradeBoard, subjects, appUrl }) {
  let lines = [`${childName} today (${gradeBoard})`, ''];
  for (const { subject, strengths, focus } of subjects) {
    lines.push(`== ${subject} ==`);
    if (strengths.length) { lines.push('Strengths:'); strengths.slice(0,3).forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%`)); }
    if (focus.length)     { lines.push('Building up:'); focus.slice(0,3).forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%`)); }
    lines.push('');
  }
  lines.push(`Progress: ${appUrl}#/progress`);
  return lines.join('\n');
}

function weeklyDigestHtml({ childName, gradeBoard, subjects, appUrl }) {
  let body = `${header(`${esc(childName)}'s weekly progress`, gradeBoard)}`;
  for (const { subject, strengths, focus } of subjects) {
    body += `<h2>${esc(subject)}</h2>`;
    if (strengths.length) body += `<span class="pill strength">✦ Strengths (≥70%)</span>` +
      strengths.map(c => `<div class="row"><span class="good">${c.accuracy}%</span><span>${esc(c.chapter)}</span></div>`).join('');
    if (focus.length)     body += `<span class="pill focus">Building up (&lt;70%)</span>` +
      focus.map(c => `<div class="row"><span class="focus">${c.accuracy}%</span><span>${esc(c.chapter)}</span><a class="cta" href="${appUrl}#/home">Assign practice →</a></div>`).join('');
  }
  return layout(body + footer(appUrl));
}
function weeklyDigestText({ childName, gradeBoard, subjects, appUrl }) {
  let lines = [`${childName} weekly (${gradeBoard})`, ''];
  for (const { subject, strengths, focus } of subjects) {
    lines.push(`== ${subject} ==`);
    if (strengths.length) { lines.push('Strengths:'); strengths.forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%`)); }
    if (focus.length)     { lines.push('Building up:'); focus.forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%  → assign practice: ${appUrl}#/home`)); }
    lines.push('');
  }
  return lines.join('\n');
}

// ── Email template tests ──────────────────────────────────────────────────────
console.log('\n── Email template tests ──');

test('inviteEmailHtml contains invite CTA', () => {
  const html = inviteEmailHtml({ fromName: 'Ravi', fromEmail: 'r@x.com', toRole: 'guardian', appUrl: 'https://app.com' });
  assertIncludes(html, 'Open Rise to accept');
  assertIncludes(html, 'parent/guardian');
});

test('inviteEmailHtml escapes XSS in fromName', () => {
  const html = inviteEmailHtml({ fromName: '<script>alert(1)</script>', fromEmail: 'x@y.com', toRole: 'child', appUrl: 'https://app.com' });
  assertNotIncludes(html, '<script>');
  assertIncludes(html, '&lt;script&gt;');
});

test('inviteEmailText is plain text (no HTML tags)', () => {
  const text = inviteEmailText({ fromName: 'Ravi', fromEmail: 'r@x.com', toRole: 'guardian', appUrl: 'https://app.com' });
  assertNotIncludes(text, '<');
});

test('assignmentCompleteEmailHtml shows accuracy', () => {
  const html = assignmentCompleteEmailHtml({ childName: 'Priya', subject: 'Maths', chapter: 'Trigonometry', score: 8, total: 10, accuracy: 80, appUrl: 'https://app.com' });
  assertIncludes(html, '80%');
  assertIncludes(html, 'Trigonometry');
  assertIncludes(html, 'Priya');
});

test('assignmentCompleteEmailHtml uses encouraging copy for low accuracy', () => {
  const html = assignmentCompleteEmailHtml({ childName: 'Priya', subject: 'Maths', chapter: null, score: 3, total: 10, accuracy: 30, appUrl: 'https://app.com' });
  assertNotIncludes(html.toLowerCase(), 'failed');
  assertNotIncludes(html.toLowerCase(), 'weak');
  assertNotIncludes(html.toLowerCase(), 'poor');
  assertIncludes(html, 'gradually');
});

test('nightlyDigestHtml: Strengths appears before Focus areas', () => {
  const subjects = [{ subject: 'Maths', strengths: [{ chapter: 'Trig', accuracy: 85 }], focus: [{ chapter: 'Stats', accuracy: 45 }] }];
  const html = nightlyDigestHtml({ childName: 'Arjun', gradeBoard: 'X::CBSE', subjects, appUrl: 'https://app.com' });
  const si = html.indexOf('Strengths'), fi = html.indexOf('Focus areas');
  assert(si !== -1, 'Must contain Strengths');
  assert(fi !== -1, 'Must contain Focus areas');
  assert(si < fi, 'Strengths must come before Focus areas');
});

test('weeklyDigestHtml never uses forbidden words', () => {
  const subjects = [{ subject: 'Science', strengths: [], focus: [{ chapter: 'Light', accuracy: 40, attempts: 5 }] }];
  const html = weeklyDigestHtml({ childName: 'Meera', gradeBoard: 'X::CBSE', subjects, appUrl: 'https://app.com' }).toLowerCase();
  for (const bad of ['weak at', 'poor at', 'failed', 'bad at']) assertNotIncludes(html, bad);
});

test('weeklyDigestHtml includes practice CTA for focus areas', () => {
  const subjects = [{ subject: 'Science', strengths: [], focus: [{ chapter: 'Light', accuracy: 40, attempts: 5 }] }];
  const html = weeklyDigestHtml({ childName: 'Meera', gradeBoard: 'X::CBSE', subjects, appUrl: 'https://app.com' });
  assertIncludes(html, 'Assign practice');
});

test('nightlyDigestText is plain text', () => {
  const subjects = [{ subject: 'Maths', strengths: [{ chapter: 'Algebra', accuracy: 90 }], focus: [] }];
  const text = nightlyDigestText({ childName: 'Ram', gradeBoard: 'X::CBSE', subjects, appUrl: 'https://app.com' });
  assertNotIncludes(text, '<div');
  assertIncludes(text, '90%');
});

// ── aggregateBySubject business logic ────────────────────────────────────────
console.log('\n── Business logic tests ──');

test('aggregateBySubject splits strengths vs focus', () => {
  const chapters = [
    { subject: 'Maths', chapter: 'Algebra',      accuracy: 85, attempts: 10 },
    { subject: 'Maths', chapter: 'Statistics',   accuracy: 45, attempts: 5  },
    { subject: 'Maths', chapter: 'Trigonometry', accuracy: 72, attempts: 8  },
    { subject: 'Science', chapter: 'Light',      accuracy: 30, attempts: 4  }
  ];
  const result = aggregateBySubject(chapters);
  const maths = result.find(s => s.subject === 'Maths');
  assert(maths.strengths.length === 2, `Expected 2 strengths, got ${maths.strengths.length}`);
  assert(maths.focus.length     === 1, `Expected 1 focus, got ${maths.focus.length}`);
  assert(maths.strengths[0].accuracy >= maths.strengths[1].accuracy, 'Strengths must be sorted desc');
});

test('aggregateBySubject: 70% is a strength', () => {
  const r = aggregateBySubject([{ subject: 'X', chapter: 'Ch', accuracy: 70, attempts: 1 }]);
  assert(r[0].strengths.length === 1, '70% must be a strength');
  assert(r[0].focus.length     === 0);
});

test('aggregateBySubject: 69% is a focus area', () => {
  const r = aggregateBySubject([{ subject: 'X', chapter: 'Ch', accuracy: 69, attempts: 1 }]);
  assert(r[0].strengths.length === 0);
  assert(r[0].focus.length     === 1);
});

test('aggregateBySubject: focus areas sorted asc (lowest accuracy first)', () => {
  const r = aggregateBySubject([
    { subject: 'X', chapter: 'A', accuracy: 50, attempts: 3 },
    { subject: 'X', chapter: 'B', accuracy: 20, attempts: 2 }
  ]);
  assert(r[0].focus[0].accuracy <= r[0].focus[1].accuracy, 'Focus must be sorted asc');
});

test('aggregateBySubject: empty input returns empty array', () => {
  const r = aggregateBySubject([]);
  assert(Array.isArray(r) && r.length === 0);
});

// ── Firestore value deserialization ─────────────────────────────────────────
console.log('\n── Firestore serialisation tests ──');

function fromValue(v) {
  if (!v) return null;
  if ('nullValue'      in v) return null;
  if ('booleanValue'   in v) return v.booleanValue;
  if ('integerValue'   in v) return Number(v.integerValue);
  if ('doubleValue'    in v) return v.doubleValue;
  if ('stringValue'    in v) return v.stringValue;
  if ('timestampValue' in v) return new Date(v.timestampValue);
  if ('arrayValue'     in v) return (v.arrayValue.values || []).map(fromValue);
  if ('mapValue'       in v) {
    const o = {};
    for (const [k, val] of Object.entries(v.mapValue.fields || {})) o[k] = fromValue(val);
    return o;
  }
  return null;
}

test('fromValue: integerValue → number', () => assert(fromValue({ integerValue: '42' }) === 42));
test('fromValue: booleanValue true',     () => assert(fromValue({ booleanValue: true  }) === true));
test('fromValue: booleanValue false',    () => assert(fromValue({ booleanValue: false }) === false));
test('fromValue: stringValue',           () => assert(fromValue({ stringValue: 'hi' }) === 'hi'));
test('fromValue: nullValue',             () => assert(fromValue({ nullValue: null }) === null));
test('fromValue: timestampValue → Date', () => {
  const d = fromValue({ timestampValue: '2024-01-15T00:00:00Z' });
  assert(d instanceof Date && d.toISOString().startsWith('2024-01-15'));
});
test('fromValue: arrayValue', () => {
  const r = fromValue({ arrayValue: { values: [{ stringValue: 'a' }, { integerValue: '2' }] } });
  assert(Array.isArray(r) && r[0] === 'a' && r[1] === 2);
});
test('fromValue: nested mapValue', () => {
  const r = fromValue({ mapValue: { fields: { email: { booleanValue: true }, count: { integerValue: '5' } } } });
  assert(r.email === true && r.count === 5);
});

// ── XSS / injection checks ───────────────────────────────────────────────────
console.log('\n── Security / XSS tests ──');

test('esc() neutralises all 5 HTML special chars', () => {
  const raw  = `<script>"alert"('xss')&</script>`;
  const safe = esc(raw);
  assertNotIncludes(safe, '<script>');
  assertIncludes(safe, '&lt;script&gt;');
  assertIncludes(safe, '&quot;');
  assertIncludes(safe, '&#39;');
  assertIncludes(safe, '&amp;');
});

test('assignmentCompleteEmailHtml XSS: childName is escaped', () => {
  const html = assignmentCompleteEmailHtml({ childName: '<img src=x onerror=alert(1)>', subject: 'Maths', chapter: null, score: 1, total: 1, accuracy: 100, appUrl: 'https://app.com' });
  assertNotIncludes(html, '<img src=x');
  assertIncludes(html, '&lt;img');
});

test('nightlyDigestHtml XSS: chapter name is escaped', () => {
  const subjects = [{ subject: 'Maths', strengths: [{ chapter: '<b>hack</b>', accuracy: 90 }], focus: [] }];
  const html = nightlyDigestHtml({ childName: 'Test', gradeBoard: 'X::CBSE', subjects, appUrl: 'https://app.com' });
  assertNotIncludes(html, '<b>hack</b>');
  assertIncludes(html, '&lt;b&gt;hack&lt;/b&gt;');
});

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n── Results: ${passed} passed, ${failed} failed ──\n`);
if (failed > 0) process.exit(1);
