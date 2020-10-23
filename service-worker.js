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
    "revision": "dcb3ed720322d3ae73d2a456698ea5ad"
  },
  {
    "url": "about/index.html",
    "revision": "1b9b95dd4965511915f8b3e1531c13fa"
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
    "url": "assets/js/app.429773e4.js",
    "revision": "08d44294d9e9dfb45171957e49336aee"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "b0b261e210b1f18c3aab2e3549a67dfd"
  },
  {
    "url": "category/index.html",
    "revision": "a3e2fbc765a269a5a5d45e7dd7556514"
  },
  {
    "url": "category/learn/index.html",
    "revision": "2ea6bd6d038a1e576e58afd871b38d83"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "f362f95aaf0707c5b6bb663aa822145d"
  },
  {
    "url": "category/project/index.html",
    "revision": "b32a54caa50571e27a387d4388de9461"
  },
  {
    "url": "category/summary/index.html",
    "revision": "43930b8d9a20ab9f729ec9d7be05c6d2"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "50eae72b691516a2cedb4f7b6948d659"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "478f4f54b2e7e9d2811c556caa751f98"
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
    "revision": "4ca809208855ffda10204063ab00305a"
  },
  {
    "url": "lib/index.html",
    "revision": "6c92a4dd079b8f0558af22ca1bb35a88"
  },
  {
    "url": "lib/m-less.html",
    "revision": "9d3f4b3ea3d7192e3de410c20c01a08f"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "7c3e5f48f63fe40c14330914ccf78ad7"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "ab71fb96d096640fb3e8017345e6621e"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "2bf650c7ed9c626628b53dd88def2abe"
  },
  {
    "url": "lib/usercss.html",
    "revision": "cf53fdf0aab214b586536d4d906ca674"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "9b40f92b5eeeaba487b2669de6911da4"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "8664dc2dbdc9a632176857203d13d2e6"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "09fe40b36fab202fad5dfc21f6ba2c42"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "803b706af0668677f4dc100fcd594a1a"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "40f5919313f05fbf136244b75e8e8aa7"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "b46fbcee0ee3bde437c51ad6cb17eb4a"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "f19b04a1c9bc330532259aaa0c0342d6"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "e620f5b2b786877a70b30ad383437c06"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "8cb34039cc4ee7e87786fb8df25e07f2"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "127a82389758a4e1d38c6301438d309b"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "1f3d86a12440dd04833a196dffb28092"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "96c3107bc20ced0ab1dde20cc3e0faa6"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "a476a0c8e4756161972c062b80b17c3c"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "649b25b510635de8a06e3277d0e7961d"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "dacfec040afc22e07d38b31038023a07"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "c790fb3e82defc6164e98f718f4604a1"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "9287833ef99574877f5be6536265df8e"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "193eb452dff0009123c49c064e82547e"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "e7ac66ff769062169b030950bef6c44c"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "6182295f855566af8ae48aabae3afeeb"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "18deb14d43fdaba3e58057a0d855adc2"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "24b955e72c8577e0b2438fe7654ee20d"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "cdd617762358c339fc83cb92d1f5c493"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "310e78d372b63bde9848ca1698ee9749"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "7871f49b9d6b6bcc071917e30c281329"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "0ec2c30988c246bbc33ca12568c51d84"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "7f4bea02c6be1e3cb40838c7a425a231"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "8a1ab2691f8b74d9ed420e5ed3e4e47f"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "3833d4f3a9b81ea2b4c08a8508565ca1"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "9314498ad6a1aaff52cfe4e08a56734b"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "9afe2aaced3cdd0b4d9cc5859ceab228"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "5bc32cc5be3210f3178e28ab7983de80"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "4fede6a31cd89f0f568d7678a52b5480"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "de7ecb558ed472185f318a3ec37aed27"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "c931160b7b9cc26b8ac3f81a17414b36"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "f0f34d12aba2b7a04e1ac166330f5e1a"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "bc8f00c57b12c0280b48f7911b79f1a3"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "169d8bcb942696ccb60347eb79a86c99"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "197108fff886052922333e7b977c28e5"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "375e054ade75afc2640452743122200e"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "2006acd8e892346ddb13e02a13103e6c"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "6a89a26b0ff39bed15787ef96097eaa3"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "81bbd253b094e4e998becea7e3a80a20"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "b72883114a2d6e93c1895e8fa39e9342"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "cf805e010532fc9badab2013d25e5f2a"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "330de5d6b1b88c6e9b7ac556c3c2d538"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "133779ce3c8c0319049388d1a14d9b14"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "8145e63eb4cb39bc82d04ab47bacd25e"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "396fa6d073aa32cc53a1f8d3d9f1ec73"
  },
  {
    "url": "posts/index.html",
    "revision": "51eeeffe954a5068627d9df8bac81929"
  },
  {
    "url": "posts/NaN/NaN/NaN/git-template-project/index.html",
    "revision": "059003124f385a417ccee1f6295677ef"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "1a9442d3aa952d4a6605478ba8ae4a8a"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "27547ffe36d2a0876ace397f97551472"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "7f0da4c8fb0fb9494484513aecb0f8d8"
  },
  {
    "url": "tag/android/index.html",
    "revision": "a13932dbcee8feedb11f0db0bb75d94f"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "729b1a2b8289f4e5b4309bdc26779eab"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "ef7bae66521bcea714407528edfa85a0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e4fc83a06bbe170fc05a9141a9f826e5"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "16acf478d1b88e592b2e29afe3292ceb"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "23a7ab1d953abf383d5e76f88976aeb0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "360a8cd473f1d37a0e19c0b841a9c349"
  },
  {
    "url": "tag/html/index.html",
    "revision": "97e61d6298a50aa97c523d74449e4eb6"
  },
  {
    "url": "tag/index.html",
    "revision": "1eb4b7e5e36d3da63b50191d19381627"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "680639181220c3f840bac96edd5b3df0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "06c08dc83b2cc7e77933a7e056e131c0"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3d2350578430eaf4285bdf8251fe4a8a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a588185ed644b55e95d3103a7dac3866"
  },
  {
    "url": "tag/less/index.html",
    "revision": "e903fea08c8a3b4d9c45b4750e261ce9"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "364734ec01e8911d0cbafc0d099f200b"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "d9d177c32cf8e621608dad6480acbca8"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "9ae6b9dbcbf60122f665c3117f17f48b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "99fbb1cb51b0e435856342d5f7932d96"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "0a4fb64ca65111bd73c5b155fb51afc0"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "a6281bb74fc5c9589a3b8ac12fd22501"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "6be734f558999cd8639388082a2b21d1"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "21f7540f7de3609e95e25df9ae196c76"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "a0361f2f94d7435cff5177d78490a716"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "85005aec8fe43205e3e39cada44f3a3e"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "de73363b403241f78ec4111a61bde5e4"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "711f4a2afd99757b0b0c8a9fc7c2a085"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "4525a8f1ce2720d2ad545b1c334bde4c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "620eb4ff6c085e56e3a6861597035d47"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dda15e14c52a7e52c3f6edac83216776"
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
