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
    "revision": "11242a3965fe6a0d4c7d724eb96a9a0e"
  },
  {
    "url": "about/index.html",
    "revision": "7012525ef35d7db784859a6180c2f32a"
  },
  {
    "url": "assets/css/0.styles.1b524f34.css",
    "revision": "d4e10ffbaf197323043676dcc352bf74"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b1a61af2.js",
    "revision": "a97cbd06c95e945526088bfdbd623fe5"
  },
  {
    "url": "assets/js/11.8353d6ab.js",
    "revision": "54ed044c52422c2caa88ed88646ce61d"
  },
  {
    "url": "assets/js/12.896f640d.js",
    "revision": "473756a942df60ecccf103a1b0958b81"
  },
  {
    "url": "assets/js/13.5e64b585.js",
    "revision": "67b78a71d1d0d006c384fe5a13fb9676"
  },
  {
    "url": "assets/js/14.fe201d2d.js",
    "revision": "6937046ad5a855f1d41e2f695064a9b3"
  },
  {
    "url": "assets/js/15.518166f1.js",
    "revision": "8165e238a46591d7d259ffe6a7fa8dd0"
  },
  {
    "url": "assets/js/16.0eacca1a.js",
    "revision": "306a3332d486e1e16c9b411462d112d5"
  },
  {
    "url": "assets/js/17.db7b6606.js",
    "revision": "57e20d2f11c6269bbbbe1ace26602de8"
  },
  {
    "url": "assets/js/18.db902832.js",
    "revision": "1d9b5afac3d948433f3b191d601fc477"
  },
  {
    "url": "assets/js/19.0a3c73bb.js",
    "revision": "1f3c69e03e879298f5b9b4f142dfbe3d"
  },
  {
    "url": "assets/js/2.df4c0bda.js",
    "revision": "f272a16669383881ad45390fdfb91a7c"
  },
  {
    "url": "assets/js/20.257d6b9b.js",
    "revision": "a40aff5b9f7eed84f12b8e6bd5524e62"
  },
  {
    "url": "assets/js/21.c91df8b3.js",
    "revision": "a870ae1cfeb66e2859431f8f5bccbd83"
  },
  {
    "url": "assets/js/22.c8f37798.js",
    "revision": "d7203ee174400aad3235977cffa9578a"
  },
  {
    "url": "assets/js/23.a8042410.js",
    "revision": "161fc7195e674f2917b7571aef7ef338"
  },
  {
    "url": "assets/js/24.eb6619d7.js",
    "revision": "76ce2a31f08ddaed52aaf5ab081a052a"
  },
  {
    "url": "assets/js/25.e3e75a39.js",
    "revision": "00183c9500683f2d9cd458be3b396c2e"
  },
  {
    "url": "assets/js/26.94afeb89.js",
    "revision": "53a854aa9bec4ec5bd83773353f6db2c"
  },
  {
    "url": "assets/js/27.3f27a289.js",
    "revision": "67da87b4e83ba26b917fdfaeb0fd3bcf"
  },
  {
    "url": "assets/js/28.21c520e6.js",
    "revision": "7ec474c3f4297629c6e4c79bf50fd674"
  },
  {
    "url": "assets/js/29.ea5eb6e8.js",
    "revision": "674cbac4387ea872924ddac772cb6cd6"
  },
  {
    "url": "assets/js/3.4aaa1059.js",
    "revision": "0d3479837c3e804f1e0c30b880d06553"
  },
  {
    "url": "assets/js/30.b86e9d75.js",
    "revision": "727586267a57d3c8b6e93f28c73576b4"
  },
  {
    "url": "assets/js/31.0bf57d01.js",
    "revision": "a98d5351ca6b83e5f50f50bd4ded231d"
  },
  {
    "url": "assets/js/32.84ed5f4a.js",
    "revision": "5d4efed8520c5479fdbdd6e5d96b2e87"
  },
  {
    "url": "assets/js/33.46a4d8a6.js",
    "revision": "38264a22396a017e5a34e93e60aac311"
  },
  {
    "url": "assets/js/34.ef3c538a.js",
    "revision": "349b3d004b02745186ac1089aa3b05f0"
  },
  {
    "url": "assets/js/35.56fc0f7e.js",
    "revision": "1c4cece3adf438751556758f5fcea24a"
  },
  {
    "url": "assets/js/36.4ac56cd6.js",
    "revision": "48b4175638e9c50f30f1ef8c67b342ac"
  },
  {
    "url": "assets/js/37.13346659.js",
    "revision": "043f50c9504115197f71d62c7d21e270"
  },
  {
    "url": "assets/js/38.dc1b068a.js",
    "revision": "dde0924f79a3a4c006a7236583d3f892"
  },
  {
    "url": "assets/js/39.d73cd73e.js",
    "revision": "ecc87bdac1fe09329f31992928a11d37"
  },
  {
    "url": "assets/js/4.c48d55be.js",
    "revision": "aff54357e95b28fab561e2ae9543f46e"
  },
  {
    "url": "assets/js/40.4e5f6013.js",
    "revision": "ece6a439627d4172483d24ff3c356995"
  },
  {
    "url": "assets/js/41.2df8bd96.js",
    "revision": "482bbdf56133fa4d7fe237be8ce248cd"
  },
  {
    "url": "assets/js/42.3f2e1b0f.js",
    "revision": "70fe8e65da077de38056f81012a47edd"
  },
  {
    "url": "assets/js/43.b65f253c.js",
    "revision": "f31935c6401f2add4823a98f13eb24ce"
  },
  {
    "url": "assets/js/44.c36b0b66.js",
    "revision": "460a985653306995ad50805ce1ba5cb3"
  },
  {
    "url": "assets/js/45.a27ea4a5.js",
    "revision": "7542cb66ca5dfe302fbf704d84b22427"
  },
  {
    "url": "assets/js/46.fa305b0a.js",
    "revision": "613a42fe685d85e408e8893928b8ff78"
  },
  {
    "url": "assets/js/47.a70320b3.js",
    "revision": "1eeefffeb6c6477adc982d3fa739c276"
  },
  {
    "url": "assets/js/48.5d90ebe1.js",
    "revision": "cdad75d59576fdfc5a172d1acc2f41f6"
  },
  {
    "url": "assets/js/49.6ab40c8a.js",
    "revision": "ae498c447f458fd80647a7f0ce0dfbbb"
  },
  {
    "url": "assets/js/5.14b2571e.js",
    "revision": "7c9e7e9ac1e52f2231b8052104d876fb"
  },
  {
    "url": "assets/js/50.bb999359.js",
    "revision": "ebff4d85b3e859ce2caebdbd2f8aba49"
  },
  {
    "url": "assets/js/6.8aca3f56.js",
    "revision": "e4e451841b49685e1afecb0c19f67634"
  },
  {
    "url": "assets/js/7.f158ee33.js",
    "revision": "0ca793cd32833f2eaf3df32782a4cc5d"
  },
  {
    "url": "assets/js/8.b4d1f6f3.js",
    "revision": "ebb359fd307ec07d56972237031b28fa"
  },
  {
    "url": "assets/js/9.ea6066fb.js",
    "revision": "b37ce2abfb9395297ad117cf5e38c916"
  },
  {
    "url": "assets/js/app.bc853321.js",
    "revision": "90bb3006d15decf825b03a3f0161ef69"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "98a3883e77e0d2395aa41091f00e016a"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "2dc7512fdb241e8dc18c33952a6b1419"
  },
  {
    "url": "category/index.html",
    "revision": "3a532d4bd29660759d80351a9285936b"
  },
  {
    "url": "category/learn/index.html",
    "revision": "7449965098b8a58d4a6097ac05e1ff02"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "dd258b4e1638daaa1f9e4c8b11ab7cf5"
  },
  {
    "url": "category/summary/index.html",
    "revision": "196905d11b7e1942985285a9aebbcde2"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "af6ac7e33b00086fa915e4d862b83b8e"
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
    "revision": "511e6d0db0248fd560d152a762b58b9b"
  },
  {
    "url": "lib/index.html",
    "revision": "30c6585e29486e7a7b504b936c49e246"
  },
  {
    "url": "lib/m-less.html",
    "revision": "fc7cc4f3c139e80e02ee46a024f800f2"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "58060a43841bcb4085d901578cfa43c2"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "9dca5b0e12bbf8fbdfee99496f29354c"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "bbe82dbcee066a90a4e0b89a2fa829a0"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "d904c035a6469fffefe077a425a13b9e"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "0d6cb9d63fafcffed3164f0ee72a46c1"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "4663c20e8247791d20d5ff9d7c837f8c"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "caad1dc3e45210713cf683037086497a"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "f18df425ae43bc393a1fe986bd0641d8"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "e4b42463cd05efb5dba56171f95a6a92"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "9c800ec36439a60313709a73fb50c48c"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "01dee736c1e817943d558b16388097e7"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "7b1f1900846342477db8b81fc9e4d1f5"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "510f941e1d64622cce4ee4cc22abf0d5"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "1bcbbaa4b807622caf045ccab63e3b6f"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "c4cc258403ab40f6dab8f71ff23e6faa"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "ed5577bbf520c7479fdfb40bc9775ad2"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "ab3eae79ee98d7b4d70cb6195bd3910d"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "729cae247fc569ddd092d62c71f3ae09"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "13775796b9384a6e49afba26c81896a0"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "1ebede14fc394b2b14131c184795fbac"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "551ab21b49eafeeed8cc8da117a835f7"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "50095627a6f59937304fe1c0588185f5"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "eabee0ebe7a2b5f43f1417a2962a605d"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "55be6eb1a39f04610606fc432142d5c1"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "a53fcde565033736e7b6d7cc3b9ccdfc"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "4759b6eafa14060bb4d717922c362ccb"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "ce1b5edcb59b6722b4bbad17421a583b"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "057d616ef9a644613d4393c1412e1b10"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "a77766fb766385994991fe94aa46851a"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "ea0873b01f053ab18b5018e81bb7f500"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "9773e1305d651243da51661d8e8b14f6"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "8c69a3b998baf73dfc26e662518faf7e"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "d43cb56c56032871fce794c623c2db9d"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "7043616454e76f624f2a445d9acf90bc"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "c5bbded4d9af03d15b37cab9ab85eff6"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e03c57f30377062107b53f6a6f1cdfd7"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "b38075fe0e0f89a0733f339547c492d3"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "cbd9c2dd88c226fa42a2808f8ab00077"
  },
  {
    "url": "posts/index.html",
    "revision": "c357e60b8099deb0d45538a6ba4cc06f"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "733f6aea0c69e4fd1a7b64781030dd48"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "0e801496624d0160c176554e6f28bb25"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "a2db3c3496e91465e4227f5189f3e422"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "1f9e020d0157ec7d19e149a493f76b10"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9e31fabdb9bd90374314d71a98332815"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "abcc9314753f09b26a01512250dac304"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "b7f1fcf1034c0f38dd7f59489fcea0b7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "40ded00aad8f55060214dae015946c3a"
  },
  {
    "url": "tag/index.html",
    "revision": "1e9f3fabd1a07ef2ca5ea739a3737dc4"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9ee669d9e88ef7222733321f184a10d8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c0410df5f11c578cea31f09dc39075da"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "c72e96dcd03438765c9d15c4ed3c7d89"
  },
  {
    "url": "tag/json/index.html",
    "revision": "18c80f200e5ce688aa821c8b742a2bf7"
  },
  {
    "url": "tag/less/index.html",
    "revision": "b426f0261f872aa1b6c6ce0fc8617223"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "8a3b8dd3c21e3f1514cb48700e3807be"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "15577ddf57269fc776f1d6c48e8aa7dd"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "e5a03eb06db3929bde18a3ec3fa163bb"
  },
  {
    "url": "tag/php/index.html",
    "revision": "4efaa89b93368ec0e4351cc41d849f6c"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "c39ea09656011de664d93339aee0811c"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "38fabbc81f96f326434cecb2b477df1f"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "47654f512eb357c59a950a23e7848b32"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "f7a38a6f5a24b3181a215ed61862a8cc"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6fde338b8012eea11f98083325e36a03"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "88d6886dcd00377e693a56654c86b9f6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a84ccde85e193cabf6bd4d6b90230963"
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
