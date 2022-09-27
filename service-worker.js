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
    "revision": "35c841257c4eb74d48e15c430c418c66"
  },
  {
    "url": "about/index.html",
    "revision": "db1a2077e1084aee5432fcb30fbde894"
  },
  {
    "url": "assets/css/0.styles.06e5908f.css",
    "revision": "e14d83bcc0f6a5351392b6f5b6d12146"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.862cd4b1.js",
    "revision": "9ec21af633f982d644952f6ff67ec724"
  },
  {
    "url": "assets/js/11.73b76bc5.js",
    "revision": "568f3300aaf59c37d815643f99c306c8"
  },
  {
    "url": "assets/js/12.48389a28.js",
    "revision": "248f37f63605ac8a9517bb7ce062a099"
  },
  {
    "url": "assets/js/13.6ecbfa52.js",
    "revision": "58e63ebbc8c889cdd0e3bb98182af6ca"
  },
  {
    "url": "assets/js/14.ebaec7c3.js",
    "revision": "8fdf201ac3a2355ac174a9cb27b65849"
  },
  {
    "url": "assets/js/15.d904e56e.js",
    "revision": "5379be2c4741688f59cf5a89e931baab"
  },
  {
    "url": "assets/js/16.7109b2c4.js",
    "revision": "ca3147f79eb45b8df07c7538ce6e1f0b"
  },
  {
    "url": "assets/js/17.27c1a121.js",
    "revision": "96aa6a7042cab9fc043675870e50e675"
  },
  {
    "url": "assets/js/18.d6752a38.js",
    "revision": "7c6dfbb8cda0fdf9c6dccf9e90b7e47b"
  },
  {
    "url": "assets/js/19.0ef2a1c9.js",
    "revision": "e38f415b2ac28b25f3092aacf1f1f2d8"
  },
  {
    "url": "assets/js/2.4669734d.js",
    "revision": "ca9e657c853bacc5d64906dc53e7543f"
  },
  {
    "url": "assets/js/20.38abe410.js",
    "revision": "b54ace0203cdea5dc1e1a69973619048"
  },
  {
    "url": "assets/js/21.37660735.js",
    "revision": "3f956a4751fd2587a713248a7edffcb6"
  },
  {
    "url": "assets/js/22.80099c51.js",
    "revision": "9e5c0a588c33667078c6f1e854731ac8"
  },
  {
    "url": "assets/js/23.35e0895e.js",
    "revision": "aff3b9f23db424a4f1e449d3f8eebeae"
  },
  {
    "url": "assets/js/24.7d2850df.js",
    "revision": "63450cb29eb28606086c42101dcff3f6"
  },
  {
    "url": "assets/js/25.652f3784.js",
    "revision": "1e3039120a5c1c0d88f40cb8e65be517"
  },
  {
    "url": "assets/js/26.82e89972.js",
    "revision": "3a13e0f370ba49c4527c5c7166c87d4a"
  },
  {
    "url": "assets/js/27.3d09a793.js",
    "revision": "9e84e8b6d74e8437b5dbaa99ac0fee31"
  },
  {
    "url": "assets/js/28.477bf9e4.js",
    "revision": "8774f2d673d07f0e6106a2c4b970e322"
  },
  {
    "url": "assets/js/29.b7df219a.js",
    "revision": "cf484c4eded0cc8566167b191d52f2c8"
  },
  {
    "url": "assets/js/3.1d9f7ddf.js",
    "revision": "fc3af87dd41c6c3ab09cb72e3a1203ab"
  },
  {
    "url": "assets/js/30.3f3dcf10.js",
    "revision": "51787373b9ba2ee1e89ff8b8451d8f87"
  },
  {
    "url": "assets/js/31.8496a156.js",
    "revision": "ef3ab069caefd8845b969ee7bc286b72"
  },
  {
    "url": "assets/js/32.ad393b0f.js",
    "revision": "3eee8006ddd1546a3a77ec758107b6b6"
  },
  {
    "url": "assets/js/33.30a28b29.js",
    "revision": "87681222584508c162b048d8123553d4"
  },
  {
    "url": "assets/js/34.a28abc6f.js",
    "revision": "04a0c6a9413d4f9b7eeb69dd2dd2d730"
  },
  {
    "url": "assets/js/35.839baadb.js",
    "revision": "99d755412e44b8ceb497e4c73b657364"
  },
  {
    "url": "assets/js/36.ad7abb01.js",
    "revision": "8588c493a5df451a6037ef88bcf21d0d"
  },
  {
    "url": "assets/js/37.087533e2.js",
    "revision": "e2f2eef83516829ac5fa5212eaa5e812"
  },
  {
    "url": "assets/js/38.9a8598ba.js",
    "revision": "75a8205e0a1b432717b3363515188428"
  },
  {
    "url": "assets/js/39.18d38f68.js",
    "revision": "d4bc740fec9bfa7501041b4507c95c45"
  },
  {
    "url": "assets/js/4.8921d60c.js",
    "revision": "767f1e76d0635e90cffb385f913701b3"
  },
  {
    "url": "assets/js/40.66a637db.js",
    "revision": "db0e191775710ed6d3c7495d67a6e1c3"
  },
  {
    "url": "assets/js/41.381b3e6c.js",
    "revision": "6e30c646e42a5cbe254c0467951525c5"
  },
  {
    "url": "assets/js/42.05bf19e7.js",
    "revision": "3c4020720826edd6da7e08904ebf9457"
  },
  {
    "url": "assets/js/43.dbad70d2.js",
    "revision": "6b8ad12e2c7bad0bcde5ceb8445f7af5"
  },
  {
    "url": "assets/js/44.ace2b061.js",
    "revision": "3aef4fba50d9233b968c7364e58b0fad"
  },
  {
    "url": "assets/js/45.8ebe987b.js",
    "revision": "9268fc159d11d0ac3fcc2e1dfd3568a1"
  },
  {
    "url": "assets/js/46.2a8456a9.js",
    "revision": "d0278f4fb9ec5c43c4a56788c455177a"
  },
  {
    "url": "assets/js/47.8f0c10fe.js",
    "revision": "7044e88e58c5da11b860bba2bb69ee4d"
  },
  {
    "url": "assets/js/48.42e94c07.js",
    "revision": "4c270a5fafebd8839556e81574b21a2e"
  },
  {
    "url": "assets/js/49.eb3d414a.js",
    "revision": "7e433c09bcf4b2e5fe2b11d401f436a2"
  },
  {
    "url": "assets/js/5.e59b8152.js",
    "revision": "4769419e897448a70413399877bc1af7"
  },
  {
    "url": "assets/js/50.6d2c1aa1.js",
    "revision": "9fa4179dff5c372dcdf3c64935f98be0"
  },
  {
    "url": "assets/js/51.1d2b5057.js",
    "revision": "f6a9748f55415e47bd8092a400c3ffd7"
  },
  {
    "url": "assets/js/52.8f86d887.js",
    "revision": "e991179366b1cd9c9388e6a4d722bbc7"
  },
  {
    "url": "assets/js/53.e365b44e.js",
    "revision": "77b9a469b28d35ab8404c6ac12845662"
  },
  {
    "url": "assets/js/54.84aafbb8.js",
    "revision": "e0e406c8864cdd15f91a9a82476a48e4"
  },
  {
    "url": "assets/js/55.88907288.js",
    "revision": "f9713c0ef47e455f9ab6850a7c14b046"
  },
  {
    "url": "assets/js/56.4d0693cd.js",
    "revision": "0abeccb42690c58d798e64e323f0e704"
  },
  {
    "url": "assets/js/57.172f9700.js",
    "revision": "e78459be8eda026b354acfc0adfffe1a"
  },
  {
    "url": "assets/js/58.806a2472.js",
    "revision": "6c7b6bec860738a7f5910432dc42c49a"
  },
  {
    "url": "assets/js/59.f034301b.js",
    "revision": "3a5d8a988389ad1728f33196fa01311c"
  },
  {
    "url": "assets/js/6.b3128395.js",
    "revision": "e5c87ff24b64a69a869a3d67dc6847b5"
  },
  {
    "url": "assets/js/60.5e91f772.js",
    "revision": "76aa0651b016acd5b2883f211d5d114e"
  },
  {
    "url": "assets/js/61.3c974024.js",
    "revision": "9e4f4625285c821aa4fd7078c4d567f9"
  },
  {
    "url": "assets/js/62.1d5359ce.js",
    "revision": "1af45c449f1656bd52f253666cee81f7"
  },
  {
    "url": "assets/js/63.d841a5aa.js",
    "revision": "8bac9b04364b2cd1626c166bc997560c"
  },
  {
    "url": "assets/js/64.66a8a36d.js",
    "revision": "a0d947b2b0bea7502fb42839ddf79b00"
  },
  {
    "url": "assets/js/65.77d1e7f7.js",
    "revision": "7209ca7e02af98f4f96ecf862f4bd896"
  },
  {
    "url": "assets/js/66.0f527328.js",
    "revision": "42ecea6ec6510875f51d4111faf47940"
  },
  {
    "url": "assets/js/67.9215d936.js",
    "revision": "000617d0717d3742278f5460ef76cb6e"
  },
  {
    "url": "assets/js/68.554e9458.js",
    "revision": "d63a31b3205609c5cd0c2b40d9341c6d"
  },
  {
    "url": "assets/js/69.d693d2e7.js",
    "revision": "e18bc8dd5c4d54f4c571ccbc53a4eb40"
  },
  {
    "url": "assets/js/7.af991ca9.js",
    "revision": "3b41c15deddcbe482361086fe68ff0c5"
  },
  {
    "url": "assets/js/70.eee6d0ab.js",
    "revision": "a1d9c8861b1b89f391652b96d72c432e"
  },
  {
    "url": "assets/js/71.b5e533c2.js",
    "revision": "7e7e60f60cd684151e6cd671c0784595"
  },
  {
    "url": "assets/js/72.062fb075.js",
    "revision": "6b3da9d30e5505bc22de58f404479d5a"
  },
  {
    "url": "assets/js/73.22a77480.js",
    "revision": "27def69c61c3b580e096edcbb5a28a18"
  },
  {
    "url": "assets/js/74.e32c5dc9.js",
    "revision": "aeee7f5176c28d513c87aadf45aabcf0"
  },
  {
    "url": "assets/js/75.5a32f0a8.js",
    "revision": "c2a35f0e94200594157afd7b16b25760"
  },
  {
    "url": "assets/js/76.498fe454.js",
    "revision": "87aaa90d2eb1a2bd26a90ff9a6ddf6bf"
  },
  {
    "url": "assets/js/77.e83a206a.js",
    "revision": "97efb8609b45a3bbf732571817816de2"
  },
  {
    "url": "assets/js/78.629dfe17.js",
    "revision": "005972682b62cff2c0766fd953fac7b2"
  },
  {
    "url": "assets/js/8.6fb67055.js",
    "revision": "f84036950022fd3598a4806ab5d2fc82"
  },
  {
    "url": "assets/js/9.c856af99.js",
    "revision": "ea0167e4457d09a35232af7a947cd43a"
  },
  {
    "url": "assets/js/app.503d9eb6.js",
    "revision": "97f94bdf2f7dea7d221f963cc74fa846"
  },
  {
    "url": "category/dailylife/index.html",
    "revision": "56bac1777ed81966d83c3efdd296b612"
  },
  {
    "url": "category/index.html",
    "revision": "a4ad23839275bf965dba24e4de60fa05"
  },
  {
    "url": "category/learn/index.html",
    "revision": "a176c5f4008febf413f3c4e8325f68a2"
  },
  {
    "url": "category/learn/page/2/index.html",
    "revision": "a229f83fed5b0e4a0aeee04e98594bbc"
  },
  {
    "url": "category/project/index.html",
    "revision": "ca707634e20df9488c35ba0006db6376"
  },
  {
    "url": "category/project/page/2/index.html",
    "revision": "f1d23b0760a4a8f3d2bfb3c55c4c8407"
  },
  {
    "url": "category/summary/index.html",
    "revision": "172515947262b03dd8bf88dc3108e0ea"
  },
  {
    "url": "category/summary/page/2/index.html",
    "revision": "a57f7a78242467af8721828ba7870dd0"
  },
  {
    "url": "category/summary/page/3/index.html",
    "revision": "7d869e7cb891a95f567f9909c6e4d348"
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
    "revision": "97458e8f6a189028258d088635c71f70"
  },
  {
    "url": "lib/components-helper.html",
    "revision": "80ac8e4fc58329eff90f0c0cc4ccaad0"
  },
  {
    "url": "lib/element-pro-components.html",
    "revision": "758a9e75abe374c1ab8f74ce64703ed7"
  },
  {
    "url": "lib/index.html",
    "revision": "379adcb6bc99fc2a0e0293374c83e18d"
  },
  {
    "url": "lib/m-less.html",
    "revision": "06c74d308f7916760a430a0fa855110d"
  },
  {
    "url": "lib/markdown-it-img-lazy.html",
    "revision": "c9bdcb152d4a601826cb855104e18b93"
  },
  {
    "url": "lib/page/2/index.html",
    "revision": "172a514181c93c7c95296e8a2b8ea8a3"
  },
  {
    "url": "lib/postcss-flex-alias.html",
    "revision": "b2501d29047f0e87adbd8d0ab86e0858"
  },
  {
    "url": "lib/postcss-propro.html",
    "revision": "ba46e299d5e3fc6866142146e4321f32"
  },
  {
    "url": "lib/tagged-operator.html",
    "revision": "5cff0a6aaf2ed57cc654051122037e2f"
  },
  {
    "url": "lib/usercss.html",
    "revision": "8f064d5743ef67c40947de40a39e4adf"
  },
  {
    "url": "lib/vue-lazy-loading.html",
    "revision": "d65149f80bb3cdb023dd5eab6cdcb143"
  },
  {
    "url": "lib/vuepress-plugin-blog-multidir.html",
    "revision": "9bb410ddeec98c306607bc67087d6128"
  },
  {
    "url": "lib/vuepress-plugin-img-lazy.html",
    "revision": "9494ed46633a4db8cd2f8c9e9a959d19"
  },
  {
    "url": "lib/vuepress-plugin-last-reading.html",
    "revision": "eeea5b7094b1c76406710e349f15629d"
  },
  {
    "url": "lib/vuepress-plugin-reading-progress.html",
    "revision": "056aad6a012bfbb770206fe5409ca283"
  },
  {
    "url": "lib/vuepress-theme-default-prefers-color-scheme.html",
    "revision": "d91c8db0a33524fa28771bc9d811f084"
  },
  {
    "url": "lib/vuepress-theme-ououe.html",
    "revision": "5c9e47dad3e6deffb718879800eaf831"
  },
  {
    "url": "posts/2017/09/12/js-summary/index.html",
    "revision": "0d3a31ae8ab70396428910232d5f701a"
  },
  {
    "url": "posts/2017/09/15/type-conversion/index.html",
    "revision": "7bc9572b3735e310e7acb4da3750fe4d"
  },
  {
    "url": "posts/2017/11/15/babel-polyfill/index.html",
    "revision": "9c61f701ef113f958fb319046037075f"
  },
  {
    "url": "posts/2017/12/03/bitwise-operators/index.html",
    "revision": "d1eca2f465f89c4d00c0f122df378514"
  },
  {
    "url": "posts/2018/01/08/strict/index.html",
    "revision": "3541af6396ed399caaedc89575b0f573"
  },
  {
    "url": "posts/2018/02/12/let-const/index.html",
    "revision": "842b00375db945491d43ff0b0061f3cf"
  },
  {
    "url": "posts/2018/02/13/deconstruction/index.html",
    "revision": "c3d637854f7d8ab78ade693db3c1512e"
  },
  {
    "url": "posts/2018/02/15/promise/index.html",
    "revision": "3fee834195025fae892785114b168cf8"
  },
  {
    "url": "posts/2018/02/17/arrow-function/index.html",
    "revision": "3f0daa35a525e9bd8913d1cbec444595"
  },
  {
    "url": "posts/2018/02/18/symbol/index.html",
    "revision": "11579c2baf2282233d5005d2cd5e4f64"
  },
  {
    "url": "posts/2018/02/19/class/index.html",
    "revision": "872839886f9c814f959ac90d6b712c1b"
  },
  {
    "url": "posts/2018/02/22/set/index.html",
    "revision": "ae420624f2b2daa0af92bd7727ab15e0"
  },
  {
    "url": "posts/2018/02/25/map/index.html",
    "revision": "2e3182ffef27d17727e9e5244680bb70"
  },
  {
    "url": "posts/2018/04/01/module/index.html",
    "revision": "5dc52ae18d55e31d2eab4d82f0b0f79c"
  },
  {
    "url": "posts/2018/07/22/css-problem/index.html",
    "revision": "187ccdb275ee7239be76c8cef1be40da"
  },
  {
    "url": "posts/2018/08/19/html-preload/index.html",
    "revision": "5bb6c3053639815b50a53f051aa10b3b"
  },
  {
    "url": "posts/2018/09/08/vue-setinterval/index.html",
    "revision": "f0caa614426c243c9624790f93f5fee0"
  },
  {
    "url": "posts/2018/10/01/svg/index.html",
    "revision": "504c4e4ef916a02c160ae38e8b9e50ab"
  },
  {
    "url": "posts/2018/11/08/nuxt/index.html",
    "revision": "f229fc01c674f68bd7a49c69d0a86886"
  },
  {
    "url": "posts/2018/12/20/ubuntu-nodejs/index.html",
    "revision": "73f3dc0101b77bc09c01d4a9a7180e1a"
  },
  {
    "url": "posts/2019/01/12/ios-input/index.html",
    "revision": "74b65a84bf1b2a19375fde1f284be264"
  },
  {
    "url": "posts/2019/01/17/minecraft-map/index.html",
    "revision": "cd8b2f8beb36b67911209534bf358de6"
  },
  {
    "url": "posts/2019/05/09/nth-child/index.html",
    "revision": "365eb49cf1fbd524654782a5fb96b094"
  },
  {
    "url": "posts/2019/05/11/object/index.html",
    "revision": "cb2e22e5a8fda56c42654a501c0ad2a6"
  },
  {
    "url": "posts/2019/05/15/connect-php/index.html",
    "revision": "f2eec289ca3aa96df10daa1f26f6cede"
  },
  {
    "url": "posts/2019/05/15/vue-filters/index.html",
    "revision": "1febd1d36d41307522b2787765d18953"
  },
  {
    "url": "posts/2019/05/17/vue-directive/index.html",
    "revision": "9c33ca91f103ef65ae916bc32e48ebfb"
  },
  {
    "url": "posts/2019/06/13/array/index.html",
    "revision": "e7f1180871c3a4a3a2c45b1c475716de"
  },
  {
    "url": "posts/2019/06/24/operators/index.html",
    "revision": "7e1b63d19eed2093cf3f652e83f9dd28"
  },
  {
    "url": "posts/2019/06/27/prefers-color-scheme/index.html",
    "revision": "62c52fd5c5f366a173029f6e72d15c5e"
  },
  {
    "url": "posts/2019/07/06/css4/index.html",
    "revision": "a20ba69ea3c58079bf30bda448aae556"
  },
  {
    "url": "posts/2019/07/07/vuepress/index.html",
    "revision": "171f1ba7de0b777b0960ad05a8ad3507"
  },
  {
    "url": "posts/2019/07/19/media-orientation/index.html",
    "revision": "f4e1b36b2c9e0206290770d84a283f9c"
  },
  {
    "url": "posts/2019/08/18/git/index.html",
    "revision": "635d91c39aba4a2146133624f6d1c0dc"
  },
  {
    "url": "posts/2019/10/25/lazy-loading/index.html",
    "revision": "335783f81980d537b8f0582c9bd3526f"
  },
  {
    "url": "posts/2019/10/26/backdrop-filter/index.html",
    "revision": "951619144a011758050c43bac132183f"
  },
  {
    "url": "posts/2019/12/06/tolocalestring/index.html",
    "revision": "c511a8ad65bb1fbcd0db526d781becb2"
  },
  {
    "url": "posts/2020/02/22/scan-code-mp/index.html",
    "revision": "416d3aff252b0e42ec6799858bda6ea1"
  },
  {
    "url": "posts/2020/05/30/mi5-pixel-experience/index.html",
    "revision": "673b116ce365ed3e92b8c29237f3e85c"
  },
  {
    "url": "posts/2020/08/15/typescript-threshold/index.html",
    "revision": "d94a5e6a783c5e45b349808a74f5b73b"
  },
  {
    "url": "posts/2020/08/20/typescript-advanced/index.html",
    "revision": "56befdec3717b44c3bd45eb50949c42e"
  },
  {
    "url": "posts/2020/09/10/pixel3-android11/index.html",
    "revision": "3244b66772acddda842d1d26c266d9c8"
  },
  {
    "url": "posts/2020/10/23/git-template-project/index.html",
    "revision": "9db542635848019fee3c3939a7b47a68"
  },
  {
    "url": "posts/2020/12/06/minecraft-map-v2/index.html",
    "revision": "68ac9857d30fd3d3b9b5d3826ea685a0"
  },
  {
    "url": "posts/2021/05/05/componennts-helper/index.html",
    "revision": "e6762710f103dc275e5a9f12e46ed985"
  },
  {
    "url": "posts/2021/06/05/vite-env/index.html",
    "revision": "153d0cfd28e9c303b3dff3f65996fa7a"
  },
  {
    "url": "posts/2021/06/26/form/index.html",
    "revision": "e21fa68d0798ba5f14aef2206e5563fe"
  },
  {
    "url": "posts/2021/10/24/pixel3-android12/index.html",
    "revision": "7fb2d9865b53af4549331650ec759af2"
  },
  {
    "url": "posts/2021/12/05/vue-composables-crud/index.html",
    "revision": "aeed203d78cf480f72ea7a80ea7400dc"
  },
  {
    "url": "posts/2022/03/13/createfetch/index.html",
    "revision": "3094255ec4165c69c6f7dc912e10cc08"
  },
  {
    "url": "posts/index.html",
    "revision": "64cdabb5ab6203b652096d5822123db4"
  },
  {
    "url": "posts/page/2/index.html",
    "revision": "cf38f78c2a660e99ff94fc28104f07da"
  },
  {
    "url": "posts/page/3/index.html",
    "revision": "30abf563c7a35ec76a79f2c5f463c860"
  },
  {
    "url": "posts/page/4/index.html",
    "revision": "f255d3a378137ea56765c3be2d13e340"
  },
  {
    "url": "posts/page/5/index.html",
    "revision": "b64b3e2a3c1b89ac23e4b61cab350099"
  },
  {
    "url": "tag/android/index.html",
    "revision": "c4a2a7a6d29139149b5f2d784cd44214"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "5dfc848ee852238ac362e2b40156dc47"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "1419c52896bd4864edcf8f4c969205d3"
  },
  {
    "url": "tag/css/index.html",
    "revision": "742606f15c6333983d9a02e55296eb35"
  },
  {
    "url": "tag/cssnext/index.html",
    "revision": "079c4bf5ff745804c151687fcc14ef89"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "c1556db81fdd207e614f3ee6c2cd9bbd"
  },
  {
    "url": "tag/env/index.html",
    "revision": "d0589650fdbc7e0a1220ecc5b7a99d3e"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "0389a1aa8589f16e277c28ecd0586e69"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8388bb900484266e402108ea17630871"
  },
  {
    "url": "tag/html/index.html",
    "revision": "20851ac3eb9e3c8814538e0f5b819ce2"
  },
  {
    "url": "tag/index.html",
    "revision": "43d012359ad9066c10e9115d64f7bc48"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d9a495313dcdbe47f0a7b33a67414337"
  },
  {
    "url": "tag/js/index.html",
    "revision": "26a0b908cad2f97ef74da0bde5b9154b"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "b7f10fee2edc75b56c3856f0da019cfe"
  },
  {
    "url": "tag/json/index.html",
    "revision": "272609190d7ed4579fd4a92bdc047d46"
  },
  {
    "url": "tag/less/index.html",
    "revision": "73bcb59fe8a3d354d6392dbe4e8bb91a"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "32576a7910b42a2666b4c880db79b88e"
  },
  {
    "url": "tag/minecraft/index.html",
    "revision": "19066e8b82b5a99b0f3efb235b5b0d8e"
  },
  {
    "url": "tag/mp/index.html",
    "revision": "cd6e8879d90a81c381cab9a42c8e26e6"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "c44a51660cb116487337bb310e14054a"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "056eff64e400fd9823cfac5cf71b019e"
  },
  {
    "url": "tag/operator/index.html",
    "revision": "9cc8b95a4715886d39246cbb7dafec77"
  },
  {
    "url": "tag/PixelExperience/index.html",
    "revision": "39f6763f072a09dedecf1141bbb03e50"
  },
  {
    "url": "tag/postcss/index.html",
    "revision": "16e9ad0b3fcaa7aff3528a7deedcc8be"
  },
  {
    "url": "tag/problem/index.html",
    "revision": "72f581fbf47862c3e1a530b5e80fa225"
  },
  {
    "url": "tag/strict/index.html",
    "revision": "7f0b18abd6b83fe72155ea2b124afc69"
  },
  {
    "url": "tag/svg/index.html",
    "revision": "477d50a50362707c6237ab984cd7f007"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "2c2bb697f045706d0b194360f32b0c67"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "a818194f026af6febc6f1e4b7e29d66f"
  },
  {
    "url": "tag/usercss/index.html",
    "revision": "57ab20761fdb61b126a8d6aeda1ea842"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "7ba182b571cc18dffface4fe44fc3039"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "09be8e50796224f88c98f278ad8bb762"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "43b5ab09560a8bb315d554e6366c1994"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "fb5b47073a98f770ff1f850b67e9e444"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "604dfad434de774201c73079097d75e6"
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
