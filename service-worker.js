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
    "revision": "b07cb7afdfef8694131a5f3973e273a8"
  },
  {
    "url": "about/index.html",
    "revision": "b4e9bfb54a0fb26e04501d9b2c6d596a"
  },
  {
    "url": "assets/css/0.styles.5697c80e.css",
    "revision": "c418d17dc89352ba566ced4b5d4571a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4d38c535.js",
    "revision": "556205879ce9d4b6d5f4a1e87003e6b7"
  },
  {
    "url": "assets/js/11.4466d4c6.js",
    "revision": "767f3526d81b7a25a5d568784b0e7f92"
  },
  {
    "url": "assets/js/12.76fe6024.js",
    "revision": "6f5dd57be2fa7407a15c207a5effd775"
  },
  {
    "url": "assets/js/13.4cbdb392.js",
    "revision": "3c4670b955a8364d4d796fbbdaa01a86"
  },
  {
    "url": "assets/js/14.d8eef152.js",
    "revision": "f1e4f9c0f0f25b0a6c8a8d9a21e1709b"
  },
  {
    "url": "assets/js/15.cacefc8f.js",
    "revision": "293725fe4ecbfee49d09de4b8447ff79"
  },
  {
    "url": "assets/js/16.eb377fba.js",
    "revision": "2ec3531d879eedeee4faf4885c1dd8c1"
  },
  {
    "url": "assets/js/17.4e43fbfc.js",
    "revision": "1f2ee589c1a9f5885e1a27515600b450"
  },
  {
    "url": "assets/js/18.ac43213e.js",
    "revision": "d524cb9737f1cff892e3bfd595ac9a60"
  },
  {
    "url": "assets/js/19.7646591f.js",
    "revision": "2cf573ab3a8a486001c2c423e1ee0cbe"
  },
  {
    "url": "assets/js/2.ebe5f01f.js",
    "revision": "38217f76d6d42cbb9cdb8b6f8d2a3201"
  },
  {
    "url": "assets/js/20.cc880e9d.js",
    "revision": "30105814a6799d06dbf3148daf8a86a2"
  },
  {
    "url": "assets/js/21.6719d434.js",
    "revision": "bb285e2549878c60bc41d4615af3175b"
  },
  {
    "url": "assets/js/22.5ccbb491.js",
    "revision": "b73e755818db7a88150217844005d24b"
  },
  {
    "url": "assets/js/23.b49d9799.js",
    "revision": "3900a01e0401f6ee23b40705e29b0a36"
  },
  {
    "url": "assets/js/24.5c017ba6.js",
    "revision": "b931d6dc4c38887c44627e6923a2763a"
  },
  {
    "url": "assets/js/25.a6b1f2ed.js",
    "revision": "87a5aee0e1f4bbb178008b8918235ce1"
  },
  {
    "url": "assets/js/26.36b97b43.js",
    "revision": "dee6b475bf06ddec45bb1132a3f896d6"
  },
  {
    "url": "assets/js/27.d0d8b9ab.js",
    "revision": "01607d252edb6624494ba98b9af2ee0e"
  },
  {
    "url": "assets/js/28.bbc46300.js",
    "revision": "c20d8ae3486f5814b3e140cf49cc8a18"
  },
  {
    "url": "assets/js/29.524d2f67.js",
    "revision": "f850609a47febb8764cac55008214152"
  },
  {
    "url": "assets/js/3.76864340.js",
    "revision": "9ded727cf4d90192f337b83ab0b46ad3"
  },
  {
    "url": "assets/js/30.9a372fe5.js",
    "revision": "8bb09759fbf2d44cb72ec707794440c0"
  },
  {
    "url": "assets/js/31.62948131.js",
    "revision": "d1febd31b128fe57c117b817e67a4edd"
  },
  {
    "url": "assets/js/32.de74d4e1.js",
    "revision": "8b6de0a501cf280ab5a448341d764bde"
  },
  {
    "url": "assets/js/33.3053e3e4.js",
    "revision": "db22eb3100fece81d883d030b1eab6f2"
  },
  {
    "url": "assets/js/34.c53a8d4b.js",
    "revision": "d1fefdd2f0f344bc97727c75c6b0d2d5"
  },
  {
    "url": "assets/js/35.6fcf2c83.js",
    "revision": "6a8860670c3f72ca550da6c237e9584d"
  },
  {
    "url": "assets/js/36.f813ecdc.js",
    "revision": "3478fd7dd396f6ce8c44850c62e72dd1"
  },
  {
    "url": "assets/js/37.a680c186.js",
    "revision": "afa7f1fb09a0990d4b68f09ad849fbf0"
  },
  {
    "url": "assets/js/38.fed5e659.js",
    "revision": "1aa301c481e4245960fc692806d2239b"
  },
  {
    "url": "assets/js/39.374c0100.js",
    "revision": "24859ce267782e74dc95043cf0db5f90"
  },
  {
    "url": "assets/js/4.79a94962.js",
    "revision": "0a793494f16505b9157bcefad416fdf0"
  },
  {
    "url": "assets/js/40.0b5ee3fa.js",
    "revision": "0568255656baba03da8e65575c36ba1c"
  },
  {
    "url": "assets/js/41.ad722842.js",
    "revision": "340f9a95ec4b7082d11ef5c4ea47cda3"
  },
  {
    "url": "assets/js/42.6e13bdaf.js",
    "revision": "9aad82320dec6ab911e7584f9b501a39"
  },
  {
    "url": "assets/js/43.e465f426.js",
    "revision": "007d5ba65f0fffc42d27421e05eef41e"
  },
  {
    "url": "assets/js/44.f26e7117.js",
    "revision": "ea6284230ba0b74fb9c06c86a8ced504"
  },
  {
    "url": "assets/js/45.aedb00bd.js",
    "revision": "4a60ea5e1d8688a32f0b914051df02ab"
  },
  {
    "url": "assets/js/46.81bb9da7.js",
    "revision": "e1700fc3358fbc461cf73c23103ed7c1"
  },
  {
    "url": "assets/js/47.41e2c2f5.js",
    "revision": "dfc5caff701704a9696f48a3c9f4440b"
  },
  {
    "url": "assets/js/48.80326838.js",
    "revision": "fd0dd5968cbf7c3593a943566caa513e"
  },
  {
    "url": "assets/js/49.5f95adc6.js",
    "revision": "a86a7940867b6a43739b77acd7cc2cb0"
  },
  {
    "url": "assets/js/5.beee5499.js",
    "revision": "6d13618020ac64caef15b922a52190ee"
  },
  {
    "url": "assets/js/50.5061a5dd.js",
    "revision": "ebff4d85b3e859ce2caebdbd2f8aba49"
  },
  {
    "url": "assets/js/6.40e31dad.js",
    "revision": "2f62da82a606299df33250e06867b3ff"
  },
  {
    "url": "assets/js/7.3b490f20.js",
    "revision": "2f8e04e941d27a6c8a01c29ffc5cd27a"
  },
  {
    "url": "assets/js/8.0b74b80f.js",
    "revision": "6384365707ae5644f90bb026bb54bca8"
  },
  {
    "url": "assets/js/9.26805792.js",
    "revision": "2120e480e23e2430366194356761da7a"
  },
  {
    "url": "assets/js/app.5870107e.js",
    "revision": "d8553c9d782dc0223f8b9d7f783f6939"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "691a8c8da7c219f218dbdb5e538ffe16"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "d1ee26b144d5a365e064ee38a99ef4cb"
  },
  {
    "url": "category/index.html",
    "revision": "8003ae232b8ae4be5e2062f696fd37a3"
  },
  {
    "url": "category/learn/index.html",
    "revision": "14a5d39c0c447e178141c2b0364444d3"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "ce29fedaa7182669ebf4c728d0bd2ac8"
  },
  {
    "url": "category/summary/index.html",
    "revision": "80bcb5fef9c7ee866ca6c6c104d23f2a"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "5bf6b0cf136228b2ab8ef0f16d45a194"
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
    "revision": "ec6723d1fb2e934c44d6218613282ce0"
  },
  {
    "url": "lib/index.html",
    "revision": "62887089672fd535f0723ba79126025b"
  },
  {
    "url": "lib/m-less.html",
    "revision": "6be829ad9c0862ee81db61d45799e1c2"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "8d9c6826b503282a964415184e557582"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "c147843553b85f6ec82605e3eea1d66b"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "22e835574625d5bc20a2b3b656a9f570"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "86947f9688af1faf7247939b11ae4e98"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "257cc4928894b67814e850b7b0c4932f"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "b2076f12381512fbc65bf0f8eb13d928"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "3186e19fba090149cab10be1722add95"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "dfe40222485fee7e1f0724b1ccbced24"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "d1a15eee3e1c4f9e2f2df3e64c8d3193"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "1df445236507da81b9184a391631468c"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "42cd28573a198901a4ac2de88d1b469c"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "7694286e8f9559ef11415f4a628ed351"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "a219c409bb90031dca917affee636085"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "76a30c99b39184d9a0f85929990eb1d7"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "da515d40a5b52b15a4613804430cd99b"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "7a095715059b40ffae75295c50cf09d3"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "be1093fd25782c1eb19becfb8d74202d"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "f132121760f384827e4783171b03af5e"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "232a62f2dce498a5282f13620208a6a9"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "f83055371ccaba409e1469de3b8c85f2"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "d390e7213fffe455c7618f1114c102de"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "64e5a66c07a7375532b4bf6ff1e67c45"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "e01aa5c9a6d9856d852a4bb4c2e5f099"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "d359b2ba7cbba54fb2e4910d35b45e41"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "dc2ad5df9d8ed40e33bc0ad76f796166"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "665d2cfdebab4e1c65dbc5962bc16f91"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "bbd6874124a0addae373b9a968b5451b"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "0718b3c2657dc32a48f29325b54e0e98"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "f3c36086fbf9444851e79bc482287ab5"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "4cba58756a925d20899d76f490a66324"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "6de7849335b88ed0eead0a800aebd56f"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "3ebd8ff8724d8b58d30ed57aedb8d45e"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "bca88f53fe6d312b1cc8a0e601adb8a3"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "7adbfbe6a0826412ef6d7332648869e0"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "6e1c7c83300e5b79d6386ab5c00f6687"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "5b143e64ac3c51dfce41528e9c6005d9"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "2399109b51492e85dccd4ae15d3039ac"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "fac4283563aeaabad67d855166635e4e"
  },
  {
    "url": "posts/index.html",
    "revision": "3a747083a697a471a1f10ad76bc964d5"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "dc77afb0076413d7d71584584236c644"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "40ae3b74b29f9504e3596540ba65ece1"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "28d81cf41f0a681f07bbc17e081d2791"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "58d38671d0aa22a7af55b866cdee9e6c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0a46b38039448edd76fdf4bb85b940b9"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "69b4b7725f83f249f0e88a1c826ac003"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "66355c96a0ce698a651c671ebf8bf52f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "367e96be373e1796f4991fe1f07d88ab"
  },
  {
    "url": "tag/index.html",
    "revision": "cabaa4ea32dae88dc10c997c8969770f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0ec1f1fcf2f52fba627c3c72bd8aeef9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2aa1abe3144f8f4c01cfeebe6c8c79c5"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "786f6c3409a0451f5962d8b0fdbb4aac"
  },
  {
    "url": "tag/json/index.html",
    "revision": "737783081ad891f7f80d3ee4ddd47910"
  },
  {
    "url": "tag/less/index.html",
    "revision": "a34c0f0f4bf0e7e1c692807e120e1f11"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "913bb5d079c8a30ba581d3117b8c097b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "5c755a2512db8dd2a16881f004e177f6"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "4d1b916f00d8f5e53cf733bde34f2c5c"
  },
  {
    "url": "tag/php/index.html",
    "revision": "48d9f110eaffa33156faf02d690ea687"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "ae76f2f08d29c15a8cd46255dfd2e9e1"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "27407abc78e57b9d3c772c4e978a72cb"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "0cb8393f8c70df01f12f41e6a917c295"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "08dd15f097d64fb00377c0a10f11638b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cf8e5b93f6b4c23931ab5079d95f8297"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2af419ec0c2629bf694990b55306eb92"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b6736c39379ddeae5255455422a976bd"
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
