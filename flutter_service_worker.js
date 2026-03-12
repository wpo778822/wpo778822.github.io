'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d8352c0b72e7661a9a7abc354e30fda2",
"version.json": "69fcc660be9e5eac4e4d7be6573e61d4",
"index.html": "8e24e340629e33ddfb50383aa4de8af6",
"/": "8e24e340629e33ddfb50383aa4de8af6",
"main.dart.js": "eed67bd570d5583efddf9ef7ad16d7e5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "bbcc6b25626d00bcdde6eec6bb13033a",
"main.dart.mjs": "8f58b7c43bf80893f4181adfa808978b",
"icons/Icon-192.png": "31113d9afcaf2df6630b2e0539339f6a",
"icons/Icon-maskable-192.png": "31113d9afcaf2df6630b2e0539339f6a",
"icons/Icon-maskable-512.png": "a7abc4f4385f523b65ee2a53afd12573",
"icons/Icon-512.png": "a7abc4f4385f523b65ee2a53afd12573",
"manifest.json": "e46df1627acfe7f1cbe7708977469f24",
"main.dart.wasm": "ce53a839aea721784a0a67ed55f01b11",
"assets/NOTICES": "722a7a9fd35faa6349fa1c1d8ed52208",
"assets/FontManifest.json": "6db504fa5dd2ebac2aaf5bea0e855b99",
"assets/AssetManifest.bin.json": "5a7f2634314ae24bb315711954ff0e72",
"assets/packages/tbbpowerwidget/fonts/Avenir-Black.ttf": "06fb3d4be835cdfda0fcc9e63f6c0392",
"assets/packages/tbbpowerwidget/fonts/Avenir-Medium.ttf": "1ec44b30a3b03d9267628d6f8969ea53",
"assets/packages/tbbpowerwidget/fonts/Avenir-Light.ttf": "cc15496589ea167443e00d428cf58ed0",
"assets/packages/tbbpowerwidget/assets/images/temp/soc_bg.png": "9a79b8fb344ad7e2d1bd3beccfd9ae7e",
"assets/packages/tbbpowerwidget/assets/images/temp/temp_blank_bg.png": "d7bfb38fe3acf0ef17c14520ae59f951",
"assets/packages/tbbpowerwidget/assets/images/gas/ic_gas@3x.png": "8ac85f6c557530b28d5a508ff9568046",
"assets/packages/tbbpowerwidget/assets/images/ic_bluetooth@3x.png": "eae6f424edd1c26db4c0b414bf44873b",
"assets/packages/tbbpowerwidget/assets/images/ble/no_13.png": "9540626d12e6ec5951e04e91a2976db8",
"assets/packages/tbbpowerwidget/assets/images/ble/no_12.png": "3510578ca1bde147dfad6a8a556a93b7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_38.png": "015baa6863875dbe79859843fb4665ea",
"assets/packages/tbbpowerwidget/assets/images/ble/no_10.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_11.png": "80ee2f943020c56c90295bd4706526f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_39.png": "2595214162175f7a8940e2b2e44ecebb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_15.png": "12ae753c0d6096d4cfb894554a52e722",
"assets/packages/tbbpowerwidget/assets/images/ble/no_29.png": "bb23b7198e37dc81f18cd430334215bb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_28.png": "03c5c4d192d111e31454295101f25718",
"assets/packages/tbbpowerwidget/assets/images/ble/no_14.png": "af71714119cee182ef7ee5051c672464",
"assets/packages/tbbpowerwidget/assets/images/ble/no_16.png": "ce16dc70b5a2ecc99878e7d33d679414",
"assets/packages/tbbpowerwidget/assets/images/ble/no_17.png": "f3afc82dc50b566a9f30bff54ac584f1",
"assets/packages/tbbpowerwidget/assets/images/ble/no_9.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_8.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_49.png": "9ad09ce786f8ce667d429c1d312d9ef8",
"assets/packages/tbbpowerwidget/assets/images/ble/no_48.png": "58da14a824441ddac3f615d99560e554",
"assets/packages/tbbpowerwidget/assets/images/ble/no_45.png": "f0c7010f08866832b63ebb8f2e75a068",
"assets/packages/tbbpowerwidget/assets/images/ble/no_51.png": "48befa6a182ae0f18263124913edd93c",
"assets/packages/tbbpowerwidget/assets/images/ble/no_6.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_7.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_50.png": "2bb6e646b05c227c297c5ae475e83d3d",
"assets/packages/tbbpowerwidget/assets/images/ble/no_44.png": "6855509966023b5ce73c4c69e5f3bbc2",
"assets/packages/tbbpowerwidget/assets/images/ble/no_52.png": "74dcaa8d70bbb1ab860a465a2c13c079",
"assets/packages/tbbpowerwidget/assets/images/ble/no_5.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_46.png": "f069f62b7be60e77c70898a4b37ad7b8",
"assets/packages/tbbpowerwidget/assets/images/ble/no_47.png": "ad87037bdb10ce451af94b1887aef6cb",
"assets/packages/tbbpowerwidget/assets/images/ble/no_4.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_53.png": "eaf5a50d85ca6d38e834b12b9f57afe2",
"assets/packages/tbbpowerwidget/assets/images/ble/no_57.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_43.png": "1c182e6659e9a5e697eced20623b4c06",
"assets/packages/tbbpowerwidget/assets/images/ble/no_42.png": "44c33c9722289cbe499553b8a8d2768c",
"assets/packages/tbbpowerwidget/assets/images/ble/no_1.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_56.png": "9a4e20eac0c485a2c02be6da7c745869",
"assets/packages/tbbpowerwidget/assets/images/ble/no_40.png": "47e797ae8ca940a6e7668fa870157b69",
"assets/packages/tbbpowerwidget/assets/images/ble/no_54.png": "2c3c13470c1845a17513b5bddc7771e6",
"assets/packages/tbbpowerwidget/assets/images/ble/no_3.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_2.png": "b63e286edf34dbe81e677e5fa59cc0f7",
"assets/packages/tbbpowerwidget/assets/images/ble/no_55.png": "70563e5d367160f48562c0ca51b9a865",
"assets/packages/tbbpowerwidget/assets/images/ble/no_41.png": "c7493c74928104190861c4704f25e230",
"assets/packages/tbbpowerwidget/assets/images/ble/no_26.png": "5f1fc342846f51b47ec7ba5844297f31",
"assets/packages/tbbpowerwidget/assets/images/ble/no_32.png": "7190260bdd83fd934e2b221d01c14543",
"assets/packages/tbbpowerwidget/assets/images/ble/no_33.png": "498be0f0b80e344ff5b1f9ce0d0b3d2b",
"assets/packages/tbbpowerwidget/assets/images/ble/no_27.png": "f9023dd2d7d1ad0ec9d449ee34cfee84",
"assets/packages/tbbpowerwidget/assets/images/ble/no_19.png": "383129ebc57d6f9b37bf73ad551ecd5b",
"assets/packages/tbbpowerwidget/assets/images/ble/no_31.png": "23dd5338303d228e3c075018283f4576",
"assets/packages/tbbpowerwidget/assets/images/ble/no_25.png": "303104c10101d6b6b0aaef3461987fc0",
"assets/packages/tbbpowerwidget/assets/images/ble/no_24.png": "176a865ea9ebc0090529f379b88e293a",
"assets/packages/tbbpowerwidget/assets/images/ble/no_30.png": "d10f74c2f4975b863e67fca82efdf7e2",
"assets/packages/tbbpowerwidget/assets/images/ble/no_18.png": "fc7b0eda4dd1854caf3fbaad1b327547",
"assets/packages/tbbpowerwidget/assets/images/ble/no_34.png": "049f4292f2f95ecf793b4135a47b9df8",
"assets/packages/tbbpowerwidget/assets/images/ble/no_20.png": "4d1bbf17fac4f12c4b174035d1b48bee",
"assets/packages/tbbpowerwidget/assets/images/ble/no_21.png": "5336d972d56cdfe6b434a8ea10ba9aac",
"assets/packages/tbbpowerwidget/assets/images/ble/no_35.png": "5b1eca1118ff164a9e39ba391f9beb32",
"assets/packages/tbbpowerwidget/assets/images/ble/no_23.png": "090c77d9880e0afccdcbee6ad810479d",
"assets/packages/tbbpowerwidget/assets/images/ble/no_37.png": "ff531d0fb2d181fcd76d202c3c09d29f",
"assets/packages/tbbpowerwidget/assets/images/ble/no_36.png": "78d11b72a6de4b1987e056320c76a977",
"assets/packages/tbbpowerwidget/assets/images/ble/no_22.png": "67cf6c77ce7493c17aff73ac22887362",
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
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "fd12529e9f02048ad90c489dc7975f50",
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
"assets/assets/images/devices/006600.png": "cf5d01711f539c710657430bf403e717",
"assets/assets/images/devices/000700.png": "6d2ae74713051bda6bddafe087c4fa10",
"assets/assets/images/devices/004200.png": "2808c5c9cf841f5113cdb48665da70ba",
"assets/assets/images/devices/003E00.png": "909798362dc3b7fee1538c0ef438b641",
"assets/assets/images/devices/007D00.png": "6d2ae74713051bda6bddafe087c4fa10",
"assets/assets/images/devices/003C00.png": "ea6ae51b168d1b53ffab381407dfc840",
"assets/assets/images/devices/003D00.png": "eb1de7837fffb13f2877f50250d69750",
"assets/assets/images/devices/006100.png": "30be9899859b846d362b123d988c6472",
"assets/assets/images/devices/004700.png": "cf5d01711f539c710657430bf403e717",
"assets/assets/images/devices/005A00.png": "6115b6c632c7925079cbfdb3e038ba13",
"assets/assets/web/web.zip": "921ea425beca08b93675a8cc21587db8",
"assets/assets/web/README.md": "889728ad91251bb0d807a5a700854bef",
"assets/assets/lib/ble/ble.exe": "325c365c2b31ff57f3d5858d5f233568",
"assets/assets/lib/bsdiff/bsdiff.exe": "92170978338ca56a5e7469376395b468",
"assets/assets/lib/bsdiff/bsdiff": "416430c27d58f83a18d780eb0f1a30c3",
"assets/assets/fonts/iconfont_load.ttf": "12431c307551b1538bbc0ce1bf06227d",
"assets/assets/fonts/iconfont.ttf": "b4d7fc788e07ef0bfe322af0ccd62aef",
"assets/assets/fonts/iconfont_base.ttf": "6e81f8021b1c664770c32263b9b8bb48",
"assets/assets/fonts/JetBrainsMono-Medium.ttf": "b41d61d1b5a063fdcb6a7cdeacac57b0",
"assets/assets/data/unit.json": "4ecc38d302fde443c63a6d56ff953fc7",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
