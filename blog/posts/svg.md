---
title: SVG 图像的使用及优化
lang: zh-CN
display: home
description: 对于一些简单的图标如果使用svg图标会比普通图片更小，svg 的图片是矢量图形，放大缩小不会产生锯齿,支持通过 css 修改样式、增加动画
image: https://picsum.photos/1920/1080/?random&date=2018-10-01
date: 2018-10-01
tags:
  - svg
categories:
  - summary
--- 

- 对于一些简单的图标如果使用svg图标会比普通图片更小
- svg 的图片是矢量图形，放大缩小不会产生锯齿
- 支持通过 css 修改样式、增加动画
- 自身也支持动画

<!-- more -->

## svg 图片的格式
``` html
<!-- 一个简单的 svg 图片 -->
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' stroke='#fff'>
  <path d='M1 1l8 8m0-8L1 9'/>
</svg>
```

## 获得 svg 图片
- 像编写代码这样编辑 svg 图片
- 使用 svg 编辑器自己制作
- 使用 Ps Ai 等带类似**钢笔工具**的软件制作
- 新版本的 Ps 已经支持导出 svg 图片了

## 优化 svg 图片
- 使用工具制作的图片常常包含大量无用代码，建议精简到如下格式
``` html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='' style=''>
  <!-- ...路径 -->
</svg>
```
1. xmlns 是不可少的
2. viewBox 里面的4个坐标指示 svg 图片的显示区域
3. style 为默认样式（如果想通过 css 控制样式或内部没有一个统一的样式则不需要）
4. 最好将 width 与 height 删掉（限定大小 svg 图片就不能够缩放了）
5. 使用 Ps 时最好使用图层组件将可以合并的路径合并形状，最后将图层的路径’合并形状组件‘得倒一个 path 路径

## 使用 svg 图片
- 根据需求选择将 svg 图片放在 html 或 css 里面
- 放在 html 里面的 svg 图片可以通过 css 控制样式
- 放在 css 的 background-image: url() 里面
- 放在 background 里面需要指定格式（data:image/svg+xml;charset=utf-8）
``` css
.test {
  /* 使用 ("data:image/svg+xml;charset=utf-8, + svg 代码"); */
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' stroke='#fff'><path d='M1 1l8 8m0-8L1 9'/></svg>");
}
```
- 放在 background 里面的 svg 图片无法再通过 css 改变样式
- 但比起直接放在 html 里面让 html 的结构更精简

## 结合 less 使用（其他同理）
- 结合 less 使用可以在引用 svg 图片时改变部分样式
- 同时也方便再次调用

1. 创建一个放 svg 的 less 文件（例如：svg.less）
2. 定义一个变量指定 svg 格式（例如：@svg-base: "data:image/svg+xml;charset=utf-8,";）

``` less
@svg-base: "data:image/svg+xml;charset=utf-8,";

.bg-img (@url, @s: 100%, @p: center, @r: no-repeat) {
  background-image: (url(@url));
  background-size: (@s);
  background-position: (@p);
  background-size: (@r);
}

.svg-close (@color, @size: 100%, @position: center, @repeat: no-repeat) {
  @close: escape("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' stroke='@{color}'><path d='M1 1l8 8m0-8L1 9'/></svg>"); // 简单编码
  .bg-img("@{svg-base}@{close}", @size, @position, @repeat);
}
```

-通过 .svg-close 调用
``` less
.test {
  display: inline-block; // IE 需要
  width: 20px; // 需要指定大小
  height: 20px;
  .svg-close(#fff);
}
```
[前往查看更多相关](https://github.com/tolking/m-less/blob/master/less/svg.less)

## 结合 postcss 使用，插件推荐
- [postcss-svgo](https://www.npmjs.com/package/postcss-svgo) 压缩 svg、 图片
- [postcss-inline-svg](https://www.npmjs.com/package/postcss-inline-svg) 修改 background 里面的 svg 图片颜色