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
    "revision": "94579ab471abe3436bb1cb21f949c132"
  },
  {
    "url": "about/index.html",
    "revision": "bfd12153bcd996e99642bb403f0198d0"
  },
  {
    "url": "assets/css/0.styles.06e5908f.css",
    "revision": "e14d83bcc0f6a5351392b6f5b6d12146"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.862cd4b1.js",
    "revision": "9ec21af633f982d644952f6ff67ec724"
  },
  {
    "url": "assets/js/11.73b76bc5.js",
    "revision": "568f3300aaf59c37d815643f99c306c8"
  },
  {
    "url": "assets/js/12.6bd7925c.js",
    "revision": "9c0f800cb396611825cfd9a254a846ff"
  },
  {
    "url": "assets/js/13.b7b0072f.js",
    "revision": "9cb27fc94d0f404ec116f54c499178b4"
  },
  {
    "url": "assets/js/14.2544d1c6.js",
    "revision": "9e04f0a74892d8ece421c83fe305e078"
  },
  {
    "url": "assets/js/15.d904e56e.js",
    "revision": "5379be2c4741688f59cf5a89e931baab"
  },
  {
    "url": "assets/js/16.a02f3aa4.js",
    "revision": "eeb50b610470daa37b310c96e3ea385a"
  },
  {
    "url": "assets/js/17.0c9825bf.js",
    "revision": "9b47a78e9a911ac9fd4ec5e54ef97949"
  },
  {
    "url": "assets/js/18.a8907541.js",
    "revision": "59ccd3118faef46c1eeffd0b2381a49d"
  },
  {
    "url": "assets/js/19.557df32d.js",
    "revision": "07a90e1b6e5e7eaf828b344302b3ba61"
  },
  {
    "url": "assets/js/2.4669734d.js",
    "revision": "ca9e657c853bacc5d64906dc53e7543f"
  },
  {
    "url": "assets/js/20.16973a8d.js",
    "revision": "a22ef924414d6265c416b553519e2e6a"
  },
  {
    "url": "assets/js/21.662d3809.js",
    "revision": "7aeefa4b4351dd7983d0df4ba8e521b1"
  },
  {
    "url": "assets/js/22.8f816611.js",
    "revision": "3bf62ff56f0a37d5ff6a5e5b25980a60"
  },
  {
    "url": "assets/js/23.86202f42.js",
    "revision": "0ebe6e5a0f497e9572cbe73b542ac9e3"
  },
  {
    "url": "assets/js/24.9cb19781.js",
    "revision": "720cf6b0493f515a4f315e5b56c1e953"
  },
  {
    "url": "assets/js/25.2780fac4.js",
    "revision": "aa8e9ece3a811934118f0fccb547e1cc"
  },
  {
    "url": "assets/js/26.133e46e3.js",
    "revision": "48025af7fc9462ca045371a6933c2a3d"
  },
  {
    "url": "assets/js/27.a63f9b13.js",
    "revision": "e3028eeec7badbd7621f7d33af9a67be"
  },
  {
    "url": "assets/js/28.a6714c70.js",
    "revision": "a0ad953ce0b7fc8b3e32776debb4e7f3"
  },
  {
    "url": "assets/js/29.0628a72e.js",
    "revision": "800815a11efe3ff3755b09f547e5e101"
  },
  {
    "url": "assets/js/3.ca3ccf9a.js",
    "revision": "f9af5439cfacde4fa892c73b58ff44e7"
  },
  {
    "url": "assets/js/30.eb3095af.js",
    "revision": "68739021753f3eeb7b797187e4c8c2fd"
  },
  {
    "url": "assets/js/31.5ad94b9a.js",
    "revision": "354a8fc9d383020fbfb4fc8ea8c19405"
  },
  {
    "url": "assets/js/32.780bf329.js",
    "revision": "d2cf882db951cda1c7f02cdbfbf0e90c"
  },
  {
    "url": "assets/js/33.b08c431b.js",
    "revision": "d6990b7ca5b41ded9bf09c137af3b6c1"
  },
  {
    "url": "assets/js/34.d6bc50e6.js",
    "revision": "64c78450d2b40731a67c2f7288cd2492"
  },
  {
    "url": "assets/js/35.769d043c.js",
    "revision": "242d14bccf87394a6fcd9b78e076f02c"
  },
  {
    "url": "assets/js/36.95efebe5.js",
    "revision": "6da190400314e3823161e4e6f3c71c9b"
  },
  {
    "url": "assets/js/37.f6f6985d.js",
    "revision": "7fe61a109d374ea8b36d337c74241043"
  },
  {
    "url": "assets/js/38.65b9e82e.js",
    "revision": "40d0b34e7e8fb2590e2169221d5501d6"
  },
  {
    "url": "assets/js/39.649e4a4d.js",
    "revision": "485cb34baf062c0bf125ed58772ab5b4"
  },
  {
    "url": "assets/js/4.82f3330b.js",
    "revision": "d427ee4ebb41c11078eb39f232b8c8c5"
  },
  {
    "url": "assets/js/40.a7175ad6.js",
    "revision": "3e5cb2bd92fb57218bcf76bac05d3473"
  },
  {
    "url": "assets/js/41.8e06e55b.js",
    "revision": "8b06da77ed1af959036c2c58972944d1"
  },
  {
    "url": "assets/js/42.78e9080b.js",
    "revision": "77e1fe26dba1ebd613c7cbdd96b0278b"
  },
  {
    "url": "assets/js/43.56950dbd.js",
    "revision": "b4ed10207adb778cda06436e1df29c0c"
  },
  {
    "url": "assets/js/44.7859efd1.js",
    "revision": "afac392c80cd21af67ef31ca004a7d5b"
  },
  {
    "url": "assets/js/45.4dffc620.js",
    "revision": "beafd1e4673630598c704516bf5340ed"
  },
  {
    "url": "assets/js/46.ccadb91c.js",
    "revision": "444dbf08d2480c2e64851311a0400b1b"
  },
  {
    "url": "assets/js/47.82067955.js",
    "revision": "c02d1d5f839880a4b4bb84a226440f4c"
  },
  {
    "url": "assets/js/48.22cca077.js",
    "revision": "c545224ddf3fa7d9b1f213897d901996"
  },
  {
    "url": "assets/js/49.29b02f24.js",
    "revision": "fd1a14729c0461608f85f4c02e3ae580"
  },
  {
    "url": "assets/js/5.5bcfc897.js",
    "revision": "f19c6dda18300e304345dd951deb3f61"
  },
  {
    "url": "assets/js/50.7924b33c.js",
    "revision": "6bb4dbedbd59c86e19c4d51a82573b9b"
  },
  {
    "url": "assets/js/51.1cbfa618.js",
    "revision": "a1904edb2730c04c54cc2d716ce63104"
  },
  {
    "url": "assets/js/52.ae2ec667.js",
    "revision": "8fb4c608f1cd0b37d5c31a4244680885"
  },
  {
    "url": "assets/js/53.43fbf7e8.js",
    "revision": "32019372343bbae1ebff44322c8b9837"
  },
  {
    "url": "assets/js/54.2e08ac08.js",
    "revision": "3c234020f87574a080a71c2cb7f82a5b"
  },
  {
    "url": "assets/js/55.fa71f7f4.js",
    "revision": "81c2bc2208387c434ca5b4cc42d2b492"
  },
  {
    "url": "assets/js/56.80724d42.js",
    "revision": "dd9576740376c2a280fcd5aa1a0058a5"
  },
  {
    "url": "assets/js/57.e025f431.js",
    "revision": "7110eb9a6a13eebf7a576c9480123269"
  },
  {
    "url": "assets/js/58.f0f5760a.js",
    "revision": "afbcdc0ae1057ed80cfd5003320603e1"
  },
  {
    "url": "assets/js/59.75b62ed6.js",
    "revision": "178b84fbe762338f0a691fa55408cc6d"
  },
  {
    "url": "assets/js/6.b3128395.js",
    "revision": "e5c87ff24b64a69a869a3d67dc6847b5"
  },
  {
    "url": "assets/js/60.ae6c987d.js",
    "revision": "052fa51b7349273e96b6a39a73a31d14"
  },
  {
    "url": "assets/js/61.55166d4c.js",
    "revision": "0f48a12813849386f8806b9e4533c821"
  },
  {
    "url": "assets/js/62.ae6a2d06.js",
    "revision": "aa96dc7e6099f9f5868137eb5dd8c156"
  },
  {
    "url": "assets/js/63.f7e824de.js",
    "revision": "f13a4144c9d2680879429c73fcb71f41"
  },
  {
    "url": "assets/js/64.109130f0.js",
    "revision": "42cd2a0a54adde7df0cce8fa198c9238"
  },
  {
    "url": "assets/js/65.161ad534.js",
    "revision": "0982feaacb128a2c8f6b5c79d5d63834"
  },
  {
    "url": "assets/js/66.7d761a0d.js",
    "revision": "0685b5d5c4efe64884ffa752daf7658d"
  },
  {
    "url": "assets/js/67.4aa9fcaf.js",
    "revision": "7f2db67ce582128b85e30714736458e2"
  },
  {
    "url": "assets/js/68.4fb3798e.js",
    "revision": "ff9ec538a9ce495e5a7c922f48d8d17c"
  },
  {
    "url": "assets/js/69.e96ee425.js",
    "revision": "1789b1a4d73135e2d2723199c4fcae08"
  },
  {
    "url": "assets/js/7.af991ca9.js",
    "revision": "3b41c15deddcbe482361086fe68ff0c5"
  },
  {
    "url": "assets/js/70.abd34248.js",
    "revision": "3dc836377d1ad3d7e81607acd346a2f3"
  },
  {
    "url": "assets/js/71.111a46cd.js",
    "revision": "2e8e2607d4a053eeb922a8ba3d9a7938"
  },
  {
    "url": "assets/js/72.86281b4e.js",
    "revision": "27d72a60a13efab2d263f9468dabb9b1"
  },
  {
    "url": "assets/js/73.cb3f673f.js",
    "revision": "bd0194beb028807091265dc043e431c3"
  },
  {
    "url": "assets/js/74.152b61e6.js",
    "revision": "d61e072f6b7668f41964fd0127c5ffb4"
  },
  {
    "url": "assets/js/75.3a4579f6.js",
    "revision": "310b95d44b9a9096899000e819b538dc"
  },
  {
    "url": "assets/js/76.91ba5c47.js",
    "revision": "bc4d5f450f3353fa149051891e9c8885"
  },
  {
    "url": "assets/js/77.fecfde1d.js",
    "revision": "fcd17106d7ea8bea423aef98624ac774"
  },
  {
    "url": "assets/js/78.2874faf7.js",
    "revision": "280dcd7fa9b2de59756db61205e62ca9"
  },
  {
    "url": "assets/js/79.7485ae6f.js",
    "revision": "d0c7cd3991c39e07344ac3673e001f31"
  },
  {
    "url": "assets/js/8.076e2565.js",
    "revision": "01975b01ad6d800ad257474f301055e9"
  },
  {
    "url": "assets/js/9.f9fa2216.js",
    "revision": "2067d549b453aa0bf7621c121abd245d"
  },
  {
    "url": "assets/js/app.a6f1f5d4.js",
    "revision": "1417807ccdbec1c32f8ff10ef8d839ca"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "1bbe8033047eeece7158bdd7a85a784c"
  },
  {
    "url": "category/index.html",
    "revision": "e3ab161b5c217c5a0ff441f115924faf"
  },
  {
    "url": "category/learn/index.html",
    "revision": "313b964c6dcba4a6dc1fa93cadb570e5"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "930394b11713b6a3900ccbc4ab207b69"
  },
  {
    "url": "category/project/index.html",
    "revision": "00405ed3cd4cd4ee12a992dac4c85809"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "a3be5565ed169b787b9891ee0ef663da"
  },
  {
    "url": "category/summary/index.html",
    "revision": "11ad44912f76c79a436689930c082304"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "82d2fa07e6458e90312895c240b1710d"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "ad01f71f9dbd67aca32476000d3ace67"
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
    "revision": "16e4e34638a54928480c60482f91fdf8"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "c78a4ae43fc4d5451b7838617bbe4399"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "cc91fe0dc7e61361187bf377577ac557"
  },
  {
    "url": "lib/index.html",
    "revision": "1cdd1da880206d20d7fc956ba7ffc0f1"
  },
  {
    "url": "lib/m-less.html",
    "revision": "6a4b9d8fee4f1ca785af4cc55af3da54"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "b06f17cd117adda8a86e889d03b03f08"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "dee017d023c1a8584489798a98435e95"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "bcfbd89438d19397eb46e55cc1dad4f6"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "33b735fe01b2a8358a5cf051a3274c0d"
  },
  {
    "url": "lib/tagged-operator.html",
    "revision": "7711f137924f0c9822c60ee5b6bfb54c"
  },
  {
    "url": "lib/usercss.html",
    "revision": "d4b88fd5c742458116ea7c9ad726533d"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "437986a61719c0caf268fd9dad414c63"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "855d159ce041f5f93bc6e53c45beac34"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "573377b8040ca574b5d05ed3936373c8"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "eb863c894d53b3462380433caeceb395"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "7b4f9320c13169281dba7ee61b652e41"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "841718045ec033a685981b5934f6df15"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "917594f99a6fbf2c36e1bf33c16ac019"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "e6092aa53060ec9330e591c87314cead"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "0bc03d61bb865ee9a0aad9d6cb8b3a50"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "1a44d6cd0ab43c57b6d5eb5bc9e9806b"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "57e108aadb4246f9283c6af0c335dcb9"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "c0c81c4f0e5f9c0229fef3d03ee83530"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "b8118da096b1e78e416a9fea4e15a858"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "60e157ef8d9bceeeb7b699bc706ebdfc"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "fd793ed84f228857c7cfcc94ba1d57b5"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "5a1661646f4d0ea78c29e4d501b3c98f"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "26964029064abd2a8a4e5bc33ad1f71e"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "4aab97a99a04711624e49cb0e78e1a64"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "d40c4f89e0ebfb9e9a02d05e8f604fdf"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "cf78b3c3f645ffeddacfc517584b6345"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "ba0460c41e20b78b56e9698ebf345c4e"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "12c067aabc482d3e5d9318d3be77e007"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "73f55d29b583f08577e76579ed7129bf"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "a68f137b33854d310d43395fae6d54fd"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "4dfaef2dd246331e6a634a2792d7cd16"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "11975dcbe09e5b5689aba536fe920087"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "65a665d09b49b610d136bc8447c826ba"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "78c341ec9adc4bbf8942cec47f848000"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "f9af62e0c53f061eaf4891271e7d0935"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "19cd7cab88a7238cf6075dfed0c7cfb2"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "e4693dcbe1c0c8146b17b7814d3c82f6"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "6a5ec39174f8c032b819bd458260379a"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "efa7e64445e88d866b3101cca90b3978"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "c1918ed3771e2715ef072689fb99d275"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "4b25170825e6630e277b0934249ba01f"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "dd6f47311e18002af23aa9e045f35c94"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "e538f624ed65ced82490abf65c5e7085"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "6cd02199f0f3d06fc780d60b7a4b537a"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "e63514c6a1c029e80780c455bd1f5969"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "ba2f2bc9c29e62e82445e3574265b5fd"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "0564f49ffddbb0de1eed1ac3f9b9e08c"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "da16e4902736323aa2f8073abfd724b5"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "954debcea1b361641d02e85443b8f254"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "b74928f0ce64030e70345c316ec577ed"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "ceae4636384b48b9933b80ad12e30cb4"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "fa5636e794b9a3e204baf0869183d86e"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "b866cab9668b5abde567a98370ea483c"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "b74e4e63dd52824736c6755d6de150a0"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "8e99d7f083e69c30bbcabd228e99c7d3"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "efdbc63b7968fdcf66905967aa29ead6"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "b5b172fd765d125e660963b195646eeb"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "9698da962bd1b336e389a2b11af9575a"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "747f9a1d44f8538cb251c2649edae5a0"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "bc8a0087ebd4cfc1f2a997fd591930f1"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "a85390e0fbbcdab3c3c55073cf48cd8c"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "547420aaa420b829e9067e8a898a8f3b"
  },
  {
    "url": "posts/2022/03/13/createfetch/index.html",
    "revision": "bd0bd6a55b23ca34ff77d8d8f47bc2aa"
  },
  {
    "url": "posts/2022/09/27/unregister-service-worker/index.html",
    "revision": "89ffff97991179ba6a3038aa3b3ad2e6"
  },
  {
    "url": "posts/index.html",
    "revision": "d043ad65517fdeeda7945f63d030e0c5"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "2c903e20b92bcd69185c8a5dda864d45"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "3c4ffe3b82a1399bd97831efeb147b99"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "22a69ca400c3b9ec3116a47fa5f290e7"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "850054c20afccf555f22f3685bc5f3c9"
  },
  {
    "url": "tag/android/index.html",
    "revision": "b9af00ad50e43ac429c6d5a51e23800a"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "0f164b6e3996673b897ca5f22d29ed58"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "073c3a0eb72208e45683a94344f1c8c2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d31729400d98804d4d911cf4cc83f0f1"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "24f01051e49e111867334d5d59f632f2"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "0b75f0697f99a74b1a24b56e3ecff6a7"
  },
  {
    "url": "tag/env/index.html",
    "revision": "04371465c07a3fb7eb07a45af91be564"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "70429eda0f4f2b5177db9fb4ec1bc7b3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "59f10fa2d82433fb6f7d0d02067228ce"
  },
  {
    "url": "tag/html/index.html",
    "revision": "22344c084182c7b342f801585a7522ac"
  },
  {
    "url": "tag/index.html",
    "revision": "ab1fa88c22b86fe0f1f1d4668f3b2ea9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "eac4e0dfccae54e8abc8ab7068646ee3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3df18499c29271ef133ed11c905c8351"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f059408c3bb833d3342ea4fcf3060688"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3263c424d608e619b15828551bccfcfa"
  },
  {
    "url": "tag/less/index.html",
    "revision": "576ff9a317767dd6cd32978e8a7cbb0c"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "37ea95e1b69edf8fec2a009d238d3e5e"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "fa89e493f78f15b587b48d8bf6cf1047"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "fa42c05a25492f53c4a43ef0231ac6c5"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "aa238b949becff160aca7ab4633f16a9"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "400f7be2217069e6cd73786160be23ad"
  },
  {
    "url": "tag/operator/index.html",
    "revision": "cc238868879d7d0c5be61184a41192fe"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "76312bde97a802fe1804a959266507de"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "9cb8b65f874ef0d2877b4afbb1014659"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "2d44d787410385592edc63db0f646c4f"
  },
  {
    "url": "tag/pwa/index.html",
    "revision": "b7c655d695c2df418387d27acf1e5870"
  },
  {
    "url": "tag/service worker/index.html",
    "revision": "c94442d36f00c5288131f76893f2992c"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "a0cadca96e87d028a9cf8a4f8ea88d94"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "3a5af93a38f2f92028415f37c35e11e8"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "840430884be42e195d2dc792f5da6a00"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "d5ba9984ab16ecdbe8cc38cdf450b008"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "c1f426da689d8fac592715b77ac181d3"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "98b92368189985b02060b35e4599f57b"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "f2b05d3ef6f9e0cb7a7d4e064f404ff1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2a4128d0ddd136dbac23472caca6d452"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "1d139ae6815e8b0cde550397fda16fdc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "df8c14dbb0ba08ac18fe6a08cba3831a"
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
