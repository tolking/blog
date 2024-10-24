import{_ as t,c as l,a0 as n,o as a}from"./chunks/framework.C1tv1HY1.js";const c=JSON.parse('{"title":"element-plus-nuxt","description":"element-plus-nuxt 是一个为 Nuxt 项目准备的自动引入模块","frontmatter":{"title":"element-plus-nuxt","description":"element-plus-nuxt 是一个为 Nuxt 项目准备的自动引入模块","image":"https://picsum.photos/536/354?random&date=2023-08-19","date":"2023-08-19T00:00:00.000Z","vssue-title":"element-plus-nuxt","tags":["vue","element-plus","nuxt"],"categories":["project"]},"headers":[],"relativePath":"lib/element-plus-nuxt.md","filePath":"lib/element-plus-nuxt.md","lastUpdated":1729775426000}'),r={name:"lib/element-plus-nuxt.md"};function s(u,e,o,p,i,m){return a(),l("div",null,e[0]||(e[0]=[n('<p>element-plus-nuxt 是一个为 <a href="https://element-plus.org" target="_blank" rel="noreferrer">Element Plus</a> 组件库能够在 <a href="https://nuxt.com" target="_blank" rel="noreferrer">Nuxt</a> 中方便使用而制作的模块</p><h2 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;">​</a></h2><ol><li><p>在之前如果在 Nuxt 中使用 Element Plus 组件库或多或少都会遇到一些水合错误的警告。虽然可以使用 <code>ClientOnly</code> 组件来解决，但是这样会导致内容在客户端才被渲染，不是最好的方案。</p></li><li><p>Element Plus 在 Nuxt 中使用无法自动引入组件及样式。</p></li></ol><p>所以我就想着能不能制作一个模块来解决这些问题。</p><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ol><li><p>为了处理水合错误这个问题我翻阅 Nuxt 的源码，发现 <code>app:rendered</code> 这个钩子，从这个钩子中可以获取渲染后的 teleports 数据，同时 Nuxt 会将 <code>teleports.body</code> 的内容注入到最终生成的界面中。所以我就利用这些特性，将 Element Plus 的组件在服务端渲染的 teleports 注入到 <code>teleports.body</code> 中，这样就可以直接注入到最终的界面中避免水合错误的警告了。</p></li><li><p>Nuxt 原生支持组件的自动引入，但对于 Element Plus 这样的组件库来说，无法按照 Nuxt 的规则来自动引入样式。所以我就参考 Nuxt 处理自动引入组件的逻辑，制作了一个插件来自动引入 Element Plus 的样式。</p></li></ol><p>在处理完成这些问题后，我就将这些功能封装成了一个模块，方便在 Nuxt 中使用 Element Plus。</p><p><a href="https://github.com/element-plus/element-plus-nuxt" target="_blank" rel="noreferrer">源码</a></p>',8)]))}const x=t(r,[["render",s]]);export{c as __pageData,x as default};
