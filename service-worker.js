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
    "revision": "69f704f6f6e5b4c6cfd70ff28fcf2886"
  },
  {
    "url": "about/index.html",
    "revision": "cfe305c3f59536f6993a6cc6842f30fd"
  },
  {
    "url": "assets/css/0.styles.3725a9df.css",
    "revision": "b6ec3c1a0a62582e01a186e66241574b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.02e7ca6b.js",
    "revision": "d0cbbfdeee5623e23b583876a389862e"
  },
  {
    "url": "assets/js/11.6ce12f5b.js",
    "revision": "58e012b63c3e89e523a09a04c952b76b"
  },
  {
    "url": "assets/js/12.bb9519a5.js",
    "revision": "36618cbd92a0e5737906f77cfe45a7ec"
  },
  {
    "url": "assets/js/13.856e1ac9.js",
    "revision": "9669f8e25f0c8abccf6765e8c52ae8d0"
  },
  {
    "url": "assets/js/14.8ea1e187.js",
    "revision": "895ad1164b81429ebb23980040be7cd5"
  },
  {
    "url": "assets/js/15.0533cf85.js",
    "revision": "9969586d9072a8aa6cc1023b6376de33"
  },
  {
    "url": "assets/js/16.1fea4383.js",
    "revision": "8881ec6f60c899b2890c6ee2a973e6e0"
  },
  {
    "url": "assets/js/17.e5dfc3e1.js",
    "revision": "c681b560feee506bfa3a4b6b2134bfc7"
  },
  {
    "url": "assets/js/18.10df7387.js",
    "revision": "c74f30dc01ddfb89fbbea3b3c3727a48"
  },
  {
    "url": "assets/js/19.6c48e216.js",
    "revision": "f3e1569db585ca7332c5692da7228a96"
  },
  {
    "url": "assets/js/2.7ffa92a3.js",
    "revision": "b036dd25f66b69fa329bdd9048ab2cac"
  },
  {
    "url": "assets/js/20.89302607.js",
    "revision": "33a0bf17f6b107bb54a9a9c5ac5ff315"
  },
  {
    "url": "assets/js/21.c722ea86.js",
    "revision": "f11de8119228807f2cb83d420e1032ac"
  },
  {
    "url": "assets/js/22.d204bac5.js",
    "revision": "21c1e46063ab213f367004b8ccba1e1f"
  },
  {
    "url": "assets/js/23.ef205875.js",
    "revision": "103ca91fb2fb0e751d86e68366fb8b13"
  },
  {
    "url": "assets/js/24.63b4c34a.js",
    "revision": "5fc546a2e7cd2d0a8bfc00ce62fc472b"
  },
  {
    "url": "assets/js/25.eb8817db.js",
    "revision": "09881b0510ea06100599a75190e922d7"
  },
  {
    "url": "assets/js/26.53f5eed3.js",
    "revision": "7e837f274e90e17013de33b77f7384e3"
  },
  {
    "url": "assets/js/27.6ba890ce.js",
    "revision": "edd96a7aefd33e95904b394f91a80f9e"
  },
  {
    "url": "assets/js/28.5f07fefd.js",
    "revision": "d11e03297846b69c5bbd33c28e87feea"
  },
  {
    "url": "assets/js/29.cec5fe24.js",
    "revision": "a57a979cd21a40299ff1d9c01f309445"
  },
  {
    "url": "assets/js/3.c837ce6e.js",
    "revision": "99bf438f284d44e59b178cf4a4386870"
  },
  {
    "url": "assets/js/30.4feb180d.js",
    "revision": "41464d281585714dbb478e58123016ba"
  },
  {
    "url": "assets/js/31.70a7eced.js",
    "revision": "f3fc4be776888fef732634aeff8aedae"
  },
  {
    "url": "assets/js/32.51a900dd.js",
    "revision": "396d2b7805b2d7d957ea742a6647a53b"
  },
  {
    "url": "assets/js/33.dc6f0bd2.js",
    "revision": "f3a535f39001aa26638ad1740da61139"
  },
  {
    "url": "assets/js/34.84b0304a.js",
    "revision": "e047f8b524c90dfec81c518ea7ae8067"
  },
  {
    "url": "assets/js/35.9c00ac7a.js",
    "revision": "834a1d786ea1895e2292bb1b69e8f72c"
  },
  {
    "url": "assets/js/36.e45aea0f.js",
    "revision": "7f1fa84742e2c9161f99d897713174cd"
  },
  {
    "url": "assets/js/37.3455f50b.js",
    "revision": "80c001241b56ee15edc2ee3bc59caad6"
  },
  {
    "url": "assets/js/38.535e2740.js",
    "revision": "ca3e70fc076285b813b335ffc9ee84ef"
  },
  {
    "url": "assets/js/39.34fde6d5.js",
    "revision": "84d668cc98e326745edc0291b2cdc5b9"
  },
  {
    "url": "assets/js/4.a60ef20e.js",
    "revision": "fc33315264c75ce115a7ebddb10208d7"
  },
  {
    "url": "assets/js/40.bb88cafb.js",
    "revision": "89c97a7768ea498223a6c0ae1ee3c052"
  },
  {
    "url": "assets/js/41.831703cd.js",
    "revision": "3c69307fabffba1ba9015f55b75e68ab"
  },
  {
    "url": "assets/js/42.a824603a.js",
    "revision": "6d8dbe672b617b3c211daf5f46da4c2a"
  },
  {
    "url": "assets/js/43.663a75e2.js",
    "revision": "0effe5fbfd943368139f0b4c1369c633"
  },
  {
    "url": "assets/js/44.76bf19da.js",
    "revision": "5224c7c7fd72659b0e882c33d8ce9967"
  },
  {
    "url": "assets/js/45.9b489174.js",
    "revision": "ba7bb77817a4cab770962e85315b1a94"
  },
  {
    "url": "assets/js/46.05795e35.js",
    "revision": "fa8c849eee97e45f1d8b56e450efbfd4"
  },
  {
    "url": "assets/js/47.c84b712b.js",
    "revision": "f056cba7de0ddd2430e86837b054647c"
  },
  {
    "url": "assets/js/48.d43ac28c.js",
    "revision": "627533ca3e9f8b241f090e8f5a3a6e20"
  },
  {
    "url": "assets/js/49.0cae4b40.js",
    "revision": "1fb771c391f0f567bacbbfa042ce2441"
  },
  {
    "url": "assets/js/5.7efd56dc.js",
    "revision": "bc37dcbc91d883791e64777e9a2a7adc"
  },
  {
    "url": "assets/js/50.0b4c682d.js",
    "revision": "3732372f6b6a9557eefca305188ad498"
  },
  {
    "url": "assets/js/51.077fdfc9.js",
    "revision": "5edaed7cda51f4f8e57354d311edd8d0"
  },
  {
    "url": "assets/js/52.272dde70.js",
    "revision": "ea40c5dded416f93f1555a262d8eb282"
  },
  {
    "url": "assets/js/53.40833686.js",
    "revision": "72317a470c82b83390691f99043dd1f2"
  },
  {
    "url": "assets/js/54.4117d693.js",
    "revision": "fb9c3dc83926302c8571072e291dab70"
  },
  {
    "url": "assets/js/55.a5ba3e48.js",
    "revision": "81a1f7eda1989c24fb52dccd62904ea3"
  },
  {
    "url": "assets/js/56.aac62080.js",
    "revision": "6c11d199f9d449cbeb3dc57888fa30dd"
  },
  {
    "url": "assets/js/57.56248f8b.js",
    "revision": "fbeca725f340c9e0b8cccacc71c33d83"
  },
  {
    "url": "assets/js/58.71cb79c6.js",
    "revision": "80698c1902a9034f12964c16e1dbb285"
  },
  {
    "url": "assets/js/59.d83cce66.js",
    "revision": "accae78eef8874487df6c87a61636ee9"
  },
  {
    "url": "assets/js/6.18cc1b4e.js",
    "revision": "a6e6d194c1c2b24cb3c4890efc913cec"
  },
  {
    "url": "assets/js/60.da66be79.js",
    "revision": "73569d623e2c276cc9d00b75ceee37a2"
  },
  {
    "url": "assets/js/61.99f51665.js",
    "revision": "7a684ae3e88ca8d6f59183b0fdd0312a"
  },
  {
    "url": "assets/js/62.c70e7354.js",
    "revision": "36aef0676161b9911835b88bc6cc2c3e"
  },
  {
    "url": "assets/js/63.aacf2ae5.js",
    "revision": "c198d352a38cd4ef2c0124dc98b3ff9b"
  },
  {
    "url": "assets/js/64.71018dfa.js",
    "revision": "008019b2ac57e2e7ad5d14147d39c213"
  },
  {
    "url": "assets/js/65.2037a6f3.js",
    "revision": "de5975563a0bb776a05ef3ce760a5201"
  },
  {
    "url": "assets/js/66.19d4f0a2.js",
    "revision": "f4638bbcb8bb823201640d4cda063c0a"
  },
  {
    "url": "assets/js/67.cefb83d8.js",
    "revision": "a48bed2ab2583d0b6b32ba8ac125dd38"
  },
  {
    "url": "assets/js/68.5ab52d89.js",
    "revision": "d90d829eebfc3cca8bd5531c5d06e58f"
  },
  {
    "url": "assets/js/69.84c668e2.js",
    "revision": "3fada5b0609581f73cdcd197ed8f0ab5"
  },
  {
    "url": "assets/js/7.0cfce3f5.js",
    "revision": "7a4f9fa1eb07f3501255d9b7b81a21bf"
  },
  {
    "url": "assets/js/8.f98e97f5.js",
    "revision": "9ce862ce19b6788ec85fc4211a1df8d2"
  },
  {
    "url": "assets/js/9.6692cf60.js",
    "revision": "e3ad96400e302e6f36942bb1c8d39df0"
  },
  {
    "url": "assets/js/app.a470bd28.js",
    "revision": "7356d1e75ee7a5632f05ddaf41772664"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "48a5b4c3b0b6b2104b3309a340bbaa81"
  },
  {
    "url": "category/index.html",
    "revision": "478bf6312bae77d2c852e377677867aa"
  },
  {
    "url": "category/learn/index.html",
    "revision": "5feb215ee8b3aebd13e608a78d142888"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "7d3dc90182a5c3e1cf68f1539c07f9ed"
  },
  {
    "url": "category/project/index.html",
    "revision": "8504cb56c1c5c57cf7442bb078a553d9"
  },
  {
    "url": "category/summary/index.html",
    "revision": "610fa41cbce05f6f34a886f128cd6bbb"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "162de8c89c3ec1aecba79baeeaa6ba83"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "72b0d7dc62b914d85e9b93c9997afd43"
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
    "revision": "543bdbf0bdf0aa40a66cb50ab068aca2"
  },
  {
    "url": "lib/index.html",
    "revision": "29d4d99b5922955abde8f56bc650a55b"
  },
  {
    "url": "lib/m-less.html",
    "revision": "79aebf586b0806a76a0bf42af15a53f9"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "5600675579ef4d9e831f6f93cdc5852a"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "9107fc0009c011dcfac5684b7f7b41b8"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "17fb831bdaef55a1a8db649e312c3ea9"
  },
  {
    "url": "lib/usercss.html",
    "revision": "022970907c58c0553ebf867d24c9ea81"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "73f1b0ae1734bae47d38f7db0b646f27"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "4afdece6ba22ce04cd87ac8e5b52ff6a"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "b1eeb06040b1029d40213a68caabcc75"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "73edaa6ccde6ce2a7e19c09749b141e6"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "cb9d81be9ae3b37912d63a1df7280420"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "7c24c566ba44206fe65b6bdb423cbaa3"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "4a419314577334116e01e8cdaf4c9628"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "500588141b9d8e69866b030085d23c63"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "950f2d072d762439dc351dbba2833c7d"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "94e8ad0352a1bf844f183018702ccc13"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "46ed7aa55725e82319a89f1ce178e366"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "b582893ebe15b5d6e9e2ece840c8b1f2"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "01536428ec6362a6f1a06600e842335d"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "644523146ffb9543c55b855e121dfbf0"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "b9175d76d4060e705cf585f580b053ed"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "8e73047a81d09156f15c10ef7f05c92b"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "f6af3aa2c2bd633faab4af9e68ff10ad"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "cdd56a1bc4b1773c616ec9b6a2c4cf56"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "e2384b69b26ec2968cdd9deae98ec61c"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "86f36432078427f60041565f117ef916"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "266a299dae383580ea9adc3643d2f37f"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "bf61da38402c1a5e41118c981c12e765"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "e66df57867254e02df47cc713c94cb64"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "4a19247476e5ec2aab910f22ece30fc5"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "6eb407cd392aec7da9293bb57a847728"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "1fc9bb930c88bec2c7e9315311580e21"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "ee3de1b016b578473cd7ab726f536f89"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "20008490313660c66897668db296b3ac"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "943132c96a34255bfd04742b5aadcbed"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "c766d3a2e0ffb2794b614ef93bad5970"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "8ff67888d4d3cde25aa264679796f1fd"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "653ba1608bc6f61d18c0952ad9d0f2b8"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "998fa6b8d9ecd3a5b62c76d70b1c16a9"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "317fdb642a5a416f06aedbe9e1e2a1ee"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "4e3a4185dc874a841097742355f3714b"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "e49dd0f57595dbe11422c29e39981e12"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "cf9295a05bbc10203a76073a13f40fec"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "974d3bae8c06f546f5e86a3f98cab368"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "2c752b8a21a0234dd35c3391fa14bf4a"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "cd5fe0ba77c17d77612ec10b635e05c0"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "8b2d257da42b22183ded7e296577b608"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "c7990b451b2cd24b4e8faecc0a6fc670"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "0f22b2e78c55465779f1133295ca6101"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "d0dd49da20c84c97daf4fae4d9864c72"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "f72e8454ce68266eb82d454db3dd4e3b"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "9f2106fe340dc5a8d021d6aded5c8f00"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "c81a1ee685de3fb273483ff2390982fc"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "b6a6a955ae0424b93e8bcf9e6d69b27b"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "aa20a57c9057ce3e5f5468aa2df8eabd"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "39358370b2fefea346463ac7c51becf8"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "744827ce46c4cc2c9f23267e5a95d8b6"
  },
  {
    "url": "posts/index.html",
    "revision": "5f6e6b1e4c9059186c4c401b42daa1d3"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "027ea478c71d35480fcb317c70a989a0"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "d48bb50ca7b14cbbe6b4672aedd948dd"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "ef989116db125ef7f0d0907136e19551"
  },
  {
    "url": "tag/android/index.html",
    "revision": "210a4aa15220b257cf7cb7d6bb905f32"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "3179b2b7f970e2ac0b7583145bece449"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "93809a00ce7a79515bb75ed4dad564c8"
  },
  {
    "url": "tag/css/index.html",
    "revision": "096e31d32cd749abbdc9c45b469ec466"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "f6cbcd05c30b4489894224d56c2df1f5"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "535ab86378c2b88e61e4e462f904eafd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c892d0309ff9a4a9e30aa07272fea20c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f9f372beffd74ba1f7bc4afe99ecf674"
  },
  {
    "url": "tag/index.html",
    "revision": "4627abdbb6d8243e7df84e764475d252"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "00bb0b9c45e38f592fe525c0ab50f87f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9c7583ad7eea54d63279855966322c7f"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8c7a738da2f310f33721385c77e763e7"
  },
  {
    "url": "tag/json/index.html",
    "revision": "fb0a61eedad68159a1bde62e37614f1f"
  },
  {
    "url": "tag/less/index.html",
    "revision": "234e3fe3ba4f3b5423232f342a57ec4a"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "af038fd9e65a9c911e408d225f971dd0"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "9f4a09932c05936b4e7a168f16731cc0"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "0edc1bf066591ee6ec718e44f32b85ca"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "211e64012afbf8c20ea91c614b4fc29a"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "40092297a3430bea32fde095e17aa313"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "d0d2e057d106bf361c55dd81166345b5"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "2ef9f63a110c5da571eccaedad48f2ab"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "b2dd8d570b111879d58bb073a950d644"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "5777e553bd0880406492c396dee01bab"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "c8b2c488827ebcaf9c03923c126d96e0"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "65d6c103f82273b38a89b1047f6fe049"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "4bceebb9b2b77c2f1474874034675790"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "9923400f0649e9ba4b68c4587c7f1d4b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "19e52ea143b02ab43d27dd737d73739d"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "324307a13c6e3041b0d0df526c4eda72"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "eb9ce22af25b1b5e9970baf18899d43d"
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
