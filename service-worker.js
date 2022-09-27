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
    "revision": "6948d922586e6679282b80491cf35998"
  },
  {
    "url": "about/index.html",
    "revision": "0b5af45e07029f9b3b1a9b344f5da277"
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
    "url": "assets/js/72.afdb6e5c.js",
    "revision": "4a7153ddf5b75f5745a39a542a3260bb"
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
    "url": "assets/js/app.a2177a48.js",
    "revision": "3570ff6418316ec6452a19c595fa230c"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "832b3f4856a5c6cd09182faa7d5e6b98"
  },
  {
    "url": "category/index.html",
    "revision": "41c2d55da97ac78de6475239561e9d20"
  },
  {
    "url": "category/learn/index.html",
    "revision": "e0ad2897c33999a1fc922184a8f2be2b"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "ba2e1c7c975d65817df041d4e4640c70"
  },
  {
    "url": "category/project/index.html",
    "revision": "fb893181678620235b1dd942ac8847b7"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "9e61b1021c983c7d62697ab5e4c7d6eb"
  },
  {
    "url": "category/summary/index.html",
    "revision": "16b9bf798fee82a45bc5e61ee165ab9b"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "06ad82cde688e019bafa6a7285a77738"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "24cfbe94c321ead929f53c9984b52d3c"
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
    "revision": "81e7ed157232275347f6db20cd7f2f08"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "9e85a9b6d08e7d368b89133388a88039"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "84384a5940f771d6b82b67539effdb60"
  },
  {
    "url": "lib/index.html",
    "revision": "926049eb58f639baba86c92a82c85459"
  },
  {
    "url": "lib/m-less.html",
    "revision": "fc61c57b73bf330f30cefc18472da668"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "22acf3593e97e9e2b419cb8fe74c09a2"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "d27df6e09978cd8bc42be52b3a73bde7"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "2135c4b0a09fe26eeaadd3664682ac98"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "3098a5c5341fbde448f31e459bf75a69"
  },
  {
    "url": "lib/tagged-operator.html",
    "revision": "0cf1f93a0f57a02cb697be5e8f20985c"
  },
  {
    "url": "lib/usercss.html",
    "revision": "b70ee0df93a17192ced0881d01b6df52"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "c2104cf36c0c5b4e8c8bee75550f4d8a"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "396411ca90b9d7bd6d9c5f5991400d86"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "fb69ba45edd1204775880fb47e14ed5b"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "6cf1f897dd64744fd729f9484dec120d"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "87a1260164c28af969c23f45cc77518b"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "4d186fbceaf12304ed5162958efd14a5"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "255eb6277d63049ee9cf263e80fd3735"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "35b9812a69566ac5f86160d30b2c7888"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "2791de49b1839d2c842cef25a8f83f80"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "c434ef93fdd3b6bc660644ae02a1d601"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "96edf90d7e7078580604dad08f563d26"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "952fa4552c3d24ab441a4500fceaa088"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "80c6e27d689b1a90869f8eb9884dc61e"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "e4880bd17c9b9dc8ec48894da2f1d323"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "00623b4eb814f57b438362f1cba3884d"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "4932c7f734052f38426c9a28685e5691"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "3208588ea61a54d60204324e3ce7ec4d"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "11d6243b06e52449584c84a1f7f908fd"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "fd2b2c3bc26b20ea6d2f17b7694b7e9f"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "68d499890b34e9502e5be9fdef2248df"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "cc23b8e248f1688b1936e6d5458a5cf3"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "ed948b96d6d08724bbce2faac14db219"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "22279c108a8475c04d846387d262319d"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "1a06b6759f315aa720b8ec679739a01d"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "fbef8eb1cfa8dc43de1a4d413c1d4f3b"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "bf68de798b55db0378d0e549d6a710d8"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "bf1803d8d0cb69bb0e0c3e6c1f61181b"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "923e796be147c6f6c1e129c661efc146"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "5bac1ce8cd5e98de32958638332247ae"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "b0a3a1db20ae13dcd189a431b6b46151"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "2e68432395bae4082f1715ce4e1c47f5"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "8e7813f6739cd3fa17bdb287fb60f545"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "34ee0af8baadd0975f4452c91cdca2a5"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "cba4ecca5f4a125e56d4f3895a01c63b"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "dfbfb8d66ab02f91c658044485ea4218"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "6c59f08784120d2deeb483588a707b57"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "d5c2ec0c4bead062b3b41c81eb5883dd"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "55beed070af703cb214f51a65e05227c"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "bae714b4cfda50adc286b17efaf101fc"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "610615ca58422e3ac6cff461a4b02c97"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "538019279082c7845f22daf90b70746c"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "9841d780c0f56a34976e30c6608120ff"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "991be13144ff686e14779e1bf147e50d"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "8513b25b24733cbe95e109a1ac6dba44"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "ab3dfa8003ed8c826e8d50d23709d989"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "9d2c1235351567770f0fb21a23cc387a"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "f1601f369ab6897c339778fb3552ee49"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "5bb4275b01428599f5687f37bf28e981"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "49a9a7520186ec444ca13015afec78a5"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "ee965794feac39d29a0907d0c4d03590"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "b935d8740d09447a9a06de7ced7ebec4"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "97d76ea5be3fa46657dabf08a8a5768b"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "04e4a1703931ca2f45886e2335ce54af"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "16cf69d8d237f6c0e3556228a81906d8"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "300842b83ec3ccf0400e4c487e6f3c81"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "192feec53e25c4c500a3a42034d5f06c"
  },
  {
    "url": "posts/2022/03/13/createfetch/index.html",
    "revision": "02224ba0c0a197f427b1b04a275195b4"
  },
  {
    "url": "posts/2022/09/27/unregister-service-worker/index.html",
    "revision": "11645231e72a23baa04cd33394607113"
  },
  {
    "url": "posts/index.html",
    "revision": "608ae484762cae1409426f9112a45c19"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "faf84b097c9226ff215b50ab7aaddd74"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "026f583088cb30432309ceab857f01b3"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "55efecf4cee474a862372741cc77b9aa"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "0e07bea0d3011ddd933bc17fbb8574e8"
  },
  {
    "url": "tag/android/index.html",
    "revision": "28a489ed667e4c207a70a46d3b054ba1"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "7777325d02f2b5225136ab6489020e72"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "262e2af0863c8b08b84eec1677da0ffd"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d502ef191c5fd3265bd9fb6fc053e0be"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "1bc557f815511bd3371fbcc327430be3"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "126c883d6a5fc926bb4699d0705daed1"
  },
  {
    "url": "tag/env/index.html",
    "revision": "5db13e5bc607f663eebc4b045fd01caa"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "1e91b9ecd7235c6f0c6449a4b75788d8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7456ff478b79e12f5f649446844df0be"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f4b4df8024543db858a58b2823ad1581"
  },
  {
    "url": "tag/index.html",
    "revision": "a283ddeaa0b65c27620e019ba9b8e68e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e12ec50d89985afa0ce42abaa7dd5a5a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3c723397dcf55eaf12f00bb14ea59aa0"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f607350a1a632c6c42788c35924502c9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d379454cbb730145378eebe8676c91c3"
  },
  {
    "url": "tag/less/index.html",
    "revision": "2f4167456c66681923b4d1f2e6b2b2ab"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "a0c6216cd1aaaee5a5981d97a86961a1"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "ab2cda248a165eb30aae3217c04bb794"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "5fd48c24690c12cdcea696a9452371ab"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "6672114c40df1950252c837734c2da4a"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "e1777c799c386994a98af43c05a872c3"
  },
  {
    "url": "tag/operator/index.html",
    "revision": "429ff3b4da9a3a9202edc8cbb7511c02"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "0b8e56af3e8569a4d0c369e5f587b6aa"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "f9a9b9f228db4a936b32d80666b048e5"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "8115650ad3d1fd5b56aec2f91b879c2e"
  },
  {
    "url": "tag/pwa/index.html",
    "revision": "679ebb8412fdbf716a9ddd66cc1dfcea"
  },
  {
    "url": "tag/service worker/index.html",
    "revision": "7713ba8e786e62f682e7f39dfa1ae6b9"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "301f437a4634b928fcd4acaabbe369f2"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "f7cd3b4c08ee17bf0f72cc744af9aac3"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b55f98879af7856a75cbcacd863631ff"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1c40d6531919ff69a55cf7a0b6dbe750"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "6b860fb43ea8fd751cf82265c1aee8e7"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "432b527f2c4c838729a3f45152be20c0"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "d3359b8dfbb3d93d5e927bbfe3f5911b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6465a7a04c8f69877cc03879cb50209f"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "dbedf7c48f789462cd1887f95169536a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b54ac747db336f49542abb88c2a98b5e"
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
