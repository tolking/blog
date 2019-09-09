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
    "revision": "bbf1136159ad964d0c954bcf48a7705f"
  },
  {
    "url": "about/index.html",
    "revision": "fe6cb65e9d893cdd7d252fae5527a119"
  },
  {
    "url": "assets/css/0.styles.43fcf31b.css",
    "revision": "b279e1bac7b55bbb9dcf644b18606680"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.44ed7dd8.js",
    "revision": "9096171b12dd2cbf5025369dc51bf07d"
  },
  {
    "url": "assets/js/11.c43cbf93.js",
    "revision": "236888e76b6e53393018bf27490c5c7a"
  },
  {
    "url": "assets/js/12.f6bd1cb1.js",
    "revision": "69cf2fddaa2a054b8d39eea74bef6b01"
  },
  {
    "url": "assets/js/13.364f1dcf.js",
    "revision": "378008cc8bc50ca837302e6f9c09247b"
  },
  {
    "url": "assets/js/14.729fee70.js",
    "revision": "641a32e602f3847d9e2cc68448d09301"
  },
  {
    "url": "assets/js/15.8cec6cd2.js",
    "revision": "694064c026ee5fb3dd7c47a95db8a53e"
  },
  {
    "url": "assets/js/16.3b4354a8.js",
    "revision": "8b2db23fa8f006a01c6c1ad5d67eec81"
  },
  {
    "url": "assets/js/17.7ed90fc1.js",
    "revision": "da81cfb03693ae0f571e4373e38569ed"
  },
  {
    "url": "assets/js/18.31b9ca2b.js",
    "revision": "006e32749029d8b20c2de4698b579124"
  },
  {
    "url": "assets/js/19.025c147b.js",
    "revision": "ad058f860c45cd47d84747bac3f9acea"
  },
  {
    "url": "assets/js/2.9db14a13.js",
    "revision": "1a7dd2802a29e791fd35084feef1d22d"
  },
  {
    "url": "assets/js/20.aa2853da.js",
    "revision": "bb2d139ce52c411eade2678cb54431b6"
  },
  {
    "url": "assets/js/21.0b3fef2b.js",
    "revision": "e8b69817836a21dc70797c50c0a9c18c"
  },
  {
    "url": "assets/js/22.f0fc4025.js",
    "revision": "701095728ab0ef914d88040b6d0f79f4"
  },
  {
    "url": "assets/js/23.1f94d6c9.js",
    "revision": "9f06babc41c813307924d083c2850cc5"
  },
  {
    "url": "assets/js/24.4ecef848.js",
    "revision": "86bb454b025652359522e30140c9c0e2"
  },
  {
    "url": "assets/js/25.6fab6291.js",
    "revision": "9dc8b52f08be2d1b2498aca5e6aa1ca0"
  },
  {
    "url": "assets/js/26.6f997f26.js",
    "revision": "276f5ccdad86c7cf501fb14a7ce8ecd7"
  },
  {
    "url": "assets/js/27.00594888.js",
    "revision": "e998f30e8888e250a3d74b0e16fcb5e5"
  },
  {
    "url": "assets/js/28.91151b2c.js",
    "revision": "c4ba35da96f831604b80cd26ffce6488"
  },
  {
    "url": "assets/js/29.a0a513b0.js",
    "revision": "a76c8407450b2ba80359edfef8220a50"
  },
  {
    "url": "assets/js/3.482f1536.js",
    "revision": "4531d8c8543e27e965fd847d25e2ec7b"
  },
  {
    "url": "assets/js/30.b910b7b7.js",
    "revision": "a8af525ae9ab961ea88c40046531f1f0"
  },
  {
    "url": "assets/js/31.7c81a810.js",
    "revision": "15328a6d3aa7bdedb25440037b0b989e"
  },
  {
    "url": "assets/js/32.8391a594.js",
    "revision": "b34567917f95de06067201565244a228"
  },
  {
    "url": "assets/js/33.abeabfe7.js",
    "revision": "635077851a43d305cc249419dca8f4bc"
  },
  {
    "url": "assets/js/34.7504b5f8.js",
    "revision": "799d128a976dea53bb4553c106066c95"
  },
  {
    "url": "assets/js/35.d63e9633.js",
    "revision": "e527968bb8f45dc50b3c1339cac79058"
  },
  {
    "url": "assets/js/36.9aac35ce.js",
    "revision": "e830068cbc3d251aa95bbae8c060ab7a"
  },
  {
    "url": "assets/js/37.17a6bfe9.js",
    "revision": "f4508770d438201d5048f6635d576e16"
  },
  {
    "url": "assets/js/38.fe545643.js",
    "revision": "357eacd8e1889980987c06a0dd5bba49"
  },
  {
    "url": "assets/js/39.a002d6ea.js",
    "revision": "1f446bc71f497c7a54c42588e7a6d5bf"
  },
  {
    "url": "assets/js/4.52e95a2e.js",
    "revision": "dd3beaf3de47c415fe15c7357fb20144"
  },
  {
    "url": "assets/js/40.3eb3e016.js",
    "revision": "e046531ce43d18dad32ebf8084e6b5a3"
  },
  {
    "url": "assets/js/41.43629d94.js",
    "revision": "14558193d08b2e0145929fa9e65ccb20"
  },
  {
    "url": "assets/js/42.7c331cb6.js",
    "revision": "ff64cf7310d4cc44713482bfbe51f0f3"
  },
  {
    "url": "assets/js/43.3269a86f.js",
    "revision": "797d3a7e41af7d0a56c50763cdc1a690"
  },
  {
    "url": "assets/js/44.d2e6fe18.js",
    "revision": "a994edc093177f427f1b2e085a1bf4ef"
  },
  {
    "url": "assets/js/45.35c48bee.js",
    "revision": "04ba01e7dacdeb4c4d1a5cf2d9307a6e"
  },
  {
    "url": "assets/js/46.7a51361e.js",
    "revision": "54235932a2d50cf3d7edec2b7205a380"
  },
  {
    "url": "assets/js/47.cfa9332b.js",
    "revision": "6a50bbc7ef2a0a6b2eca0a2fdf07d62b"
  },
  {
    "url": "assets/js/48.0cccc9d8.js",
    "revision": "3a338930cf0f27311baa30c122ccc1ab"
  },
  {
    "url": "assets/js/49.3ac92334.js",
    "revision": "da5b7c09c1b0b3d5b8bf7aee643fd185"
  },
  {
    "url": "assets/js/5.80c6084b.js",
    "revision": "5d8fc8f45c7af7eafafdf14835a24094"
  },
  {
    "url": "assets/js/50.df760968.js",
    "revision": "59b7027fe580ddf39477dc95d34543d2"
  },
  {
    "url": "assets/js/51.46f6b6b4.js",
    "revision": "406777dd9b3b0807bd30b27e25c0c4bd"
  },
  {
    "url": "assets/js/52.8d01a7d5.js",
    "revision": "50ec242f5e230a391b59bc474df9b51b"
  },
  {
    "url": "assets/js/6.fcf4f558.js",
    "revision": "d18ae68fe126057f90c4056fbc923b14"
  },
  {
    "url": "assets/js/7.f8563d8c.js",
    "revision": "ae28ac31aa624aa06c3a7373d6b8014c"
  },
  {
    "url": "assets/js/8.f90f3648.js",
    "revision": "5381513b48fbf5cafe61117e14a4842f"
  },
  {
    "url": "assets/js/9.e1ea9d59.js",
    "revision": "17f801488089d617ffd84325cc6296c3"
  },
  {
    "url": "assets/js/app.940b727e.js",
    "revision": "78b79553613add7bd0c407d64ffb8b17"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "5e60335297bc7586f0811a4d16f5698d"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "43314838218b5fcbf1fa358fd156a465"
  },
  {
    "url": "category/index.html",
    "revision": "6b0e210fc0a17900ee4b6016b7d436dc"
  },
  {
    "url": "category/learn/index.html",
    "revision": "cc6e9c4719506f64cc88780577cd22ec"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "ad0261f4c0a5ec200b1a12fedde76372"
  },
  {
    "url": "category/summary/index.html",
    "revision": "645d84b7b41a5c6a3fd62b9c8934e613"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "ec530c6aeec3d17493e02f8c3164bede"
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
    "revision": "407f19377c3c8d9d83b1615223241770"
  },
  {
    "url": "lib/index.html",
    "revision": "783616d6a8214fbf3e844e5105261bdb"
  },
  {
    "url": "lib/m-less.html",
    "revision": "148e1b61cb541d4f849c6d08b28c83ff"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "78605c14b8a805045837d9e6994953df"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "2da87720ddfb3f072ccececfeedd07e5"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "15ada24ee9519e5ae0f953769577710b"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "aea1dfa91f090ea8f4edf6026d7b03ab"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "466648e0d65f11ce4c6586ebfab78afb"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "99db3fd22404bfa8afb30aa2f90c6b72"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "9cd1371daa8d9cf449c1eb17f9bf2679"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "af22b0592b1b4805318e7071734b4e3f"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "d17eb581651ec191623cb5abbdb5faa2"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "4695be18270f79ccbb3685bc0555416e"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "2bd2053a139774b297f34aa6de0eadd0"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "4dc9f7077243b79aa8675015eb0d2cf2"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "a130a0009964efb1b433d6291edacc2d"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "c92f27d8dbfe1346362ba3e66a0f8851"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "3c5a9c00613db3b518fd49b404784de9"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "075370c21408d151a29e11c0c90c1572"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "5f29ad4ea77159fa8102a634822eb9ed"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "ccacbb0b0be2c949b3f3acd8f780c3ac"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "7c966384a0a925155a4c6a1a7c849dc2"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "489438ca7fe45e2dd3596a51c0636b83"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "2cc84c89fbd94349a1fcde465cc30ddd"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "b5f9786d55e9257f94989093ec7f4056"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "97f3942330211516e36d9d4ca832661d"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "2a4127757abacb93446f854af41f7bfd"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "db9eb37215c87b95e4533177bd1a2dbb"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "6fb1c6a7db374fd263f3bfaf6ee5eabe"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "ccaabbad287bc53ea9a69bbd320e85db"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "e9a93e600f68881636135205eeee114c"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "55f4fe4e1c93b43bf95196ee34c464a3"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "92c2920ca2ffdc686f71c92c572f7fbd"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "88ff639bbf1c3dd99c876a939c04c850"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "7c945c61983cc3dd3c0789847698c04a"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "d5bd9e8e46602c349e4f79b564e9780c"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "5b8eca48ed8ab6f3cfad36bda7a7bf26"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "0bfb5e2d4bcb0d841c4441b77a9a0721"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "f11f1257660d269b65c9cd939019a6df"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "a23f355df42546ab1529568739f9af3f"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "21840fabbd840d6db99dba97638f34a4"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "e126410ff280eda42d2fc1d3b54b3104"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "6fe24075a57459509dc8dec6b4b1af0f"
  },
  {
    "url": "posts/index.html",
    "revision": "9877961176a2b74cd2706fd38b64a6b7"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "0c4f72cdda42a3611869c84c8923dfb2"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "44c38727bd47bbeb266f84b54400e850"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "b32b57d67f15ad482ddbcf93e30d37cc"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "5e27811a2c7e73dab55496442fbbf42a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "28b1ef4ec89c9cd3ad5cdbb5b6e2665e"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "58c2de470a49f9068f6c7c608bccb418"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "77e1ebe985bc3fd6a1a4058321323f6d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "493acb9cee952978d06e48f74ca81208"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b13e7f0b208869d1dce08980ad507ddf"
  },
  {
    "url": "tag/index.html",
    "revision": "a1bb027817d95c15a113ca34f502ece8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "952b5dde188533ecf15697609ca406f2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "01e0a7ac87c3ca54c4f57ef63c9d0582"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "91969b4813126a2dce2c89e6fa327725"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d12e750887193b2d961458bf80103ca1"
  },
  {
    "url": "tag/less/index.html",
    "revision": "283af195868a81acbb6d146e7fb73403"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "92f1c692b1b61051af4f9af7d8516068"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "df10d47b49ae6e43af3f58d373559343"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "d93f3b20132ff26fc247328c11ec9677"
  },
  {
    "url": "tag/php/index.html",
    "revision": "4df9bede4ffe7b203cbe8115c48ce49f"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "259915d0266f77147a3a3e41f18a24b8"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "708040edd701659bcdc18b006cab075c"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "2a279234958d9b2a56c5720c552c829b"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "545b1f9972cce2ed1fb3b9401878fcde"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "0cd4a2d7c014db97a00938ead09b60e3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "bce615da92e89fa87707ccb14be3bed8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "aaecdc7d7c87a27c324b960cfdab2ce1"
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
