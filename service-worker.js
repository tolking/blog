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
    "revision": "14c1cf6c5c7641e13c50f119dfb1df75"
  },
  {
    "url": "about/index.html",
    "revision": "6c6da422c042b79f3a95431d260e02ae"
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
    "revision": "9fd4d62bc8b1f4843d9af3825d9071af"
  },
  {
    "url": "category/index.html",
    "revision": "1dab706e0676513bd83e67b7beb928ff"
  },
  {
    "url": "category/learn/index.html",
    "revision": "66a768f788d1b0cb0fbd43f9cabf8234"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "81166018aa8c0021e8261d03270bc66f"
  },
  {
    "url": "category/project/index.html",
    "revision": "2be8295b29c9cc45a4128d8f8739107b"
  },
  {
    "url": "category/summary/index.html",
    "revision": "52849e78730b3a674984b53f0bfd034c"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "5defcb4e68ff9aef626689f006dc75a4"
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
    "revision": "23b9bd26a8f9e0b8e628bda9e6feb754"
  },
  {
    "url": "lib/index.html",
    "revision": "6d73d4d1592473d9f8f7f3151b34adf0"
  },
  {
    "url": "lib/m-less.html",
    "revision": "82c0dfaf11af625b91083827beec0516"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "453b1df1a25a4910e3fb18feab1d0993"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "32dc8283a8a219cd37a70e257441801c"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "6c335656f42db20342e8e0dbf4ef06d1"
  },
  {
    "url": "lib/usercss.html",
    "revision": "faf9d575ef014eb1d65eeed4c89b641d"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "8e25b357ade9a63807b4e85074c8989a"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "22acd09e9d63126488a13b06d647b660"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "83c88c66f71fd561bb68cd9db2066fdc"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "74952c4a485a44c5d297c202f94d531a"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "3db8829927e645f27adc4fac2df3c96d"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "8a66b214902a5f896ac544d1e906ade1"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "d6bed337cf951177904ef3cfeb0f7b08"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "cb43bd49a0f9ab29f40da3b943b79e00"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "5c2c8bd3a77a9b03a7ae45d2ab874c7e"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "98216822a8e63348d7c55d1e43123556"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "7f31181bbbc71fe7245f5cd26dfc8308"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "21d6321fe8063bf6451f960c4b18ab77"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "ed1c172c48706b7e621644af41db7fb7"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "95b6416a9e8b6c3f90e35181a0e3fecf"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "76ea45eeadfd4002b5d28646742c3fe0"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "05861464f4d8efb16a66a2b41e179c07"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "69b6bf9115bba9b88f60d95fb0a19883"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "ac1a6c72643e135aed1600b2c743313b"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "6aaec0ee5df6a029e2522c21116f4805"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "1dfd9ccedca7af1dea1f111fb20fe2da"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "647a08692beb40ae2d04744a67fc42ae"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "6b37135ef42e4ccfe7d41866973568f6"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "946c64ea7a05500b59d277ce0f82a2a5"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "6ec27cb9e5b36bf6f6afe435efb168f4"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "583f38cd27443b6f6cc22a543cee2f16"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "ba13cedef2eced18d625f47e4bfbe6f7"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "a76dd887794928f174126b60e7c9b222"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "497a90ad7506594de5c494d39269ed7b"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "6d27b6355fade3383133c6272688f3e0"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "074d9a18f7bed251689e79b04d73b72b"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "5cfddf6a4c6bd65e3afe73b43ce3150f"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "03a87998be9c95629b3be4a857ef21eb"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "06de5068e43272c93d0c31a6be50f154"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "af01de322d7db31bd9678a8da6fa62c4"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "af8f05fb3c7ba681817e87d1900ee8ed"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "5e8ecf2a93b5bee2da2354546a9c1bbe"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "f8d71090adddefba56b20fa67a2fce30"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "51f26b0a18009deb767adb41959757dd"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "7735dc04f8b7a1f888ac17d6f91895af"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "dd64639e8cc1dee01868a64db036f2ab"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "1aa179352999df73212c095fc31f53a4"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "4ac730cc2ebe038ba6b07ac76897b83d"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "6400a5a399a19646d86ba963128005fe"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "32ee60f6c87606d3ea02974965975f96"
  },
  {
    "url": "posts/index.html",
    "revision": "f6f86d6a7e2749b16d559a70a450cbb8"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "a6623bd84868ab1b8fa095631fbcc537"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "509f6a3178b3137f89e6239d5948ac1e"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "82f079ec3b7f4c1e89f9eb5006999594"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "093d01f11a4e5c68096cbbcb5c5e0e0b"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "3be587df9a78c7211e26808b8f0fc130"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a45c2598263b3f81bb8afcb7024c3bf1"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "c50c95562f0a001d2d48f53ad5a2b0c0"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "b143586394999922627d3819218e102d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "aade7e03418b2d76f44ee4e88689fed3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5691069282c71e8bc8a26f18c54b1b37"
  },
  {
    "url": "tag/index.html",
    "revision": "dca2a60f5454d7f64f9b057e68e6e236"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0b8b40e21da3dba2d1f646903bbeddb1"
  },
  {
    "url": "tag/js/index.html",
    "revision": "aad7bb5de7f559315ba54e78e815a53f"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "bd0d212da92ea7c781686c5ba07c9ec9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f9763f695f23cdaffb38b4cb20b42398"
  },
  {
    "url": "tag/less/index.html",
    "revision": "076c09d4b7253bbbb35858fe10070a8e"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "aa2af6bbb0a87247d1531523a1e64ea9"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "2e46dfdd8d7ee30c9a81393ebbae236b"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "71b5d0a9edad94d70f5ccc67fc5b798c"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "27d027d49f058044365d6945acdc8e98"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "c338f59ec2ac1c50537bd8308cd4a187"
  },
  {
    "url": "tag/php/index.html",
    "revision": "ce5b072daaff14d749a30b6b177bb910"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "e8d80408750350af7a6833a6f5f7e511"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "6f61b7156b06dd11092c2a31d65f72d6"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "8ce812f5d1982616fe2d9901ce151e19"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "de45c1de1c5b3848e797581ee4b56dfd"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "8aa08dff3d8137e37a0371d1448ac504"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "28bbbfa31fc686c6cf9b3ff1d8f507ca"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "b71eb85c6484a4b332dc51c3547ba6c8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8707ef5287072f6c5626d37febbfe06d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6a47aa30aea5fd69431876ded7b07831"
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
