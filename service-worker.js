if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>l(s,n),a={module:{uri:n},exports:t,require:o};e[n]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-cd63daf5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"727a79c710b5dc0eecdbdadba2c5640f"},{url:"about/index.html",revision:"82b9ca6562046a9702f0294dcc726896"},{url:"assets/about_index.md.BXBe2Evr.js",revision:null},{url:"assets/about_index.md.BXBe2Evr.lean.js",revision:null},{url:"assets/app.PQCIDqWJ.js",revision:null},{url:"assets/category.md.NwRstKns.js",revision:null},{url:"assets/category.md.NwRstKns.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.CPJStCpu.js",revision:null},{url:"assets/chunks/framework.OjRHjQ2q.js",revision:null},{url:"assets/chunks/theme.cWg4Lwzb.js",revision:null},{url:"assets/chunks/virtual_pwa-register.H_B8bsnW.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.YAUwdr3u.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"assets/index.md.EU_4URv5.js",revision:null},{url:"assets/index.md.EU_4URv5.lean.js",revision:null},{url:"assets/lib_components-helper.md.Ly1VGsNq.js",revision:null},{url:"assets/lib_components-helper.md.Ly1VGsNq.lean.js",revision:null},{url:"assets/lib_element-plus-nuxt.md.0RrxXm00.js",revision:null},{url:"assets/lib_element-plus-nuxt.md.0RrxXm00.lean.js",revision:null},{url:"assets/lib_element-pro-components.md.1vdbep0C.js",revision:null},{url:"assets/lib_element-pro-components.md.1vdbep0C.lean.js",revision:null},{url:"assets/lib_index.md.Yi3NN-dE.js",revision:null},{url:"assets/lib_index.md.Yi3NN-dE.lean.js",revision:null},{url:"assets/lib_m-less.md.gJM6bkGi.js",revision:null},{url:"assets/lib_m-less.md.gJM6bkGi.lean.js",revision:null},{url:"assets/lib_markdown-it-img-lazy.md.IRY_tw4k.js",revision:null},{url:"assets/lib_markdown-it-img-lazy.md.IRY_tw4k.lean.js",revision:null},{url:"assets/lib_page-2.md.oOnlJEBW.js",revision:null},{url:"assets/lib_page-2.md.oOnlJEBW.lean.js",revision:null},{url:"assets/lib_postcss-flex-alias.md.fJgPry83.js",revision:null},{url:"assets/lib_postcss-flex-alias.md.fJgPry83.lean.js",revision:null},{url:"assets/lib_postcss-propro.md.3seXVw0I.js",revision:null},{url:"assets/lib_postcss-propro.md.3seXVw0I.lean.js",revision:null},{url:"assets/lib_tagged-operator.md.O2vKyHV4.js",revision:null},{url:"assets/lib_tagged-operator.md.O2vKyHV4.lean.js",revision:null},{url:"assets/lib_usercss.md.BebEEX9k.js",revision:null},{url:"assets/lib_usercss.md.BebEEX9k.lean.js",revision:null},{url:"assets/lib_vant-nuxt.md.VwOd-m4B.js",revision:null},{url:"assets/lib_vant-nuxt.md.VwOd-m4B.lean.js",revision:null},{url:"assets/lib_vitepress-theme-ououe.md.0SDFoEVE.js",revision:null},{url:"assets/lib_vitepress-theme-ououe.md.0SDFoEVE.lean.js",revision:null},{url:"assets/lib_vue-lazy-loading.md.5L31C5TN.js",revision:null},{url:"assets/lib_vue-lazy-loading.md.5L31C5TN.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-blog-multidir.md.b-jNzotO.js",revision:null},{url:"assets/lib_vuepress-plugin-blog-multidir.md.b-jNzotO.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-img-lazy.md.FZuZjPkZ.js",revision:null},{url:"assets/lib_vuepress-plugin-img-lazy.md.FZuZjPkZ.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-last-reading.md.HgKahKw6.js",revision:null},{url:"assets/lib_vuepress-plugin-last-reading.md.HgKahKw6.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-reading-progress.md.AVFVj1M-.js",revision:null},{url:"assets/lib_vuepress-plugin-reading-progress.md.AVFVj1M-.lean.js",revision:null},{url:"assets/lib_vuepress-theme-default-prefers-color-scheme.md.Z_60Pnsk.js",revision:null},{url:"assets/lib_vuepress-theme-default-prefers-color-scheme.md.Z_60Pnsk.lean.js",revision:null},{url:"assets/lib_vuepress-theme-ououe.md.YT9nzxgQ.js",revision:null},{url:"assets/lib_vuepress-theme-ououe.md.YT9nzxgQ.lean.js",revision:null},{url:"assets/posts_array.md.0AXgTwsl.js",revision:null},{url:"assets/posts_array.md.0AXgTwsl.lean.js",revision:null},{url:"assets/posts_arrow-function.md.eaRwWCn8.js",revision:null},{url:"assets/posts_arrow-function.md.eaRwWCn8.lean.js",revision:null},{url:"assets/posts_babel-polyfill.md.QiNYWeAb.js",revision:null},{url:"assets/posts_babel-polyfill.md.QiNYWeAb.lean.js",revision:null},{url:"assets/posts_backdrop-filter.md.5Aqiv8wX.js",revision:null},{url:"assets/posts_backdrop-filter.md.5Aqiv8wX.lean.js",revision:null},{url:"assets/posts_bitwise-operators.md.uIdDXaqa.js",revision:null},{url:"assets/posts_bitwise-operators.md.uIdDXaqa.lean.js",revision:null},{url:"assets/posts_class.md.P9siz8Dq.js",revision:null},{url:"assets/posts_class.md.P9siz8Dq.lean.js",revision:null},{url:"assets/posts_components-helper.md.VLKOhMAH.js",revision:null},{url:"assets/posts_components-helper.md.VLKOhMAH.lean.js",revision:null},{url:"assets/posts_connect-php.md.KyPusKvA.js",revision:null},{url:"assets/posts_connect-php.md.KyPusKvA.lean.js",revision:null},{url:"assets/posts_createFetch.md.Z3OTlBDV.js",revision:null},{url:"assets/posts_createFetch.md.Z3OTlBDV.lean.js",revision:null},{url:"assets/posts_css-problem.md.zigwRlZz.js",revision:null},{url:"assets/posts_css-problem.md.zigwRlZz.lean.js",revision:null},{url:"assets/posts_css4.md.O2W9RcA5.js",revision:null},{url:"assets/posts_css4.md.O2W9RcA5.lean.js",revision:null},{url:"assets/posts_deconstruction.md.2U7jxvAs.js",revision:null},{url:"assets/posts_deconstruction.md.2U7jxvAs.lean.js",revision:null},{url:"assets/posts_form.md.yid_byw4.js",revision:null},{url:"assets/posts_form.md.yid_byw4.lean.js",revision:null},{url:"assets/posts_git-template-project.md.gE5eKKXv.js",revision:null},{url:"assets/posts_git-template-project.md.gE5eKKXv.lean.js",revision:null},{url:"assets/posts_git.md.XVZtUNEn.js",revision:null},{url:"assets/posts_git.md.XVZtUNEn.lean.js",revision:null},{url:"assets/posts_html-preload.md._TmsI9qU.js",revision:null},{url:"assets/posts_html-preload.md._TmsI9qU.lean.js",revision:null},{url:"assets/posts_index.md.CBBYiSk9.js",revision:null},{url:"assets/posts_index.md.CBBYiSk9.lean.js",revision:null},{url:"assets/posts_ios-input.md.K-gKftlp.js",revision:null},{url:"assets/posts_ios-input.md.K-gKftlp.lean.js",revision:null},{url:"assets/posts_js-summary.md.CZiECLaW.js",revision:null},{url:"assets/posts_js-summary.md.CZiECLaW.lean.js",revision:null},{url:"assets/posts_lazy-loading.md.rTPwF26q.js",revision:null},{url:"assets/posts_lazy-loading.md.rTPwF26q.lean.js",revision:null},{url:"assets/posts_let-const.md.IGSFM4gd.js",revision:null},{url:"assets/posts_let-const.md.IGSFM4gd.lean.js",revision:null},{url:"assets/posts_map.md.sk3p3NSu.js",revision:null},{url:"assets/posts_map.md.sk3p3NSu.lean.js",revision:null},{url:"assets/posts_media-orientation.md.1lxU6qKv.js",revision:null},{url:"assets/posts_media-orientation.md.1lxU6qKv.lean.js",revision:null},{url:"assets/posts_mi5-pixel-experience.md.wFKZveWA.js",revision:null},{url:"assets/posts_mi5-pixel-experience.md.wFKZveWA.lean.js",revision:null},{url:"assets/posts_minecraft-map-v2.md.9NlZ78q1.js",revision:null},{url:"assets/posts_minecraft-map-v2.md.9NlZ78q1.lean.js",revision:null},{url:"assets/posts_minecraft-map.md.RS5wPSpc.js",revision:null},{url:"assets/posts_minecraft-map.md.RS5wPSpc.lean.js",revision:null},{url:"assets/posts_module.md.C5ybkGkZ.js",revision:null},{url:"assets/posts_module.md.C5ybkGkZ.lean.js",revision:null},{url:"assets/posts_nth-child.md.avWZUcRA.js",revision:null},{url:"assets/posts_nth-child.md.avWZUcRA.lean.js",revision:null},{url:"assets/posts_nuxt.md.JLAVkId-.js",revision:null},{url:"assets/posts_nuxt.md.JLAVkId-.lean.js",revision:null},{url:"assets/posts_object.md.fkkxIIw_.js",revision:null},{url:"assets/posts_object.md.fkkxIIw_.lean.js",revision:null},{url:"assets/posts_operators.md.3Ne04xfR.js",revision:null},{url:"assets/posts_operators.md.3Ne04xfR.lean.js",revision:null},{url:"assets/posts_page-2.md.D8qak9ES.js",revision:null},{url:"assets/posts_page-2.md.D8qak9ES.lean.js",revision:null},{url:"assets/posts_page-3.md.eM2qGPmw.js",revision:null},{url:"assets/posts_page-3.md.eM2qGPmw.lean.js",revision:null},{url:"assets/posts_page-4.md.x0NJCAoT.js",revision:null},{url:"assets/posts_page-4.md.x0NJCAoT.lean.js",revision:null},{url:"assets/posts_page-5.md.Z7j1xXKu.js",revision:null},{url:"assets/posts_page-5.md.Z7j1xXKu.lean.js",revision:null},{url:"assets/posts_pixel3-android11.md.2roaWK03.js",revision:null},{url:"assets/posts_pixel3-android11.md.2roaWK03.lean.js",revision:null},{url:"assets/posts_pixel3-android12.md.K5_38Cnr.js",revision:null},{url:"assets/posts_pixel3-android12.md.K5_38Cnr.lean.js",revision:null},{url:"assets/posts_prefers-color-scheme.md.tu347p9U.js",revision:null},{url:"assets/posts_prefers-color-scheme.md.tu347p9U.lean.js",revision:null},{url:"assets/posts_promise.md.3unbhysc.js",revision:null},{url:"assets/posts_promise.md.3unbhysc.lean.js",revision:null},{url:"assets/posts_scan-code-mp.md.BVjROyN2.js",revision:null},{url:"assets/posts_scan-code-mp.md.BVjROyN2.lean.js",revision:null},{url:"assets/posts_set.md.PD6q1_fI.js",revision:null},{url:"assets/posts_set.md.PD6q1_fI.lean.js",revision:null},{url:"assets/posts_strict.md.7kSh791o.js",revision:null},{url:"assets/posts_strict.md.7kSh791o.lean.js",revision:null},{url:"assets/posts_svg.md.RIOt4VZj.js",revision:null},{url:"assets/posts_svg.md.RIOt4VZj.lean.js",revision:null},{url:"assets/posts_symbol.md.aaymk6WM.js",revision:null},{url:"assets/posts_symbol.md.aaymk6WM.lean.js",revision:null},{url:"assets/posts_toLocaleString.md.BEyZNhRG.js",revision:null},{url:"assets/posts_toLocaleString.md.BEyZNhRG.lean.js",revision:null},{url:"assets/posts_type-conversion.md.F0t7xeNq.js",revision:null},{url:"assets/posts_type-conversion.md.F0t7xeNq.lean.js",revision:null},{url:"assets/posts_typescript-advanced.md.m5rWLhZq.js",revision:null},{url:"assets/posts_typescript-advanced.md.m5rWLhZq.lean.js",revision:null},{url:"assets/posts_typescript-object-deep-path.md.GgheGakq.js",revision:null},{url:"assets/posts_typescript-object-deep-path.md.GgheGakq.lean.js",revision:null},{url:"assets/posts_typescript-threshold.md.juS84MCF.js",revision:null},{url:"assets/posts_typescript-threshold.md.juS84MCF.lean.js",revision:null},{url:"assets/posts_ubuntu-nodejs.md.lW2uteAu.js",revision:null},{url:"assets/posts_ubuntu-nodejs.md.lW2uteAu.lean.js",revision:null},{url:"assets/posts_unregister-service-worker.md.QPcUcn86.js",revision:null},{url:"assets/posts_unregister-service-worker.md.QPcUcn86.lean.js",revision:null},{url:"assets/posts_vite-env.md.Pc2KZoa5.js",revision:null},{url:"assets/posts_vite-env.md.Pc2KZoa5.lean.js",revision:null},{url:"assets/posts_vue-composables-crud.md.178Qd5Bb.js",revision:null},{url:"assets/posts_vue-composables-crud.md.178Qd5Bb.lean.js",revision:null},{url:"assets/posts_vue-directive.md.ouqcXR8Y.js",revision:null},{url:"assets/posts_vue-directive.md.ouqcXR8Y.lean.js",revision:null},{url:"assets/posts_vue-filters.md.G79afEdX.js",revision:null},{url:"assets/posts_vue-filters.md.G79afEdX.lean.js",revision:null},{url:"assets/posts_vue-setInterval.md.M9K0ZzIU.js",revision:null},{url:"assets/posts_vue-setInterval.md.M9K0ZzIU.lean.js",revision:null},{url:"assets/posts_vuepress.md.PuV3OodT.js",revision:null},{url:"assets/posts_vuepress.md.PuV3OodT.lean.js",revision:null},{url:"assets/style.PpTLv_nt.css",revision:null},{url:"assets/tag.md.US6BaUoN.js",revision:null},{url:"assets/tag.md.US6BaUoN.lean.js",revision:null},{url:"category.html",revision:"fcbca1e12205fb10297e0e996de40439"},{url:"index.html",revision:"cf2c45cc2f3b554977a80717407cbfb9"},{url:"lib/components-helper.html",revision:"5d8f8b96d95b24a1c8daef3333b99f45"},{url:"lib/element-plus-nuxt.html",revision:"0e3417cf6c7a05f4a893a39c911addb2"},{url:"lib/element-pro-components.html",revision:"0649518909155f3664071247562d2851"},{url:"lib/index.html",revision:"4b33d28c9357063f55ad276fcab3bf48"},{url:"lib/m-less.html",revision:"301171c3b2733c3cc5440aa30397871b"},{url:"lib/markdown-it-img-lazy.html",revision:"8cda4da8035ead8c377776f1c43246ca"},{url:"lib/page-2.html",revision:"62397b819a486efd5c9a546be0ea59df"},{url:"lib/postcss-flex-alias.html",revision:"67cc3154ae65ef50d5180aefc0ba339b"},{url:"lib/postcss-propro.html",revision:"e1fabd9f99c282bef44cef4690712c78"},{url:"lib/tagged-operator.html",revision:"a95a4ad9c7da0e1699b6a53f05715288"},{url:"lib/usercss.html",revision:"78d00910a532aaa58cd79b050296a261"},{url:"lib/vant-nuxt.html",revision:"e0cc178d48cba9726dac4d6161b2dca0"},{url:"lib/vitepress-theme-ououe.html",revision:"541bf5be939a60f447b8b02094d41508"},{url:"lib/vue-lazy-loading.html",revision:"8c5b22540dddbd62b2f5ceb29cab87b4"},{url:"lib/vuepress-plugin-blog-multidir.html",revision:"a8198f6fc77889a9e70154950dbc59fb"},{url:"lib/vuepress-plugin-img-lazy.html",revision:"4e6af96fc96a7f3cfb4c6462cecd67ba"},{url:"lib/vuepress-plugin-last-reading.html",revision:"dc84c8ea05ae0375446f7b5b509a92fe"},{url:"lib/vuepress-plugin-reading-progress.html",revision:"3ac78a0fbd5ca9be90353b9240f6b39c"},{url:"lib/vuepress-theme-default-prefers-color-scheme.html",revision:"b424c3de41ee5fa8ffc90c039f57eeff"},{url:"lib/vuepress-theme-ououe.html",revision:"dae0ce7dea726aee5ca16b549cf1c8aa"},{url:"posts/array.html",revision:"1410dd6bfbbd60808c468dbd981412aa"},{url:"posts/arrow-function.html",revision:"bb0457aa0ad9f5d88c9de64b710ae09f"},{url:"posts/babel-polyfill.html",revision:"d44891f7be1e1ef2037ff4a8cb094680"},{url:"posts/backdrop-filter.html",revision:"ec4617a51505b77ec5a7c5b3bd0f0d2c"},{url:"posts/bitwise-operators.html",revision:"491f24a1b9971919e06cc1eaf6c5e05a"},{url:"posts/class.html",revision:"d51c3e71e050d10361938ffcf1939341"},{url:"posts/components-helper.html",revision:"c53f8796be506c2f640330e65daefc49"},{url:"posts/connect-php.html",revision:"1a57045cc596f2418bb23a3b1369acd5"},{url:"posts/createFetch.html",revision:"e80175ce2ee2f6c85ae3481146c013bf"},{url:"posts/css-problem.html",revision:"afd4496ef4c9ac5ec023905d7976cbdd"},{url:"posts/css4.html",revision:"824a5370dca7ec8a6880978e787888a1"},{url:"posts/deconstruction.html",revision:"aef31cbac2ab00ad2997ab48737e9725"},{url:"posts/form.html",revision:"ba10184c83c89b549200d8f9aa5d9bbf"},{url:"posts/git-template-project.html",revision:"462ad4d928b5fdc974414e75b75dc82f"},{url:"posts/git.html",revision:"e63caea334b791dc9f1666a393ec9f58"},{url:"posts/html-preload.html",revision:"2fb35e1e35c0f85823903015378ec92e"},{url:"posts/index.html",revision:"c14e511c0c70e86669a55ddeb1d4b150"},{url:"posts/ios-input.html",revision:"7475eeb5114e4a786c2058c03b3d059c"},{url:"posts/js-summary.html",revision:"b02f408baa3f3e07165cc4c162a34137"},{url:"posts/lazy-loading.html",revision:"325ad715602799dfbe077d96907ba48b"},{url:"posts/let-const.html",revision:"de43bff75b92708febea7bee90fcadae"},{url:"posts/map.html",revision:"304e305b3e72020dd9e2c5821499e7ca"},{url:"posts/media-orientation.html",revision:"a962481484c8b4018572a4cd5c451de0"},{url:"posts/mi5-pixel-experience.html",revision:"b9e836bdff6f2fc16500060f06284f07"},{url:"posts/minecraft-map-v2.html",revision:"dbc7db80e67fe05de4cad29b961332b1"},{url:"posts/minecraft-map.html",revision:"a84993b46b80b04d8d32b5a9a2c406c5"},{url:"posts/module.html",revision:"11f3e81f5860beb24b9381ab313340f7"},{url:"posts/nth-child.html",revision:"168318730aab95e94d9e5619c4b9c2ad"},{url:"posts/nuxt.html",revision:"c5a20819ce438243cdba1ab38937bfbf"},{url:"posts/object.html",revision:"1918bd69135d9e6eceb4a22603c61e5a"},{url:"posts/operators.html",revision:"9de5b5aa667dbaca78703cf5dd25bb10"},{url:"posts/page-2.html",revision:"577de77200877460c632c5ff61dc464b"},{url:"posts/page-3.html",revision:"e95bfb33677d8eedf094ee6e69465084"},{url:"posts/page-4.html",revision:"757941fa7d2566cabbbcddfca6bf49d9"},{url:"posts/page-5.html",revision:"5cc97b870a5e0a93757629a81b83a9b0"},{url:"posts/pixel3-android11.html",revision:"504026769ea75d1885096f55680fac09"},{url:"posts/pixel3-android12.html",revision:"bf489d1c357067d01b81fb04d77d5afe"},{url:"posts/prefers-color-scheme.html",revision:"30edb036b835cc1d5909c7151e9e0432"},{url:"posts/promise.html",revision:"b92a9b5dc6632d19eaa97622666ca671"},{url:"posts/scan-code-mp.html",revision:"8bbe131425d56c07e4ce3c95d835bfb1"},{url:"posts/set.html",revision:"75dd77bae4119b04ea1b521ba1cefde1"},{url:"posts/strict.html",revision:"c7f708b6645fe6ada343bbe57b91e35a"},{url:"posts/svg.html",revision:"3609332f0d8262d17e746eb3688bb056"},{url:"posts/symbol.html",revision:"45f1a0b1350b845e2d978ba8bb86f6a3"},{url:"posts/toLocaleString.html",revision:"6a322349ddafb2d3128edd0fc25be8cf"},{url:"posts/type-conversion.html",revision:"159c8bfda5d21eddabbc5054936ee41c"},{url:"posts/typescript-advanced.html",revision:"207a5bc8b8c050d202a243c05b94b929"},{url:"posts/typescript-object-deep-path.html",revision:"71f0210638947a24b12e0cabc9ba7683"},{url:"posts/typescript-threshold.html",revision:"5800587f4c5c186e6ebe39c1a1249e60"},{url:"posts/ubuntu-nodejs.html",revision:"118e481bc6c78fe5e6d47858a6f085de"},{url:"posts/unregister-service-worker.html",revision:"110615b4568b921c77d564d03b002cba"},{url:"posts/vite-env.html",revision:"e1bc47fa1788b6da1ca1d31ee426cae9"},{url:"posts/vue-composables-crud.html",revision:"fa6a121cf8e70091c53873f71bba8370"},{url:"posts/vue-directive.html",revision:"5f16aa978d691b6885df749342aadcc2"},{url:"posts/vue-filters.html",revision:"2e3eac5fe3be18d5bbf50cc23c32623e"},{url:"posts/vue-setInterval.html",revision:"f982a10020fac590800cb1003f3cdb83"},{url:"posts/vuepress.html",revision:"eb5a196650572bc82f5ef400bef4bd8b"},{url:"tag.html",revision:"1dfc22c65f3f47733ee7d3e619412c9f"},{url:"img/homescreen48.png",revision:"3c7bff05f9ccb5d7f788b080648562c5"},{url:"img/homescreen72.png",revision:"c9847868ec5458ed89109e5dfd4be674"},{url:"img/homescreen96.png",revision:"a3c21aee9bf2af416a3d79b84f30facf"},{url:"img/homescreen144.png",revision:"9f3cba23df82ada92decb31a713a0efc"},{url:"img/homescreen168.png",revision:"3842faf886bda5ead9605d4fdfa573bf"},{url:"img/homescreen192.png",revision:"3e15b814224590b0bee172c355714be6"},{url:"manifest.json",revision:"a04634028e1300669efbbe8d121f8abe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
