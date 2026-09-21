// Verify a Firebase ID token (RS256 JWT) using Google's JWK endpoint.
// Returns { uid, email } on success, throws on failure.
// Keys are cached by Cloudflare's fetch cache for 1 hour.

const JWK_URL = 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';

export async function verifyIdToken(token, projectId) {
  if (!token) throw new Error('No token');
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('Malformed token');

  const [headerB64, payloadB64, sigB64] = parts;
  const header  = JSON.parse(atob(b64url(headerB64)));
  const payload = JSON.parse(atob(b64url(payloadB64)));

  const now = Math.floor(Date.now() / 1000);
  if (!payload.sub)                                                    throw new Error('Missing sub');
  if (payload.exp < now)                                               throw new Error('Token expired');
  if (payload.iss !== `https://securetoken.google.com/${projectId}`)  throw new Error('Bad issuer');
  if (payload.aud !== projectId)                                       throw new Error('Bad audience');

  const resp = await fetch(JWK_URL, { cf: { cacheTtl: 3600 } });
  if (!resp.ok) throw new Error('Could not fetch signing keys');
  const { keys } = await resp.json();
  const jwk = keys.find(k => k.kid === header.kid);
  if (!jwk) throw new Error('Unknown key id');

  const cryptoKey = await crypto.subtle.importKey(
    'jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']
  );
  const valid = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    decodeB64url(sigB64),
    new TextEncoder().encode(`${headerB64}.${payloadB64}`)
  );
  if (!valid) throw new Error('Invalid signature');

  return { uid: payload.sub, email: payload.email || null };
}

function b64url(s) {
  return s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '=');
}

function decodeB64url(s) {
  const bin = atob(b64url(s));
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf.buffer;
}
