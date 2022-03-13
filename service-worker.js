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
    "revision": "0680b31aa40024136c39fe807fe9dbf9"
  },
  {
    "url": "about/index.html",
    "revision": "475db2aeab5a4c0ba4a97f4fe282c0f0"
  },
  {
    "url": "assets/css/0.styles.7edae907.css",
    "revision": "7826720ed12cf6d4f52012d107de7983"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.042058a1.js",
    "revision": "9265a372216b5440d8146c31aa55218b"
  },
  {
    "url": "assets/js/11.906b0bee.js",
    "revision": "2861b94f0dda9bc83d8f8e6f49181d02"
  },
  {
    "url": "assets/js/12.9cc3e131.js",
    "revision": "05b1d06b2816d311102d8acd00a0421e"
  },
  {
    "url": "assets/js/13.9c87522e.js",
    "revision": "b6557a083e958ccac9b0be359e14b826"
  },
  {
    "url": "assets/js/14.6ee5fe4c.js",
    "revision": "db9bd3f48d311e4accbff508b0b28435"
  },
  {
    "url": "assets/js/15.f16c03a4.js",
    "revision": "9f735ce277e520850e65dee33a0d8cf7"
  },
  {
    "url": "assets/js/16.dae8b604.js",
    "revision": "ab6eafdc458ab03e442ebd0919dd7706"
  },
  {
    "url": "assets/js/17.6862e4f3.js",
    "revision": "33f413bb96e4c80ec7d5a04e84ff2ab1"
  },
  {
    "url": "assets/js/18.4bbe45d5.js",
    "revision": "d40cc98bbf4c21bffa9863fa563b14cc"
  },
  {
    "url": "assets/js/19.dff744be.js",
    "revision": "7d3071e7ea82410f5ca2c01cb51e1987"
  },
  {
    "url": "assets/js/2.5f455285.js",
    "revision": "c312a2768049aeb53d9540efc03fef2b"
  },
  {
    "url": "assets/js/20.70092676.js",
    "revision": "61f841e39cd750b6ef06e850418da023"
  },
  {
    "url": "assets/js/21.d678f0ad.js",
    "revision": "51de2291ba758070d8fd86190894d7ef"
  },
  {
    "url": "assets/js/22.caabacdc.js",
    "revision": "8cdbab12d5873f0e6e612e43cae979a0"
  },
  {
    "url": "assets/js/23.32ec91d8.js",
    "revision": "4a0658685ac8836ca7a018fb4b7c3d9e"
  },
  {
    "url": "assets/js/24.739da161.js",
    "revision": "adc596224efcf51f5e22c12c59aa2565"
  },
  {
    "url": "assets/js/25.19438cca.js",
    "revision": "1853140d429a3ee451a860105e8a4e19"
  },
  {
    "url": "assets/js/26.41a95c2e.js",
    "revision": "da2396bea56cd7c0656f13920f931dc4"
  },
  {
    "url": "assets/js/27.4d407080.js",
    "revision": "aa370ff8da65bf768d3ea022327ca1ef"
  },
  {
    "url": "assets/js/28.7e626c43.js",
    "revision": "0499d6b6e5914dc559222825ceb39d69"
  },
  {
    "url": "assets/js/29.d389c129.js",
    "revision": "8fcf97543c541f47fd9c8cf21ce12ab1"
  },
  {
    "url": "assets/js/3.7142a157.js",
    "revision": "51444a81e5a24f561f84c0bf43bf3e5b"
  },
  {
    "url": "assets/js/30.56826dd2.js",
    "revision": "22556370bd28dc90cf4d4d682933e907"
  },
  {
    "url": "assets/js/31.dd5cd006.js",
    "revision": "dba92b0765c120387281d23d176dadb9"
  },
  {
    "url": "assets/js/32.9492bdb5.js",
    "revision": "5043ecdabce2a243223bb4b52c4d2532"
  },
  {
    "url": "assets/js/33.29376a67.js",
    "revision": "09374e1d5d609a732d214c052c8f16e9"
  },
  {
    "url": "assets/js/34.64c9f9f4.js",
    "revision": "6218c18f47722382d400bff6e7c64d9d"
  },
  {
    "url": "assets/js/35.0c19bd46.js",
    "revision": "4a9423182404a675d60bd742017f5935"
  },
  {
    "url": "assets/js/36.f01f0b6d.js",
    "revision": "80b5707139a435cd6c3d1dfa1b92e8f2"
  },
  {
    "url": "assets/js/37.6cbc0a06.js",
    "revision": "a30d778a6e0b7bd0ba284f9fe31aedd6"
  },
  {
    "url": "assets/js/38.22fcd288.js",
    "revision": "3c77efbf7b0f3273295ea35ed2b92234"
  },
  {
    "url": "assets/js/39.15e2bc9d.js",
    "revision": "7e5cb81c45624067c718b7eab1b072c9"
  },
  {
    "url": "assets/js/4.d405e9c3.js",
    "revision": "13b291b98fcafcb91d7ba6406f53f82c"
  },
  {
    "url": "assets/js/40.f886892e.js",
    "revision": "97debcc3d3a7db69375093b4c69478d9"
  },
  {
    "url": "assets/js/41.27401489.js",
    "revision": "92bdfe78f333214a0f71f32383feb5d9"
  },
  {
    "url": "assets/js/42.c810f95b.js",
    "revision": "bb029f3f7a6a22c2a1f4c77c063c0ac8"
  },
  {
    "url": "assets/js/43.14738ac9.js",
    "revision": "6f146e18b7c5e22a00a7a15ffd22ef1c"
  },
  {
    "url": "assets/js/44.84dc29a7.js",
    "revision": "e6ca9f57e4061e66fb2d23695ab927bc"
  },
  {
    "url": "assets/js/45.2ebefb92.js",
    "revision": "08800c4f28b0755c53ff007b3bdd5208"
  },
  {
    "url": "assets/js/46.4ffb216b.js",
    "revision": "f431457d192cc23bc17db13298fada07"
  },
  {
    "url": "assets/js/47.1c4770fa.js",
    "revision": "08140666e72a3fa29fd1ecd1b2004d2a"
  },
  {
    "url": "assets/js/48.84fae907.js",
    "revision": "2a30bda2bc0abae1c2c49677141b4c33"
  },
  {
    "url": "assets/js/49.9cdbad6e.js",
    "revision": "8f87b2a58dd6bd27fd75a93fd972eb09"
  },
  {
    "url": "assets/js/5.c8946414.js",
    "revision": "5fe8bc00fa8b8c476326a120dce30511"
  },
  {
    "url": "assets/js/50.80af229d.js",
    "revision": "856ce2e1bd0b8683725d69b51b9389b8"
  },
  {
    "url": "assets/js/51.4a85f08d.js",
    "revision": "2895ce7369b812f373c3d150b5926074"
  },
  {
    "url": "assets/js/52.07d4a15d.js",
    "revision": "727b183b6497f88db58b3ff3bda6c52a"
  },
  {
    "url": "assets/js/53.3b739bd2.js",
    "revision": "37a5898af64d8f97ca23bf5f53bbd856"
  },
  {
    "url": "assets/js/54.b3ded829.js",
    "revision": "1b036c903f6f2b7e42e062a1cbdd86ff"
  },
  {
    "url": "assets/js/55.5f4a54fb.js",
    "revision": "b6bc7e38c64d3843d7e0720c376e531c"
  },
  {
    "url": "assets/js/56.5f7c9172.js",
    "revision": "1a7a00a80b3b41d4b43865ccb136e29c"
  },
  {
    "url": "assets/js/57.5c16239b.js",
    "revision": "54e9a8fb3a85cd113e4e656f42fb1bfa"
  },
  {
    "url": "assets/js/58.5118b09e.js",
    "revision": "e1a7f2b1cf895ce44242062118eeaa47"
  },
  {
    "url": "assets/js/59.5c5ca5ac.js",
    "revision": "6e78a7bff16755735aed613f430f50fb"
  },
  {
    "url": "assets/js/6.40b7f879.js",
    "revision": "d3a91691f5b52a47b6d2e1c039eebb9c"
  },
  {
    "url": "assets/js/60.8233266f.js",
    "revision": "e59d5eb14e8263c818eab9078db0c965"
  },
  {
    "url": "assets/js/61.d8e8d81c.js",
    "revision": "95e07f0bc99cfe0321a12ca1e6edde9f"
  },
  {
    "url": "assets/js/62.e3475b9d.js",
    "revision": "c52989f8213f11ebb048d4467e0bdd74"
  },
  {
    "url": "assets/js/63.d2d485ea.js",
    "revision": "00260a87a780b5b99f3d2b7d833adc94"
  },
  {
    "url": "assets/js/64.e3106c95.js",
    "revision": "2e6bb0b51c03e6b3cb86c0a4999076b3"
  },
  {
    "url": "assets/js/65.f82de8fe.js",
    "revision": "32a8cf326eb9828f0bba33480c65817b"
  },
  {
    "url": "assets/js/66.64572dc6.js",
    "revision": "2a4447f0e11d69610e5500741b5c8885"
  },
  {
    "url": "assets/js/67.31bc4fa5.js",
    "revision": "9e95bbe9d9742be76d73063e3bb927cb"
  },
  {
    "url": "assets/js/68.b9aa7399.js",
    "revision": "9cf35d93b660ca3d5ed2f0d30f98e612"
  },
  {
    "url": "assets/js/69.28ce059c.js",
    "revision": "089eedd0b8fe9e4d090fa1d1f8f2630a"
  },
  {
    "url": "assets/js/7.4d2e6b58.js",
    "revision": "1d801c843d21f782814392d06c506ebd"
  },
  {
    "url": "assets/js/70.6da5fd0e.js",
    "revision": "605e99fc6bd096185c9bded6d3c1b031"
  },
  {
    "url": "assets/js/71.60848b47.js",
    "revision": "fd780dcf7001226c673e3226437d0c34"
  },
  {
    "url": "assets/js/72.f19f8c35.js",
    "revision": "943720d307bd90fd348dc27fdb26d9ec"
  },
  {
    "url": "assets/js/73.059e5d7a.js",
    "revision": "da0295bc0580df06049fe8232269c4b0"
  },
  {
    "url": "assets/js/74.3798702c.js",
    "revision": "991da1f59da055a3af4be784495898b6"
  },
  {
    "url": "assets/js/75.7b229f7e.js",
    "revision": "23f0a4ff84229ad38497ce2b2d77299d"
  },
  {
    "url": "assets/js/76.62261bc6.js",
    "revision": "be0eb4cd6a06010ee1b306fc777514f1"
  },
  {
    "url": "assets/js/77.d0516065.js",
    "revision": "213b63e8d734bfcdd58c361f446e97bf"
  },
  {
    "url": "assets/js/8.4a02d16e.js",
    "revision": "919b4cbfe7cbad05ac9ef406aae94501"
  },
  {
    "url": "assets/js/9.fe4d9178.js",
    "revision": "9803915816fdf35da81813e4cd32e450"
  },
  {
    "url": "assets/js/app.5bb18202.js",
    "revision": "ff0fb0bd448a5fe60335e98f7f96b6a8"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "a19608b624b65269186c3d7e2f89888c"
  },
  {
    "url": "category/index.html",
    "revision": "88b2afda226e2595dd11d9945f2c3c3c"
  },
  {
    "url": "category/learn/index.html",
    "revision": "ba2edbba045226b7668b1d3dcd259d8c"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "d769b8b12e82ee4a365aab06e3d9032f"
  },
  {
    "url": "category/project/index.html",
    "revision": "58a00c989daf891f286abb628736b301"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "9ff1681f48cbd4efcc9e17bc38c08e12"
  },
  {
    "url": "category/summary/index.html",
    "revision": "029338e5d92b45e78dcaf405f5767167"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "8ddc36365894c46f8a539c0fed7e05e4"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "722af54aec2a95aacb63a22ef01122e5"
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
    "url": "img/android12_1.png",
    "revision": "0b8b86f2da7c57552f194a5080f69f72"
  },
  {
    "url": "img/android12_10.png",
    "revision": "12358293ac45e4a99728e3b93310bfbb"
  },
  {
    "url": "img/android12_11.png",
    "revision": "9279a44e1af8c010403e17551f82ec2a"
  },
  {
    "url": "img/android12_12.png",
    "revision": "741543023ebf60c4a157642fccc8da78"
  },
  {
    "url": "img/android12_13.png",
    "revision": "970c664845b49179a42fa84974186b5a"
  },
  {
    "url": "img/android12_14.png",
    "revision": "981563648064ff13974e6abcad35abe5"
  },
  {
    "url": "img/android12_15.png",
    "revision": "49621f7c1d832f7f905c94b2d7c4e7f7"
  },
  {
    "url": "img/android12_16.png",
    "revision": "9763ca2506b327f76408c7d76d20445f"
  },
  {
    "url": "img/android12_17.png",
    "revision": "f76f54c7684e26f15f67c18960a6a5d1"
  },
  {
    "url": "img/android12_19.png",
    "revision": "71151ee2f97b489909e5c830d67f66c7"
  },
  {
    "url": "img/android12_2.png",
    "revision": "a8ca10a8552dcfdc80bba5ee7d006ade"
  },
  {
    "url": "img/android12_3.png",
    "revision": "40b1a24737b5ebe885bd95d49f7117e5"
  },
  {
    "url": "img/android12_4.png",
    "revision": "5b34b615edaf3213ce2e5ebb3ecca344"
  },
  {
    "url": "img/android12_5.png",
    "revision": "7592a0675f14ae6430604bacaf61caf7"
  },
  {
    "url": "img/android12_6.png",
    "revision": "6b37a17573b8a6612516cd121a68974e"
  },
  {
    "url": "img/android12_9.png",
    "revision": "7044451cc66914c0948ff13246ba3d6e"
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
    "revision": "22eaae74a5236d539194c790df317ea4"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "85c5384751070c18f3f3b5dce80cb537"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "d0f789b6667e313915b1cfee1b5ffc4b"
  },
  {
    "url": "lib/index.html",
    "revision": "7ed325a6ead9260a44e33832c41420a5"
  },
  {
    "url": "lib/m-less.html",
    "revision": "f23cd3f4ed95ecc2a6094daae5eb7a18"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "f6a962b4d79a35b47d559c4a5ec21641"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "e32da89218d0a7e68ea0fd4c0062389c"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "99efe1e36ee1aa63f825c544080f09fa"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "8d24bfe7585646fded324572fc270477"
  },
  {
    "url": "lib/usercss.html",
    "revision": "a851184742575617d1dee8db25a28790"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "51820b3e1e9d82257783b96b24fa0ecc"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "017a1df37cebe67f8801b48832a0e9d4"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "cab386c14f7d9ef048c8c0b49e3b5935"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "4f5a9ef5f466af9fd30a6bf5f1b832cf"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "fad9634fcfbfbc0647db0c5e461a1135"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "ffdb7fa94433a07b4cc2e2bb352f8d59"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "37d2aa66bd0f5a72140d32e89944aa1c"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "1f1975f675536fc7d2d82daac088d267"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "edc6d7e68adec93bdfbadb65d9ef15e7"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "580591b728ae2599128a460e7d63d169"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "d179677adb53a4495e7bbc0366ad88fd"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "30e36000b577ce0634093eb1f500b382"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "0b390280feebc41026636aeae1959f8e"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "d137ea65b098d533aa1fb95fce85b551"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "a5136170f481da85c13412bd0194c012"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "50e2bcedcefee26341a186c441359841"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "b59ac2480544129395cb7906f5f622dc"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "66084db9a4f1fad5007c3fff19d4be42"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "36f04b3c449d6cd5d81c38efaf451b73"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "ff88f54947c0a6ed38bec0d59c45a33b"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "c0c1a152153cdc3d16888697c0031643"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "680591729b78db9a6dd85602ddcd9a09"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "05ea8434f8784e31370ebee068e16d39"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "ef98c4e0ee07b56e95ece84bfad6ad7f"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "6e2cc143858406104a1f0a455c80decd"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "bb3aad788aa02b484be0c9c4152330e2"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "a166c11354ab9f98540f9e73b4d08ca8"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "c336d4a855bc276cfb4f24ca3fafba98"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "ce3003b6bb4a147afa6994d063c702f2"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "3adb529ad129de67e217779f756ddfb1"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "805b6530d2ac0ea4b2509af1f63a72fe"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "7d9db86b3f305acd8552f784d1400720"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "b76f6037736117d60ff4325184a75af8"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "645b92f5d6bef728a2a10bb7ab2e1f38"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "0ddabd0a7065d7ae90e396466e4ccf8c"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "7e07b725d06eef6e3bcbd0c94b53cf3f"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "6b660d19a354d870b0271b0628da7181"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "b46996e80e7774078a45c0c244d37a73"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "66cec5f08777eb7e1b47d1b6800cbeb5"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "18ae995b9b76281c5d0fae9bd988997c"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "f27453a5d7205132435f23fc48a19e66"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "74814b7ba03b78f2a3782c7192a3aa7c"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "a862fceecf60713583f030193f5e83ea"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "7536e356528491b408ab3470b969cc44"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "49ccdc00f45c4c448214f61bf3fe019a"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "48307e24ceca221ea60c8a3db97810be"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "e16d67f50a3407dfc900b5be53e5ad29"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "7f951b22b5990a1f10f4a0d5ae1beef2"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "ac96c0e44e16a99a59b543e7dcf943cf"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "a64a1890fff15c393dafc3a87e402b96"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "ab65ca02008f912ad5b7a0ca5d3f0fe9"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "297912dc627da2460c1dbbec06aaba85"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "87637eb576e847e0b8c0b5abcf9d76ca"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "f67ac02d3ade00a4826618ec5019c7d6"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "ea4939f5033218b41e0a501c9ae184d1"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "fb5fecf73bfd72725a389b79af26f13a"
  },
  {
    "url": "posts/2022/03/13/createfetch/index.html",
    "revision": "a80ed4edefc07b9d8c4b645dd0a5320e"
  },
  {
    "url": "posts/index.html",
    "revision": "04871a8d0421cfc6c2116f30bef78ad6"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "c342791a4d53b9b9afb39b3275138143"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "0040cbc4dbd37ee5956a575abe2f92f8"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "631892d8c2010720df3ba6ea0ff58953"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "63c8963b8e8ef12a6f11b5b6598cef27"
  },
  {
    "url": "tag/android/index.html",
    "revision": "6c909743f5e1ff4eec3702f96732d3f8"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "c1c981e96a4981d75acfef12b6a494cf"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "03dfbd9226ed2cb222e9b0d28fdfc1d9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a972fce2d9440305731acfbd5594abd5"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "e08a0654472e99a9fb6e209a0fe22a92"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "1dfb89bdf75b6b151abf6ffc4f919045"
  },
  {
    "url": "tag/env/index.html",
    "revision": "d6d73c9d5ac2c513e29a701b0df02880"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "97a85e22e5fd2598a29651bd3594e608"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f49ff5286317432023ffb4619e05fa4c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "eea95ea6de6ff1ca60a733c4ad23f7ec"
  },
  {
    "url": "tag/index.html",
    "revision": "6eea882172426697b73d4214e568ff30"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f56effa13088c0ece42c0284a0482c0c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "99977bb7ddd8c7827f7545d31444b185"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "84b0d21f44053f2263390b6e7a77f34a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a186e22fd0aef0999cbb26f54be06960"
  },
  {
    "url": "tag/less/index.html",
    "revision": "e2ffd367a3899c6190888f3f749deb52"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "e375dd5377b2dc65dce3366476bbea59"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "ca293cc74c0d3cdedbead0a1a9a74c12"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "b903a98ad1006a7468c155bc812692f3"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "28bb688ebb72cb16a0e31d83bbc63d91"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "d1109182653247e0a501a6d8032a4309"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "93ab51804f847bc09dfe626927858a24"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "0d40b16aa04bd30438d845ffb69d3301"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "9d64f4d3acd1680f91286e6f4295ecae"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "0a80493654154e9a8f63f721d4b0153f"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "27519c3bd79f8873182ad03b1683795d"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "bfb85183b656b78d7fbdef63d425ca10"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "c8acaf146ef63e199b9fbd489d62a7e0"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "c6821e508031321a457330971b87c27d"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "f1bdd65f07107a189f98a8a93ba8961c"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "812a63730f48a20cd1f0baa831a53029"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e81a5788b0f8de2e9e94ffe27ff49c10"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "cfae4d200c78373a1b78fa7d02ad2fb8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3d952dfff13c46f8ba9db86f155d331c"
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
