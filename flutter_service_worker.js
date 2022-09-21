'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d96116df3cb500e268d2339cc665f22b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/adcs/dc.jpg": "4c945df70749edf06fe5453c8650dd09",
"assets/images/adcs/flowchart.png": "26c548e9bcfb9d8fa6fa37ebfaad35b3",
"assets/images/adcs/moveCam.png": "5659e002433742a04890ed8e8f37961a",
"assets/images/adcs/parts.png": "42c89c399d9b136ecd12555c69099cf8",
"assets/images/adcs/servo.jpg": "6a5fed8fcb1aa81fdbd4c5e7794a1f1b",
"assets/images/arduino.png": "ef4c4df3a7395effe1ca71f4590e53a1",
"assets/images/communication/ssp.png": "9658dd24f17b2aac02a3f8f4502aafa7",
"assets/images/communication/wifi.png": "454031e06cd869e5809490e3f3cd081c",
"assets/images/contact/abd-elsalam.png": "4e2b44e00fe9081461193d460a326b74",
"assets/images/contact/ahmed.png": "c515c392061809f81fc318fe303dd36e",
"assets/images/contact/essam.png": "c8d2d1db1405446d2c12ffc511e4080d",
"assets/images/contact/Github-Logo.png": "c447da4748b284b3198ff083a33293ab",
"assets/images/contact/Google-Logo.png": "9b74f4d8b314fe3d1a17cda87a222c8c",
"assets/images/contact/lamiaa.png": "aa55e44d4435cd6cb44ca3b14a265aec",
"assets/images/contact/Linkedin-Logo.png": "c24cde2827448f08d40afd6909011e16",
"assets/images/contact/logo-alex.png": "2b428ffb402eb48e53fbd25157111d9f",
"assets/images/contact/logo-azhar.png": "6161b8a85709a3ffea96eb3ad6ae20ce",
"assets/images/contact/logo-egsa.png": "d4fffb23d0dda55d5ef4e930f7744cb2",
"assets/images/contact/logo-eut.png": "ce8f71ed03f5bd03e785a9dbc09cb599",
"assets/images/contact/mahmoud.jpeg": "51bbd00acb6556e29d150a7e71ac97ad",
"assets/images/contact/menam.png": "10faea3f384f95cf11232d30bcf0cd2a",
"assets/images/contact/saleh.png": "9e951f4e16c91190606df7067fb97e2f",
"assets/images/groundStation/command.png": "00c46f63857c613575d6818e7dd7b53b",
"assets/images/groundStation/dashboard.png": "8680c685affcfaaeb310e3a2e4df6533",
"assets/images/groundStation/logs.png": "0be5065ab14cad5b7a98bd0ad4e82cb8",
"assets/images/groundStation/long-term.png": "e686e8b8dde750fe32dbe1a55dd6af6a",
"assets/images/groundStation/payload.png": "ad4b4f6e31b257522536a3fa6fe3a949",
"assets/images/groundStation/session.png": "74b83aa70a83223fb2c8d261dbb28ec5",
"assets/images/groundStation/sun.png": "89dc900790a1ae3d12fd68be27a5e611",
"assets/images/homeScreen/background.jpg": "f5884618364617b1fa1bdd146b1b3f0e",
"assets/images/homeScreen/budget.png": "2814056d9d468b0d34e4432beb6ae89b",
"assets/images/homeScreen/crop_background.jpg": "beec554d43aa7b5e8369e9f470cd7c38",
"assets/images/homeScreen/cubelogo.png": "a3b70e556b98ba32df5dc746297dc0f7",
"assets/images/obc/raspberry.png": "4cebd6ada86036457509cd438ea0192c",
"assets/images/obc/spi.png": "1db6badacdd2b5b479da0df62f0c1b2d",
"assets/images/obc/storage.png": "61e499b275d415629b22eedd24de401b",
"assets/images/overview/cube.jpg": "ed21b2d2203a9e7d314a113afe317d42",
"assets/images/overview/systems.png": "29b9003e8c2bbf1de718d2ea3d42c9ff",
"assets/images/payload/camera.png": "afa7a844aa3601e3b429fe58d890f0e5",
"assets/images/payload/specification.png": "525b4c1b0a8ee02e85034ef3991c1a7b",
"assets/images/Structure/cube.jpg": "472aa716106cbd1a18f831dcfd7c0109",
"assets/images/Structure/payload-1.jpg": "390882f6f37c112d8e5c82c2c49307dc",
"assets/images/Structure/payload-2.jpg": "e7745673129df4ff5c430fd0781c5389",
"assets/images/Structure/payload-3.jpg": "493e164c30be517be20ca576a1e57d17",
"assets/images/Structure/payload-4.png": "766adc753e1befe762883b00133841e0",
"assets/images/tt&m/bmp.jpg": "1c7f66d6db91317f11d3ae0833c83687",
"assets/images/tt&m/flowchart.png": "5c5525f6bab59b814a8ac1ab3f1ae24a",
"assets/images/tt&m/gps.jpg": "52a08c0f498e1ac5381444a71d3470d7",
"assets/images/tt&m/ldr.jpg": "c0f6a9517b4005b4c5de6761a83c7837",
"assets/images/tt&m/parts.png": "8af4332cb86719f87f7d6f0227607fbf",
"assets/NOTICES": "419807dceb7e19aaeacf231c9588f692",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/android-chrome-192x192.png": "08131854e41989dd74fa514ed3810a05",
"icons/android-chrome-512x512.png": "f7ffd299d7c9f3eae7359c93fb6a441b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo-icon.png": "8715c16f1a00126eeb7d177a77e0ecb9",
"index.html": "8dca72b3a04cab4c3f82be1b668bcb2d",
"/": "8dca72b3a04cab4c3f82be1b668bcb2d",
"logo.png": "08131854e41989dd74fa514ed3810a05",
"main.dart.js": "5a76c7b40129994ce6ffc8b3bafd2f36",
"manifest.json": "14f0b025977bfe8f1729e0a227332e88",
"version.json": "70c3f8e894adb743c79567d62a5afde6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
