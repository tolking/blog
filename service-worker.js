if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const t=s=>l(s,n),o={module:{uri:n},exports:a,require:t};e[n]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(r(...s),a)))}}define(["./workbox-4de3aa5f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"666624ae29877a09f111957b59b83a4c"},{url:"about/index.html",revision:"b1dbd4fdb89aa67d6c5747feb48b123d"},{url:"assets/about_index.md.4b767e44.js",revision:null},{url:"assets/about_index.md.4b767e44.lean.js",revision:null},{url:"assets/app.275f7854.js",revision:null},{url:"assets/category.md.21e46a10.js",revision:null},{url:"assets/category.md.21e46a10.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.79715039.js",revision:null},{url:"assets/chunks/framework.f6ec665f.js",revision:null},{url:"assets/chunks/theme.5e4ac781.js",revision:null},{url:"assets/chunks/virtual_pwa-register.100450c1.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.824c9f32.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"assets/index.md.b38c1141.js",revision:null},{url:"assets/index.md.b38c1141.lean.js",revision:null},{url:"assets/lib_components-helper.md.7a711e72.js",revision:null},{url:"assets/lib_components-helper.md.7a711e72.lean.js",revision:null},{url:"assets/lib_element-plus-nuxt.md.bce1a01a.js",revision:null},{url:"assets/lib_element-plus-nuxt.md.bce1a01a.lean.js",revision:null},{url:"assets/lib_element-pro-components.md.9fe302f2.js",revision:null},{url:"assets/lib_element-pro-components.md.9fe302f2.lean.js",revision:null},{url:"assets/lib_index.md.ceb1cbec.js",revision:null},{url:"assets/lib_index.md.ceb1cbec.lean.js",revision:null},{url:"assets/lib_m-less.md.51a3c414.js",revision:null},{url:"assets/lib_m-less.md.51a3c414.lean.js",revision:null},{url:"assets/lib_markdown-it-img-lazy.md.21dc754e.js",revision:null},{url:"assets/lib_markdown-it-img-lazy.md.21dc754e.lean.js",revision:null},{url:"assets/lib_page-2.md.fbe8e3ea.js",revision:null},{url:"assets/lib_page-2.md.fbe8e3ea.lean.js",revision:null},{url:"assets/lib_postcss-flex-alias.md.420c70fd.js",revision:null},{url:"assets/lib_postcss-flex-alias.md.420c70fd.lean.js",revision:null},{url:"assets/lib_postcss-propro.md.65d99e3a.js",revision:null},{url:"assets/lib_postcss-propro.md.65d99e3a.lean.js",revision:null},{url:"assets/lib_tagged-operator.md.e5d24f68.js",revision:null},{url:"assets/lib_tagged-operator.md.e5d24f68.lean.js",revision:null},{url:"assets/lib_usercss.md.c5251db0.js",revision:null},{url:"assets/lib_usercss.md.c5251db0.lean.js",revision:null},{url:"assets/lib_vant-nuxt.md.5212f1b6.js",revision:null},{url:"assets/lib_vant-nuxt.md.5212f1b6.lean.js",revision:null},{url:"assets/lib_vue-lazy-loading.md.27ca36d0.js",revision:null},{url:"assets/lib_vue-lazy-loading.md.27ca36d0.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-blog-multidir.md.945fc174.js",revision:null},{url:"assets/lib_vuepress-plugin-blog-multidir.md.945fc174.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-img-lazy.md.28cfd0a1.js",revision:null},{url:"assets/lib_vuepress-plugin-img-lazy.md.28cfd0a1.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-last-reading.md.40979ae7.js",revision:null},{url:"assets/lib_vuepress-plugin-last-reading.md.40979ae7.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-reading-progress.md.6ce7f633.js",revision:null},{url:"assets/lib_vuepress-plugin-reading-progress.md.6ce7f633.lean.js",revision:null},{url:"assets/lib_vuepress-theme-default-prefers-color-scheme.md.b14f7f74.js",revision:null},{url:"assets/lib_vuepress-theme-default-prefers-color-scheme.md.b14f7f74.lean.js",revision:null},{url:"assets/lib_vuepress-theme-ououe.md.28c84720.js",revision:null},{url:"assets/lib_vuepress-theme-ououe.md.28c84720.lean.js",revision:null},{url:"assets/posts_array.md.5606beef.js",revision:null},{url:"assets/posts_array.md.5606beef.lean.js",revision:null},{url:"assets/posts_arrow-function.md.543e475b.js",revision:null},{url:"assets/posts_arrow-function.md.543e475b.lean.js",revision:null},{url:"assets/posts_babel-polyfill.md.faff4f61.js",revision:null},{url:"assets/posts_babel-polyfill.md.faff4f61.lean.js",revision:null},{url:"assets/posts_backdrop-filter.md.25536b41.js",revision:null},{url:"assets/posts_backdrop-filter.md.25536b41.lean.js",revision:null},{url:"assets/posts_bitwise-operators.md.aee6e8df.js",revision:null},{url:"assets/posts_bitwise-operators.md.aee6e8df.lean.js",revision:null},{url:"assets/posts_class.md.78458797.js",revision:null},{url:"assets/posts_class.md.78458797.lean.js",revision:null},{url:"assets/posts_components-helper.md.8c3e74ef.js",revision:null},{url:"assets/posts_components-helper.md.8c3e74ef.lean.js",revision:null},{url:"assets/posts_connect-php.md.64e78f52.js",revision:null},{url:"assets/posts_connect-php.md.64e78f52.lean.js",revision:null},{url:"assets/posts_createFetch.md.5920fef6.js",revision:null},{url:"assets/posts_createFetch.md.5920fef6.lean.js",revision:null},{url:"assets/posts_css-problem.md.1d4c8c1a.js",revision:null},{url:"assets/posts_css-problem.md.1d4c8c1a.lean.js",revision:null},{url:"assets/posts_css4.md.3b687557.js",revision:null},{url:"assets/posts_css4.md.3b687557.lean.js",revision:null},{url:"assets/posts_deconstruction.md.b5d25c66.js",revision:null},{url:"assets/posts_deconstruction.md.b5d25c66.lean.js",revision:null},{url:"assets/posts_form.md.b447ce70.js",revision:null},{url:"assets/posts_form.md.b447ce70.lean.js",revision:null},{url:"assets/posts_git-template-project.md.22cd820a.js",revision:null},{url:"assets/posts_git-template-project.md.22cd820a.lean.js",revision:null},{url:"assets/posts_git.md.e3deae17.js",revision:null},{url:"assets/posts_git.md.e3deae17.lean.js",revision:null},{url:"assets/posts_html-preload.md.57343fb8.js",revision:null},{url:"assets/posts_html-preload.md.57343fb8.lean.js",revision:null},{url:"assets/posts_index.md.275f086a.js",revision:null},{url:"assets/posts_index.md.275f086a.lean.js",revision:null},{url:"assets/posts_ios-input.md.ee039a83.js",revision:null},{url:"assets/posts_ios-input.md.ee039a83.lean.js",revision:null},{url:"assets/posts_js-summary.md.707b1be3.js",revision:null},{url:"assets/posts_js-summary.md.707b1be3.lean.js",revision:null},{url:"assets/posts_lazy-loading.md.f1a63569.js",revision:null},{url:"assets/posts_lazy-loading.md.f1a63569.lean.js",revision:null},{url:"assets/posts_let-const.md.60c0678a.js",revision:null},{url:"assets/posts_let-const.md.60c0678a.lean.js",revision:null},{url:"assets/posts_map.md.5517977f.js",revision:null},{url:"assets/posts_map.md.5517977f.lean.js",revision:null},{url:"assets/posts_media-orientation.md.37d64da2.js",revision:null},{url:"assets/posts_media-orientation.md.37d64da2.lean.js",revision:null},{url:"assets/posts_mi5-pixel-experience.md.3f9e6939.js",revision:null},{url:"assets/posts_mi5-pixel-experience.md.3f9e6939.lean.js",revision:null},{url:"assets/posts_minecraft-map-v2.md.05eaee73.js",revision:null},{url:"assets/posts_minecraft-map-v2.md.05eaee73.lean.js",revision:null},{url:"assets/posts_minecraft-map.md.7acdeeef.js",revision:null},{url:"assets/posts_minecraft-map.md.7acdeeef.lean.js",revision:null},{url:"assets/posts_module.md.82784e2f.js",revision:null},{url:"assets/posts_module.md.82784e2f.lean.js",revision:null},{url:"assets/posts_nth-child.md.262279ca.js",revision:null},{url:"assets/posts_nth-child.md.262279ca.lean.js",revision:null},{url:"assets/posts_nuxt.md.ed697614.js",revision:null},{url:"assets/posts_nuxt.md.ed697614.lean.js",revision:null},{url:"assets/posts_object.md.faf2ccb7.js",revision:null},{url:"assets/posts_object.md.faf2ccb7.lean.js",revision:null},{url:"assets/posts_operators.md.c50ef3d6.js",revision:null},{url:"assets/posts_operators.md.c50ef3d6.lean.js",revision:null},{url:"assets/posts_page-2.md.92379227.js",revision:null},{url:"assets/posts_page-2.md.92379227.lean.js",revision:null},{url:"assets/posts_page-3.md.df5f49bf.js",revision:null},{url:"assets/posts_page-3.md.df5f49bf.lean.js",revision:null},{url:"assets/posts_page-4.md.f9c5a5f4.js",revision:null},{url:"assets/posts_page-4.md.f9c5a5f4.lean.js",revision:null},{url:"assets/posts_page-5.md.2e77c85e.js",revision:null},{url:"assets/posts_page-5.md.2e77c85e.lean.js",revision:null},{url:"assets/posts_pixel3-android11.md.dc7b9c75.js",revision:null},{url:"assets/posts_pixel3-android11.md.dc7b9c75.lean.js",revision:null},{url:"assets/posts_pixel3-android12.md.c2ef4438.js",revision:null},{url:"assets/posts_pixel3-android12.md.c2ef4438.lean.js",revision:null},{url:"assets/posts_prefers-color-scheme.md.425dc418.js",revision:null},{url:"assets/posts_prefers-color-scheme.md.425dc418.lean.js",revision:null},{url:"assets/posts_promise.md.3ab6132e.js",revision:null},{url:"assets/posts_promise.md.3ab6132e.lean.js",revision:null},{url:"assets/posts_scan-code-mp.md.5ab3f397.js",revision:null},{url:"assets/posts_scan-code-mp.md.5ab3f397.lean.js",revision:null},{url:"assets/posts_set.md.88b45931.js",revision:null},{url:"assets/posts_set.md.88b45931.lean.js",revision:null},{url:"assets/posts_strict.md.413f29d1.js",revision:null},{url:"assets/posts_strict.md.413f29d1.lean.js",revision:null},{url:"assets/posts_svg.md.05aadb61.js",revision:null},{url:"assets/posts_svg.md.05aadb61.lean.js",revision:null},{url:"assets/posts_symbol.md.734affa7.js",revision:null},{url:"assets/posts_symbol.md.734affa7.lean.js",revision:null},{url:"assets/posts_toLocaleString.md.69e79e44.js",revision:null},{url:"assets/posts_toLocaleString.md.69e79e44.lean.js",revision:null},{url:"assets/posts_type-conversion.md.20a93a76.js",revision:null},{url:"assets/posts_type-conversion.md.20a93a76.lean.js",revision:null},{url:"assets/posts_typescript-advanced.md.99da78eb.js",revision:null},{url:"assets/posts_typescript-advanced.md.99da78eb.lean.js",revision:null},{url:"assets/posts_typescript-object-deep-path.md.64e7a27a.js",revision:null},{url:"assets/posts_typescript-object-deep-path.md.64e7a27a.lean.js",revision:null},{url:"assets/posts_typescript-threshold.md.93a061a9.js",revision:null},{url:"assets/posts_typescript-threshold.md.93a061a9.lean.js",revision:null},{url:"assets/posts_ubuntu-nodejs.md.6a393ea2.js",revision:null},{url:"assets/posts_ubuntu-nodejs.md.6a393ea2.lean.js",revision:null},{url:"assets/posts_unregister-service-worker.md.3f26adce.js",revision:null},{url:"assets/posts_unregister-service-worker.md.3f26adce.lean.js",revision:null},{url:"assets/posts_vite-env.md.5d7a9200.js",revision:null},{url:"assets/posts_vite-env.md.5d7a9200.lean.js",revision:null},{url:"assets/posts_vue-composables-crud.md.2e90efdc.js",revision:null},{url:"assets/posts_vue-composables-crud.md.2e90efdc.lean.js",revision:null},{url:"assets/posts_vue-directive.md.7a966b44.js",revision:null},{url:"assets/posts_vue-directive.md.7a966b44.lean.js",revision:null},{url:"assets/posts_vue-filters.md.eafd4eee.js",revision:null},{url:"assets/posts_vue-filters.md.eafd4eee.lean.js",revision:null},{url:"assets/posts_vue-setInterval.md.1e3742ee.js",revision:null},{url:"assets/posts_vue-setInterval.md.1e3742ee.lean.js",revision:null},{url:"assets/posts_vuepress.md.67340c95.js",revision:null},{url:"assets/posts_vuepress.md.67340c95.lean.js",revision:null},{url:"assets/style.154d0090.css",revision:null},{url:"assets/tag.md.52e081b3.js",revision:null},{url:"assets/tag.md.52e081b3.lean.js",revision:null},{url:"category.html",revision:"457b949b879d0fa394d2966dc88d53fa"},{url:"index.html",revision:"bc7b9232e3ef3ea9901574616add9040"},{url:"lib/components-helper.html",revision:"0313d710c5b32bd2a7573b00c8e3d274"},{url:"lib/element-plus-nuxt.html",revision:"9df893d750221efbf2eb3588c5c0075a"},{url:"lib/element-pro-components.html",revision:"bfc9bed2426d3a451b37e76fe417f8d9"},{url:"lib/index.html",revision:"6bf0f7bcb4a91d4bd7c97f7b8366fbc3"},{url:"lib/m-less.html",revision:"e94c21deeea865dbd33da5009f9617c2"},{url:"lib/markdown-it-img-lazy.html",revision:"781a767fb21dd0a48d017535d601d399"},{url:"lib/page-2.html",revision:"2ac24753e2da2a3ec5841579a183b0e3"},{url:"lib/postcss-flex-alias.html",revision:"e2b0e6c0272aabe40964ef4e3e3b4886"},{url:"lib/postcss-propro.html",revision:"93e87a8b7564d8b78e5c66b4fec6c129"},{url:"lib/tagged-operator.html",revision:"6530a0e03962fe525bbbad2288345330"},{url:"lib/usercss.html",revision:"fabf2db5f4bff2bd26f9241b9d59479c"},{url:"lib/vant-nuxt.html",revision:"b67437af7d93f90526947efc49884a60"},{url:"lib/vue-lazy-loading.html",revision:"cf5822a01ce1f3cb52efbaeefb685397"},{url:"lib/vuepress-plugin-blog-multidir.html",revision:"76577a711e9e74aadaf40676ca1498bf"},{url:"lib/vuepress-plugin-img-lazy.html",revision:"55915f266557799a2b62a3627462d6a8"},{url:"lib/vuepress-plugin-last-reading.html",revision:"ad35238dff2e84a6313e83efca924e28"},{url:"lib/vuepress-plugin-reading-progress.html",revision:"22ff4cba03aac7f6f202873d60e4c9c7"},{url:"lib/vuepress-theme-default-prefers-color-scheme.html",revision:"4376f128b0f3693034e7549dc3e20056"},{url:"lib/vuepress-theme-ououe.html",revision:"47e00f3f7aa811dd1a1aaca3c76d2f7d"},{url:"posts/array.html",revision:"30b5907c0020f1ced3aa0863f6443beb"},{url:"posts/arrow-function.html",revision:"f0653896e2746669fc872eb941b35dbc"},{url:"posts/babel-polyfill.html",revision:"a90538a729530d25ddce71290bb0eaf0"},{url:"posts/backdrop-filter.html",revision:"558ccc4511b6d238c29c29d38dfd1e30"},{url:"posts/bitwise-operators.html",revision:"916da9ad6b0ed632f84f03b10ffd12b9"},{url:"posts/class.html",revision:"0f72a31c9c42294280ecc9c96d52c3f3"},{url:"posts/components-helper.html",revision:"83601bb64db184cca0435bc17e2b4812"},{url:"posts/connect-php.html",revision:"911ac4f697c97899e272a7c83fc57c9f"},{url:"posts/createFetch.html",revision:"966a6ad4a57512936fbef880f7bfd380"},{url:"posts/css-problem.html",revision:"6b17e0df028c41d6be668a949861e876"},{url:"posts/css4.html",revision:"556a81aa8ba8a4413a6f7a0edd2048bb"},{url:"posts/deconstruction.html",revision:"f3e9244204ebdbd01738b7d7b24f9f5d"},{url:"posts/form.html",revision:"3569f8179d0d77f28593c2fbe3380457"},{url:"posts/git-template-project.html",revision:"193f564128e2924c5e5e75d0d10460d7"},{url:"posts/git.html",revision:"36a5301062164af75fe74cc55d2da0b3"},{url:"posts/html-preload.html",revision:"79aef7f616f938193250ff9da313793d"},{url:"posts/index.html",revision:"f534ae8c1a27e6d5f468c08bd28cf1a6"},{url:"posts/ios-input.html",revision:"78310b1cf01e2ca8c04b419684acdb3c"},{url:"posts/js-summary.html",revision:"ef83463557b34425fe21714dac04b811"},{url:"posts/lazy-loading.html",revision:"a4b6ef6c72b87a72e1c4d628aa8db0a1"},{url:"posts/let-const.html",revision:"3c8ec10719646a9bc04eceecb53e6f4b"},{url:"posts/map.html",revision:"e763e23268eb6387eebf0556a32dfeaa"},{url:"posts/media-orientation.html",revision:"1fddaf399dbc2169847a1c19c10ff81a"},{url:"posts/mi5-pixel-experience.html",revision:"a6713f022d8fb67fc41eb89f9a661a3e"},{url:"posts/minecraft-map-v2.html",revision:"ad17d9aaa32012b64d87528853ce0fbd"},{url:"posts/minecraft-map.html",revision:"7eda0ffd3c93b18755a111eeb80a7a4e"},{url:"posts/module.html",revision:"b4dda070c3a2f1a40ab502b417171742"},{url:"posts/nth-child.html",revision:"24c1fa42530724f54f0dd3efc2cd3151"},{url:"posts/nuxt.html",revision:"4bc80c9c70f8fde35b3906f92b05920b"},{url:"posts/object.html",revision:"a2bee042a990d6efc35e26fce1a371a8"},{url:"posts/operators.html",revision:"e69a9fd901dc12c0f3e1a3f06d4c3c74"},{url:"posts/page-2.html",revision:"565553c252ea1915aa65b1801e8b6cc8"},{url:"posts/page-3.html",revision:"96dd5a55d7119a4b7fb4fa055d50ef5e"},{url:"posts/page-4.html",revision:"a198dd8e4062fa3904920543d965235d"},{url:"posts/page-5.html",revision:"3dc00b3af8846454defa82a7ce349f2f"},{url:"posts/pixel3-android11.html",revision:"78cd873884d9c396f141c462d5299df7"},{url:"posts/pixel3-android12.html",revision:"b0f6b0c4bd7bfd15bfb31b1dc42b1d6c"},{url:"posts/prefers-color-scheme.html",revision:"1db770080df14421f70fc2d8c715a930"},{url:"posts/promise.html",revision:"a448f918b5be5287953cf9045219abc0"},{url:"posts/scan-code-mp.html",revision:"1782df87ef2943bbfbb67311d511d081"},{url:"posts/set.html",revision:"5511453f9d5d5bdbe7953718d92b56c5"},{url:"posts/strict.html",revision:"4ff3493c1b3e0260d27cde1338e0459c"},{url:"posts/svg.html",revision:"e44772a3c88b312b0f2a00d068b3c87d"},{url:"posts/symbol.html",revision:"2faf7223b6b12725e659452e73e2942e"},{url:"posts/toLocaleString.html",revision:"b43c2dedf74409b6918672c2c54b8174"},{url:"posts/type-conversion.html",revision:"5b419d8a1e3ae9da51a8a5682aeb09ed"},{url:"posts/typescript-advanced.html",revision:"7d99c37b4f86369e96922917d3347d25"},{url:"posts/typescript-object-deep-path.html",revision:"4a8f7fe252006dd42abd2e78fc317c73"},{url:"posts/typescript-threshold.html",revision:"ff3027fde65d6771828db01333964a04"},{url:"posts/ubuntu-nodejs.html",revision:"34f2b05cbdf7a899d323d5219c872862"},{url:"posts/unregister-service-worker.html",revision:"9b05ad2cffc6e671f75cac16c4d903cd"},{url:"posts/vite-env.html",revision:"7077fc848686ea4108eb23f229714f34"},{url:"posts/vue-composables-crud.html",revision:"41bb51bc29d270af78cbf882f88b4acf"},{url:"posts/vue-directive.html",revision:"c6deb1038265fc1d6bee8d1662fb8f96"},{url:"posts/vue-filters.html",revision:"9996091264b1104d7dd33b4d92d62dd8"},{url:"posts/vue-setInterval.html",revision:"14499ab7038ba704f738bf3beda0504c"},{url:"posts/vuepress.html",revision:"a4ffb2ea6b677fce976607aae9c059f3"},{url:"tag.html",revision:"967ccb47089140c7c84562f7b06b50ac"},{url:"img/homescreen48.png",revision:"3c7bff05f9ccb5d7f788b080648562c5"},{url:"img/homescreen72.png",revision:"c9847868ec5458ed89109e5dfd4be674"},{url:"img/homescreen96.png",revision:"a3c21aee9bf2af416a3d79b84f30facf"},{url:"img/homescreen144.png",revision:"9f3cba23df82ada92decb31a713a0efc"},{url:"img/homescreen168.png",revision:"3842faf886bda5ead9605d4fdfa573bf"},{url:"img/homescreen192.png",revision:"3e15b814224590b0bee172c355714be6"},{url:"manifest.json",revision:"a04634028e1300669efbbe8d121f8abe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
