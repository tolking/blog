---
title: 让网站支持黑暗模式
description: 通过媒体查询 prefers-color-scheme 让你的网站支持黑暗模式及其更好的兼容
image: https://picsum.photos/536/354?random&date=2019-06-27
date: 2019-06-27
vssue-title: prefers-color-scheme
tags:
  - css
  - cssnext
categories:
  - summary
---

通过媒体查询 `prefers-color-scheme` 让你的网站支持黑暗模式

<!-- more -->

::: tip
这个属性目前还是实验性的，要使用需要满足下面的几个条件
1. MacOS 在 Mojave 10.14 版本以上或者 windows 10 在 1809 以上
2. 使用[支持浏览器](https://caniuse.com/#search=prefers-color-scheme)
:::

然后你就可以编写你的样式了

``` css
@media (prefers-color-scheme: light) {
  .prefers-color {
    --bgColor: #f3f5f7;
    --textColor: #282c34;
  }
}
@media (prefers-color-scheme: dark) {
  .prefers-color {
    --bgColor: #282c34;
    --textColor: #f3f5f7;
  }
}

.prefers-color {
  color: var(--textColor);
  background: var(--bgColor);
}
```

##### 效果

<style>
@media (prefers-color-scheme: light) {
  .prefers-color {
    --bgColor: #f3f5f7;
    --textColor: #282c34;
  }
}
@media (prefers-color-scheme: dark) {
  .prefers-color {
    --bgColor: #282c34;
    --textColor: #f3f5f7;
  }
}

.prefers-color {
  width: 100%;
  height: 100px;
  color: var(--textColor);
  background: var(--bgColor);
}
</style>
<div class="prefers-color"></div>


当然目前这样的兼容性比较差，如果你需要更好的兼容性。你可以参考[css-prefers-color-scheme](https://github.com/csstools/css-prefers-color-scheme)
