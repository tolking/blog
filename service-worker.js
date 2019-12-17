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
    "revision": "7e55bb91aed534e007fd80aec5bb2ea8"
  },
  {
    "url": "about/index.html",
    "revision": "4947ea56336581b2cd65aedd862484d7"
  },
  {
    "url": "assets/css/0.styles.a4e58723.css",
    "revision": "ffca1eea3f61a7786bab1f4a0465b1ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cd2605fd.js",
    "revision": "00cabeabeca58aee45d8592dad75652a"
  },
  {
    "url": "assets/js/11.d572fa9d.js",
    "revision": "f7a2c6d33f89d4e1a02d7eb104a350ba"
  },
  {
    "url": "assets/js/12.492de67c.js",
    "revision": "337d7261201c14a48e587297130c8cce"
  },
  {
    "url": "assets/js/13.1d9d189c.js",
    "revision": "7b90413c26a282a1f23cdaed81af29af"
  },
  {
    "url": "assets/js/14.f7b9adef.js",
    "revision": "403cee976fe36b628a3c515e2106efdf"
  },
  {
    "url": "assets/js/15.9b1cfed7.js",
    "revision": "fe0ab83a019b4527b7b93d266819ba40"
  },
  {
    "url": "assets/js/16.9909e95a.js",
    "revision": "e6c299edc2bd13222fecaaa65badc69e"
  },
  {
    "url": "assets/js/17.e9377493.js",
    "revision": "aeccc3ee2bf728ba24079e375fe45352"
  },
  {
    "url": "assets/js/18.1faeed04.js",
    "revision": "a2b56c2aaed5a45b45f838ed33f7d4e5"
  },
  {
    "url": "assets/js/19.9d015264.js",
    "revision": "3a6b8924a95665daa26f7973e705e3cf"
  },
  {
    "url": "assets/js/2.75c8def3.js",
    "revision": "8157ac65e272cd5e3d541bda629b38c5"
  },
  {
    "url": "assets/js/20.5eb5eece.js",
    "revision": "abf644919ba26052f4cd96e843d623b6"
  },
  {
    "url": "assets/js/21.eb5d6d78.js",
    "revision": "975adf1b01ead2e3792145a3ccd345c4"
  },
  {
    "url": "assets/js/22.826427ed.js",
    "revision": "af891ec845f3ebb8dd1612b035a93991"
  },
  {
    "url": "assets/js/23.a19701d9.js",
    "revision": "0b278523aef125925f69d568e42fdc80"
  },
  {
    "url": "assets/js/24.fa5d187d.js",
    "revision": "641f9145fac45758834e92509ac56aee"
  },
  {
    "url": "assets/js/25.f907792f.js",
    "revision": "4ac8ea14958c9c90e01a14ad88bf7bfb"
  },
  {
    "url": "assets/js/26.f8bcbe50.js",
    "revision": "5c24328ba4a8bd6fb7a192de328863a3"
  },
  {
    "url": "assets/js/27.4fbd58ec.js",
    "revision": "418b17356bec93cf448a727d68f0d2ab"
  },
  {
    "url": "assets/js/28.f74f7bfb.js",
    "revision": "d92af8fda7f1171c96341fec8391f091"
  },
  {
    "url": "assets/js/29.f4db4724.js",
    "revision": "71c3822f2e4bc5ee04dc2cafbfd1c656"
  },
  {
    "url": "assets/js/3.08afb371.js",
    "revision": "bb44e68595881b68b667bdc28e877c2b"
  },
  {
    "url": "assets/js/30.f405b3b4.js",
    "revision": "729bbc1cb0c0afe37444e531f9793ee0"
  },
  {
    "url": "assets/js/31.23ba3520.js",
    "revision": "fcb90e5884bd9970b6fa13c48394c8e2"
  },
  {
    "url": "assets/js/32.ff13fa30.js",
    "revision": "0f3e51b731a1088dedbb9c18fb0fed5c"
  },
  {
    "url": "assets/js/33.a5d6891d.js",
    "revision": "b121968d2a8f10b08b8a2b68955c9523"
  },
  {
    "url": "assets/js/34.bf890e61.js",
    "revision": "081b759e70267d24fa0b3b9c4ff392e3"
  },
  {
    "url": "assets/js/35.26899104.js",
    "revision": "773836a09a98d4a6a3c5c374175c58cb"
  },
  {
    "url": "assets/js/36.83496e3b.js",
    "revision": "e7fac1eef7626363721fa855d0c72211"
  },
  {
    "url": "assets/js/37.97825c22.js",
    "revision": "a2e3e84ba86109ec12d20358eed060b7"
  },
  {
    "url": "assets/js/38.bd123f18.js",
    "revision": "995a07158e140f333cb150d745246c28"
  },
  {
    "url": "assets/js/39.771457eb.js",
    "revision": "7e64bd601ef25a32505d441090d0d0be"
  },
  {
    "url": "assets/js/4.eed92f34.js",
    "revision": "86ddb8c0e8806e2d1c15de1b08faacfd"
  },
  {
    "url": "assets/js/40.583be86a.js",
    "revision": "ea015dd81f62b35a1131038af9f48a8c"
  },
  {
    "url": "assets/js/41.a39e29a7.js",
    "revision": "9d733bbfecf961baaea566646cfc1195"
  },
  {
    "url": "assets/js/42.c703bbf0.js",
    "revision": "85a3590a784d3341fe5d2ca9d7652559"
  },
  {
    "url": "assets/js/43.b6be0c46.js",
    "revision": "17b8b487c430714305f1c9916b894166"
  },
  {
    "url": "assets/js/44.4538fbc3.js",
    "revision": "5e94d0a2984f28b7d052596a514b1291"
  },
  {
    "url": "assets/js/45.017988d5.js",
    "revision": "a76637998b0ddb04ff1d4d62536931c7"
  },
  {
    "url": "assets/js/46.56ad5a88.js",
    "revision": "150e83a343a588252dc31a073c4a4582"
  },
  {
    "url": "assets/js/47.884a1afb.js",
    "revision": "4ab9ee3229e1d9776ffbeac2f57a1a62"
  },
  {
    "url": "assets/js/48.bcbf7245.js",
    "revision": "0393fb58ed6928089e3476571c66cd92"
  },
  {
    "url": "assets/js/49.c51da37e.js",
    "revision": "535306ef79e535bd77c1835e8cea6532"
  },
  {
    "url": "assets/js/5.528667a0.js",
    "revision": "da4dd3c1767b62d53f06e469e45e441b"
  },
  {
    "url": "assets/js/50.2b9ee65b.js",
    "revision": "e0aca62f22c7b1b47cab46eb72e42146"
  },
  {
    "url": "assets/js/51.1c5a0f34.js",
    "revision": "a295f00b31ed898b4147ff58b1084f67"
  },
  {
    "url": "assets/js/52.b2327391.js",
    "revision": "192c7a972f2311e6fb4aa1702364f1ff"
  },
  {
    "url": "assets/js/53.cd3684b6.js",
    "revision": "4ac974649a35ae3d74217fa53f20e073"
  },
  {
    "url": "assets/js/54.79736ac5.js",
    "revision": "7630de9e5a9d7e7f85ed3f8b5ed1f586"
  },
  {
    "url": "assets/js/55.53ec3bdb.js",
    "revision": "e0e39975a87b063fbaeb36757d06c0ee"
  },
  {
    "url": "assets/js/56.f90765e8.js",
    "revision": "c3c43ca9a9f56ac0797c576cf1557225"
  },
  {
    "url": "assets/js/57.efe3d38a.js",
    "revision": "723c8ffe4612930d28c210171434d8ee"
  },
  {
    "url": "assets/js/6.b2f7181b.js",
    "revision": "3b9ffe2faf927a573b8f864e2ebec1d3"
  },
  {
    "url": "assets/js/7.bb37da8e.js",
    "revision": "78ff027c5900114eba2f61a5311141ff"
  },
  {
    "url": "assets/js/8.5089e947.js",
    "revision": "0f75ca705eb9894535aaa4b5f4a18103"
  },
  {
    "url": "assets/js/9.ebea94ca.js",
    "revision": "75ed45c9e449388d317b34edf8952042"
  },
  {
    "url": "assets/js/app.7e1347ac.js",
    "revision": "c9577b3ec650f2e0b942210c3b5acaf8"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "74c1b0f155ea18146818396422ca6467"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "66610292784e902e2bdea89e0d549bc0"
  },
  {
    "url": "category/index.html",
    "revision": "3c5ed61b1859232b03588dd4cb964e50"
  },
  {
    "url": "category/learn/index.html",
    "revision": "ca0964eb28e89f4d5edb3b7caa813a01"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "c0c47f3acc9a64e853076e7a93b613a8"
  },
  {
    "url": "category/summary/index.html",
    "revision": "bb9f357f9a3d89cb614c4b99267d40ab"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "e433dbc8409fbaf4baeb278fd6e59e2d"
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
    "revision": "74457f083c8fd95209ea163d9b6e5145"
  },
  {
    "url": "lib/index.html",
    "revision": "b3269e1379159b18218babc9bb4a59da"
  },
  {
    "url": "lib/m-less.html",
    "revision": "b9a7e0a769e30b9ac022d074e43314be"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "9e1a098cd27dab4bbc78de30b96d384b"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "9312489c60161093339ec26941c54759"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "a6425690b61f58621947ffb421872829"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "a60757ed9ff01b90a36ea9af6f2f5f47"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "7e5c90eb521beb52825fb246b5fc13ab"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "0b2d5840a2b5073c7a0fb9a5008519f2"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "5b9c0aefd131b6c852883b779be62b37"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "fb81624e9e5c559a52c78739fde10ced"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "839a48b8d235125c8d082b5d9d715c81"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "57f81c81975c200689ba90fbdff4bece"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "5bd5697cee32cdd4bdb198aed679681e"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "0405521c618a28568f95fe09bfcffa68"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "8fc3cf28388a32593ed21981cfcd764f"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "52dfea2e985255c47f19d07d316da4bf"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "4b83b173df7b24c49be4f272e512c81b"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "c691cee483a7e3a265ca741a7c9b0395"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "c3b5695745c957d1fbb0994d94cc83f9"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "210182fec39ecaa3235b64707ffda76a"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "398a4159f567c6ec9dd7095ab4905301"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "05a997169c799c986f381f28c992fca9"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "a0988a42436b92df2c4d54841815e65c"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "57853b62827747a2b02e41bb1cd3748a"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "a4c746eee7b0487701143b47f3524052"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "273ed60775b10bbb9382fe0514958c9b"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "6f7ea70597f04c7b4cebfe41dd69eb22"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "34478a8eb6eb05720074283f3f687ac1"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "8e18f1e951b81617a9203eedf3869d75"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "c1719bee76501346f5415a08d4ef52ce"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "e1b6c39efd1c344d7d5f518d2c316ba6"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "c61e05cf4974eb4728d923008cdd3b8a"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "8c314b9b7b1c72f530e002d3487a36a0"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "21e2733c62c109d948938fa7d33e45ef"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "e0583c4ecddb8824bfc74fd6b841cfcb"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "0bb7155bf0cf22f797b3d8c9feb4ee2d"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "d202b1c89e9e6b6127f16cbca88c8401"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "7b61a795463167128a35fa9283ab6bc8"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "440a72ed3c33403b6548be6a3450eb37"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "8f69f2a28acfe0eae223765696b28658"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e7ee3011a7ca6d6c62e979ad34aa950b"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "9cdd1af91b881552c0d1bba1d8b00233"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "30afb3cb9363ba1c086f6b812cde47a2"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "a8c6948cd75d4fe5ffa3736ff470972e"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "12c9ea09f2641836f898f2fbd0bcde66"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "b1d98042f20b2105dac924ff7b3016bd"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "e1c53bff5e68e7442029e14e936e47ff"
  },
  {
    "url": "posts/index.html",
    "revision": "43ee014df1ac617acd9701096693fd2d"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "2ae7f915c72ba05d98cbc07b6a52aca0"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "84a627538617be3fd902553a54558e25"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "6730f4e1cad60811ff3cd74ac64461f1"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "5f466a9c1c97a58f3a774e0280a1f10d"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "e81e8b213702268a1c4a24d6741a3bf7"
  },
  {
    "url": "tag/css/index.html",
    "revision": "7d9a0622e246391ba9b2850df94fa66f"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "2cfb87679a1897b4349c1b298534ac7d"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "c2cd9c4d075298c5d1ac6eec3e813f9b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3bc6cbdd7240eaee3364c72f9aa711f3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "db97cd527c89bb3e18df8f50b7307fc3"
  },
  {
    "url": "tag/index.html",
    "revision": "27d43683f148423c8b391810d678395b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "15bba436faeed7046e5d3cc8fc65d35e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "35acd6c4732cdbcd4ffeca2ea70ddba3"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "1fe41502edbd59dc4002ba1d63a460ad"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f6de35d5cb3aded5ddb543c1f2a4ce96"
  },
  {
    "url": "tag/less/index.html",
    "revision": "ff93b4c577ed1487f9744f05f1a0b560"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "8aad206c34619f36a260fa38a0b81e57"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "bcea373f80a5b563c3a6641d03556ae5"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "4bd69babb74e9a283d2bc11501e97362"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "8886380ce25074d5759f26d276902a3a"
  },
  {
    "url": "tag/php/index.html",
    "revision": "cb8ef09c51f65ac7340c583c4f3331e9"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "d5f411e6ef2864d9aa94ad8b38575aec"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "c7cec6393215a10e1292a0eb5897a7c2"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "332e8911fc2398aca778ea5324d5ead8"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "8b97074d56eb9d9450ed0ee3fd60426c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "3f45adfbe0adad39e1c3516136333193"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "01114f8d12aee604be1bccfb2f79381c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "87d0ebe3ddb6653cf163b83403584d6b"
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
