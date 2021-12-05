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
    "revision": "41fe8aa3e855ffc7a066408055e4210b"
  },
  {
    "url": "about/index.html",
    "revision": "350bcd36c1b523c8a405b8fa3e8ca40f"
  },
  {
    "url": "assets/css/0.styles.7edae907.css",
    "revision": "7826720ed12cf6d4f52012d107de7983"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.517d1558.js",
    "revision": "57d649ca547153223c5e0510f10edada"
  },
  {
    "url": "assets/js/11.19a69ac8.js",
    "revision": "5912722687d77a5e30ab150fbce443cc"
  },
  {
    "url": "assets/js/12.6e8d2d9f.js",
    "revision": "dc020378c33b969557db2eb8d5da5821"
  },
  {
    "url": "assets/js/13.3dff0012.js",
    "revision": "fd5a67b19576af1a48a8400adc6411e7"
  },
  {
    "url": "assets/js/14.a304cc21.js",
    "revision": "3c9f2f9b17f316b39ae7ae9c6ccef7c0"
  },
  {
    "url": "assets/js/15.95ea6a5e.js",
    "revision": "1661773216a92c831fbf2248e2c2f614"
  },
  {
    "url": "assets/js/16.cdca213a.js",
    "revision": "fbe62dbc43f5fc533f074def78e9eb70"
  },
  {
    "url": "assets/js/17.151ef51c.js",
    "revision": "cc95f79968dc485e815ca7017f7a274f"
  },
  {
    "url": "assets/js/18.cab798ab.js",
    "revision": "5fb814714aa5ecc4b0f7ddecc962d6b7"
  },
  {
    "url": "assets/js/19.0b971d61.js",
    "revision": "35d58e86ea242a1c008efdbb1a61c65d"
  },
  {
    "url": "assets/js/2.71857ada.js",
    "revision": "be75e6e7b956105f1170b2a8b7756da0"
  },
  {
    "url": "assets/js/20.8d9ea56c.js",
    "revision": "07bc82a8acbffc29b5accf9f89de023a"
  },
  {
    "url": "assets/js/21.bcd0f1cb.js",
    "revision": "ccc306e586d41a74cfe636818407b71e"
  },
  {
    "url": "assets/js/22.488e202e.js",
    "revision": "d04accecdaf90730e90a32b8ef020d6d"
  },
  {
    "url": "assets/js/23.8c66aa90.js",
    "revision": "da5c43a6c155c94ff49c2108e636fcdf"
  },
  {
    "url": "assets/js/24.5b6b188e.js",
    "revision": "ceda678bcfc3ff98bf015c881e3b19f9"
  },
  {
    "url": "assets/js/25.cfc561dd.js",
    "revision": "079f521b98e9e39f36dd9db2bbcc23b0"
  },
  {
    "url": "assets/js/26.b0f73c5b.js",
    "revision": "33dda6b0ecbfa0c9d8c755269422ceb0"
  },
  {
    "url": "assets/js/27.41100f60.js",
    "revision": "b3b129372252511ffd21b87a263bde4d"
  },
  {
    "url": "assets/js/28.95d5071b.js",
    "revision": "32f9dae8d1a8f92e49745b2165e4959d"
  },
  {
    "url": "assets/js/29.d9a7d8ef.js",
    "revision": "3be2facb769f9804f10e465cb8a42d35"
  },
  {
    "url": "assets/js/3.de032341.js",
    "revision": "8d3e8c82802c72606507ee217c43a3c5"
  },
  {
    "url": "assets/js/30.86a0fef6.js",
    "revision": "307b1b10b3303c839eb6bba55c79277b"
  },
  {
    "url": "assets/js/31.c8b856b3.js",
    "revision": "4b5a908b24ca053648efa6a275a3a9dd"
  },
  {
    "url": "assets/js/32.e4671746.js",
    "revision": "84de1a069c7d7e8bf0643c630875408e"
  },
  {
    "url": "assets/js/33.eae76dd8.js",
    "revision": "46048c75d827426c0b8e62bfcf06cec0"
  },
  {
    "url": "assets/js/34.ebbd8b27.js",
    "revision": "f7b28cbad41167d63ffbd36ed295eb33"
  },
  {
    "url": "assets/js/35.707da4cd.js",
    "revision": "5b35530e0cc527ea48677f96e183ed2e"
  },
  {
    "url": "assets/js/36.90ab10ec.js",
    "revision": "fad29d884da82ad3f84e6d2cd51b4003"
  },
  {
    "url": "assets/js/37.b74dac0b.js",
    "revision": "aae4d0df4f4f2dad4b5aaf62d91f46bb"
  },
  {
    "url": "assets/js/38.c8a7c16e.js",
    "revision": "1a7dbbbf163b22f7f05f2f7a1be11e57"
  },
  {
    "url": "assets/js/39.518d6e7b.js",
    "revision": "e3150420b9c22d398c052eae2fd32a30"
  },
  {
    "url": "assets/js/4.a508a25e.js",
    "revision": "56c9ec67ce0817e652abca8d7baadafd"
  },
  {
    "url": "assets/js/40.92f930ad.js",
    "revision": "6f4586077909da3ff27aa5a9e5beb600"
  },
  {
    "url": "assets/js/41.e1a68a76.js",
    "revision": "2fcef5cf8733410cf9d7850fc21af6bb"
  },
  {
    "url": "assets/js/42.57ed1ec5.js",
    "revision": "8b35e1ea20ac5d6f04fbfef619e40dd5"
  },
  {
    "url": "assets/js/43.3d79fe3a.js",
    "revision": "268a748d3d76431698eb896c64bd932b"
  },
  {
    "url": "assets/js/44.7a6c1943.js",
    "revision": "5afe2592331fb227d495f7c46932d3ce"
  },
  {
    "url": "assets/js/45.c60804b5.js",
    "revision": "e1244d3013a22c24eb6a88ea8ab8b0ff"
  },
  {
    "url": "assets/js/46.33c109b3.js",
    "revision": "841d2db5e7c7bb771820a69f3e3cde85"
  },
  {
    "url": "assets/js/47.044f35ea.js",
    "revision": "0f22881f093a93c2bfad956b764682a8"
  },
  {
    "url": "assets/js/48.1dab7593.js",
    "revision": "a2039ced26a5c2c57b18f54223e36430"
  },
  {
    "url": "assets/js/49.83c35203.js",
    "revision": "16eabc9e322c8dfde7e2302d5a6aa5cc"
  },
  {
    "url": "assets/js/5.38c67df0.js",
    "revision": "8a2a92f05db446104542d392b23a16a4"
  },
  {
    "url": "assets/js/50.a85b23a5.js",
    "revision": "c23114a9881c61d0a2822737fd2e468c"
  },
  {
    "url": "assets/js/51.3f8e131f.js",
    "revision": "ff1bf792e51061923328f4854fc59792"
  },
  {
    "url": "assets/js/52.1cca7c8f.js",
    "revision": "eeec01fcf83d6d8474e18e0f65369e04"
  },
  {
    "url": "assets/js/53.5cfa33f9.js",
    "revision": "4cba82d536839171c223eeadf24c9715"
  },
  {
    "url": "assets/js/54.1e555c62.js",
    "revision": "c3ba7eb3d38dbfb4a56191a2338ba557"
  },
  {
    "url": "assets/js/55.5ae5cf80.js",
    "revision": "1a786706caec64dad27f8feea8b89791"
  },
  {
    "url": "assets/js/56.7b2a22ac.js",
    "revision": "78f4c65c310041ca98b1c8cd841fa2a1"
  },
  {
    "url": "assets/js/57.0603e2a8.js",
    "revision": "83b684ab992d2986299a5be35a64b83b"
  },
  {
    "url": "assets/js/58.ba7a99b9.js",
    "revision": "844214e9af3c5c41c62551ba9e4e55e5"
  },
  {
    "url": "assets/js/59.6acaf8f9.js",
    "revision": "96c21c28dc5f34f1e96557b7780caec7"
  },
  {
    "url": "assets/js/6.70641825.js",
    "revision": "b4d09868b1a1a71b580cdd5bcf20de06"
  },
  {
    "url": "assets/js/60.82a3525d.js",
    "revision": "deda6d863cff1a1d5e28571df75d2e02"
  },
  {
    "url": "assets/js/61.b3bb472d.js",
    "revision": "7381e2b687700dc78d46928bb01f5743"
  },
  {
    "url": "assets/js/62.4993a97e.js",
    "revision": "a1249fd39997df39f1a8d40f33259b7a"
  },
  {
    "url": "assets/js/63.c0de0a5b.js",
    "revision": "a6f0508975612092af8e41e5f6791776"
  },
  {
    "url": "assets/js/64.cccd06a4.js",
    "revision": "b9580849f844ca37f1e2f02ceb99bd2c"
  },
  {
    "url": "assets/js/65.725d5f10.js",
    "revision": "6e57fa367187d8f24c4d84b5cefb7fe7"
  },
  {
    "url": "assets/js/66.5a67cec5.js",
    "revision": "cf8d949d9fc895c21e5c312fcf3b96b2"
  },
  {
    "url": "assets/js/67.01fab882.js",
    "revision": "f5a9d4fbb79c6c1b1fdf39798ea41983"
  },
  {
    "url": "assets/js/68.865eb605.js",
    "revision": "3b05d0b94e131bc728b21fff324a96ed"
  },
  {
    "url": "assets/js/69.15fd0501.js",
    "revision": "429d290fed65ed940e81d4e5ad68a5eb"
  },
  {
    "url": "assets/js/7.76887f7d.js",
    "revision": "b9bbb8a5a3e3b65ebc9cbc5383d2ece7"
  },
  {
    "url": "assets/js/70.96335562.js",
    "revision": "65655bcadaac22726ac242c225a44f4f"
  },
  {
    "url": "assets/js/71.f695081e.js",
    "revision": "7ac361b41441e87ba2d586bc754d6dbc"
  },
  {
    "url": "assets/js/72.462b8f70.js",
    "revision": "ab5b52bcbc3d3efb425452de97067828"
  },
  {
    "url": "assets/js/73.d42a97f3.js",
    "revision": "a22cd0472d29d6ce468e884b6931940b"
  },
  {
    "url": "assets/js/74.c2826e34.js",
    "revision": "7cf8ff82a57653669c1bedb03e9c12f7"
  },
  {
    "url": "assets/js/75.52d2056a.js",
    "revision": "aa3c7e4a5bfabb38bf582f234cc71436"
  },
  {
    "url": "assets/js/76.aeea6b75.js",
    "revision": "2ff5bcf27377320012799098f01c0cdf"
  },
  {
    "url": "assets/js/8.9e5771ed.js",
    "revision": "bd9da6eb975943bb5059dfdfe134a663"
  },
  {
    "url": "assets/js/9.b61f52ff.js",
    "revision": "b223deea33c64b54f854dfb0c9bb84dd"
  },
  {
    "url": "assets/js/app.4c10be61.js",
    "revision": "f80dec33c635eba2e977135934dd846b"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "a8ea954350f14df9caba94c14a624a96"
  },
  {
    "url": "category/index.html",
    "revision": "1ff8916fcbfa58cbcdb89cb80bd370c0"
  },
  {
    "url": "category/learn/index.html",
    "revision": "845a8bd505e2bb75fd6e8d0c63fb597b"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "d9c5e7808250c34b15b32293f8a78103"
  },
  {
    "url": "category/project/index.html",
    "revision": "8d599a865a636aef9e6e9454c3667f92"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "99060e6069d9c438a84c9313fa1373b2"
  },
  {
    "url": "category/summary/index.html",
    "revision": "7189d1a09284da8c3ad40684783c158f"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "a3f97c49fe940f8811444d5ac22510ee"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "85d48372760af0825063fc008afe68f9"
  },
  {
    "url": "img/android11_1.png",
    "revision": "1dbde1e08ae1b2d4276799811a02c0c0"
  },
  {
    "url": "img/android11_10.png",
    "revision": "96bc28a5c38af8a1220a8db6858b785b"
  },
  {
    "url": "img/android11_11.png",
    "revision": "168f20e98331be431af34925c15aba28"
  },
  {
    "url": "img/android11_12.png",
    "revision": "0745a9692c68c36de61e28887c8af4b9"
  },
  {
    "url": "img/android11_13.png",
    "revision": "a8fb960dd2b7db206e858d31791ce7e8"
  },
  {
    "url": "img/android11_2.png",
    "revision": "9b31b205f514c9cc18f6ef26754a2440"
  },
  {
    "url": "img/android11_3.png",
    "revision": "423dea30b77e32f28364b512599476c3"
  },
  {
    "url": "img/android11_4.png",
    "revision": "0e2c0c660647753ac5df82c8e83b71e7"
  },
  {
    "url": "img/android11_5.png",
    "revision": "d3c329e2cada4a73e75f7453a8b095c0"
  },
  {
    "url": "img/android11_6.png",
    "revision": "17afe85f92b61cb035e3c4c2125589ec"
  },
  {
    "url": "img/android11_7.png",
    "revision": "530543d6fa82ff79023986e4efe71acb"
  },
  {
    "url": "img/android11_8.png",
    "revision": "17e3cb191ba47b44b926e17aa9505ee4"
  },
  {
    "url": "img/android11_9.png",
    "revision": "2f15321702c193053ff558326e5bd4cc"
  },
  {
    "url": "img/android12_1.png",
    "revision": "0b8b86f2da7c57552f194a5080f69f72"
  },
  {
    "url": "img/android12_10.png",
    "revision": "12358293ac45e4a99728e3b93310bfbb"
  },
  {
    "url": "img/android12_11.png",
    "revision": "9279a44e1af8c010403e17551f82ec2a"
  },
  {
    "url": "img/android12_12.png",
    "revision": "741543023ebf60c4a157642fccc8da78"
  },
  {
    "url": "img/android12_13.png",
    "revision": "970c664845b49179a42fa84974186b5a"
  },
  {
    "url": "img/android12_14.png",
    "revision": "981563648064ff13974e6abcad35abe5"
  },
  {
    "url": "img/android12_15.png",
    "revision": "49621f7c1d832f7f905c94b2d7c4e7f7"
  },
  {
    "url": "img/android12_16.png",
    "revision": "9763ca2506b327f76408c7d76d20445f"
  },
  {
    "url": "img/android12_17.png",
    "revision": "f76f54c7684e26f15f67c18960a6a5d1"
  },
  {
    "url": "img/android12_19.png",
    "revision": "71151ee2f97b489909e5c830d67f66c7"
  },
  {
    "url": "img/android12_2.png",
    "revision": "a8ca10a8552dcfdc80bba5ee7d006ade"
  },
  {
    "url": "img/android12_3.png",
    "revision": "40b1a24737b5ebe885bd95d49f7117e5"
  },
  {
    "url": "img/android12_4.png",
    "revision": "5b34b615edaf3213ce2e5ebb3ecca344"
  },
  {
    "url": "img/android12_5.png",
    "revision": "7592a0675f14ae6430604bacaf61caf7"
  },
  {
    "url": "img/android12_6.png",
    "revision": "6b37a17573b8a6612516cd121a68974e"
  },
  {
    "url": "img/android12_9.png",
    "revision": "7044451cc66914c0948ff13246ba3d6e"
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
    "revision": "54c5596816a6acbd3f2ee0e909e6d9cd"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "389c555cd613adcd3d589d838c7bf8f4"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "62f6b8b3a031e5c6188479ffc6c340ab"
  },
  {
    "url": "lib/index.html",
    "revision": "f905842e2defc33befb5ee52354129c3"
  },
  {
    "url": "lib/m-less.html",
    "revision": "d0fbfa4f62d8fe01de0ab572d9b5d954"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "c9e72d9f049d55fcf09352b09c7b741c"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "3eff1b8556c4db3d2396b2d9aa8e3837"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "4961828db19e33ddf30117c428f9f928"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "820b82270d223e0e158e09ffb7b3defb"
  },
  {
    "url": "lib/usercss.html",
    "revision": "54ff79dc8aadf15b5c9f12278f752e99"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "76f8fcdcf1db3bfd093526a17952da5b"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "364a7e02841f721443b2991b5372b8a3"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "8c34ed206ca1ae4be35acb3cedb75117"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "6e8ec4883eb0cf5a380f4aa34d4a733d"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "0c09767540931a15e8878641d29bb907"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "ddff1208cf23348797c8f16dbdd577f1"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "82240dbb01441b0e7aba117a62d899ad"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "2bbb76833de279318b7c17cc0b80acb1"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "30cc548a97fdc43799c01b41aa0ed1fc"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "ad2c000affaaafb0a07a038314a21c77"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "26466e6649c4dba27aff0d23d3e160b5"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "9fc33da979b253dfa294f290be92182c"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "dafe64b5b61753e513d507be473941dc"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "145df8a9fbeddb69c66c9444dd68800a"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "49d071ac9d7bdc69ca670c3be7c814bf"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "bf57381bf8f2f553cdab42f730069c18"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "04a210acdf2e5db777e71cb62b26167a"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "655ec906c356b92c307b749e47a1ac0a"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "84bf17251683181d4fdbfc02e6929840"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "398f9a4c3f925bf83faf16459d58168b"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "4954c7fffa296a553fc5f97f920c25a8"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "fc8fc4ffbb4de99d39eaddea8a1961d9"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "4919d630d38d9731e5ff24d5a46d6f4f"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "06ae53c065538510d5e15e6b007c1bf7"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "d4f4f648b0bfc2b0d040814f314243c1"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "dfbb6bbfbd5f7c6ed0ca2a7b6a7a67ab"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "f78eb2ee1b6c5d12a0e506628d01d4d0"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "6ac1cfdcf4a2225c9548e26c7307f79e"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "e5e8fff34154d963e10a3fa7a8f595aa"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "f2fc874639b03594ea302ba0721c67bc"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "fcfddecc78a91d2a37143bfcb8eb52ad"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "aa3ecedb563465546816d2b94d3832bb"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "f588e1b85039e6e32ac442302e1dfa68"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "33ca9f3892e9691b4bd85e2998bb2809"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "eef5fa5512b7b4f7f2ad48dbd09ca4a6"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "a16decbab7cdb839d61c1e4da0ccbe50"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "64b2a95540d77ee5b507ed18135f7348"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "8be4da57ed8ab2e76718eda4451ff1b1"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "ed15066cc706c1c89c764cd0b285b321"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "43d1fc54a2c6b68bb679aa419c61c54e"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "5c65114d1a7bd2dee62cc87eb996aeb9"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "7ffb2e125d05ac84140ffcf5aa1383e9"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "3fd4bd52984fb294653761f1233df2a8"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "1283940fde6775203b96c3c4de1bca4f"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "26b46239289fd877d632d028e94e05c1"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "1b7431490c25dc2581c7d8095c6ce2e6"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "7dd3d5bb798ec616659c3f713142f035"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "35bbb6278cb2ef833240df3beacba55a"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "c5483a7bbf322214d8c66cb364c16a76"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "e6fd6ca09b7f5d9993381854181b4dac"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "37f84901ac98cf90c9cf028f5d7efdea"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "0f026e37e95327b088c319d18ce39557"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "27af11760fb86a98c6afaafb5d4b9353"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "a7629b26450f143ab79379aa75e9b698"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "c9ec815bddc1580b0b49be8aaa556288"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "77279eb01f02081759461431b28b87aa"
  },
  {
    "url": "posts/index.html",
    "revision": "a3e8b26f92a70092a7fa53f7b429d2fa"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "73ea803208aa9b4dc7afaf277f51ddac"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "6cd696bc92bbb943bec08d7e208a579d"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "0903f32f3af8aab3ecf836d5f2da7845"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "0c4565d975b8aebcb386b19457d74f38"
  },
  {
    "url": "tag/android/index.html",
    "revision": "53adfe34fe35dcbc1e84d08657d8db56"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "e023a1b9a6199e26631a486b15b0e893"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "f561b3ce96a39fb90c2b40319d5ed2e7"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b9ebb10e6558e41f21aa5dfa0327d02c"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "ebad76aeb6c52a21a97ed3aae504ee3c"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "10ed089642fdf1876fd417d1519ab310"
  },
  {
    "url": "tag/env/index.html",
    "revision": "2c3ddb361d329dba7916050cd5ceeb2d"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "2068e8b8db436452a339d9ce1fb09cdd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "de088b4de4bcb69c39163351d6c992ac"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9831075703aadb53622b69ef0acd874a"
  },
  {
    "url": "tag/index.html",
    "revision": "f30cfa874f960d6303cd9131d9c7eb52"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "868dec64106c124793484b5430c7fed0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6c7f4871baf447e09feb2f42427ecd0c"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "52ce590ff5f63dda06631bd6541e7213"
  },
  {
    "url": "tag/json/index.html",
    "revision": "2feb239c88415db7026c35d0f00f10d1"
  },
  {
    "url": "tag/less/index.html",
    "revision": "2f49e38098a525856c0b99481dde05ae"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "392c5bd874e876eaf8796db916699f6a"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "197e9a3ba949a8516b31b865df9121fc"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "9789a8a035da4d7f2a7d0927078143aa"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "81fff57e21b97c0dda769cffa81475cc"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "406448ddc84969ba1340191fb835b8aa"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "4fca6e1f6b09d3c02295db211d59ace7"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "24f0dee8fde35e6deff05a1ce55108b8"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "d0de93f587aa7c62929a4aab3f781307"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "bafb4a9049f06fc8ce7c7610519db5a2"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "0e4b5d3a7d5dc412b6bd686db91d3e86"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "7b3d3f96d1892713fefbac0c04458cb7"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "b8eaf6105cacf96ae8c417fbeda11c5c"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "c7f7ca4697c7c5d85b7f200b8fd45c3a"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "cbcfb4264bb76635fa8ccc7d71a7ef3c"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "1a1158f6c5aff5fe89c441d24e92ff75"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "21223eb2209ff6be093cf8695baf6392"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "a6585f8ba2204e694aabd78ab83d1ee6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "babf92c6343bd71b6b6808b9e209f13f"
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
