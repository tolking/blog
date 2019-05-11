---
title: Object构造函数的方法
lang: zh-CN
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-05-11
date: 2019-05-11
tags:
  - js
categories:
  - summary
meta:
  - name: description
    content: Object构造函数的方法
--- 

JavaScript 中的所有事物都是对象。整理部分 Object 构造函数的方法

<!-- more -->

## Object 构造函数的方法

### `Object.create()`

使用 `Object.create(proto, [propertiesObject])` 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__，返回一个带着指定的原型对象和属性新对象

- `proto` 新创建对象的原型对象
- `propertiesObject` 可选。如果没有指定为 undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties() 的第二个参数

``` js
const person = {
  name: '',
  age: 0,
  say () {
    console.log(`My name is ${this.name}. I am ${this.age}`)
  }
}

const me = Object.create(person)

me.name = 'XXX'
me.age = 18
me.say() // My name is XXX. I am 18

// or

const me = Object.create(person, {
  name: { value: 'XXX' },
  age: { value: 18 }
})

me.say() // My name is XXX. I am 18
```

使用 `Object.create({})` 创建一个真正的空对象，不带 `__proto__` 对象

### `Object.assign()`

使用 `Object.assign(target, ...sources)` 将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。**如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性**

- target 目标对象
- sources 源对象

``` js
const o1 = { a: 1 }
const o2 = { b: 2, c: 2 }
const o3 = { c: 3 }

const obj = Object.assign(o1, o2, o3)
console.log(o1) // { a: 1, b: 2, c: 3 }
console.log(obj) // { a: 1, b: 2, c: 3 }
```

**使用 `Object.assign(target, ...sources)` 会改变 target 的值**

``` js
const o1 = { a: 1 }
const o2 = { b: 2, c: 2 }
const o3 = { c: 3 }

const obj = Object.assign({}, o1, o2, o3)
console.log(o1) // { a: 1 }
console.log(obj) // { a: 1, b: 2, c: 3 }
```

### `Object.is(value1, value2)`

使用 `Object.is()` 方法判断两个值是否是相同的值

如果下列任何一项成立，则两个值相同：

- 两个值都是 undefined
- 两个值都是 null
- 两个值都是 true 或者都是 false
- 两个值是由相同个数的字符按照相同的顺序组成的字符串
- 两个值指向同一个对象
- 两个值都是数字并且
- 都是正零 +0
- 都是负零 -0
- 都是 NaN
- 都是除零和 NaN 外的其它同一个数字

这种相等性判断逻辑和传统的 == 运算不同，== 运算符会对它两边的操作数做隐式类型转换（如果它们类型不同），然后才进行相等性比较，（所以才会有类似 "" == false 等于 true 的现象），但 Object.is() 不会做这种类型转换。

这与 === 运算符的判定方式也不一样。=== 运算符（和== 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN

``` js
Object.is('foo', 'foo') // true
Object.is(window, window) // true

Object.is('foo', 'bar') // false
Object.is([], []) // false

var foo = { a: 1 }
var bar = { a: 1 }
Object.is(foo, foo) // true
Object.is(foo, bar) // false

Object.is(null, null) // true

// 特例
Object.is(0, -0) // false
Object.is(0, +0) // true
Object.is(-0, -0) // true
Object.is(NaN, 0/0) // true
```

### `Object.keys()`

使用 `Object.keys(obj)` 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致

``` js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

console.log(Object.keys(obj)) //  ["a", "b", "c", "d"]
```

### `Object.values()`
使用 `Object.values()` 方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )

``` js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

console.log(Object.values(obj)) //  [1, 2, 3, 4]
```

### `Object.entries()`

使用 `Object.entries(obj)` 方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）

``` js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

console.log(Object.entries(obj)) //  [["a", 1], ["b", 2], ["c", 3], ["d", 4]]
```

将Object转换为Map

``` js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
const map = new Map(Object.entries(obj))
console.log(map) // Map(4) {"a" => 1, "b" => 2, "c" => 3, "d" => 4}
```

### `Object.freeze()`

使用 `Object.freeze(obj)` 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改

``` js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
Object.freeze(obj)

obj.a = 'a'
console.log(obj) // {a: 1, b: 2, c: 3, d: 4}
```
