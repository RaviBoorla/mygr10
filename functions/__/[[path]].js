/**
 * Cloudflare Pages Function — reverse-proxies Firebase Auth's helper pages
 * (/__/auth/handler, /__/auth/iframe, etc.) from our own domain.
 *
 * Firebase's signInWithRedirect/signInWithPopup flow relies on a hidden
 * helper page served from `authDomain` to relay the OAuth result back to
 * the app. When authDomain (rise-511c6.firebaseapp.com) is a different
 * origin from the app (rise.strat101.com), that relay depends on
 * third-party storage access — which Incognito mode, and increasingly
 * regular browsers, block. That silently breaks sign-in with
 * auth/internal-error right after the user finishes authenticating with
 * Google.
 *
 * Proxying /__/* to the authDomain and pointing FIREBASE_CONFIG.authDomain
 * at our own domain (see public/auth.js) makes the whole flow same-origin,
 * removing the third-party storage dependency entirely.
 */
const FIREBASE_AUTH_DOMAIN = 'rise-511c6.firebaseapp.com';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const target = new URL(url.pathname + url.search, `https://${FIREBASE_AUTH_DOMAIN}`);

  const proxied = new Request(target.toString(), request);
  // Manual redirect: the initial hop to accounts.google.com (and the return
  // trip) must be a real top-level browser navigation, not something this
  // function follows and swallows server-side.
  const resp = await fetch(proxied, { redirect: 'manual' });

  const headers = new Headers(resp.headers);
  // Firebase's own security headers are for its domain; ours (in
  // public/_headers) govern responses on rise.strat101.com.
  headers.delete('content-security-policy');
  headers.delete('x-frame-options');

  return new Response(resp.body, { status: resp.status, statusText: resp.statusText, headers });
}
