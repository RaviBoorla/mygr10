// Minimal service worker: makes Rise installable and lets it work offline
// once a page/asset has been visited before. Network-first so content
// updates (new questions, app.js/style.css version bumps) are picked up
// immediately whenever the device is online; cache is only a fallback.
const CACHE = 'rise-shell-v13';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => clients.forEach(c => c.postMessage({ type: 'SW_UPDATED' })))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Only handle same-origin requests — leave cross-origin CDN/font/Google-API
  // calls (and chrome-extension:// requests from browser extensions) to the
  // browser's normal fetch, which is checked against the correct CSP
  // directive (script-src/style-src/font-src) instead of connect-src.
  if (new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
