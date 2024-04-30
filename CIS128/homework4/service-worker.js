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
    'images/lightgold.png',
    'images/narrowScreenshot.png',
    'images/wideScreenshot.png',
    'app.js',
    'index.html',
    'styles.css'
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