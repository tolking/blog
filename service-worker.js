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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "url": "404.html",
    "revision": "8e99a232c64472161ec46d6594d745d2"
  },
  {
    "url": "about/index.html",
    "revision": "0f71c2e5534af968bcca8a4c36dfecc0"
  },
  {
    "url": "assets/css/0.styles.262bd1c7.css",
    "revision": "617434b06cc72fd4fc0f55e16706e305"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8c860048.js",
    "revision": "90948423d8e8dce73c19d019cbb79dc0"
  },
  {
    "url": "assets/js/11.0bdca3f7.js",
    "revision": "c9689ac9b4f9dbf632ff6bd43209275b"
  },
  {
    "url": "assets/js/12.daaf6897.js",
    "revision": "6ad32583e32dc61a8a85341b182ea2f6"
  },
  {
    "url": "assets/js/13.a7367337.js",
    "revision": "fc6c6356bbf8da22a54da347fdb85c59"
  },
  {
    "url": "assets/js/14.9125a744.js",
    "revision": "266807d53f1cf548432d31d360ebffd8"
  },
  {
    "url": "assets/js/15.6cf6ee65.js",
    "revision": "c3328c3daca6b75d93ecb865135995ca"
  },
  {
    "url": "assets/js/16.832ad3ff.js",
    "revision": "92529eaa1394cf34497e52115c70d557"
  },
  {
    "url": "assets/js/17.d1c54487.js",
    "revision": "0d8662364bf5158abe60b4dd0c52df6b"
  },
  {
    "url": "assets/js/18.65baca03.js",
    "revision": "334beeee656095da50935c83a4d58037"
  },
  {
    "url": "assets/js/19.557bc401.js",
    "revision": "b4e5a44e53e8ec540f6eda78d4b1abda"
  },
  {
    "url": "assets/js/2.40f2ef7f.js",
    "revision": "a3c96b06e81259b0d42acedae26aa484"
  },
  {
    "url": "assets/js/20.84ec299a.js",
    "revision": "e1ffe23312bd95d0aafcab8887b286f0"
  },
  {
    "url": "assets/js/21.ebd79cb3.js",
    "revision": "d290d42a9b305901823e17680e976bb8"
  },
  {
    "url": "assets/js/22.f683c31d.js",
    "revision": "0d0ba0644ff3b278e26e88a1cb243adc"
  },
  {
    "url": "assets/js/23.6a37aaf1.js",
    "revision": "a6de9ca25d36216a1a170af80064f290"
  },
  {
    "url": "assets/js/24.3578e90b.js",
    "revision": "788c709479ff61c6ab910068bfa87898"
  },
  {
    "url": "assets/js/25.4864650f.js",
    "revision": "62fd09bdf1173a22430678fc6929759e"
  },
  {
    "url": "assets/js/26.629dc996.js",
    "revision": "9f9230bcc3c6d69a6082b1810a433bca"
  },
  {
    "url": "assets/js/27.93111cbe.js",
    "revision": "8c861dfda4c232c1f1ce7dc098f51949"
  },
  {
    "url": "assets/js/28.a831e24a.js",
    "revision": "4b623e9624885bfd95164158109a449a"
  },
  {
    "url": "assets/js/29.ace8eff8.js",
    "revision": "0ecd6f881fc13b3f19515efacedd0d90"
  },
  {
    "url": "assets/js/3.7bc1feb1.js",
    "revision": "dbf462e1a8d14244004f53291a9ec6c2"
  },
  {
    "url": "assets/js/30.5426a9e7.js",
    "revision": "b10f33529799640db8ea1b22ebcab8ff"
  },
  {
    "url": "assets/js/31.660e2b47.js",
    "revision": "1c990c78c528146e4b361ed027c8e1d8"
  },
  {
    "url": "assets/js/32.81b66581.js",
    "revision": "b3deb3450860891f5a0b88efc7166971"
  },
  {
    "url": "assets/js/33.2d961fa3.js",
    "revision": "fcc9137a00215791fc207ef5a5383da9"
  },
  {
    "url": "assets/js/34.c176011b.js",
    "revision": "2164f8248f9b0d0faa20788a878a7618"
  },
  {
    "url": "assets/js/35.39f32b2a.js",
    "revision": "7633c7013579481c6de6fa30c2415b50"
  },
  {
    "url": "assets/js/36.8722543f.js",
    "revision": "3d28f9c01e67f5bac11334d5814886cd"
  },
  {
    "url": "assets/js/37.ce402f96.js",
    "revision": "5957d9f96c9e5df1d05d06a41838cdda"
  },
  {
    "url": "assets/js/38.359251fa.js",
    "revision": "1f5441aac95d21faf8fa0f3786be15f9"
  },
  {
    "url": "assets/js/39.287bd51f.js",
    "revision": "1d4a4dab1ec518ab39fbeb61852f51b4"
  },
  {
    "url": "assets/js/4.343ec6c1.js",
    "revision": "1d37ea8f68dcccc7c3f226391428d65b"
  },
  {
    "url": "assets/js/40.8abfd424.js",
    "revision": "e8d9873a7552026d6ef0d4cdb3d40145"
  },
  {
    "url": "assets/js/41.eaa8255c.js",
    "revision": "0e89e664fdbb11b765d182e6f9531640"
  },
  {
    "url": "assets/js/42.80b7d753.js",
    "revision": "b7ca3c51c85150059bb927253b4a215d"
  },
  {
    "url": "assets/js/43.ee8e022c.js",
    "revision": "1a7ee62a10aeea2b39dc1fd597730b58"
  },
  {
    "url": "assets/js/44.cfe0bd1f.js",
    "revision": "1c5a50fad2449fb0541273c343e08358"
  },
  {
    "url": "assets/js/45.b489753f.js",
    "revision": "40e014b90c03d010d7c357d9a44ca520"
  },
  {
    "url": "assets/js/46.81c24560.js",
    "revision": "381b259d117de683f8e04ae71f44e23a"
  },
  {
    "url": "assets/js/47.623304ae.js",
    "revision": "e133b408a2d0a2628ec9229f7d99bdb2"
  },
  {
    "url": "assets/js/48.e465f774.js",
    "revision": "cee661836508c8ac5126023e14f5f6cf"
  },
  {
    "url": "assets/js/49.fb42f6aa.js",
    "revision": "1ed511edef7fccee7e7bdbcd4269a219"
  },
  {
    "url": "assets/js/5.8436f02e.js",
    "revision": "ba0f859a185a22146a5f7b1a70121398"
  },
  {
    "url": "assets/js/50.4080d58a.js",
    "revision": "59eab68bb2b89178485dba57bee68fc5"
  },
  {
    "url": "assets/js/51.c320d099.js",
    "revision": "5457534c0b6df63db37c676fb442d487"
  },
  {
    "url": "assets/js/6.11a2fcf1.js",
    "revision": "456f70167c032370540a2e5b94944aa3"
  },
  {
    "url": "assets/js/7.05d344f0.js",
    "revision": "de85322fdc56a97b39c361be7ab977fe"
  },
  {
    "url": "assets/js/8.61bc2685.js",
    "revision": "dcdd44ab79133e8f7392965b39057d9f"
  },
  {
    "url": "assets/js/9.73db28a8.js",
    "revision": "b37ce2abfb9395297ad117cf5e38c916"
  },
  {
    "url": "assets/js/app.54b51d1c.js",
    "revision": "0d8e1c7bb8d5746a33ec736f765a15a4"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "18b064cdb243a5a503958e0d0544e6aa"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "bd64f7c7b2a067ed6678d5ba4a2d35a2"
  },
  {
    "url": "category/index.html",
    "revision": "da5f8c423035b8ffd805117f7e8969cb"
  },
  {
    "url": "category/learn/index.html",
    "revision": "0353a18e6404cb3bb66a3abc55176208"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "4bc1bb1d052e62e7603b0ecbd891a855"
  },
  {
    "url": "category/summary/index.html",
    "revision": "929e9e4ff524ebaad048333bda90aa48"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "375d52e944a6d99f41e0decba0012fc7"
  },
  {
    "url": "img/cover.jpg",
    "revision": "c236b50db9bdf11e85ad00f5c7318c9c"
  },
  {
    "url": "img/doubt.jpeg",
    "revision": "cac9a2612df7e33e5cd990d9cc528160"
  },
  {
    "url": "img/homescreen144.png",
    "revision": "9f3cba23df82ada92decb31a713a0efc"
  },
  {
    "url": "img/homescreen168.png",
    "revision": "3842faf886bda5ead9605d4fdfa573bf"
  },
  {
    "url": "img/homescreen192.png",
    "revision": "3e15b814224590b0bee172c355714be6"
  },
  {
    "url": "img/homescreen48.png",
    "revision": "3c7bff05f9ccb5d7f788b080648562c5"
  },
  {
    "url": "img/homescreen72.png",
    "revision": "c9847868ec5458ed89109e5dfd4be674"
  },
  {
    "url": "img/homescreen96.png",
    "revision": "a3c21aee9bf2af416a3d79b84f30facf"
  },
  {
    "url": "img/js==.png",
    "revision": "2c4b3185fef133ba80b93fd279071842"
  },
  {
    "url": "img/logo.png",
    "revision": "6cdcf401375a7bbfc74b03ca0f0fef53"
  },
  {
    "url": "img/vuepress_plugin_reading_progress.gif",
    "revision": "1405c178b1c1c9527ba731379b26adb8"
  },
  {
    "url": "img/vuepress-theme-ououe.jpg",
    "revision": "2f046acae1799e70f36eb4e7bac211d7"
  },
  {
    "url": "index.html",
    "revision": "0b609ec4f8f0a8f9bd63b136f465f587"
  },
  {
    "url": "lib/index.html",
    "revision": "5c6f3f5fd563f0cf144f24512eaea47f"
  },
  {
    "url": "lib/m-less.html",
    "revision": "08b0127b196e9587794385431f2ed32a"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "fc2189352273bf32a65854d991538313"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "df699c3f8a2b19930438e3c8b49cdd3d"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "d615e70b218a638f3e8f7e89b5500046"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "007164fb9d8f1ac49cf55ac6a8c54454"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "e6d230c9821c0bf132831a216caa3001"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "c6b7bdf056b84b88d913a64b738d6029"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "b83bf72ece724e251d6c84b2c2268976"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "c8ac4e7d6703c700fb7255c352359f83"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "36f0dc5eba6bbb9093b831143480866d"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "3b4358843e050583151b2f576c02d1eb"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "0a98b32c96668c7971d4aa56f0ade099"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "8df719cdaa638d05bbe2cf5d0c8e5a45"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "b07ea9010d593859ddbeb73127d3a25e"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "33e86e10af489c335d12b9e09db69a7e"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "1ad82c0f451e051171b4a03856c03f9a"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "8164e5e2e50eacb6f2aa937e7a9984e0"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "1424ee3bd0fac0b59690f68091cc8f55"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "0eae689f16a3f71cd5ac2c0490098976"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "6870ad879e5963a4a391a4fd510ff6a4"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "2287fd3d22c41df10978919addba84c1"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "48cb3ddc919c8ef03d6e1d21a3421ea6"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "ae5e9b151fe0148a1a63dc4168d68441"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "e80729cc3444f666594fdf7f1896e387"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "bffe35351f2ff6c68b95bb4d7ad39060"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "efe453850f242e03508a1456a992d146"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "a50e72bfa3060bddca0e88059a4ca0c2"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "fbd5c6c82f74abae6a7cbeb4c1a38170"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "abc169767e9a548617290d419d8716b0"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "511d1bfba04b043a4c40e848d13d49aa"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "fd3f9a542eb2e17a20679ea86d84766a"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "3c9d9764a25ab747dcb0009eddcc7b11"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "390f445faad437506796ecd69a348bd5"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "a7849e762a740e3c8a23a53d95f16a77"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "4c1f98e9d32174e00f77a998f93ecf88"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "35be14e51357af9c5bbcd18e0e6b4545"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "08ff7d7b5e12e3dba3043d64406ce6c4"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "33eefeca3290850100462e181cfcb625"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "1c5bd6cefca9328f07df62df8a7c7d7d"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "06313db1667b9e3041f4eb3bae1e3d4e"
  },
  {
    "url": "posts/index.html",
    "revision": "dc8de9894db95b5f6820fe6b0ce6a8bc"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "fd0ccac8741ad8ddcae04ec29aef03a4"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "fed90cfecb036e70baed3bf2214a5265"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "e63784e36abe3a354b850f5e54997ac6"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "22dacf23d895db970eeb5f06936784ec"
  },
  {
    "url": "tag/css/index.html",
    "revision": "61dce1eb5e476aa0b4873ccf79b670f3"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "f22f5c29653c0dc5ae7247c4e2a1d574"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "4846d2a8b96b8ddb71ccf0b263fb461a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a8e257c4b7ee6cabecd58a2ea402c831"
  },
  {
    "url": "tag/html/index.html",
    "revision": "906c62ef31b012e898d41984c11e1d5f"
  },
  {
    "url": "tag/index.html",
    "revision": "516fde52ebb839da2b9750f0f708b8b8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "039a277ee75fdc14a66534cc67fffba0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1947a9117f58091e9548e895d1d38012"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "284db89078c5a690589eb5f409002a11"
  },
  {
    "url": "tag/json/index.html",
    "revision": "46cd6c60392e05e783e0f642a2dfa895"
  },
  {
    "url": "tag/less/index.html",
    "revision": "d64fa1e07658e76ff616d270d3779c6a"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "786b830a81a1bb883dd6c94c98c1f0eb"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "8b9da48232fe5850b999a55a4bd79fe2"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "b7c30e8e716c0af24056c94d927f3c74"
  },
  {
    "url": "tag/php/index.html",
    "revision": "402f5e066b4939a31bbeeae921bb287b"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "5f19b8e1e3c682cf4a15339adb3ef6b6"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "2133be2631ff54762b001f4edee1fff5"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "dd81cc09fa218b0d8b6beb499778c84d"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "cf71f597481f5c166cf45ad018f75555"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "b80f48f430b84cad705db5114ab23a99"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "605d94334c333bf26a868aba43dbfc30"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1172578295a6a1e8aa70c0a2fc50edf8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
