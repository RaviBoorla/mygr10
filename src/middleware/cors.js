/**
 * CORS middleware.
 *
 * Behavior:
 *  - Always emits the configured allowed headers on every response.
 *  - Handles preflight OPTIONS requests by short-circuiting with 204.
 *  - In strict mode (default), only the configured Origin is reflected
 *    back. In permissive mode, the request Origin is reflected.
 *
 * Configuration is read from `env.CORS_ORIGIN` (comma-separated list
 * or "*") so it can be changed per-environment without redeploying
 * code (assuming the env var is bound).
 *
 * @param {EventTarget} ctx  Unused, but kept for signature symmetry.
 */
export function cors(options = {}) {
  const allowedMethods  = options.methods  ?? 'GET, POST, PUT, PATCH, DELETE, OPTIONS';
  const allowedHeaders  = options.headers  ?? 'Content-Type, Authorization';
  const maxAge          = options.maxAge   ?? '86400';
  const credentials     = options.credentials ?? false;
  const permissive      = options.permissive   ?? false;

  return async function corsMiddleware(request, env, ctx) {
    const requestOrigin = request.headers.get('Origin');
    const configured    = (env && env.CORS_ORIGIN) || options.origin || '';

    // Decide which origin to echo back.
    let allowOrigin = '';
    if (permissive && requestOrigin) {
      allowOrigin = requestOrigin;
    } else if (configured === '*') {
      allowOrigin = '*';
    } else if (configured && requestOrigin && isOriginAllowed(requestOrigin, configured)) {
      allowOrigin = requestOrigin;
    } else if (configured) {
      allowOrigin = configured.split(',')[0].trim();
    }

    // Preflight: respond directly and stop the chain.
    if (request.method === 'OPTIONS') {
      const headers = new Headers();
      setCorsHeaders(headers, { allowOrigin, allowedMethods, allowedHeaders, maxAge, credentials });
      return new Response(null, { status: 204, headers });
    }

    ctx.corsHeaders = { allowOrigin, allowedMethods, allowedHeaders, maxAge, credentials };
    return null;
  };
}

function setCorsHeaders(headers, { allowOrigin, allowedMethods, allowedHeaders, maxAge, credentials }) {
  if (allowOrigin)         headers.set('Access-Control-Allow-Origin',  allowOrigin);
  if (allowedMethods)      headers.set('Access-Control-Allow-Methods', allowedMethods);
  if (allowedHeaders)      headers.set('Access-Control-Allow-Headers', allowedHeaders);
  if (maxAge)              headers.set('Access-Control-Max-Age',       maxAge);
  if (credentials)         headers.set('Access-Control-Allow-Credentials', 'true');
  // Vary: Origin is required when the Allow-Origin value depends on the request.
  headers.append('Vary', 'Origin');
}

function isOriginAllowed(origin, configured) {
  return configured.split(',').map(s => s.trim()).includes(origin);
}

/**
 * Apply the stored CORS headers to an outgoing response.
 * Intended to be called by the top-level fetch handler after the
 * middleware chain returns.
 *
 * @param {Response} response
 * @param {EventTarget} ctx
 * @returns {Response}
 */
export function applyCors(response, ctx) {
  if (!ctx.corsHeaders) return response;
  // Response.headers is mutable, so we can edit in place.
  setCorsHeaders(response.headers, ctx.corsHeaders);
  return response;
}