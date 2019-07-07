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
    "revision": "879d363675a01cf533aeb1d814ec9e9e"
  },
  {
    "url": "about/index.html",
    "revision": "85096e66f733d159b3dc129069dc68e2"
  },
  {
    "url": "assets/css/0.styles.7a06a88a.css",
    "revision": "87e172fc3c6ac70dfc9e92cdb04d09fc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d962948.js",
    "revision": "4f40c0de29951c8937ca96b33ca29c97"
  },
  {
    "url": "assets/js/11.f336e09f.js",
    "revision": "948467554635d3d139ac1b4ae79d30a0"
  },
  {
    "url": "assets/js/12.02ca6878.js",
    "revision": "f9f198ccb9e401b4c7a770c99fc8ffac"
  },
  {
    "url": "assets/js/13.b4678b79.js",
    "revision": "c67aa9dfe78fbd8f93a62b73436e164b"
  },
  {
    "url": "assets/js/14.5d20ddca.js",
    "revision": "f65a7eb742d6520d55ce929bacb6d796"
  },
  {
    "url": "assets/js/15.314dd211.js",
    "revision": "0c6120f23477360cc493cbe81bc70edc"
  },
  {
    "url": "assets/js/16.fdbb9373.js",
    "revision": "7faa892d9f5bf14ea55bfa9a2772ff0f"
  },
  {
    "url": "assets/js/17.635145b5.js",
    "revision": "f8ee2a0bc139596b7b01d82ce2144900"
  },
  {
    "url": "assets/js/18.2fc5dd61.js",
    "revision": "42f3f1c7899633f3b65e174ab3579d0c"
  },
  {
    "url": "assets/js/19.996cc550.js",
    "revision": "419458000b5e7d40897cf120760c63e1"
  },
  {
    "url": "assets/js/2.daa28670.js",
    "revision": "e81f36df47199b03627bba9ac2c02518"
  },
  {
    "url": "assets/js/20.35c057c2.js",
    "revision": "2d463e094b8d403a51d063e63fa73257"
  },
  {
    "url": "assets/js/21.85b9da1f.js",
    "revision": "4c6a280c4aa85af091e790a94d1c4498"
  },
  {
    "url": "assets/js/22.eca5c382.js",
    "revision": "027678d94c3dc34ccb1e955026453f94"
  },
  {
    "url": "assets/js/23.63884a9b.js",
    "revision": "3d7eefef1abb63dc35e0b242731af987"
  },
  {
    "url": "assets/js/24.c189a46c.js",
    "revision": "a9e26c32009474465cdcda54260907fa"
  },
  {
    "url": "assets/js/25.16ce4edc.js",
    "revision": "2fd1680447458c30bbc3269b35aabf03"
  },
  {
    "url": "assets/js/26.738469af.js",
    "revision": "869dde2131fbaa109a1f1c08c5ff661b"
  },
  {
    "url": "assets/js/27.f985254f.js",
    "revision": "a9b1fb084856ed50844c6d62805eb860"
  },
  {
    "url": "assets/js/28.ff747d64.js",
    "revision": "54bf05cec79758186151c4ea217e53fe"
  },
  {
    "url": "assets/js/29.0de3bea8.js",
    "revision": "e64f5ab9b4ac1b5ccfcfdbc711a0dc05"
  },
  {
    "url": "assets/js/3.e5305802.js",
    "revision": "6fe797f089b1107a5c6b0310c8642ecb"
  },
  {
    "url": "assets/js/30.23d16cf9.js",
    "revision": "90b3790e37f6f2f8feaa985734d41f09"
  },
  {
    "url": "assets/js/31.e379baa8.js",
    "revision": "32ac5a80a301b12af571e0d8215d0cef"
  },
  {
    "url": "assets/js/32.e11d11c7.js",
    "revision": "ec8bfb8684a59c43042322877d9f4999"
  },
  {
    "url": "assets/js/33.c6085efc.js",
    "revision": "5d1cbd24e22f14c29f7ec7c5fad66c48"
  },
  {
    "url": "assets/js/34.6afe2908.js",
    "revision": "c3bbe996400fc761c2f3782c65735a02"
  },
  {
    "url": "assets/js/35.7fdf3218.js",
    "revision": "02d54066f392810c4b5732a5c5835ff9"
  },
  {
    "url": "assets/js/36.09c27a2e.js",
    "revision": "22df12b0038a57ae8eef99f9ef7ff7b1"
  },
  {
    "url": "assets/js/37.96fdb3bb.js",
    "revision": "a2349b22beb7dbb9deddb64b555d44ff"
  },
  {
    "url": "assets/js/38.b3c8395f.js",
    "revision": "96d3ea9047ebcb482f3b698adde1c0d1"
  },
  {
    "url": "assets/js/39.05bb15d2.js",
    "revision": "ba9b7fca7646207c2434603f84112926"
  },
  {
    "url": "assets/js/4.3c02734b.js",
    "revision": "d2d1e8269b89c2e435627a80fd20c840"
  },
  {
    "url": "assets/js/40.940013a2.js",
    "revision": "6c7b2357bc2c072dc88f105b15956b03"
  },
  {
    "url": "assets/js/41.6bdb5fa6.js",
    "revision": "f5d6baba7ced2cbb4c32aa868fb76459"
  },
  {
    "url": "assets/js/42.3e41b36c.js",
    "revision": "6f05d0a60a535080e08e4f08d0519c5c"
  },
  {
    "url": "assets/js/43.e408ff59.js",
    "revision": "fbe6d2825a01fda4ee47dd643b4b1963"
  },
  {
    "url": "assets/js/44.ec6795d0.js",
    "revision": "5948b091098607675d84e8fa60be8dc0"
  },
  {
    "url": "assets/js/45.2c55ca52.js",
    "revision": "fa8df13c7c35a90999db9b7588b3db7f"
  },
  {
    "url": "assets/js/46.ec21f735.js",
    "revision": "fc44f26fc82568b8939e60268a972461"
  },
  {
    "url": "assets/js/47.395b7338.js",
    "revision": "97236dc18c179f05e5d31e14bb50d68f"
  },
  {
    "url": "assets/js/48.4ae6e2ba.js",
    "revision": "2f1ff87a29321149f232ffeb54040e67"
  },
  {
    "url": "assets/js/49.9e3d92b1.js",
    "revision": "1d8e34f6e6752400956ddc4f06298c45"
  },
  {
    "url": "assets/js/5.919813fa.js",
    "revision": "fc880a511a07da4e5c6c409f4e4c6b26"
  },
  {
    "url": "assets/js/6.1b1ffe02.js",
    "revision": "02afccc6c1227db128cbfa41cf4095f6"
  },
  {
    "url": "assets/js/7.7bd04629.js",
    "revision": "4b530ebd6f1a204d65adb4ebc4fe64da"
  },
  {
    "url": "assets/js/8.ee5418e7.js",
    "revision": "0c0173fc4d3dc1c6259fa2c98a8a2564"
  },
  {
    "url": "assets/js/9.ae2f5859.js",
    "revision": "b44f8a00a3296bb4717d49225024434d"
  },
  {
    "url": "assets/js/app.97ea67d7.js",
    "revision": "ce2465ecda51aed048227e4c3ce215cb"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "474dfde4a752f67465cb9449c6a74a65"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "d9fdb52772714ba801091a02581d6db6"
  },
  {
    "url": "category/index.html",
    "revision": "e17a5ed93da8d4ef7955b3ef2a20258d"
  },
  {
    "url": "category/learn/index.html",
    "revision": "1be20ccda150f1ea0907eca276343173"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "d94e31ce44b3be71f2a81c9f46cb4fc7"
  },
  {
    "url": "category/summary/index.html",
    "revision": "2ece6a006271fd90149bdfd167ef8983"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "fb018c46a703c8af0f6a9ef2eeb33bb4"
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
    "revision": "abbbd3f280490966e9acce008961fa2e"
  },
  {
    "url": "lib/index.html",
    "revision": "eb3fdd576d44523ee2fce64c93a47eda"
  },
  {
    "url": "lib/m-less.html",
    "revision": "b0b4c93ce8c8c7e1c9a36cbbf5ad940b"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "f3fcb6091617cbf377225d5a20226bf5"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "8ee7e8eb98d8df0908027b767c6a92e9"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "06da0dbaa3968becf81e7a01f25fe3b3"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "220c84b3e5b5b0134bc120a6af730cfc"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "c27e539d1ad11eb22701f4dae9408484"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "7b75fe41c6c1278e0774ea28ece22773"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "bb5ba0df6cb9ac6196df61cba79c8b68"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "068f11e0f631f3fc7c0229323182b963"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "4ae17ead0d4ab39bb70e87796c82e094"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "85a31a6c2041068eeaaaadcba32c2bf8"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "98d991faac7affe3459b200b8401de94"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "34257caed873e1588c203da99263f89b"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "50de29a606a7121340c8c2c4a0426439"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "85144b049d34c60931d2256022e4e37f"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "e945127643bcc66bca7ad8830fde3dd2"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "c86585886696897b9678fa15a84bb6db"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "bb4887ec59ab3ac6dc2578e2269ffcb8"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "f57c43e576b1864832a43704eb8fafc9"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "282ec0f3b5bd93c521a6dd3201c081e4"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "20eed8c4166bbb232e06d1e34a2b8084"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "4b8cc2036bfb99cf3410919a8d35c88e"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "32436b75e7fc6202e71c8758d3f4f998"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "f15409fb7c3f72a41b0172e349414a26"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "8d1d1929cc7751cfe020ad35db5365bc"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "3ca93590e91b87569fae79eb547d1192"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "065245a8c8694426b82bc366a390c0e2"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "faeba8c1af130a2ebc625c1b1dfc30f8"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "8799b5870d2d3bd045e0cae807297f77"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "b00edeef9eb0f3c0bb1ca3f2019509dd"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "32dfc5f82f15f5a641e5e841926180e8"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "46252350f1dc67fbd10de1f8e1591b3b"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "5413ea8a624688a1edf74a8c9c48445e"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "12d27a5395895216e80654d05c7c13da"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "bc435263fd91bf76253a409c04f8a2c0"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "b16e756e56363c6cfc673f766f6beb18"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "03f86265168c3c678e207989f3368a4b"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "c7656490d645f2c3229e4858108edee6"
  },
  {
    "url": "posts/index.html",
    "revision": "0fbf431c0ff56dc6e10bdf5f673665ee"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "47dec8ba4eb1afaf658f6f4fca76c962"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "b42f3147c5a87acc4dfff0e89c40f715"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "86cf35f0b8bae070c95f6753c712386a"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "809999030654cb709d36754ac14454f5"
  },
  {
    "url": "tag/css/index.html",
    "revision": "82b9919ea7a6dbf754528ce59cf33d14"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "00e38553376bf58f2b28a4594f04f011"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "f39ad3ebafb0ddc9ef7d40c2c50495a7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "96c4aec8b564c7d0355ef2d6a03657c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a469560212316cebb52e57c837f6a6d3"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d4006fa63ac25d7fad2dc5d821b74aa8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "87ca79c23872cc8c5b156fbe117863a6"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "9d6788ad7b215b74218fb75fa1836f65"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f531ff20d66c872379751342b3002362"
  },
  {
    "url": "tag/less/index.html",
    "revision": "73d47998e3821be71feb5be216383269"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "8785151cc17a23da1a287a67da884819"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "edd61c2bb03482edeee96404988ce833"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "e733afc6ae90e101568a482a056b1f8b"
  },
  {
    "url": "tag/php/index.html",
    "revision": "f4d0a454f34c808d81b048d81ae7def4"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "213f13e88aae376b45bedeb33f366b08"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "ad395762d7dec4d7bf0fd664abe6b2ae"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "36fb8a6fdc358edcdad95921b70a8681"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "ed51ea0f2dcde378bf60e5ad9c65c21c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "78d5e2047b4e44616a825fb11222ddfc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1bb5a63d9795b5503dd6a32be2db4c6f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a4912e7fc38d59e9134423bad75be1f3"
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
