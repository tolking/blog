---
title: cssnext 中我最期待的属性
lang: zh-CN
display: home
description: 列举一些在下一代css技术中我最期待的属性
image: https://picsum.photos/1920/1080/?random&date=2019-07-06
date: 2019-07-06
vssue-title: cssnext
tags:
  - css
  - cssnext
categories:
  - summary
--- 

列举一些在下一代 `css` 技术中我最期待的属性

<!-- more -->

::: warning
- 这些属性可能还未被大多数浏览器所支持，通过[caniuse](https://caniuse.com)查询支持情况
- 如果你现在打算使用这些属性，你可以使用 postcss 插件 [postcss-preset-env](https://github.com/csstools/postcss-preset-env) 得倒更好的兼容性
:::

### Custom Properties 自定义属性

- 使用 `--` 来定义值
- 使用 `var()` 来获取值
- `var()` 可以增加第二个值作为备选值

``` css
:root {
  --textColor: #111;
  --bgColor: #eee;
}
.dome {
  color: var(--textColor);
  background: var(--bgColor, #fff);
}
```

### Custom Media Queries 自定义媒体查询

``` css
@custom-media --phone (max-width: 30em);

@media (--phone) {
  /* ... */
}
```

### Media Query Ranges

``` css
@media (480px <= width < 768px) {
  /* ... */
}
```

### Custom Selectors 自定义选择器

``` css
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

article :--heading {
  /* ... */
}
```

### Nesting Rules

``` css
html {
  & body {
    background: #fff;
    & header {
      color: #333;
    }
  }
}
```

### prefers-color-scheme

用来查询操作系统启用的是浅色还是深色模式

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

### Hexadecimal Alpha Notation

`RGB[A]` 或 `RRGGBB[AA]`

``` css
.demo {
  background-color: #f3f3f3f3;
  color: #0003;
}
```

### image-set()

``` css
.demo {
  background-image: image-set(
    "bg.jpg" 1x,
    "bg-2x.jpg" 2x,
    "bg-print.jpg" 600dpi
  );
}
```

### overflow-wrap

当一个不能被分开的字符串太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词中断换行

``` css
p {
  width: 200px;
  overflow-wrap: break-word;
}
```

### Grid Layout

将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系

``` css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}
```

### Gap Properties

`gap` 属性是用来设置网格行与列之间的间隙，该属性是 `row-gap` 和 `column-gap` 的简写形式

``` html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```
``` css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}
#grid > div {
  background-color: lime;
}
```

``` css
/* 或者使用多列布局 */
.dome {
  column-count: 3;
  gap: 40px;
}
```

### :not

``` css
div:not(.demo) {
  color: green;
}
```

### :any-link

``` css
a:any-link {
  border: 1px solid #f00;
}
```

### :in-range and :out-of-range

当一个 `<input>` 元素的前值处于属性 min 与 max 之间的范围时触发 `:in-range`，相反则触发 `:out-of-range`

``` css
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}
input:out-of-range {
  border: 2px solid red;
}
```

### Double Position Gradients

``` css
.pie_chart {
  background-image: conic-gradient(yellowgreen 40%, gold 0deg 75%, #f06 0deg);
}
```

### all

将除却 unicode-bidi 与 direction 之外的所有属性重设至其初始值，或继承值
- `initial` 该关键字代表改变该元素或其父元素的所有属性至初始值
- `inherit` 该关键字代表改变该元素或其父元素的所有属性的值至他们的父元素属性的值
- `unset` 该关键字代表如果该元素的属性的值是可继承的，则改变该元素或该元素的父元素的所有属性的值为他们父元素的属性值，反之则改变为初始值
- `revert` 指定依赖于声明所属的样式表原点的行为

``` css
a {
  all: initial;
}
```

### prefers-reduced-motion

用来查询操作系统是否启用最小化动画

``` css
.animation {
  animation: vibrate 0.3s linear infinite both; 
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```