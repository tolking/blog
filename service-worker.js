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
    "revision": "8ad14d87aa676533a136ac56393fa004"
  },
  {
    "url": "about/index.html",
    "revision": "5e0fcc050db4f4e9a710f7247f7cd30f"
  },
  {
    "url": "assets/css/0.styles.e24c0174.css",
    "revision": "b279e1bac7b55bbb9dcf644b18606680"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ab106be9.js",
    "revision": "90948423d8e8dce73c19d019cbb79dc0"
  },
  {
    "url": "assets/js/11.dfbfe8d0.js",
    "revision": "c9689ac9b4f9dbf632ff6bd43209275b"
  },
  {
    "url": "assets/js/12.d74e14a0.js",
    "revision": "6ad32583e32dc61a8a85341b182ea2f6"
  },
  {
    "url": "assets/js/13.68fb463f.js",
    "revision": "fc6c6356bbf8da22a54da347fdb85c59"
  },
  {
    "url": "assets/js/14.fb49d193.js",
    "revision": "266807d53f1cf548432d31d360ebffd8"
  },
  {
    "url": "assets/js/15.255407dc.js",
    "revision": "c3328c3daca6b75d93ecb865135995ca"
  },
  {
    "url": "assets/js/16.133d71be.js",
    "revision": "92529eaa1394cf34497e52115c70d557"
  },
  {
    "url": "assets/js/17.dafa5f9b.js",
    "revision": "0d8662364bf5158abe60b4dd0c52df6b"
  },
  {
    "url": "assets/js/18.5a9770a1.js",
    "revision": "06d4511369a6a8c089f7d41b6e8c62ce"
  },
  {
    "url": "assets/js/19.d56dc3e8.js",
    "revision": "b4e5a44e53e8ec540f6eda78d4b1abda"
  },
  {
    "url": "assets/js/2.e4e60543.js",
    "revision": "a3c96b06e81259b0d42acedae26aa484"
  },
  {
    "url": "assets/js/20.b12b3fc5.js",
    "revision": "e1ffe23312bd95d0aafcab8887b286f0"
  },
  {
    "url": "assets/js/21.72118d4c.js",
    "revision": "d290d42a9b305901823e17680e976bb8"
  },
  {
    "url": "assets/js/22.4844527f.js",
    "revision": "0d0ba0644ff3b278e26e88a1cb243adc"
  },
  {
    "url": "assets/js/23.b5a45434.js",
    "revision": "a6de9ca25d36216a1a170af80064f290"
  },
  {
    "url": "assets/js/24.eac0f1a7.js",
    "revision": "788c709479ff61c6ab910068bfa87898"
  },
  {
    "url": "assets/js/25.1f69eafe.js",
    "revision": "62fd09bdf1173a22430678fc6929759e"
  },
  {
    "url": "assets/js/26.367dbf11.js",
    "revision": "9f9230bcc3c6d69a6082b1810a433bca"
  },
  {
    "url": "assets/js/27.a4dfa176.js",
    "revision": "8c861dfda4c232c1f1ce7dc098f51949"
  },
  {
    "url": "assets/js/28.16fcfb2b.js",
    "revision": "4b623e9624885bfd95164158109a449a"
  },
  {
    "url": "assets/js/29.368e41a0.js",
    "revision": "0ecd6f881fc13b3f19515efacedd0d90"
  },
  {
    "url": "assets/js/3.01465a31.js",
    "revision": "dbf462e1a8d14244004f53291a9ec6c2"
  },
  {
    "url": "assets/js/30.f9f5ee95.js",
    "revision": "b10f33529799640db8ea1b22ebcab8ff"
  },
  {
    "url": "assets/js/31.f1c4b0e0.js",
    "revision": "1c990c78c528146e4b361ed027c8e1d8"
  },
  {
    "url": "assets/js/32.dffde11c.js",
    "revision": "b3deb3450860891f5a0b88efc7166971"
  },
  {
    "url": "assets/js/33.c15c28dc.js",
    "revision": "fcc9137a00215791fc207ef5a5383da9"
  },
  {
    "url": "assets/js/34.c6a4bcc8.js",
    "revision": "2164f8248f9b0d0faa20788a878a7618"
  },
  {
    "url": "assets/js/35.3a7af44f.js",
    "revision": "7633c7013579481c6de6fa30c2415b50"
  },
  {
    "url": "assets/js/36.6684cb2e.js",
    "revision": "3d28f9c01e67f5bac11334d5814886cd"
  },
  {
    "url": "assets/js/37.e25f90a8.js",
    "revision": "5957d9f96c9e5df1d05d06a41838cdda"
  },
  {
    "url": "assets/js/38.79077757.js",
    "revision": "1f5441aac95d21faf8fa0f3786be15f9"
  },
  {
    "url": "assets/js/39.10ae24b7.js",
    "revision": "1d4a4dab1ec518ab39fbeb61852f51b4"
  },
  {
    "url": "assets/js/4.1ca43f32.js",
    "revision": "1d37ea8f68dcccc7c3f226391428d65b"
  },
  {
    "url": "assets/js/40.0c6f7e6c.js",
    "revision": "e8d9873a7552026d6ef0d4cdb3d40145"
  },
  {
    "url": "assets/js/41.96364150.js",
    "revision": "0e89e664fdbb11b765d182e6f9531640"
  },
  {
    "url": "assets/js/42.5a150ad2.js",
    "revision": "b7ca3c51c85150059bb927253b4a215d"
  },
  {
    "url": "assets/js/43.af7177f8.js",
    "revision": "1a7ee62a10aeea2b39dc1fd597730b58"
  },
  {
    "url": "assets/js/44.54e7b913.js",
    "revision": "1c5a50fad2449fb0541273c343e08358"
  },
  {
    "url": "assets/js/45.11098873.js",
    "revision": "40e014b90c03d010d7c357d9a44ca520"
  },
  {
    "url": "assets/js/46.624e5240.js",
    "revision": "381b259d117de683f8e04ae71f44e23a"
  },
  {
    "url": "assets/js/47.8ea32514.js",
    "revision": "e133b408a2d0a2628ec9229f7d99bdb2"
  },
  {
    "url": "assets/js/48.92ed53cd.js",
    "revision": "cee661836508c8ac5126023e14f5f6cf"
  },
  {
    "url": "assets/js/49.7f1768f9.js",
    "revision": "1ed511edef7fccee7e7bdbcd4269a219"
  },
  {
    "url": "assets/js/5.82a9a8fe.js",
    "revision": "ba0f859a185a22146a5f7b1a70121398"
  },
  {
    "url": "assets/js/50.d13276db.js",
    "revision": "59eab68bb2b89178485dba57bee68fc5"
  },
  {
    "url": "assets/js/51.360e7bb6.js",
    "revision": "5457534c0b6df63db37c676fb442d487"
  },
  {
    "url": "assets/js/6.0426d647.js",
    "revision": "456f70167c032370540a2e5b94944aa3"
  },
  {
    "url": "assets/js/7.d97533c8.js",
    "revision": "de85322fdc56a97b39c361be7ab977fe"
  },
  {
    "url": "assets/js/8.152b79d5.js",
    "revision": "dcdd44ab79133e8f7392965b39057d9f"
  },
  {
    "url": "assets/js/9.6831d400.js",
    "revision": "b37ce2abfb9395297ad117cf5e38c916"
  },
  {
    "url": "assets/js/app.19d56056.js",
    "revision": "88a6899d20118a6118c801f49bf41018"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "bae5bf9746ecf6e9857e4fadbde023ed"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "22ec3c5df69dc7b7673fe8d1d6061720"
  },
  {
    "url": "category/index.html",
    "revision": "a64bd4eca8aaef971d266357b37f153e"
  },
  {
    "url": "category/learn/index.html",
    "revision": "b5c038bec18ba307bf7129b19dfcf74a"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "853ed9cfae459086e2a37e6113cfe84e"
  },
  {
    "url": "category/summary/index.html",
    "revision": "90e80a0fdd86905cd5e1477d32ea0b4a"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "1058e8e40e6a33b3617b057b4b1c697b"
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
    "revision": "f277222a81f866b4cf217b1f8654c3de"
  },
  {
    "url": "lib/index.html",
    "revision": "251558c5c699c187b63e78486ec273c3"
  },
  {
    "url": "lib/m-less.html",
    "revision": "795910630d58720f610a75c676342c17"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "15ce781144f964d7b9b60719750bf184"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "a5321ed56a90d2f8b8e5ae5da3a59ece"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "74cdf7171428126946c7f2dd41c9dbd0"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "cdceff034503a978d548ab7a03e63f95"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "bb1c9f198db36b359ade7ed944378c25"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "099e7e11346997fec3ec9b5713a6ea41"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "c8cbe1d1ba9020ca313af2ec677a5850"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "3ebbf1e0e87d97fac690f149467f5b76"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "f31151dbe59786ab67bbc693a2e056e1"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "9b6819c7d42983115b0cca9beb81b92f"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "163059bb44c9cadd52a5a90ef84f7469"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "eb63d34cbcf0b251934bac62dd7e2134"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "7622268f65f0d09d182075c6cabd5424"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "0144b7250469ce7883d1ca7c94e59dbb"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "488b1bef84eed6385747773a8e797c4a"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "71915335fd9a7d55d7c290d873f5899f"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "ff2ae42d1d764914a43bc466e90d7f38"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "0166ea6031aae1c3f6e47f81e868bda9"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "9e3302756c95306d8bc67e41ef9eb644"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "df89fdf563a6143e249692790b35c9b0"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "ad6efee2ac232d94527609736ac3fc01"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "14fb004bfbab00b6db3760a0d58ec71d"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "9fe14733149f6ced63ae53663cca6e35"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "201ddcaceaaedc8b39acb707c17145a4"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "d73b0768ba945bd1b5d48c410cdb8743"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "4e1d69feb78cd2a1079c2ada6ff77cae"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "e5e4c02f9076ae7f22822e6ec2db3d02"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "22f0926f18fe98de9d7452c0d21ef715"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "f9beb5be7ffab27e68e985fa89d4e3ab"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "50f1e5ebd0577b509e3f75f605a6f448"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "1d4518ce6ae69814b92a6320e2566b66"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "89cd98bc8ca7c6c146187300c3ea1b09"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "9b207f0aaa4f247c66e8a7affd1d5145"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "fddf704fa98124f3256534734b78753d"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "3d55db51c7e1f3748debdbbd3423cf7f"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "5baab0e3bf7850405cc7de9fff8b4354"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "c662008c727e7fc5ecbd945f566990ee"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "0dc759853ff56a204d36af9ff1aada21"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "d6f198e56a64ce172d3e181584fa6062"
  },
  {
    "url": "posts/index.html",
    "revision": "6aaf8c66fe00bd625215451f1e8bf0e2"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "f336d2f793460c7e8fdfa145d745a1c9"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "e6e195de7f0466a74fac7e65ef14de25"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "ea2f6d44a2a13d1b7ed33ae66fda1989"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "7f1390cd965e5f25480e1f3755eeefce"
  },
  {
    "url": "tag/css/index.html",
    "revision": "26ba6ac217c1ba0cb8fa5f15a31dc544"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "ec3e3058a4a230dca729935b4f58219b"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "061218d2cbc2e8510b0089ca68b1a9d6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ecbf5947a9f56d64ca3df3905605f496"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f37b5d8ed383b56c30a01bed7003610d"
  },
  {
    "url": "tag/index.html",
    "revision": "c14bd6162f9805612c14ad52e8c2bb0e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "6063b3be890baa54eb13def89a7195da"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2850879b7aa96261b0a05fca746f0f78"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "0c86c05b801f942e9a89dc0aa3500405"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8adaf4f61a4816d278b9f26cb67060ba"
  },
  {
    "url": "tag/less/index.html",
    "revision": "9ef6e68561789835451db5f05d3d5ae9"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "5abf000d76905fa7588007053cc6d217"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "e1c298ae77fc72e39138cfc299425ad6"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "c72d3be36ea43305d850aaef4ebf7090"
  },
  {
    "url": "tag/php/index.html",
    "revision": "a883b773309803daed9b52476ce2f1a7"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "facd9cb11b4192ff3d08c0c4af8b118c"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "a84461e21574db3a9ea87cdd63834aa1"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "a963abdb15ccbcc34d1565507391bd1c"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "25b41d9036e67cfe4b8b8fc811dac54b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "b58239f92a5a7d9bc95e51c03f67ca8d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6db645d495cdcd76d63d22ed266c1de2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "67a5dd9bb28f8ffa6136e2dd79e57f21"
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
