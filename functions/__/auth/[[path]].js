// Reverse-proxy Firebase auth handler so authDomain can be same-origin
// (rise.strat101.com). Required for signInWithRedirect on mobile Chrome,
// which blocks cross-origin sessionStorage access (storage partitioning).
export async function onRequest({ request, params }) {
  const url = new URL(request.url);
  const segments = params.path
    ? (Array.isArray(params.path) ? params.path : [params.path])
    : [];
  const target = `https://rise-511c6.firebaseapp.com/__/auth/${segments.join('/')}${url.search}`;
  const init = {
    method: request.method,
    headers: request.headers,
  };
  if (!['GET', 'HEAD'].includes(request.method)) init.body = request.body;
  return fetch(new Request(target, init));
}
