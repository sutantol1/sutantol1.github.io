var CACHE_VERSION = 'myapp-v1';
var CACHE_FILES = [
    'images/offline.png',
    'images/icon-72.png',
    'images/icon-128.png',
    'images/icon-144.png',
    'images/icon-172.png',
    'images/icon-196.png',
    'images/icon-512.png',
    'images/lightblue.jpg',
    'images/lightgold.jpg',
    'images/narrowScreenshot.png',
    'images/wideScreenshot.png',
    'app.js',
    'index.html',
    'style.css'
];

self.addEventListener('install', event => {
    console.log('SW installed');
    event.waitUntil(
        caches
        .open(CACHE_VERSION)
        .then(cache => {
            console.log('SW caching files');
            cache.addAll(CACHE_FILES)
        })
        .then(() => self.skipWaiting())
    );
});

/* to check the error 
self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_VERSION).then(async (cache) => {
      let ok;
  
      console.log('ServiceWorker: Caching files:', CACHE_FILES.length, CACHE_FILES);
      try {
        ok = await cache.addAll(CACHE_FILES);
      } catch (err) {
        console.error('sw: cache.addAll');
        for (let i of CACHE_FILES) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.warn('sw: cache.add',i);
          }
        }
      }
      return ok;
    }));
  
    console.log('ServiceWorker installed');
  });
*/


self.addEventListener('activate', event => {
    console.log('SW activated');
    event.waitUntil(
        caches.keys().then(keyNames => {
            return Promise.all(
                keyNames.map(key => {
                    if(key !== CACHE_VERSION) {
                        console.log('SW clearing old caches');
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('SW fetching');
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});