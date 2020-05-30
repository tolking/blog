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
    "revision": "cc447126f651243ee58fdc5140859c00"
  },
  {
    "url": "about/index.html",
    "revision": "5665a6064eeb8b9d46144870990dc4fb"
  },
  {
    "url": "assets/css/0.styles.05c31054.css",
    "revision": "1de2ad3b4f8c489efaf5b4f511795efd"
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
    "url": "assets/js/50.20aa9464.js",
    "revision": "5407821b128aefaefa98290f79645502"
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
    "url": "assets/js/app.cd2f7d8e.js",
    "revision": "665f22794c3db6b99f2e5cf2cf2fa852"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "1ec078d048712fbaed3964bcf58d5cda"
  },
  {
    "url": "category/index.html",
    "revision": "4e21b6b3d4a915428d9c95032de31947"
  },
  {
    "url": "category/learn/index.html",
    "revision": "11f4e6c524a9280fa0fb2a463a56bcc6"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "2c8361b0d6f1c0d4d4411b1eee622a1a"
  },
  {
    "url": "category/project/index.html",
    "revision": "32cf0a81ec769ed3340dd8971970d1d2"
  },
  {
    "url": "category/summary/index.html",
    "revision": "faf7e76a602c451449b9bfc5cfdf3a29"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "774a74742adc6a21ac1b87e8eb21fc90"
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
    "revision": "3460980f31f2611bf37579d1a5e7237c"
  },
  {
    "url": "lib/index.html",
    "revision": "a3e7df6f49e632fa89fee4103bef96ae"
  },
  {
    "url": "lib/m-less.html",
    "revision": "788e960c849cf789c6d7a202121f1afd"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "a93cb6bb829772794eb5ba53ef64f431"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "47bb7f568fa0636666dc4bb33520ea8f"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "6670e780831acda3a97635b04435c840"
  },
  {
    "url": "lib/usercss.html",
    "revision": "474fcbefca891343812727a9f1f6008c"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "2eda7597a5f70db645bb5d83a9f38b8d"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "3765ce3d3ac4a60b2562b9e8a53eeae4"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "d8f0e26ed54f75bec375baa50888f4bc"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "4346236d4859f5f37ed388203925e87e"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "6cb175ec068b73415a5f6fb9f81e2d77"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "d10e67a47555ae535c4c2b2172f1319d"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "9f52f2850850617fb0625faa390c89e3"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "e342eb8e724e7fd5d8c519155e248040"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "0012da95ad73f3b5e734a5cbc4ec5e10"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "428865f0c91b3e7ebcc4847ad026ce60"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "a31189dae9a74e4d66bfe2e640830432"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "eef47daabdc279a0c443747dd3da6600"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "23b4b791069293a806258cecc7e6b1dd"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "fbfbb70160824ada19ba57ae1768a28f"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "8f7b73e569b25dbbe3bcfcf78c481465"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "8227f275ced40c2994c279b002eca636"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "2e7eb91076c25bd32b625cc532505c24"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "3dd11796b3e40a1086df5740aa78f1c2"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "e1e978fb8f023fcb26dc78e92d201b26"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "7699bd7661ae977fff4b639d60f3de0f"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "7be911749984e52361ba02e504f981e6"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "c9ed003cad525b005eaba98978d69947"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "6f0091445e46cb3f870be71ed3ff24fb"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "b1921f631971e3fe95443ec4e5368756"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "75f4a9c99ebffaa1c6bc94cbfa68dc5c"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "dcd9c85aea1d15084a84354fb36b7a40"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "580c11926c95ffbb797fa7094c8f3a1e"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "19727ff69315c7e4dabe644896ea057e"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "18ba5e219ae6c0f4761dfb53a55ef17d"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "e4a47249bacf6e84aa404762dc98d9f5"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "d15ed6ab8aa3532230e50378effdfba1"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "d61766eae44022e86b69d5de1067d041"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "7340442110bfa36c6bb181e2403d4ef6"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "184a86ad6f4c5ba3648d91f10d61bca3"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "71881234c7f5cd02ef6a786dfa86221a"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "0b53d2424e2d1a24df1130da29d72a44"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "582d0fe0fea69e07347e1783fa0f7210"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "e7242e802d8fc93b954464fe2ff54ab0"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "322e7f0c3ea5e0e1a06714ce2a373206"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "09c96121d3da8e8bb12a18432b98f5f4"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "398455710e4cb270982b847dad2aa13c"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "ab90b361d3be5db54b9581488e952ffd"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "85a99a32f30b1f70f8b5cc27835e66b1"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "63853d4b766bf04ad72093e48f8dd186"
  },
  {
    "url": "posts/index.html",
    "revision": "f0626efd5122cc0827f0b0d9b755ff6c"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "7cd58fb7f1dde5f9ee184fa2c99d566e"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "d33225e573e0a38111b255e361b3aec2"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "1f08d137e591731c4e213053c92044b4"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "b44b7447c8159a00fc77bf931b48721d"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "602ffd896e98c1f5df545501a4ef2021"
  },
  {
    "url": "tag/css/index.html",
    "revision": "84d66917b63c3af096f4d4b025004d7d"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "1536ac8ebef939874cae19ccda9a739e"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "b07692284de5c7791d57e075526197c0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bc1994de867f354ea78d73808a28e2d1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c2d2c9dc7cbb5ce4c0e50b393803f828"
  },
  {
    "url": "tag/index.html",
    "revision": "aa8ac7218b806f1f0bb5e27698b9bf20"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2550c78fb510ee43aac9b04bd83291a5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "67fb94e48b55726faae4f26d9a789580"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "b0717a23e801f16d6dad9a9cde3cef60"
  },
  {
    "url": "tag/json/index.html",
    "revision": "ea4f4d2382b6f3b4975787d6f2aebc00"
  },
  {
    "url": "tag/less/index.html",
    "revision": "a0c9576e1ba9074ee60cf0c374b65c4a"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "031949a94f86d51ae4982f14d034285a"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "cfe94794a38e9f6342cf75356ec5335d"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "bc5451fc673db492ef32b502f698cc67"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "1a29810f2ccccd43ac5431cb716e950c"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "bcb5db85d25ee007525ea965b4ff5062"
  },
  {
    "url": "tag/php/index.html",
    "revision": "9fb599ca3a2357b2afe250f29363fcd1"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "0272b56add7011efc06c517a3d26695a"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "f975b391765bed043951287cac52809a"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "04c9d9e083c13465a73340bc1161d366"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "6b251d79be29b7bf205a9e17881984ea"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "2053a94d9118220380fe13724801c200"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6f9d18b11e971439dfedd45ca4ed826c"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "875d65356e8225595201e7e6e028d08f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d93e5aa5207a532279f6f59fdd247d47"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fce947ea66dbbc815896d9a418a7c1b2"
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
