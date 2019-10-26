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
    "revision": "5b7f17085250c807034cc02d9fb3bf6f"
  },
  {
    "url": "about/index.html",
    "revision": "547ae94a967694eec52a7b4deb37276f"
  },
  {
    "url": "assets/css/0.styles.c7aa7b8e.css",
    "revision": "513fc923aed4269fb7b6a01138e9a3e3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.da786539.js",
    "revision": "3a8e7aebd89b4d315d121fb7b9f53fb0"
  },
  {
    "url": "assets/js/11.e09cc3d6.js",
    "revision": "961da87f4169136d7a10c0f3a111ff05"
  },
  {
    "url": "assets/js/12.965158ff.js",
    "revision": "e5c0aa578c0cb1f3d83afe5066d22ba7"
  },
  {
    "url": "assets/js/13.535c0672.js",
    "revision": "e124ad3238070b14b9f50820748d352e"
  },
  {
    "url": "assets/js/14.c64c4bf1.js",
    "revision": "77b34788baa83cd764d9033919ceb6e4"
  },
  {
    "url": "assets/js/15.783cd28e.js",
    "revision": "b8ac8dd64692f8aeaef46b30f14c8ba9"
  },
  {
    "url": "assets/js/16.14e76010.js",
    "revision": "19060e6f6d784e8b3d234413110b842d"
  },
  {
    "url": "assets/js/17.3331df12.js",
    "revision": "960cc8a34b2fc0b422c1fb8db0e9ad06"
  },
  {
    "url": "assets/js/18.4c75f810.js",
    "revision": "52efca2e3f050da0d682b35ea3b38612"
  },
  {
    "url": "assets/js/19.872ed7da.js",
    "revision": "b9ddc3a8972138cdaa7345154287a383"
  },
  {
    "url": "assets/js/2.a01385bf.js",
    "revision": "8843d8364096840921237bd3ee6ecd24"
  },
  {
    "url": "assets/js/20.a49ca5f3.js",
    "revision": "8292ab0ac83e2ff29fccece085501f60"
  },
  {
    "url": "assets/js/21.617cec7b.js",
    "revision": "163116f339b9705257926f424e0eb0b0"
  },
  {
    "url": "assets/js/22.7dd5624e.js",
    "revision": "e87308b8ef099a0ec96707574f1656ed"
  },
  {
    "url": "assets/js/23.504fe86c.js",
    "revision": "04a2ef072a4b4ffc7b22b9562300a002"
  },
  {
    "url": "assets/js/24.2c2968d3.js",
    "revision": "59ded5474572745dd2540b83ed7e3299"
  },
  {
    "url": "assets/js/25.a6d6ecdc.js",
    "revision": "4b96cf02ac6825efb437c3302e8a5d3e"
  },
  {
    "url": "assets/js/26.96a1ff93.js",
    "revision": "f48beb47f9d8f0e3cb7f556d496303bd"
  },
  {
    "url": "assets/js/27.cf112b29.js",
    "revision": "037cf86ff7f7cb5fdd88abdc55ee9f92"
  },
  {
    "url": "assets/js/28.0f53798c.js",
    "revision": "03817f14a91dfd69626c5987a52b055d"
  },
  {
    "url": "assets/js/29.d3e23ddf.js",
    "revision": "70eb3274c510ebd17cf590adef97aa19"
  },
  {
    "url": "assets/js/3.d9a9f0cf.js",
    "revision": "62be4a1d643c58c20bb387baf12081d6"
  },
  {
    "url": "assets/js/30.c31df42b.js",
    "revision": "a13fe1e8b3e2da32984d7d93dc1fd58f"
  },
  {
    "url": "assets/js/31.b575ba6f.js",
    "revision": "48cf994229a1e1210f6e73ac5f38c747"
  },
  {
    "url": "assets/js/32.2404d31a.js",
    "revision": "094d6ce49bd00ad3811c35f4a7fad477"
  },
  {
    "url": "assets/js/33.da1e9618.js",
    "revision": "b311d1e72ad708b16c853921536dd4ec"
  },
  {
    "url": "assets/js/34.d8b83ed4.js",
    "revision": "bd48ed6e85fa7656b17af2e5e269b374"
  },
  {
    "url": "assets/js/35.2e562fc3.js",
    "revision": "3b7200de973919846603af479ddd7401"
  },
  {
    "url": "assets/js/36.f34efa8b.js",
    "revision": "5c4d7495653c716a0af41f2f9969a4ca"
  },
  {
    "url": "assets/js/37.bbd101d5.js",
    "revision": "cb9e05c9163dd0aed135cbea5313a783"
  },
  {
    "url": "assets/js/38.309f8882.js",
    "revision": "20999c60b0d07cfe62d3c330be448662"
  },
  {
    "url": "assets/js/39.0489f40d.js",
    "revision": "a56ff3b8a471f7b6f20e9c89871c2c40"
  },
  {
    "url": "assets/js/4.33d09d31.js",
    "revision": "d816a83b00cbeedc1b788b08039470ad"
  },
  {
    "url": "assets/js/40.5cb83f27.js",
    "revision": "bdcfb148065dd01cdd9711d7059d0e24"
  },
  {
    "url": "assets/js/41.4e779b1f.js",
    "revision": "8d31dbf28e0a9d4357638041954f1de2"
  },
  {
    "url": "assets/js/42.7461f09d.js",
    "revision": "38106a388f4b2b34a932a66401719db8"
  },
  {
    "url": "assets/js/43.72703f04.js",
    "revision": "fbe4e36cf93f44e61374d9d0009058a9"
  },
  {
    "url": "assets/js/44.f3a7bd5a.js",
    "revision": "fe6d97ef5d2088911744d7d76c0c7d5e"
  },
  {
    "url": "assets/js/45.0ad0ed8f.js",
    "revision": "2b4b56589b3812ef76ad7452188f814a"
  },
  {
    "url": "assets/js/46.c4b742b9.js",
    "revision": "0504664d386f6e1bea06abdc4dc56565"
  },
  {
    "url": "assets/js/47.d7d4c117.js",
    "revision": "5eee53f7c15ab5dc5bb103223ba86bcd"
  },
  {
    "url": "assets/js/48.9298fcf4.js",
    "revision": "360d430945b806a2d409ef3475385c05"
  },
  {
    "url": "assets/js/49.6624ce51.js",
    "revision": "c11ad8e4d50dd96f051bb76eb33d7998"
  },
  {
    "url": "assets/js/5.dabf04e3.js",
    "revision": "fef105054c4df3dea872289a14d5e37c"
  },
  {
    "url": "assets/js/50.b988e2ae.js",
    "revision": "21879aefadb7069acc775852c71bc3a3"
  },
  {
    "url": "assets/js/51.d504732e.js",
    "revision": "2c50a0fcc0be18f24c2ba1617ca24964"
  },
  {
    "url": "assets/js/52.daa3db02.js",
    "revision": "03119ba779a22a0408e3653dca9bcfcc"
  },
  {
    "url": "assets/js/53.dcb7b018.js",
    "revision": "65d099b6f723c1c82a61c52cd1110344"
  },
  {
    "url": "assets/js/54.d887ec56.js",
    "revision": "0b98e5c2afc68850495b2c48ec203c14"
  },
  {
    "url": "assets/js/55.2e9ab50b.js",
    "revision": "22947791fec538e985532883bae93288"
  },
  {
    "url": "assets/js/56.d923ee1c.js",
    "revision": "d8eae4ff646a8b1b8e03b0a32c6804a2"
  },
  {
    "url": "assets/js/6.48152f01.js",
    "revision": "cfe9f7faa140af2e77e3b66ce19bfbae"
  },
  {
    "url": "assets/js/7.a46b537e.js",
    "revision": "8db827e9418e97b4096425e02271a2e2"
  },
  {
    "url": "assets/js/8.83471db5.js",
    "revision": "9d675b9a27becce764f79059acb95155"
  },
  {
    "url": "assets/js/9.91fda8b1.js",
    "revision": "9a4b2b4c1bcedb992f75ef503e27a90a"
  },
  {
    "url": "assets/js/app.a44329a4.js",
    "revision": "07193a16b80da0fa2798cc11455fb582"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "1a3e1d1c4a303de7248f85161def8311"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "30026587d6d57b32ba2089ea2f18ea25"
  },
  {
    "url": "category/index.html",
    "revision": "72f499b5163263acf430afea9c8e3b63"
  },
  {
    "url": "category/learn/index.html",
    "revision": "8bfa3069c7d69219dc38f20458777b4d"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "aae3e0218ba72ad159f69bc5797840f4"
  },
  {
    "url": "category/summary/index.html",
    "revision": "740aab4a0e28e3b3f34de349d02ad430"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "8a159a38131567be9bd992728175617a"
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
    "revision": "c4133c4ba10a868c6cc29c2fe951e0e7"
  },
  {
    "url": "lib/index.html",
    "revision": "915ce236f5b894e29b04ee6a7b704d7f"
  },
  {
    "url": "lib/m-less.html",
    "revision": "e9aa61542daab985b6fbed67fe287dea"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "c57bf6e4d247972c9370489803fd217c"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "65a66e0fcc20332479ae8c636ad36fb0"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "f66bd3020a816df29396542f2bf72652"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "02c82e0668a6b054c2e47a24364b3796"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "c017aa2c5362b14990eabc0d1111c4c8"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "815cf23cfdba799acb5e78885e09421b"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "9dfc5d26ec296737cd5de9e70ca707af"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "8df2938bfc441c21385c53e9547a5f5a"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "d55c629a24a6193b703f9485abce0641"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "e5c3ba4df98afb7a8522646e8db10f05"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "57155594c3f9c58c08d53d434d170d66"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "c31a81eaf8bf5c2df513a9cfef069974"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "a002ab82f423a9fff25021a7d8bcd5ea"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "aea055135759ee38549995d38dd31359"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "ec45b831d847b69eaae488410245d142"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "f7f161cea235432617d8c344dea4625b"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "b2468bed4c49610da42bae6844fd786c"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "5f9a7ac0884218773d3569613a4a9386"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "0f1ae6cca985c18f790f8fbb713a90cc"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "612a2dad4756d836feab6c4b7126267a"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "23263e81614fbc49b24504339a5b7ee4"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "b753f391714632bafa835fc2b07f520c"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "9164722c6069390e7e332f6c2b6637f3"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "a8841185784c36e413581f3a33edd112"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "67a06dbab2105e183b0459b46363b9b2"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "9a1aa751d631abfcb175882591e93ae5"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "d40a44432539787918f6abf344418940"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "bd0724bcbe7a6cde74483a89dd9e61da"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "cf7ab996e9257bfc76259528a21cbe42"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "bccd07d953e2c8272d727fa0b6ff8e74"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "6f2ced7ba551baafca16233cadeb65f8"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "d6f403601d5e278262369bcbe8eff589"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "f6eade3baed9c076666fb5015930e0bc"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "1a32dd425823a28394b4827bf3015b3c"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "075668e7d15f2389e5bba882f36e36aa"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "d1c36c4eb5e26c0abed1e3d7256759de"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "fc02e6d6cb5f6d31fa48c8435b1ebf87"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "b85524a1b90bd7e90f97caac6c98c557"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "f8d1f4b515c21f6117cbdf43cb326029"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "5f1f48e64b9d8d9232ba8b6761c7da36"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "fe749e8bd0d833f4685747e29ecba55c"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "652d786e1a191d2813c4ae5b9cb678e8"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "f7b59ae92419241d11f0f3b3b786cfd4"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "2128d50b605e762261b8f073916930b6"
  },
  {
    "url": "posts/index.html",
    "revision": "fd8f9ea938dc5b7ff0a83c26d7cd8091"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "fe2461370428e837a35f67fb2559e4f9"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "b2eeb48c4459cedcf25f9569f8bf4a61"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "0917d4db89ee3457dd8e636d08210430"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "0058fc2eb47cc68f37940406f9a1f960"
  },
  {
    "url": "tag/css/index.html",
    "revision": "06b1fcdc57dc7cc80c29de8f5609ecd7"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "4b3f9791100ee6edaad043ad706473bd"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "a896c59ee65cde2a711f64f0b0df6b5b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9e537d18c4a628f57515b52684d83d8e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "51627c3117081ae4d75e7a7f1ce23197"
  },
  {
    "url": "tag/index.html",
    "revision": "45bc5814e035a2604acdc7f1b4e3e8c5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "cb74249bf55129a73da90648f99c6e5c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d67ce878eea417c5c986b573aa9d0134"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "d5be674638cdd98194bc46d49271e9cd"
  },
  {
    "url": "tag/json/index.html",
    "revision": "2cd5c36cc7296824be472832f9b7194d"
  },
  {
    "url": "tag/less/index.html",
    "revision": "4a73d97d84379d3c0198d1d5ab89a1ee"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "d8431bd43c4f2d8489205e2d1674c21e"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "6cd7c0876e533afe0db99276c09eca57"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "b32775344d9fa8eac3a93dba8dc1ace1"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "e3ba3d54fb1b734eb983c8a35e63887d"
  },
  {
    "url": "tag/php/index.html",
    "revision": "1717d438e8e5fa3128fbb44fb5118c70"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "cf218c4ee687b3c4861f35c44fc5107e"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "f1d48cd4bfc1fbe36b3edbc2ccd61b67"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "1a4390f48cedce81fcca20110f85457d"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "60809f42e658eb647bab4900efa6fa49"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "02c24fee76a8181269cbb02573c559af"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d6bf231436ff42cc51dfa413f06e500d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "20cab33a2295838d9690d00c1e201bd8"
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
