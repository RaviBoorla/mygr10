// Firestore REST API wrapper for Cloudflare Workers.
// Docs: https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents

const BASE = (proj) =>
  `https://firestore.googleapis.com/v1/projects/${proj}/databases/(default)/documents`;

// ── Value serialisation / deserialisation ──────────────────────────────────

function toValue(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'boolean')        return { booleanValue: v };
  if (typeof v === 'number')         return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === 'string')         return { stringValue: v };
  if (v instanceof Date)             return { timestampValue: v.toISOString() };
  if (Array.isArray(v))              return { arrayValue: { values: v.map(toValue) } };
  if (typeof v === 'object')         return { mapValue: { fields: toFields(v) } };
  return { stringValue: String(v) };
}

function toFields(obj) {
  const f = {};
  for (const [k, v] of Object.entries(obj)) f[k] = toValue(v);
  return f;
}

function fromValue(v) {
  if (!v) return null;
  if ('nullValue'      in v) return null;
  if ('booleanValue'   in v) return v.booleanValue;
  if ('integerValue'   in v) return Number(v.integerValue);
  if ('doubleValue'    in v) return v.doubleValue;
  if ('stringValue'    in v) return v.stringValue;
  if ('timestampValue' in v) return new Date(v.timestampValue);
  if ('arrayValue'     in v) return (v.arrayValue.values || []).map(fromValue);
  if ('mapValue'       in v) return fromFields(v.mapValue.fields || {});
  return null;
}

function fromFields(fields) {
  const o = {};
  for (const [k, v] of Object.entries(fields)) o[k] = fromValue(v);
  return o;
}

function fromDoc(doc) {
  if (!doc || !doc.name) return null;
  const id = doc.name.split('/').pop();
  return { id, ...fromFields(doc.fields || {}) };
}

// ── Public API ────────────────────────────────────────────────────────────

export async function getDoc(token, projectId, path) {
  const res = await fetch(`${BASE(projectId)}/${path}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Firestore getDoc ${path}: ${res.status}`);
  return fromDoc(await res.json());
}

// Run a structured query.
// filters: [{ field, op, value }]   op = 'EQUAL' | 'LESS_THAN' | etc.
// collectionPath: path segments to parent doc ('' for root collection)
// collectionId:   collection name
export async function runQuery(token, projectId, { parent = '', collectionId, filters = [], limit = 500 }) {
  const parentPath = parent ? `${BASE(projectId)}/${parent}` : BASE(projectId);
  const where = buildWhere(filters);
  const body = {
    structuredQuery: {
      from: [{ collectionId }],
      ...(where ? { where } : {}),
      limit
    }
  };
  const res = await fetch(`${parentPath}:runQuery`, {
    method:  'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body:    JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`Firestore query ${collectionId}: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  return (Array.isArray(rows) ? rows : [])
    .filter(r => r.document)
    .map(r => fromDoc(r.document));
}

function buildWhere(filters) {
  if (!filters.length) return null;
  if (filters.length === 1) return fieldFilter(filters[0]);
  return {
    compositeFilter: {
      op: 'AND',
      filters: filters.map(fieldFilter)
    }
  };
}

function fieldFilter({ field, op, value }) {
  return {
    fieldFilter: {
      field: { fieldPath: field },
      op,
      value: toValue(value)
    }
  };
}

export async function updateDoc(token, projectId, path, fields, merge = true) {
  const masks = Object.keys(fields).map(k => `updateMask.fieldPaths=${encodeURIComponent(k)}`).join('&');
  const url   = `${BASE(projectId)}/${path}${merge ? '?' + masks : ''}`;
  const res   = await fetch(url, {
    method:  'PATCH',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body:    JSON.stringify({ fields: toFields(fields) })
  });
  if (!res.ok) throw new Error(`Firestore update ${path}: ${res.status}`);
  return fromDoc(await res.json());
}
