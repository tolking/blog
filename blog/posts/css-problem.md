---
title: 记录一些遇到的css问题
lang: zh-CN
description: 记录一些遇到的css问题，不同的设备对css的支持不一样，可能出现不同的效果
image: https://picsum.photos/536/354?random&date=2018-07-22
date: 2018-07-22
vssue-title: css-problem
tags:
  - css
  - problem
categories:
  - summary
--- 

记录一些遇到的css问题，不同的设备对css的支持不一样，可能出现不同的效果

<!-- more -->

## ios底部input输入框的fixed问题

- ios的fixed可能会没有效果，具体可以去搜搜
- 过长的页面会使fixed变为absolute，固定的内容就随页面移动了
- 解决方法
- 将父级元素改为absolute，或者外层加一个absolute的div
- 将自身的fixed改为absolute
``` html
<div class="box">
  <div class="content"></div>
  <div class="input"></div>
</div>
```
``` css
.box {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.content {
  height: calc(100% - 60px);
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.input {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
}
```

## ios 的底部输入框在输入法弹起后被挡住

- 试了千百种方法，没找到完美的解决办法
- 我的暴力临时方法
- 通过 js 判断是否是 ios 设备，如果是
- 在 input 获取焦点后设置其父级的高度为 当前高度 - 被挡住的高度
- 在 input 失去焦点后恢复其父级的高度
- 如果不是则不变
- 这样很可能有时会使输入法与输入框之间出现间隙

## 行内元素之间多余的间隔

- 由于html的结构关系，行内元素会出现多余的间隔
- 两个 img 之间也是一样
- 简单的解决办法就是将父级的 font-size 指定为 0px
- 行内元素的间隙就消失了
- 注意：这是行内元素字体的行高也同时消失了
- 需要重新指定行内字体的行高

## 行内元素顶部对齐

- 行内元素的顶部没有对齐
- 需要设置行内元素 vertical-align: top;
- 这时行内元素上面就齐平了


## IE 的 backgroun-img 图像消失

- 设置 display 为 inline-block 或 block 解决

## 隐藏 select 的箭头

``` css
select {
  appearance: none;
}
select::-ms-expand { 
  display: none;
}

## 隐藏 input number 的箭头

``` css
input[type="number"] {
  appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
}
```

## 设置全局的默认字体样式

``` css
body, input, textarea, button, select {
  font-family: "";
}
```

## 修改边框类型

``` css
box-sizing: border-box;
```

## 去除手机点击的蓝色遮罩

``` css
-webkit-tap-highlight-color: transparent;
```
