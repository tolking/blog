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
    "revision": "84bdd8c7a17cea1e91c99d4917730ab4"
  },
  {
    "url": "about/index.html",
    "revision": "ecb6f735273e9045366884f8cb22286d"
  },
  {
    "url": "assets/css/0.styles.26a1de01.css",
    "revision": "4c1464893ef31c5b20b21a811f5f87d6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fae5b307.js",
    "revision": "461d4c970b03509ba0f0996a13a5bcf5"
  },
  {
    "url": "assets/js/11.ad9c51d0.js",
    "revision": "e2c85128ba237e7c9c7835410ced51f3"
  },
  {
    "url": "assets/js/12.d5cffe1c.js",
    "revision": "b2f5c97844ce21073b4887455a4ecd41"
  },
  {
    "url": "assets/js/13.5205dc0c.js",
    "revision": "7b90413c26a282a1f23cdaed81af29af"
  },
  {
    "url": "assets/js/14.67fa78e8.js",
    "revision": "cbb266e367735c9e29d0ac4c2f76411b"
  },
  {
    "url": "assets/js/15.f8c75b45.js",
    "revision": "d25570958c41dbb261dca78cce50c024"
  },
  {
    "url": "assets/js/16.abae5cb4.js",
    "revision": "196959120f0d1c8b5cc2242c7e0e30e3"
  },
  {
    "url": "assets/js/17.9b4dbcaf.js",
    "revision": "090ead23ec491f021ecf55e05b42fe3a"
  },
  {
    "url": "assets/js/18.d55ab5e5.js",
    "revision": "f836e201eb7e71d199714923582036e4"
  },
  {
    "url": "assets/js/19.f95b2b16.js",
    "revision": "2c449cecccfa3c0f4547d81dd36a5880"
  },
  {
    "url": "assets/js/2.2de62698.js",
    "revision": "9b5665c823208b11b2cd2fe8a60a027a"
  },
  {
    "url": "assets/js/20.83f9135d.js",
    "revision": "b397fdaf8a7f6b66722f402339d1f617"
  },
  {
    "url": "assets/js/21.fc74713f.js",
    "revision": "7538ca5924a8a5ccf83eb25bbe837f5f"
  },
  {
    "url": "assets/js/22.bd74b231.js",
    "revision": "6e947c84df66e5df248f5bc935fea095"
  },
  {
    "url": "assets/js/23.9a3f60b2.js",
    "revision": "9859e946eadd168f9645aa7eec2b872b"
  },
  {
    "url": "assets/js/24.b478e62a.js",
    "revision": "5115245c9a8fab5f140fa987202025d2"
  },
  {
    "url": "assets/js/25.2c111866.js",
    "revision": "aa45fa1566d0be988ecf77d2f62d9833"
  },
  {
    "url": "assets/js/26.2877c62d.js",
    "revision": "596501f35a7e13dc4ae2a36cae0a4af1"
  },
  {
    "url": "assets/js/27.5709630c.js",
    "revision": "66f6485d2503056a2310427ca35243c0"
  },
  {
    "url": "assets/js/28.fa2ac401.js",
    "revision": "cbbaea5de57cd63a39dc3b9f3594ba42"
  },
  {
    "url": "assets/js/29.6a52bd92.js",
    "revision": "1884ddc78459d39e02031348fb0e7609"
  },
  {
    "url": "assets/js/3.b03ed75d.js",
    "revision": "5d2eed72a8e3dc60cbf59fe9a25ef118"
  },
  {
    "url": "assets/js/30.c403ec4a.js",
    "revision": "58e2b1fcfe9fb4169785d4273c17ef9f"
  },
  {
    "url": "assets/js/31.c5a58fd3.js",
    "revision": "12ff779ad28e40d1bad1a65608a0c435"
  },
  {
    "url": "assets/js/32.47d3e861.js",
    "revision": "5579563546c788f7eeda4a6617717ab9"
  },
  {
    "url": "assets/js/33.28153341.js",
    "revision": "752d9f3fece9e0b2d8bb29e5ddc9219d"
  },
  {
    "url": "assets/js/34.4dc2b1e3.js",
    "revision": "d42097e3ed6cf3ed0b4a560d9f66f5d5"
  },
  {
    "url": "assets/js/35.dd9c1b79.js",
    "revision": "29f90bd9cba8d2eb667e23e23b34069c"
  },
  {
    "url": "assets/js/36.88baca3e.js",
    "revision": "dac2c188cbc8d19b38390d017340c0f3"
  },
  {
    "url": "assets/js/37.2c42f459.js",
    "revision": "4ecf156dd24f76f5da6df2a688dfcd92"
  },
  {
    "url": "assets/js/38.2adcf1bb.js",
    "revision": "571d8ad653e8212f5cdb2c7c3116241d"
  },
  {
    "url": "assets/js/39.37467dbe.js",
    "revision": "fd58eab04dc619d9f2798894c2253882"
  },
  {
    "url": "assets/js/4.3ee3eb58.js",
    "revision": "45562d99cc665c45db9306cf87bb1891"
  },
  {
    "url": "assets/js/40.86b653e9.js",
    "revision": "321c5e39d074951493c0258b7b911abb"
  },
  {
    "url": "assets/js/41.927def5f.js",
    "revision": "187caaeef372f322ed2ff1cccb6937a8"
  },
  {
    "url": "assets/js/42.8660660d.js",
    "revision": "b65d2081b961bbbd7e31537ced86e73e"
  },
  {
    "url": "assets/js/43.7afed4da.js",
    "revision": "34a811a16d0908a387f369ce996b7038"
  },
  {
    "url": "assets/js/44.f14d8bee.js",
    "revision": "87b678398796bdd01df8c5359f705205"
  },
  {
    "url": "assets/js/45.c1f142aa.js",
    "revision": "f98c14079c9530381300c229912bc00f"
  },
  {
    "url": "assets/js/46.fdaf3ae9.js",
    "revision": "63cb9e8cccd663e8176462423ec0e252"
  },
  {
    "url": "assets/js/47.c58f65ca.js",
    "revision": "4401359915a9ab3b22a5e65ed162f471"
  },
  {
    "url": "assets/js/48.c76da817.js",
    "revision": "6d83c4c11ab1d1d6af5971d47e65b127"
  },
  {
    "url": "assets/js/49.1629fa7f.js",
    "revision": "0ae4b45979f5b943be0f0a05639a99d9"
  },
  {
    "url": "assets/js/5.13a5c654.js",
    "revision": "da4dd3c1767b62d53f06e469e45e441b"
  },
  {
    "url": "assets/js/50.8e3907f6.js",
    "revision": "dfe08daa65fabbda70bafd53df23de43"
  },
  {
    "url": "assets/js/51.9ca8bf83.js",
    "revision": "ad490367e31868d1756f54576056b4ce"
  },
  {
    "url": "assets/js/52.503f9a0d.js",
    "revision": "f50f83ecac6af9f0f643168ad30982fb"
  },
  {
    "url": "assets/js/53.2daf5734.js",
    "revision": "eae89820bccdf116efb6745c166b9e5c"
  },
  {
    "url": "assets/js/54.fa26f8a1.js",
    "revision": "f19182d4567d3e992decc55ea24efff2"
  },
  {
    "url": "assets/js/55.972c2432.js",
    "revision": "7ac651696ea69d1a4d143b64b8aca96a"
  },
  {
    "url": "assets/js/56.81cb4198.js",
    "revision": "e4c75a3eb84497eb88944a5191d1d1b3"
  },
  {
    "url": "assets/js/6.96dd601a.js",
    "revision": "3b9ffe2faf927a573b8f864e2ebec1d3"
  },
  {
    "url": "assets/js/7.4a0a3be2.js",
    "revision": "d6b5ae0e8d5340bc50539acc8f827511"
  },
  {
    "url": "assets/js/8.ea6fd2b1.js",
    "revision": "5c0ab9e3c6ccbdf39c6064feb24144d1"
  },
  {
    "url": "assets/js/9.9192908b.js",
    "revision": "75ed45c9e449388d317b34edf8952042"
  },
  {
    "url": "assets/js/app.1e410c4e.js",
    "revision": "83f8d25d601951db772e4b6d45385a0e"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "e2950e68e59b19292e860f1801e243b5"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "8ac9dd21531333f306443bb59509eb22"
  },
  {
    "url": "category/index.html",
    "revision": "b7ca740bfa8f7a052ee0095d5355fb0a"
  },
  {
    "url": "category/learn/index.html",
    "revision": "ec21b19581ce5844cbe457da32265f51"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "3e9e834351436b7e5b18a03ba56dd4e6"
  },
  {
    "url": "category/summary/index.html",
    "revision": "8f9975e1c3d74776e12f2f410ebbad69"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "149d0fc9a64c74d31286079765782e1b"
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
    "revision": "2c08d0c02138e6b540ee17604632c1e1"
  },
  {
    "url": "lib/index.html",
    "revision": "fb392f8667e42de8772fffcea91914eb"
  },
  {
    "url": "lib/m-less.html",
    "revision": "dec2a060e8dfc3200dbdb8e54519d5dc"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "5329a1d9d15bc968d7cd7239c19b792c"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "3ae1593d3a74e15c155d8f869f48f9f1"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "72705875abeb05fb382a9fa3ea5bc03a"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "6523d85e04bf7f96412dd776171d15b8"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "eed012aa98c608e5d7078715d0f2caaf"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "95a8a4a804bb5f6704cda466a0505970"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "036d859c929db2f415b78557db2ad28e"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "5a2a50369d8eba4181a48d3e1b53ce90"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "7499f4f3c09397dc7b2c2591f4db05ba"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "d9ca82d50f19cbfbe31734e9411a3f52"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "893c59c53c27565693a35deb8a82615a"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "bcefc2137cf0db03a18efa70fcdae9d6"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "214153dae1dafa59bdfe1269d5b811fc"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "b8d69e3ec60cba3ec2f5c4642ba114d4"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "246264d89e04f288da05343d4f84f555"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "bc6525e9ecff120d2b875407a1de74a6"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "618491139139398877dc6c4d0871d274"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "1be8d9e468a36e349165807ba96e572c"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "3a7ef393badf3e3b9772c3d80b53fd14"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "be58402544093d567d4aed96f1be8900"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "3d9734eca62d665a2b99e4342ba17fe0"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "b9393def75a96fa14befde668ea4bc48"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "d91f823bfe428e248b3d7545bdf1e7a6"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "5a8649f0b12e830523867002e177d3cb"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "13efbcd8fd8b133f0fe48831b45f6df1"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "08a88ed411824910b042ae660c7d7285"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "67d9089942ede7421835ca9124a89e1c"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "eba296cec54c41a83ba40ac7c61ac97c"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "a3f71ee90fa458884afdf94bafa7d477"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "cca43c7f46f9e9e78f60c9b0aeb50960"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "8dd17e5dc3cb0693b322c5d8e4748ed1"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "c05927ac27b9344d633c5578548711b5"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "cceb7d0a983434035b8d11618bb99078"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "a2c0b62c093140ff9c0608c488de48f3"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "2a056830e91ff9218aa6f4c8babb652f"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "cdcf20ec5e044cc203ac78439e7cc669"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "4ae7cf6312c574273f60f75121249684"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "df37f998993641f09f7d4180bac24b9f"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "1e0354a7b05dbbd8e0b9d50e35e835e8"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "f6c3da2d9fc57b443f450a555b4b757d"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "c3af1f38b4380b7333ab02917b54bd03"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "15dc42fb8a7285ec86937e00db126739"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "5aa72ad23acf2f9073c23df99f50d511"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "6402147d18c329e5be032b85898b6ac2"
  },
  {
    "url": "posts/index.html",
    "revision": "b53a1ca64635d564de9137576ef32aac"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "42e1c0b72ec7f1aeec07fec36e2442da"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "88edd1aacb88bfbf6fcca6e6fbe83cad"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "6f2654bd8bffa645bdf4bdee535c3009"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "6ab03b34f46b6f251a8db201a21f1d75"
  },
  {
    "url": "tag/css/index.html",
    "revision": "992370ceb5bd9a137a477fb641cc64fa"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "0a40c251b1d3985bf022706cbd5f5c38"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "d4253fce2fe567ffb208b7f0aad50d77"
  },
  {
    "url": "tag/git/index.html",
    "revision": "aff0a4765a0c1a096cebba243fbaf966"
  },
  {
    "url": "tag/html/index.html",
    "revision": "10c90006e88eb219d257f43e0038329e"
  },
  {
    "url": "tag/index.html",
    "revision": "4fd6de364fa2083f2f5f2fa98676d17d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bb361e0fd2e68ba29f402948d2cc4b93"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ae892c0bb22be1a7f894b58fe56ea8a6"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "999121b76757f8a7a84cccedce7f5d27"
  },
  {
    "url": "tag/json/index.html",
    "revision": "699de80b6e635e09f242d65358eb010f"
  },
  {
    "url": "tag/less/index.html",
    "revision": "13e8ca5197aab1d9656f2659cbd41445"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "6d163be647988dbcecd561474f7da0fa"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "7db3113d3ecf4d5ec02f7bac4a1ae922"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "3201d8bee608502b2478ee343f42f96d"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "d8626fddc31be553359860e4440f1cfe"
  },
  {
    "url": "tag/php/index.html",
    "revision": "d8cdc95f684868c6f54f5499c47013d7"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "7d3e5e96e31801be4efdabde1bec6ba0"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "189d30356f940a5d2b0db3bccb7a1275"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "d309569ff1f7fb3fbf10737cba7defc7"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "6229b63a869c0acc7f5939e30a2e1c3c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e0619338d7fa2cf42b5812c53baa60fd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "30d56a82cb4537de7b724e0cf16dc974"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5799e1859d6e4297e0da5f61b4142e39"
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
