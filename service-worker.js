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
    "revision": "3b59bba972e927489d120cc373d788b8"
  },
  {
    "url": "about/index.html",
    "revision": "2351683948a5c69a3fe1046921a4c22e"
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
    "url": "assets/js/app.76f10908.js",
    "revision": "1bc33bc1adb85f725ed8a0af613e08a7"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "c98bc22f0e2aa218e56a6d4b1da198c7"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "c69dffcdf257ad00d714b8394c91c021"
  },
  {
    "url": "category/index.html",
    "revision": "1adf1d12f49b9b869d984e2f4ec8a487"
  },
  {
    "url": "category/learn/index.html",
    "revision": "5c1f54ebec56b6d7683e3ffe2c02e2d3"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "d90aab7e408b3f3b2af20eb4476fc273"
  },
  {
    "url": "category/summary/index.html",
    "revision": "6ecc446e5e92d59c94f5ccc4c9fe1503"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "f70b0735cb1dcaed4b5c8e2a5bbcb591"
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
    "revision": "41a631d447d1c66b2443c1b298b2c291"
  },
  {
    "url": "lib/index.html",
    "revision": "6f91095efb92a7f1a5787962d5591e09"
  },
  {
    "url": "lib/m-less.html",
    "revision": "103502d0a941a927a02936546231d0e5"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "a5f8f778efc339fbd7f3ae9554372ccf"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "5d003e16310b536adaf9806a021148fa"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "4d7837fcdd724a651c66e7257a964c4a"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "c1698ca23f205d7426552cbb7534a79e"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "62dc505486beee1a035343c9da47727b"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "b7682b43741d3d7d1dbbff064901c915"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "83254efa86ebf52414e68259ce7d2403"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "02b0c9ec3d35c6d8a55e4bbdcf4b2af3"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "fdf9c7a8481789fbbb79035104b2b814"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "fb05ad592325925811ccb09a12fc74c8"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "325543717b9becc63a6aa4379f991961"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "e2fe4b701cabceee6e5fea55b34354d3"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "28041b007a92bbccb2fd18929c57d552"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "8ecd1294a5bafc0d9c9418e36e7bce8b"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "dc40564cf9cf7a8d1385d5a572fd657a"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "d4152996595b9fcaafc2d30540e34f39"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "3139d7369b47976c736776cca225642b"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "d06ef4827741829577ba6584b8e24a55"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "37af862f2dae998e73df646fb1885358"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "c0881d8dca2f07ae01e2db5bfc9cceaf"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "ca93b876174e702a3d10472e360865b5"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "f2e68957089c0c9d24f167c25906a997"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "1c943817591c919d341d652bb42a4783"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "4adac31e67d4acaa92853996e5d64cfb"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "fb2a1145e4b873dd6e74445f8f42e2ba"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "50937e281850b670c992cc88b598605b"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "e46574961ab87f77ef1fcbebaf66b371"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "451dff47f7999f2c7985daec89258dde"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "19e5f91d0ea51f65c760ca1de79ad32b"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "44f12343fb5026b862599b39fb8fb110"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "0939921867c0e96b39ec9bd32d4c8ccf"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "fbeab4f4df03095d2f3efd8e6432f7fa"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "752f9d78a7b78e066453c94211e2e9c5"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "5904171305be8917ba967d9af4f231d8"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "a18e1d46ee389145ebf079f2ebdcba11"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "4ca888c48b839851f4f940f940c74005"
  },
  {
    "url": "posts/index.html",
    "revision": "b0de2994dfbee062c05515b8ed6eb6d6"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "4782936ea4437baf2da5962ab62d0223"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "2cd8c81a20bd086a733db38f0b2a2ed2"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "a75367e50727e4f2f995628c33a36aae"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "290af34aeabbb56258460c73b081d808"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e935f1119afc1c0b5c5eff2ff25aca89"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "6e94913fe602d37a91295b0fc789a68f"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "572f53776e43516d4d6464d0746251f9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6e78cb455f3cb49f1560ccc3560d08ba"
  },
  {
    "url": "tag/index.html",
    "revision": "5879d880823c794eb78b32147eadb483"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e65f412adde5a6c9efc2c3f873912085"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a077f977564510b3693a60aeee89f012"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "0c4b897306fd8e0200c7c25009ae8999"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c06b9c6d71a93bb99076c208f3651cdb"
  },
  {
    "url": "tag/less/index.html",
    "revision": "51272ff991ea4a5a29f72134b403ddb4"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "22cd78f1c5dbed16645be8032aedfbff"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "5954d3c7cad79cdf4379bf2c955e3a68"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "81de2af48bd5ef9d40918f85961d3ddb"
  },
  {
    "url": "tag/php/index.html",
    "revision": "a758088cc594caddc7eb601ec4f03870"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "6e9d5e9f99fb4fc16c27f5108b5ea08b"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "95ae911f59747cf0e0ba683ca37fedb9"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "43c8b906a042f26973370c4123d72980"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "20e4406fe9a61c73acf0a4a21c77c340"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2b1e648f7ad72ca163c5ab4b8c2b05da"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "70f4af8a6886f27ed9092bcc80af4fac"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "864d7e75dc61375eb7a05adee42128f2"
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
