import { jsonError, jsonNotFound, jsonBadRequest } from '../utils/response.js';

/**
 * 404 catch-all. Always JSON so API clients don't need to branch on
 * Content-Type to know the request missed.
 */
export function notFoundHandler(request) {
  return jsonNotFound(`no route for ${new URL(request.url).pathname}`);
}

/**
 * Method-not-allowed response. Sets `Allow` per RFC 7231 §6.5.5 when
 * the router can tell us which methods would have worked.
 */
export function methodNotAllowedHandler(request, ctx) {
  const allowed = (ctx && ctx.allowedMethods) || [];
  const headers = allowed.length ? { Allow: allowed.join(', ') } : undefined;
  return jsonBadRequest(`method ${request.method} not allowed here`, headers);
}

/**
 * Top-level error boundary. Converts thrown exceptions into 5xx
 * responses without leaking stack traces to clients.
 *
 * If `env.ENVIRONMENT === 'development'` (or similar) we include the
 * error message in the response to speed up debugging. Otherwise we
 * log the full error and return a generic body.
 */
export function errorBoundary(err, request, env, ctx) {
  const logger = ctx && ctx.logger;
  if (logger) {
    logger.error('unhandled exception', {
      requestId: ctx.requestId,
      url: request.url,
      method: request.method,
      err: serializeError(err),
    });
  } else {
    console.error('unhandled exception', { url: request.url, err: serializeError(err) });
  }

  const dev = env && (env.ENVIRONMENT === 'development' || env.DEV === '1');
  return jsonError(
    dev && err instanceof Error ? err.message : 'unexpected error',
    err && typeof err.status === 'number' ? err.status : 500
  );
}

function serializeError(err) {
  if (err instanceof Error) {
    return { name: err.name, message: err.message, stack: err.stack };
  }
  return { value: String(err) };
}