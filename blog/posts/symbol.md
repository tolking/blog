---
title: ES6 symbol
lang: zh-CN
description: ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
image: https://picsum.photos/536/354?random&date=2018-02-18
date: 2018-02-18
vssue-title: symbol
tags:
  - js
  - es6
categories:
  - learn
--- 

ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

<!-- more -->

Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突

``` js
const s1 = Symbol('foo');
const s2 = Symbol('foo');

s1 === s2 // false
```

::: warning 注意
**Symbol函数前不能使用new命令**
**Symbol值不能与其他类型的值进行运算**
:::

### 作为属性名的Symbol

``` js
const mySymbol = Symbol()

// 第一种写法
const a = {}
a[mySymbol] = 'Hello!'

// 第二种写法
const a = {
  [mySymbol]: 'Hello!'
}

// 第三种写法
const a = {}
Object.defineProperty(a, mySymbol, { value: 'Hello!' })

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名

``` js
let obj = {};
const a = Symbol('a');
const b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols // [Symbol(a), Symbol(b)]
```