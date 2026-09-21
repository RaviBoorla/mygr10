// Rise Family Worker — nightly/weekly email digests + transactional sends
// Spec: docs/family.md (Phase 4). Reads Firestore via REST, sends via Resend.
//
// Routes (HTTP):
//   POST /family/notify-invite              — invite notification email
//   POST /family/notify-assignment-complete — assignment-completed notification
//
// Cron triggers (wrangler.toml):
//   "30 15 * * *"   Nightly  21:00 IST — per-guardian daily digest
//   "30 15 * * 0"   Weekly Sunday 21:00 IST — weekly summary

import { getAccessToken } from './gcp-auth.js';
import { verifyIdToken } from './firebase-auth.js';
import { getDoc, runQuery } from './firestore.js';
import {
  sendEmail,
  inviteEmailHtml, inviteEmailText,
  assignmentCompleteEmailHtml, assignmentCompleteEmailText,
  nightlyDigestHtml, nightlyDigestText,
  weeklyDigestHtml, weeklyDigestText
} from './email.js';

const STRONG = 70; // accuracy threshold for "strength" vs "focus area"

// ── Entry point ────────────────────────────────────────────────────────────

export default {
  // HTTP requests
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') return corsResponse(env);

    if (request.method === 'POST') {
      if (url.pathname === '/family/notify-invite') {
        return withCors(env, await handleInviteNotify(request, env));
      }
      if (url.pathname === '/family/notify-assignment-complete') {
        return withCors(env, await handleAssignmentComplete(request, env));
      }
    }

    return withCors(env, new Response('Not found', { status: 404 }));
  },

  // Cron triggers
  async scheduled(event, env, ctx) {
    const isWeekly = event.cron === '30 15 * * 0';
    try {
      const token = await getAccessToken(env.FIREBASE_SERVICE_ACCOUNT);
      if (isWeekly) {
        await runWeeklySummary(token, env);
      } else {
        await runNightlyDigest(token, env);
      }
    } catch (err) {
      console.error('[family-worker] cron error:', err);
    }
  }
};

// ── HTTP: invite notification ──────────────────────────────────────────────
// Body: { fromName, fromEmail, toEmail, toRole }

async function handleInviteNotify(request, env) {
  const authErr = await requireAuth(request, env);
  if (authErr) return authErr;

  let body;
  try { body = await request.json(); } catch (_) { return json({ ok: false, msg: 'Invalid JSON' }, 400); }

  const { fromName, fromEmail, toEmail, toRole } = body;
  if (!toEmail || !toRole) return json({ ok: false, msg: 'Missing required fields' }, 400);

  try {
    await sendEmail(env.RESEND_API_KEY, {
      from:    env.RESEND_FROM_EMAIL,
      to:      toEmail,
      subject: `${fromName || fromEmail} invited you to link Rise accounts`,
      html:    inviteEmailHtml({ fromName: fromName || fromEmail, fromEmail, toRole, appUrl: env.APP_URL }),
      text:    inviteEmailText({ fromName: fromName || fromEmail, fromEmail, toRole, appUrl: env.APP_URL })
    });
    return json({ ok: true });
  } catch (err) {
    console.error('[family-worker] invite notify error:', err);
    return json({ ok: false, msg: 'Email send failed' }, 500);
  }
}

// ── HTTP: assignment completed notification ────────────────────────────────
// Body: { guardianEmail, childName, subject, chapter, score, total, accuracy }

async function handleAssignmentComplete(request, env) {
  const authErr = await requireAuth(request, env);
  if (authErr) return authErr;

  let body;
  try { body = await request.json(); } catch (_) { return json({ ok: false, msg: 'Invalid JSON' }, 400); }

  const { guardianEmail, childName, subject, chapter, score, total, accuracy } = body;
  if (!guardianEmail || !childName || !subject) return json({ ok: false, msg: 'Missing required fields' }, 400);

  try {
    await sendEmail(env.RESEND_API_KEY, {
      from:    env.RESEND_FROM_EMAIL,
      to:      guardianEmail,
      subject: `${childName} completed their assignment — ${accuracy}%`,
      html:    assignmentCompleteEmailHtml({ childName, subject, chapter, score, total, accuracy, appUrl: env.APP_URL }),
      text:    assignmentCompleteEmailText({ childName, subject, chapter, score, total, accuracy, appUrl: env.APP_URL })
    });
    return json({ ok: true });
  } catch (err) {
    console.error('[family-worker] assignment notify error:', err);
    return json({ ok: false, msg: 'Email send failed' }, 500);
  }
}

// ── Cron: nightly digest ───────────────────────────────────────────────────
// For every active familyLinks edge with digestOptIn.email=true, read the
// child's familySummary. If updatedAt was today (UTC), the child practiced —
// send the digest. If not, skip (docs/family.md constraint 5: no guilt email).

