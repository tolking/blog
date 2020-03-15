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
    "revision": "dc20282f38e89ef998304aebb39d3ab0"
  },
  {
    "url": "about/index.html",
    "revision": "835075ee8f934cb5e63d66f65c25e102"
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
    "url": "assets/js/12.894eb336.js",
    "revision": "3316edd3ced8596af2906bb29736c63b"
  },
  {
    "url": "assets/js/13.888a3087.js",
    "revision": "2203c9a484a7ecca26c2e8718747be64"
  },
  {
    "url": "assets/js/14.940bf568.js",
    "revision": "6cd9b47fe58a7d8baacf3029860832ff"
  },
  {
    "url": "assets/js/15.a55ca0fc.js",
    "revision": "0867e25e0426761c86f85c2f19c5b379"
  },
  {
    "url": "assets/js/16.163dcf80.js",
    "revision": "912d47f8d0ad40787a5026ba51830c94"
  },
  {
    "url": "assets/js/17.51fec195.js",
    "revision": "bad903f3d49ba08f35ea65a8f44b4d8f"
  },
  {
    "url": "assets/js/18.7e386618.js",
    "revision": "2888134cb82d4a5d076260acf45f7e73"
  },
  {
    "url": "assets/js/19.f95857e8.js",
    "revision": "ab658181f86eaaa776038f2b1adbf61c"
  },
  {
    "url": "assets/js/2.382a84b3.js",
    "revision": "b29eaa092db9eefa6e33581f61ae282b"
  },
  {
    "url": "assets/js/20.8f3e025a.js",
    "revision": "135ba97473f7ef12a0519c452bb2ddbc"
  },
  {
    "url": "assets/js/21.2545ebdc.js",
    "revision": "6e220ec9114d1a68bbb58455ca0e3a07"
  },
  {
    "url": "assets/js/22.5eaa82ea.js",
    "revision": "3b67ed7dd551c404a66d4001bfaeedc1"
  },
  {
    "url": "assets/js/23.4c3d7f79.js",
    "revision": "723143802603e3f7043f924a076e5193"
  },
  {
    "url": "assets/js/24.ada60339.js",
    "revision": "3dd000687edf3a4a738c46c634d2daef"
  },
  {
    "url": "assets/js/25.b72ac65a.js",
    "revision": "6ce4e2ae5b6ebdad373d0f20a8bf3322"
  },
  {
    "url": "assets/js/26.4bcaee72.js",
    "revision": "268bfe4e47fe6316ef0351bc4f26456b"
  },
  {
    "url": "assets/js/27.bf2bb027.js",
    "revision": "8dfdbadb9e145557ba70b1f94f1311a4"
  },
  {
    "url": "assets/js/28.0a41b123.js",
    "revision": "6b87e52a4c5266c53a5a097ca38f8350"
  },
  {
    "url": "assets/js/29.40802f2b.js",
    "revision": "da639a283050d6cfc72a8b8752951649"
  },
  {
    "url": "assets/js/3.5d6346bd.js",
    "revision": "3a87a13688e058917b85211664fc92f0"
  },
  {
    "url": "assets/js/30.a03610a1.js",
    "revision": "8e17f90ebd6307609ec4e33e06c02a7c"
  },
  {
    "url": "assets/js/31.1c80bc78.js",
    "revision": "2907d693a980c9bc20df16091d7d0b2c"
  },
  {
    "url": "assets/js/32.85d18141.js",
    "revision": "15ec1dd567e5047910169dbfecd12a84"
  },
  {
    "url": "assets/js/33.8f8e0aa6.js",
    "revision": "0b11f968f781191cb3e7698247c49554"
  },
  {
    "url": "assets/js/34.4ca55bb3.js",
    "revision": "06fcd7649bee9bdbc9d322bc02c12444"
  },
  {
    "url": "assets/js/35.fd9bb963.js",
    "revision": "4075868e883b19c73c18fbd70ef23e23"
  },
  {
    "url": "assets/js/36.03e6c221.js",
    "revision": "b2e15fd174b872d9586310ee72cedef2"
  },
  {
    "url": "assets/js/37.068cfcc7.js",
    "revision": "cd88e6db2985c7c917d8a7f191fc71b4"
  },
  {
    "url": "assets/js/38.ccda36cc.js",
    "revision": "d3972a11afb0714435ee0f1b81ecc23d"
  },
  {
    "url": "assets/js/39.a07ddb0d.js",
    "revision": "0ae533ffc7741b5acd6641df3cf51eb9"
  },
  {
    "url": "assets/js/4.6e7b6c87.js",
    "revision": "3b63263e335ac7bdcc6531b26ff732c6"
  },
  {
    "url": "assets/js/40.566f2c34.js",
    "revision": "6b60f07b8310c5afcb2bf15da8de8e1f"
  },
  {
    "url": "assets/js/41.42d60b46.js",
    "revision": "d96ed0776e0e0e3d83bb17f569c7488d"
  },
  {
    "url": "assets/js/42.d49f055f.js",
    "revision": "312c35ed6f582d1123a38920cd02fa24"
  },
  {
    "url": "assets/js/43.182aef64.js",
    "revision": "44e56fe64901d8455fc0738ba3c8b45e"
  },
  {
    "url": "assets/js/44.3be53214.js",
    "revision": "17d54ae4484a5f788cbaddfb5260f4e0"
  },
  {
    "url": "assets/js/45.a6e53865.js",
    "revision": "63c2744f9a7c018b134aa3cf8873072a"
  },
  {
    "url": "assets/js/46.0ba5e1cc.js",
    "revision": "0d8e0e2128255ed74229cc07d3eb3ad6"
  },
  {
    "url": "assets/js/47.7bc8d2a9.js",
    "revision": "27a21199609ec7dcc3237ab73297422f"
  },
  {
    "url": "assets/js/48.57a170b2.js",
    "revision": "d7ce1d11759b772e155fbd23e35433d7"
  },
  {
    "url": "assets/js/49.8443badd.js",
    "revision": "18d021003d5cd10a235aec0cb3f6d9fb"
  },
  {
    "url": "assets/js/5.5ddffae7.js",
    "revision": "74e55c3ace1942c883959582bb512802"
  },
  {
    "url": "assets/js/50.cbed01d2.js",
    "revision": "8659bd4a602c598e19f42a9d1e005c44"
  },
  {
    "url": "assets/js/51.5ffcd78e.js",
    "revision": "042ec23b6d4a378c759be93237295283"
  },
  {
    "url": "assets/js/52.0ac18462.js",
    "revision": "1b39e9d6f1000313a3c96598bc21aca4"
  },
  {
    "url": "assets/js/53.c44e4be2.js",
    "revision": "4b1c286fc3ec8416a49642fb2f6519bc"
  },
  {
    "url": "assets/js/54.4760289e.js",
    "revision": "dc2715acfc087679a16bee3e4c0d9cb1"
  },
  {
    "url": "assets/js/55.09e17649.js",
    "revision": "7818ec1b8f9745efdea09fda8436cd12"
  },
  {
    "url": "assets/js/56.5d552e8b.js",
    "revision": "03b2b6b41e380afad7e754ff6059f067"
  },
  {
    "url": "assets/js/57.8cb59dc7.js",
    "revision": "ebe87555d6b5ac3ec1f27159bc018db8"
  },
  {
    "url": "assets/js/58.880e2c24.js",
    "revision": "6c7776ecf49d1a68ccd579b3ac83d111"
  },
  {
    "url": "assets/js/59.8811ee06.js",
    "revision": "b7d361e13e846053a9e1e4484221045c"
  },
  {
    "url": "assets/js/6.0a844d4d.js",
    "revision": "0a0d253bf1ebc3e7e011e1f997bef8ce"
  },
  {
    "url": "assets/js/60.342b0e53.js",
    "revision": "3e61c519117c1f3f8d5be21f3e7a618f"
  },
  {
    "url": "assets/js/61.11f6036f.js",
    "revision": "0a4fc898f2f281efb0ff94bec87f5b12"
  },
  {
    "url": "assets/js/7.c314e3f2.js",
    "revision": "6a11b050f1cedf3f3d45250e064eafde"
  },
  {
    "url": "assets/js/8.fd3e8aa2.js",
    "revision": "d738749e2bf65110fd2efd0768f0a0c7"
  },
  {
    "url": "assets/js/9.fa2df6d0.js",
    "revision": "b8551c933a6669413ec7d6068aa1d99b"
  },
  {
    "url": "assets/js/app.1b646b77.js",
    "revision": "b313bdd455c04429c5a97ba84c8cb497"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "b3a46510d8f91a9424556b5f7c5d0de9"
  },
  {
    "url": "category/index.html",
    "revision": "5723647ee45edccec6a921260111b42e"
  },
  {
    "url": "category/learn/index.html",
    "revision": "c18971efd5de12e5566ce736aa5a6c96"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "0375c096234fd833aa9e2cd673912d20"
  },
  {
    "url": "category/project/index.html",
    "revision": "dc690897d45975059f986c514ae1a4db"
  },
  {
    "url": "category/summary/index.html",
    "revision": "631842639f377fbfc621bb77edd69d49"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "38901f05d83014d88e56d7c52ed691a9"
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
    "revision": "fe4c1bf9dc9658d54af8e96d19b6e809"
  },
  {
    "url": "lib/index.html",
    "revision": "adb4412093c909943e7a6f091c93416a"
  },
  {
    "url": "lib/m-less.html",
    "revision": "055e55c565dbf83fb1b7a5199f901c97"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "37e304207208adb6130ccee2506d2e3e"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "0881cef3e6388febe9840d0a0ca70f5f"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "c40ae46231b4966904c28104fc43df04"
  },
  {
    "url": "lib/usercss.html",
    "revision": "acb829dab0af288b082670df1afbe17d"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "08bced05a43d5d0eb768132fdc66dbbe"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "47d2851ecf9ebf350ab00d21e0c1c4ff"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "e27cec1a134c2c944913a9da323c01e4"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "a477da44ef3b521f9aaceeddefb62ed6"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "57c3c3302fc21636e5e80dc120cfcacd"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "1de2f95c034377f6c4f04c76538ada9c"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "7a7e153b84304bbda2446d4d48b71b72"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "cbe24a0ebb5f12638431af9a2ed966eb"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "ecc56a6fc6a6f8faa4e17c81037c6c9c"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "3e2c408696c6993cb86b39aae259984b"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "02948c6eb2214f88497d8568b394957e"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "b1e4f3808d65baba4b2ed694bf116f7a"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "2dec597e06165e3d053fb08e936d1a7f"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "111d6162235843eeb30fe26409f25779"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "64260387629f2d47b4470eeeba07e3e1"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "da683878701dd48b6e3e32a5940bb3fa"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "427bee154c889ceed36aa8ee1884e3dc"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "f42e8eb95eddc97df208328eacb8a83d"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "12c587538e0a34b2350707e830054212"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "6fd3a2f92e3b0afcef8fd096a8f6b195"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "e5eaacc598b73cd533d02dc3687aa97a"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "4f26c6acd38c654466e2f4db4a1d66c6"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "8d72d52904ec9470c2f6f226f211774f"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "f13bc1731d40f62e9bd5c87cbefc738e"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "a29bd4e45ab4cd47790dd22d3cec89f5"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "50b96dc6c18656ce88dc6d596aac5e13"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "273ded9986840c274b1af89d0452841c"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "e758582e69c056c1f64d6dc497917627"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "18971ffe4c3e366c68ea3ccdefeb7d36"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "4c374e310a5a6ba0d0f6deabdb08d68a"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "21195be1f2ecda9c7c649540e813f304"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "0b05a1e6605f16d4f8dc59d14878d96f"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "f138977fc5a7657224fa283c992bed23"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "f4a2c76cedfdf781eaeffe59439ac034"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "70c29c4c2f5012e32205ba2d30a182be"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "3d71fbbd5944cebf5512b5053a5fd205"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "0dbec0b507e3ea1e585e7f171bb9730b"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "e0c850166f0bc9fe6b12d9d26b1a6c46"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "1c79f48e9ea86dd24d20358aa21b6f34"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "a5f5bf9216616134d963bb82307c1fbf"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "828be80834a3afa0e074723c42a0fef9"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "ba94eec78b5d0ff2d2f6a9efff4af46c"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "11b513aab1fbd08cf8506aa0b3455377"
  },
  {
    "url": "posts/index.html",
    "revision": "48c4d28ecf12a645b3456e1c14297cfd"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "f08ce2320da53d6c0928156466f6331a"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "2e80e14f57338ead9615a2a3a3a71d22"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "42feba499e579ac9a6a4c68771bbf2bb"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "effdf0de8727c6bd88a90ab9b5e66197"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "c6855bc34d6add1c3f770af1ac8c38e4"
  },
  {
    "url": "tag/css/index.html",
    "revision": "cf46fcf10e89b10f197f9ed9eb5d9df9"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "1db43ebd5c957268a0acb3c40d4f81f8"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "11517f2c4749eb198f736ee77ff7c6d3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "10025a6cebadff4526988e101ab3b115"
  },
  {
    "url": "tag/html/index.html",
    "revision": "89142ff547659c2ca232c31205dca7e5"
  },
  {
    "url": "tag/index.html",
    "revision": "80de8dc06ed585a7682ef3fffe0e108d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "abb54b9cfe85533dc1d06817a2a4d6bb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "12f80c5164db2cfe1aae8f71014d3cd1"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "81b0640e7d12f622b9107c379803d1cf"
  },
  {
    "url": "tag/json/index.html",
    "revision": "32f74c41d6426c6a6b4780a0cd9aa5a7"
  },
  {
    "url": "tag/less/index.html",
    "revision": "3bca4746e367eda7f8c48df50f257f66"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "3e8445d511d0dbc96f52783b65ff008f"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "f0a58817f33453759a3efe5da734c025"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "bf6ea1ae30fdff3c5e4f23cad08bba72"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "c9f1af6d2138199c82bbb076d6e622d4"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "df847753be69e2cf53f5ca969da4000b"
  },
  {
    "url": "tag/php/index.html",
    "revision": "9bfa74c5f571977fef563814886e8da6"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "cfd8d858035be2e6abe7b958bd5fb165"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "96debd9a5083cf14909fe06e4760c82c"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "bc2d81a4468ff3088de4a244b8781ca2"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "4e9baef99b73062eb00905b2b64e72cd"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "28daa9de8dcc8e6fc391fa9182a68c62"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "c699cc69a7441764051fe983e1ca567e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "996f158658f79dd057869fcf09907c1d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "76f9e4d5c027e590348e6ee750673ca4"
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
