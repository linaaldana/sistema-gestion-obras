workbox.core.setCacheNameDetails({
    prefix: "client",
    suffix: 'v1',
    precache: 'my-precache',
    runtime: 'my-runcache'
});

workbox.routing.registerRoute(
    ({ url }) => url.origin === 'http://localhost:3000'&&
    url.pathname.startsWith('/usuarios'),
    new workbox.strategies.CacheFirst({
        cacheName: 'api',
        method: 'GET',
        cacheableResponse: { statuses: [0, 200] }
    })
)

workbox.routing.registerNavigationRoute('/index.html');


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
