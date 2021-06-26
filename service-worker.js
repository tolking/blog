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
    "revision": "c23944dee5bddb3903a289b6db7bb16e"
  },
  {
    "url": "about/index.html",
    "revision": "1bbaef5c5b672941b62bcb1280fdf6bb"
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
    "url": "assets/js/10.8f5403e0.js",
    "revision": "21680ef57a97cc624b0008a9abad9975"
  },
  {
    "url": "assets/js/11.0acbb21c.js",
    "revision": "20fb9025eb2e77d42807148371596e6b"
  },
  {
    "url": "assets/js/12.fa0e596f.js",
    "revision": "8598cb07ab4a30151c2cab2a9c96dd92"
  },
  {
    "url": "assets/js/13.d6a5edd3.js",
    "revision": "0039910aa8831f4620891f5cfae0d817"
  },
  {
    "url": "assets/js/14.8c277cc5.js",
    "revision": "7523a9dd53bf118019ca8c3980f1ebba"
  },
  {
    "url": "assets/js/15.051f5613.js",
    "revision": "607bfb79da0b0355bebb3a7e1ee75d40"
  },
  {
    "url": "assets/js/16.9a5c5703.js",
    "revision": "e9e1d53936977fd63303f81762d9a9f8"
  },
  {
    "url": "assets/js/17.94c57e8b.js",
    "revision": "982f66f502e84f6d2615121afee61094"
  },
  {
    "url": "assets/js/18.7148cdab.js",
    "revision": "7352c63e04f4e31f9aef02b5d44b5db2"
  },
  {
    "url": "assets/js/19.08cc14f5.js",
    "revision": "417108aa6034540e351b9bf0c70dfa6a"
  },
  {
    "url": "assets/js/2.c9dca91e.js",
    "revision": "bbdc1f79d0926f1aed4241b994ce67ea"
  },
  {
    "url": "assets/js/20.5cc7ddae.js",
    "revision": "ef2dd9783a5389044879169b46a4073d"
  },
  {
    "url": "assets/js/21.3fcb7e00.js",
    "revision": "2ad380468a89094a94ac06a20eed6718"
  },
  {
    "url": "assets/js/22.93fd91ee.js",
    "revision": "12305e730affd95ebc2e6ba57d09a2dd"
  },
  {
    "url": "assets/js/23.1f5e7952.js",
    "revision": "94df42b704c00f2a57f3ec1e436dc67e"
  },
  {
    "url": "assets/js/24.3e57d8b4.js",
    "revision": "247782c5dd11b515452193adca2e0ccc"
  },
  {
    "url": "assets/js/25.7c42b1e2.js",
    "revision": "e92ce367664ea1efb2c09ab598a5e538"
  },
  {
    "url": "assets/js/26.2981274e.js",
    "revision": "899ff61e686ec3efcb02e866511c4e5c"
  },
  {
    "url": "assets/js/27.c826272d.js",
    "revision": "a4be4773e5a86dee73adcc5793a734f5"
  },
  {
    "url": "assets/js/28.8cc9dfdc.js",
    "revision": "cd858207928bb44cb26708d7d1fac858"
  },
  {
    "url": "assets/js/29.8d9eee21.js",
    "revision": "c08dd3df78aa419dab4c06b50beaf53d"
  },
  {
    "url": "assets/js/3.a5f58823.js",
    "revision": "15a053c744627fa4e362a7bca8a677e8"
  },
  {
    "url": "assets/js/30.0818b1a7.js",
    "revision": "8619b094d7bce1d8e1cd717e62b88748"
  },
  {
    "url": "assets/js/31.cdd40bbd.js",
    "revision": "92af675d72659d404d5d5be656dbd72f"
  },
  {
    "url": "assets/js/32.c6a8be7e.js",
    "revision": "72e8bc715fe6747be43b28ac451de9a7"
  },
  {
    "url": "assets/js/33.3bd16c44.js",
    "revision": "dee923afa0e3b55ff2c3787b8c161b38"
  },
  {
    "url": "assets/js/34.81013a14.js",
    "revision": "3ef69df46ccfa867242d51343d0000fa"
  },
  {
    "url": "assets/js/35.dc96b99c.js",
    "revision": "f2aafc3a93f3a359871a225515189b1e"
  },
  {
    "url": "assets/js/36.f9f24e34.js",
    "revision": "d31306cdeb7675025f7f98ba8abe4558"
  },
  {
    "url": "assets/js/37.f20b26aa.js",
    "revision": "18dcb8fd93af8e1c2f3a89719f427cc4"
  },
  {
    "url": "assets/js/38.5d5c4fd3.js",
    "revision": "4da5cc318553a9a0ab421bd7a189e61e"
  },
  {
    "url": "assets/js/39.c3a8daeb.js",
    "revision": "173b5d3334b30b63554526d7e23d0d0c"
  },
  {
    "url": "assets/js/4.2f21fb24.js",
    "revision": "22ce722aa2ec502b84cec5179b11b50e"
  },
  {
    "url": "assets/js/40.3debdd14.js",
    "revision": "b638d58212b39a52b4ca9d0abb05c899"
  },
  {
    "url": "assets/js/41.aebb5321.js",
    "revision": "c391ad9b11d4613c138c75088c002e7a"
  },
  {
    "url": "assets/js/42.589a85e6.js",
    "revision": "82ef4bdcff482b009420e76f7d6c66cc"
  },
  {
    "url": "assets/js/43.1b8d48ee.js",
    "revision": "4ae8daa4fabf2f549e46c8cc20851e33"
  },
  {
    "url": "assets/js/44.a5d33f7f.js",
    "revision": "f03cd515c2e02104f2c11ab71f5375ff"
  },
  {
    "url": "assets/js/45.394431d9.js",
    "revision": "155359fee118cbc55d19d6f710e8bdf6"
  },
  {
    "url": "assets/js/46.66e11898.js",
    "revision": "c869d561876b603f6a7af1ce0fb221ee"
  },
  {
    "url": "assets/js/47.b69e13d6.js",
    "revision": "19328f82265c37ea3d231057f0892d7b"
  },
  {
    "url": "assets/js/48.b5e096dd.js",
    "revision": "a830d781b9cb64bb515b6253da023526"
  },
  {
    "url": "assets/js/49.b76cafbb.js",
    "revision": "ac2fa0e3cf169462dd834b094b0463ac"
  },
  {
    "url": "assets/js/5.db8db667.js",
    "revision": "b93cac372d355786a215d393ca0a1e24"
  },
  {
    "url": "assets/js/50.fbeda38e.js",
    "revision": "0e3f06b04b9c8b644aa80a44f840a8ee"
  },
  {
    "url": "assets/js/51.23aefe91.js",
    "revision": "cf8b5e8ca2b887fa96300803a2b9c1f2"
  },
  {
    "url": "assets/js/52.2ab6cadd.js",
    "revision": "3e9becc90459aa0c24f5d8f4f4d80c20"
  },
  {
    "url": "assets/js/53.76ce1929.js",
    "revision": "1e41e7f5dda15743f8a66cb031e02007"
  },
  {
    "url": "assets/js/54.7c7528d9.js",
    "revision": "3bc88d453741b154429f128fc0c7a466"
  },
  {
    "url": "assets/js/55.b4079e33.js",
    "revision": "01de286dc9c210b2d01a548787e4ce03"
  },
  {
    "url": "assets/js/56.eb0409a4.js",
    "revision": "242968bc628a4b134c46ca33b5b702ee"
  },
  {
    "url": "assets/js/57.1b69693b.js",
    "revision": "376f69cb4f253c5e24fe8602c7984b97"
  },
  {
    "url": "assets/js/58.3157a89d.js",
    "revision": "8bafdc3949e08d965da72b95a251a252"
  },
  {
    "url": "assets/js/59.978687a0.js",
    "revision": "25555f195f2f1f078a8fa60e3ed8a0de"
  },
  {
    "url": "assets/js/6.f8c9bd71.js",
    "revision": "4ad2814a22535edd53ea968580447238"
  },
  {
    "url": "assets/js/60.8bf5e6e7.js",
    "revision": "2481b4ab8f85922841d3e2a5b907655e"
  },
  {
    "url": "assets/js/61.91f93d9a.js",
    "revision": "8b63f7f36cbe7a0eba3bb14be02aadb7"
  },
  {
    "url": "assets/js/62.569b2189.js",
    "revision": "a8aea6b1868614835538352c660e0ff0"
  },
  {
    "url": "assets/js/63.561b6c4f.js",
    "revision": "d86d19a99621774b7a115cbb9c0e0386"
  },
  {
    "url": "assets/js/64.85d9c0e7.js",
    "revision": "df6ad1395978402fbfbb0c3cff9d7c9f"
  },
  {
    "url": "assets/js/65.de7a0755.js",
    "revision": "fb5696330ca670a8a6e913810c738641"
  },
  {
    "url": "assets/js/66.938e800c.js",
    "revision": "6fb8d95fe652c9a6b6cc9cd28170e74e"
  },
  {
    "url": "assets/js/67.8ea8ab67.js",
    "revision": "ae4d13b73ae167a509c295c740da5d42"
  },
  {
    "url": "assets/js/68.b9374a13.js",
    "revision": "298f7ea6d46f32015812aaaa6deaa11f"
  },
  {
    "url": "assets/js/69.9ca2f656.js",
    "revision": "6a7c9aea5b9fa411ece6c9ea489bed6b"
  },
  {
    "url": "assets/js/7.f221412e.js",
    "revision": "d1724e938249419b4cd7bdc1e9609192"
  },
  {
    "url": "assets/js/70.afbb5ee0.js",
    "revision": "0bf485faf3eb2ce334e45528b56353a7"
  },
  {
    "url": "assets/js/71.181e1f6c.js",
    "revision": "a65af685ec46520310eff679f730aca3"
  },
  {
    "url": "assets/js/72.c496c7ea.js",
    "revision": "0ebe394ba6f622d10e28ee46c6baab10"
  },
  {
    "url": "assets/js/73.0effd285.js",
    "revision": "3304111405f4ef94c6e603e88fe263ec"
  },
  {
    "url": "assets/js/74.f2f8f671.js",
    "revision": "30abfea9fcf0d932512b5ef8d662208f"
  },
  {
    "url": "assets/js/8.7f5f583e.js",
    "revision": "01727bb650191268b08dab866fecea3b"
  },
  {
    "url": "assets/js/9.2be3aecf.js",
    "revision": "fbc6935ec06340498754bf5ba2c84eb7"
  },
  {
    "url": "assets/js/app.489ccb6a.js",
    "revision": "e31538fe3bad89a6b995b2085b67da9f"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "c95d0edc4fd5ee13bd2acdecf3d9988f"
  },
  {
    "url": "category/index.html",
    "revision": "addd78ef19f280367634808a44f780e1"
  },
  {
    "url": "category/learn/index.html",
    "revision": "e764d224c6d732781980be9454332562"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "0de92baf6bacc5a2e19da24a12cb8dcd"
  },
  {
    "url": "category/project/index.html",
    "revision": "c907e93753f72384b18370334b935875"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "afd5cdecfe042cfd6a024a54f125bd37"
  },
  {
    "url": "category/summary/index.html",
    "revision": "9d51301929a2671988ddac352520e301"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "519af4f22952c61279f880352cedd50d"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "4412e4e0877b9a37c75a9563ff304624"
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
    "revision": "d1a46d7e9cbe4f767243ca255b9876d7"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "41cfad45d07e033bbac6b626d05b16cd"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "8adcc80345868126bcaf1e1eea8c3f6a"
  },
  {
    "url": "lib/index.html",
    "revision": "66ee6095e1278726cb8716ef439ab7fa"
  },
  {
    "url": "lib/m-less.html",
    "revision": "ef45c4bf751c1b57187ab0483bd16d90"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "bccdf6ef453608ab99fa7ba9e9d13896"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "5e8937c005c6b0bd1382b2d3df4b72ac"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "b96b83ba71dd53dc09177c24dcd2607b"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "85198fa302388ec71957cccaf08dae50"
  },
  {
    "url": "lib/usercss.html",
    "revision": "4bf4f7b527d74e4a6b128ce8c4b27259"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "3c67db815dc7e977a83d26a29779c8b1"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "15ca514be17677f2235fe691fc3b7a8f"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "8612d2cf9711e9beddc34840d9173ca0"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "ec2859d9aa2dfbb311d235816f746436"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "a3583abd8815ae125d3733b11d8e56bd"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "7e78baea11d6a1ce1e8f521b90f60f71"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "cbb25a545ba34dc32a9fae9413f9e738"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "ae26c196cc808b8e1852ad9a853f58d3"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "fbcb7ee935ffca8dac079d6657cb9eda"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "6df5fec03cad2038fac91fce828f6b9e"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "37e0054508c09f2a3be98c5b104112ea"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "51c57af365accfaca42e2bcc9535101e"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "84000c893e26c12e19bbf08deddce9d0"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "341fd0d5a36180b6683d7323149e6dd2"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "234be3cc2db5e436cc8c0738f9d6e284"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "8c2f3033c43004e7bbe865813d2211a0"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "8720acabd1afb69b0114b8862d91aff8"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "2e23a2372c78f48dd0f393eb480f699b"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "6f7da8896e7bae2764b724022e35055e"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "ee3efdbc4069d156fd0cb1f6ffd7162d"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "8cb1f1022713e51360c931df0b05ae08"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "4697dfbe52d80930cd79e29b6d097d42"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "0fa6d3fa6ea52e296e36382a9cbf4a60"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "37bb3b212243192a919c41dd4d2a6212"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "b6be195528fda243f4c94c46048263b8"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "4e634680bfbbc2c972ed375aa00f39f4"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "2a78e578c82983feea53ac1a52a2762c"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "8b346fca83f2fcbd040e1a7b422d7c5f"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "86b37510391a68eb9b4272c03846b77c"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "74a7b1777ba0a2d632a7030a436157b1"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "f207bb88edbd07a400891bd5410616de"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "a0a11e1da10b5bec2023ee85d9a45524"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "3403e95b50d6b104ba02f76a57d989cb"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "2ab077b77514f0d5d5203c1aa317e62c"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "fb5ec944751e505c0c3a0df4e8665666"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "796cf188f2df9e5efb0e98964cb4b405"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "4b90257b732459841374af5ffa63d670"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "6f436535613ae74f306b65412115935a"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "ccbfae256a2c218b598716f5f52bba8c"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "5dd60e6de5be4cf74d17b72a277147e5"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "87202c21d1af25d329f7cf94e98da72d"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "6eaf1a284b3926ed8d39af0f859e9984"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "83f031e6b67deac04235dce9c4283016"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "5ccf2b13fea1e8f49467d3772e21b0aa"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "192f05f2fe6c7c89bc7a54abdd2ec1b0"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "6c216c568f1e21fdc132e9c483afa97e"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "f7906a34e2c4efcb14fddc6011f687eb"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "3fef0b29f0b0e1e6774371f0e9e17018"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "c0eb7230045ddc6fc3e7c12a9350e28f"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "da347c8759ae5ed6926622ffa9751fdc"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "f6c86899b7b4b7a1286f027d4ecf1e30"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "5349b21e8a350b21e9b0638eb19622a9"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "d2e7896dd53be6828cff41d889d64bb1"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "ada757d84e75eec545f5143878de9979"
  },
  {
    "url": "posts/index.html",
    "revision": "abc6612e7d49b7ba0c8f0b746a1bd5e4"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "01f645e66131b77b4aacaadc317caa78"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "1f41d2e7d6aac206acd5299bedaf8439"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "0318d30a6912f2fc5a790603c297c52d"
  },
  {
    "url": "tag/android/index.html",
    "revision": "1dab0778af243f79ecbf87ccda043bf3"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "c3013a2b1ba65b247baf29ea624fdddf"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "1507aae3d7a07be1563cf3748b8d8a95"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c43fd89067c574c1499a8147cfe94e07"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "0d78679ef4a87226f91152ae8368ff2c"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "2e525689d3e75bc487aadad01b418b54"
  },
  {
    "url": "tag/env/index.html",
    "revision": "978a512eb5643d09e5167c5067d7a16f"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "1121afd71ccc6a0af66ad0fc3b89f2a1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "28b170549492bc1ff9e5eeb91110c1fd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "19ede9680d515ae5b0c1e64cd27aa4e4"
  },
  {
    "url": "tag/index.html",
    "revision": "c50cbcf60897beb78bd89a5a3e35b419"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0fc9c500176293ce801614a93dad6e40"
  },
  {
    "url": "tag/js/index.html",
    "revision": "37f38e8605c631f2e6a3d9af1715d3e2"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "b29b87104253267dd6058e820b946083"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f7f3439f019e9e8cf58c2e7cb47b8567"
  },
  {
    "url": "tag/less/index.html",
    "revision": "1524bea8142fa00ac00a328cb7b4a548"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "e78b493dcb7b1224b37763230d22fe61"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "aa856b5169bef58cc2c997dffae3e35f"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "9311f8aaa58cf6aa611b1005d1724e04"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "fd571ac4d3ebc4a02119793562012807"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "9e068420766e0566eb436e7e85b7944a"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "7a3e2918b529e3f0463dd4da799d3433"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "80155b1a16ceaafee237d9d221a192a0"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "c5694d00192aa44c3b71146856048284"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "3e1928fc216809300210337db8f14d60"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "c526db0cbb28f8d7b30550743414571d"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "32ca07f45ffd809fe587bc700c479f37"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "63a36ff66916fb9216af1473435d03b5"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "8c7071b3b29eb25ec2cac47a19fecf25"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "5296d1310b4a2137abed6363a4da324a"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "4218cb9b7490aec66af199583bfda300"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1592c654b894ba86e0e122380f9c0f08"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "bb98daf0b9f1fbb714e22437361aba45"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1db5989a3081ad81e7c9e3c45fe568f7"
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
