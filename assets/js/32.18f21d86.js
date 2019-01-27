(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p",[t._v("为了实现更好的 seo，不得不考虑将之前的 vue 单页面程序托到服务器上渲染​，看了官方的 ssr 和 nuxt，最后选择通过 nuxt 实现。\n下面分享一些我在构建过程中踩的坑")]),t._v(" "),n("ol",[n("li",[t._v("通过设置 nuxt.cinfig.js 里面的 webpack riuke 实现 vue 里面的 style lang=“postcss” 高亮且不报错")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("build"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("extend")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/\\.(postcss)$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'vue-style-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" loader"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'postcss-loader'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[t._v("在 nuxt.config.js 里面的全局 css，不建议直接在入口文件里面写 postcss，建议通过 @ 引入 postcss，虽然所有的样式都会经过 postcss-loader 处理，但我就遇到过没有被编译的 css 变量（或许是我改了 webpack 的原因）")])]),t._v(" "),n("li",[n("p",[t._v("动态路由的 name")])])]),t._v(" "),n("ul",[n("li",[t._v("name 是由文件夹名 + -id 组成的，如果文件夹还有父级，还需要将父级文件夹名加上，直到 page")])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("由于是后端渲染，所以没有 Window 对象，需要注意。很多方法无法使用，插件是一样，需要寻找支持 ssr 的插件。或者在 created 后调用。")]),t._v(" "),n("li",[t._v("对于需要通过 import 引入的插件，会报错误 window or document undefined\n需要先在 plugins 目录下新建 js 文件引入资源。然后再 nuxt.config.js 中引入并设置 ssr: false，再通过 process.client 判断后由 require 引入")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" test "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'test.js'")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 改为")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" test "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'test.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"6"}},[n("li",[n("p",[t._v("asyncData 与 fetch 仅对 page 里面的页面生效")])]),t._v(" "),n("li",[n("p",[t._v("使用 head 渲染页面标签 script 时，标签内的 innerHTML 内容会转换，这是由于 nuxt 使用的 vue-meta 产生的，是一种保护措施，需要加入 __dangerouslyDisableSanitizers 防止编译（不是特殊情况不推荐这么做）")])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  script"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" innerHTML"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'console.log(\"ok?\")'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/javascript'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  __dangerouslyDisableSanitizers"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'script'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="18110801.md";s.default=o.exports}}]);