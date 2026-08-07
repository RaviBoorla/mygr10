import { jsonOk } from '../utils/response.js';

/**
 * GET /health
 *
 * Liveness + readiness probe. Always returns 200 unless something is
 * catastrophically wrong (which the platform will surface as a 5xx
 * upstream anyway). We deliberately do NOT call KV/Durable Objects
 * here — health checks run frequently and should not contend with
 * real traffic.
 *
 * Response body includes the worker's region/version when available,
 * which is useful for debugging routing issues.
 */
export function healthHandler(request, env, ctx) {
  const url = new URL(request.url);
  return jsonOk({
    status: 'ok',
    service: (env && env.SERVICE_NAME) || 'worker',
    version: (env && env.VERSION) || 'dev',
    time: new Date().toISOString(),
    requestId: ctx && ctx.requestId,
    region: request.cf && request.cf.region,
    colo:   request.cf && request.cf.colo,
    path:   url.pathname,
  }, { 'Cache-Control': 'no-store' });
}