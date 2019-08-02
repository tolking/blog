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
    "revision": "3482f98730ea57cea2fcff47d87d26c1"
  },
  {
    "url": "about/index.html",
    "revision": "d4fa1c40bc3826a8dd8d26cab6166e65"
  },
  {
    "url": "assets/css/0.styles.7606c490.css",
    "revision": "4b4d87f45ce4f8722c496039ff3e532b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1c07cab7.js",
    "revision": "37216030732d1f3825a1e8484e3a414c"
  },
  {
    "url": "assets/js/11.0a7f29dd.js",
    "revision": "ee0000a539a9977a8a891c8fd054f748"
  },
  {
    "url": "assets/js/12.3028fe74.js",
    "revision": "b02d31a3494780dc64d8199b1108c9c8"
  },
  {
    "url": "assets/js/13.cd017128.js",
    "revision": "45f839415946bc79d9cc1ec958daf7b6"
  },
  {
    "url": "assets/js/14.586d3307.js",
    "revision": "6937046ad5a855f1d41e2f695064a9b3"
  },
  {
    "url": "assets/js/15.3f3656e9.js",
    "revision": "a1092e4191a99419fe6d12f04acb9647"
  },
  {
    "url": "assets/js/16.3a9718d7.js",
    "revision": "94f4fbdf84b6378a456c15ad2b00fa76"
  },
  {
    "url": "assets/js/17.780387a2.js",
    "revision": "4be9ce2e558b957baa4e9f968005d9af"
  },
  {
    "url": "assets/js/18.7dd36cfe.js",
    "revision": "3a2df8314493c3c2e5f70b257132ad06"
  },
  {
    "url": "assets/js/19.4ee19751.js",
    "revision": "09fab0210552dd49bac666932e294383"
  },
  {
    "url": "assets/js/2.c95fcddf.js",
    "revision": "f4393401619e5ed20071e3dcb000d9c3"
  },
  {
    "url": "assets/js/20.b1617b21.js",
    "revision": "2f3f9420a7f0d5425597c7264c2f6d49"
  },
  {
    "url": "assets/js/21.cb4b1dfe.js",
    "revision": "2beda0cbb73cc2f9422659fd09a0cad2"
  },
  {
    "url": "assets/js/22.ea0a8ae8.js",
    "revision": "53c8d6c489d4a4ddf427348e1eea4dc3"
  },
  {
    "url": "assets/js/23.2cf82b55.js",
    "revision": "902dcba0c6342d468d39daa69594d094"
  },
  {
    "url": "assets/js/24.58d56b04.js",
    "revision": "bfae6fe50e3b338a35cac7909766241a"
  },
  {
    "url": "assets/js/25.531a2825.js",
    "revision": "b7f812736d46fd4c57ee85550bbe7462"
  },
  {
    "url": "assets/js/26.13717b9c.js",
    "revision": "8434c45fba127213f46de84a87a6d249"
  },
  {
    "url": "assets/js/27.f13a29d0.js",
    "revision": "69ba78d87b6a3d77c70456640daa2c92"
  },
  {
    "url": "assets/js/28.048c407d.js",
    "revision": "7941f033075f7b1be53c56b1e3f7239c"
  },
  {
    "url": "assets/js/29.f5d6bc8d.js",
    "revision": "e44e865e8a08676ee2e913d7406fb4f1"
  },
  {
    "url": "assets/js/3.f33d7614.js",
    "revision": "6fbb22c7fb4cb30e9805cc3b7d99a804"
  },
  {
    "url": "assets/js/30.74670805.js",
    "revision": "c2d17eb74cb636fe10ffac196e7e205f"
  },
  {
    "url": "assets/js/31.42e3155f.js",
    "revision": "c913e076e0880310d61708ffffa2b30d"
  },
  {
    "url": "assets/js/32.41d94f22.js",
    "revision": "14f974f0bbd45d3c6124b020c6ddd827"
  },
  {
    "url": "assets/js/33.d47f0125.js",
    "revision": "2210ff7da0a28d057218cc7792c2293f"
  },
  {
    "url": "assets/js/34.df99b6b6.js",
    "revision": "46831da5ca0b1f6eeed3d99d692040dd"
  },
  {
    "url": "assets/js/35.62674b23.js",
    "revision": "f846485941e2e89a71778f015e7d3e53"
  },
  {
    "url": "assets/js/36.48c6405e.js",
    "revision": "f9aca4b22b2130157001fe041c5a20e2"
  },
  {
    "url": "assets/js/37.9c3666d2.js",
    "revision": "ded6827ef3da26b2c8767217698d867b"
  },
  {
    "url": "assets/js/38.b43fbd03.js",
    "revision": "5d8c9fc4ebd45a6ba3a9d2765e77b968"
  },
  {
    "url": "assets/js/39.70736a6c.js",
    "revision": "28668bde1ab8f3c09380cb6a661ead13"
  },
  {
    "url": "assets/js/4.fee8c631.js",
    "revision": "533c674a7e1f34452da2d298bb49ce16"
  },
  {
    "url": "assets/js/40.384582f9.js",
    "revision": "28b8f6f611efce7bf9cbfef7c8eadcd2"
  },
  {
    "url": "assets/js/41.35e28b6c.js",
    "revision": "e127bb10e4fff309e884d1066b804399"
  },
  {
    "url": "assets/js/42.5788b6a6.js",
    "revision": "4538b2d006742c0a0b80864509d613cc"
  },
  {
    "url": "assets/js/43.bd8b359e.js",
    "revision": "d439233c35c790b2b0f66cd49572670c"
  },
  {
    "url": "assets/js/44.8c9a853e.js",
    "revision": "2b9f3ec692c51ca8cbf45c0b815cb587"
  },
  {
    "url": "assets/js/45.037cf964.js",
    "revision": "d40cded28ff642eb39360f292bf5ee75"
  },
  {
    "url": "assets/js/46.ed9cb210.js",
    "revision": "a578b68398a392204b4db47cedd4112e"
  },
  {
    "url": "assets/js/47.34f99166.js",
    "revision": "f70c0eb831835e53a06d2a5699a2a1e3"
  },
  {
    "url": "assets/js/48.00bbe1e5.js",
    "revision": "3bdccd1d29203590e5df73d09b9247c0"
  },
  {
    "url": "assets/js/49.284af112.js",
    "revision": "b087d33d21b83d27f08f99972d11c540"
  },
  {
    "url": "assets/js/5.42a01f15.js",
    "revision": "7c9e7e9ac1e52f2231b8052104d876fb"
  },
  {
    "url": "assets/js/50.5061a5dd.js",
    "revision": "ebff4d85b3e859ce2caebdbd2f8aba49"
  },
  {
    "url": "assets/js/6.ff67fdf7.js",
    "revision": "e4e451841b49685e1afecb0c19f67634"
  },
  {
    "url": "assets/js/7.2ca94e14.js",
    "revision": "78d9b0724e82986ab854507ef3cc13c9"
  },
  {
    "url": "assets/js/8.d1c1679d.js",
    "revision": "5cc9b323e5125baf5034125d0a5ed79c"
  },
  {
    "url": "assets/js/9.acd41302.js",
    "revision": "b37ce2abfb9395297ad117cf5e38c916"
  },
  {
    "url": "assets/js/app.0079e726.js",
    "revision": "2f127d0906168a97bdceb6f27c04beba"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "3ced80a61e2d98937bcfc9ddec292272"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "5a618509af8f9cc011a8f450729787d3"
  },
  {
    "url": "category/index.html",
    "revision": "ebc3d828072f81aa540011d4efe7fb73"
  },
  {
    "url": "category/learn/index.html",
    "revision": "c1f8e87900f49c836e595d35ec5a98a3"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "b0e28ed53089a1faa0f1fe523f60f9b2"
  },
  {
    "url": "category/summary/index.html",
    "revision": "979f1af3e7a8a5196f57ffd649b084a7"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "95b42fd98d8f10dda01475fa51231eee"
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
    "revision": "09b2ca67c92980038bda1b47d11a9383"
  },
  {
    "url": "lib/index.html",
    "revision": "9be85d31f7b884ad32465e3d59358136"
  },
  {
    "url": "lib/m-less.html",
    "revision": "a9084fbf70e6eaac12fb84229b887bb6"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "5af72d9f784fb2b721e4d2f5643b5f1b"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "2a527c8d94d9fd415d43438529ae6f1f"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "37376b782c8cca4a85fb86adff1b0e4c"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "35247d3cee68719cfbcae0379c76a291"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "fa3fe39cae3549b9090186bcb3ae754e"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "cdc2a97b6a77b082788f1820052f3e18"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "804be0ff30d1405d4bc5491d95b023f2"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "ae7330d9fb9f860765eead26bb0ef380"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "174f2f25fa06157484d5bf933b8ca067"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "27b252f4ba8abc4dca4a2524a772d553"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "1510473c9945c81d9d662b2e391785c0"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "2fb1e9cab26e1b18fcbed1eb7d36f5c2"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "a91f0b7d67fb83501f4d2439d0d498cc"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "cd1176ef0be22cda92c127b92c50ae00"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "9f0902cc24402ea217353ac88615f00f"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "1b3da8614abdfae45244a5c947089916"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "f6e65fdedb37c32924cac39769da1df8"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "fbc8dcd39e65f83a49cba6c1e3f93cae"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "c864571ff6771395cec92c5bf8fff3ef"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "e3ea09641cb17b552caa8bdda35aab6c"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "4d7634b83b8598f03798bd87d87d3f86"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "5531bfda91d0d28c3374e226ddfbeb61"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "535bd5b2feb7760b954c5306c2028db2"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "d81ca7752553e4feb541d8c1267b1b5b"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "63f65fc52c5ae25dca4eb552abfd29b7"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "f92c92e8510cf1848e5033f722da0e78"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "09acbeef31218ef7c8da8b9ad899ebfc"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "98c84a807164f9486bb107fd9f441e29"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "513fdf7ffab8a890948d4264e6fe2b74"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "fd20999bc87a6e9ec7266d498a404968"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "1052fce7af2b3bca559ee48d02ed1499"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "d8229ccca60dffd070afa326ca24ebf8"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "a3328c5847912c2dcbf21a8dfb626952"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "d0f6f58e20e5524b350cb18cfbfc3328"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "5347695efe7a8088891234b7b18dd8f6"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "da0a1ac6ca08bcfc62b1b4f4a958b445"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "6bfb957ad232d203bfd9948bbfd3a1ad"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "5f6c404ce05b84be8e86ee894d76522d"
  },
  {
    "url": "posts/index.html",
    "revision": "9bbfc075edd03d52d7287dd37c96c5e4"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "a7de5e3add7885d7bbdca8cb31ad239e"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "4522b92456a34deaee1ad16f882bf31c"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "d1e3adc4df3fc03e016360f589213e46"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "cb17fe4c4950d6fd8b91a985322ce14a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "02d56452f42b58c127b7ee7970993b76"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "26f9687bb6bc6e3d6e157a0d528b89fb"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "02bafef452105c4f8a6f49619cc07047"
  },
  {
    "url": "tag/html/index.html",
    "revision": "52d807c6df56540c6126db960449a301"
  },
  {
    "url": "tag/index.html",
    "revision": "7a4ada314cca8181b430562c87d90cbf"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "1af2277362971ad7ec87d519a106a825"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c1eb03250ed200763f39a73e23afefad"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3cc107952c26f79c085c1b974754abf3"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d5f5854b37999304ff4862c0f11705e0"
  },
  {
    "url": "tag/less/index.html",
    "revision": "908ab833157fe1d0517f9a25e9240361"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "2e3dead16dec33052d68ebfd77323f99"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "62e68281acff67ed280f80da04e891c4"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "2105d3ce0652d89af546b070b7f6f2df"
  },
  {
    "url": "tag/php/index.html",
    "revision": "dcfd78538894e3ee03979ed2f228afdc"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "1d589ed197dc7088acf4a0f4c23e8483"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "1c872e754e64dbe33dbf612115a04765"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "0e0ab6308702d2699eca00734777f07b"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "e0b450bd47f9486893d3215d79ee3376"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "8721e439629c356d5220d8bddc0574a5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f6798800c708d787f4c408fd1ebaaf2d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b3a72f648dbf80533998c215cf89a254"
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
