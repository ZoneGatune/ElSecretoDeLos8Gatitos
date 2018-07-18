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
    "url": "/_nuxt/app.9f544f072cc3c720229b.js",
    "revision": "784ef7a84458c94f321949dc5f689b39"
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
    "url": "/_nuxt/layouts/default.86fba550a11a8e9eb90b.js",
    "revision": "201190123bdb108a9cb256b1a32e4e7f"
  },
  {
    "url": "/_nuxt/manifest.3c371a6ba9b830138601.js",
    "revision": "a05f0e35aca4fdd283dc4f89d7cadccc"
  },
  {
    "url": "/_nuxt/pages/about.6c9c465c7f362511b17f.js",
    "revision": "817c23cab8c1ace509583f9669cc3418"
  },
  {
    "url": "/_nuxt/pages/admin.191f39322421a58036c6.js",
    "revision": "9517e9d5185c2566e0b5aee792679ab9"
  },
  {
    "url": "/_nuxt/pages/admin\\index.22c4ad7e1c75eecdaccf.js",
    "revision": "13afa57d7577698cab453fab7995c95c"
  },
  {
    "url": "/_nuxt/pages/admin\\items.78bb2fad4604a367f64e.js",
    "revision": "0860c636b86154b494b38c9ab4459098"
  },
  {
    "url": "/_nuxt/pages/admin\\settings.529a68ef0f9a02652965.js",
    "revision": "44bb69f7c3b9e568e7690784f1fcf355"
  },
  {
    "url": "/_nuxt/pages/index.18cbf572a7337ebddc12.js",
    "revision": "8f4914c3449480b922f91768e6b8f74d"
  },
  {
    "url": "/_nuxt/pages/login.87d62a60856ed2384a24.js",
    "revision": "5e8ba4e0a0b3ec7ccd107b59e6069635"
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
