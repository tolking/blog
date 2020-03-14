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
    "revision": "7ab9e822befeaaf3331ed1313935472c"
  },
  {
    "url": "about/index.html",
    "revision": "7a8a73dbb38d1d3b9240254b85f0918a"
  },
  {
    "url": "assets/css/0.styles.ea34938a.css",
    "revision": "543829a525edf838483ebd871e9caf1a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d97a7cd.js",
    "revision": "f189721ef6b9abb6558188f07cb120cd"
  },
  {
    "url": "assets/js/11.cf1c1bd8.js",
    "revision": "fa83e3d6223889d0f5634e9bb68eb71d"
  },
  {
    "url": "assets/js/12.57655f4c.js",
    "revision": "8dc7f047dfa54723fa15251ee03f24c3"
  },
  {
    "url": "assets/js/13.c36f786d.js",
    "revision": "1c6f79a1e0f962d343f60dddd52f0978"
  },
  {
    "url": "assets/js/14.7bace6e9.js",
    "revision": "2930943bc6319d0e3a62fec9eea26d75"
  },
  {
    "url": "assets/js/15.a55ca0fc.js",
    "revision": "0867e25e0426761c86f85c2f19c5b379"
  },
  {
    "url": "assets/js/16.15b333d0.js",
    "revision": "da42c50bdd938397fc6392f5cfb98b54"
  },
  {
    "url": "assets/js/17.beb2d1ac.js",
    "revision": "a84570599230352a24376efbbe91d829"
  },
  {
    "url": "assets/js/18.7fd0cbdd.js",
    "revision": "cd407c43a728fe311da822bf072d2f8d"
  },
  {
    "url": "assets/js/19.c87ec739.js",
    "revision": "c20bfdf6777e0f46fe93ab1982507716"
  },
  {
    "url": "assets/js/2.382a84b3.js",
    "revision": "b29eaa092db9eefa6e33581f61ae282b"
  },
  {
    "url": "assets/js/20.1fb6b36f.js",
    "revision": "6904df36832a9a6d823ee5975aa012f9"
  },
  {
    "url": "assets/js/21.5639c4ed.js",
    "revision": "d54660f5dd15b4acd1cb0b248b208466"
  },
  {
    "url": "assets/js/22.75cadab6.js",
    "revision": "51299c5b30d8e3c41afe58c5a0a6ae85"
  },
  {
    "url": "assets/js/23.e1d69dad.js",
    "revision": "3589740523bc193e5e02eefaa35c3c8c"
  },
  {
    "url": "assets/js/24.2edcda35.js",
    "revision": "d39a3554d0fe2721d717d73385968603"
  },
  {
    "url": "assets/js/25.f9892039.js",
    "revision": "2493c90711a1b6b11225dfcfb2a47d0c"
  },
  {
    "url": "assets/js/26.b8ef72d1.js",
    "revision": "2e2094cd1ad9ebd0ff3370bfeab035b3"
  },
  {
    "url": "assets/js/27.1f97449a.js",
    "revision": "a3562c6651d00f384bc98c768debe0e9"
  },
  {
    "url": "assets/js/28.bc0db396.js",
    "revision": "b914f71e8014649d8280dfdaf4beb7ce"
  },
  {
    "url": "assets/js/29.b8b8cd1a.js",
    "revision": "f249513cd54ba1ba5e51e2b51c98d1c2"
  },
  {
    "url": "assets/js/3.ea722fcb.js",
    "revision": "5ac84f5c1bf96f9df5a5707f16d63856"
  },
  {
    "url": "assets/js/30.1915b5f2.js",
    "revision": "f998d9995531da58ec89e04a0c7f7395"
  },
  {
    "url": "assets/js/31.e5d0b60a.js",
    "revision": "894fa0f1dd2f91ae961db6538ee15109"
  },
  {
    "url": "assets/js/32.81bd28b4.js",
    "revision": "02e2ecea3a6117f6580ed936622ec626"
  },
  {
    "url": "assets/js/33.7f8d1e2c.js",
    "revision": "f4de8a22424a92844152d363d2a9babf"
  },
  {
    "url": "assets/js/34.0a201c12.js",
    "revision": "2fbdb9f96f8ab29eef645a711da87066"
  },
  {
    "url": "assets/js/35.41bd1fac.js",
    "revision": "091f8c78acc5b74d242ecab8bf61ad7e"
  },
  {
    "url": "assets/js/36.4a549b59.js",
    "revision": "28314abb186cd1717043dabfe9647b68"
  },
  {
    "url": "assets/js/37.52572776.js",
    "revision": "e69ba7f9806c1044e14e6b89a9bd26be"
  },
  {
    "url": "assets/js/38.c21624ab.js",
    "revision": "a775d5653e0105a777cf848949701a47"
  },
  {
    "url": "assets/js/39.43a32431.js",
    "revision": "f00b8089449b9a935c90035a310d64a8"
  },
  {
    "url": "assets/js/4.9e7ff7d9.js",
    "revision": "6842b54980769408a1feb3ebb870669a"
  },
  {
    "url": "assets/js/40.9145315e.js",
    "revision": "a2804ebec567db33ca8593067460c6fb"
  },
  {
    "url": "assets/js/41.7e8291e5.js",
    "revision": "5cbe29d0c0065026c2db87d739496744"
  },
  {
    "url": "assets/js/42.2593830a.js",
    "revision": "08fc0e34947d8715ab396b92548bfb56"
  },
  {
    "url": "assets/js/43.2791239f.js",
    "revision": "5993986eae28757fa1a7702a23e5cf05"
  },
  {
    "url": "assets/js/44.e38a544b.js",
    "revision": "ed95e4142be983eab3be1b2478d525a1"
  },
  {
    "url": "assets/js/45.8c69f73f.js",
    "revision": "2249bf63393809ce8862d2b4e2f0e73f"
  },
  {
    "url": "assets/js/46.8dda85fa.js",
    "revision": "95a895a179658aba5d82edc2382a56ce"
  },
  {
    "url": "assets/js/47.d811bead.js",
    "revision": "e4b103afd9a9126883077059ffa31913"
  },
  {
    "url": "assets/js/48.41eb76b9.js",
    "revision": "aa582394ef389afb2021a5fbfb52e8bf"
  },
  {
    "url": "assets/js/49.9cb9f1f8.js",
    "revision": "7bd7d7a215a3aca75d7f3c6cbf39efc8"
  },
  {
    "url": "assets/js/5.8cb8a111.js",
    "revision": "02e572dfcef74739243afbaff751285d"
  },
  {
    "url": "assets/js/50.dac810f9.js",
    "revision": "e9704176c49cdcbe09ae5775090995b1"
  },
  {
    "url": "assets/js/51.3281a7c1.js",
    "revision": "0937231e1a0fe9df767f0ab755677f41"
  },
  {
    "url": "assets/js/52.6eeb1924.js",
    "revision": "b0a6b462ca211a590e2973ecbd4df9d5"
  },
  {
    "url": "assets/js/53.cc799174.js",
    "revision": "06a066bc6f12c38d566e93bd3f87bb1c"
  },
  {
    "url": "assets/js/54.e4a54e2b.js",
    "revision": "01d19ed20799f521f02eca374659ff9b"
  },
  {
    "url": "assets/js/55.b340edba.js",
    "revision": "3226c1d82d129e5c454a1f7ed8238eca"
  },
  {
    "url": "assets/js/56.83b2bc38.js",
    "revision": "36559da1d444544309673b14089d72ce"
  },
  {
    "url": "assets/js/57.719933e6.js",
    "revision": "dc78af0bb1443c64643830b9d663f3b1"
  },
  {
    "url": "assets/js/58.068fb06d.js",
    "revision": "031cb96432017fa38a6eec1e465f3734"
  },
  {
    "url": "assets/js/59.a771cc3a.js",
    "revision": "65377a89d7c48fb85a7f75f9df3ef179"
  },
  {
    "url": "assets/js/6.0a844d4d.js",
    "revision": "0a0d253bf1ebc3e7e011e1f997bef8ce"
  },
  {
    "url": "assets/js/60.dfa44b56.js",
    "revision": "b6bddd3218b22fbb3ccca1b524c3398f"
  },
  {
    "url": "assets/js/7.c314e3f2.js",
    "revision": "6a11b050f1cedf3f3d45250e064eafde"
  },
  {
    "url": "assets/js/8.d44bdf1f.js",
    "revision": "648fd22d14245bf601cbe94fd595c6ef"
  },
  {
    "url": "assets/js/9.b5c3d789.js",
    "revision": "c1a052023368aa6bee38926e8848deb9"
  },
  {
    "url": "assets/js/app.000addb4.js",
    "revision": "a94fea1b320fb96e901c87183d30a0d1"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "e6a9fb709998cb4e9d737dc6c40be7e8"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "24317ad4ab471ea1d7bf46fecafb9e3f"
  },
  {
    "url": "category/index.html",
    "revision": "21cd37dfb8fe03cb65ab0047cd7f125d"
  },
  {
    "url": "category/learn/index.html",
    "revision": "182a0241cdcbe033c457302aca529907"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "32ea480fbb4f1f27e6e3a80bac69eed4"
  },
  {
    "url": "category/project/index.html",
    "revision": "b29033940721c24cefa672db6c644704"
  },
  {
    "url": "category/summary/index.html",
    "revision": "3ec163f7567f47ead6c1d4061bb8a15a"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "791e22d9ed960c4388621bf62c889779"
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
    "revision": "05cf826d574db5caf5f9109de95288c7"
  },
  {
    "url": "lib/index.html",
    "revision": "d7454a399eaa40ddd5f587c2d2e39c5d"
  },
  {
    "url": "lib/m-less.html",
    "revision": "fdeeb329cc308d4068f252c9fd59179c"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "c193333d94e90d873cf6bb088891eb36"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "82c8c8d46e12cf25ed6c1cb93278ba7c"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "6d4afaa6e99917aab9856fd3a26efdc2"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "f2b1aade8f1ff69cfa823ec795b8f2ed"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "3ab99559d2b2c214bf15b453fe5a82a9"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "26a2fa313c847b2d19f599ee68822249"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "3337ac750a397055129f560aafc3acc0"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "154a0b22c921e3f743f0f9fd63d9525c"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "0f904b6ce676298db5e20a77bda8ae2d"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "bccf9b5c498d243fb717160d430b0e24"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "7449492fe262d850e8306ad7d0c54c01"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "f2574aaae06a65162c656829c110ca5e"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "355b3f83397378b62addbfb5f9079ef3"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "edaf1f741149154d431e1fbd1d52206a"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "c0e6204b564c9bbd44ff4ebd88afc89e"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "f49c6dc532f746ef98160e7bc3ce4848"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "280e5621aa736ee248a0be5313508733"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "72e85c9cc052f9fad865038e3432f959"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "7c978c158ac0fcf56c4036451b427a63"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "9126d46ccbb6bf124fb08148b513921d"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "c381768659333760512b1f1929713ea5"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "4073451139d55c71b10d71f649adf930"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "c257c4645ccacde30430cb938275137c"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "af7b1fbd2e3156effd2a054895fb068d"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "fcafc6c668d6ad81368e5156f3611e42"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "76e0ebd64593016479aa966e0fd9c5b7"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "8887d137995f1c229119615a19d340fe"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "54c07d9b9e2e894df6a0d596e1c0b313"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "684d5067700e4fff19e8f1e3c40f9646"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "619bcfaa20eba56e92846b5845400e93"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "fb7513f2c8c248f3e5dfcf99bf6535ae"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "2219e469390102289b64b88e95100029"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "e5c588f9bb53a6496b34898c184bbd2d"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "5efb21adc7b333be906d126070e73639"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "47380e3ef0e3c0ec9e53da45b96d0500"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "070142d1b3553d7a620fda6390cda247"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "e249c85e0ee1055de67ea3cbc41d5c2c"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "1093310c2cc0e7a7d64f5902171a3521"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "5deb693aee963dab5be59b9feb17b40e"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "764e98db856c1e149748968faa563a13"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "e7489e3424c261e254f49435116ef00b"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "feaa36b69c8099c3d808ec7debe20376"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "6268b1dd718eff8ce0dbb2e2f3f5cebb"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "a51fe5136dbd6a2318a4bdeb0e23b2e3"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "7349f2817c08a24f0307c8889713501f"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "5ed2894ea34baa845a60182479a84a4d"
  },
  {
    "url": "posts/index.html",
    "revision": "7b3387653f69f8cf2a6307d434390be8"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "808c7136775b8dae088b3c04765dafdf"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "41269bfb74216892009a1931c1e838b0"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "311aaeccae4c51636d793c47188f8a45"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "1153310bdc738b4441f14d4ec7459172"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "74d0590e755a890a9486b42859234dff"
  },
  {
    "url": "tag/css/index.html",
    "revision": "39b6026359497df76fd38bdce1e670dd"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "bcfb2af3769777ce51ddbf4b8ada95b7"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "722d0569edce9c2fc01235494dbc0643"
  },
  {
    "url": "tag/git/index.html",
    "revision": "767cc12d52d452f9fa684cdaeef5792d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a1897dc29557fc78e96c047aaf6fcfaa"
  },
  {
    "url": "tag/index.html",
    "revision": "b61d060b6559317f4d419342939243e1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "02b4dd9a2c3f6cf55f1e5d13a7865ac3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "baf79db2907bf050bcdd4220dc7b43a0"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "c07d9dd24d9b9b9592a9b302d544d6c1"
  },
  {
    "url": "tag/json/index.html",
    "revision": "ff973c782d05cae85d2b7b2753ef2f20"
  },
  {
    "url": "tag/less/index.html",
    "revision": "3dae306575ac486662648fc9eeb062e0"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "bd94d614873b2a91dbcedf284ac883fa"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "b3fb2865cef238cf372b343dbffecb25"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "66a245a74fae712d5d514172f2b3b75b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "63d1588c0cb33820cfe2898d53768f41"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "17f06823ff85d9617ed05045c49353de"
  },
  {
    "url": "tag/php/index.html",
    "revision": "e3881f013bd33eed04b61b7c25dcf5e0"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "528ec98a9870344469fb0e7aa80bd835"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "5ab0c56b91e3d52e72768fc65e59f2e0"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "bb3aedb76526ec36188c8b1d074a170d"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "418643cd79c3269c162ee34025cb1847"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "9e7029e1eda459adfc3cb79b69228276"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ff15f97f6c16423030b06dc878089d7f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4bef664a5278ad6b198ea680dc0adc48"
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
