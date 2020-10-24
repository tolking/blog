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
    "revision": "e5212572c9afd75268cccd6f36204804"
  },
  {
    "url": "about/index.html",
    "revision": "de5cb6c8ceb30c0d1e5ff197f3aad10f"
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
    "url": "assets/js/12.0c472ee9.js",
    "revision": "32b4c905e3e717d145396f39f05cc623"
  },
  {
    "url": "assets/js/13.ec74adae.js",
    "revision": "48af0d95d3f741fedc742e4969fbadba"
  },
  {
    "url": "assets/js/14.dfd19fce.js",
    "revision": "3b3e5caefe2fdd75b1cc3d8b916a5ae8"
  },
  {
    "url": "assets/js/15.0533cf85.js",
    "revision": "9969586d9072a8aa6cc1023b6376de33"
  },
  {
    "url": "assets/js/16.77caecb6.js",
    "revision": "e42d2595e19e4efc5fe00edc31e71bbe"
  },
  {
    "url": "assets/js/17.5abdff26.js",
    "revision": "52be608551e8db87df50c5ce3613620b"
  },
  {
    "url": "assets/js/18.79c84556.js",
    "revision": "f981ffd7cb8cc44e97c830939fbaf92d"
  },
  {
    "url": "assets/js/19.ed84dae8.js",
    "revision": "2e22a296f6ba4eef75adadcdfd32016e"
  },
  {
    "url": "assets/js/2.52cacf28.js",
    "revision": "a0ca1a2552108cdac2e18d64e7cfc491"
  },
  {
    "url": "assets/js/20.22b8db35.js",
    "revision": "0abc222b91a99c25cd824cff3535d0da"
  },
  {
    "url": "assets/js/21.6d8248b8.js",
    "revision": "0cae342086fcb1da70edbc3d89df3b3b"
  },
  {
    "url": "assets/js/22.c1304d7b.js",
    "revision": "2090b962a57fce08719c2586eeb533e1"
  },
  {
    "url": "assets/js/23.e92f278c.js",
    "revision": "0aa4c6847d04ff03ea553077b33c6a96"
  },
  {
    "url": "assets/js/24.89822469.js",
    "revision": "60ee9d7dfdf97065f4e419e5adeed630"
  },
  {
    "url": "assets/js/25.8dd73dfb.js",
    "revision": "4b6ec2a3884be0677a2145dbc2491afb"
  },
  {
    "url": "assets/js/26.6b339228.js",
    "revision": "7820882844ddd7e14fa7613d0ce3970e"
  },
  {
    "url": "assets/js/27.9268baa4.js",
    "revision": "4d5ea20fab8fdf2e4fcf5a2c9b941da2"
  },
  {
    "url": "assets/js/28.dbda0d4e.js",
    "revision": "a959fd3a515e6125bb087afb5ad2c499"
  },
  {
    "url": "assets/js/29.2e955c39.js",
    "revision": "16d93a9b31063d431f376b9d078707de"
  },
  {
    "url": "assets/js/3.9804a1df.js",
    "revision": "db90e2b2148c2a7964730c0fdd66bed2"
  },
  {
    "url": "assets/js/30.32195242.js",
    "revision": "f57838c92244de6b36d109c71cd39f45"
  },
  {
    "url": "assets/js/31.10b04206.js",
    "revision": "8d51171b61b9991a11bd51d1bf8f6d7e"
  },
  {
    "url": "assets/js/32.6492ef65.js",
    "revision": "8964857ae95cb3fd43358df65e57042d"
  },
  {
    "url": "assets/js/33.1eef6715.js",
    "revision": "960b8110db1719e83eabe23dc0d91ee2"
  },
  {
    "url": "assets/js/34.79d85e0d.js",
    "revision": "323bff77340d32be016528e4cecc0f37"
  },
  {
    "url": "assets/js/35.7407e493.js",
    "revision": "45dbad4d071155d3cce18afc4efbdd90"
  },
  {
    "url": "assets/js/36.28147197.js",
    "revision": "4d497fe5bca86fbc443938ec7db57aea"
  },
  {
    "url": "assets/js/37.2f513dfc.js",
    "revision": "ac532a6122fa59cfb959ac6ca9a79efe"
  },
  {
    "url": "assets/js/38.f973765c.js",
    "revision": "91a20137d27a81951b635a335b497f1f"
  },
  {
    "url": "assets/js/39.cbbc228c.js",
    "revision": "c1794f315b9c14e59d2ff3e271e1b333"
  },
  {
    "url": "assets/js/4.f30ef5c0.js",
    "revision": "c155780dec6c5c8817b2b978ccc88df0"
  },
  {
    "url": "assets/js/40.cae2232c.js",
    "revision": "170458c5d171f1daea67901a6e37c20b"
  },
  {
    "url": "assets/js/41.ef5aaedc.js",
    "revision": "ff6faa3a06650767c8fb53f164b3e9f2"
  },
  {
    "url": "assets/js/42.3a0084d7.js",
    "revision": "e56ed6c1130cd511b308f67e388a0bd0"
  },
  {
    "url": "assets/js/43.06c218fb.js",
    "revision": "822951e35d54a6e490e644a1e31b8a1d"
  },
  {
    "url": "assets/js/44.e9b25158.js",
    "revision": "e246a158518731c998d4da95c5e511a0"
  },
  {
    "url": "assets/js/45.a9209cd9.js",
    "revision": "000dac2674f7348b6693bc310629caa4"
  },
  {
    "url": "assets/js/46.1a98ac7f.js",
    "revision": "effdbdd1722e5b1b18caf16d5845afae"
  },
  {
    "url": "assets/js/47.2eed0298.js",
    "revision": "cda5b3cd68871c925e3269d0cfa0eef0"
  },
  {
    "url": "assets/js/48.0cba3bfe.js",
    "revision": "428e9ee9164c5dc5753bbbde0f79e5bb"
  },
  {
    "url": "assets/js/49.40b7a2e6.js",
    "revision": "6b12f0c144d1e2ae51fa6dfcd66264d7"
  },
  {
    "url": "assets/js/5.11732476.js",
    "revision": "07acff9ffd431b58b97be5bfa20ad771"
  },
  {
    "url": "assets/js/50.2f3f2ba1.js",
    "revision": "fe1772400f2ec305ddabb628bd0ab9e3"
  },
  {
    "url": "assets/js/51.8415423f.js",
    "revision": "5e61082ae47debe10d03c4c6a6297c3e"
  },
  {
    "url": "assets/js/52.76a0504b.js",
    "revision": "74dd57fb528c6492aa76a20d2fba1723"
  },
  {
    "url": "assets/js/53.6ffa91dc.js",
    "revision": "eb1abc5217f330fef9ed5fdf2fe4e468"
  },
  {
    "url": "assets/js/54.23929234.js",
    "revision": "1d7dd3989d74827ac6ca1ceacfe29dea"
  },
  {
    "url": "assets/js/55.c7da87cd.js",
    "revision": "468fa7f8c93e320c8162c0f019c2ce10"
  },
  {
    "url": "assets/js/56.0fed9681.js",
    "revision": "394c03ed62922d6f00ca6c850b736b8d"
  },
  {
    "url": "assets/js/57.37ad8bd9.js",
    "revision": "952f3dab9494d6f190d6fb68c7bdeeb5"
  },
  {
    "url": "assets/js/58.84d9b323.js",
    "revision": "e45f77583383dc33ec3494fb52918696"
  },
  {
    "url": "assets/js/59.77961370.js",
    "revision": "27d5a42b48e93f6dade476ed03515e7f"
  },
  {
    "url": "assets/js/6.3535d7b9.js",
    "revision": "70d6da487f0c00a888d38e8adfe19090"
  },
  {
    "url": "assets/js/60.57202950.js",
    "revision": "8d964704716d71cf3ce048f743e5a4ba"
  },
  {
    "url": "assets/js/61.55637f32.js",
    "revision": "92a4664923ebd6cd48b3b63fd7e601ca"
  },
  {
    "url": "assets/js/62.987f1a96.js",
    "revision": "7787dd0c4ee0f032366591e8c5081fc0"
  },
  {
    "url": "assets/js/63.3524c868.js",
    "revision": "ace867cf9d3983471bd50d604f6721ba"
  },
  {
    "url": "assets/js/64.ede6d272.js",
    "revision": "c1a6cdea06be5a1c8ccdae21b5ec68ed"
  },
  {
    "url": "assets/js/65.740eb21c.js",
    "revision": "e053fec75c310fa40d50d6c7c0abfe7f"
  },
  {
    "url": "assets/js/66.94750989.js",
    "revision": "3d8a1a1c9e63ba15816c0f8bcbc7b80e"
  },
  {
    "url": "assets/js/67.38cd61f7.js",
    "revision": "cf0602e77228d3af777838349b1b74d9"
  },
  {
    "url": "assets/js/68.f2664c26.js",
    "revision": "507e4c22a3ee6650b19531132ec2ef2c"
  },
  {
    "url": "assets/js/7.aa53f9ad.js",
    "revision": "7701926df766abe7fc0f282a2dd52f8f"
  },
  {
    "url": "assets/js/8.8224acc5.js",
    "revision": "44cfa3c78dc94ba58a92168ffc1c7557"
  },
  {
    "url": "assets/js/9.63995abc.js",
    "revision": "03a8cf2f87721a69c2f8c70d933c62b7"
  },
  {
    "url": "assets/js/app.eb293c4c.js",
    "revision": "6eba131954551dcc418fd17ab9dbb779"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "5f0f5a50eaa6eed718d73c91905747ad"
  },
  {
    "url": "category/index.html",
    "revision": "ba50a9b824fb0d807442f971ca627099"
  },
  {
    "url": "category/learn/index.html",
    "revision": "00b5c52b94985fbf2b361082d21b9b49"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "4a2c2c4040dd6ea6ffae054af2951c06"
  },
  {
    "url": "category/project/index.html",
    "revision": "137baff623d0bbc8a9a3b65e9af4eaad"
  },
  {
    "url": "category/summary/index.html",
    "revision": "0206c9700c24d4aa6c011d276c022e60"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "e04f531d1877b8dbc75b335e0a009e50"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "a85f49769bbbd6ae1ae41017f98a92c9"
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
    "revision": "3837f64d7094c0955b88b1025e696f2a"
  },
  {
    "url": "lib/index.html",
    "revision": "6fdc4bf32d11c4d3bbc1716be40b34ac"
  },
  {
    "url": "lib/m-less.html",
    "revision": "1fec718faaf74fcc4ca6791fd7c226f1"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "580e5958d1cc130b666e4a722200e629"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "7d0225731dc263ff4b0bbc451040e9d9"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "41c9675a99886dfe5d7ef7f083b638da"
  },
  {
    "url": "lib/usercss.html",
    "revision": "2b3ef6d5c18ffb8ee513c0c784bdb25e"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "50310d29f93f5bc5f3cdbcfdee340963"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "3e65835d1aab9d0fd58fa64c6dfe3a0f"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "831060bc57d3ede081c4e7c7b109f120"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "20a57f1a5593be4bf2dd267954324f39"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "e86adeabeb21536d9d52791e155a0a50"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "5ba6a1ec63afc6cdb252c2c48eea3f53"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "e1918ec6d4ee8717df4bc2140930a5e0"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "ec4a45b55a648cf3a36ff8d58fc25eb8"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "3a95724c09362d1a802e28ba385c5b6e"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "8581f5e8480f2bc100320410b287fef9"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "c7ed2962cc1ace8dd3942a0af6076de8"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "1676031bc62cdab053901db89ac8cc4f"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "79717c0469fb66ff6fecb26f39664829"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "0735455be07723b5c7c88deb02b5b5b5"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "f918fbfb41d28d6b43c7745cc8b8fd70"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "b2341bc0ff5be6f60a8679f35c4dd683"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "984cb6c2636fe9826cd2c21012d6de33"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "2caed85198ef5385157c8ff9f908e9cb"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "ce71c6855f9f0affb7082cdf9c3d911b"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "4f5a088403c6fc4b72ec505a2c26aeef"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "480cff7db9d427816320b6fd3c61a97f"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "cb94ace8cbd530b80e06a8fd826a0c87"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "f54cabef0bba32780f2adb39afed665b"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "53848250f05a83bdae0374849f91ed4a"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "803763d4b168ad6f865a5569deb90030"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "47a20eb62462256ac3b9ee027ec13e7d"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "6c86ad833a049491f05d188c63468b04"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "e8c4900875f4f6123cf3100cd7156d57"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "72d1c16b141dae127768ce6a093dff24"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "e68f3b0afa9a9ddbf1c1f62a491c64ab"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "8c2f21bd34158100b8e74be418221d81"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "fe44452aea9beeea9338dc81095728cd"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "3dcf90c206ee449a0c4e061a84a33579"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "a1c4a780cb3c3c63dc4c157ad87dbff7"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "36aad643114f6fc0e7bd5f3494b59bf1"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "945d6440788e0d1543c051a6f2c2d3e6"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "03da7be60b29c0f9aed8265a9c79e654"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "94d4bf7ad72f56fa1eee27e9229a1ef7"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "bd8d4eb74f544ad57c81a9359909c0bc"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "f6082cf63bb279a46fdd956934c477fc"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "bdc4c7f5d4f823ada7959937c9325315"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "4b925c8adaaf09b8b8ecd0ccdc4acab9"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "b22ad082c17a9fba508c253c246e2de1"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "e2244dc51401f1ad649f60ed57c9fd79"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "6c6099c16d01079634c860a138bfae57"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "08a939dff86349ad86930c1b58f0770e"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "1975906745ef089faa60112cebf2a356"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "a9389dbb02cea9617cb80f9029e74a52"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "2a156ec784788109d199338fcdb6616c"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "ce0fa8988f96d154b77fc9b41e2ebd9a"
  },
  {
    "url": "posts/index.html",
    "revision": "3bbe3a35e987b37a1dbae8f4f7a925b0"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "3fdef2369d7fe9a38bb7fd49a3d78ec0"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "52edce74ab4b495a07dc61d50069b082"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "568730fa727a4220744f1c3152966e50"
  },
  {
    "url": "tag/android/index.html",
    "revision": "9b16daf4b53f3de77ba1a6135e30cde1"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "d1a8850f13c05ec57d49d02594d97992"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "9dd5ec084b13d62dfb76728d8e62051b"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4e237e9e891d630f95874c9ecbdf1150"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "919cc9af21a0a0f0d8d46f9cb7c4f334"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "43010b20cfa89a944ca3e9196f1f8781"
  },
  {
    "url": "tag/git/index.html",
    "revision": "de1f98a0cd24c1adee14c1b8903433b9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a17f139eeb1ad8352eedae7c19018e5b"
  },
  {
    "url": "tag/index.html",
    "revision": "77185d4e9add90f5d16526ff33a31b25"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "db1cf1126c10834e91c3f350cf9e4d25"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6cb4178905a21165124fe7b6ae067c40"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "5efc2618c602b9340cc4b02a7fda908d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f9a084ffef84dbbe3606123aa9351204"
  },
  {
    "url": "tag/less/index.html",
    "revision": "cb454bdce4109df352faefcadf6c94c5"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "c853255fc0993ed1c59cae0d3e04a0ab"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "1bbb639e2ad40d9005699edce4464e1f"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "a91051091278f92b285427d3125e5fc5"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "a4d747bf05023483cf89dd44eec0281b"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "0a5dd0a8d014fc235095edddd6bb3f8d"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "9f3c35e6840540678c67452c7b9bdef6"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "41319bc80bd98baf19bde71f585eba70"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "22a50da16c0f875cc27e0e9678eb8b5e"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "24a80c2f294f600cf251b82a65498117"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "97be95466f969c43fc0da777b60ab548"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "a77490a8e0794c7dab58afacd319cf5d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "135fa0dfb0f71358e1474d4a7c84f226"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "439ff91d44e8c4746feb2d905feed581"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "67a7d00ec23626d75a0a72fd57938863"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f17617563092257f75896806022bdeaf"
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
