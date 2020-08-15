---
title: TypeScript 入门
display: home
description: 这是一个简单的入门，带你快速了解 TypeScript
image: https://picsum.photos/536/354?random&date=2020-08-15
date: 2020-08-15
vssue-title: typescript-threshold
tags:
  - ts
  - js
categories:
  - summary
--- 

这是一个简单的入门，带你快速了解 TypeScript

<!-- more -->

## 准备

- 推荐使用 vs code 编辑器开始下面操作
- 创建 `test.ts` 文件

输入下面内容

``` ts
let flag = true
let number = 1024
let str = 'hello world'
let arr = [1, 2, 3, 4]
let u = undefined
let n = null
let fun = () => {}
const type = 'type'
```

然后将鼠标移动至变量名上，弹框显示类型推论。例如： `let flag: boolean`

可以按照提示类型，完善代码（当然也可以省略）

``` ts
let flag: boolean = true
```

尝试将变量修改为其它类型，将报错

``` ts
flag = 'true'
// 不能将类型“"true"”分配给类型“boolean”
```

## 基础类型

### boolean

表示是一个布尔值

``` ts
let flag: boolean = true

flag = false
```

### number

表示是一个数字

``` ts
let number: number = 1024

number = 0b1010
```

### string

表示是一个字符串

``` ts
let str: string = 'hello world'

str = `number: ${number}`
```

### null

表示 null。**默认情况下null是所有类型的子类型**

``` ts
let n: null = null
```

### undefined

表示是 undefined。**默认情况下undefined是所有类型的子类型**

``` ts
let u: undefined = undefined
```

### array

表示是一个数组

``` ts
let arrString: Array<string> = ['a', 'b', 'c', 'd']
let arr: number[] = [1, 2, 3, 4]
```

### object

表示是一个对象

``` ts
let b: object = {}
let a: {} = {}

let cat: {
  readonly name: string // readonly 表示该项只读
  age: number
  like?: string // ? 表示该项可选(相当于 like: string | undefined)
  eat?: (food: string) => void
} = {
  name: 'jack',
  age: 2
}
let obj: {
  [key: string]: string // 表示键为 string 类型，值为 string 类型
} = {
  a: 'aa',
  b: 'bb'
}
```

### symbol

表示是一个 symbol

``` ts
let sym: symbol = Symbol('key')
```

### any

表示可以是一个任意类型的值。**不建议过多使用，不然就失去意义了**

``` ts
let a: any = 'hello world'

a = 1024
```

### tuple

表示是一个元组。**已知元素数量和类型的数组**

``` ts
let cat: [string, number] = ['喵', 2]

cat[1] = 3
```

### enum

表示是一个枚举。**定义数值集合**

``` ts
enum Vip {vip, svip, wip}
```

### RegExp

表示是一个正则表达式

``` ts
let reg: RegExp = /^[0-9][a-z]/i
```

### void

表示一个函数没有返回值

``` ts
let fun: () => void = () => {}

function myName(name: string): void {
  console.log(name)
}
```

### never

表示一个不存在的值的类型

``` ts
function error(message: string): never {
  throw new Error(message)
}
```

## 联合类型

将变量设置多种类型

``` ts
let flag: boolean | string = true
flag = 'true'

let arr: (string | number)[] = [1, 'a', 3. 'd']
let arr2: Array<string | number> = ['a', 2, 'c', 4]

let obj: {
  a: number | boolean
} = {
  a: 1
}
obj.a = true
```

联合类型只能够访问联合类型下相同的方法

``` ts
let flag: boolean | string

flaga.valueOf()
flaga.length
// 类型“string | boolean”上不存在属性“length”。
//  类型“false”上不存在属性“length”
```

## 类型断言

指定一个联合类型当前的类型

``` ts
let flag: boolean | string

if (!flaga) {
  flaga = 'true'
}

(<string>flaga).length
// or
(flaga as string).length
```

对于可选对象的断言

``` ts
let cata: {
  readonly name: string
  age: number
  like?: {
    food?: string
  }
} = {
  name: 'jack',
  age: 2
}

if (!cata.like?.food) {
  cata.like = { food: 'fish' }
}

console.log(cata.like!.food);
```

## 接口和类型别名

当类型过长不但影响阅读而且不利于重复使用

``` ts
interface Cat { // 通常使用大驼峰表示类型声明
  readonly name: string
  age: number
  like?: string
  eat?: (food: string) => void
}

let cat: Cat = {
  name: 'jack',
  age: 2,
  eat(food) {
    console.log(`${this.name} eat ${food}`)
  }
}

type Method = 'get' | 'post' | 'put' | 'delete'
type Test = boolean | string | number | Cat | Cat[]
```

## 模块

通过模块可以将多个文件中的类型进行集中管理。**一般类型声明会放在 `@types` 或 `types` 文件夹下的 `*.d.ts` 中**

修改代码文件夹结构

```
|-- src
  |-- index.ts
  |-- ...
|-- types
  |-- index.d.ts
  |-- ...
```

同 ES6 的模块，使用 export 导出类型声明

``` ts
// types -> index.d.ts
export interface Cat {
  readonly name: string
  age: number
  like?: string
  eat?: (food: string) => void
}
```

使用 import 导入类型声明

``` ts
// src -> index.js
import { Cat } from '../types/index.js'

let cat: Cat = {
  name: 'jack',
  age: 2,
  eat(food) {
    console.log(`${this.name} eat ${food}`)
  }
}
```

至此就可以开始尝试将 js 代码迁移到 ts 了
