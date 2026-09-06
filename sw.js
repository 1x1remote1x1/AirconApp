self.addEventListener('install', e=>{
  e.waitUntil(caches.open('bau-v3').then(c=>c.addAll(['login.html','index.html','logo.png','manifest.json'])))
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))
});