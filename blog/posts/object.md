---
title: Object构造函数的方法
description: Object构造函数的方法
image: https://picsum.photos/536/354?random&date=2019-05-11
date: 2019-05-11
vssue-title: object
tags:
  - js
categories:
  - summary
---

JavaScript 中的所有事物都是对象。整理 Object 构造函数的方法

<!-- more -->

## Object 构造函数的方法

### `Object.create()`

使用 `Object.create(proto, [propertiesObject])` 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__，返回一个带着指定的原型对象和属性新对象

- `proto` 新创建对象的原型对象
- `propertiesObject` 可选。如果没有指定为 undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties() 的第二个参数

``` js
const person = {
  say () {
    name: '',
    console.log(`My name is ${this.name}. I am ${this.age}`)
  }
}

let me = Object.create(person, {
  age: {
    get () {
      return 18
    },
    set (newValue) {
      age = newValue
    },
    enumerable: true,
    configurable: true
  }
})

me.name = 'XXX'
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

### `Object.defineProperty()`

使用 `Object.defineProperty(obj, prop, descriptor)` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象

- obj 要在其上定义属性的对象
- prop 要定义或修改的属性的名称
- descriptor 将被定义或修改的属性描述符

``` js
const obj = {}
let descriptor = Object.create(null) // 没有继承的属性
// 默认没有 enumerable，没有 configurable，没有 writable
descriptor.value = 'static'
Object.defineProperty(obj, 'key', descriptor)

// 显式
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
})

// 循环使用同一对象
function withValue(value) {
  let d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  )
  d.value = value
  return d
}
// ... 并且 ...
Object.defineProperty(obj, 'key', withValue('static'))

// 如果 freeze 可用, 防止代码添加或删除对象原型的属性
// （value, get, set, enumerable, writable, configurable）
(Object.freeze||Object)(Object.prototype)
```

### `Object.defineProperties()`

使用 `Object.defineProperties(obj, props)` 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象

+ obj 在其上定义或修改属性的对象。
+ props 要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符（更多详情，请参阅Object.defineProperty()）。描述符具有以下键：
  - configurable true 当且仅当该属性描述符的类型可以被改变并且该属性可以从对应对象中删除。默认为 false
  - enumerable true 当且仅当在枚举相应对象上的属性时该属性显现。默认为 false
  - value 与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）。默认为 undefined.
  - writable true当且仅当与该属性相关联的值可以用assignment operator改变时。默认为 false
  - get 作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。默认为 undefined
  - set 作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。默认为 undefined

``` js
let obj = {}
Object.defineProperties(obj, {
  'value1': {
    value: true,
    writable: true
  },
  'value2': {
    value: 'Hello',
    writable: false
  }
})

console.log(obj) // {value1: true, value2: "Hello"}
```

### `Object.freeze()`

使用 `Object.freeze(obj)` 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改

``` js
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
Object.freeze(obj)

obj.a = 'a'
console.log(obj) // {a: 1, b: 2, c: 3, d: 4}
```

### `Object.isFrozen()`

使用 `Object.isFrozen(obj)` 方法判断一个对象是否被冻结。

``` js
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

console.log(Object.isFrozen(obj)) // false

Object.freeze(obj)

obj.a = 'a'
console.log(obj) // {a: 1, b: 2, c: 3, d: 4}

console.log(Object.isFrozen(obj)) // true
```

### `Object.seal()`

使用 `Object.seal(obj)` 方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变(不会影响从原型链上继承的属性。但 __proto__ 属性的值也会不能修改)

``` js
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

Object.seal(obj)
delete obj.a // false
obj.a = 'a'
console.log(obj) // {a: "a", b: 2, c: 3, d: 4}
```

### `Object.isSealed()`

使用 `Object.isSealed(obj)` 方法判断一个对象是否被密封

``` js
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

console.log(Object.isSealed(obj)) // false

Object.seal(obj)
delete obj.a // false
obj.a = 'a'
console.log(obj) // {a: "a", b: 2, c: 3, d: 4}

console.log(Object.isSealed(obj)) // true
```

### `Object.preventExtensions()`

使用 `Object.preventExtensions(obj)` 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性(仅阻止添加自身的属性。但属性仍然可以添加到对象原型)

``` js
let obj = {}
Object.preventExtensions(obj)

obj.a = 1
console.log(obj) // {}
```

### `Object.isExtensible()`

使用 `Object.isExtensible(obj)` 方法判断一个对象是否是可扩展的(是否可以在它上面添加新的属性)

``` js
let obj = {}

console.log(Object.isExtensible(obj)) // true

Object.preventExtensions(obj)

obj.a = 1
console.log(obj) // {}
console.log(Object.isExtensible(obj)) // false
```

### `Object.getOwnPropertyNames()`

使用 `Object.getOwnPropertyNames(obj)` 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组

``` js
const a = Symbol('a')
const b = Symbol.for('b')
const person = {
  [a]: 'a',
  [b]: 'b',
  name: 'XXX',
  age: 18,
  say () {
    name: '',
    console.log(`My name is ${this.name}. I am ${this.age}`)
  }
}

console.log(Object.getOwnPropertyNames(person)) // ["name", "age", "say"]
```

### `Object.getOwnPropertySymbols()`

使用 `Object.getOwnPropertySymbols(obj)` 方法返回一个给定对象自身的所有 Symbol 属性的数组

``` js
const a = Symbol('a')
const b = Symbol.for('b')
const person = {
  [a]: 'a',
  [b]: 'b',
  name: 'XXX',
  age: 18,
  say () {
    name: '',
    console.log(`My name is ${this.name}. I am ${this.age}`)
  }
}

console.log(Object.getOwnPropertySymbols(person)) // [Symbol(a), Symbol(b)]
```

### `Object.getOwnPropertyDescriptor()`

使用 `Object.getOwnPropertyDescriptor(obj, prop)` 方法返回指定对象上一个自有属性对应的属性描述符(自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性)

- obj 需要查找的目标对象
- prop 目标对象内属性名称

``` js
const a = Symbol('a')
const b = Symbol.for('b')
const person = {
  [a]: 'a',
  [b]: 'b',
  name: 'XXX',
  age: 18,
  say () {
    name: '',
    console.log(`My name is ${this.name}. I am ${this.age}`)
  }
}

console.log(Object.getOwnPropertyDescriptor(person, 'say')) // {value: ƒ, writable: true, enumerable: true, configurable: true}
```

### `Object.getPrototypeOf()`

使用 `Object.getPrototypeOf(obj)` 方法返回指定对象的原型(内部[[Prototype]]属性的值)

``` js
const a = Symbol('a')
const b = Symbol.for('b')
const person = {
  [a]: 'a',
  [b]: 'b',
  name: 'XXX',
  age: 18,
  say () {
    name: '',
    console.log(`My name is ${this.name}. I am ${this.age}`)
  }
}

console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf({})) // true  
```
