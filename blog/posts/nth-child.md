---
title: nth-child的一些特别使用技巧
lang: zh-CN
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-05-09
date: 2019-05-09
tags:
  - css
categories:
  - summary
meta:
  - name: description
    content: nth-child的一些特别使用技巧
--- 

使用 `:nth-child()` 选择器匹配属于其父元素的`某个、间隔、某段`子元素

<!-- more -->

### 选取某个子元素

在括号填入第几个子元素，就选取第几个子元素

``` css
.foo:nth-child(2) {
  color: #f33;
}
```

效果
<div>
  <style>
  .demo1 li:nth-child(2) {
    color: #f33;
  }
  </style>
  <ul class="demo1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>

### 选取间隔子元素

通过 `2n + 1` 选取奇数位的子元素，修改数字改变间隔

``` css
.foo:nth-child(2n + 1) {
  color: #f33;
}
```

效果
<div>
  <style>
  .demo2 li:nth-child(2n + 1) {
    color: #f33;
  }
  </style>
  <ul class="demo2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>

### 选取某段子元素

选取从第3个开始到最后这段子元素

``` css
.foo:nth-child(n + 3) {
  color: #f33;
}
```

效果
<div>
  <style>
  .demo3 li:nth-child(n + 3) {
    color: #f33;
  }
  </style>
  <ul class="demo3">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>

// 或者

选取从开始到第3个这段子元素

**注意：`-n` 不能够分开**

``` css
.foo:nth-child(-n + 3) {
  color: #f33;
}
```

效果
<div>
  <style>
  .demo4 li:nth-child(-n + 3) {
    color: #f33;
  }
  </style>
  <ul class="demo4">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>

### 选取中间某段子元素

利用上面的方法选取公共部分

**注意：`-n` 不能够分开**

``` css
.foo:nth-child(-n + 4):nth-child(n + 2) {
  color: #f33;
}
```

效果
<div>
  <style>
  .demo5 li:nth-child(-n + 4):nth-child(n + 2) {
    color: #f33;
  }
  </style>
  <ul class="demo5">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
