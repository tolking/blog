---
title: backdrop-filter 的使用
lang: zh-CN
display: home
description: backdrop-filter 属性可以为一个元素后面区域添加图形效果，如模糊或颜色偏移等
image: https://picsum.photos/1920/1080/?random&date=2019-10-26
date: 2019-10-26
vssue-title: backdrop-filter
tags:
  - css
  - cssnext
categories:
  - summary
---

这个属性可以为一个元素后面区域添加图形效果，如模糊或颜色偏移等

<!-- more -->

::: tip
这是一个新特性，查看[支持浏览器](https://caniuse.com/#feat=css-backdrop-filter)
:::

## 使用

::: tip
这个属性需要在部分透明的元素上生效
:::

``` css
.test {
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(2px);
  backdrop-filter: brightness(60%);
  backdrop-filter: contrast(40%);
  backdrop-filter: drop-shadow(4px 4px 10px blue);
  backdrop-filter: grayscale(30%);
  backdrop-filter: hue-rotate(120deg);
  backdrop-filter: invert(70%);
  backdrop-filter: opacity(20%);
  backdrop-filter: sepia(90%);
  backdrop-filter: saturate(80%);
}
```

## 效果

你可以留意一下，当前网页的导航就使用了这个属性

``` css
.header-navbar {
  background: rgba(0,0,0,.8);
  backdrop-filter: blur(5px);
}
```

## 与 `filter` 的差别

- 使用 `filter` 的效果

<div class="demo-item filter-item">
  <img src="https://picsum.photos/200/200?random" class="item-img">
  <div class="item-mask">
    <img src="https://picsum.photos/200/200?random" class="mask-img">
    <p class="mask-title">filter</p>
  </div>
</div>

- 使用 `backdrop-filter` 的效果

<div class="demo-item backdrop-item">
  <img src="https://picsum.photos/200/200?random" class="item-img">
  <div class="item-mask">
    <p class="mask-title">backdrop-filter</p>
  </div>
</div>

::: tip
从上面可以看出来，两者在显示上没有区别

但当相对位置变化时两者的差别就出来了
:::

**将鼠标移动到图片上，注意观察动画变化时的效果**

- 使用 `filter` 的效果

<div class="demo-item filter-item hover-item">
  <img src="https://picsum.photos/200/200?random" class="item-img">
  <div class="item-mask">
    <img src="https://picsum.photos/200/200?random" class="mask-img">
    <p class="mask-title">filter</p>
  </div>
</div>

- 使用 `backdrop-filter` 的效果

<div class="demo-item backdrop-item hover-item">
  <img src="https://picsum.photos/200/200?random" class="item-img">
  <div class="item-mask">
    <p class="mask-title">backdrop-filter</p>
  </div>
</div>

<!-- public style -->
<style>
.demo-item {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  font-size: 0;
}
.demo-item .list-item-img {
  width: 100%;
  height: 100%;
}
.demo-item .item-mask {
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  overflow: hidden;
}
.demo-item .item-mask .mask-title {
  margin: 0;
  font-size: 20px;
  color: #eee;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
}
.hover-item .item-mask {
  transform: translateY(100%);
  transition: transform 1s;
}
.hover-item:hover .item-mask {
  transform: translateY(0);
  transition: transform 1s;
}
.filter-item .item-mask {
  font-size: 0;
}
.filter-item .item-mask .mask-title {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.3);
}
.demo-item .item-mask .mask-img {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  filter: blur(5px);
}
.backdrop-item .item-mask {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}
</style>
