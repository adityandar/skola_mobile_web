'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1da07ce3d6a3abf0e6b01410fcd2468c",
"version.json": "774aeb73b65ec951518a7a89228ca3f8",
"index.html": "881145f8fad24417e3353e8a5349fa78",
"/": "881145f8fad24417e3353e8a5349fa78",
"main.dart.js": "cd0eca9dff0269c4f35b39d57c8d1a52",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "67696f60665d10f2c17980fe5ff510bf",
"assets/AssetManifest.json": "85ad50e0fd044638b6582e3469e3037c",
"assets/NOTICES": "563bc89083f61557b3eee084d974bcdd",
"assets/FontManifest.json": "2e0768fa66da68e728d90c9768158ff6",
"assets/AssetManifest.bin.json": "0ee1d637aaf7dbbeb5854840bfcfae41",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3331b90f3cc82d130bf834d1c0ca42a5",
"assets/fonts/MaterialIcons-Regular.otf": "5bde0246e2e47c078d6ce1b277ca5605",
"assets/assets/visual/home/svgs/ic_time.svg": "0c9a89e295dd4c6dd443923651cc632d",
"assets/assets/visual/home/svgs/ic_teacher_directory.svg": "3422aadd36231a80e3d89fc49084fcdf",
"assets/assets/visual/home/svgs/ic_student_quiz.svg": "8c2f198510b4c12f02217f97e5d6bb8e",
"assets/assets/visual/home/svgs/ic_attendance_performance.svg": "fab8137caf61d166af2ba173354c0acf",
"assets/assets/visual/home/svgs/ic_to_review_active.svg": "a2fb9865cdb4bddd124445d23da93bb2",
"assets/assets/visual/home/svgs/ic_profile_inactive.svg": "2acb179796f1269d75c32ad322058b8c",
"assets/assets/visual/home/svgs/ic_course_inactive.svg": "c2870ccf9bb7af180f20752df93d2efc",
"assets/assets/visual/home/svgs/ic_learning_materials.svg": "0f30f2437fabc5ef157776772d1436c7",
"assets/assets/visual/home/svgs/ic_more_menu.svg": "3797537bf14b531e5e82267e311e2040",
"assets/assets/visual/home/svgs/ic_inbox_active.svg": "9baebe24a4c398f30d2f77cf71ce245a",
"assets/assets/visual/home/svgs/ic_calendar.svg": "2f29dc7396380e0c39a1e826de927091",
"assets/assets/visual/home/svgs/ic_profile_active.svg": "5108a5249e113f79d488f248af655371",
"assets/assets/visual/home/svgs/ic_inbox_inactive.svg": "5403dd8bb3db6d7c67aa262686f0b32c",
"assets/assets/visual/home/svgs/ic_observation.svg": "d97a2cf0298a97e03b6cd4bbb6e80d29",
"assets/assets/visual/home/svgs/ic_home_active.svg": "a5750e85ff91db81ca4428f8db576a9d",
"assets/assets/visual/home/svgs/ic_student_directory.svg": "dc61ae5a6a166823befabfec3b5f4c54",
"assets/assets/visual/home/svgs/ic_student_assignment.svg": "cbf1b61d033f15fc6ce431864ff7e340",
"assets/assets/visual/home/svgs/ic_course_active.svg": "d53a3a9b608035ff19ccade19fcb45df",
"assets/assets/visual/home/svgs/ic_home_inactive.svg": "401473ee4eb34dacb2e4dd68bc66f93a",
"assets/assets/visual/home/svgs/ic_to_review_inactive.svg": "58ff634bdadf029734fee6b806096f39",
"assets/assets/visual/home/svgs/ic_student_performance.svg": "08c1170eed0febc2f47dd47464a38a1b",
"assets/assets/visual/home/svgs/ic_notification_ping.svg": "4015e5b8654ef7e3cd58c303811cd514",
"assets/assets/visual/inbox/svgs/ic_file_circle.svg": "3d4b430d465e24fc5abfcfc3116ed14a",
"assets/assets/visual/your_schedule/svgs/ic_calendar_month.svg": "b2b1e87ea5ddb8becd3c4c82805f7ca2",
"assets/assets/visual/your_schedule/svgs/ic_calendar_week.svg": "133c28dcac245427596c7a76367bffcb",
"assets/assets/visual/your_schedule/svgs/ic_calendar_day.svg": "03547d91b380fbb4d9137a53342dad57",
"assets/assets/visual/your_schedule/svgs/ic_calendar_agenda.svg": "b10d39b3ad516634b0498196db747509",
"assets/assets/visual/learning_material/svgs/ic_learning_material.svg": "6332fb8712edaf2f281703276d096c55",
"assets/assets/visual/common/images/img_logo_alt.png": "51b0a3d90b05f6abfdef1dffccc18b8b",
"assets/assets/visual/common/images/img_logo.png": "44b6f1c47858f26ee883eee78323b3fc",
"assets/assets/visual/common/svgs/ic_blue_chevron_right.svg": "a3624392679e880f36bd9a9b26245450",
"assets/assets/visual/common/svgs/ic_filter.svg": "e9ff9b08de6f0ffedbc88d1cf244bee5",
"assets/assets/visual/common/svgs/ic_delete.svg": "07505db45d4da173112b560c8a01270a",
"assets/assets/visual/common/svgs/ic_delete_red.svg": "63f2430c934f1d29c03276fe4572a60b",
"assets/assets/visual/common/svgs/ic_close.svg": "02067fb133822631cdafc4c9f5cf9d3c",
"assets/assets/visual/common/svgs/ic_plus_blue.svg": "5f0d2027a6042740cc1888d30c0270d1",
"assets/assets/visual/common/svgs/ic_calendar.svg": "bca9513869929d101a0211a7d4d1f467",
"assets/assets/visual/common/svgs/ic_upload_file.svg": "0620dcb1e6899b5918f988f74b1436b4",
"assets/assets/visual/common/svgs/ic_arrow_right.svg": "00e0d01154bb4904eacd71df48b7ece2",
"assets/assets/visual/common/svgs/ic_more_horizontal.svg": "aefb3d239f0f5048b6aa3121538cce6c",
"assets/assets/visual/common/svgs/ic_file_blue.svg": "c05f1101f781437ab64d62fbabc5f38a",
"assets/assets/visual/common/svgs/ic_chevron_right.svg": "c7da83f73659c684eb9cf66207d86282",
"assets/assets/visual/common/svgs/ic_copy.svg": "43fbb66df13716d797bfc5b0e5051dba",
"assets/assets/visual/profile/images/ic_indonesia_flag_circle.png": "3873d51918864028bee340cb8505cc5b",
"assets/assets/visual/profile/images/ic_america_flag_circle.png": "0d1d34afd05eb40983ce674024652831",
"assets/assets/visual/profile/svgs/ic_sign_out.svg": "25526e2fab2b6e4820d1faa6427f886d",
"assets/assets/visual/profile/svgs/ic_security.svg": "f30091e115bbbb4a116c9c957d2a79ba",
"assets/assets/visual/profile/svgs/ic_help_center.svg": "35ffad36755e49031e31595a01d2d4f8",
"assets/assets/visual/profile/svgs/ic_rate_app.svg": "18135489b2be3e7a8dc0c784bfc1e610",
"assets/assets/visual/profile/svgs/ic_edit_profile_picture.svg": "e9e763570088813233291f5c14871d7b",
"assets/assets/visual/profile/svgs/ic_profile_information.svg": "c5ec86ac99a08cc8a98a16cccc34f3a0",
"assets/assets/visual/profile/svgs/ic_notification.svg": "eeb4200ddbe4005114a3113a53c37679",
"assets/assets/visual/profile/svgs/ic_education_certificate.svg": "887d98762e3a8711b1376a502f5ba170",
"assets/assets/visual/profile/svgs/ic_tos.svg": "b88451181d9f5940355be81379754eef",
"assets/assets/visual/profile/svgs/ic_school_information.svg": "fd0765dabc6dc4a735099a010f45c557",
"assets/assets/visual/profile/svgs/ic_privacy_policy.svg": "2353de18ce1be69dbd45798eef28f865",
"assets/assets/visual/profile/svgs/ic_change_language.svg": "61484433d9922af4b59630bd9d2392fb",
"assets/assets/visual/profile/svgs/ic_personal_employee.svg": "cd8874bbef40fa732f00f1eec1100b71",
"assets/assets/visual/profile/svgs/ic_honors_awards.svg": "d6e5b7489b24eb82b4129f7d7b04de07",
"assets/assets/visual/student_quiz/svgs/ic_student_quiz.svg": "2bdcc9208bc7bdd8b131edb99281d68e",
"assets/assets/visual/course_detail/svgs/ic_module.svg": "20991268ff79d014c4e221ddf0689646",
"assets/assets/visual/course_detail/svgs/ic_absent.svg": "f9059cfbb50ccc41a81dc171edabb139",
"assets/assets/visual/course_detail/svgs/ic_student_score.svg": "37648eb3fccc23bf805f6e49452dcf03",
"assets/assets/visual/course_detail/svgs/ic_email.svg": "a8799b1a46023ca76b42ef51a68d5198",
"assets/assets/visual/course_detail/svgs/ic_sick.svg": "7c1928d4c364ec26f976f50cc2afb2fc",
"assets/assets/visual/student_assignment/svgs/ic_no_submission.svg": "fdd4bdf8ed52d66f20b43b6f63711f67",
"assets/assets/visual/student_assignment/svgs/ic_on_time.svg": "a0fbb7ba6bf328336d4091ae15c8b4ea",
"assets/assets/visual/student_assignment/svgs/ic_need_grading.svg": "c4abc4aef736fd6a028c6d0066be8cca",
"assets/assets/visual/student_assignment/svgs/ic_student_assignment.svg": "86d585c1c904e60b522b6ffbb09c7fdb",
"assets/assets/visual/student_assignment/svgs/ic_word.svg": "69b13123fa30f557fee1cab079ec9aeb",
"assets/assets/visual/student_assignment/svgs/ic_late.svg": "77b722b85ad25eb1e77c42f68750e24f",
"assets/assets/visual/student_assignment/svgs/ic_grade.svg": "b0c36d2fd1443a26d680af4315e0ce1c",
"assets/assets/visual/login/svgs/ic_eye_hide.svg": "71066e2f6348ee78ec8e1b69f32ad3f1",
"assets/assets/visual/login/svgs/ic_eye_show.svg": "5e4ee7d1103ba377ba454b71e1dd722b",
"assets/assets/visual/observation/svgs/ic_observation.svg": "0ca71611fbc7cbe96422fd189330c513",
"assets/assets/fonts/PublicSans-Regular.ttf": "18f93d6b04b3f0303d3b3f4cd2d64e96",
"assets/assets/fonts/PublicSans-Bold.ttf": "9fc9c1206d8e20f39769a6f3b36fd8b7",
"assets/assets/fonts/PublicSans-SemiBold.ttf": "9903b8962526b688e7df03f2f9c7dfa7",
"assets/assets/fonts/PublicSans-Medium.ttf": "80840e462a09263d0e9833565df34cfd",
"assets/assets/fonts/PublicSans-Light.ttf": "cd7f03820b6358210ef1c22e081da00c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
