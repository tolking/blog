---
title: 数组方法总结
lang: zh-CN
description: 常用数组方法总结
image: https://picsum.photos/536/354?random&date=2019-06-13
date: 2019-06-13
vssue-title: array
tags:
  - js
categories:
  - summary
---

数组方法总结

<!-- more -->

## 不改变原数组，返回新数组

- concat()
连接两个或多个数组，两边的原始数组都不会变化，返回被连接数组的一个副本。

- join()
把数组中所有元素放入一个字符串中，返回字符串。

- slice()
从开始到结束（不包括结束）选择数组的一部分浅拷贝到一个新数组。

- map()
创建一个新数组并返回，其中新数组的每个元素由调用原始数组中的每一个元素执行提供的函数得来，原始数组不会改变。

- every()
对数组中的每个元素都执行一次指定的回调函数，直到回调函数返回false，此时every()返回false并不再继续执行。如果回调函数对每个元素都返回true，那么every()将返回true。

- some()
对数组中的每个元素都执行一次指定的回调函数，直到回调函数返回true，此时some()返回true并不再继续执行。如果回调函数对每个元素都返回false，那么some()将返回false。

- filter()
创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

- flat()
按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回(会移除新数组中的空项)

``` js
let arr1 = [1, 2, 3, 4, 5]
let arr2 = ['a', 'b', 'c']
let arr3 = [1, [[2], [3, [4]], 5]]

const a = arr1.concat(arr2) // [1, 2, 3, 4, 5, "a", "b", "c"]
const b = arr1.join() // "1,2,3,4,5"
const c = arr1.slice(1, 3) // [2, 3]
const d = arr1.map(item => item * 2) // [2, 4, 6, 8, 10]
const e = arr1.every(item => item > 0) // true
const f = arr1.some(item => item > 0) // true
const g = arr1.filter(item => item > 2) // [3, 4, 5]
const h = arr.flat(2) // [1, 2, 3, [4], 5]
const h2 = arr.flat(Infinity) // [1, 2, 3, 4, 5]

arr1 // [1, 2, 3, 4, 5]
arr2 // ['a', 'b', 'c']
arr3 // [1, [[2], [3, [4]], 5]]
```

## 不改变原数组，返回单个值

- find() 与 findIndex()
  - `find()`返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
  - `findIndex()`返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1

::: tip 提示
`arr.find(callback(element, index, array), thisArg)`

`arr.findIndex(callback(element, index, array), thisArg)`
  - element: 当前遍历到的元素
  - index(*): 当前遍历到的索引
  - array(*): 数组本身
  - thisArg(*): 执行回调时用作this 的对象
:::

``` js
let arr = [1, 2, 3, 4, 5]

arr.find((element) => element % 3 === 0) // 3
arr.findIndex((element) => element % 3 === 0) // 2
arr // [1, 2, 3, 4, 5]
```

- reduce()
对数组中的每个元素执行一个由您提供的函数(升序执行)，将其结果汇总为单个返回值。

::: tip 提示
`arr.reduce(callback(accumulator, currentValue, index, array), initialValue)`
 - accumulator: 累计器累计回调的返回值
 - currentValue: 数组中正在处理的元素
 - currentIndex(*): 数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1
 - array(*): 调用的数组
 - initialValue(*): 作为第一次调用 callback 函数时的第一个参数的值。如果没有提供初始值，则将使用数组中的第一个元素
:::

``` js
const arr = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

arr.reduce(reducer) // 10
arr.reduce(reducer, 5) //  15
arr // [1, 2, 3, 4]
```

## 不改变原数组，没有返回值

- forEach()
针对每一个元素执行提供的函数。会修改原来的数组，不会返回执行结果，返回undefined。

``` js
let arr = [1, 2, 3, 4, 5]

const a = arr.forEach(item => item * 2)
a // undefined
arr // [1, 2, 3, 4, 5]
```

## 改变原数组

- pop()
删除数组最后一个元素，返回被删除的元素。如果数组为空，则不改变数组，返回undefined。

- push()
向数组末尾添加一个或多个元素，返回改变后数组的长度。

- reverse()
颠倒数组中元素的位置，返回该数组的引用。

- shift()
从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

- unshift()
将一个或多个元素添加到数组的开头，并返回新数组的长度。

- sort()
对数组的元素进行排序，并返回数组。排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。

- splice()
向数组中添加/删除项目，然后返回被删除项目的新数组。

``` js
let arr = [1, 2, 3, 4, 5]

const a = arr.pop()
a // 5
arr // [1, 2, 3, 4]

const b = arr.push(5)
b // 5
arr // [1, 2, 3, 4, 5]

const c = arr.reverse()
c // [5, 4, 3, 2, 1]
arr //[5, 4, 3, 2, 1]

const d = arr.shift()
d // 5
arr // [4, 3, 2, 1]

const e = arr.unshift(5)
e // 5
arr // [5, 4, 3, 2, 1]

const f = arr.sort((a, b) => a - b)
f // [1, 2, 3, 4, 5]
arr // [1, 2, 3, 4, 5]

const g = arr.splice(2, 1, '3')
g // [3]
arr // [1, 2, "3", 4, 5]
```

- copyWithin()
浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

::: tip 提示
`arr.copyWithin(target, start, end)`
  - target: 复制序列到该位置。如果是负数，将从末尾开始计算
  - start(*): 开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。如果 start 被忽略，copyWithin 将会从0开始复制
  - end(*): 开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾
:::

``` js
let arr = [1, 2, 3, 4, 5]

const a = arr.copyWithin(2)
a // [1, 2, 1, 2, 3]
arr // [1, 2, 1, 2, 3]
const b = arr.copyWithin(3, 2, 4)
b // [1, 2, 1, 1, 2]
arr // [1, 2, 1, 1, 2]
```

- fill()
用一个固定值填充一个数组中从起始索引到终止索引内的全部元素

::: tip 提示
`arr.fill(value, start, end)`
  - value: 用来填充数组元素的值
  - start(*): 起始索引
  - end(*): 终止索引
:::

``` js
let arr = [1, 2, 3, 4, 5]

const a = arr.fill(0, 2, 4)
a // [1, 2, 0, 0, 5]
arr // [1, 2, 0, 0, 5]
const b = arr.fill(10)
b // [10, 10, 10, 10, 10]
arr // [10, 10, 10, 10, 10]
```