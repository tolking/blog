---
title: 箭头函数
lang: zh-CN
description: ES6允许使用箭头 => 定义函数，简化函数的写法
image: https://picsum.photos/1920/1080/?random&date=2018-02-17
date: 2018-02-17
vssue-title: arrow-function
tags:
  - js
  - es6
categories:
  - learn
--- 

ES6允许使用箭头 => 定义函数，简化函数的写法

<!-- more -->

``` js
const sum = function(num1, num2) {
  return num1 + num2
}
// 等同于
const sum = (num1, num2) => num1 + num2
```

::: tip 提示
**箭头函数有几个使用注意点**

1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替
4. 不可以使用yield命令，因此箭头函数不能用作Generator函数
:::
