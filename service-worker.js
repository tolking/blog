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
    "revision": "81a61da6e803ce74f1e6bcef651e1c3a"
  },
  {
    "url": "about/index.html",
    "revision": "51618a538977089e11d0978f503cc582"
  },
  {
    "url": "assets/css/0.styles.97335723.css",
    "revision": "c0cb0805f90f1e2278932a64d410b0ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6586391e.js",
    "revision": "05c4f6a68263118d82a9e7fe17dcf226"
  },
  {
    "url": "assets/js/11.7ccf5c57.js",
    "revision": "71927000ce3aaf782d0c8a605335e6ca"
  },
  {
    "url": "assets/js/12.88a29ab7.js",
    "revision": "e0f3d28870f77d1458657f7da2fec529"
  },
  {
    "url": "assets/js/13.bb44d884.js",
    "revision": "5e8043920fc0fee73a624dd386ff94ec"
  },
  {
    "url": "assets/js/14.922559bb.js",
    "revision": "8ace7e89589957b71911bfa6431ba9d1"
  },
  {
    "url": "assets/js/15.19af5af6.js",
    "revision": "516241294f85caa8f69cd17a5b4b5f9a"
  },
  {
    "url": "assets/js/16.aa0915d9.js",
    "revision": "bb73778b04651b3c9a28870a167dc14f"
  },
  {
    "url": "assets/js/17.f2b0ef23.js",
    "revision": "a053f39454899ac2815cc3ac1aa7714a"
  },
  {
    "url": "assets/js/18.e701ccbb.js",
    "revision": "f5ff8d2773467f11fd6ed9f59cf50b20"
  },
  {
    "url": "assets/js/19.eb480789.js",
    "revision": "2755be4713306c59e8147a97bedf3791"
  },
  {
    "url": "assets/js/2.56b9c6b3.js",
    "revision": "068a72aa8064c4c3f47ee88b7a990f89"
  },
  {
    "url": "assets/js/20.ec6c5043.js",
    "revision": "c691451a0ce9c5007f49acdf8311330f"
  },
  {
    "url": "assets/js/21.dcf7f926.js",
    "revision": "fab385ab6206038d125d19adbe2d391c"
  },
  {
    "url": "assets/js/22.b07982b2.js",
    "revision": "6d4ef8bf4bdc1f0153f012fae3446704"
  },
  {
    "url": "assets/js/23.6d3e3396.js",
    "revision": "b64957ddfd38e61d8c85596a4d52d46a"
  },
  {
    "url": "assets/js/24.5e7ff771.js",
    "revision": "61fd1d18445fda11166922791fa003eb"
  },
  {
    "url": "assets/js/25.7b735310.js",
    "revision": "0fd9fb77aaa359e1125848241afc6157"
  },
  {
    "url": "assets/js/26.3bd70acb.js",
    "revision": "dff53b1288eaacba1164afdcec799289"
  },
  {
    "url": "assets/js/27.6a7231ac.js",
    "revision": "72207660a53f2f209094eb97ee186111"
  },
  {
    "url": "assets/js/28.dd0858a0.js",
    "revision": "4f99d5ff60083507ec3fa01aa5da25aa"
  },
  {
    "url": "assets/js/29.a8394764.js",
    "revision": "c2a33350b4eda6969ba8564f1e60279c"
  },
  {
    "url": "assets/js/3.c7f4fcbb.js",
    "revision": "43679352ae30966858e9e17af0170c2a"
  },
  {
    "url": "assets/js/30.8e90173b.js",
    "revision": "a6e774c4836771675678cd3e2693aac7"
  },
  {
    "url": "assets/js/31.ca9a8be1.js",
    "revision": "24dad1bcd0981720a3ed0153382cdc39"
  },
  {
    "url": "assets/js/32.273d322a.js",
    "revision": "6939991c939714b8e20b255750081c7c"
  },
  {
    "url": "assets/js/33.6977d13e.js",
    "revision": "17c8de940a0a8af82f4f98b6d9532a18"
  },
  {
    "url": "assets/js/34.8af4ca79.js",
    "revision": "7097524790481a26e2f53ed6611de3ad"
  },
  {
    "url": "assets/js/35.270da6fa.js",
    "revision": "a0aa761b21021563eb4f51f10df65a32"
  },
  {
    "url": "assets/js/36.4297f7ab.js",
    "revision": "0ac1cbe52d7e2fee368f5227b16df82c"
  },
  {
    "url": "assets/js/37.9c6716d9.js",
    "revision": "2089c3f1ad91de0858e2d35a4d087ae7"
  },
  {
    "url": "assets/js/38.26809812.js",
    "revision": "982cf1295900656c54cab99d78be4f3d"
  },
  {
    "url": "assets/js/39.ed723a02.js",
    "revision": "b21a919b6095d643f71e14ef03260a88"
  },
  {
    "url": "assets/js/4.c7dfc8a6.js",
    "revision": "b2eab03955ca2fd9c96d8b583215ed93"
  },
  {
    "url": "assets/js/40.dc9f3434.js",
    "revision": "140fa9dcda22e712280c510f5c578b41"
  },
  {
    "url": "assets/js/41.2b6fafc6.js",
    "revision": "2680d98ead2d57758c2d424620865bd2"
  },
  {
    "url": "assets/js/42.d285d647.js",
    "revision": "04eb51ba40e195f5f83fe8120d284f41"
  },
  {
    "url": "assets/js/43.74d2780b.js",
    "revision": "0821aa9506d48fedaee47ce64b8c7870"
  },
  {
    "url": "assets/js/44.5af9b8f5.js",
    "revision": "5f889e99fae15158eaed6f0a0f390771"
  },
  {
    "url": "assets/js/45.ec96adab.js",
    "revision": "de1485df5fbdce58dc2db9b20255c8f5"
  },
  {
    "url": "assets/js/46.20e40304.js",
    "revision": "ff2165e05e1e57a8ef3c1ce0faaf7411"
  },
  {
    "url": "assets/js/47.1eace095.js",
    "revision": "db62443ac7683c6b3fdd4018be801d09"
  },
  {
    "url": "assets/js/48.11fca4f9.js",
    "revision": "3cf7063fd26948114d1ec408df0245f5"
  },
  {
    "url": "assets/js/49.147af523.js",
    "revision": "da0d5a508f068cc8e15a967409618a59"
  },
  {
    "url": "assets/js/5.f97ea937.js",
    "revision": "0d66f89bae7452eb6a635c991c66ce32"
  },
  {
    "url": "assets/js/50.548daef1.js",
    "revision": "0ebee4826682a1108bb84750b930781d"
  },
  {
    "url": "assets/js/51.bb7c0d4f.js",
    "revision": "1701136477a2f85c9a2ba10a79d91bbf"
  },
  {
    "url": "assets/js/52.98d3a07b.js",
    "revision": "ec076408b379baa0958253be14441330"
  },
  {
    "url": "assets/js/53.4dc1ae5b.js",
    "revision": "b6391cf9368e96939aa0b6a12823f637"
  },
  {
    "url": "assets/js/54.64e150a0.js",
    "revision": "30617f0b7645881c269193f03db39379"
  },
  {
    "url": "assets/js/55.ba14f0ca.js",
    "revision": "e404b1a5f72b128651c8fda4ac820b37"
  },
  {
    "url": "assets/js/56.ad06a27d.js",
    "revision": "c017279771e523e0771f7560f15dab49"
  },
  {
    "url": "assets/js/57.172d6cc9.js",
    "revision": "8919ac8b431dbecde05bdfed8837fda3"
  },
  {
    "url": "assets/js/58.201c9b5a.js",
    "revision": "29bf783af18fa4167ab549e47d68924f"
  },
  {
    "url": "assets/js/59.21aedaf5.js",
    "revision": "df3adb2e264ad8861df8848218042d62"
  },
  {
    "url": "assets/js/6.9c80be95.js",
    "revision": "b18f6202498ab01ac7e431d97760324b"
  },
  {
    "url": "assets/js/60.d0b54296.js",
    "revision": "167d77d8f2b72c02c771f9e63ae29133"
  },
  {
    "url": "assets/js/61.1ac7583a.js",
    "revision": "e21488ab51594633613ad038517d0f5c"
  },
  {
    "url": "assets/js/62.48061c27.js",
    "revision": "2a959bbb757240a16d2e39c2c4bc0230"
  },
  {
    "url": "assets/js/7.4a65cd16.js",
    "revision": "eaaf6d16cf41ee76f96fe83da43207a6"
  },
  {
    "url": "assets/js/8.3020e7e0.js",
    "revision": "79f2cdd120e091bc06bceee2fe7b70e1"
  },
  {
    "url": "assets/js/9.71d4643b.js",
    "revision": "16dfa3f28f22740d0fee4e5b26d91d4a"
  },
  {
    "url": "assets/js/app.b1836c69.js",
    "revision": "308b2829525db3a01b8cf6e4d2fccc01"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "7994f7033b3ef95d64ed3d60e22c08cb"
  },
  {
    "url": "category/index.html",
    "revision": "e5bcafc060f2ddede6a3fb4bc3a2dbc0"
  },
  {
    "url": "category/learn/index.html",
    "revision": "5ec72ac580f16d4b5409e768cb93fc4e"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "3eda6c02977728d7a3fc7986c58890fb"
  },
  {
    "url": "category/project/index.html",
    "revision": "930124bf96ad7e7eab0cc6efeafdd08a"
  },
  {
    "url": "category/summary/index.html",
    "revision": "b27f49a93ea1290d49c489944740f886"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "38bab1c6b83c2291f9ac78154af9e017"
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
    "url": "img/mi5_1.png",
    "revision": "89b5c265886f032315ec0ffb3e4deafa"
  },
  {
    "url": "img/mi5_2.jpg",
    "revision": "07e5b4a185085d01db5ed87ca46d688b"
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
    "revision": "3a7fa1b1b93bb8439c100b1f5ce2eb1d"
  },
  {
    "url": "lib/index.html",
    "revision": "2aaeade1fda4be516c85e6e853cf03c3"
  },
  {
    "url": "lib/m-less.html",
    "revision": "a87a02e0c2b6799f18c022d085d7f341"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "cea1bbb9daba86ad9846a19e4192b350"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "84553727b686bba49a001dce31ae94ca"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "7b6f6f206543040192964b8c488e8278"
  },
  {
    "url": "lib/usercss.html",
    "revision": "4606e82eda15cd8e59a6a2a3a0409434"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "8d4e0f29bf2be66a5301450f4c6b9ba8"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "418cad17fc07b70ecec8ed59447be0b2"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "070eafba3ef56bf06dcc1a7428103073"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "812170dd5ea0692f20e6fe914149f60f"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "e1a3a6685f89bac2948f3f660cb956b7"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "4c69262abd7ea8437368abd8fb4cf2d7"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "a103e6bd556fd379bc00b95cf63cf17e"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "edb69e4708626031a248b10ccaa6c81b"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "d4b949d9a512f39c47de8b7d948443f6"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "660c772c6db0d4bc2ca2a4c0874d3bb0"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "53ba3ca786863a3c78a231d37950e70e"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "edf3621b1d516e254a9f4c212d9f3d22"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "3449574567106afe1ded139d50f3a6f6"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "b7c214e3b8ef7e2e8cc06c2964c9b7a2"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "0111fbe737be2169d33416106722a521"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "3339baea7a6cdef6463b495332e66064"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "3bfaed4a8449a115bd1359406683eded"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "b1f0621455f120388c8bcec97775492e"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "217ef9def4179da0737f84d35e69b589"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "504cc551c42ad7b8d80d1eed0f1e5cb8"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "eb3b1f94f3ad2894b0f5af89fc988a0e"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "e2800204ca0caede6cef394cd903c7d0"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "ca0c4773cbbfe98877523530cac4d089"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "f3b6cb7f971ee45e05c24bf0bc64007d"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "acb3b97146a7fb754f50695eee01647c"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "8d362900000cbf81c101906365b8a55a"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "4524427faf2ae53980cd26a0820dd256"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "65b94cb62dcc9282ce91e7f0741fd0e3"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "c6f9e1c7a3c3d71eff49d7a4b00969cb"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "ef65a59217303eee8a32b8ff62370e08"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "e340503eb628762275160d1b7905868c"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "2d80efede2c195889ba84a3b7bdd8ba6"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "dea630612c3470bd17a8d661704f37ad"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "f1b2e79bfb05042621127f789e9f8e9e"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "c4b9c5aa9b764ab598e56e1db9ca4c46"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e2274af673e499498d714cea21be6f00"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "393a5f5587b86c5c4c4fdcadb07f472b"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "791dbd912652f50e6c42e545a21f52ad"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "43056074e9fdd31fb3dddab420ca495f"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "3d149b6cc386f5a1ace0194938bad0eb"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "5bff6866e5ce1f7ef5232013e17f9bb3"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "8a94fbb57fad167a874552ec1af6d312"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "1c4e5c00fea783b08e93635045f80837"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "4a37762aa5a25638d94d4e48da6346af"
  },
  {
    "url": "posts/index.html",
    "revision": "a1b74e7e9f17360140d6694ea5e54410"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "59f395c2edf5288770433ec1175e6b2c"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "88f6684050c68b583f4c102185cda3e0"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "0236f95757552e33352ac2231ae95ead"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "350e9b3503d00a674c918f33e5e0e176"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "ed8434468774ca4091324dec821774e0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c89c2076e0fd35598a1359736b448a90"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "a8b31aaf63b9b2e2d724a2231e64331f"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "537a03835f1769200a4c3da68a0bbf6e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bfe832eef0d629e015e0116cbc8b81e3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "35bf9a395b24b847e498a6df5454973f"
  },
  {
    "url": "tag/index.html",
    "revision": "6ca4c74171e30c341befe3228112378a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "747d09f7f9f54f63ca73f6af14dc6277"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ad85923362ab2a7b2e1d1cd4863fc0b7"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "69f069f520743c2115aa6109fec6ff4b"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a4372b564e443b37d772ebafb6d36d5a"
  },
  {
    "url": "tag/less/index.html",
    "revision": "364c18f0f4fda9df7f1f12468681048c"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "207a6a267a092fef998dca30521003d4"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "56f676c50d7de86721550204590104df"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "740b0e3586b109f252886b6a9c019dd0"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "1f895ca875f40d89e39b1a1ea929326c"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "736bf941f310e3ee9326d4a3079dcec0"
  },
  {
    "url": "tag/php/index.html",
    "revision": "2fe923d64a34fcd0d9fd8aa6c32ac569"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "f38a553259a05b69ec8d46162ea02a98"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "94b29f5abd6281347f848334de4b6870"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "3d9ea3a1c3d9ec526ed245e29dc7067d"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "bde648326dd6408359fc0c341f61f779"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "4b45a12f31e25daf6a4fdf2adf3da9bf"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "3784dd1c2dda66761cd14c6d966ad831"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "004dcc6cbdaee40745333ed4bb52206b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f72ec1ab113a0072bcea3860b5203ce8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "93bc527fdee6362c287f024254a0185f"
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
