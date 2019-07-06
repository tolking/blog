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
    "revision": "0df0822c8f4db4ddb7fb411786f9c36b"
  },
  {
    "url": "about/index.html",
    "revision": "631e6946b39ef04112236d3d7371993b"
  },
  {
    "url": "assets/css/0.styles.e78db133.css",
    "revision": "87e172fc3c6ac70dfc9e92cdb04d09fc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1254cfee.js",
    "revision": "bd3e3473ccc5969c1a259f49d925a9d2"
  },
  {
    "url": "assets/js/11.41f53739.js",
    "revision": "e4d8b5feb153319ea15fc666ddd281d1"
  },
  {
    "url": "assets/js/12.2439eb47.js",
    "revision": "8c56883df57b9b3ad6f3ce457acf34d4"
  },
  {
    "url": "assets/js/13.4dafc197.js",
    "revision": "f3250da1cb932117f31e44aa696fe035"
  },
  {
    "url": "assets/js/14.68d7ae5b.js",
    "revision": "8fb33adc84192b1ceb7338bd9ffb6963"
  },
  {
    "url": "assets/js/15.1c6eb5d1.js",
    "revision": "30ef99333a06263ff0dc4f77d42680dc"
  },
  {
    "url": "assets/js/16.534299d5.js",
    "revision": "49454cd5585f40277f02da843f6e9f9a"
  },
  {
    "url": "assets/js/17.a87db25e.js",
    "revision": "03f50ce59f407fe6190de91a286ec7ce"
  },
  {
    "url": "assets/js/18.a6dce458.js",
    "revision": "05418db38984a195f741bb16d5337808"
  },
  {
    "url": "assets/js/19.3fcc2c67.js",
    "revision": "4f1d0f61296d1c4c5827ac64bcd085da"
  },
  {
    "url": "assets/js/2.3c904e98.js",
    "revision": "0a5fb54ce9a7ea78643cc572216387ed"
  },
  {
    "url": "assets/js/20.2a2f0eff.js",
    "revision": "f5485769758f31abb9e6e0fdd4fc6f47"
  },
  {
    "url": "assets/js/21.8ff60038.js",
    "revision": "cbec095261922344da0d8540bef9f072"
  },
  {
    "url": "assets/js/22.19787151.js",
    "revision": "80a57153ee1926aad3e50d0c694dcacc"
  },
  {
    "url": "assets/js/23.bc662e79.js",
    "revision": "98ca45f139b78a9836fb0deac26523a2"
  },
  {
    "url": "assets/js/24.8acb2541.js",
    "revision": "3913f338957e4b01e864b659b5c5ab04"
  },
  {
    "url": "assets/js/25.d9d4f946.js",
    "revision": "c5b8888ed6eb8916521eac7844f7a5f8"
  },
  {
    "url": "assets/js/26.d78feb36.js",
    "revision": "49902efe251bcfda5db2148a7298b7c5"
  },
  {
    "url": "assets/js/27.360d7a0c.js",
    "revision": "ecfdfb3cf03ac42a255fd1c6ae496f32"
  },
  {
    "url": "assets/js/28.2b1dac38.js",
    "revision": "a323956a02960ba6cda205e3d3b28853"
  },
  {
    "url": "assets/js/29.c8807687.js",
    "revision": "94ff2cec28142dd501228c8c505e8593"
  },
  {
    "url": "assets/js/3.1108c2bc.js",
    "revision": "6fe797f089b1107a5c6b0310c8642ecb"
  },
  {
    "url": "assets/js/30.65d07556.js",
    "revision": "4b77eccb01822fbb811c1101d8f6c41a"
  },
  {
    "url": "assets/js/31.455b87ff.js",
    "revision": "161ef00629fa7841c3dca57fead1b89e"
  },
  {
    "url": "assets/js/32.78c286a2.js",
    "revision": "c93d8e3dc29c92b3008b8b1e13544444"
  },
  {
    "url": "assets/js/33.82c28a65.js",
    "revision": "368900b724b1bbe9ebcf0c2bf79171f1"
  },
  {
    "url": "assets/js/34.aa049e56.js",
    "revision": "a8071792d3b97a9aac821547cacf8f9a"
  },
  {
    "url": "assets/js/35.4ce8857b.js",
    "revision": "02d54066f392810c4b5732a5c5835ff9"
  },
  {
    "url": "assets/js/36.f6661210.js",
    "revision": "5e2c54c8a6ecfc137699c46ca39731ac"
  },
  {
    "url": "assets/js/37.a488d1b3.js",
    "revision": "ee5ac9b02eb5b54ba2c9813283688bc2"
  },
  {
    "url": "assets/js/38.de990932.js",
    "revision": "c02331f02d56ae8e549a4b8a457c64d1"
  },
  {
    "url": "assets/js/39.0eaf9fbc.js",
    "revision": "fdd890bf87a9e4792144352617ccd5ad"
  },
  {
    "url": "assets/js/4.df943008.js",
    "revision": "a19e69acf86a31a8f82fce34ce12223c"
  },
  {
    "url": "assets/js/40.66761970.js",
    "revision": "5d9751b83751d2c1364b971cd4829d2d"
  },
  {
    "url": "assets/js/41.3c76981f.js",
    "revision": "bae0a1fd8ba960b13692a2ed57485f81"
  },
  {
    "url": "assets/js/42.1e343f02.js",
    "revision": "3e208609c8d5047e7abefbcaca159f0e"
  },
  {
    "url": "assets/js/43.8d6e1c1d.js",
    "revision": "f0e1aaf6d6b749fe9144557e1b220acc"
  },
  {
    "url": "assets/js/44.70dee80f.js",
    "revision": "e6cf292f2147fed7368deb3047950289"
  },
  {
    "url": "assets/js/45.06f92f31.js",
    "revision": "fbb7ac6e8692f385fda2be374a7b787a"
  },
  {
    "url": "assets/js/46.94efdb1b.js",
    "revision": "7e61aa4544b44e9b864630f371f845bf"
  },
  {
    "url": "assets/js/47.d34599ee.js",
    "revision": "98e9dbb216660839a25c47a144db3ab3"
  },
  {
    "url": "assets/js/48.925044c7.js",
    "revision": "2e4c8339e6a111cd3804293175c8f530"
  },
  {
    "url": "assets/js/5.94db828c.js",
    "revision": "fc880a511a07da4e5c6c409f4e4c6b26"
  },
  {
    "url": "assets/js/6.782d0527.js",
    "revision": "02afccc6c1227db128cbfa41cf4095f6"
  },
  {
    "url": "assets/js/7.d4c3855b.js",
    "revision": "334c50cf376e7433a50a987e29121a2b"
  },
  {
    "url": "assets/js/8.4c02bd05.js",
    "revision": "793131efd91752b83bb6a20b34daa762"
  },
  {
    "url": "assets/js/9.9b1f78f6.js",
    "revision": "b44f8a00a3296bb4717d49225024434d"
  },
  {
    "url": "assets/js/app.a1d02410.js",
    "revision": "d5bc9274f45598ab35d60f611d1bbd48"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "9ded419b174d8c49ca3b50eeacefa6b6"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "19e3f9324c3f87abb0cdb3403b75e8a6"
  },
  {
    "url": "category/index.html",
    "revision": "60c10c3f3c2cd22d58860763de5bcdc2"
  },
  {
    "url": "category/learn/index.html",
    "revision": "2659dfb0e211f6276e31009c83adf338"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "5092e83232660b503c8cc73bf428d7e2"
  },
  {
    "url": "category/summary/index.html",
    "revision": "842db89066470b1273b43f97f0e2418c"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "74370404a0b8e1d4907c5bf4d787f48e"
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
    "revision": "4465da537cad89607278d697e3de9fcf"
  },
  {
    "url": "lib/index.html",
    "revision": "0f70731a3af7d0dc7d95f44f05df83e0"
  },
  {
    "url": "lib/m-less.html",
    "revision": "3efdd6a6eaa5d6d35277f77835e53045"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "3b3c39c0c11d8f28ddaac20fca88491a"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "cceb1c6d427e2f500e6e85d296e1f19b"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "d41fb4ed44c3aecab89559f14d82bda9"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "d8f86477de21f17c96cc8de96f7ef2da"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "d3fc4b270a1a67e0cb0842e5611f1328"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "ed3c2f2a76391f282829b1cd0e719262"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "7179a5e017b3904669dbe6fb116ec2dc"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "10d46f445fa277a411581d8a4ac6e8c2"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "8c29fd0c570f48b921866eb030ebb5a9"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "585a5aee5bf69804af81d81e2eb014fb"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "28a4297cf651cd2c623c0aab51bfbb71"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "443df350f2f9598595634c88dc3c99eb"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "cce88eef7f69cb68ebeedb5c89860457"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "9edff8786e5ee3c2e1fcf7cb1125b6e8"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "29e9e471de7f05b2d80d055e6acff4e0"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "0907c3c2f4c3d5d50ece3967451b55f8"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "86ede95f39cb3a3b1d7605bf038d6bd7"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "7acb83dac6286a9d1c92cf479609211a"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "1e3e2eab67c6459e5616fbe4b6a0ab9a"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "7ec4372665dc769479854dca9f631741"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "7631522ce0701fefabf93a6eb85919f7"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "1c30194304195570acfcf080ece4dcbc"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "c6ae1f46fb451374b692fa6168bc46b0"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "d8ce98cd4172d9ccc44475bfc8516c38"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "600d9c8941a9816753c52006a27fcc10"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "90141b5ba5476840343e9e0255782272"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "9b45b3f157a115e222fbb5a084561fa6"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "3446dd5956b3ae9b5ba8a1fcc5a735db"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "58ba89a84facaf1e7d49dfb966fa845e"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "e63f8202b290e46483ebc099435f83a8"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "e22f2aa31d701ed3e1826838a106c2f9"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "403b041e5613799b20e614ca5f2480a3"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "2b41c214f2cb863dfffa6a3d9001ccce"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "d63663c26cee46b9937f2a44b33fed38"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "b23f72817958c4f5b9646b29e6d2ffc1"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "fc471bdbb0dcd366d9bcc23e6f78fe6e"
  },
  {
    "url": "posts/index.html",
    "revision": "7972c1c917890457b69a0a47f1b5782c"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "c47c7131bb099eee88e01e41d50740d1"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "66ded9a1c479a847ed86a2e414b11165"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "722e73b7d17b1d19b4f305cbc37752dc"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "c5239ce3997d395083abae121fe1f36b"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d719d800bb422f781df4715f8b5ed79c"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "a041a1fa85b17040407cef38e801bc41"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "a4039a60c8d7a57578dc3dc92d5f3e9a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e5c9e1805d8c198060ddb02fa051ff50"
  },
  {
    "url": "tag/index.html",
    "revision": "4998047fd4b510f04902b4d3597c6308"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "034716b77b77e666a1e3b13de621a714"
  },
  {
    "url": "tag/js/index.html",
    "revision": "82765ba011ff1b31c8b76b2427b716b6"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "84ed8569b23dfe5c9471ea72ec5a3915"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f2bc3d4c7b5f0921959b3f34e47d22dc"
  },
  {
    "url": "tag/less/index.html",
    "revision": "6c0c867d719995d5a0dedae330908447"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "42762dac30310b67ab9adc6b30b128fa"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "6cf11b0ddedd6c7c67b8eafc84d204e1"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "f84e098dac20b23e573d98262c21fb2b"
  },
  {
    "url": "tag/php/index.html",
    "revision": "eaafae57752f74c65eb806f39ad1adfa"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "37e92fde349e16b5c86124c876a2370c"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "9d5ee855e514768b8a62ce89c0f19935"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "6470a9463f7ead595bb921fcd57abc2a"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "1af3d39235fa0772cb502885c52182b0"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "9a655489ee6ea0d4b3f1dc54c0084aac"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f7357030dce5998b0d5840a3ed3b062f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6082393e386ece19bf76b28dcf9f75e4"
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
