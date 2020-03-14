---
title: vuepress-plugin-img-lazy
description: 一个为了更好的支持图片懒加载的 vuepress 插件
image: https://picsum.photos/536/354?random&date=2019-09-21
date: 2019-09-21
vssue-title: vuepress-plugin-img-lazy
tags:
  - vue
  - vuepress
categories:
  - project
---

一个为了更好的支持图片懒加载的 vuepress 插件

<!-- more -->

**该插件将优先使用 [原生](https://caniuse.com/#feat=loading-lazy-attr) 的图片懒加载，如果浏览器不支持将通过 lozad 实现**

可以同时实现对 markdown 文件与主题里面的图片控制（主题需要引用 `ImgLazy` 组件 ）

基于 [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy)、 [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize)、 [lozad](https://github.com/ApoorvSaxena/lozad.js)

[在线演示](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

[详细文档](https://tolking.github.io/vuepress-plugin-img-lazy/)

[源码](https://github.com/tolking/vuepress-plugin-img-lazy)
