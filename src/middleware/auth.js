/**
 * Bearer-token authentication middleware.
 *
 * Reads `Authorization: Bearer <token>` and compares against
 * `env.AUTH_TOKEN` (or `options.token` for tests). On success the
 * authenticated principal is attached to `ctx.state.user`.
 *
 * On failure, returns a 401 with a `WWW-Authenticate` header per RFC 6750.
 *
 * For multi-tenant or JWT-based auth, swap this implementation out —
 * the rest of the system only depends on `ctx.state.user`.
 *
 * @param {{ token?: string, realm?: string }} options
 */
export function auth(options = {}) {
  const realm = options.realm ?? 'api';

  return async function authMiddleware(request, env, ctx) {
    const expected = (env && env.AUTH_TOKEN) || options.token;
    if (!expected) {
      // Misconfiguration: fail closed.
      return new Response(JSON.stringify({ error: 'auth_not_configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'WWW-Authenticate': `Bearer realm="${realm}"` },
      });
    }

    const header = request.headers.get('Authorization') || '';
    const m = /^Bearer\s+(.+)$/i.exec(header);
    if (!m) {
      return unauthorized(`Bearer realm="${realm}", error="invalid_request"`);
    }

    // Constant-time comparison: prevents timing-based token leakage.
    if (!timingSafeEqual(m[1], expected)) {
      return unauthorized(`Bearer realm="${realm}", error="invalid_token"`);
    }

    ctx.state = ctx.state || {};
    ctx.state.user = { token: m[1] };
    return null;
  };
}

function unauthorized(challenge) {
  return new Response(JSON.stringify({ error: 'unauthorized' }), {
    status: 401,
    headers: { 'Content-Type': 'application/json', 'WWW-Authenticate': challenge },
  });
}

/**
 * Constant-time string comparison. Both inputs are treated as UTF-8;
 * lengths are leaked (necessary to avoid early-exit timing oracles),
 * but content differences are not.
 */
function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const len = Math.max(a.length, b.length);
  let diff = a.length ^ b.length;
  for (let i = 0; i < len; i++) {
    const ca = i < a.length ? a.charCodeAt(i) : 0;
    const cb = i < b.length ? b.charCodeAt(i) : 0;
    diff |= ca ^ cb;
  }
  return diff === 0;
}