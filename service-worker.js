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
    "revision": "520a53236719b5489086c851ebe05a01"
  },
  {
    "url": "about/index.html",
    "revision": "f37179e586854ba2ca7b588339a41729"
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
    "url": "assets/js/10.517d1558.js",
    "revision": "57d649ca547153223c5e0510f10edada"
  },
  {
    "url": "assets/js/11.19a69ac8.js",
    "revision": "5912722687d77a5e30ab150fbce443cc"
  },
  {
    "url": "assets/js/12.bb59d53d.js",
    "revision": "e377aa44ab95642371152f52e6744141"
  },
  {
    "url": "assets/js/13.6feebebb.js",
    "revision": "0e5523799a195789a60b0dba5e84f3ed"
  },
  {
    "url": "assets/js/14.8c2712da.js",
    "revision": "b0b580ded5f274e595b929c4c973f655"
  },
  {
    "url": "assets/js/15.95ea6a5e.js",
    "revision": "1661773216a92c831fbf2248e2c2f614"
  },
  {
    "url": "assets/js/16.49f8118e.js",
    "revision": "fdb7706a741c760c7274deac430d158b"
  },
  {
    "url": "assets/js/17.3a902c14.js",
    "revision": "c96947778a76b080f5300e3be52841c6"
  },
  {
    "url": "assets/js/18.c226f1f3.js",
    "revision": "3088c82933673c63ad28d1da43ab5179"
  },
  {
    "url": "assets/js/19.1a04de94.js",
    "revision": "935355ddafd06959172ebe1b49e6c4bc"
  },
  {
    "url": "assets/js/2.71857ada.js",
    "revision": "be75e6e7b956105f1170b2a8b7756da0"
  },
  {
    "url": "assets/js/20.0ad85d9d.js",
    "revision": "90fb75e96648289a88b12ee471cfb27f"
  },
  {
    "url": "assets/js/21.074afa83.js",
    "revision": "7bdc35e0b4aa66b7e1a642c61ea08da9"
  },
  {
    "url": "assets/js/22.b55c8446.js",
    "revision": "73e9f897f6b1cd0d7b8851fcf5075739"
  },
  {
    "url": "assets/js/23.3e5cc4d5.js",
    "revision": "e96e8819065734bcf6abfa6957d49dd6"
  },
  {
    "url": "assets/js/24.173d562a.js",
    "revision": "ef6eb23c7d05b798e413a25334baa7d8"
  },
  {
    "url": "assets/js/25.3bc94a83.js",
    "revision": "4dec0812adf62a9afb08c64d04819b35"
  },
  {
    "url": "assets/js/26.2b7e50f7.js",
    "revision": "d7edb66d4c851533c20642485e183204"
  },
  {
    "url": "assets/js/27.29580b3d.js",
    "revision": "23895d58d294c47cb0ad90093c6b572d"
  },
  {
    "url": "assets/js/28.f902b63e.js",
    "revision": "2857df6ccb0585866d1f4ca320334f22"
  },
  {
    "url": "assets/js/29.37ef8228.js",
    "revision": "f3172fd372d2e6a009df0cc1f95a8104"
  },
  {
    "url": "assets/js/3.91135a50.js",
    "revision": "e5e3bd53ec6d7535b8b44a6f4d2d3de7"
  },
  {
    "url": "assets/js/30.f3b95ce9.js",
    "revision": "954cd63dd0af4dfe57c7d257f5f1af9e"
  },
  {
    "url": "assets/js/31.371eecf4.js",
    "revision": "ce0472b92841eee529b910f168d7508b"
  },
  {
    "url": "assets/js/32.58e0163f.js",
    "revision": "3e281fbe576fe4308a2fdccd617f2e5e"
  },
  {
    "url": "assets/js/33.c050fafb.js",
    "revision": "83cb879a199143ede74da5959760e479"
  },
  {
    "url": "assets/js/34.2318a1b8.js",
    "revision": "cd72fcd6735262830959b0ab3475dfd4"
  },
  {
    "url": "assets/js/35.e1234ccf.js",
    "revision": "351007559e9578f17ad3e2c6a5080f83"
  },
  {
    "url": "assets/js/36.9d5c8590.js",
    "revision": "258c7451248ba2edf36df8ae189012a4"
  },
  {
    "url": "assets/js/37.7fb029a6.js",
    "revision": "045d37bf9b51b74d187f50a96a8b6f6d"
  },
  {
    "url": "assets/js/38.e155a184.js",
    "revision": "17e74f6ad54365cd18c29fbf9849a843"
  },
  {
    "url": "assets/js/39.c0d4ccad.js",
    "revision": "e0bd3d88c5cb1edc1d92ad89c36404de"
  },
  {
    "url": "assets/js/4.4f848410.js",
    "revision": "2a64d3661455fdcf4ee79bf88a6eace8"
  },
  {
    "url": "assets/js/40.5661b21c.js",
    "revision": "510a24a7121a2eff7078c074c27b427d"
  },
  {
    "url": "assets/js/41.5f1e0b37.js",
    "revision": "9cece8bc284de1f04b39818b117cfb7e"
  },
  {
    "url": "assets/js/42.51ae2386.js",
    "revision": "b52bb400b8ee2e96667fff94d909e3b0"
  },
  {
    "url": "assets/js/43.3ed98ce9.js",
    "revision": "79be24fab9e09bb7966652d5c29ed519"
  },
  {
    "url": "assets/js/44.53e01294.js",
    "revision": "6ca1054f2a91d53101475b95be984570"
  },
  {
    "url": "assets/js/45.eb9a489b.js",
    "revision": "8cfc4ea02f7b7e843d655609fb39ff50"
  },
  {
    "url": "assets/js/46.113ef3ae.js",
    "revision": "ba818f1c3f4ef700857d3ad8c18a0a99"
  },
  {
    "url": "assets/js/47.f59021c7.js",
    "revision": "3bc56338dc92d81cd8f9ba267d99d7de"
  },
  {
    "url": "assets/js/48.8b246915.js",
    "revision": "7c7b5051683929b0e34e0e706bf8e3b8"
  },
  {
    "url": "assets/js/49.e5ca9f3f.js",
    "revision": "2abed1c0707390e16c69af34f1a53ed2"
  },
  {
    "url": "assets/js/5.afeb9ab3.js",
    "revision": "ae570a960a9ac8c19d89773792cd5e12"
  },
  {
    "url": "assets/js/50.558ceb02.js",
    "revision": "0ff6074904bbb0d54dabcdf65a055119"
  },
  {
    "url": "assets/js/51.4fceb409.js",
    "revision": "41960d731169e9753185c1d28a8f121c"
  },
  {
    "url": "assets/js/52.a15de25b.js",
    "revision": "9ebdeecac7df22116cabf6a99d7081b6"
  },
  {
    "url": "assets/js/53.1b702a62.js",
    "revision": "f6ead308b7e3d0a99ab1788a4cb58b64"
  },
  {
    "url": "assets/js/54.2bef918f.js",
    "revision": "0b61475b6e1b65ddfe3d155bbd356bf3"
  },
  {
    "url": "assets/js/55.7d1f20e0.js",
    "revision": "b78899deb316edebb319b645f5b05587"
  },
  {
    "url": "assets/js/56.4b4eb904.js",
    "revision": "64f2bf1a2da274cb65c60b636a482af6"
  },
  {
    "url": "assets/js/57.6853f42e.js",
    "revision": "da14cc668c7f74dbda3bb3b3706f9ee7"
  },
  {
    "url": "assets/js/58.c85f46d1.js",
    "revision": "d8fd078c403b0c38472c9d6e22c784ae"
  },
  {
    "url": "assets/js/59.4ff43ebd.js",
    "revision": "cd1c6b57efbc16094a41dedb2203d444"
  },
  {
    "url": "assets/js/6.70641825.js",
    "revision": "b4d09868b1a1a71b580cdd5bcf20de06"
  },
  {
    "url": "assets/js/60.e71f7028.js",
    "revision": "9c9a3c097ef9d5f01f4f125aa18aeb40"
  },
  {
    "url": "assets/js/61.63444b5f.js",
    "revision": "9ea8faf306ce2616e51f56c8859d248d"
  },
  {
    "url": "assets/js/62.5041d654.js",
    "revision": "f96b6819e2f9a2a1e56ac92884ee490f"
  },
  {
    "url": "assets/js/63.f45028be.js",
    "revision": "9426757c49107bba5ef5df606e66b721"
  },
  {
    "url": "assets/js/64.b3241d29.js",
    "revision": "baa333e222917ad82c650c444e013014"
  },
  {
    "url": "assets/js/65.c8ad1534.js",
    "revision": "64c75d2d963c6a55ee5d75733dda7ab4"
  },
  {
    "url": "assets/js/66.ecd4c5bd.js",
    "revision": "a7a1554e9231946edd2001462ada3bd6"
  },
  {
    "url": "assets/js/67.4e9ccc24.js",
    "revision": "4c25795d128f7ff277cd270f5a0f55e8"
  },
  {
    "url": "assets/js/68.13605dc8.js",
    "revision": "7418b334a81e72fc2b474f5e26bf8169"
  },
  {
    "url": "assets/js/69.4a34bab3.js",
    "revision": "db22adbd07178f1cbf927eec55e45b89"
  },
  {
    "url": "assets/js/7.76887f7d.js",
    "revision": "b9bbb8a5a3e3b65ebc9cbc5383d2ece7"
  },
  {
    "url": "assets/js/70.7e4a000e.js",
    "revision": "f620c60fcc261f07f2a08cbcf4b1ea89"
  },
  {
    "url": "assets/js/71.21ef0973.js",
    "revision": "f158591eab4dafd2dc9f1b9767bccb88"
  },
  {
    "url": "assets/js/72.8219507c.js",
    "revision": "5ada742bce92f4dc6bf17c7996584b03"
  },
  {
    "url": "assets/js/73.0740528b.js",
    "revision": "9ef993db6c90d2d27e175dc983f51377"
  },
  {
    "url": "assets/js/74.6815b89b.js",
    "revision": "502a05f2cf6fd4f1334ea4c7b805cfdc"
  },
  {
    "url": "assets/js/75.da12b346.js",
    "revision": "fc492cccb4245135969c6cd334f12800"
  },
  {
    "url": "assets/js/8.763215ad.js",
    "revision": "8cd24fe24b18fb58e54260925dd8dd15"
  },
  {
    "url": "assets/js/9.c352a8f5.js",
    "revision": "0b97845e842e28f9cd48a2d6ef8705b6"
  },
  {
    "url": "assets/js/app.6217b6f6.js",
    "revision": "ab574a29b5eb5ad112869d684f762ecf"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "b2c7a7e40a279c461c8d43839e27a041"
  },
  {
    "url": "category/index.html",
    "revision": "0ac22c0723db4e4f5815618c841fbb26"
  },
  {
    "url": "category/learn/index.html",
    "revision": "4b0120b6e2fe2a35f9b3cfa82b4c79e5"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "e8e59c88dc2e126e26ece5919a57294c"
  },
  {
    "url": "category/project/index.html",
    "revision": "9c27ec3dea4f9eef9750a971ff10db22"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "94b1aab1e0c7271aea7992035d50aa76"
  },
  {
    "url": "category/summary/index.html",
    "revision": "48e63f36ac7a5d196209b4e884c6f7ba"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "fdfe40a58f7a8fc6253c648e88554de0"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "bb629671bdb98f3be3a195525981dabb"
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
    "url": "img/android12_1.png",
    "revision": "0b8b86f2da7c57552f194a5080f69f72"
  },
  {
    "url": "img/android12_10.png",
    "revision": "12358293ac45e4a99728e3b93310bfbb"
  },
  {
    "url": "img/android12_11.png",
    "revision": "9279a44e1af8c010403e17551f82ec2a"
  },
  {
    "url": "img/android12_12.png",
    "revision": "741543023ebf60c4a157642fccc8da78"
  },
  {
    "url": "img/android12_13.png",
    "revision": "970c664845b49179a42fa84974186b5a"
  },
  {
    "url": "img/android12_14.png",
    "revision": "981563648064ff13974e6abcad35abe5"
  },
  {
    "url": "img/android12_15.png",
    "revision": "49621f7c1d832f7f905c94b2d7c4e7f7"
  },
  {
    "url": "img/android12_16.png",
    "revision": "9763ca2506b327f76408c7d76d20445f"
  },
  {
    "url": "img/android12_17.png",
    "revision": "f76f54c7684e26f15f67c18960a6a5d1"
  },
  {
    "url": "img/android12_19.png",
    "revision": "71151ee2f97b489909e5c830d67f66c7"
  },
  {
    "url": "img/android12_2.png",
    "revision": "a8ca10a8552dcfdc80bba5ee7d006ade"
  },
  {
    "url": "img/android12_3.png",
    "revision": "40b1a24737b5ebe885bd95d49f7117e5"
  },
  {
    "url": "img/android12_4.png",
    "revision": "5b34b615edaf3213ce2e5ebb3ecca344"
  },
  {
    "url": "img/android12_5.png",
    "revision": "7592a0675f14ae6430604bacaf61caf7"
  },
  {
    "url": "img/android12_6.png",
    "revision": "6b37a17573b8a6612516cd121a68974e"
  },
  {
    "url": "img/android12_9.png",
    "revision": "7044451cc66914c0948ff13246ba3d6e"
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
    "revision": "4a58ec6a2d63305234acf66c22cbb9c5"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "2716ef2e97b3a70212e7b1275de9fa1f"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "9521623e51aedec0dc80e8539bb53028"
  },
  {
    "url": "lib/index.html",
    "revision": "5db872ea3701e5f4bab9a32fc888ddc9"
  },
  {
    "url": "lib/m-less.html",
    "revision": "254bbdd2e5e7d3bf3cb3332fe54bf73e"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "24748e346787d9c099c14239bbb5ed59"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "23d26ef54403387284165f9e88092b78"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "04ab7833ed6ad2b23548b294164e5404"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "31f894c0a361e109c1376d395671d18e"
  },
  {
    "url": "lib/usercss.html",
    "revision": "1c4156d4779a1e39482349ed04b6c61b"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "0a4b4019da146630863c59c84c2a7919"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "9fe2923274de216e6f690e4e264d8b19"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "f366e36ec4a58cb103c052bfcbfd9d86"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "5247dc2c4eff341f5fe08d8421c79051"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "7212bab822ba879e7ec8111b674f95ca"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "c51b93d13a46b7be297e29c28ae47514"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "eefb366d23ccefc0737e3bcbb83b9b32"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "79d5febbfd6fe5bdffe58c2cf0116478"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "23c773c6e1144a0416a173410241f34c"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "cd9ce511160122d35ef5a81f6002f291"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "74f8eee55a6301d2634e6a0e0a61e610"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "daa606593e1992e9f7c7d8813eb21433"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "377e6f91afbd18a3524633d9ba375823"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "bf879b5bec97c07702187089b655e9dc"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "2ae3ef72744293e3640c98daa5066623"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "78cbccf68affffd312aa6cda87d4e2c0"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "ca9b5e52138b4c681aff255f58d3902c"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "1c54c464882bb04ab8b100ef808fb103"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "fab65a7f33b3945c4334109e2afa663d"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "40b57525f400862b98e65dcdc1ded404"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "024f99e90f56002f777f684622222b65"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "675240996183ca464d093b6a3a77fe3b"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "69a2fddcb83e4e688ef31f0753024f87"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "9947c7771c5fe36b1fdd88eff9bf29c6"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "d71b53a734a06fbd1ee55af89ee12820"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "750feacbb85f7e282e22bae9bce2d8d1"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "adbbf0c4dcfbf78684319070342209f9"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "906b0518cb36c1838d0b418092ff5b4e"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "d593c74f694d0e1cb925a28eb55fee00"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "ba3a12c15d9bc768537c7c4a38763dd7"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "442979533bafb47f71c02f10fcf08b6d"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "18a5c443c93ce18ab82e2c6447010dc4"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "4fd9fc8d300340a00aca0c69b56bc925"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "895c044affbbc365ae958754ccf8183f"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "5c9e7e9849de2f71785fe276f1b3a79c"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "488a7976702949c6f64ee8d49d91b266"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "f4fce58489d5b1a661113475acf7def4"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e4e1b302853e8e366ed1bb34aa6a2979"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "e8bc21d36206b2dcb9cbff655a2d2eeb"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "54c43ba7fba1960a992d1e13f54ec3cd"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "037ec775f141e1a972c8b879a8e823ba"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "41da6f1856efdc3c20c2fbb7c9c6e245"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "99dcca057275a9145c9234625fd3a913"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "7a7ec4ae9fd58679f7a2834fbec0f771"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "75c163154e2d0e0b864cdf653dd23f05"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "81dc9c94ff4b8f43cfdafb8d915de0d7"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "af62cce707a98d61a3ec6e6f3937f491"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "f8a20ddf1222cc02a71a5c48a6af5646"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "714ac5c48a2ad06ab8ed8926db890500"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "a751239e0454167a8e5b1a09c18674d6"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "b9b58f9af5aed6e3fbce6b6517e0456b"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "3771e92d6676e49d1885495430a73951"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "2ab9fd9491ff0f02d194b22436b070f3"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "346223bf8c3807dd91aad75c1c2dd3f9"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "4358c9644d7697bdbe29ed10a891f492"
  },
  {
    "url": "posts/index.html",
    "revision": "7908a79dc59e3097aed7e5b01db832bc"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "b0a183ae59ee670c435b9117eaa39310"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "bcae8f48ab76d6298321d80eff562b93"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "1093363b5aef4345a0dd5c9ca36dd65d"
  },
  {
    "url": "tag/android/index.html",
    "revision": "44a79499e6867ed2da2b979e2871dad9"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "ab7e58b0d2e00f61aeca221b65cf5219"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "c24df8d160e00e17fe13e6315b72c87f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "35cb979e0cd7a20230f12e63d08372f9"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "b5e882340e06df24f27a2d1b5d84c3cc"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "bd0e5ddc548b7412b3fed5d1c05010c7"
  },
  {
    "url": "tag/env/index.html",
    "revision": "a36af627568f9dd4df6ddd01f33fc1ce"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "6d2975fe2b8e6b00c4502bc9195ab84b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a75aae7f6776f587f87cf86cae9c9864"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7d73e532bce5e4a3ac8a081a8d8b5809"
  },
  {
    "url": "tag/index.html",
    "revision": "23a2995f3789d161c94a213a5db73c4a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "07cbd802c3e089d21da67e8755dc54e0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3f4a591f6420fea3e5cc1196f5a3251b"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3d30dfaa9db88fe72f705cb915fb05bd"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c1ecebe251f753215356da144992be8b"
  },
  {
    "url": "tag/less/index.html",
    "revision": "5505fb22b669b0f74ca1ad131d13cd44"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "36f23ab31ee5e3eb2decd12973504311"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "0b79f0627f5df565746ff44daba7f9ef"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "e8e4efaa69cc079b43f71825e4902f6f"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "dfd8fa9be27d9fad952365811c7af625"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "28769feae4f9eedfd937a75453445955"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "9845424fba67fb9ca9d2795990207cd2"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "d494e705e281534073d62041c146c8a8"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "29b6b57c16d9474d9539aa62d9ac98a9"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "bf2e28082ca05af93db1c9f821a4b28e"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "4a60ee07d0641edb9fe411f7a8ca6b52"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "dfb69e6f3385c95a4391aa90fd069c1a"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cbf9350d5f6497861237df54cad1ae31"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "0c29ae30b5a720c23bb43e9234dbfa92"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "0e10720a306e0c27724b81caa6bc6b1b"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "521c8b161dfd2f80c1c246420891561b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6cb185128c0a7ae0273ba1bc38e06f7d"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "3fd61b70b721e9e0a9a0ffb8597b8da4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8bf70fbc9d3cde332f9fed664bc9f3be"
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
