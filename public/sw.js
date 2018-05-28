self.addEventListener('install', (event) => {
    console.log('[Service worker] Installing Service worker ...', event)
});

self.addEventListener('activate', (event) => {
    console.log('[Service worker] Activating Service worker ...', event)
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetching something ...', event);
    event.respondWith(fetch(event.request));
});