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
    "revision": "cc2e6a1148f341d97414776334a22d68"
  },
  {
    "url": "about/index.html",
    "revision": "08172986626a81827a662e3d8a778885"
  },
  {
    "url": "assets/css/0.styles.92762bf8.css",
    "revision": "b4af3bcf977162768f46ed20f4b035c6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2dfe578c.js",
    "revision": "4f40c0de29951c8937ca96b33ca29c97"
  },
  {
    "url": "assets/js/11.d98ee181.js",
    "revision": "948467554635d3d139ac1b4ae79d30a0"
  },
  {
    "url": "assets/js/12.1677245c.js",
    "revision": "f9f198ccb9e401b4c7a770c99fc8ffac"
  },
  {
    "url": "assets/js/13.57c92684.js",
    "revision": "c67aa9dfe78fbd8f93a62b73436e164b"
  },
  {
    "url": "assets/js/14.e1e52cad.js",
    "revision": "f65a7eb742d6520d55ce929bacb6d796"
  },
  {
    "url": "assets/js/15.05e5ea10.js",
    "revision": "0c6120f23477360cc493cbe81bc70edc"
  },
  {
    "url": "assets/js/16.ca39fb0d.js",
    "revision": "7faa892d9f5bf14ea55bfa9a2772ff0f"
  },
  {
    "url": "assets/js/17.eba9f83d.js",
    "revision": "792a42b84929483b8cd22d7cbe82c25e"
  },
  {
    "url": "assets/js/18.ae38c190.js",
    "revision": "42f3f1c7899633f3b65e174ab3579d0c"
  },
  {
    "url": "assets/js/19.bea7ccff.js",
    "revision": "f3376e77a0c9b66554e06e4421233c3d"
  },
  {
    "url": "assets/js/2.acedf634.js",
    "revision": "e81f36df47199b03627bba9ac2c02518"
  },
  {
    "url": "assets/js/20.16a5c512.js",
    "revision": "2d463e094b8d403a51d063e63fa73257"
  },
  {
    "url": "assets/js/21.938f0fd9.js",
    "revision": "4c6a280c4aa85af091e790a94d1c4498"
  },
  {
    "url": "assets/js/22.96fca37b.js",
    "revision": "027678d94c3dc34ccb1e955026453f94"
  },
  {
    "url": "assets/js/23.4c74ac9a.js",
    "revision": "3d7eefef1abb63dc35e0b242731af987"
  },
  {
    "url": "assets/js/24.b8ae0764.js",
    "revision": "d537e7fc8f01570e6b4479c645cf9083"
  },
  {
    "url": "assets/js/25.40921e40.js",
    "revision": "2fd1680447458c30bbc3269b35aabf03"
  },
  {
    "url": "assets/js/26.af606c25.js",
    "revision": "869dde2131fbaa109a1f1c08c5ff661b"
  },
  {
    "url": "assets/js/27.2384b136.js",
    "revision": "a9b1fb084856ed50844c6d62805eb860"
  },
  {
    "url": "assets/js/28.961f5783.js",
    "revision": "54bf05cec79758186151c4ea217e53fe"
  },
  {
    "url": "assets/js/29.54da655a.js",
    "revision": "e64f5ab9b4ac1b5ccfcfdbc711a0dc05"
  },
  {
    "url": "assets/js/3.54f422db.js",
    "revision": "6fe797f089b1107a5c6b0310c8642ecb"
  },
  {
    "url": "assets/js/30.7f991486.js",
    "revision": "90b3790e37f6f2f8feaa985734d41f09"
  },
  {
    "url": "assets/js/31.81123f48.js",
    "revision": "32ac5a80a301b12af571e0d8215d0cef"
  },
  {
    "url": "assets/js/32.63696be8.js",
    "revision": "ec8bfb8684a59c43042322877d9f4999"
  },
  {
    "url": "assets/js/33.790c34d5.js",
    "revision": "5d1cbd24e22f14c29f7ec7c5fad66c48"
  },
  {
    "url": "assets/js/34.2a657b90.js",
    "revision": "c3bbe996400fc761c2f3782c65735a02"
  },
  {
    "url": "assets/js/35.7a8e8825.js",
    "revision": "02d54066f392810c4b5732a5c5835ff9"
  },
  {
    "url": "assets/js/36.cd313435.js",
    "revision": "a53513ae17c7213e4239c62c654c47a1"
  },
  {
    "url": "assets/js/37.446ab3de.js",
    "revision": "a2349b22beb7dbb9deddb64b555d44ff"
  },
  {
    "url": "assets/js/38.4637335b.js",
    "revision": "96d3ea9047ebcb482f3b698adde1c0d1"
  },
  {
    "url": "assets/js/39.dbe3c758.js",
    "revision": "ba9b7fca7646207c2434603f84112926"
  },
  {
    "url": "assets/js/4.2710b702.js",
    "revision": "d2d1e8269b89c2e435627a80fd20c840"
  },
  {
    "url": "assets/js/40.c9dd11e1.js",
    "revision": "6c7b2357bc2c072dc88f105b15956b03"
  },
  {
    "url": "assets/js/41.34181d5f.js",
    "revision": "f5d6baba7ced2cbb4c32aa868fb76459"
  },
  {
    "url": "assets/js/42.ac543791.js",
    "revision": "6f05d0a60a535080e08e4f08d0519c5c"
  },
  {
    "url": "assets/js/43.832eed81.js",
    "revision": "fbe6d2825a01fda4ee47dd643b4b1963"
  },
  {
    "url": "assets/js/44.ac48a33d.js",
    "revision": "5948b091098607675d84e8fa60be8dc0"
  },
  {
    "url": "assets/js/45.3d99058c.js",
    "revision": "fa8df13c7c35a90999db9b7588b3db7f"
  },
  {
    "url": "assets/js/46.b9aaeafd.js",
    "revision": "fc44f26fc82568b8939e60268a972461"
  },
  {
    "url": "assets/js/47.0fda00ca.js",
    "revision": "97236dc18c179f05e5d31e14bb50d68f"
  },
  {
    "url": "assets/js/48.ba257151.js",
    "revision": "2f1ff87a29321149f232ffeb54040e67"
  },
  {
    "url": "assets/js/49.ba7f798b.js",
    "revision": "1d8e34f6e6752400956ddc4f06298c45"
  },
  {
    "url": "assets/js/5.85336ac4.js",
    "revision": "fc880a511a07da4e5c6c409f4e4c6b26"
  },
  {
    "url": "assets/js/6.07c29981.js",
    "revision": "02afccc6c1227db128cbfa41cf4095f6"
  },
  {
    "url": "assets/js/7.b4fe3e45.js",
    "revision": "4b530ebd6f1a204d65adb4ebc4fe64da"
  },
  {
    "url": "assets/js/8.bce0a0d5.js",
    "revision": "0c0173fc4d3dc1c6259fa2c98a8a2564"
  },
  {
    "url": "assets/js/9.13ea1b1b.js",
    "revision": "b44f8a00a3296bb4717d49225024434d"
  },
  {
    "url": "assets/js/app.a3b1aebb.js",
    "revision": "f77164c578a690208b7ef1be1c892406"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "d6c7d34661f5fc7c6d395a90c1cfee55"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "9591f71d28693895f0fc130ae1e5a88e"
  },
  {
    "url": "category/index.html",
    "revision": "7e89acd8c14c0cc76e102ca1ba9235f3"
  },
  {
    "url": "category/learn/index.html",
    "revision": "fdc1e6ab6190288d6f3a3e6ec3d29fce"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "15f2bc1442c3a23d3e031cfc7903c8ab"
  },
  {
    "url": "category/summary/index.html",
    "revision": "fd382a88858795dcaf0818eccb2a35f5"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "0aead8c3ea9408ef70553346d6bd4397"
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
    "revision": "786cdde1ed52e6fe2db8952f0ee598e7"
  },
  {
    "url": "lib/index.html",
    "revision": "5af42ba3ee74efc76a089f148908583e"
  },
  {
    "url": "lib/m-less.html",
    "revision": "46ccbefcd29c0f1f59a929f1c2b51c2a"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "c64ba41f61daf4ffe89472bb18e278f2"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "9ae884ffc6e253030bb3701960c87e8e"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "5187afde6c3272906fd3a8fa61ac8a34"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "2ae7749b6a182ef219b73341112c54ec"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "f6dbca556f9228170a59789d070b5314"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "302896f41fc53a211e100be645ea5bf6"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "20f186af6dad4f7ea334c0411514e479"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "c38d3a09471fe24b7e0abe841813b204"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "f4fceb702f0a26d1d3eff2bab2bfab61"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "aeca6d1d8ff947c218ac70e47efcdf24"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "b2107d96a4b25a2de68b43c870f39123"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "75f2fd55872ff71a7bf9b41163a48a49"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "e7bed6067491397f519c9d02a755af19"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "92e62c84aa4b8be5d8a432e72ae34469"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "948f313ce7e392ee64fb08fbfa0072bc"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "7b142b5d27a2da4dd2771a6ba9e9890d"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "82fd7be51d42f12a8b360c6c548c8c59"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "a1ad1128b66c1a35bc885571cd68c766"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "2997070700adad381e0453f8552845cb"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "ae5e3d64defe8aeeab1d0055386e8dc6"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "0d8cf60a07cb1557c3c75cf469dedfb5"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "04bd2a33f0a2fd52fa79ea4ff00a779e"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "c448db3a0d290eb143c009ebab021b12"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "3995f0865c96ef60a57f126df817c52e"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "b1a0e781fe13586b0f567e6aae55f81a"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "738f116af5495a8e7f83e5104a1bfaa0"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "d2b72fba4012e06fcec318a5b97b50f1"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "0c5e43649205a3cf679efe86c5cf2d9a"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "d2df29a5475c16bcee38378de3a78add"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "e420edde9aef44b263ea33a22841df44"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "849ff4269acfca0b4345b681e34603bb"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "da7f9c825aabbd2e5ce307ddcbf76fc6"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "169acd8ebbbd0294b922ab14ed638ce0"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "cde6e06fd599353aa3295b19e644d886"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "0dc6ec494422320c0581c2e5b24f2fc0"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "b5508dc27aa9c3b40a3e65c27cc4626e"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "d57178fa2bcabe06de4ae6add1e09742"
  },
  {
    "url": "posts/index.html",
    "revision": "0bf46497eef39843921acbf3c2c1cefe"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "c6bd0cabd6200186398d7f2e81b95b15"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "2a39497066a140cbe7ab59a803aee1b3"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "6502120c76aa13f0bfd6c07627bf5b79"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "b7e4ce8e93b5d967d8797bc2c946baf1"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a98da28b88a9499d2351ef09ffcace18"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "63942c7bee40a679af4af492257935e6"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "55a1359d6036e292ddc73f408358ac4f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7f375b6c460e5648eb24f674b1818663"
  },
  {
    "url": "tag/index.html",
    "revision": "b25a0c5f627f00bce904770707122a48"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "173ae962e2c9611de2ca45247d113352"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0136e9bdb8d8e8f966ef9eccab0855b9"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "656e77092314bde543d15e7e591aeb52"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8b46e2d766e3a304b19800a041a5a3a4"
  },
  {
    "url": "tag/less/index.html",
    "revision": "66af089a9ed52c9d34967fd6ce3f0c3e"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "4d406d078f66bbec55a367503ef231ad"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "41b74db84b1fe72fbc008e22430b1f41"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "063f584fbbff900a8c05ac3debeca9dd"
  },
  {
    "url": "tag/php/index.html",
    "revision": "f3398c7797cc22b97bbf2225c82d00d6"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "418f27f3f0cd6a2a88ea614dd0cd08d0"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "71c4330022b6cd3bb10bd90d72f5fb31"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "8c03e83e2f2c6cb12f1effd5d52e8b43"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "230cb4bd33eaf38dd5a13f969dfb87f7"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "a4189a1632d37eb9b3615fc4e339cc4e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3c6b85fb33b4cc95e1a306117d6e7406"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "758d71fc8dee41850c243a64ae5df8ba"
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
