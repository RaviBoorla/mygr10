import { json, text, redirect } from '../utils/response.js';

/**
 * GET /
 * Friendly landing page — explains what the Worker is and links to
 * the API. Kept intentionally minimal so it works without any env
 * bindings and so it can be cached at the edge.
 */
export function rootHandler() {
  const body = `Hello from Cloudflare Workers!

This Worker is a small JSON API. Try:
  GET  /health   liveness/readiness probe
  GET  /api/v1   API version info
  GET  /api/v1/echo?msg=hi  echo a message

Docs: see README.md
`;
  return text(body, 200, 'text/plain; charset=utf-8', {
    'Cache-Control': 'public, max-age=60',
    'X-Robots-Tag': 'noindex',
  });
}

/**
 * GET /favicon.ico
 * Returning 204 avoids the browser console noise without serving a
 * real asset (this is an API, not a website).
 */
export function faviconHandler() {
  return new Response(null, { status: 204, headers: { 'Cache-Control': 'public, max-age=86400' } });
}

/**
 * Convenience redirect used by handlers that accept a `?to=` param.
 * Validates that the destination is a same-origin URL before
 * redirecting, to prevent open-redirect abuse.
 */
export function safeRedirect(request, fallback = '/') {
  const url = new URL(request.url);
  const to = url.searchParams.get('to');
  if (to && isSameOrigin(to, url.origin)) {
    return redirect(to, 302);
  }
  return redirect(fallback, 302);
}

function isSameOrigin(target, origin) {
  try {
    const u = new URL(target, origin);
    return u.origin === origin;
  } catch {
    return false;
  }
}