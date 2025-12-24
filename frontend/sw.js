const CACHE_NAME = 'timesheet-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => 
    cache.addAll(['/']).catch(console.error)
  ));
});
