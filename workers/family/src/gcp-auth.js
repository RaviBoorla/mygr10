// Google service account → short-lived OAuth2 access token
// Uses Web Crypto API (available in Cloudflare Workers runtime).
// Call getAccessToken(serviceAccountJson) — returns a Bearer token string
// valid for ~1 hour with scope=datastore.

const OAUTH_URL = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/datastore';

// b64url encode a Uint8Array or ArrayBuffer
function b64url(buf) {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

// Import a PKCS8 PEM private key for RS256 signing
async function importPrivateKey(pem) {
  const pemBody = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s+/g, '');
  const der = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0));
  return crypto.subtle.importKey(
    'pkcs8',
    der.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );
}

export async function getAccessToken(serviceAccountJson) {
  const sa = typeof serviceAccountJson === 'string'
    ? JSON.parse(serviceAccountJson)
    : serviceAccountJson;

  const now = Math.floor(Date.now() / 1000);
  const enc = new TextEncoder();

  const header  = b64url(enc.encode(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
  const payload = b64url(enc.encode(JSON.stringify({
    iss: sa.client_email,
    scope: SCOPE,
    aud: OAUTH_URL,
    iat: now,
    exp: now + 3600
  })));

  const toSign    = `${header}.${payload}`;
  const key       = await importPrivateKey(sa.private_key.replace(/\\n/g, '\n'));
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, enc.encode(toSign));
  const jwt       = `${toSign}.${b64url(signature)}`;

  const res  = await fetch(OAUTH_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    `grant_type=urn%3Aietf%3Aparams%3Aoauth2%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GCP auth failed (${res.status}): ${err}`);
  }
  const { access_token } = await res.json();
  return access_token;
}
