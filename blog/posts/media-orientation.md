---
title: 使用媒体查询判断屏幕的方向
lang: zh-CN
description: 通过媒体查询 orientation 判断屏幕的方向
image: https://picsum.photos/1920/1080/?random&date=2019-07-19
date: 2019-07-19
tags:
  - css
categories:
  - summary
--- 

通过媒体查询 `orientation` 判断屏幕的方向，显示不同的样式

<!-- more -->

``` html
<p class="dome">屏幕方向：</p>
```
``` css
@media all and (orientation: landscape) {
  .dome::after {
    content: '横屏';
    color: #3eaf7c;
  }
}
@media all and (orientation: portrait) {
  .dome::after {
    content: '竖屏';
    color: #327bce;
  }
}

```
##### 效果

<style>
@media all and (orientation: landscape) {
  .dome::after {
    content: '横屏';
    color: #3eaf7c !important;
  }
}
@media all and (orientation: portrait) {
  .dome::after {
    content: '竖屏';
    color: #327bce !important;
  }
}
</style>
<p class="dome">屏幕方向：</p>

反转屏幕查看不同的效果