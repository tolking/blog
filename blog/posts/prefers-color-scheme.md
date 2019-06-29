---
title: 让网站支持黑暗模式
lang: zh-CN
display: home
description: 通过媒体查询 prefers-color-scheme 让你的网站支持黑暗模式及其更好的兼容
image: https://picsum.photos/1920/1080/?random&date=2019-06-27
date: 2019-06-27
tags:
  - css
  - cssnext
categories:
  - summary
--- 

通过媒体查询 `prefers-color-scheme` 让你的网站支持黑暗模式

<!-- more -->

::: tip 提示
这个属性目前还是实验性的，要使用需要满足下面的几个条件
1. MacOS 在 Mojave 10.14 版本以上或者 windows 10 在 1809 以上
2. 使用[支持浏览器](https://caniuse.com/#search=prefers-color-scheme)
:::

然后你就可以编写你的样式了

``` css
:root {
  --bgColor: #eee;
  --textColor: #111;
}
@media (prefers-color-scheme: light) {
  :root {
    --bgColor: #fff;
    --textColor: #000;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --bgColor: #000;
    --textColor: #fff;
  }
}

.dome {
  color: var(--textColor);
  background: var(--bgColor);
}
```

当然目前这样的兼容性比较差，如果你需要更好的兼容性。你可以参考[css-prefers-color-scheme](https://github.com/csstools/css-prefers-color-scheme)
