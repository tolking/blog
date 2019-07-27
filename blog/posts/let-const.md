---
title: ES6 let 与 const
lang: zh-CN
description: ES6 新增了 let 命令，用来声明只在所在的代码块内有效变量，不存在变量提升
image: https://picsum.photos/1920/1080/?random&date=2018-02-12
date: 2018-02-12
vssue-title: let-const
tags:
  - js
  - es6
categories:
  - learn
--- 

ES6 新增了 let 命令，用来声明只在所在的代码块内有效变量，不存在变量提升

<!-- more -->

## 在代码块内生效

``` js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000 * i)
}
// (10) 10

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000 * i)
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

上面例子在for循环中使用 var 声明变量时：每隔1s打印 10
而使用 let 时：得到每隔1s打印 i值

## 暂时性死区

只要块级作用域内存在 let 命令，它所声明的变量就 绑定（binding）这个区域，不再受外部的影响

``` js
var m = 123;

if (true) {
  m = 456; // ReferenceError
  let m;
}
```

## 不允许重复声明

let不允许在相同作用域内，重复声明同一个变量

``` js
{
  let a = 10;
  var a = 1; // error
}
```

而 const 声明一个只读的常量，一旦声明，常量的值就不能改变，只在声明所在的块级作用域内有效，不存在变量提升，也存在暂时性死区

``` js
const PI = 3.1415;
PI // 3.1415

PI = 3; // TypeError: Assignment to constant variable
```

**使用 const 命名数组与对象时数据可能会由一些操作而变化**

``` js
const a =['1']
a.push('m')
a // ["1", "m"]
a = {} // TypeError: Assignment to constant variable.
```

这是由于 const 命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以需要注意

使用顺序建议：const -> let -> var