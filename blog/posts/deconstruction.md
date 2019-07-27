---
title: ES6 变量的解构赋值
lang: zh-CN
description: ES6允许按照一定模式，从数组、对象或字符串中提取值，对变量进行赋值，这被称为解构（Destructuring）
image: https://picsum.photos/1920/1080/?random&date=2018-02-13
date: 2018-02-13
vssue-title: deconstruction
tags:
  - js
  - es6
categories:
  - learn
--- 

ES6允许按照一定模式，从数组、对象或字符串中提取值，对变量进行赋值，这被称为解构（Destructuring）

<!-- more -->

``` js
const [a, b, c] = [1, 2, 3];
a // 1
b // 2
c // 3

const { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

[[1, 2], [3, 4]].map(([a, b]) => a + b) // [ 3, 7 ]
```