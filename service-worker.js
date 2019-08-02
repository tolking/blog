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
    "revision": "11ab0524be508564483423c8c8809962"
  },
  {
    "url": "about/index.html",
    "revision": "482adf08ecb3c784a63620b51f8dd551"
  },
  {
    "url": "assets/css/0.styles.23590314.css",
    "revision": "cd523631cc5d059ff4702c313e3f07c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.07a6ced4.js",
    "revision": "9414340967e92a9fc44e5f959bcc8b49"
  },
  {
    "url": "assets/js/11.1080b015.js",
    "revision": "81d2d6b37aa007d7e0ecd3f1a79e347e"
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
    "url": "assets/js/app.18a973f8.js",
    "revision": "b6719f42823baec9879609c01f936bc9"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "45d5a9201c838ebfcb9cafa6bd8219d4"
  },
  {
    "url": "category/documentation/index.html",
    "revision": "e1d775843bf24bde2784f544b7298393"
  },
  {
    "url": "category/index.html",
    "revision": "569410d34d496fc89355d0f6afe8454c"
  },
  {
    "url": "category/learn/index.html",
    "revision": "47b29b21813774b022b1753e5e6f4d7a"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "bedc81392f80cdf0390c4b2745d04912"
  },
  {
    "url": "category/summary/index.html",
    "revision": "3d763775259d58251437240c643ea2b0"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "406b3bff23d8b9ee29b2ca5bd7d0505f"
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
    "revision": "3c7a7194abaad16f4b1683459dbe22d9"
  },
  {
    "url": "lib/index.html",
    "revision": "269ad18d031dec2c780f7eabd4cf966c"
  },
  {
    "url": "lib/m-less.html",
    "revision": "5b5443c57456375b8592aad754128632"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "a29dcccf03577ddff23f351aa247c680"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "369fc368c56faaa9f572da4bab875ecb"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "ba3a0e1357cec2aea5c95eeb750f045d"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "8ef5ca79574a9ae3c99436456a8299b0"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "9cd724581f0df49432c338a84bd9eb02"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "29389cc1e13ebd47e3b15c11f758c2c4"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "f599b2d3bc0d79d01722bf5de8400653"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "34ee62003f522850cae4d85db5bb7954"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "252865e3b46914a19ece81c44512e6ab"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "47778754785ab629edfaab467b59539f"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "d4a8cc14bad8475c9bf21d12a64c1bdd"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "84c3dd9b0bade3559ef71070ba900ac1"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "a93b9288c019c7c3d72abf37e5166f91"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "9543e195ccffcd28edb629ef3f1df73a"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "22ae2a049231e9a28bcb280f2a00064d"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "4641a7af87cf40976dc893654abd303f"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "6a7e3b28439c5a7318b3c4f09675131c"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "20ea684ef4a878d93aa8396e6d9b04ce"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "f163e062cd7546a45f81d8432d971040"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "37078f6ac1936800d7f883c28b806dc6"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "faac689c34b0c1ce2783d7c162f1c5b5"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "2ee8d293f1829178cf7b21623afb2d99"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "2c728465c06ba2aa9139a4a2217472db"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "c442641c63c3b49be6f20b3f3c65e2ed"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "9ad984a060ab327864eca29a780ced06"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "870d08f731803f86794c6ba6a0a6a291"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "dcc23bc663401678f06a6f57759759f5"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "36e62ab79549d055142a25df627f2ccd"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "a994a4d99cc8db8529bcb955c93e3897"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "879e85d6f91032b6c7403736c6119890"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "0796319e7c6b5c12f274a9fbdbf0399a"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "1dbe2b4215a6cbe144e7132f3eeaa5a9"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "7efe048f6f461841c9a321e5abd0b15c"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "12e34dba8a418dabaf16bbf888f26fc6"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "f1fe3ce559d12456acca7562911f17ef"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "e76717bff57f6d0a29f7e02c0e129d2d"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "fdd6b5e0a295d456bb4e883f9f562bc7"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "9bce57cd512160924cc0913c01f3559a"
  },
  {
    "url": "posts/index.html",
    "revision": "dfab1992d226cdf9813a37145c0dc968"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "d0b875ba38db0b6a87f094e069c70276"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "ad91a7a508ee843f0043cb2bfc180bd1"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "3c9ca87ee2888130670254bc0bd7ec16"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "4a816553d7c46db8cc91953469f17363"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0161240f27826093424b1aacbe429f85"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "4d69c992cffce4c391fb459c634c93ff"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "2895a5c37fcfb3a3102a926a12a29367"
  },
  {
    "url": "tag/html/index.html",
    "revision": "edf65d833ec84171bd656164ad4f99ba"
  },
  {
    "url": "tag/index.html",
    "revision": "a4b5e4399e158d093e38eb618fa7c37e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "75e1d780314b164df0cd86111a8075bf"
  },
  {
    "url": "tag/js/index.html",
    "revision": "00a8e26bc8abc053f04380eb3c56284e"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f669117ac6e7aad44fd79c59636834ba"
  },
  {
    "url": "tag/json/index.html",
    "revision": "b32f46e7c7406fd97ffc2456f30799c7"
  },
  {
    "url": "tag/less/index.html",
    "revision": "96fed40cf62c70a742a9a9c37e036453"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "5a9b04c7928f9d4275cba2f4e07191a9"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "bbf8895589c6ef6ba608af76b53e5f9e"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "773e0136f0c035d9f93b7d5d234d0363"
  },
  {
    "url": "tag/php/index.html",
    "revision": "b94b1ccbf4e8dbe2cb1dfe21c271c205"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "1e2d24c3e11bddf788fb4389cb5ff63d"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "9bd7a273690e12616e1bf015e253ec2c"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "b2f748b294f6a7ab1417d73b612f483a"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "2bb0f58c73aa2c8670b7bad06ea5c172"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "d57f428ed3802595f9a7752b52a5ce9f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4b7c3205be1951fa4238e4b92eb44664"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9d9c1a2adb5795b8c0129dc19bedbe02"
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
