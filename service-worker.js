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
    "revision": "1cedc94a474872f648fed8a884d32f17"
  },
  {
    "url": "about/index.html",
    "revision": "ed2c36658b3d171bd865b69fb2efa069"
  },
  {
    "url": "assets/css/0.styles.36d8ed92.css",
    "revision": "3348b10e08621a8414c605e358f34ac0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a6d7b719.js",
    "revision": "bb5951efceda8404d1b0a46dd593d4eb"
  },
  {
    "url": "assets/js/11.b88da68a.js",
    "revision": "dcef48ee8b547b5ee7c637d7fd8fd3cc"
  },
  {
    "url": "assets/js/12.66576379.js",
    "revision": "fb01f0165e8d45de257a3ee32e927ba1"
  },
  {
    "url": "assets/js/13.0258403b.js",
    "revision": "8e6212ae98cb816d418c12e77fa12b49"
  },
  {
    "url": "assets/js/14.0c3961c6.js",
    "revision": "425544e3ce22cb798c814f76cba44f65"
  },
  {
    "url": "assets/js/15.0533cf85.js",
    "revision": "9969586d9072a8aa6cc1023b6376de33"
  },
  {
    "url": "assets/js/16.4ea36799.js",
    "revision": "af334a9ecb80ed69ff86ed3dc51c1b77"
  },
  {
    "url": "assets/js/17.d853f9d4.js",
    "revision": "be7ae9339dbbf04e9e683fda7d05921e"
  },
  {
    "url": "assets/js/18.47acc4cb.js",
    "revision": "8798b1cc815406cad8c8947db210bef3"
  },
  {
    "url": "assets/js/19.cb2fe970.js",
    "revision": "54dbd41638225de3e43f7390fb9267ff"
  },
  {
    "url": "assets/js/2.52cacf28.js",
    "revision": "a0ca1a2552108cdac2e18d64e7cfc491"
  },
  {
    "url": "assets/js/20.7bbc5e8a.js",
    "revision": "7f7c4f075567e4bbd7c240f55dc02266"
  },
  {
    "url": "assets/js/21.51a23756.js",
    "revision": "fc6fb1c48813087038ba11d76da797c2"
  },
  {
    "url": "assets/js/22.46cb30c0.js",
    "revision": "b8aa80a79c4e37a693db3392a898137c"
  },
  {
    "url": "assets/js/23.e24df80a.js",
    "revision": "4e35e12843faa19b10f697f5b576dfee"
  },
  {
    "url": "assets/js/24.182bb279.js",
    "revision": "dc1ed5313f954d58d3da3215f860b81a"
  },
  {
    "url": "assets/js/25.256c638b.js",
    "revision": "809a5e9fd65adf3923465f724f5647b3"
  },
  {
    "url": "assets/js/26.c4464925.js",
    "revision": "7844ff8301c5499231fa0d505b957556"
  },
  {
    "url": "assets/js/27.21548c36.js",
    "revision": "1fb2be36c410eae90dea58f0db1d9c28"
  },
  {
    "url": "assets/js/28.1a9d6faf.js",
    "revision": "e0774c213cb3e79c8df7ea4b5fc875f4"
  },
  {
    "url": "assets/js/29.c48fba3f.js",
    "revision": "ee3d9984485230eef4dc4e9d80f6081f"
  },
  {
    "url": "assets/js/3.c32830d9.js",
    "revision": "840192d03d29a47a53aaac7377d95f0e"
  },
  {
    "url": "assets/js/30.557aea75.js",
    "revision": "f9f9983453c8347e287c928b74a0895f"
  },
  {
    "url": "assets/js/31.a54f7f82.js",
    "revision": "a515cc7a094793e92cf08b08267201ef"
  },
  {
    "url": "assets/js/32.18d6da05.js",
    "revision": "fd22c40e77df26ea157934fb6e7ff417"
  },
  {
    "url": "assets/js/33.1b2af5ac.js",
    "revision": "4f61e654715d90abe2ee5699b3448b9c"
  },
  {
    "url": "assets/js/34.0fe51c9c.js",
    "revision": "3d7d0a32ac187ca154608b0f080dc0a2"
  },
  {
    "url": "assets/js/35.3984a99a.js",
    "revision": "0c69489e5637ca81eb8f9611f2db8f49"
  },
  {
    "url": "assets/js/36.9f67b549.js",
    "revision": "d109c7f2b5cd8024c4424db5b9bf885c"
  },
  {
    "url": "assets/js/37.4f61cf91.js",
    "revision": "b8b423f689d76443cf3e1a1d72b37962"
  },
  {
    "url": "assets/js/38.1f366dd6.js",
    "revision": "3e720c52963d80ecf2a4f6be5068644c"
  },
  {
    "url": "assets/js/39.bee46e0e.js",
    "revision": "2dd3194aac1fe2ca1b5fce61e57da400"
  },
  {
    "url": "assets/js/4.b3ef1b75.js",
    "revision": "e2faae8df05ab37e06affdf9cfc5f44a"
  },
  {
    "url": "assets/js/40.685863ff.js",
    "revision": "c01d4f9c099d071fe3fde83cf68cb03d"
  },
  {
    "url": "assets/js/41.ec84141b.js",
    "revision": "3ee2cf90e2afa0a427a9cf328101dcc0"
  },
  {
    "url": "assets/js/42.98626005.js",
    "revision": "a4b18f8ca07b728858c9fce81383d02d"
  },
  {
    "url": "assets/js/43.00fa9cdb.js",
    "revision": "4a3b9c2311c2652e9137a280bd269fcd"
  },
  {
    "url": "assets/js/44.5837b459.js",
    "revision": "cd33501be3c6b50c82082af623917c49"
  },
  {
    "url": "assets/js/45.9fa0c479.js",
    "revision": "efb51a4fce66fda097df6df82f8b9f2a"
  },
  {
    "url": "assets/js/46.374ca453.js",
    "revision": "9a269d782ecf912cf80ce1762f7e3078"
  },
  {
    "url": "assets/js/47.43aa05f8.js",
    "revision": "72f2ac6c45bd0bd78c902ed4ac50b72e"
  },
  {
    "url": "assets/js/48.e612faa7.js",
    "revision": "ad8f5376df9a7813b147c13a2945b280"
  },
  {
    "url": "assets/js/49.b58f62df.js",
    "revision": "66abb2641b70aa6e976397a2aee0a2b7"
  },
  {
    "url": "assets/js/5.e6affbe4.js",
    "revision": "7f6eccb4d370f6de602dae7e0f841ffc"
  },
  {
    "url": "assets/js/50.55bf7f40.js",
    "revision": "736aea987b8f6ff69cb6b4167d92f87e"
  },
  {
    "url": "assets/js/51.15142f81.js",
    "revision": "533a884ab1c95cb8739991e04f5e54c3"
  },
  {
    "url": "assets/js/52.2ddc3a54.js",
    "revision": "3b9f7b69af47908b5f28d91605e12c4b"
  },
  {
    "url": "assets/js/53.bbf3acc3.js",
    "revision": "b2d4b4a9dc785e70e944096798bc020f"
  },
  {
    "url": "assets/js/54.5499e35a.js",
    "revision": "79892e501679db9624f71a042b6db4bf"
  },
  {
    "url": "assets/js/55.a37fbb25.js",
    "revision": "3a8670a91b08ea150490b82c3f7c7e50"
  },
  {
    "url": "assets/js/56.9cfb4fa9.js",
    "revision": "e653132a55c70785820e304a1c8e665e"
  },
  {
    "url": "assets/js/57.d8d7c8bd.js",
    "revision": "55811229ec00f24ef84bfb0f4605e4ec"
  },
  {
    "url": "assets/js/58.683bc529.js",
    "revision": "25058b5b6b5e9a806efe4b2ec8057a7d"
  },
  {
    "url": "assets/js/59.e4172b76.js",
    "revision": "faee0d37dcc35ef91fcdf78ba27e7f8f"
  },
  {
    "url": "assets/js/6.3535d7b9.js",
    "revision": "70d6da487f0c00a888d38e8adfe19090"
  },
  {
    "url": "assets/js/60.6bac4ea7.js",
    "revision": "c3d68804ef1e74ffb463ad822191ee27"
  },
  {
    "url": "assets/js/61.e8d1a244.js",
    "revision": "eb3e0048e167b407870de110b9071262"
  },
  {
    "url": "assets/js/62.00a4b306.js",
    "revision": "9624fa944d5fec203256ec89403d43fc"
  },
  {
    "url": "assets/js/63.bc3286ef.js",
    "revision": "6652e840a59aa764bdce85a977f225a2"
  },
  {
    "url": "assets/js/64.08ef0f2d.js",
    "revision": "d4af6d0cd8b5c2079681a1e7f739cdc6"
  },
  {
    "url": "assets/js/65.c9fed41a.js",
    "revision": "a73a5639af7c7571aad59363d872f7c3"
  },
  {
    "url": "assets/js/66.3d2b8370.js",
    "revision": "a2a6d55e1648e93bc785c0a0e4878062"
  },
  {
    "url": "assets/js/7.aa53f9ad.js",
    "revision": "7701926df766abe7fc0f282a2dd52f8f"
  },
  {
    "url": "assets/js/8.46ce6c46.js",
    "revision": "9663a862f8f09707fbc720595f65e758"
  },
  {
    "url": "assets/js/9.cf992fce.js",
    "revision": "d721b997e17efbf242b2493d2b065f32"
  },
  {
    "url": "assets/js/app.8ccbbbcd.js",
    "revision": "af878e894b039fa0e9a5f614f450c627"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "f05a1950998b4a5aadc83b420d9d67ec"
  },
  {
    "url": "category/index.html",
    "revision": "bb8c5c566d5b5fb85e043261e792860f"
  },
  {
    "url": "category/learn/index.html",
    "revision": "1e6fa71c1617c21337930fb4a07ef403"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "f7d20e367e55fc2d4916920afa02ed0c"
  },
  {
    "url": "category/project/index.html",
    "revision": "fa3d91edfca6e4e7d041b6b45b2e1596"
  },
  {
    "url": "category/summary/index.html",
    "revision": "1ec829397e2cb404b692cc9c91217909"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "8eb93a58922ab842a3c7c19d56644eb2"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "657bc97b01132e88c8d4feab55868fcd"
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
    "revision": "ad4ef69df7800c2335c8accf0535d3d5"
  },
  {
    "url": "lib/index.html",
    "revision": "75080ea38663831c2d677e42d79d1640"
  },
  {
    "url": "lib/m-less.html",
    "revision": "db5d33c1dd3e77f56a0caac319aa6f92"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "c47cf9b4d6f700bf81bab7ebcc887b97"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "547fff875484d502e5e787023770117a"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "b90a036f2b25f04a18c24d18485c24df"
  },
  {
    "url": "lib/usercss.html",
    "revision": "49f525953ed4533c71815cf445cc2ec8"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "d3942deb5347da535e389d95f00af7eb"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "a19b51488080a72fd9335597b2c3432a"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "56dcd6a05c85c833f439662eed78e284"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "e7a4696179bf9449e280f2cbbf626369"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "c9976d7bd2bc0e632bb4b6f5a87e19fa"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "881e6d2b47285503417cf8666453f664"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "f23c406ea3964aa0d92c31b5e7a353ed"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "e876546ac739feed520d4d13ff0808e8"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "34bb899f93cb623ee30b535d4e93b1b8"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "fd1ddf9ed00757995c53f2cca671481d"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "812b8960e4762e26132e31a54dab07ad"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "5908282479a64f3dfad23b2ec8ea57b8"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "a840a35839c68f2ff7d6cc525a2ec7be"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "0557e3025712885a417c8388aa08a9b1"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "d07dff5685f8661802085b6ae3a4284f"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "efd0398a5b05de25c2df6f6d8b54f1fe"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "184f8ba3eb8d9ba2fdd5e37380b93e1a"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "a0d4dcfa7cf40e9bb4f409615ce88df9"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "5ec3af368b315c29d2ffed2265855079"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "5d1a7afa07439d6decd3dfa855e94826"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "a2588d52a3c1a925f2e40cdb86d5c9f9"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "6896385d8af13c454de28eb0f47a1683"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "747022d4cd3f63fca21ce8fa26ccd654"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "eee9b9f100dde1f736df4d94c28222db"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "f5dac129f4286b4d09f6792d523a3b12"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "7fc308c005be7ffe65510cbf6dd41c89"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "aa1423f1abcec130ce5c7dfcf7bda1e2"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "0a240e425515a984cd464ac62659a071"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "f52c33e036d9cf00cda8f20edb9630c7"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "4068acbb6ab16b93e27768252b2abd5e"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "a25b6f107618486b84242a2def45c406"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "e5f2661182109eadf3aa00e90aecdc4e"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "52b40ecac2e12e3ce9aae6e5e316a3be"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "1bdd03e8dd2bec6d647dd214f0c31ced"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "49d022eed6f093d31c448ad36365e3a9"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "2c7516e0010a753c9ecd48025f566448"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "fe94427afafe56cff0669fb5c3d086ea"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "30b2ac7c0decb6868ca50f345313e471"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "e4338c8908bae8dc7f123610078c003d"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "0bbe8551ca3034cde0fd27934bcb615d"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "5ae0583cea2a32b4c26521a39784a3b1"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "e96decb09527a7a6b2038031f4fc492a"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "1fb19c60c8cf928860fe080a05e2b609"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "82bc4a35a3e14dfa2283d6adca7439b0"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "a7fd6cae675e4dde34fe079a3c17bbd4"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "3d3f09ed386d743f8a2da26e52f1742d"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "6d707ea392dbd8e2c56c8c4a41f5e761"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "0f1caf0c9a847ef1b3db9d42f82f232d"
  },
  {
    "url": "posts/index.html",
    "revision": "7e4cf3eb3cafc696baf44d6957a42d82"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "cdfefc511265c00b78c7682d8a8e7d36"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "67a35aa7ed505feba987e6ecfe73d2f4"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "793595e039b14a431432db29f0a13c5c"
  },
  {
    "url": "tag/android/index.html",
    "revision": "fb188820b2d36fe16370c0cd800be2e1"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "fc223fc66fc100101cb5a25b566eda14"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "489bcb320ad8a42bc89f95e40be1c079"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ddfbe3b0e537dc0225b53d31f41badd6"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "c83e01ce2758c74cd1deb37125457618"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "8ddab841d92a3a5c6d547c289fc67f63"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1687a34c93b6e6e180c98488afae95f0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4b4fcac80554b724e08fb7e5841860ac"
  },
  {
    "url": "tag/index.html",
    "revision": "3f9e1d77170c6f6a4524399845764427"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2393459c1cca203ec08f0c9935fc67ee"
  },
  {
    "url": "tag/js/index.html",
    "revision": "97643430f9598409d3cb3eb7f87ae9d9"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "af90881082dddf5e78a4d39a5f2f5aab"
  },
  {
    "url": "tag/json/index.html",
    "revision": "7e3d93eb6b944c6b49f091ad14e25a94"
  },
  {
    "url": "tag/less/index.html",
    "revision": "ef2f96f73ff66d3cce93bb66fe0b48b2"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "c85e4c0d63600d398308237969010232"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "c81500687d4370186198aa1c5494ffc2"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "eb995fde1ff0624a242d1eb13f9ac47b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "b66c462dcaf269f742d1e28a2897d7b7"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "822387ad9485e249193caca2213e1288"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "95c469228abd747e3e9ac8acdd238882"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "944c9f31602be78a7bc084d7a7107617"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "a19711fec3467c02d6a7732d72f14a91"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "08ed78fa9a9e29e4e88efb75d980225e"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "82ef7eef0139d35ebc9668c9d408a8ee"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4eda96f467ee77ede9d3283322f3742c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "586788fb9bc52be6e93b64b0ee795983"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "f50ebdf1b7036238f58c0dc5694a56a6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7e2e23c33a0a12e0272dcb19ff748b71"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d9f2d6243a82f11ea5dcaec92d8ed982"
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
