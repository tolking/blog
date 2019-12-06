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
    "revision": "59294a601f7f688dd60ab9fbff2da320"
  },
  {
    "url": "about/index.html",
    "revision": "134db6f363a7fd4a9eb012eff537fcbe"
  },
  {
    "url": "assets/css/0.styles.5e7ec7c1.css",
    "revision": "ffca1eea3f61a7786bab1f4a0465b1ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9ef64bc1.js",
    "revision": "00cabeabeca58aee45d8592dad75652a"
  },
  {
    "url": "assets/js/11.20c660e5.js",
    "revision": "f7a2c6d33f89d4e1a02d7eb104a350ba"
  },
  {
    "url": "assets/js/12.b30e2f07.js",
    "revision": "337d7261201c14a48e587297130c8cce"
  },
  {
    "url": "assets/js/13.8c3c4185.js",
    "revision": "7b90413c26a282a1f23cdaed81af29af"
  },
  {
    "url": "assets/js/14.d3c723da.js",
    "revision": "403cee976fe36b628a3c515e2106efdf"
  },
  {
    "url": "assets/js/15.49687b49.js",
    "revision": "fe0ab83a019b4527b7b93d266819ba40"
  },
  {
    "url": "assets/js/16.e5181453.js",
    "revision": "e6c299edc2bd13222fecaaa65badc69e"
  },
  {
    "url": "assets/js/17.e9b9991b.js",
    "revision": "aeccc3ee2bf728ba24079e375fe45352"
  },
  {
    "url": "assets/js/18.1d67517e.js",
    "revision": "a2b56c2aaed5a45b45f838ed33f7d4e5"
  },
  {
    "url": "assets/js/19.1e59bcc1.js",
    "revision": "3a6b8924a95665daa26f7973e705e3cf"
  },
  {
    "url": "assets/js/2.b412cfac.js",
    "revision": "8157ac65e272cd5e3d541bda629b38c5"
  },
  {
    "url": "assets/js/20.36d06c65.js",
    "revision": "abf644919ba26052f4cd96e843d623b6"
  },
  {
    "url": "assets/js/21.872e391d.js",
    "revision": "975adf1b01ead2e3792145a3ccd345c4"
  },
  {
    "url": "assets/js/22.f0ea0d77.js",
    "revision": "af891ec845f3ebb8dd1612b035a93991"
  },
  {
    "url": "assets/js/23.73551d2d.js",
    "revision": "0b278523aef125925f69d568e42fdc80"
  },
  {
    "url": "assets/js/24.6e665222.js",
    "revision": "641f9145fac45758834e92509ac56aee"
  },
  {
    "url": "assets/js/25.2a38b286.js",
    "revision": "4ac8ea14958c9c90e01a14ad88bf7bfb"
  },
  {
    "url": "assets/js/26.af72d88a.js",
    "revision": "5c24328ba4a8bd6fb7a192de328863a3"
  },
  {
    "url": "assets/js/27.8128b690.js",
    "revision": "418b17356bec93cf448a727d68f0d2ab"
  },
  {
    "url": "assets/js/28.de47a42f.js",
    "revision": "d92af8fda7f1171c96341fec8391f091"
  },
  {
    "url": "assets/js/29.21b8a05e.js",
    "revision": "71c3822f2e4bc5ee04dc2cafbfd1c656"
  },
  {
    "url": "assets/js/3.e3a9580c.js",
    "revision": "bb44e68595881b68b667bdc28e877c2b"
  },
  {
    "url": "assets/js/30.a7d4c12d.js",
    "revision": "729bbc1cb0c0afe37444e531f9793ee0"
  },
  {
    "url": "assets/js/31.da132e03.js",
    "revision": "fcb90e5884bd9970b6fa13c48394c8e2"
  },
  {
    "url": "assets/js/32.b8f51141.js",
    "revision": "0f3e51b731a1088dedbb9c18fb0fed5c"
  },
  {
    "url": "assets/js/33.405e4e39.js",
    "revision": "b121968d2a8f10b08b8a2b68955c9523"
  },
  {
    "url": "assets/js/34.46587ea9.js",
    "revision": "081b759e70267d24fa0b3b9c4ff392e3"
  },
  {
    "url": "assets/js/35.8ffd0c7a.js",
    "revision": "773836a09a98d4a6a3c5c374175c58cb"
  },
  {
    "url": "assets/js/36.9fa08e1e.js",
    "revision": "e7fac1eef7626363721fa855d0c72211"
  },
  {
    "url": "assets/js/37.f4e1a656.js",
    "revision": "a2e3e84ba86109ec12d20358eed060b7"
  },
  {
    "url": "assets/js/38.24d28334.js",
    "revision": "995a07158e140f333cb150d745246c28"
  },
  {
    "url": "assets/js/39.718934f0.js",
    "revision": "7e64bd601ef25a32505d441090d0d0be"
  },
  {
    "url": "assets/js/4.c87ac659.js",
    "revision": "86ddb8c0e8806e2d1c15de1b08faacfd"
  },
  {
    "url": "assets/js/40.c1829eb3.js",
    "revision": "ea015dd81f62b35a1131038af9f48a8c"
  },
  {
    "url": "assets/js/41.e6b236e3.js",
    "revision": "9d733bbfecf961baaea566646cfc1195"
  },
  {
    "url": "assets/js/42.2957e0fe.js",
    "revision": "85a3590a784d3341fe5d2ca9d7652559"
  },
  {
    "url": "assets/js/43.356a7ed8.js",
    "revision": "17b8b487c430714305f1c9916b894166"
  },
  {
    "url": "assets/js/44.a29b55c4.js",
    "revision": "5e94d0a2984f28b7d052596a514b1291"
  },
  {
    "url": "assets/js/45.09603d25.js",
    "revision": "a76637998b0ddb04ff1d4d62536931c7"
  },
  {
    "url": "assets/js/46.2f559379.js",
    "revision": "150e83a343a588252dc31a073c4a4582"
  },
  {
    "url": "assets/js/47.94f03640.js",
    "revision": "4ab9ee3229e1d9776ffbeac2f57a1a62"
  },
  {
    "url": "assets/js/48.db78bb4d.js",
    "revision": "0393fb58ed6928089e3476571c66cd92"
  },
  {
    "url": "assets/js/49.57a39ed9.js",
    "revision": "535306ef79e535bd77c1835e8cea6532"
  },
  {
    "url": "assets/js/5.2cbc4840.js",
    "revision": "da4dd3c1767b62d53f06e469e45e441b"
  },
  {
    "url": "assets/js/50.f71b591c.js",
    "revision": "e0aca62f22c7b1b47cab46eb72e42146"
  },
  {
    "url": "assets/js/51.86ed6ea7.js",
    "revision": "a295f00b31ed898b4147ff58b1084f67"
  },
  {
    "url": "assets/js/52.bd874bc8.js",
    "revision": "192c7a972f2311e6fb4aa1702364f1ff"
  },
  {
    "url": "assets/js/53.482bc0e9.js",
    "revision": "4ac974649a35ae3d74217fa53f20e073"
  },
  {
    "url": "assets/js/54.8314d19f.js",
    "revision": "7630de9e5a9d7e7f85ed3f8b5ed1f586"
  },
  {
    "url": "assets/js/55.29cdb867.js",
    "revision": "e0e39975a87b063fbaeb36757d06c0ee"
  },
  {
    "url": "assets/js/56.bdc79b4b.js",
    "revision": "85d5b90d4014608104017a976596bf05"
  },
  {
    "url": "assets/js/57.b50ba64f.js",
    "revision": "723c8ffe4612930d28c210171434d8ee"
  },
  {
    "url": "assets/js/6.83ea1bad.js",
    "revision": "3b9ffe2faf927a573b8f864e2ebec1d3"
  },
  {
    "url": "assets/js/7.21c416de.js",
    "revision": "78ff027c5900114eba2f61a5311141ff"
  },
  {
    "url": "assets/js/8.6949e8d6.js",
    "revision": "0f75ca705eb9894535aaa4b5f4a18103"
  },
  {
    "url": "assets/js/9.3b1e930a.js",
    "revision": "75ed45c9e449388d317b34edf8952042"
  },
  {
    "url": "assets/js/app.2d540c55.js",
    "revision": "bfbfc1ad3f3195d3d87602929a567bc0"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "5948bb993632b658226aadfa7b5ef81a"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "4cc36c8ab4586762ed5efd73062f971b"
  },
  {
    "url": "category/index.html",
    "revision": "ff6233afd9695fa71d32eebb91117d67"
  },
  {
    "url": "category/learn/index.html",
    "revision": "a305f3399fdea5b5c95ef86986a4e27c"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "e2476076c26a0b3623673a07b8a82a93"
  },
  {
    "url": "category/summary/index.html",
    "revision": "3d92915d776ed13f7b2d9cc4174c4312"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "fa8ca9d26c59c84607eb3faf7e48c976"
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
    "revision": "a57b129744eae0ddb2c6b43d6b573df7"
  },
  {
    "url": "lib/index.html",
    "revision": "e0dee7fe7afba0b8d24624c1e603911f"
  },
  {
    "url": "lib/m-less.html",
    "revision": "ce80eee115276cbde6845dbfefde3bb2"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "12a2d4396864c64644cab09cb895c19e"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "250ba88ebe49167ba603f4547220f23b"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "c1877fcef21dd1e856434e1e65a14a5f"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "0fc8000da10c86beecc3b0f61059cce7"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "3465447e9b5b82ce4ff016205f524854"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "09d72cf3f7a590bf95106c492720a77e"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "460d70744abd1471a27c1ee3ead7bd1e"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "bbd4d26923514284e4cd58ca1de59761"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "f52bd7a8aeaebbac1e8705bcde7041cc"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "48e04e3c0eb42ea82f85ec6901b2af28"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "0782af6d2f4fd61130ab2cae9eb8e191"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "861ee55eba1bd3a7941e6e699c88e91b"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "f5fd7cf2d0fcdbeb20ea1e57c27140f1"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "fed4ee4ae34e803aba728df2061ef9c4"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "c4caed791d78a2095ef9b3c4a8467ab8"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "97e99cb97be4d4a2a47994b06e25786c"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "f25c6cb2d5e70c5050c492192f8fd172"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "a2433164b5f40cd19216f9bd234f671a"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "3135c15285943882e65f231409daf5b8"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "0eea34ecd19887371432a3867b512cb3"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "d8dd32200da74b6657233ccf6a61a651"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "b466145d01c0aac1e05b62e54b3b0e47"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "3d78a1d6a8fb59c593b04f843ba85319"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "5e5bb57f2f53fedfe6f3868ec9db5820"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "96a03f5af975b214ec98b44cac0f4249"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "313fb31fea575edd3ff33c842a13663c"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "0d1fb8457a36b17bd3abbbf3315cc8ea"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "b2a316204b81aaae0145f6895bfed849"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "666d9b04bd2bea522992918a9f740e77"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "a2b904067100d301042fe3fb9ce54fbf"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "647cdfca29975b0385475fd5d794303f"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "236ba2164a7bd4b393210291736a27f1"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "4b40265fdda54f5b1945ed47d224f807"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "f7a65d580e610201af92916b9761e1c6"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "fe867995f767733bba985382a3c45445"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "20135db5f97c11509ac75acf6cc58538"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "76831380a37a2ba68179ed50dac3d2fd"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "bc38fedd2459eefba7fec638d871a56b"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e7397c3289bd28a3a877ce7a29fa08e1"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "98beb73136e14612857efc8b7ac5b5be"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "7678b6ed568a753e0e9ebf7af56f1355"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "86a3e571b12ee111f4cff71c789a814a"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "351a330dbba98fe16244528eafa272f4"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "a3cc71dbd721225d35f0b19eb6b6d068"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "f61d6fd94c2c73afed016c599d5cc438"
  },
  {
    "url": "posts/index.html",
    "revision": "7556f756ceba72dab3e8841d3cd69fe8"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "65f3e775fa419b6e141edaaad87067dd"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "01f609251441e8f23cbebffc825f1b1f"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "29cc8f3cc070ccfcd136d3dc2faa29ea"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "7db988e15622c5c8bd9b5d468c0017a9"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "2ccb200e95a0055cbe33fdd522b7421c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a0513d6def9de40f548f8e9ae996251c"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "c96c0ab88b857b6f0a8891ef225008e3"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "3d9a00b9967b16723a684b667e682144"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3af285ff24883746def07327acdb2992"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4e136f0f26f22c8768d629d01962bb5f"
  },
  {
    "url": "tag/index.html",
    "revision": "b6b5ad31e4673cf58b4821330ba5a8e6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "212a269876b9a4c0a414df210d2e9b4f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a83154143564ff2e92840611a8258609"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "28ef020001b59cf6d3e547f6a34788e9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a954ee25643b53a09ecdf54b1e30e003"
  },
  {
    "url": "tag/less/index.html",
    "revision": "ccb1a63ad05748128e4db076f8370dd6"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "c1f859ea9bf7b5acaeece36fba15cf50"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "667fafdc580fb786ffcdf55b4a5b4312"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "e9bbe605bc159af5858d84e9801428cb"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "576e96aef648f32f33d6af394f1ebc8c"
  },
  {
    "url": "tag/php/index.html",
    "revision": "417bccd9d7312d56e15b29d32e68cb72"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "14b01d23ac5e817cc64542f95db26b9d"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "d2f7559261592b06b4f688b8149d5f9e"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "9255019551bf4d2530453b2c76244748"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "86d6c7d3c11e0b2e08af182c5b226055"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "11774f175817ae9de261c1f4e475f4c7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "821a7a92f62b97ded237f505c4ca2184"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1415a8e5a7555bf99b946ef97792c61f"
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