async function runNightlyDigest(token, env) {
  const links = await runQuery(token, env.FIREBASE_PROJECT_ID, {
    collectionId: 'familyLinks',
    filters: [
      { field: 'status',             op: 'EQUAL', value: 'active' },
      { field: 'digestOptIn.email',  op: 'EQUAL', value: true }
    ]
  });

  console.log(`[nightly] ${links.length} eligible links`);
  let sent = 0, skipped = 0;

  for (const link of links) {
    try {
      const summary = await getDoc(token, env.FIREBASE_PROJECT_ID,
        `users/${link.childUid}/sync/familySummary`);
      if (!summary || !summary.updatedAt) { skipped++; continue; }

      // Only send if child practiced today (UTC)
      const todayUTC = new Date().toISOString().slice(0, 10);
      const updatedDay = (summary.updatedAt instanceof Date
        ? summary.updatedAt
        : new Date(summary.updatedAt)
      ).toISOString().slice(0, 10);
      if (updatedDay !== todayUTC) { skipped++; continue; }

      const gradeBoard = link.gradeBoard || Object.keys(summary.byGradeBoard || {})[0] || '';
      const chapters   = (summary.byGradeBoard?.[gradeBoard]) || [];
      if (!chapters.length) { skipped++; continue; }

      const subjects = aggregateBySubject(chapters);
      const toEmail  = link.guardianContact?.email || link.guardianEmail;
      const childName = link.childEmail.split('@')[0];

      await sendEmail(env.RESEND_API_KEY, {
        from:    env.RESEND_FROM_EMAIL,
        to:      toEmail,
        subject: `${childName} practiced today — here's the summary`,
        html:    nightlyDigestHtml({ childName, gradeBoard, subjects, appUrl: env.APP_URL }),
        text:    nightlyDigestText({ childName, gradeBoard, subjects, appUrl: env.APP_URL })
      });
      sent++;
    } catch (err) {
      console.error(`[nightly] link ${link.id} error:`, err);
    }
  }

  console.log(`[nightly] done — sent ${sent}, skipped ${skipped}`);
}

// ── Cron: weekly summary ───────────────────────────────────────────────────
// Same link query, but always sends (regardless of today's activity) as long
// as there is ANY chapter-level practice data to show.

async function runWeeklySummary(token, env) {
  const links = await runQuery(token, env.FIREBASE_PROJECT_ID, {
    collectionId: 'familyLinks',
    filters: [
      { field: 'status',            op: 'EQUAL', value: 'active' },
      { field: 'digestOptIn.email', op: 'EQUAL', value: true }
    ]
  });

  console.log(`[weekly] ${links.length} eligible links`);
  let sent = 0, skipped = 0;

  for (const link of links) {
    try {
      const summary = await getDoc(token, env.FIREBASE_PROJECT_ID,
        `users/${link.childUid}/sync/familySummary`);
      if (!summary) { skipped++; continue; }

      const gradeBoard = link.gradeBoard || Object.keys(summary.byGradeBoard || {})[0] || '';
      const chapters   = (summary.byGradeBoard?.[gradeBoard]) || [];
      if (!chapters.length) { skipped++; continue; }

      const subjects  = aggregateBySubject(chapters);
      const toEmail   = link.guardianContact?.email || link.guardianEmail;
      const childName = link.childEmail.split('@')[0];

      await sendEmail(env.RESEND_API_KEY, {
        from:    env.RESEND_FROM_EMAIL,
        to:      toEmail,
        subject: `${childName}'s weekly progress — strengths & focus areas`,
        html:    weeklyDigestHtml({ childName, gradeBoard, subjects, appUrl: env.APP_URL }),
        text:    weeklyDigestText({ childName, gradeBoard, subjects, appUrl: env.APP_URL })
      });
      sent++;
    } catch (err) {
      console.error(`[weekly] link ${link.id} error:`, err);
    }
  }

  console.log(`[weekly] done — sent ${sent}, skipped ${skipped}`);
}

// ── Auth helper ────────────────────────────────────────────────────────────

async function requireAuth(request, env) {
  const authHeader = request.headers.get('Authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  try {
    await verifyIdToken(token, env.FIREBASE_PROJECT_ID);
    return null; // OK
  } catch (err) {
    console.warn('[family-worker] auth failed:', err.message);
    return withCors(env, json({ ok: false, msg: 'Unauthorized' }, 401));
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────

// Group chapter rows by subject, split into strengths (≥70%) and focus (<70%),
// strengths sorted desc by accuracy, focus sorted asc (hardest first).
function aggregateBySubject(chapters) {
  const bySubject = {};
  for (const c of chapters) {
    (bySubject[c.subject] || (bySubject[c.subject] = [])).push(c);
  }
  return Object.entries(bySubject).map(([subject, chs]) => ({
    subject,
    strengths: chs.filter(c => c.accuracy >= STRONG).sort((a, b) => b.accuracy - a.accuracy),
    focus:     chs.filter(c => c.accuracy <  STRONG).sort((a, b) => a.accuracy - b.accuracy)
  }));
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function corsResponse(env) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(env)
  });
}

function corsHeaders(env) {
  const origin = env.CORS_ORIGIN || '*';
  return {
    'Access-Control-Allow-Origin':  origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age':       '86400'
  };
}

function withCors(env, response) {
  const h = corsHeaders(env);
  const r = new Response(response.body, response);
  for (const [k, v] of Object.entries(h)) r.headers.set(k, v);
  return r;
}
