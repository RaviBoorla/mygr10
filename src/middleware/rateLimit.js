/**
 * Sliding-window rate limiter backed by Cloudflare KV.
 *
 * Bucket key:    rl:<scope>:<identifier>     e.g. rl:ip:1.2.3.4
 * Stored value:  JSON { hits: number, windowStart: epochMs }
 *
 * The window is fixed-length (`windowMs`). When a request arrives:
 *  - If the stored window has expired, we reset and count this hit.
 *  - Otherwise we increment; if it exceeds `limit`, we deny.
 *
 * KV's eventual consistency can cause two concurrent requests from
 * the same IP to briefly both see `hits = limit - 1` and both be
 * admitted. This is acceptable for coarse DoS protection; for stricter
 * limits use Durable Objects.
 *
 * Scope is typically 'ip' or a user identifier from auth.
 *
 * @param {{
 *   scope?: string,
 *   limit?: number,
 *   windowMs?: number,
 *   identifier?: (request: Request) => string | Promise<string>,
 * }} options
 */
export function rateLimit(options = {}) {
  const scope     = options.scope     ?? 'ip';
  const limit     = options.limit     ?? 60;
  const windowMs  = options.windowMs  ?? 60_000;
  const idFn      = options.identifier ?? defaultIdentifier;

  return async function rateLimitMiddleware(request, env, ctx) {
    // Allow disabling the limiter in tests by setting scope to a falsy value.
    if (!env || !env.RATE_LIMIT_KV) return null;
    if (limit <= 0) return null;

    const identifier = await idFn(request, ctx);
    if (!identifier) return null; // Anonymous allowance; auth middleware decides.

    const key = `rl:${scope}:${identifier}`;
    const now = Date.now();

    let record = { hits: 0, windowStart: now };
    try {
      const raw = await env.RATE_LIMIT_KV.get(key, 'json');
      if (raw && typeof raw.hits === 'number' && typeof raw.windowStart === 'number') {
        record = raw;
      }
    } catch (err) {
      // KV read failure should fail open: better to let traffic through
      // than to drop legitimate users because of an infra hiccup.
      console.error('rateLimit: kv read failed', err);
      return null;
    }

    if (now - record.windowStart >= windowMs) {
      record = { hits: 0, windowStart: now };
    }
    record.hits += 1;

    // Best-effort write; ignore failures (logged for observability).
    try {
      // expireTTL gives KV a hint to evict the key after the window.
      await env.RATE_LIMIT_KV.put(key, JSON.stringify(record), { expirationTtl: Math.ceil(windowMs / 1000) + 10 });
    } catch (err) {
      console.error('rateLimit: kv write failed', err);
    }

    ctx.state = ctx.state || {};
    ctx.state.rateLimit = { limit, remaining: Math.max(0, limit - record.hits), reset: record.windowStart + windowMs };

    if (record.hits > limit) {
      return new Response(JSON.stringify({ error: 'rate_limited' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(Math.ceil((record.windowStart + windowMs - now) / 1000)),
        },
      });
    }

    return null;
  };
}

/**
 * Default identifier: the request's CF-Connecting-IP, falling back to
 * the X-Forwarded-For header. Both are attacker-controlled in some
 * deployments, so treat this as a best-effort signal.
 */
async function defaultIdentifier(request) {
  return (
    request.headers.get('CF-Connecting-IP') ||
    (request.headers.get('X-Forwarded-For') || '').split(',')[0].trim() ||
    'unknown'
  );
}