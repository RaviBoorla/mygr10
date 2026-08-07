/**
 * Cloudflare Workers entry point.
 *
 * Responsibilities of this file:
 *  1. Build the router and apply middleware chains per route group.
 *  2. Provide a single `fetch` handler that resolves the route,
 *     runs middleware, calls the handler, and applies cross-cutting
 *     concerns (CORS headers, request logging, error boundary).
 *  3. Export `scheduled` for cron triggers, if the Worker has any.
 *
 * Everything below is intentionally framework-light: no npm
 * dependencies, no transitive supply-chain risk, and the entire
 * runtime fits in a single cold start budget.
 */

import { Router } from './router.js';
import { cors, applyCors } from './middleware/cors.js';
import { auth }       from './middleware/auth.js';
import { rateLimit }  from './middleware/rateLimit.js';
import { createLogger } from './utils/logger.js';

import { rootHandler, faviconHandler } from './handlers/root.js';
import { healthHandler }               from './handlers/health.js';
import {
  getBoards,
  getSubjects,
  getChapters,
  getQuestions,
  submitTest,
} from './handlers/api.js';
import {
  notFoundHandler,
  methodNotAllowedHandler,
  errorBoundary,
} from './handlers/errors.js';

// ---------------------------------------------------------------------------
// Router setup
// ---------------------------------------------------------------------------

const router = new Router();

// Public routes — no auth, generous caching where safe.
router.get ('/',                        rootHandler);
router.get ('/favicon.ico',             faviconHandler);
router.get ('/health',                  healthHandler);

// Mygr10 API
router.get ('/api/v1/boards',           getBoards);
router.get ('/api/v1/boards/:board/subjects', getSubjects);
router.get ('/api/v1/boards/:board/subjects/:subject/chapters', getChapters);
router.get ('/api/v1/boards/:board/subjects/:subject/chapters/:chapter/questions', getQuestions);
router.post('/api/v1/boards/:board/subjects/:subject/chapters/:chapter/submit', submitTest);

// ---------------------------------------------------------------------------
// Middleware chains
// ---------------------------------------------------------------------------
//
// Each chain returns either a Response (short-circuit) or null to
// continue. Order matters: CORS first (so even rejections carry the
// right headers), then auth/rateLimit for protected routes.

const baseMw = [cors(), rateLimit()];

const publicMw     = [...baseMw];
const protectedMw  = [...baseMw, auth()];

// ---------------------------------------------------------------------------
// Fetch handler
// ---------------------------------------------------------------------------

export default {
  /**
   * @param {Request} request
   * @param {Record<string, unknown>} env
   * @param {ExecutionContext} ctx
   */
  async fetch(request, env, ctx) {
    // Request-scoped bag. Stored on ctx so middleware can pass data
    // downstream without coupling.
    ctx.state     = ctx.state     || {};
    ctx.requestId = ctx.requestId || crypto.randomUUID();
    ctx.logger    = createLogger(env).child({ requestId: ctx.requestId });

    const log = ctx.logger;
    log.debug('request received', {
      method: request.method,
      url: request.url,
      cf: request.cf ? { country: request.cf.country, colo: request.cf.colo } : undefined,
    });

    // Pick the middleware chain based on whether the route needs auth.
    // Heuristic: anything under /api/v1/items write methods needs auth.
    // A future iteration could move this decision into the router.
    const url    = new URL(request.url);
    const needsAuth = false; // Mygr10 v1 is public for now
    const chain = needsAuth ? protectedMw : publicMw;

    try {
      // Run middleware first. Any short-circuit Response wins.
      for (const mw of chain) {
        const early = await mw(request, env, ctx);
        if (early) return finalize(early, request, ctx);
      }

      // Resolve the route.
      const resolved = router.resolve(request);

      if (!resolved) {
        // Try to give an Allow header if other methods exist for this path.
        const allowedMethods = collectAllowedMethods(router, request.method, url.pathname);
        if (allowedMethods.length) {
          ctx.allowedMethods = allowedMethods;
          return finalize(methodNotAllowedHandler(request, ctx), request, ctx);
        }
        return finalize(notFoundHandler(request), request, ctx);
      }

      const { handler, params } = resolved;
      ctx.params = params;
      const response = await handler(request, { ...ctx, params }, env, ctx);
      return finalize(response, request, ctx);
    } catch (err) {
      return finalize(errorBoundary(err, request, env, ctx), request, ctx);
    }
  },

  /**
   * Optional cron handler. Stubbed so wrangler doesn't complain if a
   * schedule is added later; left as a no-op for now.
   */
  async scheduled(event, env, ctx) {
    const log = createLogger(env).child({ trigger: 'scheduled', cron: event.cron });
    log.info('cron tick', { scheduledTime: event.scheduledTime });
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Apply cross-cutting response concerns: CORS headers, security
 * headers, request logging, and a response time.
 */
function finalize(response, request, ctx) {
  applyCors(response, ctx);
  applySecurityHeaders(response);

  if (ctx.logger) {
    ctx.logger.info('response sent', {
      method: request.method,
      url: request.url,
      status: response.status,
    });
  }
  return response;
}

/**
 * Conservative baseline. Tighten per-route as needed.
 *  - X-Content-Type-Options: nosniff blocks MIME-sniffing attacks.
 *  - Referrer-Policy: same-origin limits referrer leakage.
 *  - X-Frame-Options: DENY — APIs should never be framed.
 *  - Strict-Transport-Security only matters when behind HTTPS, which
 *    Cloudflare always provides, so we always set it.
 */
function applySecurityHeaders(response) {
  const h = response.headers;
  if (!h.has('X-Content-Type-Options')) h.set('X-Content-Type-Options', 'nosniff');
  if (!h.has('Referrer-Policy'))        h.set('Referrer-Policy', 'no-referrer');
  if (!h.has('X-Frame-Options'))        h.set('X-Frame-Options', 'DENY');
  if (!h.has('Strict-Transport-Security')) {
    h.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
}

/**
 * Walk the router to find which methods *would* match the given path
 * (other than `skipMethod`). Used to populate the `Allow` header on
 * 405 responses.
 */
function collectAllowedMethods(router, skipMethod, path) {
  const methods = new Set();
  for (const route of router.routes) {
    if (route.method === skipMethod.toUpperCase()) continue;
    if (route.regex.test(path)) methods.add(route.method);
  }
  return Array.from(methods).sort();
}