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
    "revision": "82fd9500d47a8c33d1f310b8b23ea9d2"
  },
  {
    "url": "about/index.html",
    "revision": "533f3ad3b428bee24480070f71760250"
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
    "url": "assets/js/12.d3781191.js",
    "revision": "91782232728b44ff9fd88264f32a0dbf"
  },
  {
    "url": "assets/js/13.526e4909.js",
    "revision": "59417f6ac9b8980d13d8004e3dd801a7"
  },
  {
    "url": "assets/js/14.e2dbad92.js",
    "revision": "b31e4fa58666844968d019c5982843aa"
  },
  {
    "url": "assets/js/15.d904e56e.js",
    "revision": "5379be2c4741688f59cf5a89e931baab"
  },
  {
    "url": "assets/js/16.baf74897.js",
    "revision": "26f5b8e5ae3cc0d7b8930cd98f11933d"
  },
  {
    "url": "assets/js/17.3e429ca5.js",
    "revision": "01898c05ae9997161ed67640f5eaa629"
  },
  {
    "url": "assets/js/18.ba71fc28.js",
    "revision": "c60e5053ef59a7e8a1a510772c713672"
  },
  {
    "url": "assets/js/19.3f74f889.js",
    "revision": "6d950731d532dbc06baa9ca2b55a0ecc"
  },
  {
    "url": "assets/js/2.4669734d.js",
    "revision": "ca9e657c853bacc5d64906dc53e7543f"
  },
  {
    "url": "assets/js/20.049c6020.js",
    "revision": "1ac7dc62138bdce0194dab77003ad9c5"
  },
  {
    "url": "assets/js/21.5ae7b85d.js",
    "revision": "11d9399dff75e226d0c89d6922c92e95"
  },
  {
    "url": "assets/js/22.d5dab0da.js",
    "revision": "298ea1be87a54bef6114b66b61a598fb"
  },
  {
    "url": "assets/js/23.2add87e8.js",
    "revision": "218a39890e07f8cbe4b3659b6853e0e2"
  },
  {
    "url": "assets/js/24.c55d39b6.js",
    "revision": "9b1393f0b835f3ab7371083a3a54c441"
  },
  {
    "url": "assets/js/25.781e2266.js",
    "revision": "f23cb8a438a697ef6ceb233b6017fae3"
  },
  {
    "url": "assets/js/26.17d35568.js",
    "revision": "f4e90f512673092231073663136e7490"
  },
  {
    "url": "assets/js/27.c0c62830.js",
    "revision": "c494604d36e89fbccd18d3fd75afc0da"
  },
  {
    "url": "assets/js/28.0aed499b.js",
    "revision": "b90ac47daec88a3bad6bbb5bbff216a1"
  },
  {
    "url": "assets/js/29.e8812ebd.js",
    "revision": "3635d24182280400788a5214a248513e"
  },
  {
    "url": "assets/js/3.b2bf4b2d.js",
    "revision": "1c796788df8023b065579c07868e2447"
  },
  {
    "url": "assets/js/30.395718b8.js",
    "revision": "771b4237ff8e01998a766e106b9664eb"
  },
  {
    "url": "assets/js/31.5c8a9881.js",
    "revision": "33e7e7950677b050f85fbf618338b99a"
  },
  {
    "url": "assets/js/32.d72168c6.js",
    "revision": "e1a1fb3f74ddd3949d6ae45587d0f971"
  },
  {
    "url": "assets/js/33.b3438a03.js",
    "revision": "1adc693f08ff0a1c1ff3efdf8ead5d1a"
  },
  {
    "url": "assets/js/34.6062deb7.js",
    "revision": "0213e103244efc411b2d74f05429101a"
  },
  {
    "url": "assets/js/35.32c52906.js",
    "revision": "f6088d243191c47fe139d4a92ffa7c0e"
  },
  {
    "url": "assets/js/36.3f6f070d.js",
    "revision": "df83e4486fc9e852dfca35ee29249286"
  },
  {
    "url": "assets/js/37.569fb817.js",
    "revision": "06a7766e1074c5e446bf74448081b698"
  },
  {
    "url": "assets/js/38.c33fb1bc.js",
    "revision": "23e931f89edbd9422923ad883b799c82"
  },
  {
    "url": "assets/js/39.8cac88e7.js",
    "revision": "d0cf6d8a7971b6c7cd85f878752e1216"
  },
  {
    "url": "assets/js/4.5c7567a9.js",
    "revision": "711778b37f199237e5d77b0bdf0619c8"
  },
  {
    "url": "assets/js/40.01e56187.js",
    "revision": "eb07c2413a917483b9469dd37737c10d"
  },
  {
    "url": "assets/js/41.76358336.js",
    "revision": "2bb84ee6f62af5bd34b0c6d07a128883"
  },
  {
    "url": "assets/js/42.c83c0fd0.js",
    "revision": "7d708f137a033d5f49baf7e8279a2534"
  },
  {
    "url": "assets/js/43.d08ac952.js",
    "revision": "2affa0d25f3b34a8d98aede10ea4d6be"
  },
  {
    "url": "assets/js/44.1464fa3a.js",
    "revision": "36231f19e407fa227caa9491880fc9fc"
  },
  {
    "url": "assets/js/45.9908e679.js",
    "revision": "24839fcd7079d345fe904ea6c7089c15"
  },
  {
    "url": "assets/js/46.b3eaf130.js",
    "revision": "c73c0d79b5161a4cdc84acd9ac39a9fe"
  },
  {
    "url": "assets/js/47.dcfb0396.js",
    "revision": "746f7bc10ffa35a0a4471962277cee1d"
  },
  {
    "url": "assets/js/48.7c427ba9.js",
    "revision": "274a35332cce386727658cddf355dcb8"
  },
  {
    "url": "assets/js/49.e6a7bfa5.js",
    "revision": "fbe25bc24ad5e972190e2309a4ca8a3c"
  },
  {
    "url": "assets/js/5.703c3ac0.js",
    "revision": "c1203713e74f5541904419d416237f1c"
  },
  {
    "url": "assets/js/50.966c5639.js",
    "revision": "6687f53a5c5dc377eb00d48d0e1582c1"
  },
  {
    "url": "assets/js/51.466e3372.js",
    "revision": "c049abdbe852a1152bf2af06375c59a1"
  },
  {
    "url": "assets/js/52.6aafb7a7.js",
    "revision": "fc35580e95153f6be83e37ce2feb955c"
  },
  {
    "url": "assets/js/53.b5da5471.js",
    "revision": "a1a64f2ce2934c47c39e969f9e5c665c"
  },
  {
    "url": "assets/js/54.43789957.js",
    "revision": "50e0da482ce86efcaff45670f782d983"
  },
  {
    "url": "assets/js/55.80c8f7e3.js",
    "revision": "2878c6187038d4805a6f91a68d766415"
  },
  {
    "url": "assets/js/56.6c3ac55d.js",
    "revision": "13a9abcb28a15f6992b8070a2e9a1a79"
  },
  {
    "url": "assets/js/57.0e2990cf.js",
    "revision": "22346de03b394d586683998d6854c7aa"
  },
  {
    "url": "assets/js/58.c12ea215.js",
    "revision": "53aaa80ae53eefa450198b055d228981"
  },
  {
    "url": "assets/js/59.095bcf8a.js",
    "revision": "9e3230c8502d167fb60084291933bf88"
  },
  {
    "url": "assets/js/6.b3128395.js",
    "revision": "e5c87ff24b64a69a869a3d67dc6847b5"
  },
  {
    "url": "assets/js/60.192a4100.js",
    "revision": "d8cadc3ef8ec9132b0ea3647675f0f75"
  },
  {
    "url": "assets/js/61.5e7f02b7.js",
    "revision": "c460fe56b63b642c815f7d5532c3f1fb"
  },
  {
    "url": "assets/js/62.9856f31e.js",
    "revision": "1c2206a68eab952745b6683c4291d904"
  },
  {
    "url": "assets/js/63.9efa3073.js",
    "revision": "ffa251e26bb5a0de09a24cecdf23724a"
  },
  {
    "url": "assets/js/64.f9d6be0f.js",
    "revision": "8e9f27dbebac4a3a58770595c4cfa919"
  },
  {
    "url": "assets/js/65.7c7002c5.js",
    "revision": "1c070bf167d5b87429f719cb2b265183"
  },
  {
    "url": "assets/js/66.bc93f0c8.js",
    "revision": "ba9455e04e822ba808735240fb500a71"
  },
  {
    "url": "assets/js/67.21cd4413.js",
    "revision": "102c329a2ec60afa7541f67a9c1f06a2"
  },
  {
    "url": "assets/js/68.6b9269a3.js",
    "revision": "b164e32bffb2968854af26eb6f676254"
  },
  {
    "url": "assets/js/69.b396c8d9.js",
    "revision": "a88ce458fed06582d8ae38e490c94655"
  },
  {
    "url": "assets/js/7.af991ca9.js",
    "revision": "3b41c15deddcbe482361086fe68ff0c5"
  },
  {
    "url": "assets/js/70.219052fc.js",
    "revision": "cdcc1b026a55ac3f222c54ab187c3416"
  },
  {
    "url": "assets/js/71.7e0ced39.js",
    "revision": "28d731c0f2e9f2494b546971a3809f25"
  },
  {
    "url": "assets/js/72.8130fb9b.js",
    "revision": "c02a121cc0377e83e716c6f796fd873a"
  },
  {
    "url": "assets/js/73.dcb9b1b2.js",
    "revision": "a8fdb4f767f55b206debffe4b5be273d"
  },
  {
    "url": "assets/js/74.f656ce57.js",
    "revision": "1a4b64cf5a9935750e5f7edf14fa1514"
  },
  {
    "url": "assets/js/75.cc05f21e.js",
    "revision": "feebf6c91784b8df56292f1130d31206"
  },
  {
    "url": "assets/js/76.fd358230.js",
    "revision": "3f9f24fbf28e518f965678f06e44b374"
  },
  {
    "url": "assets/js/77.09e4d58a.js",
    "revision": "a717444dd98955f7fc56d361a4be6ea1"
  },
  {
    "url": "assets/js/78.9d1dd43c.js",
    "revision": "c630bd03dc89e2c60655a63d07dfbb15"
  },
  {
    "url": "assets/js/79.c00c02b5.js",
    "revision": "6ce74c13a285bfe22c62faabe34c6034"
  },
  {
    "url": "assets/js/8.74387426.js",
    "revision": "a092e3ab0f71b905e911d043bcfc1f77"
  },
  {
    "url": "assets/js/80.d82a714a.js",
    "revision": "57a4785da66c8875b349d6b89a50c35c"
  },
  {
    "url": "assets/js/9.fffb05d0.js",
    "revision": "6f4c975e667f9418fa111341bcd246ca"
  },
  {
    "url": "assets/js/app.67a6689e.js",
    "revision": "e4a02a867ec975b2da0dc86eda31bc2f"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "864bae5dd14c61e5b6e7da266d59e00d"
  },
  {
    "url": "category/index.html",
    "revision": "89c27a357981b97ebe12d1102298d347"
  },
  {
    "url": "category/learn/index.html",
    "revision": "9111e033a905971e58039aae681d3f20"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "d55916b227a5cb785da7e8ee5f6a4ebb"
  },
  {
    "url": "category/project/index.html",
    "revision": "35d26399ad67620603c9f50c4f3a014a"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "3afdf20d1b69dab637c56cef537958f2"
  },
  {
    "url": "category/summary/index.html",
    "revision": "106996e085d426c718783c24f31857e1"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "086e2a7b9887b1642ad70c38ac15fc04"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "1fc03903b40e2fcea9399471bb2a0bce"
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
    "revision": "ec4c54aa73170410a4ef26ba47bdb1d8"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "ac3085df13b43b1f66e126dd58b93704"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "b27c90a4cc406e0e5dbca914700e6249"
  },
  {
    "url": "lib/index.html",
    "revision": "bc338af68339f6d1d62c3b0f42625fae"
  },
  {
    "url": "lib/m-less.html",
    "revision": "f61977425a5559be3c4025cfc879fa73"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "989019db02ab1a12c85d3660f2fc9cf2"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "d3ef5b2926674e04f80e00a6b73b986a"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "75f639930e31acd6b306c4f5c4132e8d"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "d092add130fccc65fb94015c9d785c04"
  },
  {
    "url": "lib/tagged-operator.html",
    "revision": "83a0ae39e7bcd65cd8393ef4d626ee3d"
  },
  {
    "url": "lib/usercss.html",
    "revision": "436952f1bc4fbd4339dcb4df08a570a2"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "dcdebc5e59dd22072596b621ac98ecaf"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "e9eb8528608048f5b079ba66f62660c0"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "b70ec7a3cb5de9f99279fca4bc8e047c"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "325f9a05b3291052033ee1e4c2472d1a"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "b9bb121c12f8c5055634f3aeca4542e9"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "8df5dcb9fdd07d6af94f954c4d37fbad"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "1dc238cdacacecab615c39e4aa8f6dd8"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "0d813b51945263842aaa2c527ba513bc"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "1bcbdf2eb5828b63536bb17c03c06344"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "3f83f8af908b7ba05a5a2f74280c9602"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "8eb00fa16822344378a6f280b2e5679a"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "ea8152430f8970ad0be8ad4874936b75"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "fecbacd6369ba8ba72e991d106c3d237"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "7639507e0d65cd4f8de4df9b4a4f5406"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "12f4a769a81876d7ed8679a5a888a913"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "394d14744606cfecdeeebd38336e92af"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "4577e5c344bcb7610cadf0871255707c"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "8f4a2bda14c7430d87a3c7d64603d814"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "a7dc16cb234246d25d37a26dd4c3982e"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "d12c8eb92de276e35c5852af4353e9ce"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "a4d56be228bd3e8a99df6861bd38d652"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "d363e83caa4b650c4b1a4d170e5b667d"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "60c902d1457bdd1497f632fdc95f729b"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "2cca142607e0d597483f16fccc117f10"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "a3868737e924e543388563df3ce541f1"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "d9bc93b25a62f45bac04e86d81333d21"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "91a93586b3500a1ee2545239a9abdb18"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "6c2d3fa1a64f173ff66db2c49bd06d80"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "dac55459f18988c0bb71648a3b16e8eb"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "ad14b44112456a6d7027bdabb63f38b2"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "996e246deae8025f2a4b212debdb1988"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "4d6fc6ecb11d4fd84d11f60345e806a3"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "c8be5d8edddc2e29939457e04d30b903"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "a7ce3ea18c377ba7d6896b0247e5aab9"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "fa0070815d0c7009160c9ede44d9f7af"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "24480909c7e09e39527fe96204eae945"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "f9bf7cb2758b5934602cb725a3427239"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "297e56123b4ca39b066009c41fd30ece"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "822632bc17a708540cb6b505b98a06f2"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "3a1d54604444a5ab4763c08f07607641"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "43c513c6af48a68f5851c11c46f7f5d9"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "41428dcdd87e74384020ac92cbb1977f"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "5a4a1d78409fa50b966dad6cba6844c3"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "d5042d03d24835f985153fd3719f6e3c"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "4f3bde304daa64f02aa850ca5682f801"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "211998604cd8e11964f64b5c074a04b4"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "1cfd1a33d5692bf4f1723f4c17bb1224"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "ede037595f45a020fefe8b95131b2c10"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "10569c1558c428db6d33912683f9f5f7"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "fb6d29b8fbd5b68ef44a3211095d6493"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "3f83f39af17f00c4cc8414236cf3fe35"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "624438ebe721c80de72b1e18a13224d1"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "c8fec90c852dd6da7239a936e1c86dee"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "33aecabf4907b2329a2dbcfb3af9da57"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "5f438686ac78cf25a2b4cf8f690f9645"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "0f4d98608f4ba0478d90fba51e6478b2"
  },
  {
    "url": "posts/2022/03/13/createfetch/index.html",
    "revision": "5bfa6014b08440b5734a9711812e7917"
  },
  {
    "url": "posts/2022/09/27/unregister-service-worker/index.html",
    "revision": "652c119f56164ce2eb26989cedda7c69"
  },
  {
    "url": "posts/2022/10/12/typescript-object-deep-path/index.html",
    "revision": "ce5fd6bcdd43162afd8aac71a933dc49"
  },
  {
    "url": "posts/index.html",
    "revision": "08f95b1de5540cd9e1482fc9a0480a01"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "078b640a61e23234db0871c66dfd2c77"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "434b16316cb08075be20f409bacae6ad"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "52af45a6828a198a453b51c3683c3b6b"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "73631afb0919a75e01116c824fe28814"
  },
  {
    "url": "tag/android/index.html",
    "revision": "a079327f95a19f09a72fd26d55fd2685"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "e9e239a6043570c0088bb9c0bd12540c"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "a3139ec098f432a45dad193c2f12f19c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "95810135f928837838f14239a8c578a7"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "d29f3e756cbd0e1028ca8108dfacc094"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "15c15360ba2fe24d0900bf69983bacbb"
  },
  {
    "url": "tag/env/index.html",
    "revision": "765a747fece9baa80f42b43f96d5b532"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "7cc8b6783c9033ae7066a2afe1810452"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b799724572c2b266bee34f798046a2ad"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5020ecc8ef01aba6a502a55fc4d6aa8c"
  },
  {
    "url": "tag/index.html",
    "revision": "621f94512e81bb7fde3517bfd8f7e667"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ab9556c2bdcd81b5df6168ead1efc4ea"
  },
  {
    "url": "tag/js/index.html",
    "revision": "051c154da8ac426db623836c3aecd57c"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f0a620a5cdc21068a2ee00b9903e805e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "095952fb325f7e1ae631add048db888c"
  },
  {
    "url": "tag/less/index.html",
    "revision": "52ab2ba7e9227cf88764cf7a7fe07d2b"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "cd9965c061b0ae614dc970d60e57043e"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "7cfc346e7ad6fab20d9a4d54d9d27cde"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "629cfc4e52b4aa69d583fe000b7c6f7b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "823985ebbca8870eb64fc05d15b5c84a"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "b26cf9c30198e63772c6c5dad75645d8"
  },
  {
    "url": "tag/operator/index.html",
    "revision": "f1857beaf2f851cc2d939f9eb3ce16d8"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "2c4e9f745fe8e13a567bbdb723249b49"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "ad40ec65aa3bf6ef05d2aa8079f34146"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "57c19b458aa00fb1aa80b243d4ba8257"
  },
  {
    "url": "tag/pwa/index.html",
    "revision": "8891dd02b4e530af8813464fe23261e8"
  },
  {
    "url": "tag/service worker/index.html",
    "revision": "a070ac288fdd1f5b54fd682433e8bf39"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "5cf9963e15a613f0cb15aefd81481987"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "05c50f93588f8b94718e534f60da01eb"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "6e5d5b0e57d8dcd65be6824482b3b778"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e220f935eb5d00083a253102a8ef0608"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "06659eddc18f041607904283250eed45"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "575d832a59c77428029a463d3ed6a1ab"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "81a82206c8cb7e41f04a0689b4a83f1f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7ae1362fefb8e471cb425d3add87d517"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "132b1e917639496b0080a31d645986e5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ef4989f0d50bd813652cee106a1117fa"
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
