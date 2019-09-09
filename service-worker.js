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
    "revision": "8e0622e71eb92c617e414270383e62a2"
  },
  {
    "url": "about/index.html",
    "revision": "6e390a980db00cff1f063dad7e51701f"
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
    "url": "assets/js/app.74500752.js",
    "revision": "6f3c9471d79f55de8eca94c7ffebe106"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "1042f1f83e68800a04320c33ba8c1b51"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "d25434575ea25cd3db830b2361d63c1d"
  },
  {
    "url": "category/index.html",
    "revision": "b1c77212e65df89cbeb01458c9229e12"
  },
  {
    "url": "category/learn/index.html",
    "revision": "fdbc20f9ad849dbf13c3042b6cf9515d"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "d7b91243d3287fb4472b84d3df1374f1"
  },
  {
    "url": "category/summary/index.html",
    "revision": "2ad182a4e1e72975703c6c351b6b1bed"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "67d48a310493d3730f45c197587f8f16"
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
    "revision": "eee9ae341805f2ba5a0729ecbb8561e3"
  },
  {
    "url": "lib/index.html",
    "revision": "580227406d869a4cb150e16c4dbe169a"
  },
  {
    "url": "lib/m-less.html",
    "revision": "d9d02216aef5ee48c2648b1b0ea7259b"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "4d21b4cb7a0505811791c497c61ef77a"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "e787253cca4fad6dcd8ea20c26bd6e74"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "b561f646897987629e784972b73e6d22"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "3c37c699ca33f420c1dd16d95b483c50"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "ea7f204f749be7c3adfbe988c1cb8976"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "c2322b23c4fb974a1e17349127c5a814"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "c5aae65c4db9c6fd442b592ec21d5ce4"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "ee774fec4c12ee4f1189049cd4edb0fe"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "441398dfa3716dc697a46b5fc3ac3789"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "6db75cd7c883db9d056f27767a2e9654"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "9459421d2bd05eec5436de1cc1d5d550"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "0b58c2e861040b6b65dcb2e05d79ec31"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "072bc9b89a7d7eb419b48ae35cf199ad"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "cb6c327805f4199e2f402b4377aaad47"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "b267fdc6225cab1d28d98b62f0dbe539"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "2f678865fb88f12564418c86d74e2e1d"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "c56a9ce4066e8201424b74229c3928f1"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "b2f1181cbaf157d8a0cdc38f9203e88a"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "f8f87c227ff3d678b5d98106c49cf389"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "1df06713933f34e77c60ff6c00ed8ab1"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "555f03664bfefdc1768fa63adbf34c5d"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "15f9966a4256386ae3b0defc4bc40282"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "f1750a91bf59144236aedc3cab3c6541"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "762e893611b6ea1b32bc7337533a17f4"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "fe4fe7e285e4e18717051e51267b6c6d"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "a04565e3ebc1753ac489d53f8794ea69"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "d59ffc1f45708014c9ba622f49a606de"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "3d11076d67b7ef09402b1a50fd0c7469"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "4041d6e188192cce2f425f505f6390c4"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "bd2c2a9b4ac8e91904b49551b3ebe24c"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "03cae0ef116da8315c4b20cb89bfb75b"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "8688d8eec466cafe537dfc8496572fe0"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "c4619506e1a93c9a36a2308cda49dc70"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "830a3702c304d80ee033157c29fc4458"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "638adc43c8c921f764cf9d9bd818bfea"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "adf110ca6f80a75f10053ec27e06e67f"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "08b67d7d30ea7f27258d1d369987e201"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "77acf2fcbabf8df80b9ca4ab40560a15"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "755357cd9ad193d4957c7aab9f8924fb"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "2fa2e94ad77579dec4e6eeb2938343c7"
  },
  {
    "url": "posts/index.html",
    "revision": "87a6ae509c878f68198fd5f0574e7e70"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "3e1424deb7ee525752f707d3f41c2204"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "0b3b766aff9b1519b258f49d964beae3"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "50eb8d81f05a81d3296b8657d55892fe"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "ad807c0106951ddc8f70ae4c6eaa2413"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6869fde0f44172887e14774a6330cabf"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "1e08ec7497d5bc748ad22b76d68e1782"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "a61bde303c9734380a206fe1523bd7f1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7db8470d061e58eaab3700662a80bb45"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a87a9afddd47fa0303ea69b9082754e7"
  },
  {
    "url": "tag/index.html",
    "revision": "96aefba76e578e4ed0599a363810011e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "8d94d8e482255824be2aeb8b830fa14a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0964578e82f1be9fd74e567adbf9de53"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "e59e8e9d08840b24d18416665654f366"
  },
  {
    "url": "tag/json/index.html",
    "revision": "2315f0e4a182791532124f357c641b09"
  },
  {
    "url": "tag/less/index.html",
    "revision": "20277eec3f6a5625bf02771511e03e9b"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "1b3293ebb6a1fea3171dda23c831c48c"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "988d93808c122a3b6500ca7786496941"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "328b3b06a2e274b992c2769b3b1ee6ba"
  },
  {
    "url": "tag/php/index.html",
    "revision": "8e61867f858101b9a9db0f61769b2516"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "9c9c671311ba03f72b22224c35d8cb0d"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "0971ce2653512fcf854264dcf22b3e60"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "7403bc0477fb4df6e52755b58e6e3286"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "3fb161c33fc24f1dee4fc445b685b033"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "72ca65437da94d7ee5f6781d97dc7b87"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1d2aad6bf1ec449319455a8013bb4523"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4ac018d450d2cf1ab2a0dca6498592b6"
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
