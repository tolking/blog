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
    "revision": "97693915901e14ee572ac6c141bda277"
  },
  {
    "url": "about/index.html",
    "revision": "f131a4b027e597b0cebf29feeed4a85d"
  },
  {
    "url": "assets/css/0.styles.74f673fc.css",
    "revision": "497e3bee82c9185a42c3332bfca56ceb"
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
    "url": "assets/js/12.196f36b0.js",
    "revision": "e98362ef0e26de00ed4d7935aeba0a56"
  },
  {
    "url": "assets/js/13.d354638b.js",
    "revision": "9e62ce46eebc2b00fd3932a767bdebcd"
  },
  {
    "url": "assets/js/14.79a25669.js",
    "revision": "e052b153c18efe6548040eac18032952"
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
    "url": "assets/js/17.b686c14e.js",
    "revision": "db0727308ee09bd6b85babe970972c84"
  },
  {
    "url": "assets/js/18.36caebd5.js",
    "revision": "5609d716d3672eb8d1e2f011b20cb238"
  },
  {
    "url": "assets/js/19.4e07287c.js",
    "revision": "affc2f87382a8d2fc64e2cba2bc01486"
  },
  {
    "url": "assets/js/2.c2c64c8b.js",
    "revision": "e93373d87b5d619f841edce81c308e68"
  },
  {
    "url": "assets/js/20.16c2d3b4.js",
    "revision": "6bf513e2d9a1ea147cfc5007e324a9b6"
  },
  {
    "url": "assets/js/21.a27368d3.js",
    "revision": "7287f1578dca90a626bebe9a03c93b8f"
  },
  {
    "url": "assets/js/22.d8376c34.js",
    "revision": "95af95302bb518f78accc46a0dcb6f0d"
  },
  {
    "url": "assets/js/23.3d56468d.js",
    "revision": "30282430f0c5274049f2cf93b25fc394"
  },
  {
    "url": "assets/js/24.5d83784c.js",
    "revision": "cedece36b5ad4bd0afad824730de4f09"
  },
  {
    "url": "assets/js/25.cf6844a4.js",
    "revision": "746979207e54fdb78696c55034e106c1"
  },
  {
    "url": "assets/js/26.de9efa85.js",
    "revision": "4384092a661c86255f4af9ec5c24922b"
  },
  {
    "url": "assets/js/27.423ea9ab.js",
    "revision": "6f8f2748fd533d5b224090216f7adfb2"
  },
  {
    "url": "assets/js/28.f958a294.js",
    "revision": "41437a610d3456c383259820f13e01dc"
  },
  {
    "url": "assets/js/29.2325cc89.js",
    "revision": "5b6a592a2a5d9d7d0ece819e06e37d46"
  },
  {
    "url": "assets/js/3.1455635c.js",
    "revision": "972ef22c127d81815260798c48e6c752"
  },
  {
    "url": "assets/js/30.902b6fd5.js",
    "revision": "1af7cdd05584d0dfdb4fe79bddb2f7df"
  },
  {
    "url": "assets/js/31.1a25027c.js",
    "revision": "8737ef1f45353ed4a5e23d4dbc433786"
  },
  {
    "url": "assets/js/32.84591d27.js",
    "revision": "915e8e08fe038122d4f66e4b2415ebb4"
  },
  {
    "url": "assets/js/33.24e4b3b1.js",
    "revision": "1b6b3165e31267a2ad1204e95341f624"
  },
  {
    "url": "assets/js/34.1d1237fc.js",
    "revision": "6e23cb61cd7d81a2cb9cc5df1ad81baf"
  },
  {
    "url": "assets/js/35.b5b47b16.js",
    "revision": "e86415e2d082a84d8698966bcdcebbf4"
  },
  {
    "url": "assets/js/36.c190aa21.js",
    "revision": "db38d8f85116ff807f9894746d7b0701"
  },
  {
    "url": "assets/js/37.5776f346.js",
    "revision": "2eae1d8a33f8cc4d9ef97a41163724b2"
  },
  {
    "url": "assets/js/38.a7c6820d.js",
    "revision": "4d5f9c272fa98e9cb12f3c42eae3654d"
  },
  {
    "url": "assets/js/39.6093f369.js",
    "revision": "943954941139e0c3bf15960aed646b93"
  },
  {
    "url": "assets/js/4.f254ec48.js",
    "revision": "160032813fddd8a937684a76a0959146"
  },
  {
    "url": "assets/js/40.de0ec5ef.js",
    "revision": "fa18eb70e85aed5fd5ac8035ea47e471"
  },
  {
    "url": "assets/js/41.2cdee556.js",
    "revision": "6cffa5e8a742fbb486805411a398fd29"
  },
  {
    "url": "assets/js/42.f2b95b65.js",
    "revision": "ebc5cb392859789bffecf2d526a08d19"
  },
  {
    "url": "assets/js/43.9a64e021.js",
    "revision": "7c4b6acc302451426c64606c4935071d"
  },
  {
    "url": "assets/js/44.4cbe67f9.js",
    "revision": "a337193f851fbafb66dc5a7913849f59"
  },
  {
    "url": "assets/js/45.e34595d3.js",
    "revision": "01b7a747da587974498224cecb168fd7"
  },
  {
    "url": "assets/js/46.f5dbba3f.js",
    "revision": "50f90ba8ce1d1ba6b356070944c76618"
  },
  {
    "url": "assets/js/47.016674da.js",
    "revision": "ca2484a6936d6ac613aaa7a2001083a1"
  },
  {
    "url": "assets/js/48.d558a851.js",
    "revision": "51b6352b378bd6e9f34a92941f9d9d86"
  },
  {
    "url": "assets/js/49.a21394ad.js",
    "revision": "6e2d606f49449d8492794cd2959d9f9a"
  },
  {
    "url": "assets/js/5.23e38b86.js",
    "revision": "e1bd2c455ab6a73c1e8cb4bd5352ff3f"
  },
  {
    "url": "assets/js/50.2ae8b5d6.js",
    "revision": "e8abbee195c567dbab3f698e8b1f1074"
  },
  {
    "url": "assets/js/51.497218cb.js",
    "revision": "13d4c854f898b13294722a85e49c464f"
  },
  {
    "url": "assets/js/52.47314b6f.js",
    "revision": "4cf1cadc762125ef2b8198c93d6e5bc7"
  },
  {
    "url": "assets/js/53.ad550905.js",
    "revision": "a99bdc1715cf4cd0f95d5b96a8726c57"
  },
  {
    "url": "assets/js/54.ba69ff4c.js",
    "revision": "13195af4e41a13f4763c9e608c2c65a9"
  },
  {
    "url": "assets/js/55.57a58f5d.js",
    "revision": "9e19594e17bc0a4c5c328a9811794b0a"
  },
  {
    "url": "assets/js/56.45d46bd8.js",
    "revision": "f945c672d1b42bc2c52bf9d36f392ae4"
  },
  {
    "url": "assets/js/57.7dec780c.js",
    "revision": "42bcce0e80d394e7061107c9d2bf5230"
  },
  {
    "url": "assets/js/58.f94f0526.js",
    "revision": "43ed5af7a300d854af1c409d4fce9b7d"
  },
  {
    "url": "assets/js/59.ed5d8c11.js",
    "revision": "15172b45c38255ed67aed5790f8f73ed"
  },
  {
    "url": "assets/js/6.035dec47.js",
    "revision": "06ea6cf03524539409f74d36ee61da92"
  },
  {
    "url": "assets/js/60.3b326333.js",
    "revision": "e26826733212ba8aa80211146392b618"
  },
  {
    "url": "assets/js/61.4318188f.js",
    "revision": "febaef8f50f425ff1ffb9965ebf5e12a"
  },
  {
    "url": "assets/js/62.f79ca621.js",
    "revision": "5520e533d862e9725ad04e1026999416"
  },
  {
    "url": "assets/js/63.68693684.js",
    "revision": "a082b1371508291fa5ea4c51bff30882"
  },
  {
    "url": "assets/js/64.7d6d210a.js",
    "revision": "602682bf46c9812e35f3b6c6a3a3d589"
  },
  {
    "url": "assets/js/65.531cb638.js",
    "revision": "0fdf578dc738608d8c8f2dee45e6fe50"
  },
  {
    "url": "assets/js/66.f0f7bee9.js",
    "revision": "379126a20c1731fee8e2a18bfce4c49d"
  },
  {
    "url": "assets/js/7.11faabd4.js",
    "revision": "dbf79aeb7e3ab9ea6821289338081ce7"
  },
  {
    "url": "assets/js/8.ba84a046.js",
    "revision": "b118cf48232aae68be217374e1f6be4b"
  },
  {
    "url": "assets/js/9.883cf8ae.js",
    "revision": "d1cfc8dd3761e44ce0ea244f3c0b5a65"
  },
  {
    "url": "assets/js/app.632ea610.js",
    "revision": "8b199233153f4cef75ae2de66151a526"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "fa2590892f9880c18f968f9aa40c7aef"
  },
  {
    "url": "category/index.html",
    "revision": "eba3ad5535d6b7d062ad9bc9dcbacaf5"
  },
  {
    "url": "category/learn/index.html",
    "revision": "435229b092722c2ed8ced2153c5d4a58"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "58d5dd37171be3f7f88f5ba9ab860925"
  },
  {
    "url": "category/project/index.html",
    "revision": "81d4dc2dc77f3be42205c1df2399cf5e"
  },
  {
    "url": "category/summary/index.html",
    "revision": "44ebeef04c2d84bae49534948ad773e6"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "706bee80ed1649f650c89ecd8356f3d5"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "a388a38cd5d26f6efbdc8d7da2120b3c"
  },
  {
    "url": "img/android11_1.png",
    "revision": "1dbde1e08ae1b2d4276799811a02c0c0"
  },
  {
    "url": "img/android11_10.png",
    "revision": "96bc28a5c38af8a1220a8db6858b785b"
  },
  {
    "url": "img/android11_11.png",
    "revision": "168f20e98331be431af34925c15aba28"
  },
  {
    "url": "img/android11_12.png",
    "revision": "0745a9692c68c36de61e28887c8af4b9"
  },
  {
    "url": "img/android11_13.png",
    "revision": "a8fb960dd2b7db206e858d31791ce7e8"
  },
  {
    "url": "img/android11_2.png",
    "revision": "9b31b205f514c9cc18f6ef26754a2440"
  },
  {
    "url": "img/android11_3.png",
    "revision": "423dea30b77e32f28364b512599476c3"
  },
  {
    "url": "img/android11_4.png",
    "revision": "0e2c0c660647753ac5df82c8e83b71e7"
  },
  {
    "url": "img/android11_5.png",
    "revision": "d3c329e2cada4a73e75f7453a8b095c0"
  },
  {
    "url": "img/android11_6.png",
    "revision": "17afe85f92b61cb035e3c4c2125589ec"
  },
  {
    "url": "img/android11_7.png",
    "revision": "530543d6fa82ff79023986e4efe71acb"
  },
  {
    "url": "img/android11_8.png",
    "revision": "17e3cb191ba47b44b926e17aa9505ee4"
  },
  {
    "url": "img/android11_9.png",
    "revision": "2f15321702c193053ff558326e5bd4cc"
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
    "revision": "ed566833e8a7a08a3ac5f164cd7293d1"
  },
  {
    "url": "lib/index.html",
    "revision": "ce53b5a9208d25f1cfca332d8af9ed27"
  },
  {
    "url": "lib/m-less.html",
    "revision": "e75cfbd5e8b6a2427f474118541667bb"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "9027bbe2bdcae9b8a11911fbbbaada5c"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "9528de03abfb2800ae045b6c6941de58"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "b9dae8889dd66324db165cd92eb2bc4d"
  },
  {
    "url": "lib/usercss.html",
    "revision": "2832400acd1168abcadb8eeadb5ad3e3"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "9b207f8d5424aca8dead7c3be585e8b7"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "204721f5c1b1335ddb5d943c6b4c4003"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "38e3328532ab19c9681210976bcc5072"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "83b45e376aa28d584cc7c3792c7f21ef"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "c755a53d2a2c985e9203e2f2795e1eb6"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "15e8c8ef56826a914fffd2a1d17ab31b"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "aea86c7633f3753ef3ad8d9ed1a7e484"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "f72f9b1faf0323be7f25e1b6262bfb15"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "9b212125ac9c5fc8782fba411847c954"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "b84e925e2e09bd9379d7c5c89ded1585"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "e8ca1164a96bc47072d63f9e67392b16"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "a8723a857004fee091414f036c4705d2"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "b81564f77af20f6687d680606829b6b9"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "b3e52ec247a0da053237c4fda41a36d6"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "424fd2881a1fe75441c6e035cee1875b"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "d081ccb67dd95766793b66ae49815f78"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "87cf1c785fdf14011a4f204d3aa4a89f"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "0b07905f61fc1a2d963177d54db62917"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "fd392366eb842554386f907c73a7406c"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "d1ae97ce8f7ef92291b763a00d6f7867"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "94d79756635a9d643ab2665ceae8a720"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "96a1a95f768ad9e111ae8000882c610d"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "9ec7fcd2006a9c44dbb321b3a5970492"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "49a0db0c417f8edd5ade828843a0f571"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "716ea60985fe2503b1ce101954b240df"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "5d0d3dfa0f8d3ce60a68caedced6386c"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "8d2955583d3d678a344f1de38ab85cdf"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "04a9834d06a85c3c80e6ae511da3178a"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "1e7eb6aa4bc2ef5c1a18a16055157d9d"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "7039a5aa71adf1db613c4fafb7d445c1"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "736eacfe0f9a7e1524a9464bf261fc74"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "d5572c6bd9e907fa69e9774752cd9c05"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "a3709603a39adc831f064e39e16874b5"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "e585783fb963c5783bfdc890ba2cee96"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "03e8ff607df931ef9d43148ff231e18c"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "5aabe5b523dd97963e755721efc22514"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "dbdff7089f6f7e5b2f2577ea6982806c"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "acec82ba8d8e252e59fa922d00587b6f"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "c73c988544566fda52dd26a71c441a27"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "8526e54f0049c2365e541a2dcc7805a1"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "5501013531491250b96f346284f5d422"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "362fbd70448e5c328ff4381434776266"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "bfa6499515204e8f3fa88426fdeba111"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "d9e09962b12562297372e5741c8b8e8b"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "505ffd723d151fed0124dc856c2a92ce"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "330eee8cccfe5470b22b17f778119146"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "1987aa68055d20d135770fcb0da489a4"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "6ab8a467e237449dcfb10188c51f4a2c"
  },
  {
    "url": "posts/index.html",
    "revision": "e694cef7bc001224da5f9082dc5237bf"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "8c4c98ba3001b7a3200b486b6df57f3c"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "5131fc42c34a15f96b283ba7d2cebe06"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "317905f514d0b2216a30543b32ba3df0"
  },
  {
    "url": "tag/android/index.html",
    "revision": "1b6af87f7d73169d405f092097ff6f7a"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "a8724bed52d244846c2d27634c44646e"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "b9cc1ad808e3e089634bec662ac8c95f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c0bce5169d6445784c8b47266c7fd193"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "6551dbf532d610327b9d883113c615af"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "7829ccb9cf09822c6960d30691a7b86d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ba958d5bd9bd3cbebc0b7715dc797845"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2acf4fd48a0f2142bcddd3dbd5d5c92a"
  },
  {
    "url": "tag/index.html",
    "revision": "1a394a351c219b42f1b5935ca9127a19"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "742fe71df577e9cd63ee8b102870fc9c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "14a5451f419cfcd615e9a43d14d59af6"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "5748c27d10f31b5867b14413d47a4346"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e3192e28bfda5187590e0b76d6d4d2d2"
  },
  {
    "url": "tag/less/index.html",
    "revision": "e31d1ef625c2fc3fa57ef3cf68e5e592"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "adb9f6750611830b8f1f39a980238872"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "6bf7498a663145de3d0130353f921894"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "6a5c4cf42d06b1ab283bc8a1c5ece6c3"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "4db404c31dc8249e697a67f956381e2a"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "a5098fbdf8baa901fe79db1af9b8a3db"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "21262f6b254cf83c3ce5e8d535eea6ac"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "33e435077f7c50b47b709e9a705156f2"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "404e2b735b70a03adb71e41b4296ae62"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "78161dadc6a47918214f5159fcb416b8"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "2a57c809c8bcc5e297da18ca00847d32"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "d43a2ad32371aa2d1bc9ebc173365bd6"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6602c9c9808721bfeec864ce0fc15d1b"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "30dfdcdcd3b416094fa4141a58f61faf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c6cea6e358a8f07cef34e90db73ee9b9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "83a0790a44212a2ad645e53d2a241ad0"
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
