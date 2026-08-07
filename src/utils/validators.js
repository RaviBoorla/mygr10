/**
 * Lightweight input validators.
 *
 * Each helper returns either the parsed/validated value, or throws a
 * `ValidationError` carrying a user-safe message. Handlers should
 * catch and convert via `validationErrorResponse()` from
 * `./response.js`. Throwing keeps the call sites terse and avoids
 * deeply nested if-checks.
 */

export class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name    = 'ValidationError';
    this.field   = field;
    this.status  = 400;
  }
}

/**
 * Assert that a value is a non-empty string.
 * @param {unknown} value
 * @param {string} field
 * @param {{ min?: number, max?: number }} [opts]
 */
export function requireString(value, field, opts = {}) {
  if (typeof value !== 'string') {
    throw new ValidationError(`${field} must be a string`, field);
  }
  const len = value.length;
  if (opts.min !== undefined && len < opts.min) {
    throw new ValidationError(`${field} must be at least ${opts.min} characters`, field);
  }
  if (opts.max !== undefined && len > opts.max) {
    throw new ValidationError(`${field} must be at most ${opts.max} characters`, field);
  }
  return value;
}

/**
 * Assert that a value is a finite number in [min, max].
 */
export function requireNumber(value, field, opts = {}) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new ValidationError(`${field} must be a number`, field);
  }
  if (opts.min !== undefined && value < opts.min) {
    throw new ValidationError(`${field} must be >= ${opts.min}`, field);
  }
  if (opts.max !== undefined && value > opts.max) {
    throw new ValidationError(`${field} must be <= ${opts.max}`, field);
  }
  return value;
}

/**
 * Assert that a value is an integer.
 */
export function requireInteger(value, field, opts = {}) {
  const n = requireNumber(value, field, opts);
  if (!Number.isInteger(n)) {
    throw new ValidationError(`${field} must be an integer`, field);
  }
  return n;
}

/**
 * Assert that a value is an object (and not an array or null).
 */
export function requireObject(value, field) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new ValidationError(`${field} must be an object`, field);
  }
  return value;
}

/**
 * Assert that a value is one of the allowed enum strings.
 */
export function requireEnum(value, field, allowed) {
  if (typeof value !== 'string' || !allowed.includes(value)) {
    throw new ValidationError(`${field} must be one of: ${allowed.join(', ')}`, field);
  }
  return value;
}

/**
 * Assert that a value is a string matching a basic email pattern.
 * Intentionally permissive — full RFC 5322 is impractical; defer to
 * the transactional email step for true validation.
 */
export function requireEmail(value, field) {
  requireString(value, field, { min: 3, max: 320 });
  // eslint-disable-next-line no-useless-escape
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    throw new ValidationError(`${field} must be a valid email`, field);
  }
  return value.toLowerCase();
}

/**
 * Safely parse a JSON request body. Returns the parsed value or throws
 * a ValidationError with a 400-suitable message.
 */
export async function readJson(request, { maxBytes = 1024 * 64 } = {}) {
  const len = request.headers.get('Content-Length');
  if (len && Number(len) > maxBytes) {
    throw new ValidationError(`request body exceeds ${maxBytes} bytes`, 'body');
  }
  const text = await request.text();
  if (text.length > maxBytes) {
    throw new ValidationError(`request body exceeds ${maxBytes} bytes`, 'body');
  }
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    throw new ValidationError('request body is not valid JSON', 'body');
  }
}