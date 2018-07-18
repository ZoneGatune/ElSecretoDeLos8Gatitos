importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.925b5569e9bfb6453183.js",
    "revision": "d29a7d00d609438867418e60015f5f6d"
  },
  {
    "url": "/_nuxt/common.64d112ff5822d6cc3df5.js",
    "revision": "e69196ac158979dee9af5d03e7a13cdc"
  },
  {
    "url": "/_nuxt/common.6ef759542907d5313af2ae815ec0ffe5.css",
    "revision": "ce4474b064675973b169141a5323ea3d"
  },
  {
    "url": "/_nuxt/layouts/default.ceb6994a64e5db345cb1.js",
    "revision": "5a7905990d182970fb81b8c3fb80d416"
  },
  {
    "url": "/_nuxt/manifest.a5288988e49ff5dc9d45.js",
    "revision": "723ef49ca600b578261bbc7efcda23d7"
  },
  {
    "url": "/_nuxt/pages/about.e5418cf2f2a0d5273002.js",
    "revision": "0e8b3da61e7c93357acb3ad63b1b4863"
  },
  {
    "url": "/_nuxt/pages/admin.feab0fd94d36c868e28d.js",
    "revision": "0752c717420c686a3e909fade1e5f630"
  },
  {
    "url": "/_nuxt/pages/admin\\index.1a8051e02afed38a05ce.js",
    "revision": "9be3f51b84d33655570e6b7882910003"
  },
  {
    "url": "/_nuxt/pages/admin\\items.38fd8f0c732b187f66c4.js",
    "revision": "587b39c61b72eac213027766d5d9130e"
  },
  {
    "url": "/_nuxt/pages/admin\\settings.1b99da2d22189105cb4e.js",
    "revision": "0e7d65d0b42757139f777ec0f7aa50d0"
  },
  {
    "url": "/_nuxt/pages/index.21fff93fc8539a067139.js",
    "revision": "f8e883d4acc56fc21de2957a2ffeb40f"
  },
  {
    "url": "/_nuxt/pages/login.6da1920c864fbaf6f2e4.js",
    "revision": "14d33dad735f2d0149c5ba3ee4c6980a"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "ElSecretoDeLos8Gatitos_0.0.1",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
