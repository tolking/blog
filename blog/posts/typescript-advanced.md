---
title: TypeScript 进阶
display: home
description: 这是一个简单的进阶，带你快速了解如何优化 TypeScript 类型开发
image: https://picsum.photos/536/354?random&date=2020-08-20
date: 2020-08-20
vssue-title: typescript-advanced
tags:
  - ts
categories:
  - summary
---

这是一个简单的进阶，带你快速了解如何优化 TypeScript 类型开发

<!-- more -->

## 泛型

在使用的时候才指定类型

``` ts
async function get<T> (url: string) {
  return await fetch(url, { method: 'GET' })
    .then((res: Response) => res.json())
    .then((data: T) => data)
}
```

例如上面这段简单封装的 get 请求，由于返回的类型不能够确定，只有在使用时设置类型

``` ts
interface UserInfo {
  id: string
  name: string
}
type UserList = UserInfo[]

async function getUserInfo() {
  const res: UserInfo = await get<UserInfo>('/api/user/1')
  //...
}

async function getUserList() {
  const res: UserList = await get<UserList>('/api/userList')
  //...
}
```

## 声明合并

两个相同名字的函数、接口或类，将合并成一个类型

``` ts
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

interface UserInfo {
  id: string
  name: string
}
interface UserInfo {
  avatar: string
  vip: string
}

const user: UserInfo = {
  id: '1',
  name: '张三',
  avatar: 'https://...',
  vip: 'vip1'
}
```

## 交叉类型

组合多个类型组成新的类型

``` ts
interface UserInfo {
  id: string
  name: string
  avatar: string
  vip: string
}
interface Article {
  title: string
  content: string
  time: Date
}
type ArticleInfo = UserInfo & Article

const article: ArticleInfo = {
  id: '1',
  name: '张三',
  avatar: 'https://...',
  vip: 'vip1',
  title: '我的第一篇文章',
  content: '...',
  time: new Date()
}
```

## 类型保护

确保联合类型在一定的类型范围内

``` ts
let flag: boolean | string

if (typeof flag === 'boolean') {
  flag.valueOf()
} else {
  flag.length
}

let x: Date | RegExp

if (x instanceof RegExp) {
  x.test('abc')
}
else {
  x.valueOf()
}
```

``` ts
interface UserInfo {
  id: string
  name: string
  avatar: string
  vip: string
}
interface Article {
  title: string
  content: string
  time: Date
}

let item: UserInfo | Article

if ('name' in item) {
  item.avatar = ''
} else {
  item.content = ''
}

function isObject(data: any): data is object {
  return data !== null && typeof data === 'object'
}
```

## 继承

从其它接口或类上继承类型

``` ts
interface UserInfo {
  id: string
  name: string
  avatar: string
  vip: string
}
interface SvipInfo extends UserInfo {
  read: boolean
  write: boolean
}

interface Animal {
  name: string
  age: number
  eat: (food: string) => void
}

class Cat implements Animal {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eat(food) {
    console.log(`${this.name} eat ${food}`)
  }
}

const jack = new Cat('jack', 2)

jack.eat('food')
```

## keyof

遍历的接口类型里面的所有的属性名

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

type Keys = keyof UserInfo
// 相当于
type Keys = 'id' | 'name' | 'avatar' | 'vip'
```

## Extract

取出部分属性组合成新的类型

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

type Keys = keyof UserInfo

type User = Extract<Keys, 'id'>
// 相当于
type User = 'id'
```

## Exclude

排除部分属性组合成新的类型

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

type Keys = keyof UserInfo

type User = Exclude<Keys, 'id'>
// 相当于
type User = 'name' | 'avatar' | 'vip'
```

## Pick

从一个接口类型中，取出部分属性组合成新的类型

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

function postUserInfo(data: Pick<UserInfo, 'name' | 'avatar' | 'vip'>) {
  data.id = '1'
  // 类型“Pick<UserInfo, "name" | "avatar" | "vip">”上不存在属性“id”
}
```

## Omit

从一个类型中，排除部分属性组合成新的类型

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

function postUserInfo(data: Omit<UserInfo, 'id'>) {
  data.id = '1'
  // 类型“Pick<UserInfo, "name" | "avatar" | "vip">”上不存在属性“id”
}
```

## Partial

将一个类型里面的所有属性变为可选

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

function putUserInfo(data: Partial<UserInfo>) {
  //...
}

putUserInfo({
  id: '1',
  name: 'admin'
})

putUserInfo({
  id: '1',
  vip: 'vip2'
})
```

## Required

将一个类型里面的所有属性变为必选

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

function getUserInfo(data: Required<UserInfo>) {
  data.id // (property) id: string
}
```

## Readonly

将一个类型里面的所有属性变为只读

``` ts
interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

function getUserInfo(data: Readonly<UserInfo>) {
  data.vip = 'svip'
  // (property) vip: string
  // 无法分配到 "vip" ，因为它是只读属性
}
```

## Record

将一个类型的所有属性值都映射到另一个类型上组合成一个新的类型

``` ts
type Methods = 'get' | 'post' | 'delete' | 'put'

interface Data {
  [key: string]: any
}

type MethodsData = Record<Methods, Date>
```

::: tip
可以将鼠标至类型名上，按住 `ctrl` 点击，可以跳转到类型定义

同时可以查看其它的一些高级类型
:::

## 自定义高级类型

在上面的 [Partial](#Partial) 中，虽然将所有类型都变为可选了，但对于修改来说 `id` 应该是必选的，显然跟实际需求不合。当然可以手动写一个满足要求的接口，但这不是很好的选择。这时你就开始尝试手动写些高级类型，来满足各种特殊的需求

``` ts
type PutDate<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & {
  [Q in Exclude<keyof T, K>]?: T[Q]; 
}

// 等同于 type PutDate<T, K extends keyof T> = Required<Pick<T, K>> & Partial<Omit<T, K>>

interface UserInfo {
  id?: string
  name: string
  avatar: string
  vip: string
}

function putUserInfo(data: PutDate<UserInfo, 'id'>) {
  //...
}

putUserInfo({
  id: '1',
  name: 'admin'
})

putUserInfo({
  vip: 'vip2'
  // 类型“{ vip: string; }”的参数不能赋给类型“PutDate<UserInfo, "id">”的参数。
  //  类型 "{ vip: string; }" 中缺少属性 "id"，但类型 "{ id: string; }" 中需要该属性
})
```
