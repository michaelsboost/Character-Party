// Service worker code
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

const cacheName = 'characterparty-cache';

workbox.routing.registerRoute(
({ request }) => request.destination === 'script' ||
           request.destination === 'style' ||
           request.destination === 'document' ||
           request.destination === 'image' ||
           request.destination === 'font' ||
           request.destination === 'audio' ||
           request.destination === 'video',
new CacheFirst({
cacheName: cacheName,
plugins: [
// Any additional plugins can be added here
],
})
);