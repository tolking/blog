---
title: markdown-it-img-lazy
description: 一个为了更好的支持图片懒加载的 markdown 插件
image: https://picsum.photos/536/354?random&date=2019-09-21
date: 2019-09-21
vssue-title: markdown-it-img-lazy
tags:
  - markdown
categories:
  - project
--- 

一个为了更好的支持图片懒加载的 markdown 插件

<!-- more -->

[源码](https://github.com/tolking/markdown-it-img-lazy)

由于原生的 [原生懒加载](https://caniuse.com/#feat=loading-lazy-attr) 的兼容性，写了插件转换 markdown 文件的 img 

`![img](img.jpg) -> <p><img alt="img" data-src="img.jpg" loading="lazy" class="lazy"></p>`

转化成这种格式是为了更好的通过 js 去实现原生懒加载或者通过 [Lozad.js](https://github.com/ApoorvSaxena/lozad.js)实现

如果浏览器支持 `loading="lazy"` 则将 `data-src -> src`, 如果不支持则直接初始化 `Lozad`

从表现上来说原生懒加载会比Lozad多加载一些距离的图片