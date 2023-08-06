---
title: nuxt 踩坑记录
description: 为了实现更好的 seo，不得不考虑将之前的 vue 单页面程序托到服务器上渲染​，看了官方的 ssr 和 nuxt，最后选择通过 nuxt 实现
image: https://picsum.photos/536/354?random&date=2018-11-08
date: 2018-11-08
vssue-title: nuxt
tags:
  - vue
  - nuxt
categories:
  - summary
---

为了实现更好的 seo，不得不考虑将之前的 vue 单页面程序托到服务器上渲染​，看了官方的 ssr 和 nuxt，最后选择通过 nuxt 实现。
下面分享一些我在构建过程中踩的坑

<!-- more -->

1. 通过设置 nuxt.cinfig.js 里面的 webpack riuke 实现 vue 里面的 style lang=“postcss” 高亮且不报错
``` js
build: {
  extend(config, ctx) {
    config.module.rules.push({
      test: /\.(postcss)$/,
      use: [
        'vue-style-loader',
        'css-loader',
        { loader: 'postcss-loader' }
      ]
    })
  }
}
```

2. 在 nuxt.config.js 里面的全局 css，不建议直接在入口文件里面写 postcss，建议通过 @ 引入 postcss，虽然所有的样式都会经过 postcss-loader 处理，但我就遇到过没有被编译的 css 变量（或许是我改了 webpack 的原因）

3. 动态路由的 name
- name 是由文件夹名 + -id 组成的，如果文件夹还有父级，还需要将父级文件夹名加上，直到 page

4. 由于是后端渲染，所以没有 Window 对象，需要注意。很多方法无法使用，插件是一样，需要寻找支持 ssr 的插件。或者在 created 后调用。
5. 对于需要通过 import 引入的插件，会报错误 window or document undefined
需要先在 plugins 目录下新建 js 文件引入资源。然后再 nuxt.config.js 中引入并设置 ssr: false，再通过 process.client 判断后由 require 引入
``` js
import test from 'test.js'
// 改为
if (process.client) {
  const test = require('test.js')
}
```

6. asyncData 与 fetch 仅对 page 里面的页面生效

7. 使用 head 渲染页面标签 script 时，标签内的 innerHTML 内容会转换，这是由于 nuxt 使用的 vue-meta 产生的，是一种保护措施，需要加入 __dangerouslyDisableSanitizers 防止编译（不是特殊情况不推荐这么做）
``` js
meta: [
  script: [
    { innerHTML: 'console.log("ok?")', type: 'text/javascript' }
  ],
  __dangerouslyDisableSanitizers: ['script']
]
```

8. 正确引入搜索引擎的认证`meta`标签
- 在根目录建立 `app.html`

``` html
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head>
    <meta name="..." content="..."/>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```