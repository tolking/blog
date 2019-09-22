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
    "revision": "9c60c13808f43e957d069dd3625a2067"
  },
  {
    "url": "about/index.html",
    "revision": "a141073d2c791417abbecc23b99cfd5f"
  },
  {
    "url": "assets/css/0.styles.55a61cdf.css",
    "revision": "f4a6ba0129797b582d4591513e0f62c7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8996b6e9.js",
    "revision": "770f6fb47d188c6df9603d4e01b5d004"
  },
  {
    "url": "assets/js/11.8f3a8bd6.js",
    "revision": "1e521fbf609fb5a4a67cb0a98813e004"
  },
  {
    "url": "assets/js/12.70755674.js",
    "revision": "b1507720d3884b710eb402aed2ba771f"
  },
  {
    "url": "assets/js/13.3f27f523.js",
    "revision": "868941029b772c969062c505d7dcf64d"
  },
  {
    "url": "assets/js/14.a6a78b9d.js",
    "revision": "6320944b19cc7381ae1a66ed23060929"
  },
  {
    "url": "assets/js/15.b83622bd.js",
    "revision": "13d8310a45f93562f83cd9ca4b631d1e"
  },
  {
    "url": "assets/js/16.407436d3.js",
    "revision": "bc79e66fb083d372808649a69d4848e2"
  },
  {
    "url": "assets/js/17.302edb81.js",
    "revision": "f107e7072eb5672ea018a8a3fde1ba74"
  },
  {
    "url": "assets/js/18.b261b1e3.js",
    "revision": "93b0ccce2362a5a124572752f5c46719"
  },
  {
    "url": "assets/js/19.34335075.js",
    "revision": "3417cbce5544dba7323b885a71f8e019"
  },
  {
    "url": "assets/js/2.033c3f46.js",
    "revision": "2d1f53a45d606aded89cb46a04f1e4c7"
  },
  {
    "url": "assets/js/20.f50502ce.js",
    "revision": "09dfd2d192718e4dcd9e6704bbc470e9"
  },
  {
    "url": "assets/js/21.672ad7dd.js",
    "revision": "61e034f8ffdfcaacffd411fc15494df2"
  },
  {
    "url": "assets/js/22.dd6fdab5.js",
    "revision": "e8642c5a2bfcd609a67cbe666a704548"
  },
  {
    "url": "assets/js/23.ca98e5b0.js",
    "revision": "43af1e5db01c54c1aa082ab612875579"
  },
  {
    "url": "assets/js/24.3da736fc.js",
    "revision": "64ed419f9cb84369e6ea6775550dab6f"
  },
  {
    "url": "assets/js/25.bcd8b9ac.js",
    "revision": "cd4714b5559589d6a5a9b2c97affdee1"
  },
  {
    "url": "assets/js/26.54d91dd3.js",
    "revision": "108dcb3828cf6fe67eddcaf02a6900a3"
  },
  {
    "url": "assets/js/27.a3cd2828.js",
    "revision": "d85a075cae1727ff7993ae06b2c85707"
  },
  {
    "url": "assets/js/28.8358afac.js",
    "revision": "51f6bd77f3644d9091cc93b59778ec38"
  },
  {
    "url": "assets/js/29.5192506e.js",
    "revision": "a799fd4da88138ad36d9c9f59a622530"
  },
  {
    "url": "assets/js/3.8952701e.js",
    "revision": "8bf3d1b3a0ad947efafba52ac559a50c"
  },
  {
    "url": "assets/js/30.9d6a2662.js",
    "revision": "a06755a44060ad949b42810676a6e4c6"
  },
  {
    "url": "assets/js/31.4a647169.js",
    "revision": "2e3f13b88fbf2463bce38923b3e29379"
  },
  {
    "url": "assets/js/32.36273c51.js",
    "revision": "f57c895c782025f003d38b2c7e905584"
  },
  {
    "url": "assets/js/33.cbfa8995.js",
    "revision": "408d21be4f6060a174bc76e615376794"
  },
  {
    "url": "assets/js/34.a5d2b826.js",
    "revision": "f05d6222a0a898d54d845647169d8f4f"
  },
  {
    "url": "assets/js/35.75d8ecef.js",
    "revision": "275708614b4cd3ad9214c20ac1021237"
  },
  {
    "url": "assets/js/36.b6a7dc59.js",
    "revision": "ba3a2845f1e81c81f8723bd3f359c00d"
  },
  {
    "url": "assets/js/37.37fd9e39.js",
    "revision": "9e24fa35fd3be3645b1e0d03516121c9"
  },
  {
    "url": "assets/js/38.3b4f40ca.js",
    "revision": "d2ad056da143ad0b9e1184728287cd87"
  },
  {
    "url": "assets/js/39.1bd7d3cc.js",
    "revision": "8f1d4700137bebd9c817ab2884ecdb45"
  },
  {
    "url": "assets/js/4.faa7c9bd.js",
    "revision": "aace4aaa5b2b3f1f4488d19f0f0139de"
  },
  {
    "url": "assets/js/40.7c4c0cc0.js",
    "revision": "c23fbf0a6581edd0b3bb875a909e53d8"
  },
  {
    "url": "assets/js/41.5b3c30a6.js",
    "revision": "ef7ba81b63c5fa088c87ff9b134012db"
  },
  {
    "url": "assets/js/42.c6ea4011.js",
    "revision": "f49f1c63fcdab62b16491fef60917f7e"
  },
  {
    "url": "assets/js/43.4fe74b42.js",
    "revision": "d9c3c68037c7ef9f587b2695fd433b96"
  },
  {
    "url": "assets/js/44.922fddae.js",
    "revision": "28b9d2e6dd154dad62b37070476a1f54"
  },
  {
    "url": "assets/js/45.9206d63a.js",
    "revision": "94db9bc95a67c58295c50647960f650a"
  },
  {
    "url": "assets/js/46.479b31ab.js",
    "revision": "e20ffc6928554956c4e8d6265da9ee90"
  },
  {
    "url": "assets/js/47.cbb2516e.js",
    "revision": "c9ca7cf7e7c3ce082358b0c1cbc823b4"
  },
  {
    "url": "assets/js/48.6288933a.js",
    "revision": "9ed1c4a650e43f75bd01e85e6aaec839"
  },
  {
    "url": "assets/js/49.faba0645.js",
    "revision": "b703d28f18fac894ae4f7a6611291b42"
  },
  {
    "url": "assets/js/5.c6b3fdb3.js",
    "revision": "1f3ed01575dedb450483c9d3a581bad3"
  },
  {
    "url": "assets/js/50.75b9dcfc.js",
    "revision": "c0a7225c7e5d7f7235c1bdc2438fc969"
  },
  {
    "url": "assets/js/51.94f859d2.js",
    "revision": "1828af4ec5b1add12753fbc6a60c88f1"
  },
  {
    "url": "assets/js/52.65d1d81a.js",
    "revision": "9dc799aa13bb01ec316aa007d34f97a3"
  },
  {
    "url": "assets/js/53.90446096.js",
    "revision": "b17d3c424c76876cd85fe280652ef7e2"
  },
  {
    "url": "assets/js/54.4b4269e0.js",
    "revision": "f6b897cdfe0e2c0f91db05a38887341a"
  },
  {
    "url": "assets/js/6.7a8eb8ab.js",
    "revision": "76ec65735d18d1271fb174736c4b31f0"
  },
  {
    "url": "assets/js/7.db426a6e.js",
    "revision": "1f74073880816e96900d8b6e8fa7bbef"
  },
  {
    "url": "assets/js/8.d5de3b40.js",
    "revision": "4f4c94dbc75f6f5e103baebadf5d3c27"
  },
  {
    "url": "assets/js/9.0f155469.js",
    "revision": "b1980b1bdfd604a0bb3d102ddc133b3d"
  },
  {
    "url": "assets/js/app.7b1c07b6.js",
    "revision": "35ac0e19566d6bf4a328648bd37571b4"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "adead0e7fd1c6c3c06a8aa383e9bbd06"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "ee1c3e3d05c3be63b356b3c3326f54af"
  },
  {
    "url": "category/index.html",
    "revision": "30f8fce8a85e53de10b4336393a13dbd"
  },
  {
    "url": "category/learn/index.html",
    "revision": "c173f97ce8a23992fbe861d0b58e693d"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "1fa9a73bf410eee84936ab78460dc1a8"
  },
  {
    "url": "category/summary/index.html",
    "revision": "7679c41c734301ebcd7e1a63fcdba1e7"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "691342648ac1054e80ed833c4bb5f7e4"
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
    "revision": "afaa05ff7ba6c0d9df658f617cfe40c4"
  },
  {
    "url": "lib/index.html",
    "revision": "f6280f55092dd6d25901a702643817fc"
  },
  {
    "url": "lib/m-less.html",
    "revision": "d39f9cc6a2cb00258c2f03a58303ddcc"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "284c3e130d51fade49642d9ea6e2c9c0"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "ffa96e034b1c0e227484245c1a851df6"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "e7bef786ae8500726eb046d92d1fff7b"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "2337e0f39e0c3563bf53583543995aef"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "6e4859a327faff16a9ab6e65b3141dfb"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "703e6aff3dc8b7f90e3dd7c47dd17d37"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "8a9149b96bc1af638d7eadaf89d8d76d"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "966c86a7efa284e21e96882f94739621"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "0bdefd529a20086a3b495ff7f962abad"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "5333f65fae9662641ca289c3aa3166f4"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "2371fff7138ed16f884fe7aaacae59a9"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "870a9eeab57efcb2bf956eb2c1b3e946"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "a715162e4d91d28035c80b02e779f899"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "b7ce4a0aa95ee34757aead0c7aac8c21"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "0f5752d836644042acdf18fa80814c87"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "77e4a67cbb4e7efb747f6625dd1311f3"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "8b08338b7f57df4fee05463e7da317ef"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "c98bccb901ef0abeb32a9f55dc8e8670"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "c5562482c113143bf1b60189dcdeb0e3"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "b71b257bc7f54a22cac5a9404d22b184"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "6b29f0cba4ce01c4b4a8c115f3a88571"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "d93857c08a72202d79459b05ef1d8d5e"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "3d71aa4e634c5b696fe0d3d820b85e42"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "bda6d2c9dc09942da5942586b6e160f9"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "13367482b1ac8f03d1848dced9bcc499"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "e8f7644587ee66b3ecf68a2efbc15551"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "41ede1d31be160cc092ec81016198aa9"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "e6088843d4a596fb379822f3e383e56f"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "33cd5b2a0333d6e0168d2da31c3405fc"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "a9e34e747b8f2fe176865b7dce4deda8"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "672d674df397e989c80d0598ac03159a"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "7e8b83ba14ad365c3146dbfc952106c9"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "8451fe8303bb6ff54ad39042b7711583"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "ab9721cfea1f64128c5045ce7a33b976"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "987e01740c06bae0375f1c65560eeee0"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "9b144ae1fb12061320c61b130e569185"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "ffb546397bb03fac501b5285a24533e6"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "64c3dbf57d9b33a7a8fb732f0556adac"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "d65ed2af082ec5a70c2a319f4b03ff86"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "d7ffb4369f0c99139c94c6552c22633f"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "222c42922ebf9633ee97795601ba753e"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "d4f087e997d756f8b9a5379140dca727"
  },
  {
    "url": "posts/index.html",
    "revision": "458ab065a78107381e6bf8348a6e7779"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "f9035d0ab0eaf57e97557dd4b1baaf19"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "3647af731ea251d6a7d09fefad92de39"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "c685005281f8540c3103e4e37484c16d"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "2ffc6a3f0aa9eb7a99d3b8d00f4b6ecc"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d23118bb6eebe5ed1e3e4f22329b8eec"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "7303c898bfd8f5f73dc3bf5003824b05"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "85b76129d8675c954c8f6d7279b3d4b0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c914e15e3f0666139e278b2354189925"
  },
  {
    "url": "tag/html/index.html",
    "revision": "58baf9162034a43ad7f1ca666f394398"
  },
  {
    "url": "tag/index.html",
    "revision": "367e56af4ea81af180219b986f3f77a8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "296ba30e435cce0177c4bb926216d367"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b76780471b1a66e6948dd221a9b68332"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "ed4d1932f663fbf1eb61f98a8a0f986c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c6ec99363e43b43e8ec2288183902b35"
  },
  {
    "url": "tag/less/index.html",
    "revision": "cad141153b547333fbc4da459ceaedff"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "cff442b037ab3f97f99baaac2e2f75b1"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "576a3250c9305efd6e7b38a7f43b5f23"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "3d9909477ce61ac9454af2e73d350159"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "74bb3287188091208b4e9349ffae1277"
  },
  {
    "url": "tag/php/index.html",
    "revision": "d7106dbd4010f7b6774125b0a7e1dc23"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "76cf060146eb285a6ee094c897e38d96"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "9e3a3b280df8d942e1681433f603ca2b"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "0f84d2274a4d54e7e83adb7b26818056"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "c0b2274e4ca50fb6c4dc571c36351aba"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cfc716819a6ab4b372b1fc627d07fe7f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e68ccab699401943812fc668effb2f7c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "218a120cae79670ade06a1d54509bbf6"
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
