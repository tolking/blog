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
    "revision": "0a8772323b5dba3675af35e98c468bd7"
  },
  {
    "url": "about/index.html",
    "revision": "e4436c95947725533d068512f434c890"
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
    "url": "assets/js/12.85498ac9.js",
    "revision": "30096449095c776f72334e2fb6cc0316"
  },
  {
    "url": "assets/js/13.4db54abd.js",
    "revision": "63bd0aad96e5cb89350ffb88cf0bbcd5"
  },
  {
    "url": "assets/js/14.33c6591c.js",
    "revision": "43b8b729e0c248ea5773ebfec33d8816"
  },
  {
    "url": "assets/js/15.f16c03a4.js",
    "revision": "9f735ce277e520850e65dee33a0d8cf7"
  },
  {
    "url": "assets/js/16.bfc0182d.js",
    "revision": "3b4ad9a833e60c9b4a8d702ebaf27594"
  },
  {
    "url": "assets/js/17.b34fc4e9.js",
    "revision": "572acdc89b1e19364a1693d293ab1016"
  },
  {
    "url": "assets/js/18.59342155.js",
    "revision": "489fa10a3c08525180087a3cbd6568f5"
  },
  {
    "url": "assets/js/19.97721595.js",
    "revision": "9587bc985da05880fcaa840c084509be"
  },
  {
    "url": "assets/js/2.5f455285.js",
    "revision": "c312a2768049aeb53d9540efc03fef2b"
  },
  {
    "url": "assets/js/20.df476fae.js",
    "revision": "0d57af88532e0774c82ae3372da266e6"
  },
  {
    "url": "assets/js/21.4e27fff2.js",
    "revision": "aca13cc3e3569679ff429eec5b957238"
  },
  {
    "url": "assets/js/22.ed57a8d0.js",
    "revision": "8fa6fd47015a33cb4495d05f901233b9"
  },
  {
    "url": "assets/js/23.c5103395.js",
    "revision": "5517112f9bcf934411155f312472ac6d"
  },
  {
    "url": "assets/js/24.0bdd1c8f.js",
    "revision": "4d418d739b8245b21338ab491399bb81"
  },
  {
    "url": "assets/js/25.2a2140f0.js",
    "revision": "673068a61486d162fd37dc3cb4511414"
  },
  {
    "url": "assets/js/26.219feb16.js",
    "revision": "9dc0c2611fdc3c3cb589ab309c30692d"
  },
  {
    "url": "assets/js/27.5e2b5e35.js",
    "revision": "629feb5b3240cd641caeed185a0d4ba6"
  },
  {
    "url": "assets/js/28.c5377f59.js",
    "revision": "f8a6b3dae059d4c604ea3d3f21d622a4"
  },
  {
    "url": "assets/js/29.e235c534.js",
    "revision": "6422aa0e086b86379a17e379a6d7b82e"
  },
  {
    "url": "assets/js/3.68fb7d6a.js",
    "revision": "14d0481db1a79ac68bafd89ef2512f48"
  },
  {
    "url": "assets/js/30.ea5ef9d2.js",
    "revision": "aed1e0c7ac3ea15d4dc62e4f77f7db6c"
  },
  {
    "url": "assets/js/31.36a9778f.js",
    "revision": "ebf1278dfa4a77d71969600f8c4e9fc1"
  },
  {
    "url": "assets/js/32.0dbaed28.js",
    "revision": "c28562033f84e63ac604cc1cfd8059e8"
  },
  {
    "url": "assets/js/33.631128a7.js",
    "revision": "16827ec8d2ecbef82af42bbdd9a40db0"
  },
  {
    "url": "assets/js/34.814abdde.js",
    "revision": "3c1e40d33db8e5fa79303a23b7a5f567"
  },
  {
    "url": "assets/js/35.b1f52988.js",
    "revision": "15f372ca82ca9de52401fd367f91d64f"
  },
  {
    "url": "assets/js/36.913a8c46.js",
    "revision": "fdcfb9bc2b8215b703137d0b8e61a833"
  },
  {
    "url": "assets/js/37.634e0e72.js",
    "revision": "fa853b97fcbc86b8b14d864a19a1ab4e"
  },
  {
    "url": "assets/js/38.42bcbb79.js",
    "revision": "be35733e3866618cc56a3add27b13bdc"
  },
  {
    "url": "assets/js/39.318e552d.js",
    "revision": "82b6394a35e1f0d5b414204a388857e1"
  },
  {
    "url": "assets/js/4.753b63c2.js",
    "revision": "396775d0e4689e01bd88367b48ef6d9f"
  },
  {
    "url": "assets/js/40.68a60eec.js",
    "revision": "db7d037e06e9b35b0304ebbfb56800ff"
  },
  {
    "url": "assets/js/41.a7e10b6a.js",
    "revision": "a2432a3515f375e76462a130e38199b0"
  },
  {
    "url": "assets/js/42.3a7af306.js",
    "revision": "7aea3956e5f710b60e6ffed485db6016"
  },
  {
    "url": "assets/js/43.5826c648.js",
    "revision": "e7febe1f9bb588f8e6fbc871ef17127c"
  },
  {
    "url": "assets/js/44.df73b6a1.js",
    "revision": "23ee710d9ed0f81419c636770a1aea6c"
  },
  {
    "url": "assets/js/45.4d97b98e.js",
    "revision": "bfc6fedd92c3a21fac0376660da989a1"
  },
  {
    "url": "assets/js/46.2f0a81d9.js",
    "revision": "df9f61796802f6be2c0fac971cc3b256"
  },
  {
    "url": "assets/js/47.b4d4078c.js",
    "revision": "9f9080debb89b7a4f612f0b036d3ce5a"
  },
  {
    "url": "assets/js/48.4235e2e7.js",
    "revision": "e87ca935d2bf27894f3d8c6fa844eb1f"
  },
  {
    "url": "assets/js/49.4fce61e4.js",
    "revision": "77f93b4551280735eb7a871db1557f46"
  },
  {
    "url": "assets/js/5.94b7fafa.js",
    "revision": "c0b4f280261606fffa22d6145a4bdc25"
  },
  {
    "url": "assets/js/50.ae123ace.js",
    "revision": "a18bd1a20f130b7ac7760b02912d74a0"
  },
  {
    "url": "assets/js/51.f9495344.js",
    "revision": "6c9eae009f6fb8c7bbeb7bc69c2131c6"
  },
  {
    "url": "assets/js/52.fbcc9731.js",
    "revision": "649d7b9006bfaa59508af27b2e7942ad"
  },
  {
    "url": "assets/js/53.72f2be08.js",
    "revision": "e780bd73adf02481543ecc5d05354395"
  },
  {
    "url": "assets/js/54.98d66767.js",
    "revision": "cf3852c75a8dd1fde4001c8664eb9ddd"
  },
  {
    "url": "assets/js/55.86df25f8.js",
    "revision": "93eb2d541fd3cf7a8ec7802256583719"
  },
  {
    "url": "assets/js/56.5ed8c558.js",
    "revision": "093bbae0ef7bf4799ae3b87d3d76c706"
  },
  {
    "url": "assets/js/57.01eb881a.js",
    "revision": "88ae62abe10154c119e9fdb217b1ef1d"
  },
  {
    "url": "assets/js/58.2592263a.js",
    "revision": "fc0ddca81ae052c608f183bf355639dc"
  },
  {
    "url": "assets/js/59.1a71b4d3.js",
    "revision": "0c92e6d554917ee254b8e212e9d96959"
  },
  {
    "url": "assets/js/6.40b7f879.js",
    "revision": "d3a91691f5b52a47b6d2e1c039eebb9c"
  },
  {
    "url": "assets/js/60.c00f68ea.js",
    "revision": "7f746dbe9c2cad6fe8413b4921365dbb"
  },
  {
    "url": "assets/js/61.88fa2941.js",
    "revision": "5a22a3040c933012c9affdd7e780f6bf"
  },
  {
    "url": "assets/js/62.6991d9ad.js",
    "revision": "c9442d8c41ca9fa970f59a990b01bcec"
  },
  {
    "url": "assets/js/63.cfe2f152.js",
    "revision": "48f73daecb6721a991bb8fef8b295429"
  },
  {
    "url": "assets/js/64.706bfc20.js",
    "revision": "c6b9abcdbcbd21ec810263007fe1d82d"
  },
  {
    "url": "assets/js/65.bcec32d8.js",
    "revision": "7045306a5dbfea7578296a00a302b541"
  },
  {
    "url": "assets/js/66.e6abeb33.js",
    "revision": "7f01535d6f23654622f5cfb11f0d1b88"
  },
  {
    "url": "assets/js/67.d879bd74.js",
    "revision": "07122ec7c6034154f98f1f829777dd5a"
  },
  {
    "url": "assets/js/68.6bd398f1.js",
    "revision": "1f51726b5f7c7227b04038ad4cc243fc"
  },
  {
    "url": "assets/js/69.e3730944.js",
    "revision": "d1cd9eaf55cb3bd47c68fd797ea493d7"
  },
  {
    "url": "assets/js/7.4d2e6b58.js",
    "revision": "1d801c843d21f782814392d06c506ebd"
  },
  {
    "url": "assets/js/70.45b9ef12.js",
    "revision": "b696e3854f1c951a13b968cfb3c9f1d1"
  },
  {
    "url": "assets/js/71.1c6e48ed.js",
    "revision": "2d1dfd04e1ce4c2f9006be11e02a53f8"
  },
  {
    "url": "assets/js/72.60de7d1d.js",
    "revision": "8642789ee5a4e69d964c027b9e89f567"
  },
  {
    "url": "assets/js/73.4f2a50fb.js",
    "revision": "ad73651e2fbdf1d6a0ea51650fb49f16"
  },
  {
    "url": "assets/js/74.1823854a.js",
    "revision": "3fa2c6b1941dab76444d3323cf306e27"
  },
  {
    "url": "assets/js/75.cd8862a0.js",
    "revision": "902f39e4eff00c02a26eebd843167620"
  },
  {
    "url": "assets/js/76.d8e86667.js",
    "revision": "6be7d54f32bdbcf3310c78b88bd030b2"
  },
  {
    "url": "assets/js/8.1db0e677.js",
    "revision": "e09daafd9e0fe73eb0609e8f963abf35"
  },
  {
    "url": "assets/js/9.c8f58e00.js",
    "revision": "579ede732c56a24020e6f8f506dfcfdb"
  },
  {
    "url": "assets/js/app.c54592f1.js",
    "revision": "1a6d5db2b95bb5355e953479100c88e4"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "1b6a98a06507748351742f4994916dda"
  },
  {
    "url": "category/index.html",
    "revision": "ea37f6153716cff93425aac24df0a724"
  },
  {
    "url": "category/learn/index.html",
    "revision": "1b796898068ebb2feb214d9ca6ce64a8"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "9a475f02284c710a9eef926deb92632c"
  },
  {
    "url": "category/project/index.html",
    "revision": "f9358d03ac4393d76b6177fdc2ff0a6d"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "8c99c0c60657cbac8aa507133689e127"
  },
  {
    "url": "category/summary/index.html",
    "revision": "f0f98b0e48af5471388fb8a89abe2d80"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "f7814907fcfff5bf2da8a63e40f48d18"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "5af86d3d7e656580a491b5a6f28d4c69"
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
    "revision": "2e12c4127677866fdd8e9daf17f7dec9"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "f7a48c2dd48aaee853627eaa7955c8a8"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "c6a807cafd967001db4ef09000acb35a"
  },
  {
    "url": "lib/index.html",
    "revision": "b3e44643e03ea1ab7b7d33629c4f1a1a"
  },
  {
    "url": "lib/m-less.html",
    "revision": "4d1a0b14dfddd710110c3a40fb5fce11"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "02e18382f3e635dea7f054f18b940767"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "f74a25c6013d938a0d7942c45a5dcd38"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "1a3d82bbddf1b1948969146087299799"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "6ed39f2002c3ab17ac4401095db1c105"
  },
  {
    "url": "lib/usercss.html",
    "revision": "c8a72f39133c5e3dd327c708e581ff54"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "0aa177c70a3d1829d77fec98da081284"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "134ccaf1e5dfde5f6e4bd3b939855515"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "40a4bbf7e88c0b3ee7a53e5eaa646a21"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "4e33bb16ae7da3647c10dd8eb67ba8ff"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "298c5a41ce7b5f657c1f3ae53e2e0782"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "41138c634aab35b7e03df7187f2ebb79"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "621533f487edfc66e2cea3e39fcafab5"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "af91fce700b4ce7558a8049a3958148b"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "d1bd0e49650112cdffe88d68aac7e801"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "d21db23fbd235eff1011458d7e93a6ba"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "ae4df75bfdb42c8a3768bbee01f2a984"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "a1b14abe88f526280d7ddf10f6250897"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "87fe7cba958af809832f9b340bd85bfd"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "92680e1a84d5a226d2744a6db306cc64"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "b2794ef9f3a403416d00d9af9dce705b"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "577dd7a3473efbc49bfc5112a748ad09"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "4dc05f1bc0c1dbea7b100dbd058255b9"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "9c8c376c51eedf8ce9ed92ca1d82b6ea"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "30f4bf14ebb8ca924ca5b2320ebfb5e0"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "3f1c9770e8dfc6a3ab2d1b0721f5b92f"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "e3554ac60143fb04ff7ab7aeb6183d97"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "aed23e8b1e39059d967d382212dba095"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "e6985f06b8b2308b1d38c6d748b8e646"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "fcbf2044428d073a573d7b8e42995449"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "7e356790b06786e7f72e6a42232fc3be"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "80bffbc206b4aea437314aa86b0d0423"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "3a66496b4f9d0b9352995114076b4210"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "29caf64aa6e6401d5b9bf740d6bbe0eb"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "b220bc71e411d756719e869ef294e44a"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "9bdfc616a3e49822b19871af68d0770e"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "bf5ea5bde7e62c36e8e9d4a2bd4b0891"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "f6e0b253246baa7717fbec7dc685f071"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "4f74e95c0682ffb0cf7dead490d658ff"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "ab7a88352f6213f1e9c74aa0a5a84f68"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "fc05945b5ad580e14039e2133dd0401f"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "5a7a72f50d5f7ddadb9e1cf855b9ba75"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "7138add41fa07e4243394dd27397d41f"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "4e02535a8e70dcbc24da3e21422b9bb6"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "7af4c78d376f5bacac062d7bde905cd6"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "0394ff78eb5d1b739a7e2d8951438fc0"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "07b6e0a62f3c1fdcd1053a07a92a3ecf"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "93bbd63b1afdeefb80bd8dfb92487ad1"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "09b62d59d5189cc1c41ca00ee655a052"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "2475b49845652530d1d1b55d25c69e87"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "ffe659e6c31ff96be88a4878b5b0924a"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "6d45bff029d51a95192fbe2150a08592"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "1dbb35e528fd22165b8664ffb12d4670"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "19ef72b3d430be69f6363e86bedecc29"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "8429a8d230cc127c8be61540b08672ad"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "d873234c73304da0877a79ed8e3788af"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "3c7ad0f1421144fe9095ee18aca40a5f"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "e80a1cd72aa586f7bd2be9f0b373e5ea"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "b944c21b434cd1fc111fcebe54c1040c"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "028d4f751ad935edc7d05be42066a8ee"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "2e7599a3585188968622eb67452f8349"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "1f0ab4f4054ebfdba1933517e6055af5"
  },
  {
    "url": "posts/index.html",
    "revision": "ffeed335adce3cb0ddd4d0ccba1d79a4"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "af333b385c89a284dcdebe25d02a870c"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "74af07f63560725df6151aeea336d870"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "30367ead303f46eb38a54326d2ac6057"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "d6289387c1988f18846cf94f30b2e3fe"
  },
  {
    "url": "tag/android/index.html",
    "revision": "eab2004793eedade84b2a5ad44662a4d"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "083d810657b4d2dbc0bd28b1bb424560"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "f5874c9d5dc13ae0e8a50355e1ddadf2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ae59172014a163c0584b94869b1ec57a"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "3c9713627d77d0d0d5d63bf5693ba58f"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "2f99f2805f4b095909e1330aee3f20c7"
  },
  {
    "url": "tag/env/index.html",
    "revision": "c518865e11a29718e7d447b4d7665c4d"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "2a1aac4136c96d4ffbc52939ba4ef8ee"
  },
  {
    "url": "tag/git/index.html",
    "revision": "304b61aebb31b6513e234846c5e3a98d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "cee51c5667f4d8c641842c10c197cd4c"
  },
  {
    "url": "tag/index.html",
    "revision": "d3ffd2dcf2e9ccbe9ae6b8a83caef0d5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d9a392891342650ba2146cd83f561ad7"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d686af062ce6e9cfeb1f5fb3bb66673c"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "03fb67dd211318a755a2fb8931ac74b1"
  },
  {
    "url": "tag/json/index.html",
    "revision": "51b8db58423a09141a74b0e030e8ffab"
  },
  {
    "url": "tag/less/index.html",
    "revision": "4bd46d1c5690a8aefc3df7d288d06daa"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "0dcbc5e234a07728de829dbb0b729009"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "dcd288fc4b0dfb0f3dfbf15c16b15389"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "d35af51a89fb627538f166798c2e1ff8"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "1c5c1f4fc37d344efeb0576b9ea3b72e"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "2c8293d34ada750ab2c84331da9f662c"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "bf9d477016abca2345b0d053340b4472"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "c5924373f42b0d606a4103cd705cc4b9"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "0360a6950b444ecf3e5592410b039757"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "a9af09ed317b54dbd5f42fdfbe2f0554"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "4c38f85650e80ef61242b094b8b60287"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "d68d19dd01f745edfd18ddc1d2d153d8"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e6434b1408ce9c6bde2d4d1aadfb9f74"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "4dcddd648a2446ed15b820598da62345"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "653da17475212c8cbf3f6a71e98a1c9b"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "98fce908fa18b58749be4bbd89ff1e01"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "10e0841339301908aa0afc096f7d78d5"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "858638cb68a6d1047961959c012fcbde"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "83bb14cb3c5a0cbc7b3ec1498584ccdc"
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
