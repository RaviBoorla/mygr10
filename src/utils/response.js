/**
 * Response helpers.
 *
 * All `json*` helpers set Content-Type, serialize with no indentation
 * (Workers are billed per ms — JSON.stringify with an indent arg is
 * measurably slower), and allow extra headers via the last argument.
 *
 * Status semantics:
 *   - 200 OK           — successful read
 *   - 201 Created      — successful resource creation; Location header is the caller's job
 *   - 202 Accepted     — request queued for async processing
 *   - 204 No Content   — successful action with no body
 *   - 400 Bad Request  — client-side validation failure
 *   - 401 Unauthorized — missing/invalid auth
 *   - 403 Forbidden    — authenticated but not allowed
 *   - 404 Not Found
 *   - 409 Conflict     — state conflict (e.g. duplicate)
 *   - 422 Unprocessable Entity — semantically invalid input
 *   - 429 Too Many Requests — rate limit
 *   - 500 Internal Server Error — bug or upstream failure
 */

/**
 * @param {unknown} data
 * @param {number} status
 * @param {HeadersInit} [extraHeaders]
 */
export function json(data, status = 200, extraHeaders) {
  const body = safeStringify(data);
  const headers = new Headers(extraHeaders);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  return new Response(body, { status, headers });
}

export const jsonOk      = (data, headers) => json(data, 200, headers);
export const jsonCreated = (data, headers) => json(data, 201, headers);
export const jsonAccepted= (data, headers) => json(data, 202, headers);

export const jsonBadRequest      = (msg, headers) => json({ error: 'bad_request', message: msg }, 400, headers);
export const jsonUnauthorized    = (msg, headers) => json({ error: 'unauthorized', message: msg }, 401, headers);
export const jsonForbidden       = (msg, headers) => json({ error: 'forbidden',    message: msg }, 403, headers);
export const jsonNotFound        = (msg, headers) => json({ error: 'not_found',    message: msg }, 404, headers);
export const jsonConflict        = (msg, headers) => json({ error: 'conflict',     message: msg }, 409, headers);
export const jsonUnprocessable    = (msg, headers) => json({ error: 'unprocessable', message: msg }, 422, headers);
export const jsonRateLimited      = (msg, headers) => json({ error: 'rate_limited', message: msg }, 429, headers);

export function jsonError(err, status = 500, headers) {
  return json({ error: 'internal_error', message: typeof err === 'string' ? err : 'unexpected error' }, status, headers);
}

export function noContent(status = 204, headers) {
  return new Response(null, { status, headers: new Headers(headers) });
}

export function text(body, status = 200, contentType = 'text/plain; charset=utf-8', headers) {
  const h = new Headers(headers);
  h.set('Content-Type', contentType);
  return new Response(body, { status, headers: h });
}

export function redirect(location, status = 302, headers) {
  const h = new Headers(headers);
  h.set('Location', location);
  return new Response(null, { status, headers: h });
}

/**
 * Stringify with a guard against circular references. JSON.stringify
 * normally throws on cycles, which would surface as a 500 — better to
 * degrade to a placeholder so the rest of the response still ships.
 */
function safeStringify(data) {
  try {
    return JSON.stringify(data);
  } catch (err) {
    console.error('json: stringify failed', err);
    return JSON.stringify({ error: 'serialization_failed' });
  }
}