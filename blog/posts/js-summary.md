---
title: js的一些特别技巧
description: 收集整理关于js的一些常用的技巧和新版带来的更加方便的操作
image: https://picsum.photos/536/354?random&date=2017-09-12
date: 2017-09-12
vssue-title: js-summary
tags:
  - js
categories:
  - summary
---

收集整理关于js的一些常用的技巧和新版带来的更加方便的操作

<!-- more -->

## js中的==

![An image](/img/js==.png)

[Edit fiddle - JSFiddle](http://jsfiddle.net/26Lf0a0L/)

## 利用js中隐性类型转换将数值与字符串互转

``` js
+'2'  // 2
typeof (+'2')  // 'number'
2 + '' // '2'
```

## 将数组转化为字符串

``` js
var arr = [1, 2, 3, 4, 5, 6, 7]
arr + '' // '1,2,3,4,5,6,7'
```

## 用位运算符来小数取整

``` js
~~3.14  // 3
~~-3.14  // -3
3.14 | 0  // 3
3.14 >> 0  // 3
3.14 << 0  // 3
```

## 用&运算符判断一个数的奇偶

``` js
// n & 1 如果值为0，n是偶数；值为1，n为奇数
7 & 1  // 1
8 & 1  // 0
```

## 数字的toString方法

``` js
1..toString()   // '1' (ja中数字不分浮点和整形)
3.14.toString()   // '3.14'
(1).toString()  // '1' (相当于new Number(1).toString())
```

## 运用 Set 与 扩展运算符 去除数组的重复成员

``` js
var arr = [1, 2, 2, 3, 4, 5, 4, 6, 7]
var arr1 = [...new Set(arr)]
arr1  // [1, 2, 3, 4, 5, 6, 7]
```

## 运用 filter 去除数组中的无效值

``` js
var arr = [1, true, , '', 3, 4, 'false', false, undefined, null]
arr.filter(item => item) // [1, true, 3, 4, "false"]
```

## 运用 Set 与 Array.from 去除数组的重复成员

``` js
var arr = [1, 2, 2, 3, 4, 5, 4, 6, 7]
const set = new Set(arr)
const arr1 = Array.from(set)
arr1  // [1, 2, 3, 4, 5, 6, 7]
```

## 利用三元表达式简写if else

``` js
let a = true

if (a) {
  console.log('ok')
} else {
  console.log('error')
}  // ok

// 三元表达式简写
a ? console.log('ok') : console.log('error')  // ok

// 三元表达式调用function
a ? a() : b()

// 三元表达式赋值
let b = a ? 'ok' : 'error'  // b='ok'

// 三元表达式嵌套
let c = a ? 'ok' : false ? 'error' : 'no'  // c='ok' (相当于 let c = a ? 'ok' : (false ? 'error' : 'no'))

// 三元运算运算的优先级比(+)低，如果前面有(+)要注意
let d = 'this ' + a ? 'ok' : 'error'  // d='ok'
// 相当于 let c = ('this ' + a) ? 'ok' : 'error'
//              = 'this true' ? 'ok' : 'error'
// 'this true' 为 true，所以结果变为 'ok'
```

## "||"的妙用

``` js
// "||" 从左往右依次判断，为false则继续，为true则返回此原值(未转换为布尔值时的值)
function test (i) {
  let a
  if (i) {
    a = i
  } else {
    a = 'error'
  }
  return a
}

// 三元表达式简写
function test (i) {
  return i ? i : 'error'  // 不建议这样写
}

//  "||"简写
function test (i) {
  return i || 'error'
}

test('ok')  // 'ok'
test()  // 'error'

let a = a || {}  // 如果a已经定义过了，则还保持值，否则初始化为空对象
```

## "&&"的妙用

``` js
// "&&"从左往右依次判断，为true则继续，为false则返回此原值(未转换为布尔值时的值)
lat a = true
if (a) {
  console.log('ok')
}  // ok

// "&&"简写
a && console.log('ok')  // ok
```

## "&&"与"||"的组合运用

``` js
let a = 2, b
switch (a) {
  case 1:
    b = 'a=1'
    break
  case 2:
    b = 'a=2'
    break
  case 3:
    b = 'a=3'
    break
}  // b='a=2'

//  简写
let a = 2
let b = (a === 1 && 'a=1') || (a === 2 && 'a=2') || (a === 3 && 'a=3')  // b='a=2'
```

## 运用对象形式改写switch

``` js
let a = 2, b
switch (a) {
  case 1:
    b = 'a=1'
    break
  case 2:
    b = 'a=2'
    break
  case 3:
    b = 'a=3'
    break
}  // b='a=2'

// 简写
let a = 2
let b = { 1: 'a=1', 2: 'a=2', 3: 'a=3' }[a]
b  // b='a=2'
```

## 使用 es6 中的 Object.assign() 来合并对象

``` js
Object.assign(obj, obj1, obj2);
// 后面的对象将合并到obj中
// 如果具有相同的键值将被后面覆盖
```

### 通过 ... 来浅拷贝一个对象

``` js
let obj = { a: 1, b:2 }
let obj1 = { ...obj }

obj.a = 'a'
obj1.a = 'b'

console.log(obj) // {a: "a", b: 2}
console.log(obj1) // {a: "b", b: 2}
```

## 通过 json 来深拷贝一个对象

``` js
let newObj = JSON.parse(JSON.stringify(obj))
// 此时修改 newObj 的数据将不会引起 obj 数据的变化
```

## 多维数组降维

``` js
const flattenDeep = arr => Array.isArray(arr)
  ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
  : [arr]

flattenDeep([1, [[2], [3, [4]], 5]]) // [1, 2, 3, 4, 5]

// 或者使用 `flat()` (这样会移除新数组中的空项)

[1, [[2], [3, [4]], 5]].flat(Infinity) // [1, 2, 3, 4, 5]
```