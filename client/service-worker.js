workbox.core.setCacheNameDetails({
    prefix: "client",
    suffix: 'v1',
    precache: 'my-precache',
    runtime: 'my-runcache'
});

workbox.routing.registerRoute(
    ({ url }) => url.origin === 'http://localhost:3000' &&
        url.pathname.startsWith('/usuarios'),
    new workbox.strategies.CacheFirst({
        cacheName: 'api',
        method: 'GET',
        cacheableResponse: { statuses: [0, 200] }
    })
)

workbox.routing.registerNavigationRoute('/index.html');

// Web Push Notifications
let click_open_url;
self.addEventListener('push', function (event) {
    let push_Message = event.data.text();
    click_open_url = "https://google.com";
    const options = {
        body: push_Message,
        icon: '/img/icons/favicon-32x32.png',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample"
    };
    event.waitUntil(
        self.registration.showNotification("my notification", options)
    );
})

self.addEventListener('notificationclick', function (event) {
    const clickedNotification = event.notification;
    clickedNotification.close();
    if (click_open_url) {
        const promiseChain = clients.openWindow(click_open_url);
        event.waitUntil(promiseChain);
    }
})

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
