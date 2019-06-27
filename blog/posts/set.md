---
title: ES6 Set
lang: zh-CN
description: Set 类似于数组，但是成员的值都是唯一的，没有重复的值
image: https://picsum.photos/1920/1080/?random&date=2018-02-22
date: 2018-02-22
tags:
  - js
  - es6
categories:
  - learn
  - summary
--- 

Set 类似于数组，但是成员的值都是唯一的，没有重复的值
- Set 是一个构造函数，用来生成 Set 数据结构
- Set 函数可以接受一个数组(或者具有 iterable 接口的其他数据结构)作为参数

<!-- more -->

``` js
var set = new Set([1, 2, 3, 4, 4])
set  // Set {1, 2, 3, 4}
[...set]  // [1, 2, 3, 4]  ( [...new Set(array)] 去除数组的重复成员)
```

- 向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值
- 在Set内部，两个NaN是相等
``` js
let set = new Set()
let a = NaN
let b = NaN
set.add(a)
set.add(b)
set  // Set {NaN}
```

- 两个对象总是不相等的
``` js
let set = new Set()
set.add({})
set.size  // 1
set.add({})
set.size  // 2
```

Set 方法
- add(): 添加某个值，返回 Set 结构本身
- has(): 返回一个布尔值，表示该值是否为Set的成员
- delete(): 删除某个值，返回一个布尔值，表示删除是否成功
- clear(): 清除所有成员，没有返回值
``` js
let set = new Set()
set.add(1).add(2).add('2')  // Set {1, 2, "2"}
set.delete(2)  // true
set  // Set {1, "2"}
set.has(2)  // false
set.clear()
set  // Set {}
```

- Array.from 方法可以将 Set 结构转为数组
``` js
const items = new Set([1, 2, 3, 4, 5, 4])
const array = Array.from(items)
```

Set 遍历
- Set 的遍历顺序就是插入顺序
- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员
- keys方法、values方法、entries方法返回的都是遍历器对象
- 由于 Set 结构没有键名，只有键值(或者说键名和键值是同一个值)，所以keys方法和values方法的行为完全一致
``` js
let set = new Set(['red', 'green', 'blue'])

for (let item of set.keys()) {
  console.log(item)
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item)
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item)
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

- Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值
``` js
let set = new Set([1, 4, 9])
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
```