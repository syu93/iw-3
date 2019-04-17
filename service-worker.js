/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.2.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.2.0"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "data/spacex.json",
    "revision": "2150fc7de9da187b7b557ec2e32a8ed6"
  },
  {
    "url": "index.html",
    "revision": "3be144e97c34c44c1d70821ae1982a93"
  },
  {
    "url": "js/app.js",
    "revision": "1674850a73cfec995036c39246cc0a7b"
  },
  {
    "url": "js/components/card/card.css",
    "revision": "b03c1da829f0d2a547c180867fb67c47"
  },
  {
    "url": "js/components/card/card.js",
    "revision": "f1fc05b38fd7c03081887fdc3a0d427a"
  },
  {
    "url": "styles/main.css",
    "revision": "bc67d9052d6441ba583711ffd896e84b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images-cache", plugins: [] }), 'GET');
