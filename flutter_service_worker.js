'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5435322e5f6f80a5f1d67f65c8f5b3eb",
"version.json": "ba0ca909c4eae0a6a6f848aa2510c9da",
"index.html": "8e24e340629e33ddfb50383aa4de8af6",
"/": "8e24e340629e33ddfb50383aa4de8af6",
"main.dart.js": "f5383bbfee68755848a866f7e9b66c15",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "bbcc6b25626d00bcdde6eec6bb13033a",
"main.dart.mjs": "81ada0830abc88c6a1d078f1fc702892",
"icons/Icon-192.png": "31113d9afcaf2df6630b2e0539339f6a",
"icons/Icon-maskable-192.png": "31113d9afcaf2df6630b2e0539339f6a",
"icons/Icon-maskable-512.png": "a7abc4f4385f523b65ee2a53afd12573",
"icons/Icon-512.png": "a7abc4f4385f523b65ee2a53afd12573",
"manifest.json": "e46df1627acfe7f1cbe7708977469f24",
"main.dart.wasm": "2d286cafd39429ef5228940c7c4bd387",
"assets/AssetManifest.json": "4ed525b53e45c239998aa10958089106",
"assets/NOTICES": "aa20064fc0382cb85f4613f97a5d7c85",
"assets/FontManifest.json": "4d648a2a4bb6aa18199ed6b5d025c3ab",
"assets/AssetManifest.bin.json": "4290ec7006153083ae583f8e0c99b476",
"assets/packages/tbbpowerwidget/fonts/Avenir-Black.ttf": "06fb3d4be835cdfda0fcc9e63f6c0392",
"assets/packages/tbbpowerwidget/fonts/Avenir-Medium.ttf": "1ec44b30a3b03d9267628d6f8969ea53",
"assets/packages/tbbpowerwidget/fonts/Avenir-Light.ttf": "cc15496589ea167443e00d428cf58ed0",
"assets/packages/tbbpowerwidget/assets/images/temp/soc_bg.png": "9a79b8fb344ad7e2d1bd3beccfd9ae7e",
"assets/packages/tbbpowerwidget/assets/images/temp/temp_blank_bg.png": "d7bfb38fe3acf0ef17c14520ae59f951",
"assets/packages/tbbpowerwidget/assets/images/gas/ic_gas@3x.png": "8ac85f6c557530b28d5a508ff9568046",
"assets/packages/tbbpowerwidget/assets/images/ic_bluetooth@3x.png": "eae6f424edd1c26db4c0b414bf44873b",
"assets/packages/tbbpowerwidget/assets/images/ble/no_13.png": "cfbe43efa991ba4d73d40d907348d77c",
"assets/packages/tbbpowerwidget/assets/images/ble/no_12.png": "6df5c744d3c847eb90cecb80a6ea26db",
"assets/packages/tbbpowerwidget/assets/images/ble/no_38.png": "d223690f23552aba750c5392b3fb22b6",
"assets/packages/tbbpowerwidget/assets/images/ble/no_10.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_11.png": "128747c842d7fe6d1d6124cbffcda05d",
"assets/packages/tbbpowerwidget/assets/images/ble/no_39.png": "a08cc8a013252d2da0e29659d0c2e693",
"assets/packages/tbbpowerwidget/assets/images/ble/no_15.png": "b0d42e8f0d90dc67b815e689ae921c22",
"assets/packages/tbbpowerwidget/assets/images/ble/no_29.png": "1c49025df97a3ba29d26ffb9d74ba2bb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_28.png": "b73dbbed417c20441a832f229459e4bf",
"assets/packages/tbbpowerwidget/assets/images/ble/no_14.png": "5dd0827f0e3c2b45bdd7f1ad2c54c4e7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_16.png": "3c303e7fdc5d9ecddadecde157163ddb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_17.png": "999dcbc33e0dee212928af6e0090b67c",
"assets/packages/tbbpowerwidget/assets/images/ble/no_9.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_8.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_49.png": "38d6b107cbae88bb5594e2b78b11073a",
"assets/packages/tbbpowerwidget/assets/images/ble/no_48.png": "feafe017856b74d9cd21484b6ce6871e",
"assets/packages/tbbpowerwidget/assets/images/ble/no_45.png": "541eb03c2b212c512ef3f6e34be99f3f",
"assets/packages/tbbpowerwidget/assets/images/ble/no_51.png": "d769a1aff9383b83500b4cf92dd1a0a4",
"assets/packages/tbbpowerwidget/assets/images/ble/no_6.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_7.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_50.png": "1fc1b70bd75beb35fff712f7e3165cac",
"assets/packages/tbbpowerwidget/assets/images/ble/no_44.png": "25a183ec0013cfcf757b7ae7b4e984bb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_52.png": "ec6fc9b516cf6e65bf63add30640e1d4",
"assets/packages/tbbpowerwidget/assets/images/ble/no_5.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_46.png": "474ae63d39bc07103fec56aa65bbd201",
"assets/packages/tbbpowerwidget/assets/images/ble/no_47.png": "3b3200ac3474601dcb9521e2922ee68e",
"assets/packages/tbbpowerwidget/assets/images/ble/no_4.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_53.png": "51de578672a6a904be306b15592987b1",
"assets/packages/tbbpowerwidget/assets/images/ble/no_57.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_43.png": "4cca6faad19f6467802c2bc2b9885177",
"assets/packages/tbbpowerwidget/assets/images/ble/no_42.png": "6e3d9b04e73b7431fb3f2beb7fbb6b17",
"assets/packages/tbbpowerwidget/assets/images/ble/no_1.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_56.png": "2380c05aba0acaec6082e1c6c87c5e7f",
"assets/packages/tbbpowerwidget/assets/images/ble/no_40.png": "a730bcfeb8efcb5d75f9da67622f1860",
"assets/packages/tbbpowerwidget/assets/images/ble/no_54.png": "34b6bf7d66a8b9534b3801cdd6d91205",
"assets/packages/tbbpowerwidget/assets/images/ble/no_3.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_2.png": "dcd47518cb92b747078b2c0d718333da",
"assets/packages/tbbpowerwidget/assets/images/ble/no_55.png": "02eaec85010738e74e2a152ccda52a96",
"assets/packages/tbbpowerwidget/assets/images/ble/no_41.png": "d127110b1a15ebe84bea26ee266195f8",
"assets/packages/tbbpowerwidget/assets/images/ble/no_26.png": "d01ece2ca01f225ceebdd58441364cbe",
"assets/packages/tbbpowerwidget/assets/images/ble/no_32.png": "cc161755c219c3df9c76b57362e93c7f",
"assets/packages/tbbpowerwidget/assets/images/ble/no_33.png": "25270c8ed841300ee53cf29b66cdf626",
"assets/packages/tbbpowerwidget/assets/images/ble/no_27.png": "4305d15df8c538f16da9c48a9ed63155",
"assets/packages/tbbpowerwidget/assets/images/ble/no_19.png": "76d488ee0dd16c134f339fce1beb8dfb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_31.png": "083fbb7357b7a164c7fb360b0519849a",
"assets/packages/tbbpowerwidget/assets/images/ble/no_25.png": "9acf6509de7e1935e01120e9c7b9bfd3",
"assets/packages/tbbpowerwidget/assets/images/ble/no_24.png": "d3a93a0a21c7b504b50a1b80f4fbf387",
"assets/packages/tbbpowerwidget/assets/images/ble/no_30.png": "8862af03a75993db8b4e4a30134da289",
"assets/packages/tbbpowerwidget/assets/images/ble/no_18.png": "0c05612198b4a599c4041acb07ccc637",
"assets/packages/tbbpowerwidget/assets/images/ble/no_34.png": "21212a889351d92761ab3c6951a33a80",
"assets/packages/tbbpowerwidget/assets/images/ble/no_20.png": "1d44784e85a054274c7b13385aa279eb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_21.png": "75b3e45d829a6c6b442990754b3aecd0",
"assets/packages/tbbpowerwidget/assets/images/ble/no_35.png": "34d3411ad00596779b85d639c3599b2a",
"assets/packages/tbbpowerwidget/assets/images/ble/no_23.png": "019febfe4b44d6584d0d60caea6a5043",
"assets/packages/tbbpowerwidget/assets/images/ble/no_37.png": "ef96386fe7781749e83c74fc65a1516f",
"assets/packages/tbbpowerwidget/assets/images/ble/no_36.png": "a416dc96254d8ef7a60146c2f83ee340",
"assets/packages/tbbpowerwidget/assets/images/ble/no_22.png": "0e874550463bc06df99ab95063acfd67",
"assets/packages/tbbpowerwidget/assets/images/quesheng_kongye@3x.png": "e689931249dea747151e2b741e02563e",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_side_2.png": "9a7412e0b14e5d2cb2e82741619840a3",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_side_3_line.png": "91ceb1a35c33e624acbaf75946c43778",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_side_3.png": "045ba63a51dd1f2bc61b208c9a93d1d7",
"assets/packages/tbbpowerwidget/assets/images/gy485/gy485_x10.png": "4296d0e9234af7efa92d9c0ce9b42653",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_side.png": "9d38c935c28191e3689e6a5f9ec15353",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_front.png": "4e583b007c8f2ea242d40b8f5aa9e656",
"assets/packages/tbbpowerwidget/assets/images/gy485/gy485_x10_2.png": "4d2b5440fb2523daa94a00a8cb42ba79",
"assets/packages/tbbpowerwidget/assets/images/gy485/gy485_x1.png": "bcd926061d06e4f4f5a06245f24633f6",
"assets/packages/tbbpowerwidget/assets/images/gy485/gy485_x1_line.png": "6c8a9ac15a85427160bcadb3407a6307",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_front_2.png": "66b52b5a208ce52cec349305afaeaac9",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_front_3.png": "1c790a9a8f8941a957b5967d9c6d2295",
"assets/packages/tbbpowerwidget/assets/images/gy485/gy485_x10_line.png": "930ccca5d1e2d69a896e19cc6dfa8dff",
"assets/packages/tbbpowerwidget/assets/images/gy485/car_front_3_line.png": "2eded246efbd16ea81339937076f04bb",
"assets/packages/tbbpowerwidget/assets/images/gy485/gy485_x1_2.png": "ccc3bf5a2bc26742a093d1a910c06c4f",
"assets/packages/tbbpowerwidget/assets/images/quesheng_wangluozhuangtai@3x.png": "38e79aa5c3faf35a185354529a4f12ef",
"assets/packages/tbbpowerwidget/assets/images/line_6013.png": "ea00f744522e88179b7322c99ac79b25",
"assets/packages/tbbpowerwidget/assets/images/line_6014.png": "de93b85bb8178c8c29845db5c1776365",
"assets/packages/tbbpowerwidget/assets/fonts/iconfont_signal.ttf": "139e9f55c9be1dd2173b98b9010b7d3f",
"assets/packages/tbbpowerwidget/assets/flare/loading.flr": "628b99cc6d7af9d09420ce68282757c8",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d1a0cb24220670de5da4b434394c3b1b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/ic_home_tbb@3x.png": "5643ac4ad7c16372968ef70dd5ce2384",
"assets/assets/images/%25E8%2592%2599%25E7%2589%2588%25E7%25BB%2584%252030.png": "0256489ef265a91c38542c24cdae2534",
"assets/assets/images/ripple_texture.png": "f7f7f610ff6276fd093922a2eb6e58f3",
"assets/assets/images/ic_ble_bg.png": "9fa9474319cb8952f229ff6adb25e585",
"assets/assets/images/%25E7%25BB%2584%25206274@3x.png": "2a20100a07911fc60437694d0108603a",
"assets/assets/images/ic_wifi_kinergy.png": "fbd24c2e9ca4c304e8658c1f14e59c8e",
"assets/assets/images/project/tbbpower_smp3_ces.webp": "940fba8c5f0c7446ebff67b90fce17ff",
"assets/assets/images/project/tbbpower_bwi_pm.webp": "5c8f0bf27177563772e335cc1b915440",
"assets/assets/images/project/tbbpower_mppt.png": "12a7a30ca92c37ad2ff975924dfd6b0e",
"assets/assets/images/project/tbbpower_bwi_pm.png": "ae662b0681a544f51bcb37c47d7f0c84",
"assets/assets/images/project/tbbpower_sliverline.png": "80e5822e1f815424b2c0dc0fbbc5e4a2",
"assets/assets/images/project/tbbpower_mppt.webp": "e0fe54ba133f01101b207df6455270c2",
"assets/assets/images/project/tbbpower_gateway.png": "db3d601500baca04ffde5f96d0b29003",
"assets/assets/images/project/tbbpower_jayco.png": "9c20d55873adbc2e0f46728fab5b6e52",
"assets/assets/images/project/tbbpower_smp3_ces.png": "dcf95c30d5f8d1837145ef9cd5706c76",
"assets/assets/images/project/tbbpower_gateway.webp": "2464945334a1f3cc725187ac4e895543",
"assets/assets/images/project/tbbpower_emp.png": "683c464d11a9201e3b52147efd595188",
"assets/assets/images/project/tbbpower_emp.webp": "a5fc58271a2b301cf3ad26288ad852dd",
"assets/assets/images/project/tbbpower_jayco.webp": "0a3cfdf17680073bec9b4906c3f31cff",
"assets/assets/images/project/tbbpower_zcm6.png": "edaa498e75d89c5dfe99f30a11e87a01",
"assets/assets/images/project/tbbpower_sliverline.webp": "81e9ef00116447bdefe09e1ccb9e7218",
"assets/assets/images/project/tbbpower_zcm6.webp": "c5109dbf75416999985c149edf71e653",
"assets/assets/images/wifi_setting_pic.png": "ba719b7df7fa4049f3e70c25e956de02",
"assets/assets/images/remote_connect_tips.png": "f2e98ca0f2eb6c501784898318b2d7fa",
"assets/assets/images/ic_update_bg.png": "cbac79baeb96c7f7fcc4467e3051c480",
"assets/assets/images/quesheng_shangpinxiangqing@2x.png": "14abf7964fb573a7c2ad90c5044a692b",
"assets/assets/images/devices/005200.png": "e5fd3ad658c762b1ed4857a6a74c90e1",
"assets/assets/images/devices/004F00.png": "41924f088522cbbcb3b25f388bdcc279",
"assets/assets/images/devices/008900.png": "dc15dca15cdbffe3250af0cc7bae3e23",
"assets/assets/images/devices/007400.png": "35b8591f9cfbc43a1fa1e760df5229dc",
"assets/assets/images/devices/004900.png": "7537d3e53b7c57725e91fa469d672c2d",
"assets/assets/images/devices/000B00.png": "fe599f2edeba7d2bf3be4a25bc314599",
"assets/assets/images/devices/005100.png": "628d570af13e26341ed24852b79139d6",
"assets/assets/images/devices/006A00.png": "e5fd3ad658c762b1ed4857a6a74c90e1",
"assets/assets/images/devices/004E00.png": "cf5d01711f539c710657430bf403e717",
"assets/assets/images/devices/004A00.png": "8ea64b6e083af3072ea184ae0ab667ab",
"assets/assets/images/devices/003600.png": "7814e930bfaa1e7a3f2cd15daf0eb56f",
"assets/assets/images/devices/005700.png": "dbdd050f68740700ed48be349628ab99",
"assets/assets/images/devices/006E00.png": "cf5d01711f539c710657430bf403e717",
"assets/assets/images/devices/003400.png": "867dc41b6beecc1d90977b3b3ee79de7",
"assets/assets/images/devices/000F00.png": "2a9dd609dcb930100b3e8faa822c6b5d",
"assets/assets/images/devices/004C00.png": "0f0f6fdca5238ce46a0590c93d36d4ca",
"assets/assets/images/devices/001A00.png": "ea6ae51b168d1b53ffab381407dfc840",
"assets/assets/images/devices/000700.png": "6d2ae74713051bda6bddafe087c4fa10",
"assets/assets/images/devices/004200.png": "2808c5c9cf841f5113cdb48665da70ba",
"assets/assets/images/devices/003E00.png": "909798362dc3b7fee1538c0ef438b641",
"assets/assets/images/devices/007D00.png": "6d2ae74713051bda6bddafe087c4fa10",
"assets/assets/images/devices/003C00.png": "ea6ae51b168d1b53ffab381407dfc840",
"assets/assets/images/devices/003D00.png": "eb1de7837fffb13f2877f50250d69750",
"assets/assets/images/devices/006100.png": "30be9899859b846d362b123d988c6472",
"assets/assets/images/devices/004700.png": "cf5d01711f539c710657430bf403e717",
"assets/assets/images/devices/005A00.png": "6115b6c632c7925079cbfdb3e038ba13",
"assets/assets/web/web.zip": "ec549912a035f99717722985748d32f6",
"assets/assets/web/README.md": "889728ad91251bb0d807a5a700854bef",
"assets/assets/lib/ble/ble.exe": "13d0a2c6589842debfd22a3024eefd20",
"assets/assets/lib/bsdiff/bsdiff.exe": "92170978338ca56a5e7469376395b468",
"assets/assets/lib/bsdiff/bsdiff": "416430c27d58f83a18d780eb0f1a30c3",
"assets/assets/fonts/iconfont_load.ttf": "12431c307551b1538bbc0ce1bf06227d",
"assets/assets/fonts/iconfont.ttf": "b4d7fc788e07ef0bfe322af0ccd62aef",
"assets/assets/fonts/iconfont_base.ttf": "6e81f8021b1c664770c32263b9b8bb48",
"assets/assets/fonts/JetBrainsMono-Medium.ttf": "b41d61d1b5a063fdcb6a7cdeacac57b0",
"assets/assets/data/unit.json": "4ecc38d302fde443c63a6d56ff953fc7",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
