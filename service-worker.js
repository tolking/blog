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
    "revision": "304ddd434b73300fc6643aa038cf19b0"
  },
  {
    "url": "about/index.html",
    "revision": "5f7ff8d7e78a8505d7ee67e34c59b26c"
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
    "url": "assets/js/10.042058a1.js",
    "revision": "9265a372216b5440d8146c31aa55218b"
  },
  {
    "url": "assets/js/11.906b0bee.js",
    "revision": "2861b94f0dda9bc83d8f8e6f49181d02"
  },
  {
    "url": "assets/js/12.0945b7ac.js",
    "revision": "04738507a9f900a21c49a2a0ef7b2c1e"
  },
  {
    "url": "assets/js/13.01d5ccd2.js",
    "revision": "d13b071a20dc55f63dcc9f12ceb13713"
  },
  {
    "url": "assets/js/14.112c538c.js",
    "revision": "3674e1f7fc480fedbd0fde028441956c"
  },
  {
    "url": "assets/js/15.f16c03a4.js",
    "revision": "9f735ce277e520850e65dee33a0d8cf7"
  },
  {
    "url": "assets/js/16.2691a612.js",
    "revision": "4fc28b46ccdc067cee3820499a8fb47c"
  },
  {
    "url": "assets/js/17.0dbf121d.js",
    "revision": "2dac2d427f5bdd4e71792f0862d4fb2e"
  },
  {
    "url": "assets/js/18.822c1e0c.js",
    "revision": "92b2d74fa50d6a9d565dde71856d294b"
  },
  {
    "url": "assets/js/19.37ca6be5.js",
    "revision": "c87802bc6e572cfa306396444fd8aaec"
  },
  {
    "url": "assets/js/2.5f455285.js",
    "revision": "c312a2768049aeb53d9540efc03fef2b"
  },
  {
    "url": "assets/js/20.920a31a2.js",
    "revision": "2e52bd2eb7e7409b592780842db4d5ca"
  },
  {
    "url": "assets/js/21.fd80f37b.js",
    "revision": "819b6ad4ac12ce0a2129037a00b14db4"
  },
  {
    "url": "assets/js/22.b3aa17e9.js",
    "revision": "93e97c526a295394258847776f1dd58b"
  },
  {
    "url": "assets/js/23.26e24ce4.js",
    "revision": "a1238329ff627e6511c9e55481f75dba"
  },
  {
    "url": "assets/js/24.c3a819ff.js",
    "revision": "dfccf294eb83a3b0e1d73d24fd0f2183"
  },
  {
    "url": "assets/js/25.172e6521.js",
    "revision": "8a89801556c636c1b6cb3f129fbbefbb"
  },
  {
    "url": "assets/js/26.66535100.js",
    "revision": "ec3a7fafc2435e0ff009baca558443a8"
  },
  {
    "url": "assets/js/27.120891cf.js",
    "revision": "81ff6346b3009f0eb9f998bc83e40ad6"
  },
  {
    "url": "assets/js/28.6c963d5d.js",
    "revision": "70ac8ff1017ec112d0aa3b6947b0c95f"
  },
  {
    "url": "assets/js/29.285200ce.js",
    "revision": "c83cdc8e81a82e4422774b229b06cb79"
  },
  {
    "url": "assets/js/3.4a502c0d.js",
    "revision": "5dba0943e070b282243515c77dff52ae"
  },
  {
    "url": "assets/js/30.ff875037.js",
    "revision": "29d5dea51e6e43d9663a5214b0709d90"
  },
  {
    "url": "assets/js/31.ed17e064.js",
    "revision": "c1b19c34da0185d61debfd69390542dd"
  },
  {
    "url": "assets/js/32.e32f18db.js",
    "revision": "72fb89ccf53f66d85f8ffdc923126f0c"
  },
  {
    "url": "assets/js/33.d25e4a57.js",
    "revision": "22a0fde784af401b7030c189272da0e8"
  },
  {
    "url": "assets/js/34.f008a922.js",
    "revision": "9465b00915728e700811370fcfb0586c"
  },
  {
    "url": "assets/js/35.b97c8ce1.js",
    "revision": "d3a8e50eb60e8a017eefa39600bcfa0a"
  },
  {
    "url": "assets/js/36.55d01569.js",
    "revision": "c581e0bbbab4ac1810fb19e832bb5d6c"
  },
  {
    "url": "assets/js/37.c1b66437.js",
    "revision": "9c956bf175f3da1a7f54a74e04d31169"
  },
  {
    "url": "assets/js/38.fe6a92f0.js",
    "revision": "eb23f749f4133fe9290341387b03ff97"
  },
  {
    "url": "assets/js/39.c02bc1fd.js",
    "revision": "7ab561c947e7caf8ac6581a64c64bae1"
  },
  {
    "url": "assets/js/4.4bbcb1df.js",
    "revision": "6ac55e6c393c88fb1c7d9909802e60a3"
  },
  {
    "url": "assets/js/40.3615883a.js",
    "revision": "e5cf3fce92f2968cef400e043194f8a5"
  },
  {
    "url": "assets/js/41.1d6776cb.js",
    "revision": "c8e247ed4d9e88d73e0317895aed894f"
  },
  {
    "url": "assets/js/42.f5e9c7ac.js",
    "revision": "66de7ced135e58beec96ed3a6a1a4527"
  },
  {
    "url": "assets/js/43.1712c9ee.js",
    "revision": "a51d78fe055edc2b7c191f27824ea46f"
  },
  {
    "url": "assets/js/44.e839c058.js",
    "revision": "8f85b2d4de8852b61a7b2e72c2210671"
  },
  {
    "url": "assets/js/45.df76d3b9.js",
    "revision": "9ece2439e6ceebf8a21120831f2adf9e"
  },
  {
    "url": "assets/js/46.9428317a.js",
    "revision": "7a234c2e362f6f1ecfd5b75b10fef5de"
  },
  {
    "url": "assets/js/47.ccc57a52.js",
    "revision": "d03bc8c8d58e50fafe63b8e16542fa42"
  },
  {
    "url": "assets/js/48.ec85f6f7.js",
    "revision": "e5a38cee71eca37de6fbc33645bdaea6"
  },
  {
    "url": "assets/js/49.c4d8a896.js",
    "revision": "93fe8168bda7e301be8012b91b6ac4db"
  },
  {
    "url": "assets/js/5.873eb74a.js",
    "revision": "690f223739a8ee58456cd54f771f833d"
  },
  {
    "url": "assets/js/50.fbd4fc28.js",
    "revision": "9d216a0893fdd92a7c242cc25a578a32"
  },
  {
    "url": "assets/js/51.628d6b49.js",
    "revision": "8262c70e2f2c85a8d914757a5fc157f6"
  },
  {
    "url": "assets/js/52.ec87be02.js",
    "revision": "9a5e72207918eae2af652dbbaf0dc84b"
  },
  {
    "url": "assets/js/53.1e04e16f.js",
    "revision": "5d433f835b8ee9e0124bd3c624cb0476"
  },
  {
    "url": "assets/js/54.d973ec48.js",
    "revision": "140453787102b210ee1234e2fec4064a"
  },
  {
    "url": "assets/js/55.86ae88d4.js",
    "revision": "3f9532edeac26c7cd2f98224854de84c"
  },
  {
    "url": "assets/js/56.cc8fceb0.js",
    "revision": "268afc1b918abc374566c6ba668d89b5"
  },
  {
    "url": "assets/js/57.f6e2f3b2.js",
    "revision": "04dc9341788e43ead3132e867565a9a3"
  },
  {
    "url": "assets/js/58.c7545d40.js",
    "revision": "f234f801b9452df1755073fe39a3a71c"
  },
  {
    "url": "assets/js/59.6af34fce.js",
    "revision": "0f9481a6006baf61ed3e1235d1f5ace1"
  },
  {
    "url": "assets/js/6.40b7f879.js",
    "revision": "d3a91691f5b52a47b6d2e1c039eebb9c"
  },
  {
    "url": "assets/js/60.ce78f3ab.js",
    "revision": "e17fc03bb20e4d296355b324aeaaca62"
  },
  {
    "url": "assets/js/61.9683179e.js",
    "revision": "1e50f5884f496e6cf6ba5c08ff6a86b4"
  },
  {
    "url": "assets/js/62.17cb013e.js",
    "revision": "86c97095cba6e8dbcc32562dc032c672"
  },
  {
    "url": "assets/js/63.9bcb0823.js",
    "revision": "1b1953f000c456252545109f7c167fb0"
  },
  {
    "url": "assets/js/64.6856ebda.js",
    "revision": "5f65930633afe55f0cd3749a67d34944"
  },
  {
    "url": "assets/js/65.d2ffcd3b.js",
    "revision": "0f3dbbd0ae1d1d4dfb7bc998c29c185f"
  },
  {
    "url": "assets/js/66.f8e7f12d.js",
    "revision": "caab4fe8dea823f696cf5e5d8f20bec5"
  },
  {
    "url": "assets/js/67.183021ef.js",
    "revision": "807176e90111fae33ab65920aacafcdb"
  },
  {
    "url": "assets/js/68.8b195fde.js",
    "revision": "9a082bfde41439ab7f16541bcbec3228"
  },
  {
    "url": "assets/js/69.c252c448.js",
    "revision": "3b362e623e81c50a8ef97fb16804a878"
  },
  {
    "url": "assets/js/7.4d2e6b58.js",
    "revision": "1d801c843d21f782814392d06c506ebd"
  },
  {
    "url": "assets/js/70.2d52f438.js",
    "revision": "eb22ad10bf1275ff2ffcd82f18703134"
  },
  {
    "url": "assets/js/71.29279084.js",
    "revision": "920cb030cff6e28297029b21b811ef7a"
  },
  {
    "url": "assets/js/72.d4c30953.js",
    "revision": "2c87b2511baf1b1ae0b24c08ef16f90d"
  },
  {
    "url": "assets/js/73.335b1d07.js",
    "revision": "5d6e8d3e96a02837640fdeb6443aca30"
  },
  {
    "url": "assets/js/74.0341bc02.js",
    "revision": "42539854356016ba175a2a65bf274ca3"
  },
  {
    "url": "assets/js/75.c426fe03.js",
    "revision": "cf29c18e8d81b550886d9c1eb3b65e94"
  },
  {
    "url": "assets/js/76.989a4752.js",
    "revision": "4292a3b4e91c0c0bd52c4fbfaea03ab0"
  },
  {
    "url": "assets/js/77.ab9d740c.js",
    "revision": "64be7001de7debec9c36f5b598b3e38a"
  },
  {
    "url": "assets/js/78.ba32d722.js",
    "revision": "005972682b62cff2c0766fd953fac7b2"
  },
  {
    "url": "assets/js/8.3c11d53a.js",
    "revision": "fee4ee6b514ada892836efb44cc499b8"
  },
  {
    "url": "assets/js/9.006df612.js",
    "revision": "0c85247bd4ff56ffabcf90a9f3ce370b"
  },
  {
    "url": "assets/js/app.60e8f300.js",
    "revision": "897c3032e070289b49513aed645d87f8"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "238d4f48fb86df4a4963a6d8496afc71"
  },
  {
    "url": "category/index.html",
    "revision": "8cdbe38fd4ed0a45da025075523658b2"
  },
  {
    "url": "category/learn/index.html",
    "revision": "0c39756186aa9699480a5b4131a45b69"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "e0d464cac73799060d2b99dcbbe2e017"
  },
  {
    "url": "category/project/index.html",
    "revision": "bba28ea24476db1100edb98b94f1661e"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "d79abee9247dc077eaa892985f86420f"
  },
  {
    "url": "category/summary/index.html",
    "revision": "8b42d8acd9ac5864ba96ae1d81d08d5f"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "8ba7fe39aa0428e0c8c53054a4ead45a"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "6188b5bb2a22d8372fa61a930e68672f"
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
    "revision": "7c28843c9f3c08d88398fa9f4953df86"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "58fa32fc2179411441a548369898e6c0"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "68363c549bc0cfb8a4d5fd598ab7a0f0"
  },
  {
    "url": "lib/index.html",
    "revision": "5b670e016c130fd2cbe26792cc3f42cd"
  },
  {
    "url": "lib/m-less.html",
    "revision": "035d9eed4801e07399d579c4540ea3a1"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "d852fdd574c647fcd51582b7d7191eaa"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "480fb6c62ba9a6557c8318abb2b5a22c"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "7e8da5fb2ea4fddf3546d54d708b8ee8"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "d80bd2350931e098983716a1ebf0ed6f"
  },
  {
    "url": "lib/tagged-operator.html",
    "revision": "96eaa7e568bc98c4ea5b59034aed5954"
  },
  {
    "url": "lib/usercss.html",
    "revision": "d28ba74a802d76810fbe54f75a1638e9"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "70397b316c3a0b52372490e33588df2d"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "8e3505dca523b101d112926743a16522"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "e88b624af8075c14ce072c46787af697"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "a43574587b1c0829e932f241f9afed4d"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "14273c6558fb9d6d20cff8d384108d10"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "2eda14d8b02ce62adc1f50aa67a5392f"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "b0482d93962a29fbca9956398f2525c6"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "449b3c2bc592575918e2705103de72e0"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "96598de4a5b9f8efe361b2d1cc8c96c0"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "dca7ca37ad41aef6ead9f65085264a78"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "b68a9b847c4ae303d8daa288cc11a2f7"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "962ceb4655ca898f87b15b392ec8b0de"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "3c42ac35a95b008dd16908cae0b2d098"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "05560a2cc5a786aa0f1ae2a9b2f5153b"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "a20af372e59deed8d4a73a5df7399d28"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "5b2e1bed4ec4b327d1a8cbf5645fe4ef"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "eea27a3c24d67521ca48e1ea5a3422d8"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "c58b5c0c00b605104f0ee0f3a216c787"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "4aabdcc7b0391a13bbfed27c0f87f5b5"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "679e638cfdbfdc11b7e952e4ff56a30f"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "8afa204788241fa45ff99dc9cf6d7f78"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "0514d69236b60c942ce8221a5ed6d519"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "2b438b0d38b887aa0400eeb537b40775"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "e49fe9ff8a6fdefbd366efcd4c8a0059"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "a6a6500c43242da15939c70065c2f282"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "7c98ec7c2cd9cbf71b341e02c5a68510"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "fff27e9de353af5a8651aa16bec65da5"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "fee2a882bf60fcd7761409918a22ac5c"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "df51e42d1399813e87acc0b5da77dce4"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "558bfdda4f642cc3459efe29400c9bf4"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "0de494443499c66fa8680fbc66eaa75e"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "075963d03b24fc8a0b164bf432ad6383"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "b776f7ce1e96a29b88395ad34b853b7f"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "9b2bd00299b1150cc5abff4ed5937d7c"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "79acab4cf1d31c8051513e14827b6e22"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "558b8cb048d63d919fa2294485e92c95"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "0b5b23e2a25fae8268ddd32c199a5cf3"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "fc656906cda4f8f89d7a2e89168009f0"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "f40cea3cf51caa60c27bccb5f9c109f2"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "83a157e01e307fd5a863766f9396cc5c"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "8e0f219543857ed3ef9980c5f627689b"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "ea9eb9421e98d9685fda3aaad27757a2"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "899b9b632a8e3a27937d1f478db768bf"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "e816e3b32195f7797837502e67ce9da0"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "46ef7f86bbb1f8c1c173467d8fcf9f9b"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "69c655bf4142d2c3470cf97151dde382"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "912a2af52d3749774c988a4bb34cb325"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "94983b291e33b8abaab445ae8cdb981f"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "7070e5e2a75cf6aa7f59c58b84a3a274"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "0404f249de7ef2aa73c57531e21931fe"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "281fbd0c8f12a0a90db37339650fd0d6"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "0ccb18939dc97e2300b00ffe530a2b00"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "2decd90e4daba740ad1fd3c1db789358"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "935b931d8fca8804a8fc8072961f8cfc"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "80886ce9d00aba1fde78f9fdfc173686"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "a3b4d16945becd61658e457be4bd870a"
  },
  {
    "url": "posts/2022/03/13/createfetch/index.html",
    "revision": "1bd8a775104bf01987fa18cc415fb5f6"
  },
  {
    "url": "posts/index.html",
    "revision": "b6f945fdec1855f3a074ae7cbe330c58"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "2b3f09b2adb8848a0fb16f791ddd2675"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "e4c02c3565d909d4ca1ccc1e80b3af75"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "d313e21b83e5f6cd7ad3568d3faad8cc"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "f2a1380b3a4f00bdd6aa438e42aa6028"
  },
  {
    "url": "tag/android/index.html",
    "revision": "fee7580e2388f7a5d7cfc37bbc955aa0"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "be2f84c122f6caf7592bb65e85505bb2"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "ed408325f371fd6dd974070f7d647043"
  },
  {
    "url": "tag/css/index.html",
    "revision": "55b4c668f98758347321b5d1c619629f"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "516ac8a55f976614ddd566aa62cd8495"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "6fca754fd182d997dfcb7360d5e16a0e"
  },
  {
    "url": "tag/env/index.html",
    "revision": "8782785f4bd012baa8543e3bad1897d0"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "27c4b30f466541c490a6318d2cbb8e19"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2b0ff51c72814e5e2e8be73c4f7d09cc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4e93d59c28db86e48e5a6889f69eeb3a"
  },
  {
    "url": "tag/index.html",
    "revision": "0e99ed040960f9f70ea4d11463ea2a16"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e00169bc2b666a304257035b6ccf3956"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7e9a35f4cd3614d64beda1e1e477a3c9"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3adddbc73f133c14c6854f91b84f7187"
  },
  {
    "url": "tag/json/index.html",
    "revision": "bbe6970ba217b93d9b5a4fa2ce051b29"
  },
  {
    "url": "tag/less/index.html",
    "revision": "5ffafd2baa294ec43f8c5be4ab90c8f8"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "59d158d1a2e1b00e4c81497927280b3c"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "36747d2c494563b7d30c716acf4795c1"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "f5c70ffbc37244730bd7fb01bb2793c5"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "743e5b56e5189f08286065cb6cd9c272"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "34a8ac1d84e3391140a777290d0e4f59"
  },
  {
    "url": "tag/operator/index.html",
    "revision": "7c02f46ac0f8eaaaeadb289dd6257436"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "6fdded7a78234835dbe88140ba9ead95"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "f1b5662d4333ea9b2596b4316a07460e"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "f35440f001338be7b7beeb9ce1220bba"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "9b942c8ee9202687b8ea9fe14076beda"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "d4eb7a1f0d2329a43f6877e5f463f075"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "474db9d197aeae0c18773a631c80faad"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "8414df4e36b47691f49238de6c2362ae"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "2a0d356eb6dcefc528eb44f52643b479"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "fe39438f64cf527f9f7357bad9dac758"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "80fe9c1df364379231b8bf871a74bc07"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b793dcc162b9be47102e5daf7aa54e1f"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "ebbe8cbfa6ff7532d6d8fcfd1599e865"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "52764713868fe7628d06e411e85a8c70"
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
