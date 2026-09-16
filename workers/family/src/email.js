// Resend email sender + HTML templates for Rise Family emails.
// All copy follows docs/family.md "Tone and framing":
//   - Strengths FIRST, prominently
//   - Focus areas SECOND (framed as opportunities, never failures)
//   - No "weak / poor / bad at"
//   - Every focus area paired with a practice link

const RESEND_URL = 'https://api.resend.com/emails';

export async function sendEmail(apiKey, { from, to, subject, html, text }) {
  const res = await fetch(RESEND_URL, {
    method:  'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body:    JSON.stringify({ from, to: Array.isArray(to) ? to : [to], subject, html, text })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error ${res.status}: ${err}`);
  }
  return res.json();
}

// ── Shared layout ──────────────────────────────────────────────────────────

function layout(body, appUrl) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body  { margin:0; padding:0; background:#f3f4f6; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; color:#1f2937; }
  .wrap { max-width:560px; margin:24px auto; background:#fff; border-radius:12px; overflow:hidden; }
  .hdr  { background:#2563eb; padding:20px 24px; }
  .hdr-title { color:#fff; font-size:20px; font-weight:700; margin:0; }
  .hdr-sub   { color:rgba(255,255,255,.75); font-size:13px; margin:4px 0 0; }
  .body { padding:24px; }
  h2   { font-size:15px; font-weight:700; margin:20px 0 8px; color:#1f2937; }
  .row { display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid #f3f4f6; }
  .pct { font-size:18px; font-weight:700; min-width:46px; text-align:right; }
  .pct.good { color:#15803d; }
  .pct.focus{ color:#9a3412; }
  .desc strong { display:block; font-size:14px; }
  .desc small  { font-size:12px; color:#6b7280; }
  .pill { display:inline-block; padding:2px 10px; border-radius:99px; font-size:11px; font-weight:700; margin-bottom:6px; }
  .pill.strength { background:#f0fdf4; color:#15803d; }
  .pill.focus    { background:#fff7ed; color:#9a3412; }
  .cta  { display:inline-block; margin-top:6px; padding:4px 12px; background:#2563eb; color:#fff; border-radius:6px; font-size:12px; text-decoration:none; font-weight:600; }
  .foot { margin-top:24px; padding-top:16px; border-top:1px solid #e5e7eb; font-size:11px; color:#9ca3af; }
  .foot a { color:#6b7280; }
</style></head><body>
<div class="wrap">${body}</div>
</body></html>`;
}

function header(title, sub) {
  return `<div class="hdr"><p class="hdr-title">${title}</p><p class="hdr-sub">${sub}</p></div>`;
}

function footer(appUrl) {
  return `<div class="foot">
    You're receiving this because a family link is active on <a href="${appUrl}">Rise</a>.
    To stop: open Rise → Avatar → Profile → Family → turn off Daily Digest (or Unlink).
  </div>`;
}

// ── Invite notification ───────────────────────────────────────────────────

export function inviteEmailHtml({ fromName, fromEmail, toRole, appUrl }) {
  const roleLabel = toRole === 'guardian' ? 'parent/guardian' : 'child';
  const body = `
    ${header('You have a Rise invite', `From ${fromName} (${fromEmail})`)}
    <div class="body">
      <p><strong>${fromName}</strong> has invited you to link Rise accounts as their <strong>${roleLabel}</strong>.</p>
      <p>Rise is a free Grade 10 board-exam practice app. Linking lets you see their practice progress — strengths first.</p>
      <p style="margin-top:20px"><a class="cta" href="${appUrl}" style="padding:10px 20px;font-size:14px">Open Rise to accept →</a></p>
      <p style="margin-top:12px;font-size:12px;color:#6b7280">Sign in (or create a free account) at the link above, then look for the invite banner in your Profile → Family section.</p>
      ${footer(appUrl)}
    </div>`;
  return layout(body, appUrl);
}

export function inviteEmailText({ fromName, fromEmail, toRole, appUrl }) {
  const roleLabel = toRole === 'guardian' ? 'parent/guardian' : 'child';
  return `${fromName} (${fromEmail}) has invited you to link Rise accounts as their ${roleLabel}.\n\nOpen Rise to accept: ${appUrl}\n\nSign in or create a free account, then find the invite in Profile → Family.`;
}

// ── Assignment-completed notification ────────────────────────────────────

export function assignmentCompleteEmailHtml({ childName, subject, chapter, score, total, accuracy, appUrl }) {
  const chapterStr = chapter ? ` · ${chapter}` : '';
  const accentColor = accuracy >= 60 ? '#15803d' : '#9a3412';
  const body = `
    ${header('Assignment complete', `${childName} finished their practice`)}
    <div class="body">
      <p><strong>${childName}</strong> just completed an assignment you set:</p>
      <div class="row" style="border:1px solid #e5e7eb;border-radius:8px;padding:14px;">
        <div class="pct ${accuracy >= 60 ? 'good' : 'focus'}">${accuracy}%</div>
        <div class="desc">
          <strong>${subject}${chapterStr}</strong>
          <small>${score} correct out of ${total} questions</small>
        </div>
      </div>
      <p style="margin-top:16px;font-size:13px;color:#6b7280">
        ${accuracy >= 70 ? 'Great result — keep encouraging them to practice regularly.'
          : accuracy >= 50 ? 'Good effort. A focused chapter drill on this topic could help build confidence.'
          : 'This topic needs more practice — consider assigning a shorter set so they can build up gradually.'}
      </p>
      <p style="margin-top:16px"><a class="cta" href="${appUrl}#/progress">See full progress →</a></p>
      ${footer(appUrl)}
    </div>`;
  return layout(body, appUrl);
}

export function assignmentCompleteEmailText({ childName, subject, chapter, score, total, accuracy, appUrl }) {
  return `${childName} completed an assignment: ${subject}${chapter ? ' · ' + chapter : ''}\nScore: ${score}/${total} (${accuracy}%)\n\nFull progress: ${appUrl}#/progress`;
}

// ── Nightly digest ────────────────────────────────────────────────────────

export function nightlyDigestHtml({ childName, gradeBoard, subjects, appUrl }) {
  // subjects: [{ subject, strengths: [{chapter, accuracy}], focus: [{chapter, accuracy}] }]
  const STRONG = 70;
  let sectionsHtml = '';
  for (const { subject, strengths, focus } of subjects) {
    if (!strengths.length && !focus.length) continue;
    const sRows = strengths.slice(0, 3).map(c =>
      `<div class="row"><div class="pct good">${c.accuracy}%</div><div class="desc"><strong>${esc(c.chapter)}</strong><small>Strength</small></div></div>`
    ).join('');
    const fRows = focus.slice(0, 3).map(c =>
      `<div class="row"><div class="pct focus">${c.accuracy}%</div>
       <div class="desc"><strong>${esc(c.chapter)}</strong><small>Building up</small>
         <a class="cta" href="${appUrl}#/home">Practice →</a>
       </div></div>`
    ).join('');
    sectionsHtml += `<h2>${esc(subject)}</h2>
      ${strengths.length ? `<span class="pill strength">✦ Strengths</span>${sRows}` : ''}
      ${focus.length    ? `<span class="pill focus" style="margin-top:8px">Focus areas</span>${fRows}` : ''}`;
  }

  const body = `
    ${header(`${esc(childName)}'s practice today`, gradeBoard.replace('::', ' · '))}
    <div class="body">
      <p>Here's how <strong>${esc(childName)}</strong> did today — strengths first.</p>
      ${sectionsHtml || '<p style="color:#6b7280">No chapter data for today yet.</p>'}
      <p style="margin-top:16px"><a class="cta" href="${appUrl}#/progress">Full progress view →</a></p>
      ${footer(appUrl)}
    </div>`;
  return layout(body, appUrl);
}

export function nightlyDigestText({ childName, gradeBoard, subjects, appUrl }) {
  let lines = [`${childName}'s practice today (${gradeBoard.replace('::', ' · ')})`, ''];
  for (const { subject, strengths, focus } of subjects) {
    lines.push(`== ${subject} ==`);
    if (strengths.length) { lines.push('Strengths:'); strengths.slice(0,3).forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%`)); }
    if (focus.length)     { lines.push('Building up:'); focus.slice(0,3).forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%`)); }
    lines.push('');
  }
  lines.push(`Full progress: ${appUrl}#/progress`);
  return lines.join('\n');
}

// ── Weekly summary ────────────────────────────────────────────────────────

export function weeklyDigestHtml({ childName, gradeBoard, subjects, appUrl }) {
  let sectionsHtml = '';
  for (const { subject, strengths, focus } of subjects) {
    const sRows = strengths.map(c =>
      `<div class="row"><div class="pct good">${c.accuracy}%</div><div class="desc"><strong>${esc(c.chapter)}</strong><small>${c.attempts} attempt${c.attempts !== 1 ? 's' : ''}</small></div></div>`
    ).join('');
    const fRows = focus.map(c =>
      `<div class="row"><div class="pct focus">${c.accuracy}%</div>
       <div class="desc"><strong>${esc(c.chapter)}</strong><small>${c.attempts} attempt${c.attempts !== 1 ? 's' : ''}</small>
         <a class="cta" href="${appUrl}#/home">Assign practice →</a>
       </div></div>`
    ).join('');
    sectionsHtml += `<h2>${esc(subject)}</h2>
      ${strengths.length ? `<span class="pill strength">✦ Strengths (≥70%)</span>${sRows}` : ''}
      ${focus.length    ? `<span class="pill focus" style="margin-top:8px">Building up (&lt;70%)</span>${fRows}` : ''}`;
  }

  const body = `
    ${header(`${esc(childName)}'s weekly progress`, gradeBoard.replace('::', ' · '))}
    <div class="body">
      <p>This week's snapshot for <strong>${esc(childName)}</strong> — what they've mastered and where to focus next.</p>
      ${sectionsHtml || '<p style="color:#6b7280">No practice data yet this week.</p>'}
      <p style="margin-top:16px"><a class="cta" href="${appUrl}#/progress">Full progress view →</a></p>
      ${footer(appUrl)}
    </div>`;
  return layout(body, appUrl);
}

export function weeklyDigestText({ childName, gradeBoard, subjects, appUrl }) {
  let lines = [`${childName}'s weekly progress (${gradeBoard.replace('::', ' · ')})`, ''];
  for (const { subject, strengths, focus } of subjects) {
    lines.push(`== ${subject} ==`);
    if (strengths.length) { lines.push('Strengths:'); strengths.forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%`)); }
    if (focus.length)     { lines.push('Building up:'); focus.forEach(c => lines.push(`  ${c.chapter}: ${c.accuracy}%  → assign practice: ${appUrl}#/home`)); }
    lines.push('');
  }
  lines.push(`Full progress: ${appUrl}#/progress`);
  return lines.join('\n');
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
