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
    "revision": "67a4d96f028003c429918837dfe6b1d1"
  },
  {
    "url": "about/index.html",
    "revision": "ba1e1478de8dcdc8fe9876ab5cd86da9"
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
    "url": "assets/js/12.fae49ece.js",
    "revision": "70a42f25d1894d8658c240da1bd87abd"
  },
  {
    "url": "assets/js/13.fb674d1a.js",
    "revision": "6fcb85fb87d2ea13c6919d5e052f1168"
  },
  {
    "url": "assets/js/14.3594cf70.js",
    "revision": "97976129556a6a90e2897efb0c45884b"
  },
  {
    "url": "assets/js/15.051f5613.js",
    "revision": "607bfb79da0b0355bebb3a7e1ee75d40"
  },
  {
    "url": "assets/js/16.4709ba05.js",
    "revision": "f8d3bd5e7edb9a3ed3e3b20f2486ebae"
  },
  {
    "url": "assets/js/17.a5db4e08.js",
    "revision": "ebeac99694191e0d7693a0a091a85f39"
  },
  {
    "url": "assets/js/18.f2d2895a.js",
    "revision": "beb9a205512239e1a11c43eb050b0ca3"
  },
  {
    "url": "assets/js/19.34a77004.js",
    "revision": "d3d090cd98b09739ca1ae2156e38c137"
  },
  {
    "url": "assets/js/2.c9dca91e.js",
    "revision": "bbdc1f79d0926f1aed4241b994ce67ea"
  },
  {
    "url": "assets/js/20.5dd54681.js",
    "revision": "4afb361d0447f9306101d5e91f2ec171"
  },
  {
    "url": "assets/js/21.bf2a9aba.js",
    "revision": "273cb8bc12641618861cefe5121186b9"
  },
  {
    "url": "assets/js/22.0e89b067.js",
    "revision": "d3278b76ce21a1a509f3d52a9d81621d"
  },
  {
    "url": "assets/js/23.2dbcdf29.js",
    "revision": "52721ab7e27e5cffbc26ee4e5148d4f9"
  },
  {
    "url": "assets/js/24.f91731a3.js",
    "revision": "ff2ad60ddfb304610cd4647604c69e8a"
  },
  {
    "url": "assets/js/25.5442a220.js",
    "revision": "2ecdca306aacb2752fb0fb7f57d47c8d"
  },
  {
    "url": "assets/js/26.fc272aa3.js",
    "revision": "b4cc21aa210724d360e68c63602a1c8e"
  },
  {
    "url": "assets/js/27.e406d092.js",
    "revision": "b1c1f0047d9872357aebf25b038d8e0b"
  },
  {
    "url": "assets/js/28.c4bd8b17.js",
    "revision": "775fee49c35a71b40899be2f0506518e"
  },
  {
    "url": "assets/js/29.ba413c48.js",
    "revision": "15c9ee137262e6a67a2224f51b3a1d1a"
  },
  {
    "url": "assets/js/3.7e1ae328.js",
    "revision": "899adad7fbe4c18c48f8e56117356eb7"
  },
  {
    "url": "assets/js/30.7ebea1d1.js",
    "revision": "af58bb7fb3f7fa760232f4e77866814b"
  },
  {
    "url": "assets/js/31.45b6beda.js",
    "revision": "6f672c3e9f541c64f20334e218b0c709"
  },
  {
    "url": "assets/js/32.732473b1.js",
    "revision": "775ce80bcdabf06e89ebb166fca1b9f6"
  },
  {
    "url": "assets/js/33.f7d709ca.js",
    "revision": "de7da0c585382fa80307260fef27a43a"
  },
  {
    "url": "assets/js/34.022d4c62.js",
    "revision": "b99b5a9c9eeabe18340953ad7e60ba99"
  },
  {
    "url": "assets/js/35.af1a57a0.js",
    "revision": "c8e1776a28a5bd535acf8dee2e80a713"
  },
  {
    "url": "assets/js/36.4fac33d5.js",
    "revision": "e4359ae9ec97f1f08f087b4d8bba5483"
  },
  {
    "url": "assets/js/37.7a1b7fcd.js",
    "revision": "45cdb57ecd9852f5065ead899526d15c"
  },
  {
    "url": "assets/js/38.b0b0829d.js",
    "revision": "cd4ad1aa4da7775a2837d6618595720f"
  },
  {
    "url": "assets/js/39.cda3af67.js",
    "revision": "fafb0405384d07651f4ebe7d09cfbb5f"
  },
  {
    "url": "assets/js/4.4734d263.js",
    "revision": "e1feef0692cc75c7f9b22b6402dfae83"
  },
  {
    "url": "assets/js/40.98df3edb.js",
    "revision": "99a7e29f1f7caefa2a97bf5371ef199a"
  },
  {
    "url": "assets/js/41.04177136.js",
    "revision": "9bdb09cfbc62aae97b7e265167c7f68d"
  },
  {
    "url": "assets/js/42.4ebe16db.js",
    "revision": "a9460ad93cd67bae2db6a85385e43283"
  },
  {
    "url": "assets/js/43.6e072a15.js",
    "revision": "c9e11c7317ca879ca4a7d14677f61a8f"
  },
  {
    "url": "assets/js/44.cdbe4dd6.js",
    "revision": "8e8695404f1e63d156c80e82188c700f"
  },
  {
    "url": "assets/js/45.fced7ab0.js",
    "revision": "eb91b74943af441f6cc12792a03179a8"
  },
  {
    "url": "assets/js/46.2cdd70ee.js",
    "revision": "94a6aacfe3641d0a07640b45df92f995"
  },
  {
    "url": "assets/js/47.15ecec3d.js",
    "revision": "adc83535a796aaa254dca9c4996fd131"
  },
  {
    "url": "assets/js/48.e2f7f8f2.js",
    "revision": "3a97f0b377a776cd4ddf4854562a9989"
  },
  {
    "url": "assets/js/49.52a5f482.js",
    "revision": "8ebb9c9858fe31c7d908158c043ccadf"
  },
  {
    "url": "assets/js/5.4b2ae756.js",
    "revision": "ec12f1f3232561d688b5b8867e939108"
  },
  {
    "url": "assets/js/50.0e805d12.js",
    "revision": "b2a0336e1c80afae516b635ea09f95c1"
  },
  {
    "url": "assets/js/51.54c3d2bc.js",
    "revision": "10739d0e859ad085d02a1144154852d4"
  },
  {
    "url": "assets/js/52.416f6ed9.js",
    "revision": "72cdf16485af8c905bc194ff2d8b2623"
  },
  {
    "url": "assets/js/53.655f4bd5.js",
    "revision": "cd82131d8341ce08d7a28c8f095da00f"
  },
  {
    "url": "assets/js/54.3553cfb7.js",
    "revision": "26e8ec609ec7a2cf640119118e2d3b11"
  },
  {
    "url": "assets/js/55.4d017ffe.js",
    "revision": "04b0df5a6bf7ea0a55ae3f0ade217c93"
  },
  {
    "url": "assets/js/56.b99b63db.js",
    "revision": "ca0d8fb7afab3d7889fd87624f3eaeb9"
  },
  {
    "url": "assets/js/57.7e3a6f0d.js",
    "revision": "f8a389b944331a692c18f2d5a09e9ae5"
  },
  {
    "url": "assets/js/58.9e92fbdd.js",
    "revision": "8978317da0ab5652ca2ddf7827f1635b"
  },
  {
    "url": "assets/js/59.57c328cb.js",
    "revision": "85575ee7cfe453f71c37f0cdcfd7dac7"
  },
  {
    "url": "assets/js/6.f8c9bd71.js",
    "revision": "4ad2814a22535edd53ea968580447238"
  },
  {
    "url": "assets/js/60.6b53ec37.js",
    "revision": "ae64f8f97628ba6aed92af461ffc5b1e"
  },
  {
    "url": "assets/js/61.4e01ea17.js",
    "revision": "fbacb2123da15cbcc26e496e316a9bb6"
  },
  {
    "url": "assets/js/62.03ace124.js",
    "revision": "41ce7dc916a91930f04fd3930a9acc4a"
  },
  {
    "url": "assets/js/63.b6b881fd.js",
    "revision": "38743c08f622810fe987954c74d5cda1"
  },
  {
    "url": "assets/js/64.d9e21622.js",
    "revision": "1dfa20999aed30b9ce6a5eaf44b46fb7"
  },
  {
    "url": "assets/js/65.65fc6d4f.js",
    "revision": "78fb47f178468cf98b936c37bc277917"
  },
  {
    "url": "assets/js/66.3a2fbd61.js",
    "revision": "b986c7b0d18cc1e5c36f72ee745e39dc"
  },
  {
    "url": "assets/js/67.5b48b5f6.js",
    "revision": "82cdc1b41d124ce0ca78c0e8cabb29df"
  },
  {
    "url": "assets/js/68.55bf262b.js",
    "revision": "b969005f25a6cf6e661581cb90fe316b"
  },
  {
    "url": "assets/js/69.abdb981e.js",
    "revision": "9c5dd14680c8d1b539e6f9c01dac1d98"
  },
  {
    "url": "assets/js/7.f221412e.js",
    "revision": "d1724e938249419b4cd7bdc1e9609192"
  },
  {
    "url": "assets/js/70.9fb3d003.js",
    "revision": "533f0dca4986c48385c34d9f6fcc17f1"
  },
  {
    "url": "assets/js/71.233c557c.js",
    "revision": "e7c31c793aeb58e302f025eecb6aa33f"
  },
  {
    "url": "assets/js/72.25a27e6e.js",
    "revision": "ea111c328d825a580a7884bf511a3a7d"
  },
  {
    "url": "assets/js/73.1b8f13d1.js",
    "revision": "9bf4ea380b164d66b92cbdd226119c46"
  },
  {
    "url": "assets/js/8.e5eab4d2.js",
    "revision": "1cfb28747fc89c21ad170090e51e9b54"
  },
  {
    "url": "assets/js/9.a82e476e.js",
    "revision": "2b4b323e823bfa52578272be973c7b5f"
  },
  {
    "url": "assets/js/app.86f95568.js",
    "revision": "0c409194733400b544908627d46a577e"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "0f7cf45fd9872de9a9d68b139a1cea05"
  },
  {
    "url": "category/index.html",
    "revision": "46ff2bbed4a431282c5d7bbf139f82ca"
  },
  {
    "url": "category/learn/index.html",
    "revision": "d57d6a85b046c9c2ef93f417c609dbd9"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "099f78105a83b42bc6a02b1dfacc533f"
  },
  {
    "url": "category/project/index.html",
    "revision": "af7d8aa464fe24af21e38d1bb1d26187"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "6deb11fbcdb145b957144008ae0702a0"
  },
  {
    "url": "category/summary/index.html",
    "revision": "52f56cb96f8a1f9ea112c400ea3a440b"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "b633ad4f0a0a434f2c890b5a86dd5fd6"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "7f1a3cd3bf34d3b64397f1cf65c12a54"
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
    "revision": "a5e68c73098ce95b2cd2bdbc1a338289"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "73f7cb730b665cea430a2fa4869004c6"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "bcc4f3cd4503fadfc945e19eb0d6f9ea"
  },
  {
    "url": "lib/index.html",
    "revision": "3797206d3a2b33715628e6b936f38556"
  },
  {
    "url": "lib/m-less.html",
    "revision": "08fe8aa633ae9812be0f9cf7240bedcb"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "cdfc4bbe2cb72db69d01b16f68ff2d02"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "71632c51ea0da2dd5f90fdb4aa4a762f"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "bc94eaff5406420e7960b5ede0964c93"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "47438581fad3f01f716d6744fcc985d5"
  },
  {
    "url": "lib/usercss.html",
    "revision": "17da44599f3e2cf18f73e415d3840335"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "41fad7c6e2410b003b9a7b0014af93f5"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "ba1adcc7c80158aea8fe0464f2e1327b"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "bb33a4521d642234501588bf6e794a0b"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "89230804e6f7520a0ee6040a61c52531"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "936293d8bd3d0c0da72b320041873b68"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "6ebf3e8ecf85b0b62124783728ee4682"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "88d9a6a0743ac7adb5ebfa82eb9d2bea"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "8b78ff2c914942d3c7631cb8f859a27f"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "f640ae1d96a4c3e18e4e2df837bbaf8c"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "f5b11d494a743e2a826887bef3f06591"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "69840578cc938fda14524944639e6539"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "742936e396fcd8a83b24dfc811e518a2"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "cafac6108149db29414c8ba543138635"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "e1917322524512be4d59918c16e9b69d"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "d6d2743f748d1eb93d6ad75d36f6b6ec"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "dd82698ba3ae230bb161b17bd9241c53"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "83ff6e1f8652d0f1d46c618eea2c8ca2"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "e16979f70f0d6044b939571c61c6f0fd"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "ed543d1c8d3cc881e40e24aabd4b41b3"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "f06fecb3b80848af3d0841106eddbc1d"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "0f8cd37cf4b37d3ee30fb39340a16587"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "b892cd90ccbe1ce1573219f6d0189b51"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "3373f19d95c4c2796c2374215c0e5dea"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "7918c077fb822c24796b88fdd159199d"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "c45beb48813589e844890fb5b4a94e0f"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "d7d60fa0ca637fb8b374f44d98623507"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "7b4e3314663ad267a902abaf09c9a0a9"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "31254fd608a2cc5fd4b0b1a0fc27c5a8"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "3f3785a1038d8f2c1ddced7a9aeed30f"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "aac2acc62fa40246bb2488986574836f"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "4d2aadaa512d048cfd85bdafc49d1a6e"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "ae5d873f4190392ea5ee7fcdd35084da"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "3d2a5da5ba1a6962d65cade3e2f6be80"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "920b16fb4c0c28c8807f0c8c94c2a6a0"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "ad65ba34fdd5a9585ec44981e086df93"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "86aeed43fe0f93b9c0a3abfddffc8ad8"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "e848bae60c8ede99b5af592ee131dcd3"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "3437ee3d2c9681c5c8630926bde4b2de"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "cea6a149f105d8b75249293bc53efca8"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "e57772d98f7632a5d2ad31a6ea8d76e6"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "4021830f737ed9001caf38f284445019"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "a1f7069642e35dbab2415a86cf322080"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "63f3977c465fd498f24e961752dd8945"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "e298c13f5fee15f70ec975b2a91c4d0a"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "f641aa69cb6bd694f2daa21a58949809"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "014f8fb7ecd9c2bd58e4ae51be5b0b57"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "e05aaa2f7febcaa585c2b0998357a86f"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "2412c847f29e306f0df15c5661bcf90d"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "568521bcaf24fca9edf51edbdbf97c2f"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "e68f7037403c18c86f5816284865d3f4"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "fe1ac73ccbb8f2573939aeeb5a66be33"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "88b1fd4e21a1a524e5eeed656fa574ac"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "71f82dcfd58736b17d18e5802368de6b"
  },
  {
    "url": "posts/index.html",
    "revision": "2731e460562ce2a05b4212dfd2a46093"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "74889cc1b5acfbfccc8157c09dd40f24"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "eaa4098da8a64146a29c3ba03fcaed05"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "8acb4c048a19cab97da77c4e7ddb9034"
  },
  {
    "url": "tag/android/index.html",
    "revision": "fab4ef7faa50eb6bb96fb04631c0eeb9"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "00ca0a7b738d03ca4558370886ffba75"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "f47d6eee6734a952ccd4e17e7d9dfe4c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "7b90378bc791a1ca6f59e6803b38da23"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "9470944f9ff0e8437500bf94fdba1106"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "9a554ef8068f556c14da5ef538d1b144"
  },
  {
    "url": "tag/env/index.html",
    "revision": "29f39e46e51108ee3c55bc5844e51118"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "bde6b7b66b0877857499c10bf737bb8c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d3b6723bcaa2fe436c338d074e35423b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ddf6252a2bcbbc4aedad92d6248976cd"
  },
  {
    "url": "tag/index.html",
    "revision": "fa5b436c9854d43510778d8cbcc9e955"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "c2f86d930e60b91a3000ed5cad185dde"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0335f381820ac760a3c540b3b91fea42"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "a63a0241733193e811297033ffe158ef"
  },
  {
    "url": "tag/json/index.html",
    "revision": "91e35bcb1f8fe3f8783c57f1c96d2136"
  },
  {
    "url": "tag/less/index.html",
    "revision": "01ed61af74d00303711ff51f7fa50f93"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "8b912a3fceef20dee53eb09c33f9b3ed"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "dbd5f48205affe8841bec477c26f0599"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "7b053dbfc08d93b26952996c587e4350"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "45c21dc195679a3732e32d5dccc9e7ff"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "e915fa85a1c3e5ebdb3da0b6c87a406c"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "4a79ad605e5cf1c0ad7f4be94bd81573"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "7c955309e0cd5658369320d1337bc310"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "612a31742e41486e200c46ec3ff9b99b"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "c838802c93a2aecf9281bac0f5776d77"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "f596fcf91c580ed686ad88f955bd4d45"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4a5d643f364881c9e6af8079d6b0fccd"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fd0ae8e4ac62544469939e14f9b630e9"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "2d1e72a433604ad8bd5fa0825919bbbb"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "083e3de4c6c635e702284edb6aea5866"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "b0ce9769fa1625933677a577d4e6cf2b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "82d75d472b1cbe1cfa22c177e998060d"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "b00457e1e26b16271d118eec6940855a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "02c332f74e03fccfb27b857b24052d60"
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
