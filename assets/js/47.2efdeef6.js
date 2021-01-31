(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{271:function(t,e,v){"use strict";v.r(e);var r=v(3),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("之前制作过一份简单的 "),v("a",{attrs:{href:"https://www.minecraft.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("minecraft"),v("OutboundLink")],1),t._v(" 线性地图，现在基于 svg 重构了一版。现在是时候总结两者的区别了")]),t._v(" "),v("p",[t._v("之前的文章 "),v("RouterLink",{attrs:{to:"/posts/2019/01/17/minecraft-map/"}},[t._v("canvas 地图开发总结")]),t._v(" 中最后提到")],1),t._v(" "),v("blockquote",[v("p",[t._v("总感觉选 canvas 是个巨大失误，如果用 svg 的话...")])]),t._v(" "),v("p",[t._v("但事实并不是我想象的样子，在 svg 版地图的开发中我还是遇到了些我意想之外的问题")]),t._v(" "),v("h2",{attrs:{id:"选择框架"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选择框架"}},[t._v("#")]),t._v(" 选择框架")]),t._v(" "),v("p",[t._v("整体基于 svg 的话，只好将 svg 嵌入到 DOM 中。在重构之前 vue3 也正式发布，所以就计划使用 vue 来生成 DOM，一边也正式使用下 vue3。同时 vite 也适合项目的要求，所以就一同加入。但 hammer 不支持 ESM 模块导入，后来找到 @egjs/hammerjs，不但支持模块导入，而且还可以按需加载")]),t._v(" "),v("p",[t._v("所以整体的构架就是 svg "),v("a",{attrs:{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 3"),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite"),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://www.npmjs.com/package/@egjs/hammerjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("@egjs/hammerjs"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[t._v("#")]),t._v(" 开发")]),t._v(" "),v("p",[t._v("整体的逻辑和功能都和之前的版本保持一致，最明显的区别就是现在的地图只在最初绘制一次，避免 canvas 经过操作后需要重新绘制，增强拖动和缩放的性能")]),t._v(" "),v("p",[t._v("同时加入 css变量 与 自适应地浅色和深色模式，增加一些加载和过度动画")]),t._v(" "),v("h4",{attrs:{id:"svg-地图绘制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svg-地图绘制"}},[t._v("#")]),t._v(" svg 地图绘制")]),t._v(" "),v("ul",[v("li",[t._v("通过 viewBox 来定义绘制的范围")]),t._v(" "),v("li",[t._v("通过 rect 和 circle 标签绘制正方形边界与圆形边界")]),t._v(" "),v("li",[t._v("通过 path 来实现自定义地图线路")]),t._v(" "),v("li",[t._v("通过 text 标签显示文本信息")])]),t._v(" "),v("p",[t._v("整体难度和 canvas 差不多")]),t._v(" "),v("p",[t._v("同时由于 svg 良好的交互性，我实现了在 canvas 中比较难实现的显示线路的 notes 信息的功能。当鼠标移动到有记录 notes 信息的线路上就会显示提示信息")]),t._v(" "),v("h4",{attrs:{id:"缩放和拖动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缩放和拖动"}},[t._v("#")]),t._v(" 缩放和拖动")]),t._v(" "),v("p",[t._v("由于要兼容手机和电脑，所以依然选择之前的方案。但由于地图只绘制一次，会造成文本的大小和线路的粗细不好随缩放变化，影响视觉。所以就利用 css 变量动态传值，动态改变其值")]),t._v(" "),v("p",[t._v("然后当数据较多和放大过大会引起性能严重下降，缩放和拖动卡到不行，最后不得已限制了缩放的最大程度。canvas 版本在这方面表现就更加优秀些")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("ul",[v("li",[t._v("svg 与 canvas 各有优势和缺点，最好按照需求选择")]),t._v(" "),v("li",[t._v("svg 更加适用于具有交互性的小型项目，比如可变色的图标、小型的图标动画或者按照路径移动的动画")]),t._v(" "),v("li",[t._v("canvas 更加适合数据变动比较大的项目")]),t._v(" "),v("li",[t._v("vite 使用很方便，开发启动和更新很快，没有配置文件也可以正常启动和打包")]),t._v(" "),v("li",[t._v("vue3 的 setup 和 组合式API 配合使用拆分代码使用还是挺容易")]),t._v(" "),v("li",[t._v("vue3 的 teleport 可以将内容发送到DOM的任意节点，包括 title 标签来实现动态改变网页标题。我似乎想到了一个黑科技用法")]),t._v(" "),v("li",[t._v("vue3 的 emits 无法与 多个根节点 同时使用")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://map.ououe.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("​地图"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/tolking/map",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看源码"),v("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);