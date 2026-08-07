/**
 * Lightweight structured logger.
 *
 * Workers' `console.log` is shipped to the Workers Logs / Logpush
 * pipeline. We emit single-line JSON so downstream tools can parse
 * without regex-ing a pretty-printed object.
 *
 * Levels:
 *   debug — verbose, off by default (set env.LOG_LEVEL=debug)
 *   info  — normal lifecycle events
 *   warn  — recoverable problems
 *   error — failures the request did not survive
 *
 * Each call attaches:
 *   ts, level, msg, plus any fields passed as the second argument.
 * Request-scoped fields (requestId, route) are merged from `bindings`.
 */

const LEVELS = { debug: 10, info: 20, warn: 30, error: 40 };

export function createLogger(env) {
  const minLevel = LEVELS[(env && env.LOG_LEVEL) || 'info'] ?? LEVELS.info;
  const base = { service: (env && env.SERVICE_NAME) || 'worker' };

  function emit(level, msg, fields) {
    if (LEVELS[level] < minLevel) return;
    const entry = {
      ...base,
      ts: new Date().toISOString(),
      level,
      msg,
      ...(fields || {}),
    };
    const line = JSON.stringify(entry, replaceCircular);
    if (level === 'error') console.error(line);
    else if (level === 'warn') console.warn(line);
    else console.log(line);
  }

  return {
    debug: (msg, fields) => emit('debug', msg, fields),
    info:  (msg, fields) => emit('info',  msg, fields),
    warn:  (msg, fields) => emit('warn',  msg, fields),
    error: (msg, fields) => emit('error', msg, fields),
    child: (extra) => createChildLogger(base, extra, minLevel),
  };
}

function createChildLogger(base, extra, minLevel) {
  const merged = { ...base, ...extra };
  return {
    debug: (msg, fields) => log('debug', minLevel, merged, msg, fields),
    info:  (msg, fields) => log('info',  minLevel, merged, msg, fields),
    warn:  (msg, fields) => log('warn',  minLevel, merged, msg, fields),
    error: (msg, fields) => log('error', minLevel, merged, msg, fields),
  };
}

function log(level, minLevel, base, msg, fields) {
  if (LEVELS[level] < minLevel) return;
  const entry = { ...base, ts: new Date().toISOString(), level, msg, ...(fields || {}) };
  const line = JSON.stringify(entry, replaceCircular);
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
}

/**
 * JSON.stringify replacer that drops circular structures rather than
 * throwing. Used so a stray request object doesn't take down logging.
 */
function replaceCircular(_key, value) {
  if (value && typeof value === 'object' && value instanceof Request) {
    return { url: value.url, method: value.method };
  }
  return value;
}