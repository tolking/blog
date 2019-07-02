---
title: ES6 Map
lang: zh-CN
display: home
description: Map 类似于对象，但是“键”的范围不限于字符串，各种类型的值(包括对象)都可以当作键
image: https://picsum.photos/1920/1080/?random&date=2018-02-25
date: 2018-02-25
tags:
  - js
  - es6
categories:
  - learn
--- 

Map 类似于对象，但是“键”的范围不限于字符串，各种类型的值(包括对象)都可以当作键
- Map构造函数接受数组(任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构)作为参数

<!-- more -->

``` js
const map = new Map([
  ['foo', 1],
  ['bar', 2]
])
map.get('bar')  // 2
Set 和 Map 都可以用来生成新的 Map
const set = new Set([
  ['foo', 1],
  ['bar', 2]
])
const m1 = new Map(set)
m1.get('foo')  // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2)
m3.get('baz')  // 3
```

Map 属性和方法
- size 属性返回 Map 结构的成员总数
- set 方法设置键名key对应的键值为value，然后返回整个 Map 结构
- get 方法读取key对应的键值，如果找不到key，返回undefined
- has 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
- delete 方法删除某个键，返回true。如果删除失败，返回false
- clear方法清除所有成员，没有返回值
``` js
const map = new Map([
  ['foo', 1],
  ['bar', 2]
])
map.size // 2
map.set(2, 'value')  // Map {"foo" => 1, "bar" => 2, 2 => "value"}
map.get(2)  // "value"
map.has(1)  // false
map.delete(2)  // true
map.clear()
map  // Map {}
```

Map 遍历
- Map 的遍历顺序就是插入顺序
- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：遍历 Map 的所有成员
``` js
const map = new Map([
  ['F', 'no'],
  ['T',  'yes']
])

for (let key of map.keys()) {
  console.log(key)
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value)
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1])
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value)
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value)
}
// "F" "no"
// "T" "yes"

map.forEach((value, key, map) => console.log("Key: %s, Value: %s", key, value))
```

- 使用扩展运算符(...)转为数组结构
``` js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])

[...map.keys()]  // [1, 2, 3]
[...map.values()]  // ['one', 'two', 'three']
[...map.entries()]  // [[1,'one'], [2, 'two'], [3, 'three']]
[...map]  // [[1,'one'], [2, 'two'], [3, 'three']]
```