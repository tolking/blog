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
    "revision": "c8f232a3068707eebb2e527eded908e8"
  },
  {
    "url": "about/index.html",
    "revision": "dd3bb4ec2da6d7ff0a7b651bc3a4d64d"
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
    "url": "assets/js/48.04fc709e.js",
    "revision": "2015d8b562f9e37c4458268d46e88d5a"
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
    "url": "assets/js/app.b948779b.js",
    "revision": "b495adb556cae91ddf0d67e807ef3c14"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "55525b39438eddd505118320d49112d0"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "a081e4da3cc7b4d633d3aafe1f4b8da0"
  },
  {
    "url": "category/index.html",
    "revision": "c40efb4cdd14f81c8f9f4a3174c1db98"
  },
  {
    "url": "category/learn/index.html",
    "revision": "44c2b35e6ec7648479c68b3839832b0e"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "1de3c5a8989bd139344ff4d936e4b628"
  },
  {
    "url": "category/summary/index.html",
    "revision": "c1b85c080c709376c509a76bee7a449f"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "89462f3d7c205c1980d43e3735b90ef4"
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
    "revision": "f7bfdc58a29039a94c0cf8d4f6527ce2"
  },
  {
    "url": "lib/index.html",
    "revision": "fda8088a40334bb1cbdc8fe8237fe75e"
  },
  {
    "url": "lib/m-less.html",
    "revision": "3ed644ef7040b9584b4485446eed50f3"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "5e11c4019dd8415666f2ab584fc44aaa"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "7fcf5027095bc6ce61c61d3505f39f58"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "42d37ce51d31f4b936cd91589378ab8b"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "03d1d52d3cca34e78b39a05f3bf2485d"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "5bbdce6f3e6c7ae908b8d8ff9ab6afae"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "f75e00e622b6dad7b4f6ff10e16dff1a"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "2a67a80da6158b5f457371d0652b1304"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "8c7da490acd21b8453df3dd1a6d4c9aa"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "570d6b868548b3e7cef675d0f088cbeb"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "ba8cfb27ec436416ac9c48924be1a89a"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "ed1b7489ea3aacc87b6e0d5c0f3a799d"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "f4fc4a866b50f218711f30874ba1e662"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "e4de918b0f7d73b72b53f3b2968b7012"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "8016cb451aea10738cbee38436a21baf"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "1b1fe7a4871b056753612c436042d98e"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "3586628b3dc04040ab38c60c773048cc"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "3dd20dd0bf7a7dd23484ee35b2c6155b"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "94d470753efc88c4fa9bd46485d1fc3e"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "32bf8b1a2ca819cace5b5a4ad54c0a95"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "503f73046f1199f9987670266edf0627"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "39175c55381ddc1e963c57b7184292c1"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "61aa03119e9ec7c6f46977edac6f9a3a"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "608327bc61a445f5fb0c6baf2231e19c"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "0cdf75a176bb46f4deb8ae04e11bd7ae"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "91d38d239fedcc55d549c76f9c543112"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "ff6f2ba6e9c55302be052de76d80bf99"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "11501416fe7687b7672879aa2b05ec12"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "d2320d97ac91106c5557264d7668557a"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "724390fc3db60ca4622547a4af2e1a97"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "05f3390e29290c28788770cff002ea41"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "a06c8358ff9492c02075eb3e12806436"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "4f0043bebd3ef62e65cf6867adb201e7"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "580ef88f9c6dabe0d992aa3075b417f0"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "d56c47bccda070f892c06dce27dde79e"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "a0a85f8d4a46bca90f74d4e6cc109adb"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "5aa2b86fe6605bb732c29dfcd3bd03ee"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "60df25266ebf3d8c4ed64b3a9f837dab"
  },
  {
    "url": "posts/index.html",
    "revision": "07fd97c3e040657b92215aa6a1b18157"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "6c861d80ca7e984bea85c32573417893"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "905eae645b4ae195ced48b1694bd11f0"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "d753eb2fca53a0a3d6359ec0a7d1ba56"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "f1e283ae2fb92fba2fefc07e716881b2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "70e86a60455f0e6719256f01484c4cb3"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "974961de4218ae5b325e42829d381265"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "2853a5aa383c73efff71f00cc4e3ce25"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6ee34e55622adba8e0897c05c8005942"
  },
  {
    "url": "tag/index.html",
    "revision": "72946ffd312d8ad09290760d27ad21ea"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "cb70df5ff4ab95b597db3601fe97e67e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "87ecba85d5f0e20e3048a175990d338b"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "e5e95eb48e74490a2abdc52205a3741d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "6d2103bf09ac9f7790035e640990e343"
  },
  {
    "url": "tag/less/index.html",
    "revision": "79f30e880c7b16d6467ad19f31f9a228"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "29959ef4c3ca3a29617efecca5cd259c"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "8a96ee6519bee8ccb0501e90aa574940"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "c60d70579e09cd50c520567ad4328805"
  },
  {
    "url": "tag/php/index.html",
    "revision": "a6c447970788bb9afdc3ec50c0ace915"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "14a7e41a6771af9073473d89bcaacb51"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "0440a8c07b91443eabb05ce7a2f36426"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "172ebe26cd5cedd1de82833519ecd676"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "b282bec0fdc60ae549cec542a7b6f362"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "4a30fd7779b6e077cdf4fe283a12a71d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3981622630aeb5af7dfc043579e3a32b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "457ae5d200cc4e175f95c89646a55e8a"
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
