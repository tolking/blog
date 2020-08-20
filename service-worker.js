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
    "revision": "605d65a7773ef12f5f6aeb3156354aa8"
  },
  {
    "url": "about/index.html",
    "revision": "248890759383eec8cb913571fd308c65"
  },
  {
    "url": "assets/css/0.styles.787ed7fd.css",
    "revision": "39ca07706ecfeedafe33d8080ccbd7b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.44ef85a8.js",
    "revision": "df6d566d3fb0eacf8ac3d488bc6c93d0"
  },
  {
    "url": "assets/js/11.5ba4bd2b.js",
    "revision": "964b19a3f0af76300992146d66118806"
  },
  {
    "url": "assets/js/12.7a2ae8db.js",
    "revision": "b2bce6416bf993873bd1cce1f08bc05e"
  },
  {
    "url": "assets/js/13.d5af7d22.js",
    "revision": "7181203fb0bd9ec0d216c9fac8bb7d7f"
  },
  {
    "url": "assets/js/14.fc77d32f.js",
    "revision": "80e410813df5b9c96a405cfd26bb2d7c"
  },
  {
    "url": "assets/js/15.b026ff68.js",
    "revision": "49a9a779a57a03c67c6b7599de5df2e6"
  },
  {
    "url": "assets/js/16.fb1e4828.js",
    "revision": "7273de9b0c93bf0e505e8497bec404ce"
  },
  {
    "url": "assets/js/17.c0a78ecf.js",
    "revision": "1be037630e8e6a84110bb8784b1bcb80"
  },
  {
    "url": "assets/js/18.ffb1e1a1.js",
    "revision": "e99c4f882d802b4f5880049d604eb178"
  },
  {
    "url": "assets/js/19.9dce27bc.js",
    "revision": "9b0e18ba2f1e1390e97423d3afa9db51"
  },
  {
    "url": "assets/js/2.c2c64c8b.js",
    "revision": "e93373d87b5d619f841edce81c308e68"
  },
  {
    "url": "assets/js/20.d47b6932.js",
    "revision": "f837971f3ffe0efacaa6c9832d1da2cf"
  },
  {
    "url": "assets/js/21.f15648bd.js",
    "revision": "62dcb3ea3627a20b7469a45f440a61f9"
  },
  {
    "url": "assets/js/22.29cc013b.js",
    "revision": "4b30012ed0685e4c2e63c2f43487e132"
  },
  {
    "url": "assets/js/23.05f0eace.js",
    "revision": "85c75a8bcc08ed648c270ca169840d05"
  },
  {
    "url": "assets/js/24.e090378e.js",
    "revision": "e8c6441e40f6c7de5e657a5da5659e9b"
  },
  {
    "url": "assets/js/25.2b44ee37.js",
    "revision": "fcc270e4339df335c4bd345f28df730a"
  },
  {
    "url": "assets/js/26.b3b5f6e0.js",
    "revision": "5e744ba82ebe6b58f1982c4d230b0809"
  },
  {
    "url": "assets/js/27.11bbb11b.js",
    "revision": "bb3750db1c7c484111e6a16f300a0633"
  },
  {
    "url": "assets/js/28.6be16f7d.js",
    "revision": "fc7d356b1c00a565acc686ac325ccd71"
  },
  {
    "url": "assets/js/29.08d9f430.js",
    "revision": "4b8fa39e307a3d80aaaf5e07845b06f7"
  },
  {
    "url": "assets/js/3.a8edb42b.js",
    "revision": "496db0eec0f6bf2b2fddbbda5f93440b"
  },
  {
    "url": "assets/js/30.21cc95e0.js",
    "revision": "3e45172f00c5bdd6d2139476a62ee75d"
  },
  {
    "url": "assets/js/31.ee8446e0.js",
    "revision": "2d80696920c1b6804c4d20f184414332"
  },
  {
    "url": "assets/js/32.aec12358.js",
    "revision": "6210d1c3706d5ec04b206702387b2faf"
  },
  {
    "url": "assets/js/33.84b1b4eb.js",
    "revision": "c923dd9d2e46717646bab1829a62a93d"
  },
  {
    "url": "assets/js/34.03d1e374.js",
    "revision": "e3efb88cd135e880eb51abfb5d5099e7"
  },
  {
    "url": "assets/js/35.9c2a89ab.js",
    "revision": "892b4bdc74255d7ed8e52c5d3fe46652"
  },
  {
    "url": "assets/js/36.b94bbddd.js",
    "revision": "ad5efba7dd33be324e84a5c6d5f0712d"
  },
  {
    "url": "assets/js/37.6a755105.js",
    "revision": "eb9664c3a0cf082176198a36efc10ba5"
  },
  {
    "url": "assets/js/38.78145e54.js",
    "revision": "f803a8192af983be89d60f670bbfc614"
  },
  {
    "url": "assets/js/39.f7b356cb.js",
    "revision": "87bc1f69a61e3551d7bd3af32b0ad4c7"
  },
  {
    "url": "assets/js/4.1a61cd8b.js",
    "revision": "3661ddf8743e567df308545625ee2287"
  },
  {
    "url": "assets/js/40.338d3eb1.js",
    "revision": "303e5ac1038499d69b64e1224c769053"
  },
  {
    "url": "assets/js/41.4f8be7a2.js",
    "revision": "291b23dbc023b0be6e4544d7f22474c9"
  },
  {
    "url": "assets/js/42.fde617fe.js",
    "revision": "02c4b1650acbbd04ef98067039be38b5"
  },
  {
    "url": "assets/js/43.2d226720.js",
    "revision": "e466f9f87767720a1d14b6970b15b6f7"
  },
  {
    "url": "assets/js/44.08ad756f.js",
    "revision": "48a1931302a3a38773be14781a1f0bb9"
  },
  {
    "url": "assets/js/45.d2093196.js",
    "revision": "88731e64b80164e9e927b6a2264d65a8"
  },
  {
    "url": "assets/js/46.33859820.js",
    "revision": "c36bd36840139284ade7bedc9d07949a"
  },
  {
    "url": "assets/js/47.2bc35c51.js",
    "revision": "c5ffbd38949c31acbdda5d72cb8f7053"
  },
  {
    "url": "assets/js/48.67ca9999.js",
    "revision": "168fda074e0997494a05620dbe68aafa"
  },
  {
    "url": "assets/js/49.68b68dac.js",
    "revision": "087c49768a7d6adb944f88aeef9d4747"
  },
  {
    "url": "assets/js/5.d97ed3dc.js",
    "revision": "2cd1cab1bb59959e89e5e5d8c00fb8b5"
  },
  {
    "url": "assets/js/50.07ed08bd.js",
    "revision": "c4e78d765f180c02a309f451fccb5fb4"
  },
  {
    "url": "assets/js/51.2f072528.js",
    "revision": "3611a97c812372d1891c662ee6422558"
  },
  {
    "url": "assets/js/52.395b8a59.js",
    "revision": "45f2d44d530832240e1b02270adce060"
  },
  {
    "url": "assets/js/53.2762de8d.js",
    "revision": "0e2e83a849ead9e139d2ecdb5e0b0e89"
  },
  {
    "url": "assets/js/54.5d1a9b7d.js",
    "revision": "bfe2c38b042c7623cc61aec7ce14b2bd"
  },
  {
    "url": "assets/js/55.b28deaeb.js",
    "revision": "625a0e5eadd03b728405461064b79604"
  },
  {
    "url": "assets/js/56.6e66a0a4.js",
    "revision": "81bbbaf9611bc32f6bfb35a6d8dbd029"
  },
  {
    "url": "assets/js/57.47227471.js",
    "revision": "73525ee5fa4103f092f423f398cda18a"
  },
  {
    "url": "assets/js/58.1d14ddb1.js",
    "revision": "54b6932886532c45fe826a626b4f1c2a"
  },
  {
    "url": "assets/js/59.07eb956e.js",
    "revision": "44c9e8d73e2174ab4785d15584aa5346"
  },
  {
    "url": "assets/js/6.035dec47.js",
    "revision": "06ea6cf03524539409f74d36ee61da92"
  },
  {
    "url": "assets/js/60.f59ae3f4.js",
    "revision": "45cf06e4f9b736f16892002126d615ee"
  },
  {
    "url": "assets/js/61.ea2cf345.js",
    "revision": "90861317bd6f2537cb6fab93c100ea2c"
  },
  {
    "url": "assets/js/62.fbf651c1.js",
    "revision": "28ac5295d5378698534e8ac00478f433"
  },
  {
    "url": "assets/js/63.a89a8cab.js",
    "revision": "5be6749465ad559500e9236b0d3b5a50"
  },
  {
    "url": "assets/js/64.b1940ca3.js",
    "revision": "b44e4924c75c60cf4207bee5e13664de"
  },
  {
    "url": "assets/js/65.7f806e19.js",
    "revision": "4f84c5177fc5300af0ef3e755064f04b"
  },
  {
    "url": "assets/js/7.11faabd4.js",
    "revision": "dbf79aeb7e3ab9ea6821289338081ce7"
  },
  {
    "url": "assets/js/8.bd18e07b.js",
    "revision": "7eb3e49a5ca253c4903095f7d60d913c"
  },
  {
    "url": "assets/js/9.77f1f8ad.js",
    "revision": "eb5c029986180f11a66c01b6d1a9872b"
  },
  {
    "url": "assets/js/app.c4cbcc71.js",
    "revision": "a32b607a15698ea985b976af5be71136"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "0d16a80f11965fdf9b79d902f1786fda"
  },
  {
    "url": "category/index.html",
    "revision": "65f28222c25f434c8576411a569a8e8c"
  },
  {
    "url": "category/learn/index.html",
    "revision": "83a79cb2de655353779d0f2ceb5a9755"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "3c40b701c9134da9bafdb0ca72f9d8f8"
  },
  {
    "url": "category/project/index.html",
    "revision": "3df5f8c38f897c8dba9d1df887537676"
  },
  {
    "url": "category/summary/index.html",
    "revision": "1f6a0382514ac5d4354d7d28f492fe1a"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "e03124bbe9da7a78035788e32678dd7d"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "40f251f65fc03187ad023cd1dce02332"
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
    "revision": "201700bd3a403cdbbb39311e02c47b87"
  },
  {
    "url": "lib/index.html",
    "revision": "37441239f38aba2f349c706db86ce2af"
  },
  {
    "url": "lib/m-less.html",
    "revision": "571089e1182db5acf5e3b0a008ed27d1"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "8c06511b41964eee005d2bfde0cfb0c7"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "ba20f8bd904c6b7df98f9ce6b4990cdd"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "92429ffe9f09aad1dc702bdeaecfef55"
  },
  {
    "url": "lib/usercss.html",
    "revision": "0b94c178a757f331d235ef1e0bb9e6bc"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "52778d956b7cf9e227063eb58bab6e18"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "302677ea281ab671f3e9eb078cc6fa68"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "cdddf06ff2228e2907cb1151f92a5a3f"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "1a3e9527cd07d2411bb1a5852e525efe"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "66ca258ed6c06d7baf4cc608be1dcb80"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "20b9feec3dba31351fbbadcde743a1e9"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "00afd3bd079230023fe226690ed0d446"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "67630f47ca97712813de8cd872c98c35"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "e061deb47c8d6f49a002b88288284b40"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "6cc56439f21c36095de463c4feae7501"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "161e784c11bdf30b56eda2c277f33ee6"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "51669664e9925a5ecdcf44407fd60c82"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "420827d73faee15fb9af6d4649e7b58c"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "f8954d841064ab6d023df5ecc4e41315"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "fae3e2524698fefdef0d0b74c1a62c18"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "c845fe2615c66b41f9032d904e54e520"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "034b8e969b7a66e1afc5fe74ff3a7b6e"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "b80758beb5a37c65a0ed173722e0293b"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "1f4f7573176ddcc9f56b046d36ef7e94"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "3ee16c610b78a6e136ffd4d87c66b904"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "4cebc811b6436250ebbf70c070ac8a40"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "64a327d59b71860baf13b7c06670ee8e"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "7ea42c738f243863ec281fa1b4ccdad9"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "1617017acf76179a1e104778053ce69c"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "760b9f7d55a44dc46a10e0e5598c02fa"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "1f6705f2f0d75dc3b68ad88648a166f0"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "60c4dced5b5e12b75b8f293ea60e594b"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "f23a7cedae29e3ba6c782d3d549b1f13"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "0d70b33f14b11c2861cfdf8c1a6a4115"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "c743c6d335f5e296ac889f9a2d504bfd"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "4a39cdd775f43d83e6af89a5602663fd"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "8cfee1cafdcb340b79a06edc81edd4bc"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "86ecf38b74db47eba61e0529953f6795"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "cadf901bc0ad78ea70f3e0ad53c0cdbb"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "a9940f85a1bdc83f26803d70ae9a585a"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "50bc96988607c70a1752ede13c0ff534"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "3973912e0c0d9c3ea635deb59e247884"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "abc9d7da82add70520b85e52a68a15c8"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "228883ac723384c236680d3130e3f457"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "7a88b1f91de1302859ef9ce06c7161a6"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "6ff2937b33b2aacad0e1fc6d767f9e38"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "fa75e13c94110e40cb8a5fb7162578b7"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "5fc4329f022005632e2ee65d5f036ec0"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "43c019d0f0e82f5713eeb4d3752d2e69"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "25bf831de37bfa72dff286be6329284e"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "85dccf9e2fc9aeac8b9fddbd5d6c38b7"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "b7e9bc058beeab84bfefd7cb7aae2ec2"
  },
  {
    "url": "posts/index.html",
    "revision": "d9cf99ad5cb06f9aca146cea603b6d67"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "e59dcdb3749b660bf22d03efe8a2066f"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "aedc81544ffc9d4049a4f9f2c73d792c"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "e7df56513e3300a5740448eb0292aea2"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "e617f7ace96e62110a64fa25d5e7e7b4"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "6e2fd3dadde184c0c6b68226f207d314"
  },
  {
    "url": "tag/css/index.html",
    "revision": "3fa4a34ca8650556f98554542f39c2e4"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "d274b76502b17279fd913450bab14afc"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "de66ee2431c932757b3008cf1d496c1d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2bbdf88f02227f100f1c7ab015292777"
  },
  {
    "url": "tag/html/index.html",
    "revision": "dbd826ae2f589d326e9ac7454ffd2993"
  },
  {
    "url": "tag/index.html",
    "revision": "56d82ea77be34ab8e7334849c3621f49"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "8604fd72c29765307f6dc368c24d6db9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6feb931ad1ca07435ca27e63c6da868a"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "e15d8b32feb494d66e21b7bbda4ae270"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d7c896eaccc43087718ab4ee6e236470"
  },
  {
    "url": "tag/less/index.html",
    "revision": "3c564b01a0eebc7f3a3b4c9feccb2150"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "54577d158887efc9b864110c16a275d9"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "e24b0fc2028bd8af7c174ce78a02844a"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "eef16190bc557c6495b77d908ef90108"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "851b9f10d629bd91cab734b3e1b6a007"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "fcfab07e7cb7177725e8613416905258"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "c125d44562402f38d4b126f1eb8be27a"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "fec54fc706aeb02fefc191d2f5464268"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "6f62533039cdbe7f4419f8b42554e255"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "ae12d5f30dc805aa92e2e12ed28ce061"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "e72dbefb1e3d3f91b455a89037c17bc2"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "6a17040dfff58750f24f313aa41cf9c7"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fafa0f67f18d1a09ce9de0ae0f57f000"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "971ec2210d40aefb8be9306b3252f064"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "29053c19f2d22860c71d543c8af84b5d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2499c87e2742aa6e491f65b457139853"
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
