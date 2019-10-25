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
    "revision": "c874b9d4bf9ab9cbdc6e7ed73d0c7e22"
  },
  {
    "url": "about/index.html",
    "revision": "d7e4fbbcd291b0ac9e531907c8b5584f"
  },
  {
    "url": "assets/css/0.styles.2f76c24e.css",
    "revision": "4d7992e822cd23e2c020b642dad34b09"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.36396784.js",
    "revision": "0bf5e7513ba79e59e2c6f297a7157b18"
  },
  {
    "url": "assets/js/11.f35cb738.js",
    "revision": "0e72ee8cb2e486253adb92ba8ed3fa24"
  },
  {
    "url": "assets/js/12.31b00428.js",
    "revision": "e66b0d6be6f3684da3b34a47e5800f03"
  },
  {
    "url": "assets/js/13.4ceb2022.js",
    "revision": "8192316c59e71b5eaeacf17eb72c3f4a"
  },
  {
    "url": "assets/js/14.cf7391a8.js",
    "revision": "d25015cae90fe30711b15eb8fdcee4e7"
  },
  {
    "url": "assets/js/15.9c5795d2.js",
    "revision": "07f0a4fd5d4881c0e83c431b8ae7ab97"
  },
  {
    "url": "assets/js/16.173cfc85.js",
    "revision": "080bf6bb08a6bea1f29348d9b157f5e7"
  },
  {
    "url": "assets/js/17.944cadc3.js",
    "revision": "6c0961cc8159c027dca9ea15b5d7d5e8"
  },
  {
    "url": "assets/js/18.e096b99a.js",
    "revision": "f1a5608397a86b822d17a13cfbcd8ab5"
  },
  {
    "url": "assets/js/19.38b29745.js",
    "revision": "e3f12f48ee20c31dbb7860ea1812ac62"
  },
  {
    "url": "assets/js/2.eab458aa.js",
    "revision": "0c95e99c7edead7565161880f4c44cd4"
  },
  {
    "url": "assets/js/20.7dbb9581.js",
    "revision": "44796cebd5ec4433c1b7dce68d27606f"
  },
  {
    "url": "assets/js/21.f0b83828.js",
    "revision": "2278cc0c2c41996d0218df474911ec97"
  },
  {
    "url": "assets/js/22.da4d6128.js",
    "revision": "7e30b2e7b2acdc50ad08d81515016f25"
  },
  {
    "url": "assets/js/23.406b2e0d.js",
    "revision": "00cfd22a46ddee591d88bb07c330bcb2"
  },
  {
    "url": "assets/js/24.e33a6f15.js",
    "revision": "6bb7ea3c754a0d877f3ff4c2315e8b07"
  },
  {
    "url": "assets/js/25.95ee9d11.js",
    "revision": "600be02c251fd59257e0d994b70c1513"
  },
  {
    "url": "assets/js/26.e50bc397.js",
    "revision": "aaa1c68064926c3a149cf54cf54029c1"
  },
  {
    "url": "assets/js/27.32a9f6f0.js",
    "revision": "53f120a569deea5944f2181ad9cb4737"
  },
  {
    "url": "assets/js/28.bf9b9ebf.js",
    "revision": "1df23494322447d6097d862aa411585d"
  },
  {
    "url": "assets/js/29.bc07b2b3.js",
    "revision": "cf781f2fa87026cf11ba40d33104f8b4"
  },
  {
    "url": "assets/js/3.182085eb.js",
    "revision": "e8ac2c262169ab8504056cac09d72219"
  },
  {
    "url": "assets/js/30.621aac38.js",
    "revision": "adec9031fb38833eb838e6dd54f4581e"
  },
  {
    "url": "assets/js/31.4da345de.js",
    "revision": "5604645179e8b889560bd43778b9cd67"
  },
  {
    "url": "assets/js/32.b3f7d8a5.js",
    "revision": "a9c1d8a2ffaee2421ab6019625148182"
  },
  {
    "url": "assets/js/33.c6149e64.js",
    "revision": "4e519f35e0d0e1ca66f18c7521df457c"
  },
  {
    "url": "assets/js/34.38419aaa.js",
    "revision": "803670a1b4b294d6b7e2121b62355ded"
  },
  {
    "url": "assets/js/35.61f5c6ce.js",
    "revision": "d99b2c2b6c86d8181d1c3ae767d0109e"
  },
  {
    "url": "assets/js/36.72c536e3.js",
    "revision": "fc82def58bde94fc600df30c02786635"
  },
  {
    "url": "assets/js/37.86e6f6fa.js",
    "revision": "b02b259365f8b64ebb2dbe319dbecf24"
  },
  {
    "url": "assets/js/38.5fdcf5d7.js",
    "revision": "b18caef50fa3544f3c717ae3245c76ed"
  },
  {
    "url": "assets/js/39.7990815c.js",
    "revision": "2f847a06b555ebfdb37d45617c17435e"
  },
  {
    "url": "assets/js/4.4a519946.js",
    "revision": "5573cef9b24a40f559154b3bf855ba97"
  },
  {
    "url": "assets/js/40.b8e58478.js",
    "revision": "f1b33ec5add4ff782dcafbcae655c544"
  },
  {
    "url": "assets/js/41.504f3df5.js",
    "revision": "324396013cce6a9e6e2b3a322f5d5f21"
  },
  {
    "url": "assets/js/42.b74999e0.js",
    "revision": "181eff22dd50bdcfe042dc273fd65f16"
  },
  {
    "url": "assets/js/43.6333c3cc.js",
    "revision": "54051775e147ee8ee5137c7e772ee9d1"
  },
  {
    "url": "assets/js/44.26c662a0.js",
    "revision": "deeb57bc8803713807725295a27dd5a4"
  },
  {
    "url": "assets/js/45.02aa8fa0.js",
    "revision": "6ef1888d24409f9132855d781925590f"
  },
  {
    "url": "assets/js/46.1e531be9.js",
    "revision": "738d93602b8427944219a0791ec034d4"
  },
  {
    "url": "assets/js/47.1f6e09b5.js",
    "revision": "e794f7150d97c3e1d141a0ab8d9267f5"
  },
  {
    "url": "assets/js/48.fe9b787e.js",
    "revision": "3b717c9982c8793f140e144e5cdbfa2a"
  },
  {
    "url": "assets/js/49.d0231f51.js",
    "revision": "893f5e4025bca05f774d0ae21106af08"
  },
  {
    "url": "assets/js/5.eb616d33.js",
    "revision": "1f3ed01575dedb450483c9d3a581bad3"
  },
  {
    "url": "assets/js/50.206966f8.js",
    "revision": "15d54a1ca35c89e490ce33bcf8f6af61"
  },
  {
    "url": "assets/js/51.d82d6a05.js",
    "revision": "757585c534279110ac7f38347729f861"
  },
  {
    "url": "assets/js/52.e5bfed87.js",
    "revision": "0e66f6f48ffe0a83e3fe88c6e55ad3f4"
  },
  {
    "url": "assets/js/53.228d5960.js",
    "revision": "ed72561fd3cd4ee217accb8336775a2c"
  },
  {
    "url": "assets/js/54.25bd9a3c.js",
    "revision": "fa42f77d22fcb50b556c46c45a2fa755"
  },
  {
    "url": "assets/js/55.cbe090c6.js",
    "revision": "c8465f8e7983f5253754fd64c4103c72"
  },
  {
    "url": "assets/js/6.277b73c0.js",
    "revision": "76ec65735d18d1271fb174736c4b31f0"
  },
  {
    "url": "assets/js/7.c7732b0b.js",
    "revision": "ed9d04e228e0b68fafca373664d115b0"
  },
  {
    "url": "assets/js/8.db37e9ce.js",
    "revision": "3860f4e9e1ad445c21c8c9f3657dbc1f"
  },
  {
    "url": "assets/js/9.ed4b5b12.js",
    "revision": "b1980b1bdfd604a0bb3d102ddc133b3d"
  },
  {
    "url": "assets/js/app.4b2b0ebe.js",
    "revision": "10b18febe3cbda55d34af39a30c7ffaf"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "aef3819b4a7e1e198058495b18e86495"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "925a8fe30e3864c47bbdc5ef53ae1e49"
  },
  {
    "url": "category/index.html",
    "revision": "c0f9f71ea1980df5da5aa19574aceac3"
  },
  {
    "url": "category/learn/index.html",
    "revision": "249e3952aa10bd1a1773d3cdf0d337fa"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "9cbdfe806d57fd99eefc9357230909be"
  },
  {
    "url": "category/summary/index.html",
    "revision": "71fc183ebdbbe6f8345b600886dfa02d"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "9cff763846a1663258c0ba49bbcf51cf"
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
    "revision": "1ff8b423085e3b2b71d71371b0bee10d"
  },
  {
    "url": "lib/index.html",
    "revision": "79244b2fe7676cdb9d6f2347f8aee8ff"
  },
  {
    "url": "lib/m-less.html",
    "revision": "5e5fc83c49cffec882be307501e2256c"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "00b13b53df71a7fb9c99ae802da5104d"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "d6588d9398817903118a7d72336a51dc"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "427d0f0da389ac182f78e330c4ad765c"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "934d886c0793e197ac106431650247f5"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "8f7e8519bf882a59b66e10177f2e4d93"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "a9095d6f9933e9f19ce224d909cd7c85"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "856cdb3a44d7307e4e97a3e89f3ba20c"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "4441eb6cf9822822fa00f1cfba0aef19"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "a428954e03fdec1f2feb9dca6e203553"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "568f66a7075a8c898f28d8857f36117a"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "a9f5ea8a0324cecf18bf0a4917b16728"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "94b890d2eecd7fca2bdb1a7ec993bfde"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "daaa95bb8a15866e347344be5626daf9"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "9c2ce92c888d95c697350b3d3bc7317d"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "876d1436ef8864dc2cb1f30730b4311f"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "c46fbf9c3e61d939bf18c8fdddd2174a"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "063db02c25af07e89eac0b316bb873a9"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "49f94e4b2c0a4eb5696bf2797c8601b0"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "9d9b26278e9f83f9532f6708e7864c0b"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "46bbf1f7c9adcd66b0ecc7a735a20f78"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "9bd989260fe469352bdbf46a61030115"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "87cc272910524765e6c34630521642c5"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "e87ade6f935c1a9facf4a939c7e11303"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "1fdb561572fd6290590a03788483418f"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "c42a65723a86e183f334ff2b4d603188"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "d5886a98a743eefd4b129653f3ee45e7"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "3071508e521408d4dc32a22881ee1e1b"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "71de8c0eb63bf9c39c04d987e85993ed"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "922f585a9c978e81a9a4777a9dad2937"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "3ded0526f27853fb7f24ce825cc0d6fc"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "b38f7f1040e51799766c97b796c9fd4c"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "2ed5df2eed0fec1b64e2e4ce346e794b"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "4fc0ec788e306b2e574d8dd563e17493"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "93c4cc38a0d0b1e6303ffb562ba22aa6"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "f48f6c9c06ab755e784a69cf38f3b1e1"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "4db4f973239d6a4cc625df057cbb622a"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "6ecd4066b7f177d05667e5f2bd6e5e13"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "0249d0518111fcd4abe81767d853a08e"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "06b16af80672ed650466dec6f1b260dd"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "ee03b9ff3b1f23fb1b827e089a1efa62"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "9411fdfa340ab20489142092aac660df"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "ca8c70a8bd60574cc0d981b9383f7bd4"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "d99bf7670907cab94b6f67a77adea7dc"
  },
  {
    "url": "posts/index.html",
    "revision": "4e785b4afbcdbe42a03654ef5ce329d3"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "619b17e4abfa36a6474834c318621c2c"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "b04d71c2089be466157d524084f7e7b6"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "2e9b18d69ec49365ac85c16249dad864"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "2bd7622287516edbf48b773a022085e7"
  },
  {
    "url": "tag/css/index.html",
    "revision": "58c806e35a0daab52d6504e823b9cdb3"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "6adafffc4dee37bf04aae5b73f9369d5"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "b229984e2ac576adea111b8648af9f25"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e10e75e4d0c8cbba7340513d241c65e0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3cb40eef7c8d1f86ec62576bffa3eebe"
  },
  {
    "url": "tag/index.html",
    "revision": "2e5f850ec7271ee8b8ba8dadb96baefe"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0d18ecccb9884cfc0e30ac69b689fbcb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e8b3e69dcfda015faf729818b8f355a7"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "539a9d9b9c5524abf5372ea732f3afd1"
  },
  {
    "url": "tag/json/index.html",
    "revision": "9456ed52393d3dc50d98ce67167886e5"
  },
  {
    "url": "tag/less/index.html",
    "revision": "1dd55a9d808678316d1b568a0084b1d3"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "6d3c1bcb1e98ff0fac879759a387ec16"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "646d367663ecb775e5d956e7bddbd5de"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "a0c16c627a54831e3c5a59b8e7d7c75a"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "430c38279b32e80da981e0baab70b19b"
  },
  {
    "url": "tag/php/index.html",
    "revision": "7f93243085eebed5f7f657a51c465028"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "ea1e3bdeb7da76376a7f91baa510d0f7"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "d5e3d25ff411e2a260d72ae4383ef23f"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "3ec08a4aea191f3b8e7788bd47c04efd"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "e2dedfaf2f3f94337fef1f60ae75b528"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2a6ee0046ea8139e3b0235adc0b1dd18"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e18431c25fa845c7f1e9a012323ea7fc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "80732541e78f3d1598a51f1d8141599a"
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
