if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),t={module:{uri:n},exports:a,require:o};e[n]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-4de3aa5f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"24be18e6d24e029c925554c62f964720"},{url:"about/index.html",revision:"5104a975a119a120842b2dc9a3743a6f"},{url:"assets/about_index.md.80976fe9.js",revision:null},{url:"assets/about_index.md.80976fe9.lean.js",revision:null},{url:"assets/app.7d302fed.js",revision:null},{url:"assets/category.md.58302ee6.js",revision:null},{url:"assets/category.md.58302ee6.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.43f662a9.js",revision:null},{url:"assets/chunks/framework.f6ec665f.js",revision:null},{url:"assets/chunks/theme.2be66ed2.js",revision:null},{url:"assets/chunks/virtual_pwa-register.100450c1.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.b4afe5cd.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"assets/index.md.3886e2fc.js",revision:null},{url:"assets/index.md.3886e2fc.lean.js",revision:null},{url:"assets/lib_components-helper.md.1f543f22.js",revision:null},{url:"assets/lib_components-helper.md.1f543f22.lean.js",revision:null},{url:"assets/lib_element-pro-components.md.94eca6bf.js",revision:null},{url:"assets/lib_element-pro-components.md.94eca6bf.lean.js",revision:null},{url:"assets/lib_index.md.ceb1cbec.js",revision:null},{url:"assets/lib_index.md.ceb1cbec.lean.js",revision:null},{url:"assets/lib_m-less.md.f732a4a8.js",revision:null},{url:"assets/lib_m-less.md.f732a4a8.lean.js",revision:null},{url:"assets/lib_markdown-it-img-lazy.md.aea9f1f9.js",revision:null},{url:"assets/lib_markdown-it-img-lazy.md.aea9f1f9.lean.js",revision:null},{url:"assets/lib_page-2.md.fbe8e3ea.js",revision:null},{url:"assets/lib_page-2.md.fbe8e3ea.lean.js",revision:null},{url:"assets/lib_postcss-flex-alias.md.e0390ccd.js",revision:null},{url:"assets/lib_postcss-flex-alias.md.e0390ccd.lean.js",revision:null},{url:"assets/lib_postcss-propro.md.982ecd71.js",revision:null},{url:"assets/lib_postcss-propro.md.982ecd71.lean.js",revision:null},{url:"assets/lib_tagged-operator.md.e02ca315.js",revision:null},{url:"assets/lib_tagged-operator.md.e02ca315.lean.js",revision:null},{url:"assets/lib_usercss.md.3759865f.js",revision:null},{url:"assets/lib_usercss.md.3759865f.lean.js",revision:null},{url:"assets/lib_vue-lazy-loading.md.680c770c.js",revision:null},{url:"assets/lib_vue-lazy-loading.md.680c770c.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-blog-multidir.md.2ed854aa.js",revision:null},{url:"assets/lib_vuepress-plugin-blog-multidir.md.2ed854aa.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-img-lazy.md.15938d40.js",revision:null},{url:"assets/lib_vuepress-plugin-img-lazy.md.15938d40.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-last-reading.md.0af82359.js",revision:null},{url:"assets/lib_vuepress-plugin-last-reading.md.0af82359.lean.js",revision:null},{url:"assets/lib_vuepress-plugin-reading-progress.md.8a63820e.js",revision:null},{url:"assets/lib_vuepress-plugin-reading-progress.md.8a63820e.lean.js",revision:null},{url:"assets/lib_vuepress-theme-default-prefers-color-scheme.md.26100381.js",revision:null},{url:"assets/lib_vuepress-theme-default-prefers-color-scheme.md.26100381.lean.js",revision:null},{url:"assets/lib_vuepress-theme-ououe.md.dbedd597.js",revision:null},{url:"assets/lib_vuepress-theme-ououe.md.dbedd597.lean.js",revision:null},{url:"assets/posts_array.md.1f4c0507.js",revision:null},{url:"assets/posts_array.md.1f4c0507.lean.js",revision:null},{url:"assets/posts_arrow-function.md.d05447db.js",revision:null},{url:"assets/posts_arrow-function.md.d05447db.lean.js",revision:null},{url:"assets/posts_babel-polyfill.md.d3165072.js",revision:null},{url:"assets/posts_babel-polyfill.md.d3165072.lean.js",revision:null},{url:"assets/posts_backdrop-filter.md.f6edb1a2.js",revision:null},{url:"assets/posts_backdrop-filter.md.f6edb1a2.lean.js",revision:null},{url:"assets/posts_bitwise-operators.md.547a18a2.js",revision:null},{url:"assets/posts_bitwise-operators.md.547a18a2.lean.js",revision:null},{url:"assets/posts_class.md.523887dd.js",revision:null},{url:"assets/posts_class.md.523887dd.lean.js",revision:null},{url:"assets/posts_components-helper.md.5b19aa3b.js",revision:null},{url:"assets/posts_components-helper.md.5b19aa3b.lean.js",revision:null},{url:"assets/posts_connect-php.md.0afe1f67.js",revision:null},{url:"assets/posts_connect-php.md.0afe1f67.lean.js",revision:null},{url:"assets/posts_createFetch.md.ff4061cb.js",revision:null},{url:"assets/posts_createFetch.md.ff4061cb.lean.js",revision:null},{url:"assets/posts_css-problem.md.f67b3f3a.js",revision:null},{url:"assets/posts_css-problem.md.f67b3f3a.lean.js",revision:null},{url:"assets/posts_css4.md.748cd435.js",revision:null},{url:"assets/posts_css4.md.748cd435.lean.js",revision:null},{url:"assets/posts_deconstruction.md.645a41dc.js",revision:null},{url:"assets/posts_deconstruction.md.645a41dc.lean.js",revision:null},{url:"assets/posts_form.md.d6f097d2.js",revision:null},{url:"assets/posts_form.md.d6f097d2.lean.js",revision:null},{url:"assets/posts_git-template-project.md.b188d974.js",revision:null},{url:"assets/posts_git-template-project.md.b188d974.lean.js",revision:null},{url:"assets/posts_git.md.eb8d3aaf.js",revision:null},{url:"assets/posts_git.md.eb8d3aaf.lean.js",revision:null},{url:"assets/posts_html-preload.md.76d47ffe.js",revision:null},{url:"assets/posts_html-preload.md.76d47ffe.lean.js",revision:null},{url:"assets/posts_index.md.275f086a.js",revision:null},{url:"assets/posts_index.md.275f086a.lean.js",revision:null},{url:"assets/posts_ios-input.md.b3356905.js",revision:null},{url:"assets/posts_ios-input.md.b3356905.lean.js",revision:null},{url:"assets/posts_js-summary.md.9089e93d.js",revision:null},{url:"assets/posts_js-summary.md.9089e93d.lean.js",revision:null},{url:"assets/posts_lazy-loading.md.444df345.js",revision:null},{url:"assets/posts_lazy-loading.md.444df345.lean.js",revision:null},{url:"assets/posts_let-const.md.43e87d11.js",revision:null},{url:"assets/posts_let-const.md.43e87d11.lean.js",revision:null},{url:"assets/posts_map.md.3eb6a760.js",revision:null},{url:"assets/posts_map.md.3eb6a760.lean.js",revision:null},{url:"assets/posts_media-orientation.md.90850c69.js",revision:null},{url:"assets/posts_media-orientation.md.90850c69.lean.js",revision:null},{url:"assets/posts_mi5-pixel-experience.md.6482ed7f.js",revision:null},{url:"assets/posts_mi5-pixel-experience.md.6482ed7f.lean.js",revision:null},{url:"assets/posts_minecraft-map-v2.md.b6e90207.js",revision:null},{url:"assets/posts_minecraft-map-v2.md.b6e90207.lean.js",revision:null},{url:"assets/posts_minecraft-map.md.8dd9797c.js",revision:null},{url:"assets/posts_minecraft-map.md.8dd9797c.lean.js",revision:null},{url:"assets/posts_module.md.e1835218.js",revision:null},{url:"assets/posts_module.md.e1835218.lean.js",revision:null},{url:"assets/posts_nth-child.md.9eaa5430.js",revision:null},{url:"assets/posts_nth-child.md.9eaa5430.lean.js",revision:null},{url:"assets/posts_nuxt.md.2e8da3a8.js",revision:null},{url:"assets/posts_nuxt.md.2e8da3a8.lean.js",revision:null},{url:"assets/posts_object.md.4ee6bbf1.js",revision:null},{url:"assets/posts_object.md.4ee6bbf1.lean.js",revision:null},{url:"assets/posts_operators.md.1b76322f.js",revision:null},{url:"assets/posts_operators.md.1b76322f.lean.js",revision:null},{url:"assets/posts_page-2.md.92379227.js",revision:null},{url:"assets/posts_page-2.md.92379227.lean.js",revision:null},{url:"assets/posts_page-3.md.df5f49bf.js",revision:null},{url:"assets/posts_page-3.md.df5f49bf.lean.js",revision:null},{url:"assets/posts_page-4.md.f9c5a5f4.js",revision:null},{url:"assets/posts_page-4.md.f9c5a5f4.lean.js",revision:null},{url:"assets/posts_page-5.md.2e77c85e.js",revision:null},{url:"assets/posts_page-5.md.2e77c85e.lean.js",revision:null},{url:"assets/posts_pixel3-android11.md.14feae4c.js",revision:null},{url:"assets/posts_pixel3-android11.md.14feae4c.lean.js",revision:null},{url:"assets/posts_pixel3-android12.md.fc57c4db.js",revision:null},{url:"assets/posts_pixel3-android12.md.fc57c4db.lean.js",revision:null},{url:"assets/posts_prefers-color-scheme.md.e82e3580.js",revision:null},{url:"assets/posts_prefers-color-scheme.md.e82e3580.lean.js",revision:null},{url:"assets/posts_promise.md.5e67bab1.js",revision:null},{url:"assets/posts_promise.md.5e67bab1.lean.js",revision:null},{url:"assets/posts_scan-code-mp.md.77738540.js",revision:null},{url:"assets/posts_scan-code-mp.md.77738540.lean.js",revision:null},{url:"assets/posts_set.md.fb1de8b2.js",revision:null},{url:"assets/posts_set.md.fb1de8b2.lean.js",revision:null},{url:"assets/posts_strict.md.2480597c.js",revision:null},{url:"assets/posts_strict.md.2480597c.lean.js",revision:null},{url:"assets/posts_svg.md.0d7dae7e.js",revision:null},{url:"assets/posts_svg.md.0d7dae7e.lean.js",revision:null},{url:"assets/posts_symbol.md.c71c0d5b.js",revision:null},{url:"assets/posts_symbol.md.c71c0d5b.lean.js",revision:null},{url:"assets/posts_toLocaleString.md.1723f3b5.js",revision:null},{url:"assets/posts_toLocaleString.md.1723f3b5.lean.js",revision:null},{url:"assets/posts_type-conversion.md.439037d7.js",revision:null},{url:"assets/posts_type-conversion.md.439037d7.lean.js",revision:null},{url:"assets/posts_typescript-advanced.md.d2c8b162.js",revision:null},{url:"assets/posts_typescript-advanced.md.d2c8b162.lean.js",revision:null},{url:"assets/posts_typescript-object-deep-path.md.1f9f26da.js",revision:null},{url:"assets/posts_typescript-object-deep-path.md.1f9f26da.lean.js",revision:null},{url:"assets/posts_typescript-threshold.md.fb764165.js",revision:null},{url:"assets/posts_typescript-threshold.md.fb764165.lean.js",revision:null},{url:"assets/posts_ubuntu-nodejs.md.d2ba3ce9.js",revision:null},{url:"assets/posts_ubuntu-nodejs.md.d2ba3ce9.lean.js",revision:null},{url:"assets/posts_unregister-service-worker.md.a9b71bc2.js",revision:null},{url:"assets/posts_unregister-service-worker.md.a9b71bc2.lean.js",revision:null},{url:"assets/posts_vite-env.md.c3ef25c4.js",revision:null},{url:"assets/posts_vite-env.md.c3ef25c4.lean.js",revision:null},{url:"assets/posts_vue-composables-crud.md.8aeb2730.js",revision:null},{url:"assets/posts_vue-composables-crud.md.8aeb2730.lean.js",revision:null},{url:"assets/posts_vue-directive.md.0cf16b71.js",revision:null},{url:"assets/posts_vue-directive.md.0cf16b71.lean.js",revision:null},{url:"assets/posts_vue-filters.md.fecd6b02.js",revision:null},{url:"assets/posts_vue-filters.md.fecd6b02.lean.js",revision:null},{url:"assets/posts_vue-setInterval.md.40e89b36.js",revision:null},{url:"assets/posts_vue-setInterval.md.40e89b36.lean.js",revision:null},{url:"assets/posts_vuepress.md.912b2a24.js",revision:null},{url:"assets/posts_vuepress.md.912b2a24.lean.js",revision:null},{url:"assets/style.95b98c4f.css",revision:null},{url:"assets/tag.md.0a8c60f1.js",revision:null},{url:"assets/tag.md.0a8c60f1.lean.js",revision:null},{url:"category.html",revision:"5c2a651f2bd6d1cef82a60eb5025ce8c"},{url:"index.html",revision:"b80976fbec476f45fbea7e506b363cd6"},{url:"lib/components-helper.html",revision:"8de2fe0afa2e500dc815300be9b6513d"},{url:"lib/element-pro-components.html",revision:"5a25d45aa4b33f28b20580be4775a344"},{url:"lib/index.html",revision:"e54cf6602e1156d7127c70f2b5e639a9"},{url:"lib/m-less.html",revision:"7344b5b8bf85e7ffa60a5feabb4d231a"},{url:"lib/markdown-it-img-lazy.html",revision:"34e7f5f5a1383c5bac5e5bf6df84f399"},{url:"lib/page-2.html",revision:"ba1dff804b59d97a452fd5c692e23eb7"},{url:"lib/postcss-flex-alias.html",revision:"79b0f84a494cd689c585cab70b9568b8"},{url:"lib/postcss-propro.html",revision:"2eb91b8f17f68d8c9d4255da5731a546"},{url:"lib/tagged-operator.html",revision:"f9d8e2852f839534ceb332a49e947372"},{url:"lib/usercss.html",revision:"e0a82eb7599ec07d753e8c55208a6b8c"},{url:"lib/vue-lazy-loading.html",revision:"e6cea95127d273205b1bf610c0893aa0"},{url:"lib/vuepress-plugin-blog-multidir.html",revision:"364ed576da3d4686b84187db4b30e357"},{url:"lib/vuepress-plugin-img-lazy.html",revision:"82e3e9a8a268ed7dbf977210d5d72128"},{url:"lib/vuepress-plugin-last-reading.html",revision:"952d63c3430771ad6c67e5149cb3115c"},{url:"lib/vuepress-plugin-reading-progress.html",revision:"a3b1f8edfb812876caa7b1e89c783ab1"},{url:"lib/vuepress-theme-default-prefers-color-scheme.html",revision:"80f930fce18b20d99a550a1707bf2501"},{url:"lib/vuepress-theme-ououe.html",revision:"7a1cc603fc2ea8611d7b043258380df1"},{url:"posts/array.html",revision:"26b9cba54b4a02f679abc8ad8e9c8eb5"},{url:"posts/arrow-function.html",revision:"c7adc3c9f12fcc2ffd663d2ded3c0dab"},{url:"posts/babel-polyfill.html",revision:"c793ea944ddfde794c58e3ae73fe890f"},{url:"posts/backdrop-filter.html",revision:"a90b9c4389fb1e954326043a2d31f39f"},{url:"posts/bitwise-operators.html",revision:"f313315fb3e73ec760c1aa62f32e4fcf"},{url:"posts/class.html",revision:"c79ff828c6c7ee824c250f27382fd270"},{url:"posts/components-helper.html",revision:"d491857f48d6ef565849d5e35ba4b386"},{url:"posts/connect-php.html",revision:"99098ab888fed139d59e5fa77c0955a9"},{url:"posts/createFetch.html",revision:"3b1613a37b239d5f4435192523dc8899"},{url:"posts/css-problem.html",revision:"6cbc67921089fa75e624ca6c95bc46e5"},{url:"posts/css4.html",revision:"62e47b53eaac9c0be4d5664ae80f5ae7"},{url:"posts/deconstruction.html",revision:"88e5ef64194d181567556fec46d9b9fb"},{url:"posts/form.html",revision:"d8d64770fe9ef43f628e4e111ee8b3d0"},{url:"posts/git-template-project.html",revision:"9c7584ffa61a20d41a90bd6dc46c849a"},{url:"posts/git.html",revision:"f1da4c7d5399f092091b71708b450c90"},{url:"posts/html-preload.html",revision:"4034d01201a0366bbcb18a73aad1b774"},{url:"posts/index.html",revision:"ea44af1dc567775814f03492928ba1bc"},{url:"posts/ios-input.html",revision:"3eaeaca5b9e667188e1736260735d161"},{url:"posts/js-summary.html",revision:"87e751c4b5f74b115ed5c1d5639e3853"},{url:"posts/lazy-loading.html",revision:"15cf819e3094aa9a50924648170de8e4"},{url:"posts/let-const.html",revision:"dd97b3e09ce7239f184aad64af416415"},{url:"posts/map.html",revision:"9b247769bf1ef811f1390640d57835f2"},{url:"posts/media-orientation.html",revision:"76c537b1affbd04f51f47119e77b8e43"},{url:"posts/mi5-pixel-experience.html",revision:"9eb59454552a96eb7c49224fd6bd9e34"},{url:"posts/minecraft-map-v2.html",revision:"8c5282cd3e8fa05672d31acc5d3692a5"},{url:"posts/minecraft-map.html",revision:"6c18d8f5c2d1f091a71a096e47338bed"},{url:"posts/module.html",revision:"2273fc8a87db92e52513bffce8d44275"},{url:"posts/nth-child.html",revision:"e62ddbec9bf57afd70a87e920f44bf37"},{url:"posts/nuxt.html",revision:"012c46e39b0ab044d2844236e41df222"},{url:"posts/object.html",revision:"4a04d97e127c5fd80b92193b572237b5"},{url:"posts/operators.html",revision:"f26552d7da43973dc0157305f4fded41"},{url:"posts/page-2.html",revision:"a6ffad67cef61af0b4a02a3e4dea6d67"},{url:"posts/page-3.html",revision:"c84434c59f58342e94422fb48399476a"},{url:"posts/page-4.html",revision:"c1a97085725a35a206552582bd246d41"},{url:"posts/page-5.html",revision:"1f9f8639b343225f5c4c9978bd0c1cb5"},{url:"posts/pixel3-android11.html",revision:"816a3d7d9b534ae57d7e464af69fe98b"},{url:"posts/pixel3-android12.html",revision:"6d117e9163215af40dbea96c51504003"},{url:"posts/prefers-color-scheme.html",revision:"30a533b46a79c1e43719bf265ef8eef8"},{url:"posts/promise.html",revision:"322e049e6fb4368da6cbb913f22a5dc4"},{url:"posts/scan-code-mp.html",revision:"eb8ca14b6a807757bac4ddd179507014"},{url:"posts/set.html",revision:"6eb940fbe48f7b7f2f6ee74ed58b6a7e"},{url:"posts/strict.html",revision:"46e309df595c2b6c7c965a4a3a984c54"},{url:"posts/svg.html",revision:"f4a22f4668cae2db5c540d496331fb1b"},{url:"posts/symbol.html",revision:"37712eafe8a80daa28ce42430b22ddc1"},{url:"posts/toLocaleString.html",revision:"f936875df5037e9cac62b18924e0c44d"},{url:"posts/type-conversion.html",revision:"511aceca577750bc6a6096a96ab9df67"},{url:"posts/typescript-advanced.html",revision:"388959618d46c28eb5b23faa2a022ac6"},{url:"posts/typescript-object-deep-path.html",revision:"4516ce126ad28ee5c8fc5fedd34627d3"},{url:"posts/typescript-threshold.html",revision:"6532c1fa7378f92557422b63bcb69f4d"},{url:"posts/ubuntu-nodejs.html",revision:"61118b9177d120beefba3f672467a7c9"},{url:"posts/unregister-service-worker.html",revision:"a2ddbf61a2ae2fd600b4c4bbaf0409f6"},{url:"posts/vite-env.html",revision:"b88db416c11aa49568ce4d4bdb279f0a"},{url:"posts/vue-composables-crud.html",revision:"ddc3ce28c43478f541e9b9e2dd57b941"},{url:"posts/vue-directive.html",revision:"b3abb9283f146c496470c0dc028ce43d"},{url:"posts/vue-filters.html",revision:"f3903b13c97ff50f8f3dc6f4741c43af"},{url:"posts/vue-setInterval.html",revision:"e7246e5f7d1ef614747578d3ed486a54"},{url:"posts/vuepress.html",revision:"d59ecaf8fa48033c7c26e6817abbfb94"},{url:"tag.html",revision:"0dd2353542ada567d05da930b4c2ea5e"},{url:"img/homescreen48.png",revision:"3c7bff05f9ccb5d7f788b080648562c5"},{url:"img/homescreen72.png",revision:"c9847868ec5458ed89109e5dfd4be674"},{url:"img/homescreen96.png",revision:"a3c21aee9bf2af416a3d79b84f30facf"},{url:"img/homescreen144.png",revision:"9f3cba23df82ada92decb31a713a0efc"},{url:"img/homescreen168.png",revision:"3842faf886bda5ead9605d4fdfa573bf"},{url:"img/homescreen192.png",revision:"3e15b814224590b0bee172c355714be6"},{url:"manifest.json",revision:"a04634028e1300669efbbe8d121f8abe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
