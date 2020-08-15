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
    "revision": "2f90aa8943263b1133af3dd8d4babf13"
  },
  {
    "url": "about/index.html",
    "revision": "aafce13be090a82d7118335379f90df1"
  },
  {
    "url": "assets/css/0.styles.787ed7fd.css",
    "revision": "39ca07706ecfeedafe33d8080ccbd7b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.44ef85a8.js",
    "revision": "df6d566d3fb0eacf8ac3d488bc6c93d0"
  },
  {
    "url": "assets/js/11.5ba4bd2b.js",
    "revision": "964b19a3f0af76300992146d66118806"
  },
  {
    "url": "assets/js/12.61e1414b.js",
    "revision": "c31348db904a2a1ef05cca4b6c5059de"
  },
  {
    "url": "assets/js/13.6d3da343.js",
    "revision": "cfac077f6378ea4b281136164b9b7d79"
  },
  {
    "url": "assets/js/14.e767fb7b.js",
    "revision": "9b9d89149ea6b84dfaac378bc319ff45"
  },
  {
    "url": "assets/js/15.52ebe23f.js",
    "revision": "da4eff3718eb95fff0cc4531bd15a2aa"
  },
  {
    "url": "assets/js/16.5c21a2d2.js",
    "revision": "fad2d0f1809c6e4f71b3a8a165b1bebc"
  },
  {
    "url": "assets/js/17.3613246a.js",
    "revision": "a053f39454899ac2815cc3ac1aa7714a"
  },
  {
    "url": "assets/js/18.abd9feae.js",
    "revision": "f5ff8d2773467f11fd6ed9f59cf50b20"
  },
  {
    "url": "assets/js/19.d330e776.js",
    "revision": "2755be4713306c59e8147a97bedf3791"
  },
  {
    "url": "assets/js/2.c2c64c8b.js",
    "revision": "e93373d87b5d619f841edce81c308e68"
  },
  {
    "url": "assets/js/20.abd5f910.js",
    "revision": "f14b575514e8e60b1db052ff86e661f6"
  },
  {
    "url": "assets/js/21.e8b90643.js",
    "revision": "00bf8b58df5a4a687c4b078f38cb2da7"
  },
  {
    "url": "assets/js/22.3f52e332.js",
    "revision": "17698abd22e88cb6fe1bea61003fcd9d"
  },
  {
    "url": "assets/js/23.9edce00e.js",
    "revision": "23a7707ea00ad3386809a932b62ae848"
  },
  {
    "url": "assets/js/24.d4b20154.js",
    "revision": "7592d1a79f06914fa8f42788828abaa3"
  },
  {
    "url": "assets/js/25.712f153b.js",
    "revision": "13b86f29eb3569351188f7523b45389f"
  },
  {
    "url": "assets/js/26.29235234.js",
    "revision": "2a8322b7535d89cba046054ea5ed31b8"
  },
  {
    "url": "assets/js/27.c15b95ac.js",
    "revision": "e5dcb36bf428b26d4d4ee79001247de0"
  },
  {
    "url": "assets/js/28.6dc4f457.js",
    "revision": "8d7c772a0b08457e77348c54e6ff7d66"
  },
  {
    "url": "assets/js/29.b0a97c19.js",
    "revision": "1ed01fe67ab63bdb624c65e35ad3f6ef"
  },
  {
    "url": "assets/js/3.6108e597.js",
    "revision": "382ea64efd83e193b04c1a5399ba7e8f"
  },
  {
    "url": "assets/js/30.c9dbd374.js",
    "revision": "b1832957d89e50983a39263314cec35a"
  },
  {
    "url": "assets/js/31.c7f75411.js",
    "revision": "2bd4475c90f44d6b315aaca0b1004732"
  },
  {
    "url": "assets/js/32.d7fb073c.js",
    "revision": "e5ac3e89352fb7567fbe9e05f56f59ae"
  },
  {
    "url": "assets/js/33.fb325ca7.js",
    "revision": "aafe2bfab650e4914d88bde454a053de"
  },
  {
    "url": "assets/js/34.66b2d53a.js",
    "revision": "e52e69536749c50199dddcf1df759d96"
  },
  {
    "url": "assets/js/35.daa3c300.js",
    "revision": "ce49b25db80d55d2aeb7d76413202501"
  },
  {
    "url": "assets/js/36.bf92461a.js",
    "revision": "065b82031dee74437957c05c8b273f30"
  },
  {
    "url": "assets/js/37.9cee25ba.js",
    "revision": "ab97e741139d033b618de7e1326a2b10"
  },
  {
    "url": "assets/js/38.61ff95fb.js",
    "revision": "f0074eac2d71e28737b2dfa2be47002b"
  },
  {
    "url": "assets/js/39.9635ae3e.js",
    "revision": "103ec65575275e5de6cdff7c51691bce"
  },
  {
    "url": "assets/js/4.0f970fc6.js",
    "revision": "022467bf58db732016b76a61dfce5055"
  },
  {
    "url": "assets/js/40.9c8ce8e5.js",
    "revision": "65b752fda0d236f5a2e8e219a769dc7b"
  },
  {
    "url": "assets/js/41.84de8492.js",
    "revision": "e08fe36bae8b2280432d262e97a680df"
  },
  {
    "url": "assets/js/42.342e0ff6.js",
    "revision": "26356b136f87e6e488d30012ef103184"
  },
  {
    "url": "assets/js/43.58b3b406.js",
    "revision": "a685719cabe22ba95f6ae31a1444ab4c"
  },
  {
    "url": "assets/js/44.9073f89b.js",
    "revision": "cff7454c7591266c8677edde7dd3a3d0"
  },
  {
    "url": "assets/js/45.a61877bf.js",
    "revision": "27b669d8f304e9f34e076aa877fbdc74"
  },
  {
    "url": "assets/js/46.cb4b1cb3.js",
    "revision": "7e79c70d75e6abf28fbbda9628b6a0bd"
  },
  {
    "url": "assets/js/47.3e0be0e4.js",
    "revision": "9c859d088e652a96a4f9735de95dc08a"
  },
  {
    "url": "assets/js/48.c78fc593.js",
    "revision": "57fa9d9d499a6aedaef9f1af27e98027"
  },
  {
    "url": "assets/js/49.a773003a.js",
    "revision": "fe9addd7b5c017f0c8cb1562a82b1618"
  },
  {
    "url": "assets/js/5.1e68ab83.js",
    "revision": "6fc0be5a712d89bc3292447f10146ae6"
  },
  {
    "url": "assets/js/50.68d62bb0.js",
    "revision": "84072f4e408fe56cd30a5a6eb645ec3b"
  },
  {
    "url": "assets/js/51.32e59695.js",
    "revision": "d2dd19277aedae11b83293a3993930bb"
  },
  {
    "url": "assets/js/52.19c44a56.js",
    "revision": "dd5d19647c3516c67055d7818f23464e"
  },
  {
    "url": "assets/js/53.470f9926.js",
    "revision": "e2e97d140b9bb14e9fa600b4b1bb6acc"
  },
  {
    "url": "assets/js/54.8edbd777.js",
    "revision": "03c0e61e7ee257ab494d784d914cc7ad"
  },
  {
    "url": "assets/js/55.77a0706c.js",
    "revision": "a83956eecdf3a7fee5dfca7f7f966c20"
  },
  {
    "url": "assets/js/56.fffce8f0.js",
    "revision": "6aabb06ae4f83295190c15144b727b2a"
  },
  {
    "url": "assets/js/57.20ca8b7c.js",
    "revision": "c995192fc45a3f278f04702b90c52116"
  },
  {
    "url": "assets/js/58.7a43ff68.js",
    "revision": "e8c4ed88de962b7039315a339381fdc6"
  },
  {
    "url": "assets/js/59.6a6344ee.js",
    "revision": "95983c7c80e5698f919dceb81f8fe58f"
  },
  {
    "url": "assets/js/6.035dec47.js",
    "revision": "06ea6cf03524539409f74d36ee61da92"
  },
  {
    "url": "assets/js/60.00cf6aa2.js",
    "revision": "68bec044895fe3c8bc6f378998a26379"
  },
  {
    "url": "assets/js/61.4e463c34.js",
    "revision": "a956fc0cb49fc40ac5e66f7d497d104a"
  },
  {
    "url": "assets/js/62.43283dcd.js",
    "revision": "a664030715118386bb316f783207c387"
  },
  {
    "url": "assets/js/63.9a98b65a.js",
    "revision": "80ca914f8137408d8d962b34e974bfcb"
  },
  {
    "url": "assets/js/64.a612a3d2.js",
    "revision": "2d31765c5d86bf673a1b87ad9ca22b52"
  },
  {
    "url": "assets/js/7.11faabd4.js",
    "revision": "dbf79aeb7e3ab9ea6821289338081ce7"
  },
  {
    "url": "assets/js/8.b0ca0c4d.js",
    "revision": "de75cb0f70758fa096387bef0a08acb3"
  },
  {
    "url": "assets/js/9.6d447d2f.js",
    "revision": "a381c5486e3d86fc82a4063cc2ea3c6a"
  },
  {
    "url": "assets/js/app.f1eeb6f9.js",
    "revision": "c9fcdf286c4e0ff82725ea85ef333f48"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "cad58f617a305625d4b4f9fb0fd08427"
  },
  {
    "url": "category/index.html",
    "revision": "fd6b9baba857919e1a82fb8b41e88b2c"
  },
  {
    "url": "category/learn/index.html",
    "revision": "92721bec9f9d306a02ea897c2a08bb17"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "b9f8cd81f8afea2263da56ea53d4db3d"
  },
  {
    "url": "category/project/index.html",
    "revision": "ee2810594b387646f6f863b89b30f0ab"
  },
  {
    "url": "category/summary/index.html",
    "revision": "7a127222e0074fef43b50660048a5ff7"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "cf9f818ee056ad4e4af502ab12b7d0d5"
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
    "revision": "7db0c618a7fc88233584648343243509"
  },
  {
    "url": "lib/index.html",
    "revision": "bd9149b90038d7afbb0708376c88f756"
  },
  {
    "url": "lib/m-less.html",
    "revision": "c26d86b8cf30054acce8c12385016e39"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "f8d097567f96c20b6838ca55303e934c"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "b41b88b0e0be69a5cd88060f64ded80c"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "ac9ef18f153b88a8c46f1aa3a2396339"
  },
  {
    "url": "lib/usercss.html",
    "revision": "9bf9fede17403b39de926d679866aa7a"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "2f103fd7173e62cb64ac26c812f20db2"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "110444b4556b9caef3adec34673fecad"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "80196bdeecf549e076bb2be64526ec1c"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "d0ca4e75f3b013a215ddf060c104ce97"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "67a3c33bcef915de4e000ea03b6c4667"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "fbd5a275440f0a0c20830eb3ac7259de"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "ee6338215d6d8a632c962ef4dce047ed"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "07ce9a93a7b8a745277c13813ad89238"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "4134b4eb98c8f1174c1685c0893371b6"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "87ff2138a0656b38e9524347406244bc"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "eba18e79f4b57196e699d5e63b2ca734"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "4107c0511a8ec8caea00d0160384db02"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "e78236db18654ebb245eef96699913b0"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "bb5b1d82382372475fda1b9c63b4f71b"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "eabed713bdd01bcf51d42227a3acb987"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "cf3dc4b1724b539413b64179dd084b2b"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "fa87193b823c804e217601d6b454d875"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "9f5ef5c3e14aff4699ed3574f0083f5c"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "d8ac6298eaa0aa004ba743e61e97e170"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "73a00911642b967b774da826bb1df98d"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "f240f718571dff6c4b68d47ff3abfb65"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "3369e5df09b7766b8f2eb31302f3db9b"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "ecb373f1012ba8c09d2e6b9ef2808edc"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "755d7549429f13d5ba6141345cdfbf55"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "a127852cb0d43515ceae965dea574be0"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "c6c57c45612c7ba8022bd4040a2030da"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "8ee169ac0fe2c8c786fbcde5d11f2caf"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "9edb081e64f4a63f8251b4a543755a0e"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "8be478ffa80ce15fea707b2a4b096c70"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "085a4a5a6dd641e715df9d17fead8c03"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "fa5cc1bc5cb83928197dde4d4582c255"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "b4c7c7a6ff6aec437e7c0cf8821c60ff"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "7f29cbe360ae71f2fe37aa8ba44aadaf"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "176319e8dad2ee4283525d38bfaf1647"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "acdb49c032745e7f55be9bec160bf0dd"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "97cfe117f35001a6a445d1d2e83fa6bc"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e998b318d0f2cc97af9bc99b37c0cb09"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "59f49e5138337caee5313cb66c631ada"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "b6ca9c8853d41bd09e1134ca59a2c9f0"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "c371e6a10393448b4653dc26144d9318"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "a493b42ea67cade6585992e24c85da30"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "231098e4e13d03324d4e7cf2880a6a52"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "7e9790faa4b0281a80b4736eecbee7c4"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "c455db1d46154f24e670bc0f56f2a5d5"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "e4bdce52ec5642242cfbb87ee4972dc5"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "8858b60e2eef22bdad5962a80d087a4d"
  },
  {
    "url": "posts/index.html",
    "revision": "50e089ae84d7f4d12bbafa4c6504c11e"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "2410418f4f7800db764849585023e6df"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "6617722ff2ec09aa537e91617d6c0105"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "2015afa1d4d4e9b72a72dfb6ec0dff9a"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "c2960e67277266f9295d670ebf96e6a7"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "903f9458cc90de72f886e3bc93398165"
  },
  {
    "url": "tag/css/index.html",
    "revision": "79ddae7082d84092c1a22dc78dc7601d"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "a465141acbe535c2a3c2f8435f934fde"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "a04c94fa9080b8fcb96014c6f108fc68"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e40630439b420aad84fa60b21497a6e6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "110d6bdde58b1738ed4fa2cba82dc40f"
  },
  {
    "url": "tag/index.html",
    "revision": "3455407b59946f5f25f2ed32178c51bd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "53077dc52a538170fbdd9b9c79dd0b10"
  },
  {
    "url": "tag/js/index.html",
    "revision": "00117aec0b27246141413d9131a4ae06"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "45145cde7e9fef494b64a6e2b71309f0"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f9d0f54c0edbe45218c38604d412851a"
  },
  {
    "url": "tag/less/index.html",
    "revision": "447f11e439df1dc5549086d18bffeff0"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "1d8d44db40a4741fece419214f4ff098"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "f24e48330afd1fe0f1878009e2e5ed5d"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "8c8d9ace996e2eddd1fbe765293c1fa9"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "617b95d9c2142cfebb3b63031c57e09e"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "8bc3648c77caaea24a05fdbc160645a9"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "7cf30587770d26dd5e060c3477801219"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "54a81942238592aba5cd1a853325a682"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "0899618d163a7d02d1ab0c709b124d34"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "a376b258d768b84690060ecc434b18c7"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "d4851b918ef9f354650b6794322a0d5d"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b703e433125c627b4ff165ca1f321280"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "eaf63725019ca412d6919ec038dff6f3"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "67e73791f9ca8ee85ea00b1428a00651"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "31b29384b55ae3159ead7e3bc5358965"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "810cdf5720665bee780554af005a3967"
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
