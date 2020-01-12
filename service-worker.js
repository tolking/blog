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
    "revision": "55e8364c8f5c886e27e54a9b136ad79c"
  },
  {
    "url": "about/index.html",
    "revision": "14a25ec52fe9b83b8901b8abf6d068d8"
  },
  {
    "url": "assets/css/0.styles.3d3ce84b.css",
    "revision": "f55f9ac14af00d09ee240c14451440a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.19815a86.js",
    "revision": "3bb67001525705f532f1c847a76b1887"
  },
  {
    "url": "assets/js/11.19339e45.js",
    "revision": "f6b1ae5da65019f73e8d991ee0c6b565"
  },
  {
    "url": "assets/js/12.69092e5b.js",
    "revision": "01d99aab227d898a64313361a03a3509"
  },
  {
    "url": "assets/js/13.0dcd4bb3.js",
    "revision": "20e4b44fb1abec5723b36a336ba453dd"
  },
  {
    "url": "assets/js/14.47b084e9.js",
    "revision": "77b34788baa83cd764d9033919ceb6e4"
  },
  {
    "url": "assets/js/15.6293734f.js",
    "revision": "b8ac8dd64692f8aeaef46b30f14c8ba9"
  },
  {
    "url": "assets/js/16.b578dcc5.js",
    "revision": "19060e6f6d784e8b3d234413110b842d"
  },
  {
    "url": "assets/js/17.ea50fc99.js",
    "revision": "803994c127841cacc9a372f5d20b9829"
  },
  {
    "url": "assets/js/18.07ad246f.js",
    "revision": "254350f242bd9ed8203cdb4d4cb75473"
  },
  {
    "url": "assets/js/19.ee768ddf.js",
    "revision": "409499fe848c435655557ca6c97c1622"
  },
  {
    "url": "assets/js/2.f3eb49af.js",
    "revision": "84bb081a1b3ee84d04001270113bf140"
  },
  {
    "url": "assets/js/20.7ba7cd15.js",
    "revision": "dc0f11d72ee14a31cd518c46d39dfb29"
  },
  {
    "url": "assets/js/21.3c7036bb.js",
    "revision": "8e2d129d97607f9e3ec5e798c2c1e897"
  },
  {
    "url": "assets/js/22.af81ee00.js",
    "revision": "efc9bfc7f1bdbc74e64da1c0f3379be4"
  },
  {
    "url": "assets/js/23.42453761.js",
    "revision": "04a2ef072a4b4ffc7b22b9562300a002"
  },
  {
    "url": "assets/js/24.3b818b98.js",
    "revision": "59ded5474572745dd2540b83ed7e3299"
  },
  {
    "url": "assets/js/25.b0cdae9c.js",
    "revision": "a505581837a33a712b3d49d42dadfaf5"
  },
  {
    "url": "assets/js/26.e20a58f2.js",
    "revision": "f48beb47f9d8f0e3cb7f556d496303bd"
  },
  {
    "url": "assets/js/27.c1877b27.js",
    "revision": "037cf86ff7f7cb5fdd88abdc55ee9f92"
  },
  {
    "url": "assets/js/28.974d0744.js",
    "revision": "67dde24214e4bab4c18150d501663bf0"
  },
  {
    "url": "assets/js/29.d04b01ab.js",
    "revision": "70eb3274c510ebd17cf590adef97aa19"
  },
  {
    "url": "assets/js/3.9c38ed6f.js",
    "revision": "9bca9f552b81f1325de98d8704e5f3c8"
  },
  {
    "url": "assets/js/30.14a31fae.js",
    "revision": "a13fe1e8b3e2da32984d7d93dc1fd58f"
  },
  {
    "url": "assets/js/31.e8fb2076.js",
    "revision": "98f935fe1607b69e2e9094e1b396e562"
  },
  {
    "url": "assets/js/32.1cf5f41d.js",
    "revision": "094d6ce49bd00ad3811c35f4a7fad477"
  },
  {
    "url": "assets/js/33.d3846ca4.js",
    "revision": "b311d1e72ad708b16c853921536dd4ec"
  },
  {
    "url": "assets/js/34.3607ee6c.js",
    "revision": "bd48ed6e85fa7656b17af2e5e269b374"
  },
  {
    "url": "assets/js/35.96b4484e.js",
    "revision": "263dc861e3157f15bc887147f03e0a34"
  },
  {
    "url": "assets/js/36.baea6c3c.js",
    "revision": "5c4d7495653c716a0af41f2f9969a4ca"
  },
  {
    "url": "assets/js/37.b650de23.js",
    "revision": "cb9e05c9163dd0aed135cbea5313a783"
  },
  {
    "url": "assets/js/38.a5361744.js",
    "revision": "20999c60b0d07cfe62d3c330be448662"
  },
  {
    "url": "assets/js/39.94deb7d9.js",
    "revision": "a56ff3b8a471f7b6f20e9c89871c2c40"
  },
  {
    "url": "assets/js/4.e99c3e5f.js",
    "revision": "0b617e769b890df31dc69e290cf4c770"
  },
  {
    "url": "assets/js/40.b8321a36.js",
    "revision": "bdcfb148065dd01cdd9711d7059d0e24"
  },
  {
    "url": "assets/js/41.36cdf03e.js",
    "revision": "8d31dbf28e0a9d4357638041954f1de2"
  },
  {
    "url": "assets/js/42.012b7199.js",
    "revision": "4a863e1e0da4dd66f04649d276285b57"
  },
  {
    "url": "assets/js/43.c04a44e6.js",
    "revision": "87c3988462f4cb9b6c4b992f00aaa186"
  },
  {
    "url": "assets/js/44.a670bdf6.js",
    "revision": "c70b3e4b6bf409d0a0f1fdb62314af23"
  },
  {
    "url": "assets/js/45.0cd0cc75.js",
    "revision": "2b4b56589b3812ef76ad7452188f814a"
  },
  {
    "url": "assets/js/46.6575d1f1.js",
    "revision": "0504664d386f6e1bea06abdc4dc56565"
  },
  {
    "url": "assets/js/47.6d7cfb7b.js",
    "revision": "5eee53f7c15ab5dc5bb103223ba86bcd"
  },
  {
    "url": "assets/js/48.99a0756f.js",
    "revision": "360d430945b806a2d409ef3475385c05"
  },
  {
    "url": "assets/js/49.f22f02e9.js",
    "revision": "5c7b83f73a047dbd27940398b23a9fdd"
  },
  {
    "url": "assets/js/5.7304fd33.js",
    "revision": "facae1ff59e3f05c460b46fb80e84fed"
  },
  {
    "url": "assets/js/50.723dfc10.js",
    "revision": "fc01d78aed1926fdeb270cfb9d1cb2a8"
  },
  {
    "url": "assets/js/51.85160fc0.js",
    "revision": "937b441f8b7e65f9fd8b2b632a644346"
  },
  {
    "url": "assets/js/52.3f96e2d0.js",
    "revision": "90c642ec5cb610c95fe99d866f973a80"
  },
  {
    "url": "assets/js/53.ff9aad7f.js",
    "revision": "04416eec4aab6db2b89afed97e0ca423"
  },
  {
    "url": "assets/js/54.e9945db9.js",
    "revision": "3c24766680a868ad84d449afbe942de5"
  },
  {
    "url": "assets/js/55.95356498.js",
    "revision": "483f5aac8b82aefa95228fb80d414b4b"
  },
  {
    "url": "assets/js/56.30f11c3f.js",
    "revision": "2cb6270e1c52d5f9cfec4491b32de563"
  },
  {
    "url": "assets/js/57.45e68bad.js",
    "revision": "fe9e6209b484c40e401a5be4f3b57bad"
  },
  {
    "url": "assets/js/6.ae8c0cf1.js",
    "revision": "aeba112dd4cb0650eb8ed0a8029a16a6"
  },
  {
    "url": "assets/js/7.bbe1ae0e.js",
    "revision": "600b0bd69bed5c9f67e61f1e98e2e8b5"
  },
  {
    "url": "assets/js/8.7562d785.js",
    "revision": "2e0e57d5ddd98c8db92467deebc1059e"
  },
  {
    "url": "assets/js/9.a7d9cfd8.js",
    "revision": "2037036ef30469d089ca999b005dfae4"
  },
  {
    "url": "assets/js/app.5e4662d1.js",
    "revision": "17500b1ac247ff228a8b4154f774b1d5"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "2f8531ab074f6a69569ccd1d55dc5315"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "0b19aa0029991a536a06750429edae0f"
  },
  {
    "url": "category/index.html",
    "revision": "0c8cbeebe707a67ffc468c95a2c21097"
  },
  {
    "url": "category/learn/index.html",
    "revision": "4a84d41dceec5ab0b922d6357dc22a66"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "166315f6664f366a9dabda1a8c4776ea"
  },
  {
    "url": "category/summary/index.html",
    "revision": "d5bbbdbd79f6664b2f21e6a635b1b63b"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "79d7176330bad9390372669ed3c94163"
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
    "revision": "b7d6f6610df8ff0f1554d124b60024a0"
  },
  {
    "url": "lib/index.html",
    "revision": "45559e4dd6b7d96049867619cd0b33f4"
  },
  {
    "url": "lib/m-less.html",
    "revision": "a2ce4c153e8a99a0fe94b68dc5f586c4"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "dc8c919b47ef09f96a36bd56b0e96abb"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "01568e63e1403d681d476a22c6c865a5"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "bf80ff2ce723c65bc1a9c67425f34a07"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "2228126d8a9748dbb48b114cc1bf2348"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "e59c15bc607b7645705242335161f62f"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "64baa0da766bc9ed90c94e45dbdd4123"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "8faccc43663d18f3ab8487cb4c137f2f"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "a969749f29fde6b9f7ea868b9277d367"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "9202f19288abd0cb709b142f6f92eef4"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "2ebb8cf793501ba1f7d17b1db7f3a3d9"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "5eee8d5b41150ff6265ba8488a4a2e55"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "8b2a3b8b3b4a889669de626e286359bd"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "c681bb1be474906aeebbd28bb468d637"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "b4ea4e07f0dd8a8fe093df293646364b"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "a258ced7760df035e7284f1c255f066c"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "2ba82031e832fcc7bf0eec1c5b95492b"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "8ce4039a7415db0167de972cedc56ed8"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "b55649e3c4ccf6fe9c8f9a44f59bd17d"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "22611ea68c017a3309d33e06013fdd14"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "2df0e78f7fbc989bc71d926fc79f0dc2"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "142c60e6c8bcf41c5b9ded9e0a56a677"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "bbd4fbe0680dde42372cdbfadb219a34"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "95e53ae6d6dc4fe99cab33e16a3ee0a0"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "68334cafce757db5ed64df72bc05c144"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "cb861442df4cd636bdb3d49ed461194e"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "db11d578f79baf35f2fa07563dea9dc0"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "ae37efafc019f580cfd194809b23cc89"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "e775b8178f2a1ccfa502f6a43c718b8e"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "bf579bbc545901135e762f59915cad3a"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "02eda68f476c65d33f409877af78724b"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "856d06165a39e79351df8639a35b5400"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "c5ceefb0cebce19d5cb290b4ebcbd387"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "a3b5d739873fbf7f9a019ab0fb32d3a0"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "69fb9e3ac11cad74c03689da8940a3ef"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "df359a25e26d74cc0017fa132892f17b"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "be81bea3f94add7e0d0f1b31dd783628"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "c1ae964af29f1c5cda90f2d8e8641809"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "9aa8271ada3f85b43db3a316961f79e8"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "ff527b992c45fac778ac680c4a6268b1"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "abd75eeaedc7b30ff8fc00cd64bf2886"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "578590c78499972d41096890622229b2"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "cbfcc552beb59790091cf38e734a936a"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "8cd307981ff184aec5536ea013e1e9e3"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "274791ea2bfd438d32ae81521bc0a467"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "6035d5c088b63d1d3c35114ff0fcb85e"
  },
  {
    "url": "posts/index.html",
    "revision": "0828ebc78790d1e2e66eafd6ba10e622"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "d2b7df7dd14db94582c2a174659022fb"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "d6d1c32a53048d2e6b9a9b600230b7a0"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "daee7518cee4d3cbd053e18a0629fe97"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "7593272985a5e78ce1c83708ef321289"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "b5e151efa0a7567686341b80c59db2af"
  },
  {
    "url": "tag/css/index.html",
    "revision": "26d9fb805a4f0d6a5666d7fbec267a6e"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "58e849d5b94decacb18460ba5deba5b5"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "2114fbe1396300e4b9a9c505fe1fbf00"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d4dffb9353130cea8c7162ccaf458ee7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d9afdf2d9c056370e145f700d0efaf6f"
  },
  {
    "url": "tag/index.html",
    "revision": "46a8fe6160fdf11082384046d5247fb5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f1d5c7b853b3d509c359501350e76f49"
  },
  {
    "url": "tag/js/index.html",
    "revision": "12f48df12b9cdb722714220d1cb6e217"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8c3443a257d3a12ca7eddf0e518f1b01"
  },
  {
    "url": "tag/json/index.html",
    "revision": "813fd9ca2fc4df4acd38be5e2f929e68"
  },
  {
    "url": "tag/less/index.html",
    "revision": "937814319346198b88b61511698e8545"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "3c62aa2469011b54894e2d32ff97cc15"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "fda9b2a99a3727280ed5815d7913a4f3"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "76cd639add9ecba0d8b0019b1f4a9e19"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "4afd224d33e1ee79da714d348ea8575a"
  },
  {
    "url": "tag/php/index.html",
    "revision": "2859dbbe521e977e9f5a6374a3fffb0a"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "ba87ef27dcf46ded25bdc4c1444e32a7"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "20401151e7a8eeb0f3e8d42bae3abdad"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "845709a28b0f0dc9391bea272f0941f8"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "82f17918d817f513bd0dc8c57b203f36"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e5561b33597c8cafbcdba7f653c61004"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0317c2cd3ea9bd5b75fcccfcf1195bba"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "889f282a0ac9b06e24d7b71d3411ec2a"
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
