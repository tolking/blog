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
    "revision": "dfb552cdc00cab69d0f8c27d00e7b364"
  },
  {
    "url": "about/index.html",
    "revision": "6120373c8f9039a1940bb11543ad7440"
  },
  {
    "url": "assets/css/0.styles.7edae907.css",
    "revision": "7826720ed12cf6d4f52012d107de7983"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8f5403e0.js",
    "revision": "21680ef57a97cc624b0008a9abad9975"
  },
  {
    "url": "assets/js/11.0acbb21c.js",
    "revision": "20fb9025eb2e77d42807148371596e6b"
  },
  {
    "url": "assets/js/12.fa0e596f.js",
    "revision": "8598cb07ab4a30151c2cab2a9c96dd92"
  },
  {
    "url": "assets/js/13.d6a5edd3.js",
    "revision": "0039910aa8831f4620891f5cfae0d817"
  },
  {
    "url": "assets/js/14.8c277cc5.js",
    "revision": "7523a9dd53bf118019ca8c3980f1ebba"
  },
  {
    "url": "assets/js/15.051f5613.js",
    "revision": "607bfb79da0b0355bebb3a7e1ee75d40"
  },
  {
    "url": "assets/js/16.9a5c5703.js",
    "revision": "e9e1d53936977fd63303f81762d9a9f8"
  },
  {
    "url": "assets/js/17.94c57e8b.js",
    "revision": "982f66f502e84f6d2615121afee61094"
  },
  {
    "url": "assets/js/18.7148cdab.js",
    "revision": "7352c63e04f4e31f9aef02b5d44b5db2"
  },
  {
    "url": "assets/js/19.08cc14f5.js",
    "revision": "417108aa6034540e351b9bf0c70dfa6a"
  },
  {
    "url": "assets/js/2.c9dca91e.js",
    "revision": "bbdc1f79d0926f1aed4241b994ce67ea"
  },
  {
    "url": "assets/js/20.5cc7ddae.js",
    "revision": "ef2dd9783a5389044879169b46a4073d"
  },
  {
    "url": "assets/js/21.3fcb7e00.js",
    "revision": "2ad380468a89094a94ac06a20eed6718"
  },
  {
    "url": "assets/js/22.93fd91ee.js",
    "revision": "12305e730affd95ebc2e6ba57d09a2dd"
  },
  {
    "url": "assets/js/23.1f5e7952.js",
    "revision": "94df42b704c00f2a57f3ec1e436dc67e"
  },
  {
    "url": "assets/js/24.3e57d8b4.js",
    "revision": "247782c5dd11b515452193adca2e0ccc"
  },
  {
    "url": "assets/js/25.7c42b1e2.js",
    "revision": "e92ce367664ea1efb2c09ab598a5e538"
  },
  {
    "url": "assets/js/26.2981274e.js",
    "revision": "899ff61e686ec3efcb02e866511c4e5c"
  },
  {
    "url": "assets/js/27.c826272d.js",
    "revision": "a4be4773e5a86dee73adcc5793a734f5"
  },
  {
    "url": "assets/js/28.8cc9dfdc.js",
    "revision": "cd858207928bb44cb26708d7d1fac858"
  },
  {
    "url": "assets/js/29.8d9eee21.js",
    "revision": "c08dd3df78aa419dab4c06b50beaf53d"
  },
  {
    "url": "assets/js/3.a5f58823.js",
    "revision": "15a053c744627fa4e362a7bca8a677e8"
  },
  {
    "url": "assets/js/30.0818b1a7.js",
    "revision": "8619b094d7bce1d8e1cd717e62b88748"
  },
  {
    "url": "assets/js/31.cdd40bbd.js",
    "revision": "92af675d72659d404d5d5be656dbd72f"
  },
  {
    "url": "assets/js/32.c6a8be7e.js",
    "revision": "72e8bc715fe6747be43b28ac451de9a7"
  },
  {
    "url": "assets/js/33.3bd16c44.js",
    "revision": "dee923afa0e3b55ff2c3787b8c161b38"
  },
  {
    "url": "assets/js/34.81013a14.js",
    "revision": "3ef69df46ccfa867242d51343d0000fa"
  },
  {
    "url": "assets/js/35.dc96b99c.js",
    "revision": "f2aafc3a93f3a359871a225515189b1e"
  },
  {
    "url": "assets/js/36.f9f24e34.js",
    "revision": "d31306cdeb7675025f7f98ba8abe4558"
  },
  {
    "url": "assets/js/37.f20b26aa.js",
    "revision": "18dcb8fd93af8e1c2f3a89719f427cc4"
  },
  {
    "url": "assets/js/38.5d5c4fd3.js",
    "revision": "4da5cc318553a9a0ab421bd7a189e61e"
  },
  {
    "url": "assets/js/39.c3a8daeb.js",
    "revision": "173b5d3334b30b63554526d7e23d0d0c"
  },
  {
    "url": "assets/js/4.2f21fb24.js",
    "revision": "22ce722aa2ec502b84cec5179b11b50e"
  },
  {
    "url": "assets/js/40.35370ff0.js",
    "revision": "77a09b9cafda86bead23f28b3de3af69"
  },
  {
    "url": "assets/js/41.aebb5321.js",
    "revision": "c391ad9b11d4613c138c75088c002e7a"
  },
  {
    "url": "assets/js/42.589a85e6.js",
    "revision": "82ef4bdcff482b009420e76f7d6c66cc"
  },
  {
    "url": "assets/js/43.1b8d48ee.js",
    "revision": "4ae8daa4fabf2f549e46c8cc20851e33"
  },
  {
    "url": "assets/js/44.a5d33f7f.js",
    "revision": "f03cd515c2e02104f2c11ab71f5375ff"
  },
  {
    "url": "assets/js/45.394431d9.js",
    "revision": "155359fee118cbc55d19d6f710e8bdf6"
  },
  {
    "url": "assets/js/46.66e11898.js",
    "revision": "c869d561876b603f6a7af1ce0fb221ee"
  },
  {
    "url": "assets/js/47.b69e13d6.js",
    "revision": "19328f82265c37ea3d231057f0892d7b"
  },
  {
    "url": "assets/js/48.b5e096dd.js",
    "revision": "a830d781b9cb64bb515b6253da023526"
  },
  {
    "url": "assets/js/49.b76cafbb.js",
    "revision": "ac2fa0e3cf169462dd834b094b0463ac"
  },
  {
    "url": "assets/js/5.db8db667.js",
    "revision": "b93cac372d355786a215d393ca0a1e24"
  },
  {
    "url": "assets/js/50.fbeda38e.js",
    "revision": "0e3f06b04b9c8b644aa80a44f840a8ee"
  },
  {
    "url": "assets/js/51.23aefe91.js",
    "revision": "cf8b5e8ca2b887fa96300803a2b9c1f2"
  },
  {
    "url": "assets/js/52.2ab6cadd.js",
    "revision": "3e9becc90459aa0c24f5d8f4f4d80c20"
  },
  {
    "url": "assets/js/53.76ce1929.js",
    "revision": "1e41e7f5dda15743f8a66cb031e02007"
  },
  {
    "url": "assets/js/54.7c7528d9.js",
    "revision": "3bc88d453741b154429f128fc0c7a466"
  },
  {
    "url": "assets/js/55.b4079e33.js",
    "revision": "01de286dc9c210b2d01a548787e4ce03"
  },
  {
    "url": "assets/js/56.eb0409a4.js",
    "revision": "242968bc628a4b134c46ca33b5b702ee"
  },
  {
    "url": "assets/js/57.1b69693b.js",
    "revision": "376f69cb4f253c5e24fe8602c7984b97"
  },
  {
    "url": "assets/js/58.3157a89d.js",
    "revision": "8bafdc3949e08d965da72b95a251a252"
  },
  {
    "url": "assets/js/59.978687a0.js",
    "revision": "25555f195f2f1f078a8fa60e3ed8a0de"
  },
  {
    "url": "assets/js/6.f8c9bd71.js",
    "revision": "4ad2814a22535edd53ea968580447238"
  },
  {
    "url": "assets/js/60.8bf5e6e7.js",
    "revision": "2481b4ab8f85922841d3e2a5b907655e"
  },
  {
    "url": "assets/js/61.91f93d9a.js",
    "revision": "8b63f7f36cbe7a0eba3bb14be02aadb7"
  },
  {
    "url": "assets/js/62.569b2189.js",
    "revision": "a8aea6b1868614835538352c660e0ff0"
  },
  {
    "url": "assets/js/63.561b6c4f.js",
    "revision": "d86d19a99621774b7a115cbb9c0e0386"
  },
  {
    "url": "assets/js/64.85d9c0e7.js",
    "revision": "df6ad1395978402fbfbb0c3cff9d7c9f"
  },
  {
    "url": "assets/js/65.de7a0755.js",
    "revision": "fb5696330ca670a8a6e913810c738641"
  },
  {
    "url": "assets/js/66.938e800c.js",
    "revision": "6fb8d95fe652c9a6b6cc9cd28170e74e"
  },
  {
    "url": "assets/js/67.8ea8ab67.js",
    "revision": "ae4d13b73ae167a509c295c740da5d42"
  },
  {
    "url": "assets/js/68.b9374a13.js",
    "revision": "298f7ea6d46f32015812aaaa6deaa11f"
  },
  {
    "url": "assets/js/69.9ca2f656.js",
    "revision": "6a7c9aea5b9fa411ece6c9ea489bed6b"
  },
  {
    "url": "assets/js/7.f221412e.js",
    "revision": "d1724e938249419b4cd7bdc1e9609192"
  },
  {
    "url": "assets/js/70.afbb5ee0.js",
    "revision": "0bf485faf3eb2ce334e45528b56353a7"
  },
  {
    "url": "assets/js/71.181e1f6c.js",
    "revision": "a65af685ec46520310eff679f730aca3"
  },
  {
    "url": "assets/js/72.c496c7ea.js",
    "revision": "0ebe394ba6f622d10e28ee46c6baab10"
  },
  {
    "url": "assets/js/73.0effd285.js",
    "revision": "3304111405f4ef94c6e603e88fe263ec"
  },
  {
    "url": "assets/js/74.f2f8f671.js",
    "revision": "30abfea9fcf0d932512b5ef8d662208f"
  },
  {
    "url": "assets/js/8.7f5f583e.js",
    "revision": "01727bb650191268b08dab866fecea3b"
  },
  {
    "url": "assets/js/9.2be3aecf.js",
    "revision": "fbc6935ec06340498754bf5ba2c84eb7"
  },
  {
    "url": "assets/js/app.02b05872.js",
    "revision": "99bf5d48b7aba1d48cc6aa54faa34f52"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "326fabcaf050e2b9fcdbb9aea1af408a"
  },
  {
    "url": "category/index.html",
    "revision": "56c67f0c225245949eb9820261611657"
  },
  {
    "url": "category/learn/index.html",
    "revision": "83ed31e72538097639e5a2a7737013b0"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "13aabf9a4cb443353ab842bcf29f68bf"
  },
  {
    "url": "category/project/index.html",
    "revision": "d941d3096d30c35602f395385e551171"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "50015ce1c8c1c697bd3c3c2c4374fdd2"
  },
  {
    "url": "category/summary/index.html",
    "revision": "fb48a779040855da3cfe20cd751a024b"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "717ade0887d9a0bc83a52c94df47c272"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "392381c431905d24def526c12d76e861"
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
    "revision": "72336539bbd4d53dbd355bd6f75690ab"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "b56137b40770398ee2cbce206e391b46"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "5e6285f8d26ffcfaf107dce4d7b69d87"
  },
  {
    "url": "lib/index.html",
    "revision": "1abbeb42031ecc6e9dc24cb65de2454f"
  },
  {
    "url": "lib/m-less.html",
    "revision": "16c117d24e5deb2009e698b30267914f"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "ec7de779c83cc09138545b3b984b835b"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "788371113a1e5771819c0591b4e5a5b2"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "2479cf822125d4c99e2394c5ef341261"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "ea74ab58386a0ff57174d7c7045f1a41"
  },
  {
    "url": "lib/usercss.html",
    "revision": "bf11aa487dbdf5afe48a57800c3493a2"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "da36b98c25b05b0c14109cd8d00aa4e8"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "b9a654b66d5e397340f094611300b1da"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "ef07448e31b107dd34b6a1ad6c86a9f0"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "1f7f349fe7440177ce9ce589c2af5a48"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "509528f8a2cde0215e59fad29637a32a"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "bd1d6887ab5708e83a21c229cace4d13"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "9a63295af70a7d2168b433af1d075b1d"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "a66ca824f18d4845440ac5cce9c65abe"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "c84253673ca85cc0ee62a47d4de1a1f8"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "9a5e2d9809943a147e5214e3a40f60a3"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "dd9f6dc2fe5bfec3fe7730752a90cc49"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "816da9335112de9f4931c6766143a2c8"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "d15799a38e190bd76edaafc9c937af9e"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "552456b3ead733b8500bd111ff0a6a4f"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "fc97d165a3a2919ee0959f25b88567d3"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "69e378d56ba011d0b28eeb28a92deeb6"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "09e0d148c7989a463fa5667bac0b2424"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "4150b4d48e2a5a66cb7569ee54a849f3"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "b7c2eab7dadbb49e7db168815e1b3e9e"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "25f337785ff486243a9034cc5291813a"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "c75679b2176870d2d2efcfcb1b7f9965"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "eb2ee9e4982e288c7b61f0c0045ff915"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "5044d7522a8964cfbbeea3168d2dc804"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "9a7d468f40da0dda29c672339b9b3bd1"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "52dd47aa589c4b59886dbccf8ea8bf0c"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "c184803836cff0b83dc75692af57b561"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "c2430499d9ddd07fbf4588fc734f0b62"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "48050c8550e9d5cabd4dbbc3e22a5110"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "397e3fa0a5febd72ad77941ccd7b566c"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "fc6e941e5831ff7ff6f259217306d553"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "db1b4fddb65d1df0fcce62d4cbb86baa"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "7c512882530c55897afec0e5c1c790a0"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "15eafed1b9e0047e23cc9ca334ddde6c"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "11465b491c39989f7204beede7721448"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "20d5653440ac4555905e23f1c60b7636"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "8aa426fc133ec4016f09fe294bd5dd4a"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "9aca9198e334f3a744c5532955c918d8"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "3f46d61adaa3d60174307aee48da7717"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "fbf533c632755c50885d15b7f726a696"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "180d4a426fd2b0421cf7b02d254bba00"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "2d385a692b58c856d94f49d08661587d"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "0ffc3983432b3edf37c96ce018505195"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "7dba5c5dcc85957f74b1f51f1b890bd7"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "561ddd75e7bd4f26676ecd6515e5e212"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "d679a35374136b410835925ada413630"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "d8c71a0f1c96488e172d868899f3699c"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "8478f4aaf321a570f0eba79ba3d1210b"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "efb74d57ed3c3f3cd0b1615904676b59"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "5d0fdf55a5c5ba40621a85d67661e1a4"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "194f409f66256c38d49352c7627bf38f"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "0449721ca3cb4a9f0e7031e8ea3a380a"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "b776e8c97b3d8a4ef4be661c0f1fd389"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "c9aa672cb28fcf4b0cc407a66fc9d953"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "90f9bacef08fafae5ddd46c556674052"
  },
  {
    "url": "posts/index.html",
    "revision": "09d3ff7a668e0d4d247ff3ea1d6eafbc"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "f9ca0efcc3b7b0faeaa1c7dcc130bbc9"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "f11b3d6e1af7f00deff4765aaae28be5"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "4c4ab49699f0475b39a99d90246ffa46"
  },
  {
    "url": "tag/android/index.html",
    "revision": "6400391e6464c03cc99a47ed59447a10"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "7dda9c6d89608ea8090ca073ececc719"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "2d80baf96e80ba09a02534de1dac6cbf"
  },
  {
    "url": "tag/css/index.html",
    "revision": "33266b0a5248c1426d5b1faa42b4039e"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "e81f4e74bfc79d19d2082f71f0bbb5f8"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "f3bfbf70e2cc307a9f407f9e4ac9b684"
  },
  {
    "url": "tag/env/index.html",
    "revision": "02d84565243db870df91c4ebdcb3964c"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "6a212456f4d98586ac603940e8a31186"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1cf421b8ca36ab07663d79fcff0a483f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "cbe2cee17e229454814766b1ef2d3aa4"
  },
  {
    "url": "tag/index.html",
    "revision": "c356fbbdc10619d4d01da4c46b3da1d9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "64eeacfee1b93e91adf933478987fc55"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9e90d0b9c8eda1abfe9e95b22f6c61b7"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "da77264afdc675d323ca3946a2b167c7"
  },
  {
    "url": "tag/json/index.html",
    "revision": "cd3f69a25f71ab08816a7b967ce57b38"
  },
  {
    "url": "tag/less/index.html",
    "revision": "09fcedfb89dc559c1797a043b8b798f7"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "295fb7a26f03b586891e2506cbaea1e5"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "c39690d889a842832386b9369d5db74c"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "e3e7f2eb85cde803d8ae682e0ceb67f0"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "730138dedf70cb78b227b6591af7740b"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "25216c3f19be8b80ed7205050cfe0b40"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "364db701977d3ec5dd05b6d0bf721f23"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "b15d87efb332fe31532427f6586abbc0"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "6927ecdf14c518381d48c0166ce107ff"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "f010a2c8a21e7b2a9eac586fd3b73745"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "ff5bb85dac4770b852489e78dfdd42bd"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "7ecb9d4db237fc699f0b2f2e61825b90"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "f5d8b7156cc8c2131a9dba1f0dfb1bdb"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "a7b02b2e9da7fd1257692b7493b83791"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "d175362f51c0051080d5c84c471b43c4"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "33b22ff2af4e290201e9e1f3d1381cd1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "402c6d3414b4b579d0c0b7e2ef0ba824"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "afad9b1c83de7040e5c3869bab6fa4d2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "34f9a7473b380300e0e30f456c6a5557"
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
