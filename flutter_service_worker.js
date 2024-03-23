'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d05f816f134835c7de04c9fe71f3c03e",
"assets/AssetManifest.bin.json": "30740101d5b69ab92717da2c4ed84608",
"assets/AssetManifest.json": "700f691ed39e549d11cc7210dac46980",
"assets/assets/fonts/metropolis/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/fonts/metropolis/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/images/logo/main_logo.png": "95e88c5724febb819f0ac0a1594f53ee",
"assets/assets/images/materials/appliance.png": "b0f7722f7964e0dacb609dbc91fdefd3",
"assets/assets/images/materials/bg_002.png": "baed2aca5635335cbb3eee406cc85394",
"assets/assets/images/materials/blue_bg_002.png": "95e98682bdd915329630a63349d79137",
"assets/assets/images/materials/blue_bg_hd.png": "1d0202a36b69332a9db3e42a04d3aad7",
"assets/assets/images/materials/cmponent_8.png": "27eeb903211101966f34fd48ffc08d26",
"assets/assets/images/materials/coffe_03.png": "1a797a97d0d9e3b6725216409ae25d87",
"assets/assets/images/materials/component_10.png": "fbfbc306e8144820207a304cb347d016",
"assets/assets/images/materials/component_11.png": "721378fc94f55f61ec29a79b20afbf51",
"assets/assets/images/materials/component_12.png": "9f45157aa5feccc2f4657dd85f867208",
"assets/assets/images/materials/component_13.png": "c161ec271eaf9d00e140738a373f749c",
"assets/assets/images/materials/component_14.png": "d65ab6812462a81baa1c188c4fc1fc0c",
"assets/assets/images/materials/component_15.png": "afd68bdb6a8d56d00281608898069ebc",
"assets/assets/images/materials/component_16.png": "a074b8ca0322f03713db01f4b57a8435",
"assets/assets/images/materials/component_4.png": "ab72658e499bd25ac52a07fcfac53023",
"assets/assets/images/materials/component_6.png": "67930e81ee3364759c89d2c5f9be0a03",
"assets/assets/images/materials/component_7.png": "2e4d540dc4764496a657922516acba71",
"assets/assets/images/materials/component_8.png": "8b3d37f09603d307531ccc1eac5516b9",
"assets/assets/images/materials/component_9.png": "4c4b84eebfaffd4a6fc68a28a5728486",
"assets/assets/images/materials/component_m1.png": "c694f8c2d72818ac56f918a441bd117e",
"assets/assets/images/materials/component_m2.png": "f3643b112a8cd802cdb37b8785c53f04",
"assets/assets/images/materials/context_01.png": "3b6eb1be558d2c0c32d72e14a19def94",
"assets/assets/images/materials/context_02.png": "4e64323b276a67342eea4b8297792c03",
"assets/assets/images/materials/dark_bg.png": "3d7e3cef6ae4ed097bc04724966c2293",
"assets/assets/images/materials/dark_bg_hd.png": "1abb8326559085340f97212850a5a195",
"assets/assets/images/materials/electrical_01.png": "c5e9125f593adf03cf7b1eec7125ff4a",
"assets/assets/images/materials/electrical_equipments.png": "85d58ad9abcd48ffc0acde9e676c1ba5",
"assets/assets/images/materials/email.png": "e2fc9e1d3048fe6d7b2316621bd5b062",
"assets/assets/images/materials/facebook.png": "002df5b6fabf46598599f28e2662c076",
"assets/assets/images/materials/instagram.png": "7e18f87c649e8f72d18d588c3800a3fe",
"assets/assets/images/materials/light_bg.png": "2ef390aee25aab5945ad652c03706dfd",
"assets/assets/images/materials/machines_01.png": "a17588160720816018c8f33de1fbbd0e",
"assets/assets/images/materials/mobility.png": "c477f1d522ae56df70dce2800f4f49a5",
"assets/assets/images/materials/noon.png": "1de17957e654bdf666d891b2c5c406e3",
"assets/assets/images/materials/quality.png": "95d29560fde7d3319420f7afaf0bb8cf",
"assets/assets/images/materials/telegram.png": "8cd6d774c6834f324fb60e1527614f05",
"assets/assets/images/materials/trust.png": "9e7ea29d55e382cbc6a96dbbcb293505",
"assets/assets/images/materials/twitterx.png": "7c52965aa8e83200e63f3e77af598fd5",
"assets/assets/images/materials/whatsapp.png": "35323afcb9d6c0f3949a0b44619b85db",
"assets/FontManifest.json": "a3a2b26a740c2be73d7bf4a1898fff65",
"assets/fonts/MaterialIcons-Regular.otf": "20515a6faed0a6532b276c71e37f9ceb",
"assets/NOTICES": "25f10cc1a69f453a3fa1604f4620d1ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets.zip": "52aaf47011f7ed325879b78f1d78f172",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2b36da283fcfb88840d603dc422efec1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "8cc7569286625d5caabaf60af9320b10",
"icons/Icon-512.png": "f8d432d418c0eaac3bf86b842ce3fb3e",
"icons/Icon-maskable-192.png": "8cc7569286625d5caabaf60af9320b10",
"icons/Icon-maskable-512.png": "f8d432d418c0eaac3bf86b842ce3fb3e",
"index.html": "34637e82a7ec6ec92c085e5c01aaf78d",
"/": "34637e82a7ec6ec92c085e5c01aaf78d",
"main.dart.js": "519b5762fba07d34bc7d41364fcd4893",
"manifest.json": "51870c8b89a58fb45e3d21ce15e12d69",
"version.json": "1ceffa2065a414bdcf6534efb55c4a25"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
