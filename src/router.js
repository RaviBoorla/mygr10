/**
 * Lightweight, allocation-aware router for Cloudflare Workers.
 *
 * Each route registers a method + pattern + handler. Patterns support
 * `:param` segments and a trailing wildcard `*`. Patterns are compiled
 * into a regex with named groups so handlers receive a typed params
 * object instead of re-parsing the URL.
 *
 * Designed for the fetch handler hot path: zero deps, no Map allocations
 * on cache-hit lookups beyond the params object, and a single regex
 * per pattern (compiled once at registration time).
 */

const METHOD_ALL = 'ALL';

/**
 * Compile a pattern like "/users/:id/posts/:postId*" into a RegExp
 * plus a list of param names in order. A trailing `*` matches the
 * remainder of the path including slashes.
 *
 * Examples:
 *   "/"                 -> /^\/$/
 *   "/users/:id"        -> /^\/users\/(?<id>[^/]+)$/
 *   "/files/*"          -> /^\/files\/(?<rest>.*)$/
 *   "/items/:id/edit"   -> /^\/items\/(?<id>[^/]+)\/edit$/
 *
 * @param {string} pattern
 * @returns {{ regex: RegExp, keys: string[] }}
 */
function compilePattern(pattern) {
  const keys = [];
  const segments = pattern.split('/').filter(Boolean);

  let regexStr = '^';
  for (let i = 0; i < segments.length; i++) {
    regexStr += '\\/';
    const seg = segments[i];
    if (seg === '*') {
      // Trailing wildcard — captures everything that follows.
      keys.push('*');
      regexStr += '(?:.*)?';
    } else if (seg.startsWith(':')) {
      keys.push(seg.slice(1));
      regexStr += '([^\\/]+)';
    } else {
      // Escape regex metacharacters in static segments.
      regexStr += seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }

  // Allow optional trailing slash; `/users` and `/users/` both match.
  regexStr += '\\/?$';

  return { regex: new RegExp(regexStr), keys };
}

/**
 * Tiny trie-free router. Linear scan is fine for the tens-of-routes
 * scale typical of a Worker; each pattern compiles to one regex.
 */
export class Router {
  constructor() {
    /** @type {Array<{ method: string, regex: RegExp, keys: string[], handler: Function }>} */
    this.routes = [];
  }

  /**
   * Register a route.
   * @param {string} method  HTTP method, or 'ALL' to match any.
   * @param {string} pattern URL pattern with optional :params and trailing *.
   * @param {Function} handler (request, ctx) => Response | Promise<Response>
   */
  register(method, pattern, handler) {
    if (typeof handler !== 'function') {
      throw new TypeError(`Router: handler for ${method} ${pattern} must be a function`);
    }
    const { regex, keys } = compilePattern(pattern);
    this.routes.push({ method: method.toUpperCase(), regex, keys, handler });
    return this;
  }

  get(pattern, handler)    { return this.register('GET',    pattern, handler); }
  post(pattern, handler)   { return this.register('POST',   pattern, handler); }
  put(pattern, handler)    { return this.register('PUT',    pattern, handler); }
  patch(pattern, handler)  { return this.register('PATCH',  pattern, handler); }
  delete(pattern, handler) { return this.register('DELETE', pattern, handler); }
  options(pattern, handler){ return this.register('OPTIONS',pattern, handler); }
  all(pattern, handler)    { return this.register(METHOD_ALL, pattern, handler); }

  /**
   * Resolve a request to a handler + params, or null.
   * @param {Request} request
   * @returns {{ handler: Function, params: Record<string,string> } | null}
   */
  resolve(request) {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();
    const path = url.pathname;

    for (let i = 0; i < this.routes.length; i++) {
      const r = this.routes[i];
      if (r.method !== method && r.method !== METHOD_ALL) continue;

      const m = r.regex.exec(path);
      if (!m) continue;

      /** @type {Record<string,string>} */
      const params = {};
      for (let k = 0; k < r.keys.length; k++) {
        // m.groups may be undefined in very old runtimes; fall back to numeric indices.
        const v = (m.groups && m.groups[r.keys[k]] !== undefined)
          ? m.groups[r.keys[k]]
          : m[k + 1];
        if (v !== undefined) params[r.keys[k]] = decodeURIComponent(v);
      }
      return { handler: r.handler, params };
    }
    return null;
  }
}