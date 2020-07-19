---
title: 原生的图片和框架懒加载
display: home
description: 使用浏览器的原生懒加载来实现对网页内部的图片与框架的懒加载
image: https://picsum.photos/1920/1080/?random&date=2019-10-25
date: 2019-10-25
vssue-title: lazy-loading
tags:
  - html
categories:
  - summary
---

使用浏览器的原生懒加载来实现对网页内部的图片与框架的懒加载

<!-- more -->

::: tip
这是一个新特性，查看[支持浏览器](https://caniuse.com/#feat=loading-lazy-attr)
:::

## 使用

只需要向 `img` 或 `iframes` 标签增加 `loading="lazy` 属性即可

``` html
<img src="img.jpg" loading="lazy">
<iframes src="..." loading="lazy">
```

基于 `lazy-loading` 的[演示](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

## loading 支持的参数

- auto

默认值。图片或框架基于浏览器自己的策略进行加载

- lazy

图片或框架懒加载，也就是元素资源快要被看到的时候加载

- eager

图片或框架无视一切进行加载

### 判断浏览器是否支持

``` js
const supportLoading = 'loading' in HTMLImageElement.prototype
```

对与不支持的浏览器，你可以使用其它的方式来实现懒加载

- 参考 [vue-lazy-loading](https://github.com/tolking/vue-lazy-loading) [vuepress-plugin-img-lazy](https://github.com/tolking/vuepress-plugin-img-lazy) 的实现
