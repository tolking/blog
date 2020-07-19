---
title: vue-lazy-loading
description: 一个为了更好的支持原生 lazy-loading 懒加载的插件
image: https://picsum.photos/536/354?random&date=2020-07-18
date: 2020-07-18
vssue-title: vue-lazy-loading
tags:
  - vue
categories:
  - project
---

一个为了更好的支持原生 lazy-loading 懒加载的插件

<!-- more -->

**由于 [原生 lazy-loading](https://caniuse.com/#feat=loading-lazy-attr) 的兼容性，这个插件为不支持的浏览器提供 `image` 和 `iframe` 懒加载(基于 [IntersectionObserver](https://caniuse.com/#feat=intersectionobserver))**

### 注意

- 插件还支持对 srcset、背景图片、image-set 进行懒加载
- 一个固定的尺寸更利于浏览器的懒加载
- 由于目前浏览器的兼容性在使用 `v-lazy:bgset` 最好使用单位 `x` 而不是 `w`

``` html
<template>
  <!-- Replace `src` with `v-lazy` -->
  <img v-lazy="'img.jpg'" width="536" height="354" />

  <!-- Set `loading="lazy"` is not required -->
  <iframe v-lazy="'iframe.html'" loading="lazy" width="1000" height="500" />

  <!-- Load right away with set `loading="eager"` -->
  <iframe v-lazy="'iframe.html'" loading="eager" width="1000" height="500" />

  <!-- Replace `srcset` with `v-lazy:set` or `v-lazy:srcset` -->
  <img v-lazy="'img.jpg'" v-lazy:set="'img.jpg 1000w, img-2x.jpg 2000w'" width="536" height="354" />

  <!-- Replace `background-image` with `v-lazy:bg` -->
  <div v-lazy:bg="'bg.img'">background</div>

  <!-- Replace `background-image: image-set` with `v-lazy:bgset` -->
  <div v-lazy:bgset="'url(bg.img) 1x, url(bg-2x.img) 2x'">background</div>
</template>
```

[源码](https://github.com/tolking/vue-lazy-loading)
