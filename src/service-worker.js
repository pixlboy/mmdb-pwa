//This file is not in use

// const staticCacheName = `site-static-${new Date().getTime()}`;   //static cache name
// const dynamicCacheName = `site-dynamic-${new Date().getTime()}`;  //dynamic cache name
// const assets = []; //Items to be cached
// const MAX_CACHE_SIZE = 20;

// // cache size limit function
// const limitCacheSize = (name) => {
//     caches.open(name).then(cache => {
//         // cache.keys is sync function, returns a promise
//         cache.keys().then(keys => {
//             // check if items in cache are exceeding a number
//             if(keys.length > MAX_CACHE_SIZE){
//                 // remove the oldest entry
//                 // call it recursively until all exceeding items are deleted
//                 cache.delete(keys[0]).then(limitCacheSize(name));
//             }
//         });
//     });
// };

// // install event - will occur only once unless the file contents do not change
// self.addEventListener('install', evt => {
//     console.log('service worker installed');
//     // Accessing cache is async task, 
//     // so need to use waitUntil method here 
//     // to make sure everything gets cached before sw stops 
//     evt.waitUntil(
//         // caches.open method returns a promise 
//         caches.open(staticCacheName).then((cache) => {
//             console.log('Caching static assets');
//             //add all assets at once
//             cache.addAll(assets);
//         })
//     );
// });

// // activate event
// self.addEventListener('activate', evt => {
//     console.log('service worker activated');
//     // Remove the caches not in use (will not remove dynamic cache)
//     evt.waitUntil(
//         caches.keys().then((keys) => {
//             return Promise.all(keys
//                 .filter(key => key !== staticCacheName && key !== dynamicCacheName)
//                 .map(key => caches.delete(key))
//             );
//         })
//     )
// });

// // fetch event - occurs for every request made to server (html, css ajax, js, doc, fonts etc)
// self.addEventListener('fetch', evt => {
//     if(evt.request.url.indexOf('firestore.googleapis.com') === -1){

//         // intercept all requests 
//         // return object(s) if found in cache (static or dynamic)
//         // if not found, forward the request to server
//         evt.respondWith(
//             caches.match(evt.request).then((cacheRes) => {
//                 // if asset is found in cache, return
//                 // if asset is not found in cache, forward the request to server
//                 // cache the returned asset in dynamic cache
//                 return cacheRes || fetch(evt.request).then(fetchRes => {
//                     return caches.open(dynamicCacheName).then(cache => {
//                         // cache.put updates an entry if not existing
//                         if(evt.request.url.indexOf('https://mmdb-store.s3.ap-south-1.amazonaws.com') < 0){
//                             cache.put(evt.request.url, fetchRes.clone());
//                             // check cached items size
//                             limitCacheSize(dynamicCacheName);
//                         } 
//                         return fetchRes;
//                     })
//                 });
//             }).catch(() => {
//                 // in case user is offline and makes a request 
//                 // for a resource that is not in cache
//                 // serve them the fallback page (graceful degradation)
//                 if(evt.request.url.indexOf('.html') > -1){
//                     return caches.match('/');
//                 }
//             })
//         );
//     }
// });