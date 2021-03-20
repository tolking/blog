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
    "revision": "63d8751d90d9283f09f06fdc863e69ed"
  },
  {
    "url": "about/index.html",
    "revision": "82af5f57a314bfd3be844ef43faba688"
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
    "url": "assets/js/10.9f7117f0.js",
    "revision": "2c853b78c13c78c0cf354917ea0d0bdb"
  },
  {
    "url": "assets/js/11.0acbb21c.js",
    "revision": "20fb9025eb2e77d42807148371596e6b"
  },
  {
    "url": "assets/js/12.ba9e2d81.js",
    "revision": "b5eadc7d5e4c0fd84ec73fe8755c05b4"
  },
  {
    "url": "assets/js/13.d20a81ba.js",
    "revision": "d96629c6cc28dd369a9375c4ce510385"
  },
  {
    "url": "assets/js/14.1c154109.js",
    "revision": "3ba074a8b10131df7cd607bd2c75fe21"
  },
  {
    "url": "assets/js/15.051f5613.js",
    "revision": "607bfb79da0b0355bebb3a7e1ee75d40"
  },
  {
    "url": "assets/js/16.172b778d.js",
    "revision": "744deaa7d5a7049c67445f39f5bcbc37"
  },
  {
    "url": "assets/js/17.656846c0.js",
    "revision": "06f04a27410f357906e5e83c6493e34e"
  },
  {
    "url": "assets/js/18.fdc3aef8.js",
    "revision": "1202114858d165f9b0b2559359eaaffb"
  },
  {
    "url": "assets/js/19.deb0a793.js",
    "revision": "679df43e621c2b5356f7af0dfbabbf6e"
  },
  {
    "url": "assets/js/2.c9dca91e.js",
    "revision": "bbdc1f79d0926f1aed4241b994ce67ea"
  },
  {
    "url": "assets/js/20.3b516569.js",
    "revision": "c6e4f9a97e0ca5644665584643d27657"
  },
  {
    "url": "assets/js/21.ce9c50b4.js",
    "revision": "ff95d827508d0529984cf9f0dabc4c54"
  },
  {
    "url": "assets/js/22.bda43337.js",
    "revision": "67c2b6b6e6d99b26ee337c6b4a525d75"
  },
  {
    "url": "assets/js/23.96a3f301.js",
    "revision": "85a972e5ddf036f839e6f3e22f1807de"
  },
  {
    "url": "assets/js/24.8b0a7fcf.js",
    "revision": "555dbe4e2812de79d3a857c520ce5066"
  },
  {
    "url": "assets/js/25.65d45401.js",
    "revision": "fc0d7d27290e14a84a40f051c53dc4c6"
  },
  {
    "url": "assets/js/26.d258d222.js",
    "revision": "9793c40b2da33afee891a36899809369"
  },
  {
    "url": "assets/js/27.a27d778c.js",
    "revision": "c07ffac0c3ec6e3cea7b26f185ad0bb9"
  },
  {
    "url": "assets/js/28.92c1d1ed.js",
    "revision": "722fa6c0f5bd57ddaa3986ec9296ac26"
  },
  {
    "url": "assets/js/29.9bf95f27.js",
    "revision": "ab86f184a9b986f10b2cf910cba263f0"
  },
  {
    "url": "assets/js/3.55b63a52.js",
    "revision": "9d418aaa670b0df5a3cb020d393a3bfb"
  },
  {
    "url": "assets/js/30.968d255f.js",
    "revision": "1ef603734fbc88d1a15fcbac88be7537"
  },
  {
    "url": "assets/js/31.534fc4af.js",
    "revision": "eb092e04b6d7e9e06f9303dce5042fdc"
  },
  {
    "url": "assets/js/32.911d4001.js",
    "revision": "5f984b9699dfba12c97cac8b7265ecf9"
  },
  {
    "url": "assets/js/33.68e1a211.js",
    "revision": "433ca86aba491ecde79e3b2eb112d965"
  },
  {
    "url": "assets/js/34.772e2a33.js",
    "revision": "d8a9a7fd0604e6d516315def8bc979f9"
  },
  {
    "url": "assets/js/35.198e4654.js",
    "revision": "31c9aacdfb79a6ff52d0a4be454e5293"
  },
  {
    "url": "assets/js/36.75f27638.js",
    "revision": "da4e7da8a4094c82e6056ebd2df9a813"
  },
  {
    "url": "assets/js/37.79c77470.js",
    "revision": "e77a145ad4f131e06cfec85dc36fd87c"
  },
  {
    "url": "assets/js/38.f26b6fc7.js",
    "revision": "f55b500005af87218b804e890ccedb23"
  },
  {
    "url": "assets/js/39.f39de953.js",
    "revision": "64042ff4955043fbd7802a9d22760493"
  },
  {
    "url": "assets/js/4.c02862d1.js",
    "revision": "aa4193a75b1b70e0b11dfd3eeb9d876f"
  },
  {
    "url": "assets/js/40.041c67aa.js",
    "revision": "ad842d77a7782e3d198859e904fa20c9"
  },
  {
    "url": "assets/js/41.99059cdc.js",
    "revision": "744ac0f3be7884a2e8d10f4dca299439"
  },
  {
    "url": "assets/js/42.309e2fb5.js",
    "revision": "2c16832bf3d87f3c51752561829ed2fd"
  },
  {
    "url": "assets/js/43.a538ca5c.js",
    "revision": "7c969192e6b5ea40fec4b72d1e7dcbc9"
  },
  {
    "url": "assets/js/44.df781d0f.js",
    "revision": "f405caaa7f8cd129cffe4b29f6871ee6"
  },
  {
    "url": "assets/js/45.7ae6e7de.js",
    "revision": "eeba8cf6a4526ce2d050b8e6595e8470"
  },
  {
    "url": "assets/js/46.a2c378b2.js",
    "revision": "3f4358cd2df3d5e32f277db057aa4855"
  },
  {
    "url": "assets/js/47.ccaf128b.js",
    "revision": "8c7b29ee1a88c79d112f558a21f71138"
  },
  {
    "url": "assets/js/48.a7374535.js",
    "revision": "d7fa9953c3b2364f298e52e9d042aefe"
  },
  {
    "url": "assets/js/49.6091ba83.js",
    "revision": "8e567bee6597f816bebcfdfa4e6347df"
  },
  {
    "url": "assets/js/5.63cc49b2.js",
    "revision": "3ea1f9aa44aa8b7a2f04e80fcd3005d8"
  },
  {
    "url": "assets/js/50.943bbdf9.js",
    "revision": "94d0de4a30e2d217c9c38d86f62f4d17"
  },
  {
    "url": "assets/js/51.488c9a38.js",
    "revision": "ca6bd041588e68d0c79fad32e0275646"
  },
  {
    "url": "assets/js/52.1f114378.js",
    "revision": "377c4399baf66aad070bc9dcbc2e7526"
  },
  {
    "url": "assets/js/53.f1d71d41.js",
    "revision": "494b5ac2bc4dd9135a37d4155a12c7ec"
  },
  {
    "url": "assets/js/54.e6c2ecf1.js",
    "revision": "01ca71b386b2ceb80ec133b9a27b84de"
  },
  {
    "url": "assets/js/55.9769f54d.js",
    "revision": "0889682e6f76281978f7a7d960127a61"
  },
  {
    "url": "assets/js/56.ee0e3dce.js",
    "revision": "14bc47824c309b9ab713f11c45d07346"
  },
  {
    "url": "assets/js/57.c0e46672.js",
    "revision": "5b432f9bf3a4a280508ba534ec49c873"
  },
  {
    "url": "assets/js/58.c1ac65ea.js",
    "revision": "7b37eca6257cf1691436caf987e4bc9a"
  },
  {
    "url": "assets/js/59.a55a24e7.js",
    "revision": "d02456efc9fc53ad60def452bce862a5"
  },
  {
    "url": "assets/js/6.f8c9bd71.js",
    "revision": "4ad2814a22535edd53ea968580447238"
  },
  {
    "url": "assets/js/60.738cd48f.js",
    "revision": "735ce249216cadf31ce0e45ab2aa1745"
  },
  {
    "url": "assets/js/61.e686df74.js",
    "revision": "ae887dfc9d537a4afd0cb913d96aa340"
  },
  {
    "url": "assets/js/62.2423c056.js",
    "revision": "2637a487bff07d25e0fe8dc499ddd0c0"
  },
  {
    "url": "assets/js/63.023501a9.js",
    "revision": "3532da42123fec0e79912dca671cb1f6"
  },
  {
    "url": "assets/js/64.63d2d1a7.js",
    "revision": "06d80d3ce50d20edf3da48947ead5d4f"
  },
  {
    "url": "assets/js/65.1854a98e.js",
    "revision": "58273055cfaa9ed136d39752cfb3db3f"
  },
  {
    "url": "assets/js/66.5387d876.js",
    "revision": "3cc01094bb6319037d64b5403d601d72"
  },
  {
    "url": "assets/js/67.343f9870.js",
    "revision": "98dd8232d6494645de48c9f2d3573104"
  },
  {
    "url": "assets/js/68.6abc244c.js",
    "revision": "50b452519cee9594785aa8c96329db05"
  },
  {
    "url": "assets/js/69.93a204e1.js",
    "revision": "8b142efef8edb007491384812fdf92f0"
  },
  {
    "url": "assets/js/7.f221412e.js",
    "revision": "d1724e938249419b4cd7bdc1e9609192"
  },
  {
    "url": "assets/js/70.5921df88.js",
    "revision": "508f8a314b17bae3f5287d7bcaf18d5f"
  },
  {
    "url": "assets/js/8.482422d5.js",
    "revision": "3b0efc7fc06b018b29b2c339d5490acc"
  },
  {
    "url": "assets/js/9.fb5d347a.js",
    "revision": "8ece0bf336de46de236394c1c4b5fabb"
  },
  {
    "url": "assets/js/app.9f923c7e.js",
    "revision": "8c15cccbb0d55df1cca143f4df3e9fa5"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "0c1ded133c31eae1f21cb0718b517b82"
  },
  {
    "url": "category/index.html",
    "revision": "fd6eb7b3494efd23ea158fdbd9c8ef3a"
  },
  {
    "url": "category/learn/index.html",
    "revision": "396e569f6740a6bbe6b2499a2eaba03d"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "42af7436f84b14d41e7e1b9c8a1aa00f"
  },
  {
    "url": "category/project/index.html",
    "revision": "d7bf039adc351112736d84219f3a9118"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "523550090bd85289cf4a51ba1696b1c9"
  },
  {
    "url": "category/summary/index.html",
    "revision": "025a9a5ebcf71f9c92d9ac253d899d6f"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "e46a3a9900e96387525cde2357aac638"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "2aace704eee96fb1acd9e5b9ccd2d872"
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
    "revision": "0873450d0fb18018d9fb0e08e7aed09b"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "4e65ef1bd0522f7bc051af5f84a6cd86"
  },
  {
    "url": "lib/index.html",
    "revision": "33a4b461b86ab99375b0a6a4ac2df121"
  },
  {
    "url": "lib/m-less.html",
    "revision": "bed7fec058b64dc89250638786de67f7"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "606b508fc0630ba60b0affaf842eac22"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "73ad8582f8e5f307fae0a30b51fb4f30"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "87aff4bdf048e1657416a0cb831a0ef0"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "9cbe032e6c282e55f7600c08220643f1"
  },
  {
    "url": "lib/usercss.html",
    "revision": "06f5f6887715bf7050bf19afb3fed3a5"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "c95363db18e7510a2eff756b6bba5b1f"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "a5b6bca266b868ac910fcc6dda41e420"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "3467483f8fe407cb0f7650488966d78d"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "778c235633d59bc8fa093021a782e792"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "3a2c7fb3e51e676e2969fb6f25874a94"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "91b7f4daf0148d480eda95aebf3bdfc6"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "5da69d59b093197e327bc666c8017206"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "13184b44c2616ff0f8b8f45f0b31d777"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "88cf2d3c9d69fd43a20300c4fb89964f"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "d14079a97c6020ff0e5dcc7000937595"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "a17ebe6a10cbe9785d7b6a63a88dd0d2"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "39828a7e1d5d6562cbaa7137f4bca4ad"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "fb2ce51df8d89f118b2fac054700093f"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "8f6d517018211398b3f64c94af88eb6d"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "7e8a10aadccbcfdd11c56fcea7b94267"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "d7fc6bf2e084cca65b9ce981345f9642"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "c5afe20021fb37e8a401e5cfd5a10131"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "8cd1086f4e7c1c473cb75ff67faffac1"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "4ec1d95d07ccb33db0ac49780fbbeb20"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "b56c7b80d5a58ce5f926f723ad663cc7"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "c0c489794cd40069b1f27c14aa8ffefd"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "1e2e4ded20f6b8697f550f3cbc2e6f35"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "5f32483390f4e9c03f0aa1d40b43ca74"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "e02cce694384d0320f895d34f3b24a98"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "303083cf2175bc1708cd7920b32366d1"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "d88002e3a6f8d7530258cbfc776843de"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "1d1348b3a9b05bf7ef67f35d33a72e14"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "b411d4cebf72f5ec2c6b2743ea513efa"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "c59d0d1e58622e97e3df29589c4ad34e"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "da5f10434c7eb077e14f1bd3072551eb"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "24a541ee0d893273a8ca46bd17f6b85c"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "169caa2c915ff1818a00c36e7e9352b5"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "a8501407f963995d84b15bc2970cd647"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "4ab9815a1075bbe57e2022bc45b0f880"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "3cb991e6e8c0f356964b0b49ee392647"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "cf5a4c684aced57ff06e5604e4729d44"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "f6a248bec072c344a27d841a9b2294a1"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "2b1833d37aacfc06a23cedaac16b0484"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "ee04d569397cbeb2a1a20a7969da4cc8"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "4413b8c5dc310461ef6766b83a1a6bdd"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "34c92f32c3b31df445eb5a0b994453d4"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "46b80e74f82d3e902eda6977b20b13e7"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "902d543f3fe3411fe7fc0a79182cde66"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "08b22ef4f94b15a5eb313e75b7afed04"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "620ebe9c373e3d48e2405939c16af07b"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "c3800bec2e9b907b8aeb897da45aae8f"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "005d54c60dfc7e4fb56d109358eb1bb1"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "bd2b5d36c997640a307a099bac9ed989"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "486823f54e8c0a84bd16d38363c98ba2"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "00b5b3a03e208ff12113dc6d5c03af6b"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "eecad43ddd22439256c0ff06b391e7a8"
  },
  {
    "url": "posts/index.html",
    "revision": "75bea534a48a4b05c96ae2f4fbde7c4e"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "241bd3c3d91e2482880d5d520a787c3d"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "7dff7c6583fb2e72188a2d205a0932c3"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "5a8460e07250fb7c240fd279fc7271ac"
  },
  {
    "url": "tag/android/index.html",
    "revision": "b6e5c5995fbf313e60b1600a83d858e1"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "34ceed894c8513e85fe2542e1bb70c09"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "64d55cf89057e1b6af49ace130b07e83"
  },
  {
    "url": "tag/css/index.html",
    "revision": "dbc581f5fba2f908c78de8271f1e6b27"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "f86b8c35daf6969b8a0a0a3b15af9052"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "a36fe52a958eb95b838b88a506cd9cc6"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "97e76e6d68c2d5691962e81c1e48068f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "709204b80352f5953298b54f4f3e2017"
  },
  {
    "url": "tag/html/index.html",
    "revision": "287e0027b699ddc6690aea97ff0377b9"
  },
  {
    "url": "tag/index.html",
    "revision": "6b460bb855dc46532f5ed5900218a444"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bdd396f0f038e1cb15ba7aff6b121c9c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8e43db5a8c8c8046f8a34740475a64c7"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "dfe3769193305d2e814f758ad56d4f32"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3f137bddc6e5c14265ecc14b8906e1ea"
  },
  {
    "url": "tag/less/index.html",
    "revision": "19cc06e101d4627449d5e06db2bf64b3"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "63f5041492bc3ac57dfa1909e3d2f76c"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "e8bcd3d6ab84407894db4aa49fcd602d"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "357561950aa25905c785ba08ae48dbe3"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "3fc707a654a138670fc25a3a0b5e0d0e"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "98b5c5909c9dcc86c56dbf76d21d4466"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "87ce04a2d9d6b50c5a4bfcaba9d8fcff"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "1201f5da6ac4460d3e92c76cabab6d36"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "0083a2dea302f959257382478150480f"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "79cb16765a8732ae649d6ef1729f9244"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "5671aa938524066b49977c82222b2a7a"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "3630d32900bb569b43d39df59ac9d458"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "ef9e6f509fd841c0fcf7ba2394d9b198"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "80bfff093f480b7741c5952090225df5"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "8e9569457f5feb1e6c0788e6beea9b1f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3416c143f0cec9257d8bd517e6fa93f1"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "cc1e39e6a0f9ccc8ebf72e6c629a5373"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c5df46312e145637a5e32ce6e0095d20"
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
