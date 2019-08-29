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
    "revision": "30bcd36531d014c894a20d06c4aa48b5"
  },
  {
    "url": "about/index.html",
    "revision": "4a3fd882cc3836cddc9e3442bebe87f9"
  },
  {
    "url": "assets/css/0.styles.e24c0174.css",
    "revision": "b279e1bac7b55bbb9dcf644b18606680"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f1984244.js",
    "revision": "a97cbd06c95e945526088bfdbd623fe5"
  },
  {
    "url": "assets/js/11.a1b33a42.js",
    "revision": "fcc56512de3035067b47126d1a7fc745"
  },
  {
    "url": "assets/js/12.799353fc.js",
    "revision": "eb0d27211745ac7a6e75386fd5c9fa9b"
  },
  {
    "url": "assets/js/13.b9e1e93f.js",
    "revision": "67b78a71d1d0d006c384fe5a13fb9676"
  },
  {
    "url": "assets/js/14.f22eace7.js",
    "revision": "6937046ad5a855f1d41e2f695064a9b3"
  },
  {
    "url": "assets/js/15.c06699ff.js",
    "revision": "8165e238a46591d7d259ffe6a7fa8dd0"
  },
  {
    "url": "assets/js/16.59222598.js",
    "revision": "306a3332d486e1e16c9b411462d112d5"
  },
  {
    "url": "assets/js/17.876bbe20.js",
    "revision": "57e20d2f11c6269bbbbe1ace26602de8"
  },
  {
    "url": "assets/js/18.b5f27be3.js",
    "revision": "af55b34ac5982d97f5dfc8a8e4ee6b0a"
  },
  {
    "url": "assets/js/19.7e22a5ae.js",
    "revision": "1487a5d386e5790c8e2da6979ba3590d"
  },
  {
    "url": "assets/js/2.ae2432a1.js",
    "revision": "dc609f8f16e8abd33c3e3b7ea6dc44d7"
  },
  {
    "url": "assets/js/20.1fbc6016.js",
    "revision": "18925104d9a6d3554f9711cdf5adc76b"
  },
  {
    "url": "assets/js/21.6352a69b.js",
    "revision": "1483f32f18762597aef3181b5574534a"
  },
  {
    "url": "assets/js/22.8b2e5b0f.js",
    "revision": "e1f59aff81bc213f0b5c463790d0e140"
  },
  {
    "url": "assets/js/23.f39adde0.js",
    "revision": "d9d9e975756e4b52f881cf64def0453b"
  },
  {
    "url": "assets/js/24.acf49911.js",
    "revision": "94033009e8a05920862bffc5b05b0dee"
  },
  {
    "url": "assets/js/25.f5638c5d.js",
    "revision": "56fc1ef69be05f0a9781bdb1e446e460"
  },
  {
    "url": "assets/js/26.35e706cd.js",
    "revision": "c79fcb2e50464ee7f233b1dd3d46cfb6"
  },
  {
    "url": "assets/js/27.478ad2c1.js",
    "revision": "d40443ea76aa994afff608012bd1c9eb"
  },
  {
    "url": "assets/js/28.7dda2d00.js",
    "revision": "90c11d5b7de6ceb558a9df114a54a293"
  },
  {
    "url": "assets/js/29.d852dd14.js",
    "revision": "e6eb4f8151c8ef868768c668b51fdb02"
  },
  {
    "url": "assets/js/3.bcffa016.js",
    "revision": "4433dea05ea57789e48c7e5744aae149"
  },
  {
    "url": "assets/js/30.76e2e7af.js",
    "revision": "213cadb31e8ea360840490802271467f"
  },
  {
    "url": "assets/js/31.769e59a3.js",
    "revision": "221c61c1a1a20a5d838dbde94a9cf36c"
  },
  {
    "url": "assets/js/32.2678f5e7.js",
    "revision": "c02eab87ae55a781f49f4265e4d7949b"
  },
  {
    "url": "assets/js/33.e4e384bc.js",
    "revision": "afcea755f56402a4a5fd0414b56fb072"
  },
  {
    "url": "assets/js/34.194da5a3.js",
    "revision": "2961bd8122b876be88641aabe0d62760"
  },
  {
    "url": "assets/js/35.618e8a6e.js",
    "revision": "cf1143b6be1d0ef8eb74cef1541d33e7"
  },
  {
    "url": "assets/js/36.21673da3.js",
    "revision": "ba015e4ecc48a4cda9e6a7226c922567"
  },
  {
    "url": "assets/js/37.ea4b1770.js",
    "revision": "fc67fee9870d46278aa95bd7e9e8f60b"
  },
  {
    "url": "assets/js/38.df328617.js",
    "revision": "f47e53fbc3bcf23922401f6437310f12"
  },
  {
    "url": "assets/js/39.dade4a3d.js",
    "revision": "933cf88bbf260a749b4ab0d9c9a6c1ad"
  },
  {
    "url": "assets/js/4.bc8c6647.js",
    "revision": "96bb69f0de0a6fc066d67fd63c3a38ca"
  },
  {
    "url": "assets/js/40.3f52b814.js",
    "revision": "ae4170ad0cff3298c9451a1089a8b72f"
  },
  {
    "url": "assets/js/41.ae655835.js",
    "revision": "6f793588cfa15c342b0315413406a5cc"
  },
  {
    "url": "assets/js/42.8ca56aff.js",
    "revision": "f284859160e578227e3c18e311fd4ecc"
  },
  {
    "url": "assets/js/43.299c720c.js",
    "revision": "2f708a93abd684392b65a2f8c3b18e81"
  },
  {
    "url": "assets/js/44.0c5e4b3f.js",
    "revision": "355e6063e37e214f3b6a97cfc8b3369e"
  },
  {
    "url": "assets/js/45.800c9486.js",
    "revision": "ea213b70276ebeaea9405db216f7e1ea"
  },
  {
    "url": "assets/js/46.c0a54c5e.js",
    "revision": "c301ac43e0851662a8fad98774d76449"
  },
  {
    "url": "assets/js/47.f593304c.js",
    "revision": "1c356f4c2a8a99103bd96e596986ab97"
  },
  {
    "url": "assets/js/48.d75fa3c4.js",
    "revision": "b9d973f0d30a75957d6171d7488f61b8"
  },
  {
    "url": "assets/js/49.d64913b1.js",
    "revision": "1d5e4b592915dd45b4cda08f08e6c460"
  },
  {
    "url": "assets/js/5.82a9a8fe.js",
    "revision": "ba0f859a185a22146a5f7b1a70121398"
  },
  {
    "url": "assets/js/50.2e789933.js",
    "revision": "6f5e011a429912094c7ff9159f046966"
  },
  {
    "url": "assets/js/51.07cdcaad.js",
    "revision": "e0e4563b694b50ea01549f7146f6a6e2"
  },
  {
    "url": "assets/js/52.c18153ac.js",
    "revision": "50ec242f5e230a391b59bc474df9b51b"
  },
  {
    "url": "assets/js/6.0426d647.js",
    "revision": "456f70167c032370540a2e5b94944aa3"
  },
  {
    "url": "assets/js/7.5c450536.js",
    "revision": "e4f2da1fa57d1186ba232c5332992493"
  },
  {
    "url": "assets/js/8.4a8b04f9.js",
    "revision": "4535a211d2e3b6ede1a9feb5ab9bb47b"
  },
  {
    "url": "assets/js/9.6831d400.js",
    "revision": "b37ce2abfb9395297ad117cf5e38c916"
  },
  {
    "url": "assets/js/app.22a1ffc7.js",
    "revision": "d915c1118388c4c1025a25cf8a96335e"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "17fc97ee14f8ec9efe5c4c6e52f0d3f7"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "f170edf8821d4527e030ffb54d541763"
  },
  {
    "url": "category/index.html",
    "revision": "2aefe6e4b4d5e6a290c4fe598075b197"
  },
  {
    "url": "category/learn/index.html",
    "revision": "02ca3feeda27fe82999f44960c54e81f"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "e01df18adad565a4c570ae189bad259c"
  },
  {
    "url": "category/summary/index.html",
    "revision": "ae27da1c4e07fd87efd8d043463902d8"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "b49614edec419c9496d42275a8fe257e"
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
    "revision": "be289649a43390663318d3fb30c6f563"
  },
  {
    "url": "lib/index.html",
    "revision": "b0702a6e48101d10b7537b97616742e6"
  },
  {
    "url": "lib/m-less.html",
    "revision": "890f841967d555fa517ddee690e89afc"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "2030c1c3eb02af74fa7fb43265799cdc"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "520d63fd6f711d5f3abd54620b53d89c"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "009d87ad7a8e80c8a1e8424ec9ea483e"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "f5021bf649593ba2465177bb03613285"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "0b47c330813fa260496f9fe6588d5de2"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "d4a83c65bcee079fb48dd0a5f1b85c1d"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "98aa16f10c70eda7d019db6885d87b0a"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "3d414b0fecc2ab824c711d30a305f29f"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "11707bafb0a449371514382864da236d"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "5c4f6edc26826444df2e340bb1a0cbe3"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "f990942179a3a64f2bab110f0fb98f83"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "4c473ce48d66dfd951ac4b14b457d1b1"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "10719251d68f4b6fce607a4633ce7181"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "62b9716379d101366b75e8938fbe7c48"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "84cce2153a213bc408e0c73c16cda42a"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "ccd0b27c8e12ddb37d0273b7dfa2e46a"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "b3af7c9a8aa5aaa73641f58541c1ea54"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "ca257c95eed4ae8074b7c2d57e4d8276"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "5f092a743e9b266787f1a7906ecafa51"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "f5dc2cd222028a34190c8c22088f5ba2"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "4cf568ffea5e529b1997e1b6d644be9e"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "12ba2186e0418ff4899db9383122eef7"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "71d2edf74b1bee0191b04cbf9afb90a3"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "153663c14211ea93739b345d1670f0a5"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "6ca48fc2143bd2387b89a39e856afc7f"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "74280f09336f94aa252cbaf75b1000f3"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "9e6a020790a6eb3d39c5ca56883ed787"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "028a0d56521f037c0c4382886a5cfc6c"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "d11d6d9dec909ff70107464c6bdb71e9"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "9f831ee8be4b5cd4f65d56cc513006be"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "84b43e068834d931aa6fca38706686df"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "837a6bea6c47278fded6c83fdb8aff3a"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "c7cda58cd604967fa567628f5af69bbb"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "bfee4fcf3b186e59c287a85e5ce1a740"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "42aed07377dd0b543b144d577bd6c2fe"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "579f88a6b5c0ed5506b20f8e93b89404"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "f6dcf1265164b2506d3d470fbb4e45cb"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "fb458f21707d89cc36d7a0fa720357b0"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "15607f16ab88ff9bd501ea103fd56b70"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "99d1307714395e43bc25eb142757fbd1"
  },
  {
    "url": "posts/index.html",
    "revision": "52477a48f7b4264029eb174eea1e7dfa"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "ae105bcc35c46bf5dc8c8ae77db3cd88"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "e72bb5f46f8653cfef11216677930126"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "fc29645756acab08186cf7d62fbde4c9"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "0558ad43ae924a46d9a5b67d76980ae6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a42989a4954d643e7758eaf5af6fc780"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "28b0f17172caa1d8308fe25410317d90"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "3029ab840fb6c734165ee96db1462bcb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6541b07b5447174b05e3525a03cf3cfc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4c04ca3b1088dc60c1c35001ed7ada4f"
  },
  {
    "url": "tag/index.html",
    "revision": "83f4aea7d22e066665ebe9722e32abf6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "252e209b75a6cec9c1b610efe1b506e8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b6efc5ce51adcbca7c1137671241f928"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "9e6667598a4a48c1817ab8e84f6cc283"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a03c2edf1fda0c6fc370639c50704a38"
  },
  {
    "url": "tag/less/index.html",
    "revision": "ee2344ebe20de67879055389d7fe53d3"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "a7a08ab4ac3c993865554a7092d49bfb"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "254a190b050785d24f8cc038078df344"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "72663a92d1d6ea6ef586cb5cac343745"
  },
  {
    "url": "tag/php/index.html",
    "revision": "bd2539821dc6fdbcaaa22f1b20931f7f"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "1b5f4133d7b5bf88a44bbb969a35b6f0"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "bfecb19f9fbaa0a0a415c28a9a7cb87b"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "4750393bb2a87747f768a713aa2a8de9"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "2ec336cee67a2d220e883fcf333ff8fd"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "021ed385a4f43d19969e1a2335c912ea"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ce48b9acd36a1d1a74371b4199f20640"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "462e7f1a5c58135774230971b021a816"
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
