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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f73214654f32b70d430bf3deb2235a37"
  },
  {
    "url": "about/index.html",
    "revision": "12f6ec8fa9e8bcc413bc3759f6c5e2ab"
  },
  {
    "url": "assets/css/0.styles.3c89d6db.css",
    "revision": "a60876898b1a8b0a2caaac062c412a38"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cdb991ff.js",
    "revision": "b7a46945e3bf5aeec730c5aba551e1ba"
  },
  {
    "url": "assets/js/11.d824e307.js",
    "revision": "f2076929168610d4069e9152b1f15324"
  },
  {
    "url": "assets/js/12.8556fce2.js",
    "revision": "48fbce5db2ec7a519dee85889fc8eab8"
  },
  {
    "url": "assets/js/13.7926e846.js",
    "revision": "66594dd1d01c53d2ff358c14576a0375"
  },
  {
    "url": "assets/js/14.b0e69a46.js",
    "revision": "4fff6ed16dc66c3194c54563578949d7"
  },
  {
    "url": "assets/js/15.7b15d2ad.js",
    "revision": "d597d6924bf92ec8304ebdb380d3df91"
  },
  {
    "url": "assets/js/16.26001bd7.js",
    "revision": "b6e4fb7c39a3511e3892079e2b9469eb"
  },
  {
    "url": "assets/js/17.e731f166.js",
    "revision": "1b2f08f80b8e298dfd372547cd1a8f9a"
  },
  {
    "url": "assets/js/18.3e3a438e.js",
    "revision": "53600620438beff6d9d9c055181dc348"
  },
  {
    "url": "assets/js/19.d380bc63.js",
    "revision": "1eae26067b6076d357f1703090bea118"
  },
  {
    "url": "assets/js/2.11f4cf6e.js",
    "revision": "e0e8bfb9d6cfc12713c01bbedb60819a"
  },
  {
    "url": "assets/js/20.0b552186.js",
    "revision": "ce8bf1b2f05c3d7b2af365316fd4fbf9"
  },
  {
    "url": "assets/js/21.93323ded.js",
    "revision": "f4cfcee0c0578f75dd48e7aba15f8dbe"
  },
  {
    "url": "assets/js/22.bbca1ba5.js",
    "revision": "3008a39b4eb033056c90752fbec2dae9"
  },
  {
    "url": "assets/js/23.015f249e.js",
    "revision": "4f002d1fd704d243f3757181f60349c8"
  },
  {
    "url": "assets/js/24.34113a3a.js",
    "revision": "9940e8f18c96f6df44794dc4e5062e55"
  },
  {
    "url": "assets/js/25.02417628.js",
    "revision": "34f5c103d0010a3c809504428de4f67c"
  },
  {
    "url": "assets/js/26.6b543233.js",
    "revision": "501849eae75bb212b602f753b58ab494"
  },
  {
    "url": "assets/js/27.8ee36f40.js",
    "revision": "8052db4056b2135a146ac0052c14de3b"
  },
  {
    "url": "assets/js/28.bdd0623a.js",
    "revision": "3d298ab10e89b06481deeb3cc6671346"
  },
  {
    "url": "assets/js/29.458d52e8.js",
    "revision": "04009c03d03d2b84484ea26426ff9de9"
  },
  {
    "url": "assets/js/3.5dc4b0f0.js",
    "revision": "1426bc32c246eb1c12cf606f834544ab"
  },
  {
    "url": "assets/js/30.6be71b56.js",
    "revision": "061774aed53a2e68da494d46300ca58a"
  },
  {
    "url": "assets/js/31.37eba154.js",
    "revision": "987e73e6ec5b6f7033e561d40757220d"
  },
  {
    "url": "assets/js/32.8deb7b2a.js",
    "revision": "d1d0506fb4055752e77623f6e1181967"
  },
  {
    "url": "assets/js/33.55604d27.js",
    "revision": "e10e2bdfc09b2ea7e5b9bc2d3738ef6c"
  },
  {
    "url": "assets/js/34.fd8c108d.js",
    "revision": "4ae1328bfd922920435f0bf52520eb1b"
  },
  {
    "url": "assets/js/35.7016d327.js",
    "revision": "e78aa52b6edad66a1efd76814aa0da1b"
  },
  {
    "url": "assets/js/36.0e5da1a0.js",
    "revision": "bbe10c70750e0ae57734fd9b73f4d0bc"
  },
  {
    "url": "assets/js/37.ca22cf3d.js",
    "revision": "f7fd2b3a9cc2eef49ad51626f03930c0"
  },
  {
    "url": "assets/js/38.6a262234.js",
    "revision": "f505273cafffc206b94284cf5dcd4a17"
  },
  {
    "url": "assets/js/39.219626ab.js",
    "revision": "d2289bcb5f786557f6822a868733069b"
  },
  {
    "url": "assets/js/4.16224466.js",
    "revision": "bd37f1750711ed99cad8502097db5d23"
  },
  {
    "url": "assets/js/40.66c891d3.js",
    "revision": "d4f51d75918d7608897f86a983424a73"
  },
  {
    "url": "assets/js/41.fe57cf27.js",
    "revision": "cadafe90dff85afef5e828d69b260940"
  },
  {
    "url": "assets/js/42.3a7a68cd.js",
    "revision": "25f6e0c56520a9b4eeca670e29a51443"
  },
  {
    "url": "assets/js/43.d9930853.js",
    "revision": "8004c4f7b77ffbe74639801e8a36155d"
  },
  {
    "url": "assets/js/44.850fa319.js",
    "revision": "053c7c14137883dcb09a4d1aa1a07557"
  },
  {
    "url": "assets/js/45.d81a0e32.js",
    "revision": "f1e2051567b2205d098bc7a3bbe65739"
  },
  {
    "url": "assets/js/46.1a585d9a.js",
    "revision": "d31a42663618d661330739feb9a0358f"
  },
  {
    "url": "assets/js/47.9eb68e97.js",
    "revision": "62b0342d6808b224e2d44e301bf3e687"
  },
  {
    "url": "assets/js/48.bc31fad7.js",
    "revision": "2e4c8339e6a111cd3804293175c8f530"
  },
  {
    "url": "assets/js/5.48628086.js",
    "revision": "48769b79722f1da6269b93bc4e5bcf62"
  },
  {
    "url": "assets/js/6.431625e2.js",
    "revision": "3f764bd612e296e3f964c9dea27fed7c"
  },
  {
    "url": "assets/js/7.b3e74598.js",
    "revision": "4d079d692e4b40073c28b5f6b5baabc4"
  },
  {
    "url": "assets/js/8.d704a77c.js",
    "revision": "e5d5ee9e68187c8acaf46e7d462ae0e0"
  },
  {
    "url": "assets/js/9.f234ba67.js",
    "revision": "b44f8a00a3296bb4717d49225024434d"
  },
  {
    "url": "assets/js/app.8c687fbd.js",
    "revision": "75028335666a5e4fca3d525b9043ba1d"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "4154ca83c3ab25799f213bd936aad541"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "fb24b9f0889bb85d72d6823008367df1"
  },
  {
    "url": "category/index.html",
    "revision": "1932a021bc4ffb1652e849e40033f3f0"
  },
  {
    "url": "category/learn/index.html",
    "revision": "4033a95d46f0a5e3d14ab40b47a5893b"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "8b7b3736a708a85e5523bbe0628f0a6e"
  },
  {
    "url": "category/summary/index.html",
    "revision": "2e3c593d065a6f886bf494890926196f"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "f614fc1a171ea363f3f4916ab9e24b81"
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
    "revision": "e1241178702016a3427a736b84b7055e"
  },
  {
    "url": "lib/index.html",
    "revision": "fef779de1b032b7e3555269183876020"
  },
  {
    "url": "lib/m-less.html",
    "revision": "643ba74bb240b308564cab4846d18724"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "3345b5c3cfb6e232ae132ff925f7e98c"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "7306df60e5685eb0490d4772b9de8a34"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "28b86b21d191a467bf75f417796ec47a"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "f0362d7c0b098df48434fddde331103e"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "4ab01e3678092e4f486821e06b060b74"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "2f46d410ba82d003311980e41ddd5dc9"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "29b58c163bf2ffca7874e5c83ab3cd41"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "df328b6a243412a9b8866fc83204c8ba"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "cba1ec8f292d339308a85c30ebb1ebd3"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "82a36dfc5d8c5a84862b34da43189361"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "5cd3abe68c92610c9a62b66823efc45c"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "cbda2ebc28633bc6bffecfa44a1ae8b7"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "5f7db0243bf04de4f5fd237c6e944e24"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "383cb8d071ff7e855c5a1fd631959d17"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "88a0ada303401a9f9c64d8fcdf8c4a48"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "b6dee501f0cfaf3daa74b4d4dae1d26a"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "e39ee3a19a654ba35d3ae545a17b87b3"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "dfd93ae9887a50877b52a645e8520e90"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "c38f97263a60c6cb8821389869657299"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "b4ec2b2c9126f9daba035ed5a4aee0cb"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "5e622dd5af144fb39e6615f7a2f62ad1"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "6f56d56e6462a9c85bd4c2b542d5668d"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "62eba694afcaddabd04cdc2d3f49adf8"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "a0198663cbbce904c9f5f9cda795858a"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "5e7212faf5578ff53bb92dfc9094810c"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "72cdfdabd8e5bb3119f1a999d0d390bf"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "81a4cce90fb1656398b8da643d7e095a"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "58e1cca4bd4f49c017df2340283ceaab"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "f9d5d8aa42e36773401808cd7bfbdbad"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "e56be6c79db300253c033d5d1671d4a7"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "1a6e7068bc6006eeb5aca4badfc3efb2"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "260e6136a28e02c059358828361a0078"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "f77338ff92af512d8c4a724002679a87"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "4fd0b03fe5cf1e8b2ee8a821779f964a"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "87edfc34c7fe9f16be0c0f37b45cb2c5"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "2e565343d92566f76a9051490481afdf"
  },
  {
    "url": "posts/index.html",
    "revision": "7c11729fdbe904d381d19efa647a91fb"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "5432ec6627bc25ab44c37fa946461793"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "e55844f7b2a515861af2138914621746"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "7c84f4a441b01d2269eb8b6ee3d43a4b"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "33580be5ecd43ce406d51354e81c8464"
  },
  {
    "url": "tag/css/index.html",
    "revision": "221725ef6263be11b18752d7533b96ef"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "323deaca2fad694fb9e6a96d6702426e"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "9e7694aed1df5bd66e327dfbbefdc1dd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b35b7bbc6c54fc5e22a340c2e87f6054"
  },
  {
    "url": "tag/index.html",
    "revision": "0a0d83a653ced0467b77736dbc8c3a47"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9306c5ab2cc9b2179975902371049842"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e6dda03f1337b69f6282320231788839"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "550bdab4eaef3abf8fdf532e8f34816e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "24ae032fccc65fb91fdcd6e8bcfe866d"
  },
  {
    "url": "tag/less/index.html",
    "revision": "a9513f551c162ce477a0aaed5fd0b201"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "b1a56acbb07d1515f32f28175e606b65"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "4f50fd9ecc6c412a6487b2821ae55c37"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "cc0c730db427d0ecd1c9cbf26c2eeb3d"
  },
  {
    "url": "tag/php/index.html",
    "revision": "322e9c91616f4fd06f17dc49da563d4b"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "9da9f8c73c762f467e2394f789ae1da9"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "9373d157fd4d06022c39d505fe77f5c1"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "99e8f1cbd51009e9e7becb581e39dfef"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "1d06b70c22afaa430b5ef362ccdc3ee1"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "ee56e3c885d29f33710d034191cb4354"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e5f6a7842a46cb9785442920a0741320"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3a02e92e33abe7d26f09ee03fbd666d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
