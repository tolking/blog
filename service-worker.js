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
    "revision": "7eaf159e1153de5976c638852cab6a91"
  },
  {
    "url": "about/index.html",
    "revision": "55a6293246754890d0cc5de46b94a9eb"
  },
  {
    "url": "assets/css/0.styles.d7df59b3.css",
    "revision": "4c3f67b76cb0c8c79b05a391ae457d38"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cf2073a6.js",
    "revision": "addee6c33a2d943f9260843d43f7077b"
  },
  {
    "url": "assets/js/11.54901721.js",
    "revision": "36519e1d95613ef41f68ad578bdc2725"
  },
  {
    "url": "assets/js/12.65775c45.js",
    "revision": "b2a4dcbf5853977c3cf166f323a4cf74"
  },
  {
    "url": "assets/js/13.67d3b0f4.js",
    "revision": "3e3b7233968655e301847c5c0b9c3969"
  },
  {
    "url": "assets/js/14.706b59ae.js",
    "revision": "af223ef413710697770a7007456de03c"
  },
  {
    "url": "assets/js/15.28729d09.js",
    "revision": "046571d1e1bae4217a0e933fe32e00b9"
  },
  {
    "url": "assets/js/16.5601757a.js",
    "revision": "53e7d1316c299b7f579a13fcfc1f7929"
  },
  {
    "url": "assets/js/17.76aa5acf.js",
    "revision": "3b04bed11924114239be564cd4511a77"
  },
  {
    "url": "assets/js/18.ccfbcf45.js",
    "revision": "70b0e115efc97409f0b5013c15b17c06"
  },
  {
    "url": "assets/js/19.a1ebc132.js",
    "revision": "d5ca1733fdd7521d32c37e528675b48d"
  },
  {
    "url": "assets/js/2.3054c9f7.js",
    "revision": "dc33e1bf79b8df8de7e33cdc2c3ff5a3"
  },
  {
    "url": "assets/js/20.9e3e32b5.js",
    "revision": "8d9b307dc46ce6d8d8ffbc6ac501f8d0"
  },
  {
    "url": "assets/js/21.095be873.js",
    "revision": "118e4fa414e3d1a84101075ec46cebed"
  },
  {
    "url": "assets/js/22.a213f52a.js",
    "revision": "690d1bee43e6e5931339590260f93a74"
  },
  {
    "url": "assets/js/23.41c73dd1.js",
    "revision": "e192f3cbaeff3ba14b52a664f819b121"
  },
  {
    "url": "assets/js/24.ce2e9c04.js",
    "revision": "e56b66d3364159a20e8c8ae8a3c804dd"
  },
  {
    "url": "assets/js/25.ca05d391.js",
    "revision": "3a81bdccfe96b080ae49c56fd4415b82"
  },
  {
    "url": "assets/js/26.42125382.js",
    "revision": "81a9d64f41ca512f81c273c0e6404856"
  },
  {
    "url": "assets/js/27.be1216d5.js",
    "revision": "d2617b8a8247c3c16d36efd261851c1e"
  },
  {
    "url": "assets/js/28.ff043f84.js",
    "revision": "a54d709e0cdec4c0120c1f5cb2dbf8f1"
  },
  {
    "url": "assets/js/29.c594393f.js",
    "revision": "4aae88c6643b2d055c3fb3bb9dee1599"
  },
  {
    "url": "assets/js/3.a46342b5.js",
    "revision": "6e598d2ea2f7ddecbf70d3c97e9ef914"
  },
  {
    "url": "assets/js/30.cda48f81.js",
    "revision": "de0e412fa56faf5f9215eca10ade05ea"
  },
  {
    "url": "assets/js/31.9a90307e.js",
    "revision": "f15af49045d5eed60988a9887c085d2e"
  },
  {
    "url": "assets/js/32.94080d44.js",
    "revision": "7d00840e834159fe5ecfcf89a584c63b"
  },
  {
    "url": "assets/js/33.31440063.js",
    "revision": "e1f248a0af71193a3640dae7bb96e0c8"
  },
  {
    "url": "assets/js/34.1ec99c65.js",
    "revision": "144ebb4fda508040ca4790399916b9f6"
  },
  {
    "url": "assets/js/35.a7338ead.js",
    "revision": "46900a8553b30cd6b4c7344ac592ad61"
  },
  {
    "url": "assets/js/36.559546b8.js",
    "revision": "a58a6e7a3b4b66b53fdd4ea95c450403"
  },
  {
    "url": "assets/js/37.69c4eb6e.js",
    "revision": "4b0b623019a864bb77b1a2de7acc0de2"
  },
  {
    "url": "assets/js/38.8aeb4a67.js",
    "revision": "8eeec253ac2ec0a895099c3bc1666fce"
  },
  {
    "url": "assets/js/39.03c06c86.js",
    "revision": "5bc1cdd4c638ac50ecc82ca4846a3e48"
  },
  {
    "url": "assets/js/4.c9ccf655.js",
    "revision": "304cfaf771de2df45e9d1f526bce56e9"
  },
  {
    "url": "assets/js/40.64b16746.js",
    "revision": "2642f3724a5981826835469ef7f3d4a8"
  },
  {
    "url": "assets/js/41.b2f8797b.js",
    "revision": "1f835962a9d63c35845b70e1519c8c63"
  },
  {
    "url": "assets/js/42.fd7704b7.js",
    "revision": "1182c31a5c2c8c564ed5130e7dccfb10"
  },
  {
    "url": "assets/js/43.eaaaef79.js",
    "revision": "6254330741e695a872ab064c6124fbd9"
  },
  {
    "url": "assets/js/44.77d65ef8.js",
    "revision": "715ec11a6078d793e55804a510768685"
  },
  {
    "url": "assets/js/45.53929892.js",
    "revision": "0b5184c9972d7a002380a41b741eb783"
  },
  {
    "url": "assets/js/46.98d1c8b0.js",
    "revision": "d65419dd09d39aeb4a7b075438f92708"
  },
  {
    "url": "assets/js/47.a60651db.js",
    "revision": "f928f8143713afb1116b7aa131df2a0e"
  },
  {
    "url": "assets/js/48.31d39311.js",
    "revision": "d540faefdef8410f5de2739afaabc716"
  },
  {
    "url": "assets/js/49.1d643da1.js",
    "revision": "9ce0b6ea559e8381e5f95d1c257953e3"
  },
  {
    "url": "assets/js/5.b097697a.js",
    "revision": "f06589620a2af1328e51699fc1e4b433"
  },
  {
    "url": "assets/js/6.aacd5456.js",
    "revision": "0fa34dc9f6e7cfca52daa16d7d958d47"
  },
  {
    "url": "assets/js/7.59f6ae9c.js",
    "revision": "c224566c76e22c6e78a69b9f6f71bf3a"
  },
  {
    "url": "assets/js/8.f8bffb2e.js",
    "revision": "fd0ba258d9d9e2cb6f0b77e76391eae8"
  },
  {
    "url": "assets/js/9.fdaa8dc6.js",
    "revision": "1d4be661538865433f8aaa39e883166b"
  },
  {
    "url": "assets/js/app.97bf5e64.js",
    "revision": "e7964d67d134c115263ae48596deee7e"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "76090d81fec75b9dda3992e1aee824fb"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "80ee5461d2ade04630d4b6674ea85bb4"
  },
  {
    "url": "category/index.html",
    "revision": "949c40d5ca94fd9b29ceedc972a46b26"
  },
  {
    "url": "category/learn/index.html",
    "revision": "289b634e72eb07e8707900bd8fd558f4"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "af9b559aea473db038bfe6ad6998674d"
  },
  {
    "url": "category/summary/index.html",
    "revision": "267edf40bbf1af51d11417ee4e875604"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "d8e97fc36117cab12c7dc2df8e71cfe6"
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
    "revision": "f6363f9f60c02be4251fc346674a2532"
  },
  {
    "url": "lib/index.html",
    "revision": "c2f29ae046f514948a1dc5eaf34676da"
  },
  {
    "url": "lib/m-less.html",
    "revision": "3de9ee2389a25120f2968d7b33f4dfd9"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "f7f6140871493f13f83ffcaed8e7808a"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "89386c37d8cb94c2cac4d70e67e04b5e"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "57bf24dce396e82de53d344927762175"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "5560a547d8add86e37e4d81e1736d01d"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "b91ce3d3d34a5f1f83996cc459b4985a"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "f24364cc711f4cdc4b852c3593ad9b52"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "8a213c091f592ec818f1b5de460cbdee"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "cff6cee57b74485e734327918f616dbc"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "58926d742962563f51797ce0b651eb38"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "7d92b090e43ed39277fb270e8931f734"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "f00fcfc3039bf472290e4a887dbc58cd"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "5a5bc50bd16f2db50c7bcc983d8bb17a"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "aeb219cf772bfd916ecf3eecab111caa"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "f3af4d5887ae98c2fa6f67c91d2f7636"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "8b25583d9f0014c2d33a9b649f48ea9f"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "c3f20f5bbd85e91701730497f6bf4736"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "9d58b7c603d68bfc58ab8ee0fac9687c"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "d062286860fc3d1ca94ad34a5f4fc064"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "9c2d4718f1356ca0f33b51a885e0c0d5"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "1dcdf086552bcc998e802d1f59d073d0"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "f935c7d31a6115a598410567443431a4"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "b390c259f067f66b6e616b1ae4327a97"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "e7a23438bad9137d4b7f148283d6f5ee"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "94ce34dbddd165617d0740134bc07958"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "29092cbf6f81aa0965635a0670c9a6c4"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "8d344556fda7538c38b75504b5781484"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "f5a853e16799df82d12e91e1fad58190"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "4bfddbe71b775270b61adbd6d6e71843"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "4c521ffd758bc07b4a20524de5706349"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "39303283a1a2a150ee0e60871cd774d2"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "15dd2e437127f360efff00aa2b667b19"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "5722305c21935ac37476747157c74bee"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "9a3147da6e11049c3d15252a7a90cf07"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "8b31b4cc9c962b2940d0fc5f3309c4cf"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "66c7859d98263ce4ad415f6d1a6d00c5"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e80992fd9937a194b35f70e002d944cb"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "f2fcad3ae8e19fafed7702fa2f15d868"
  },
  {
    "url": "posts/index.html",
    "revision": "05bca70a0b9b2933eee56291e437f40c"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "20cb4798cec93e9a855f460a295c39c2"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "969f22edfcb42ef6f3bc5f892a153e99"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "3be47ae340b2574f5b5f00f3e2360a3f"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "e134514d6480602534c896b54e5aafee"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0b66425c6f2ab048f890084edacac12d"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "e8cc1a16b4af038da6edec93eca0f160"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "c34da5c74a473cf41c0c0aca9bc21aeb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fbe8f932f1538cfb2010e26c8e41e20d"
  },
  {
    "url": "tag/index.html",
    "revision": "49f4701ecedeed333205a4b7844b5c8a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5b680fa3a81a765e61a457a16c532e54"
  },
  {
    "url": "tag/js/index.html",
    "revision": "726a02ebd2231a083c2061c8c820fe17"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "11f97523849fa72cbc6220bf9b29e237"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f3f177c21b0d40c79dac871de7b1ab5b"
  },
  {
    "url": "tag/less/index.html",
    "revision": "a1a4cef62d04780358b58e13d942c062"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "8f9312a6d95752003b641a6d42f9b2c2"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "44b3c40f02e93da9931fa867d1df1dcb"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "d2f72649ee44615c514ebf35dd5ff558"
  },
  {
    "url": "tag/php/index.html",
    "revision": "2c354ed45b5a49a7bf4e536bab18e405"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "c4c4491430d7d9d7ee2071f6df9cd1d2"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "a0c3fcc1ee06a20c496061658eaef272"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "5270454723d8affb3c0e365d6b2162d2"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "f5185f39cfaf3f2913dd6cda2edbc436"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "0f8e567bda12bb58a360111424d69be6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1c08e58d3ad15b106ec7803280ba0032"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "13a124729e05c1b6f0e815ce8eb27468"
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
