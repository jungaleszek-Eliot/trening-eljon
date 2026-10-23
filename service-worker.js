const CACHE_NAME = 'eljon-trening-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icon-512.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Zwraca wersję z pamięci telefonu (offline) lub pobiera z internetu
      return response || fetch(event.request);
    })
  );
});