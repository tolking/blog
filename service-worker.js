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
    "revision": "7e509ff427ea369044d3065d0f9c7419"
  },
  {
    "url": "about/index.html",
    "revision": "21491a1cdf28c141613ba9b80a7b27ef"
  },
  {
    "url": "assets/css/0.styles.5697c80e.css",
    "revision": "c418d17dc89352ba566ced4b5d4571a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4d38c535.js",
    "revision": "556205879ce9d4b6d5f4a1e87003e6b7"
  },
  {
    "url": "assets/js/11.4466d4c6.js",
    "revision": "767f3526d81b7a25a5d568784b0e7f92"
  },
  {
    "url": "assets/js/12.76fe6024.js",
    "revision": "6f5dd57be2fa7407a15c207a5effd775"
  },
  {
    "url": "assets/js/13.4cbdb392.js",
    "revision": "3c4670b955a8364d4d796fbbdaa01a86"
  },
  {
    "url": "assets/js/14.d8eef152.js",
    "revision": "f1e4f9c0f0f25b0a6c8a8d9a21e1709b"
  },
  {
    "url": "assets/js/15.cacefc8f.js",
    "revision": "293725fe4ecbfee49d09de4b8447ff79"
  },
  {
    "url": "assets/js/16.eb377fba.js",
    "revision": "2ec3531d879eedeee4faf4885c1dd8c1"
  },
  {
    "url": "assets/js/17.5626322c.js",
    "revision": "04143a13ee97297649faedeee860ff82"
  },
  {
    "url": "assets/js/18.ac43213e.js",
    "revision": "d524cb9737f1cff892e3bfd595ac9a60"
  },
  {
    "url": "assets/js/19.7646591f.js",
    "revision": "2cf573ab3a8a486001c2c423e1ee0cbe"
  },
  {
    "url": "assets/js/2.ebe5f01f.js",
    "revision": "38217f76d6d42cbb9cdb8b6f8d2a3201"
  },
  {
    "url": "assets/js/20.cc880e9d.js",
    "revision": "30105814a6799d06dbf3148daf8a86a2"
  },
  {
    "url": "assets/js/21.6719d434.js",
    "revision": "bb285e2549878c60bc41d4615af3175b"
  },
  {
    "url": "assets/js/22.5ccbb491.js",
    "revision": "b73e755818db7a88150217844005d24b"
  },
  {
    "url": "assets/js/23.b49d9799.js",
    "revision": "3900a01e0401f6ee23b40705e29b0a36"
  },
  {
    "url": "assets/js/24.5c017ba6.js",
    "revision": "b931d6dc4c38887c44627e6923a2763a"
  },
  {
    "url": "assets/js/25.a6b1f2ed.js",
    "revision": "87a5aee0e1f4bbb178008b8918235ce1"
  },
  {
    "url": "assets/js/26.36b97b43.js",
    "revision": "dee6b475bf06ddec45bb1132a3f896d6"
  },
  {
    "url": "assets/js/27.d0d8b9ab.js",
    "revision": "01607d252edb6624494ba98b9af2ee0e"
  },
  {
    "url": "assets/js/28.bbc46300.js",
    "revision": "c20d8ae3486f5814b3e140cf49cc8a18"
  },
  {
    "url": "assets/js/29.524d2f67.js",
    "revision": "f850609a47febb8764cac55008214152"
  },
  {
    "url": "assets/js/3.76864340.js",
    "revision": "9ded727cf4d90192f337b83ab0b46ad3"
  },
  {
    "url": "assets/js/30.9a372fe5.js",
    "revision": "8bb09759fbf2d44cb72ec707794440c0"
  },
  {
    "url": "assets/js/31.62948131.js",
    "revision": "d1febd31b128fe57c117b817e67a4edd"
  },
  {
    "url": "assets/js/32.de74d4e1.js",
    "revision": "8b6de0a501cf280ab5a448341d764bde"
  },
  {
    "url": "assets/js/33.3053e3e4.js",
    "revision": "db22eb3100fece81d883d030b1eab6f2"
  },
  {
    "url": "assets/js/34.c53a8d4b.js",
    "revision": "d1fefdd2f0f344bc97727c75c6b0d2d5"
  },
  {
    "url": "assets/js/35.6fcf2c83.js",
    "revision": "6a8860670c3f72ca550da6c237e9584d"
  },
  {
    "url": "assets/js/36.7939ed0a.js",
    "revision": "a02a85c0a36e766b95ef9f98da1b28af"
  },
  {
    "url": "assets/js/37.a680c186.js",
    "revision": "afa7f1fb09a0990d4b68f09ad849fbf0"
  },
  {
    "url": "assets/js/38.fed5e659.js",
    "revision": "1aa301c481e4245960fc692806d2239b"
  },
  {
    "url": "assets/js/39.374c0100.js",
    "revision": "24859ce267782e74dc95043cf0db5f90"
  },
  {
    "url": "assets/js/4.79a94962.js",
    "revision": "0a793494f16505b9157bcefad416fdf0"
  },
  {
    "url": "assets/js/40.0b5ee3fa.js",
    "revision": "0568255656baba03da8e65575c36ba1c"
  },
  {
    "url": "assets/js/41.ad722842.js",
    "revision": "340f9a95ec4b7082d11ef5c4ea47cda3"
  },
  {
    "url": "assets/js/42.a05d7de6.js",
    "revision": "602c6ec69177c898502a4f4a132ae2bf"
  },
  {
    "url": "assets/js/43.e465f426.js",
    "revision": "007d5ba65f0fffc42d27421e05eef41e"
  },
  {
    "url": "assets/js/44.f26e7117.js",
    "revision": "ea6284230ba0b74fb9c06c86a8ced504"
  },
  {
    "url": "assets/js/45.e4217ecb.js",
    "revision": "4cecd020d736fe6526b400a8c4d9b6ab"
  },
  {
    "url": "assets/js/46.81bb9da7.js",
    "revision": "e1700fc3358fbc461cf73c23103ed7c1"
  },
  {
    "url": "assets/js/47.41e2c2f5.js",
    "revision": "dfc5caff701704a9696f48a3c9f4440b"
  },
  {
    "url": "assets/js/48.80326838.js",
    "revision": "fd0dd5968cbf7c3593a943566caa513e"
  },
  {
    "url": "assets/js/49.6949b811.js",
    "revision": "f1c28f6c13e8374b5767661cbcc9f3b1"
  },
  {
    "url": "assets/js/5.beee5499.js",
    "revision": "6d13618020ac64caef15b922a52190ee"
  },
  {
    "url": "assets/js/50.5061a5dd.js",
    "revision": "ebff4d85b3e859ce2caebdbd2f8aba49"
  },
  {
    "url": "assets/js/6.40e31dad.js",
    "revision": "2f62da82a606299df33250e06867b3ff"
  },
  {
    "url": "assets/js/7.3b490f20.js",
    "revision": "2f8e04e941d27a6c8a01c29ffc5cd27a"
  },
  {
    "url": "assets/js/8.0b74b80f.js",
    "revision": "6384365707ae5644f90bb026bb54bca8"
  },
  {
    "url": "assets/js/9.26805792.js",
    "revision": "2120e480e23e2430366194356761da7a"
  },
  {
    "url": "assets/js/app.5e88b9c0.js",
    "revision": "fc2c1bf0686bafcabcb38b9331f82e8b"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "0b73cfbdd3b0cb498d9a32b928ccc6e9"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "3f44e29507535098c3ac7a48bc8bf1c0"
  },
  {
    "url": "category/index.html",
    "revision": "88b5e3af66a6e73b822d2b63903da6fa"
  },
  {
    "url": "category/learn/index.html",
    "revision": "a46c6901cf46ffa8599fab06e9ad9317"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "918379ac75a252c3e75d0420c6b67042"
  },
  {
    "url": "category/summary/index.html",
    "revision": "f7025d7165f0d92d8148bd2b34eef1f2"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "745f9b5d3dc7ca41f5285435e63b8281"
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
    "revision": "abff8bd0fca6acc6ad014da1350af00b"
  },
  {
    "url": "lib/index.html",
    "revision": "433f6abacb15e977f2f0cb13f16c8db1"
  },
  {
    "url": "lib/m-less.html",
    "revision": "75880efd231bd51356621a51d34f21ea"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "c223997535150057e0453db89ac3f783"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "df35c3f4b8d8bc95055baae3664b6d21"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "a7992f2c2fbf8ff58855bb10f16286f8"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "b5ff0974d138312500f749df8044f5af"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "6cbd62b00c2e6adc44ba1101de51c563"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "88f3892b108d264a0b0a5e671ca06039"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "e6ce2aed189449683527905b74abb64b"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "6907b9a912bb8990851392b86c9dfc27"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "adbfa5be61e212528fa0ce2f131973bb"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "2ecf88b5380256fe51a934ce6ccef578"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "1902f8c469e0bd716f42229dbc08bd4e"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "04372b7fe3d288631ac3149d14d70b88"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "e71c63f21241266e6dec79359563a6c7"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "a2b9d26c8ffc25b9d051fa9764e67550"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "e27fae87da5cbb4a577acd9e01c6c35d"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "ec25c0351deb0ed23c60d5f6b787bef6"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "724536e88ed0c47d0c95780e6fc37d59"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "f2fea9ed7d59b6561baa6c0c75be9fe8"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "f3326106e2a7b5d85b4c3afc7d512550"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "e191c852c46834ac9c4a6a1e381fca2a"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "efb0ebf6cc2e9a19d3475bbe581a0f93"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "9a0d05a6d280082731499e5a4b3af7cf"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "d8db1cc5e22ac659715f903522db6ac8"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "ca99df1cf95c5ede22ba21b57fad646b"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "42a3460b47f5bad29d0d24b6dc311e85"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "a152872e20ee248fb0f8abd7be0edbd5"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "67f1cb9a3ebe54af11e4bfa50817aaef"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "d339e63ead37199bfb4d0504b499a94f"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "3f77496a22d96eebf4c938f010129c3c"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "1d03c89fa4ae50f7e8934228ad61af2b"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "057e6fc387b2972180cf7347018f11e2"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "545fa38d925b1a5a67457c6e65073cf0"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "c08e9663210240534a4f4db7bb32bbed"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "e997a78ef3866ef521a905ccdd8818c4"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "9adc6ef3170be87a020b0569284a1c34"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "6ced3801ae2dad9b82619a899b399542"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "a34c48cd121f357efb2ecdd2070bb67d"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "791285feeb688353712d622d4f83bc73"
  },
  {
    "url": "posts/index.html",
    "revision": "36c609e06e186d9ddab92796276ea8f4"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "e983baa35461c07824b3093c760ac4cd"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "7453d7fe2a597a3d0879f1939c321cb0"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "a6dbb7364dc9b1ecf06422975d276c7e"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "cef7561421ccb62b98b538c31d75b952"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b2d249ab11a5ad9393ac05f2c51132de"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "9b019be34efe8d1c2ab856932ccad4a4"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "10152eee83601da304a22f847d8ae28a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9a320aeb3db15f11e4f96756245d36a9"
  },
  {
    "url": "tag/index.html",
    "revision": "bfbef239be1c439290181565f6eacfb1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "75dc544d1b9a7c6bcd405f239d9e9ecb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8e73d72e12c9f1a78b5f17c9cc1906c7"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "60c87f4f5e3b1ba5e242123a148a0f59"
  },
  {
    "url": "tag/json/index.html",
    "revision": "19aa25368b874d8728c2cbab1f573694"
  },
  {
    "url": "tag/less/index.html",
    "revision": "154a187c711af53ea932ebacbe5c89f5"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "2ca9de6216f36ad133b92aa9aed36687"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "2d294ef99afcda5ace3dca0ec6eb5631"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "6572006dc7c06605a02bad1da4aaf896"
  },
  {
    "url": "tag/php/index.html",
    "revision": "96becc314a757ebb21137dd38dbd9876"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "af73c42c7d884795cc3a5acecb383211"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "bf9e742eebc5fa0e22440f6fb9a0d4ea"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "74e52f96fcfd560735781c8938b9df53"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "5c860fef082ac2bc25ffc761ec6871d2"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "65615ae8b681e06ff220a3a87cd0c9b2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c53867d068f81c4b05589c16fc8d215c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fa0c47377a7e424e9b65dab681d320bc"
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
