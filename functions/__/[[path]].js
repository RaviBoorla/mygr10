// Proxy all /__/* to rise-511c6.firebaseapp.com so the Firebase auth handler
// page runs on rise.strat101.com (same origin as the app). This lets
// signInWithRedirect work on mobile Chrome without cross-origin storage
// partitioning blocking the redirect state.
export async function onRequest({ request, params }) {
  const url = new URL(request.url);
  const segments = params.path
    ? (Array.isArray(params.path) ? params.path : [params.path])
    : [];
  const target = `https://rise-511c6.firebaseapp.com/__/${segments.join('/')}${url.search}`;
  const init = { method: request.method, headers: request.headers };
  if (!['GET', 'HEAD'].includes(request.method)) init.body = request.body;
  return fetch(new Request(target, init));
}
