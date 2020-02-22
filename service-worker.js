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
    "revision": "5b0778cb0e84aa21a5da2c03a2e61c49"
  },
  {
    "url": "about/index.html",
    "revision": "56a36005f2485413a40b50807dadb0bd"
  },
  {
    "url": "assets/css/0.styles.30614e02.css",
    "revision": "4f46745ce7e35197db49186b7669e1c8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8c90065.js",
    "revision": "bcc890cee1fe3763106c47765515e764"
  },
  {
    "url": "assets/js/11.0df28ba2.js",
    "revision": "84666e16a61930d043bb4d63c69d9f5f"
  },
  {
    "url": "assets/js/12.8de01f1e.js",
    "revision": "d63457d86d8125d572ff4dabd8ac0954"
  },
  {
    "url": "assets/js/13.e112045c.js",
    "revision": "20e4b44fb1abec5723b36a336ba453dd"
  },
  {
    "url": "assets/js/14.0bb272cc.js",
    "revision": "cbb266e367735c9e29d0ac4c2f76411b"
  },
  {
    "url": "assets/js/15.6a57d3c4.js",
    "revision": "d25570958c41dbb261dca78cce50c024"
  },
  {
    "url": "assets/js/16.d013cb9d.js",
    "revision": "196959120f0d1c8b5cc2242c7e0e30e3"
  },
  {
    "url": "assets/js/17.39be2d47.js",
    "revision": "d52e0a32860cb579207c9d280b9f44a8"
  },
  {
    "url": "assets/js/18.2154b45d.js",
    "revision": "7b7eceaa71f6966822705718b1e8a8f8"
  },
  {
    "url": "assets/js/19.9e7c8a44.js",
    "revision": "321573da0624b576cef9969f60d43395"
  },
  {
    "url": "assets/js/2.885c7184.js",
    "revision": "7643a60c92c31058756ae7c9af271f3d"
  },
  {
    "url": "assets/js/20.7caa0718.js",
    "revision": "935cead192c61daa7c58853e5fa2f07b"
  },
  {
    "url": "assets/js/21.72652ced.js",
    "revision": "ebd0c64d3a0b4a391d27a25389947735"
  },
  {
    "url": "assets/js/22.35d0fa93.js",
    "revision": "fa7ad6493dfa689b8abc88cd4141c4bb"
  },
  {
    "url": "assets/js/23.f22354e0.js",
    "revision": "9859e946eadd168f9645aa7eec2b872b"
  },
  {
    "url": "assets/js/24.9b1511eb.js",
    "revision": "5115245c9a8fab5f140fa987202025d2"
  },
  {
    "url": "assets/js/25.2bd374b6.js",
    "revision": "6a70c2ddbb6cc310b89d602f8a888671"
  },
  {
    "url": "assets/js/26.386af6bc.js",
    "revision": "596501f35a7e13dc4ae2a36cae0a4af1"
  },
  {
    "url": "assets/js/27.e4548d64.js",
    "revision": "66f6485d2503056a2310427ca35243c0"
  },
  {
    "url": "assets/js/28.afbf6e59.js",
    "revision": "a898d825b34bf085980e09c1acd948d5"
  },
  {
    "url": "assets/js/29.1b6aaa14.js",
    "revision": "1884ddc78459d39e02031348fb0e7609"
  },
  {
    "url": "assets/js/3.11d29683.js",
    "revision": "53e7fb9172d19b671e052ca04c4b4e45"
  },
  {
    "url": "assets/js/30.edd1b6dd.js",
    "revision": "58e2b1fcfe9fb4169785d4273c17ef9f"
  },
  {
    "url": "assets/js/31.72ccdf79.js",
    "revision": "8e821aa3ca7eb591976acee6c4330250"
  },
  {
    "url": "assets/js/32.d4651459.js",
    "revision": "5579563546c788f7eeda4a6617717ab9"
  },
  {
    "url": "assets/js/33.51ecee69.js",
    "revision": "752d9f3fece9e0b2d8bb29e5ddc9219d"
  },
  {
    "url": "assets/js/34.560a68ec.js",
    "revision": "d42097e3ed6cf3ed0b4a560d9f66f5d5"
  },
  {
    "url": "assets/js/35.7e31ca84.js",
    "revision": "0d6db7b7e0a7896328572ad5a46e1fa9"
  },
  {
    "url": "assets/js/36.658254cf.js",
    "revision": "dac2c188cbc8d19b38390d017340c0f3"
  },
  {
    "url": "assets/js/37.baa7f150.js",
    "revision": "4ecf156dd24f76f5da6df2a688dfcd92"
  },
  {
    "url": "assets/js/38.48f0f489.js",
    "revision": "571d8ad653e8212f5cdb2c7c3116241d"
  },
  {
    "url": "assets/js/39.82f44a36.js",
    "revision": "fd58eab04dc619d9f2798894c2253882"
  },
  {
    "url": "assets/js/4.ff027d0a.js",
    "revision": "d2272653c3df565a862fbb61693fc9ab"
  },
  {
    "url": "assets/js/40.b6208fbf.js",
    "revision": "321c5e39d074951493c0258b7b911abb"
  },
  {
    "url": "assets/js/41.d1932e98.js",
    "revision": "187caaeef372f322ed2ff1cccb6937a8"
  },
  {
    "url": "assets/js/42.7336f1e9.js",
    "revision": "7e193e8590a0937e011e8cc09b302731"
  },
  {
    "url": "assets/js/43.abe414a9.js",
    "revision": "39c5eaad8cf7c35f437cd3021289b537"
  },
  {
    "url": "assets/js/44.cb1831e5.js",
    "revision": "c0a75e4469c80dd002f35d5c88192245"
  },
  {
    "url": "assets/js/45.13542d25.js",
    "revision": "f98c14079c9530381300c229912bc00f"
  },
  {
    "url": "assets/js/46.ec500cdf.js",
    "revision": "a6ef49e666acaf4c99c6418dd2a227e8"
  },
  {
    "url": "assets/js/47.1668f4fd.js",
    "revision": "b5796c536f0e8b2aab72b4c78698897f"
  },
  {
    "url": "assets/js/48.4fe22f50.js",
    "revision": "140d6ca2bcac5c3eb0895b2e569933ae"
  },
  {
    "url": "assets/js/49.4ea68f02.js",
    "revision": "efb276f1ff6f0464cc3303d32f1b2821"
  },
  {
    "url": "assets/js/5.ca96114e.js",
    "revision": "facae1ff59e3f05c460b46fb80e84fed"
  },
  {
    "url": "assets/js/50.9c4c51de.js",
    "revision": "a2bc70cecd5856977e159f7c6ab236ae"
  },
  {
    "url": "assets/js/51.f29a0b3a.js",
    "revision": "0b7951b9a529589f6567a96543e4511f"
  },
  {
    "url": "assets/js/52.37b17158.js",
    "revision": "aee64a89a3e42f792c21249506400440"
  },
  {
    "url": "assets/js/53.5e7a223c.js",
    "revision": "9c79591bf5cf48eb189fbbc6f9b5b49f"
  },
  {
    "url": "assets/js/54.974db162.js",
    "revision": "8c44686307600e3d74ce6f1175c658ea"
  },
  {
    "url": "assets/js/55.2db1f179.js",
    "revision": "b22b17820ac9e151b958a9843f21a626"
  },
  {
    "url": "assets/js/56.f41ab450.js",
    "revision": "253d4699420195c0459f764545b70a06"
  },
  {
    "url": "assets/js/57.7ace4554.js",
    "revision": "c29d30d2149c2093bcfdcbac9e7aae52"
  },
  {
    "url": "assets/js/58.b5114ee0.js",
    "revision": "683be5e544edcab26a13128a6cfdac82"
  },
  {
    "url": "assets/js/6.f48bcf68.js",
    "revision": "aeba112dd4cb0650eb8ed0a8029a16a6"
  },
  {
    "url": "assets/js/7.37b5a29f.js",
    "revision": "3412e510c9f824d01ed485270d95d083"
  },
  {
    "url": "assets/js/8.7ed14cd6.js",
    "revision": "f093bc2c020b663c76e01974fbb424b6"
  },
  {
    "url": "assets/js/9.3bb57507.js",
    "revision": "a0dfa641e942affe76795f3a1dd12dcb"
  },
  {
    "url": "assets/js/app.4df0dee4.js",
    "revision": "42727d3fd77e056455ead0b92055c51c"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "d8cf22fb0f7caf0bb7d3fe3c46dea367"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "894049c86042adbc1a0e31fe77892416"
  },
  {
    "url": "category/index.html",
    "revision": "9d842bf209dd668a4087067e3a3db4c5"
  },
  {
    "url": "category/learn/index.html",
    "revision": "62a0bbd8fd4ed97bd67471d411e90220"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "f8b28264fd89fde806a826519328c0aa"
  },
  {
    "url": "category/summary/index.html",
    "revision": "b4e85311c391e42988da4917bd6e85ac"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "46b2c1f22bb02a9df58d779884be0878"
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
    "revision": "dd276bc90427a8322bfb717158486bda"
  },
  {
    "url": "lib/index.html",
    "revision": "859c5e3572652200bbcd5970c1480a6d"
  },
  {
    "url": "lib/m-less.html",
    "revision": "72a9cffbd460e2e9a44ed9ce51d22263"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "933cc97f83c9f3ed655c592bda0957a5"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "07ecdf0f7ba21fad9fb53f474fefa203"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "58cbb8d13129b8df9f5e1754e5975277"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "84832eea65e4c2dfe1c238a75e378d3b"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "4f5e604a218707456b67d68ef2821af8"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "b704d99e1c80e3ac8ca987a16c892b0e"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "efd48fe6c2d40ff8592a60ed77464988"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "e466c445b8bd71911590378ea21eab19"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "96fa62dfbe0971d26b2f935b20b62fc7"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "c608d65cfadc55f812fe74bb3ac0a71e"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "f3e58d4d2dadfbd413e1eb59aaa8a005"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "d660337e77cf8f0d2751ef049c8e1478"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "3a4726334f2c545b91dbdeec0f484c48"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "9626abd22e5d6c046851590a1173cce8"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "21b164631d6fdac0d20b322cafbede45"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "ebba0580189f24eb5a5a0108c4a4a48f"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "9fc687c5cbb54d2469af122f39ca5932"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "fa10d28d9c80a13b07984f2e32c324c5"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "9f576be4f1ff95e3177906a2b263eca6"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "d88d4401c4f5ea7aadfd6df4e560c23d"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "aa30f8ebc23cb13aa15baf56482c154d"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "6d05be3b3272b44d315365ae14e84818"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "ba7f0311727d4a0e756a1fdf11f13b2c"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "1133a18c5e902a1122142979082ef113"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "21742cf5c169c53674c1b888f73f91e4"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "d82b762d7bc029bfb207e167e5d90684"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "1d8826e1187be2d6f10983958ccca2d3"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "77612744d17c02d937ec697b440df147"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "3555bcb8745c272af1039152604acdc1"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "372ecded166dc3c3c513c190520a03e1"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "29b181f049c169b1aecf3960653a7b74"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "68e6711b27b06de00b4c30a38bc2ac72"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "7ccad08e5490ec9b30804cc8bc4f4bd8"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "59310fedcf848a66b3cba4606b182c8a"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "6125b9e404320d7c952cf942629ed7f2"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "34785beb1291b56dc59ef1ae4e712a06"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "48bd4616ff3b2b152f64d2e708c9d5e1"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "1b020f0487869a8dccb6a5ce331c2c1d"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "0511328b1afa02afeb8fe19fa2a9690a"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "4b3ab6b10b2232a4d66e24903e8720ed"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "1e6efd7a52cc21d7e6524f4740dffcb6"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "85e1a1dcc7274a107283ff315e0821b2"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "daa5c5a4ea183905eb39d89349a073f5"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "c4fbc86639134567ca124e76931b2f4d"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "62b75205c77ef1bbae0c22eceb293ecf"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "a2fcb30137456af3d9ba80a90334d9f0"
  },
  {
    "url": "posts/index.html",
    "revision": "2e09b09e6728b6dd3b5a7ce879ea1e0e"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "459d64ef5b926fe07d68159d3c7d5ac7"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "108d5a8e22977141fbb4bd22c1b62b6c"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "ef89047ef39db9671e4d1236bb96aa67"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "a1a435305b8eaa5dbcb06dc58a5c7941"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "5a41eb56d4cd58eca88e95d9823845eb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "cebeabcfa4e6fbcc4b8bcc2e05f8275f"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "bcbf8a85680f565874e5cdb360f0b953"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "2ca50ddee8f76caec33543dc6c948faa"
  },
  {
    "url": "tag/git/index.html",
    "revision": "722ed71087f6a7be3240ff9a23a878bd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "cdbfc2365c767be59dcee4033c349ab3"
  },
  {
    "url": "tag/index.html",
    "revision": "5a7b0ab4e5a6591c3e6b1478e5b6970a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "57d989db23773673c2f801ce19c3761e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "57dd94ff5d5e8a6a3d219373cc105781"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "fd46e1b650a20d08721a6888cb699da8"
  },
  {
    "url": "tag/json/index.html",
    "revision": "7e8afd81042737c0108d7e25fb27556f"
  },
  {
    "url": "tag/less/index.html",
    "revision": "4d7b9a096b12ace363930f0797ec143f"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "3db921c196ad20c494fdeebe4a996b3e"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "9975453f54c8868a55812b19c587bc36"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "fac5b7595961fc6c4b50fcc259a26d51"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "e28900b49d7eea86f7584dd8ea85fc55"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "9b8cf214c30d9ad6581a88187dae243b"
  },
  {
    "url": "tag/php/index.html",
    "revision": "ae07d981b25a0e9278335e30521ad1fe"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "3bdd204ffacf81281c6675726e66fc5a"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "b915b169fc1e2ec231f4863906112e3e"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "d6716879779f0942f2b552842c7a7811"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "ed0170d716078c09b2dc912b42506d5e"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "87d3e022e213b99a63612c89f5a5deb5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "94f1adea225601b996764ffdc1087abb"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8bcc1a50af2e5d8b7e465371b7fd8b34"
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
