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
    "revision": "7448439b3fd1c31ed4ffcea6bcc9d98d"
  },
  {
    "url": "about/index.html",
    "revision": "580c42910864a71c77a802b3ffc749b1"
  },
  {
    "url": "assets/css/0.styles.e436cc8f.css",
    "revision": "47892967a8f230e7c381d492feb975c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.44ef85a8.js",
    "revision": "df6d566d3fb0eacf8ac3d488bc6c93d0"
  },
  {
    "url": "assets/js/11.5ba4bd2b.js",
    "revision": "964b19a3f0af76300992146d66118806"
  },
  {
    "url": "assets/js/12.d4944e0b.js",
    "revision": "48e4881cc71011d5dbbcf0475b5edfcb"
  },
  {
    "url": "assets/js/13.e882a19f.js",
    "revision": "7dd17a81ab0f380c4f0f3898b9600ccc"
  },
  {
    "url": "assets/js/14.22d6dc92.js",
    "revision": "ab8a734e525b4ec3a55228c0952fd02a"
  },
  {
    "url": "assets/js/15.52ebe23f.js",
    "revision": "da4eff3718eb95fff0cc4531bd15a2aa"
  },
  {
    "url": "assets/js/16.e005ef53.js",
    "revision": "f3af1862da5526806372f171038aa9e6"
  },
  {
    "url": "assets/js/17.8f14454d.js",
    "revision": "c4355b0603c584145dc379298c51e260"
  },
  {
    "url": "assets/js/18.9821415f.js",
    "revision": "ae77e3639fbc6afe24801b28a6c561ce"
  },
  {
    "url": "assets/js/19.120a5f30.js",
    "revision": "1894de58e2fd039f1206ef3d239215a6"
  },
  {
    "url": "assets/js/2.7f5ef338.js",
    "revision": "63a84f98213fe8ee15eb328ca8525852"
  },
  {
    "url": "assets/js/20.310fb1e5.js",
    "revision": "21266c918babb4927c0fb836ec65da27"
  },
  {
    "url": "assets/js/21.f0b355af.js",
    "revision": "ba6b202f6ffdba4e5fd4a019bedd9f00"
  },
  {
    "url": "assets/js/22.e24dbe44.js",
    "revision": "3f6f2d841f80716885e761ca44566748"
  },
  {
    "url": "assets/js/23.e9cef4bb.js",
    "revision": "b170e2f3b5f729267749b04121fa49bb"
  },
  {
    "url": "assets/js/24.55bd91e5.js",
    "revision": "2479a5441e4318dd7a6b96eed99df359"
  },
  {
    "url": "assets/js/25.622ed6c6.js",
    "revision": "3cdbba38cbcad65e103a63b967195db4"
  },
  {
    "url": "assets/js/26.8ab6840f.js",
    "revision": "a758dd54221e0e7984767666b29c350a"
  },
  {
    "url": "assets/js/27.cf9d927e.js",
    "revision": "bd0b01858a0ef9d8afff2bca57abb2a3"
  },
  {
    "url": "assets/js/28.dfb4ab18.js",
    "revision": "b0e9ff12006e1a0826802c6cda9b384d"
  },
  {
    "url": "assets/js/29.3a7e7a19.js",
    "revision": "ab2b56f1756ecc6a5cf183a637952703"
  },
  {
    "url": "assets/js/3.229212df.js",
    "revision": "40acae9b9b964a993f8e4b8a2bf4f199"
  },
  {
    "url": "assets/js/30.eaf801cf.js",
    "revision": "ed07a57bcc1e4651bc77716f1a5379a2"
  },
  {
    "url": "assets/js/31.c8918479.js",
    "revision": "d0f7b058cc8e3a1f3c5619344ca9a969"
  },
  {
    "url": "assets/js/32.a1e0e4b4.js",
    "revision": "78ca817f17d37692ac5a70bf934b5da6"
  },
  {
    "url": "assets/js/33.e2537df7.js",
    "revision": "e1e901f532fb196a7cba385ed25a606d"
  },
  {
    "url": "assets/js/34.baa97965.js",
    "revision": "14ba1abceafd15b35aba8f7a7b76f5d8"
  },
  {
    "url": "assets/js/35.163d1628.js",
    "revision": "150b5d47a77c23ba13d0e69af57289de"
  },
  {
    "url": "assets/js/36.76c147ac.js",
    "revision": "1ea9a02672e0f8d373c9b851be3e1e38"
  },
  {
    "url": "assets/js/37.bb57d1b3.js",
    "revision": "817914e9d0e8520a3f0d459d43b4a8de"
  },
  {
    "url": "assets/js/38.25dd3c92.js",
    "revision": "0235d0a6c4717496f7c7a5222764d98e"
  },
  {
    "url": "assets/js/39.adb38189.js",
    "revision": "cabd669bf46a067d26c719485bf15f32"
  },
  {
    "url": "assets/js/4.c4341cd5.js",
    "revision": "752bbb3e033f788bfa0f1f5d7045f322"
  },
  {
    "url": "assets/js/40.66c4f148.js",
    "revision": "8798fbbb91acb2d3255802ebb71bb929"
  },
  {
    "url": "assets/js/41.64995d92.js",
    "revision": "f250cb8def27a3064d6c329dd06ca578"
  },
  {
    "url": "assets/js/42.509de7f7.js",
    "revision": "a15c9e335c02ef134cb79b0e7751466d"
  },
  {
    "url": "assets/js/43.06ccf5ab.js",
    "revision": "09749a5e56af62438a8d7b8e96646e1d"
  },
  {
    "url": "assets/js/44.1af9ffc0.js",
    "revision": "47fe5c478150228d273bdabcaf79d2e9"
  },
  {
    "url": "assets/js/45.3a47c819.js",
    "revision": "e951c572d3fb519068538c11e3a8925f"
  },
  {
    "url": "assets/js/46.80427992.js",
    "revision": "078e5d3f16402879638c21f8ce51d48d"
  },
  {
    "url": "assets/js/47.de07853f.js",
    "revision": "b5962f6534849f5fd2bd68710200e4da"
  },
  {
    "url": "assets/js/48.555acdeb.js",
    "revision": "3436d50a5fb41d0e2d4ec4941c08681a"
  },
  {
    "url": "assets/js/49.957a0728.js",
    "revision": "3d6c740d24c34f02cca6c01a2cb3e4be"
  },
  {
    "url": "assets/js/5.a32afdb5.js",
    "revision": "775f5766b57e4a1d118434fb367c38bb"
  },
  {
    "url": "assets/js/50.71717f7f.js",
    "revision": "384441f6574a7ca4df57c27d46f0294c"
  },
  {
    "url": "assets/js/51.48c05e68.js",
    "revision": "2f00ff4ea0ee1529deff44cd39fdd9c6"
  },
  {
    "url": "assets/js/52.c0ca4886.js",
    "revision": "5c92c462888d3a612d64a0bb7a94643e"
  },
  {
    "url": "assets/js/53.48f59c41.js",
    "revision": "4ff2c0976516bbf7b3de4c7752d46a51"
  },
  {
    "url": "assets/js/54.725bce08.js",
    "revision": "07c074d7fa78336962dffce44b7dfd61"
  },
  {
    "url": "assets/js/55.dea6bf27.js",
    "revision": "7f8df9a46002441296c8d6e851e58161"
  },
  {
    "url": "assets/js/56.a29bd7e8.js",
    "revision": "3dcac964a6f1303e224050229bad58d1"
  },
  {
    "url": "assets/js/57.4bcacb3b.js",
    "revision": "d29de5537340085846d1095d4a9b8c1d"
  },
  {
    "url": "assets/js/58.bef7cb24.js",
    "revision": "b5983c23fa13d68401d4b437f0ef8635"
  },
  {
    "url": "assets/js/59.e1a637cf.js",
    "revision": "078cd04700a16ce84e01d5ab66664c22"
  },
  {
    "url": "assets/js/6.035dec47.js",
    "revision": "06ea6cf03524539409f74d36ee61da92"
  },
  {
    "url": "assets/js/60.eaf70217.js",
    "revision": "1a9833feb5c77df067c1bada5653fd5c"
  },
  {
    "url": "assets/js/61.cd0996cd.js",
    "revision": "bd62a8a3b1c8965f5008ca4314a9fd73"
  },
  {
    "url": "assets/js/62.f7e92b8f.js",
    "revision": "6e8d406d7bfabf49882dcf87162f19b7"
  },
  {
    "url": "assets/js/63.5eb5ace3.js",
    "revision": "4f9fe74f638d2ac427ad553671622115"
  },
  {
    "url": "assets/js/7.11faabd4.js",
    "revision": "dbf79aeb7e3ab9ea6821289338081ce7"
  },
  {
    "url": "assets/js/8.abb90657.js",
    "revision": "ea01b2ae1617ef391186f8b26d2090d8"
  },
  {
    "url": "assets/js/9.ab4494f9.js",
    "revision": "46d01bb5965aabb7d93c90771b128563"
  },
  {
    "url": "assets/js/app.37a95850.js",
    "revision": "eadde4eb28315d67f91a45f5ab234c39"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "87b620182737cbd22c27da2171069c82"
  },
  {
    "url": "category/index.html",
    "revision": "c0400d36c50c37010552453b8371e1fc"
  },
  {
    "url": "category/learn/index.html",
    "revision": "88673e5ef69ad71a384b773881ebe34d"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "7ecc049a0d48004abdc4981e61f1fc4a"
  },
  {
    "url": "category/project/index.html",
    "revision": "91feb86c452a3b6799a812b4cd374c47"
  },
  {
    "url": "category/summary/index.html",
    "revision": "393de55b3fc82f47c87be5e077997ab0"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "666dec930c37f323952d9a4ac807d82f"
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
    "revision": "12774e5a7e270cf3458e0015a4003a29"
  },
  {
    "url": "lib/index.html",
    "revision": "77348154ef75a912f72cf9ba4cf7c993"
  },
  {
    "url": "lib/m-less.html",
    "revision": "7449a17af0cd0c28bec7eaf22a4da8ef"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "97d9139b15b3364240a17c54c7ac1ad3"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "2611d53b110dbe328d7aa7b38820f9ff"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "54f0b5c45c1b769c4783e5fb7b2dba08"
  },
  {
    "url": "lib/usercss.html",
    "revision": "a215c80c428d55837b66a21438c12236"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "a719f4fd979f1c3e307797217ae9219a"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "e6c112beb4b190e6cde2a655b4da0144"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "9bae0611e8b532cbd713344ac751030e"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "dd6b5aabcd99baa7bdedcd74e2cf0992"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "3f370f4b61a97af1f095176c949ee76e"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "cba7e50526c93f8140a8eb8281022ff2"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "c38c3a1c078fdbea175b9864ff9e983b"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "93a34a676986add7e56616f9105e5c63"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "cb3ff17c5d6f0bfbef6174401dc5c35e"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "38166330ae362a17b951a0f8ea1f6ea9"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "6ba4061a8b39089d2dc8fe4c26bb137d"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "92b803ada3857b41f559dc59122f663d"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "dc496512015418171c5a207d59fac6f8"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "262f4e5bc482b3966e6125a5f9a698e5"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "0d1f661ae08578aa1a47e489b2626955"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "a65a74720871bc732773fc1b3bee74a9"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "dbea8b09931c5ec7be13022dff2b51b4"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "fdad925bbd25a2c91fa6b018b6a6a329"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "1b3c053d9536530add68bbd10a900e7d"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "fdb58e6077f84366345c379d23a7cdd7"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "6b50702620eef20272f1aa931a40418c"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "5e5df9601c83b1d3d2e16dd72d56c8ee"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "7f79db3c14ff78bf61e8293fe5df45f9"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "984711ace67db071632511727f4302d5"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "1ce5849d6abcbbcd8c21f360ecdbaeb4"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "9029b2cecbbfa92bfd76f5497681c78d"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "4548d41a8a879e955dfd63748910b1d4"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "7d16f33ed8493423a7940b5f921b6048"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "6404b76d73339b43cc668bd644d8a968"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "97f0f49821d62fb1ee54d40256b1a3c0"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "100e36e4b5ad0e01cb3d290e17a42fe3"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "a56198b4b67c98f4c986def01bcb7430"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "52bd05dfb9397fbb928a34889a58740b"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "068dfa7c3b02dab0c8ede729fbf82aa9"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "0eade1dddf1efb85d4ab927a44c0fcba"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "772320be3d401799e5c3930f4e6b1f91"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "1c29656609363fe7b76fb0c1c6bfffd9"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "ba8a5c33e257ce38078754625b3f9c5f"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "b275efb8e4e165864a4d37e650ce081f"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "d76cb17f07517696ea123283b0a9d1bd"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "8557a6e95bac19822ebea803127bc9bc"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "1a89e91935d44061dbaac78b98cb8c15"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "a955da85062a6dc4f64b7f138a2e2916"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "be390e1727f3b56c9456b9a6b84e52c5"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "2a546ebef6f9457576ad40bd1d7da6f6"
  },
  {
    "url": "posts/index.html",
    "revision": "2c76853c473eaee874f6231a3f4ae4a2"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "b2b88d1c7706f95b833b2672594f0654"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "d887b712fa5fdafef243a41866a345a9"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "fa84e5516c75dc7afcc5df0c30256f93"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "2d368dff4fd6632421f62b7a90efeed3"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "858f2131d914b8b7b76d9b026aee44ae"
  },
  {
    "url": "tag/css/index.html",
    "revision": "3f0202b19a39797990ccd74a1eb3142e"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "23f3c562d6d3fc51a1a3eda81ae877ce"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "57a8dc2f59c4cf700a7bac9ae19bec82"
  },
  {
    "url": "tag/git/index.html",
    "revision": "74174f1f686155b119254b4e13a90bac"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7b9c5637389a950280111bb5159ee013"
  },
  {
    "url": "tag/index.html",
    "revision": "d66507cb9c67b54052395d72d59447e1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fb0e7dc702cfa51413ce4a80977d7552"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6cdf19c979106367996fb7d438f0261e"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "afc365a8e8fb922e129b9612ac6192f0"
  },
  {
    "url": "tag/json/index.html",
    "revision": "7f92bd5cad17048889e0b080e218bf2e"
  },
  {
    "url": "tag/less/index.html",
    "revision": "f4704be4c07fb93ce52266878df6a158"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "981fc34e73cea6af6d6521621435c17b"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "d8d479873a3c09281177cbdfcae06089"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "bebc5eec9511228e892af2a04048df9e"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "dafe8ad2b79d09e6b09fc2090400d1a9"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "71b70a0e0c9ab02e161927656f452f83"
  },
  {
    "url": "tag/php/index.html",
    "revision": "75100d141cfaf27cf86184bae365d733"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "50516206288e728d2c3cfa4840a9c9de"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "1b495ef69ef679c081d8cab56d5b3d7e"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "f116bf32f29ffe1b2cac0dfc5a506224"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "d06fc566727b59fdf966bbd270fcccaa"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "c5c921cfe9b0c8aa2dd29116743ba817"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "7eccf6d5ba0f974c3751a1ed46eb194d"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "3d8e85906313d7aac3a69e81ea1ad3fe"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e34f0e2e191979bb6b403b66b72b0114"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a9c71d890cc6d0a6c9e75f304ba82053"
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
