---
title: TypeScript 推导嵌套对象类型的字符串路径
display: home
description: TypeScript 实战，如何推导出嵌套对象类型的字符串路径
image: https://picsum.photos/536/354?random&date=2022-10-12
date: 2022-10-12
vssue-title: typescript-object-deep-path
tags:
  - ts
categories:
  - summary
---

TypeScript 实战，如何推导出嵌套对象类型的字符串路径

<!-- more -->

## 效果

根据嵌套对象类型推导出可能存在的路径

```ts
type A = DeepPath<{
  id: string
  name: string
}> // 'id' | 'name'

type B = DeepPath<{
  id: string
  info: {
    name: string
    phone: string
  }
}> // 'id' | 'info' | 'info.name' | 'info.phone'

type C = DeepPath<{
  id: string
  children: Array<{
    name: string
    phone: string
  }>
}> // 'id' | 'children' | `children[${number}]` | `children[${number}].name` | `children[${number}].phone`
```

## 如何推导

对于不是嵌套对象的类型可以通过 keyof 获取对象类型的键值，但这样无法处理深层类型

```ts
type A = keyof {
  id: string
  name: string
} // 'id' | 'name'
```

对于嵌套对象类型，需要要遍历嵌套对象类型的每一个键值的类型。然后如果遍历类型是对象或者数组类型就根据情况运用模板字符串类型拼接增加 `.` 或者 `[${number}]`

## 推导过程

- 通过模板字符串类型拼接路径 (这里将对象或者数组类型一起处理，也可以分开)

```ts
type NestedPath<T extends 'array' | 'object', P, C = undefined> = `${P & string}${T extends 'array' ? `[${number}]` : ''}${C extends string ? `.${C}` : ''}`
```

::: tip 提示
1. 由于模板字符串类型是建立在文本类型上的，所以需要使用 `P & string`
2. `T extends 'array' ? 'a' : 'b'` 是条件类型，根据条件匹配对应类型
:::
 
- 处理不同类型

```ts
type DeepNested<V, K = ''> = V extends object[]
  ? NestedPath<'array', K, DeepPath<V[number]> | undefined>
  : V extends unknown[]
  ? NestedPath<'array', K>
  : V extends object
  ? NestedPath<'object', K, DeepPath<V>>
  : never
```

::: tip 提示
1. `V extends object[]` 判断 V 是不是基于对象数组或者对象元组类型
2. `V[number]` 提取对象数组或者对象元组类型中的对象类型
3. `NestedPath<'array', K, DeepPath<V[number]> | undefined>` 其中的 ` | undefined` 是为了生成 `K[${number}]` 类型
:::

- 完善 `DeepPath` 类型

```ts
type DeepPath<T extends object> = {
  [Q in keyof T]-?: Q | DeepNested<NonNullable<T[Q]>, Q>
}[keyof T]
```
::: tip 提示
1.

```ts
type A<T extends object> = {
  [Q in keyof T]: T[Q]
}
```

与泛型 T 相同，相当于遍历泛型 T。这里 `T[Q]` 相当于遍历时进行的类型转化

2.

```ts
type B<T extends object> = {
  [Q in keyof T]: T[Q]
}[keyof T]
```

这里提取遍历后的类型值

3. 为了排除 `undefined` 等类型影响类型的推导，通过 `[Q in keyof T]-?:` 和 `NonNullable<T[Q]>` 排除
:::

到此推导就结束了，通过 `DeepPath` 就可以获取嵌套对象类型的字符串路径

[完整代码](https://www.typescriptlang.org/play?#code/C4TwDgpgBAchDOwIBMAKBDYALAPAFSggA8kA7ZeKAcnQCdb0QqoAfagewCMArCAY2BUANFFQiAwlAC8UAK7kIAMwCWpFAD5pUAAYASAN6ooAMiiJaqgOYBfAwWJkK1OgyZQA-DoDaB0rIC2nBC01gC62lAAXNRUtvqSDhDklOZWHjoAdAbi1hHRVLHaALAAUKWgkFAAIhAQYHCIKDgAaiIA0loFmjLNhCRJTly8Al6hpVDpDUhomLg09IzCUG0iNXUY2C1efoHBoZps8shKqhrjUVC9iclypADWpOwA7qSj555TKBtzLovt6udold+jchvxgO9YAhpt8cFQwQIlitqrUwLDmuoASUJtE1AA3YKlcrgaBrNGzfB9RyUBHAbpQfTnLwARSgqigdwgIHYiigeFCAFp3NFWWwyZ9kDgYOxSDBZAAbeXoTjyiD4Fn7ETMrHWLyc7m8-lEsolCrQACCWjJsMZ2LZyGiqVIlnOpHQ-ggjuAFmdpWsmgA9AHqMpkMw2FQ3R6qMazVAAEJW1E286hr0+l121SKdjRW0TCZRz1mb1Wc4TMBYGXFp2ZibWP2B4NUUPhkOkHNtlsd9gZItd7O9yvVmMmuOSGTWin5+3pst2vhYZTy5C0JLRc0LEA4GeF9010u+u0VqtqOdH+s6pshsOsaiL5erpJt7QPldr16+AJBELhO+vpd3ySHx9B2H8wj7fcIjYADHw-ECwOCCDhzUYoxxJaok3WadzmQTADwzc5ZHgYI83LKAi3POsC3QZAn3geAqPOXUxhKf0oCDKABU0AAiPCkB4u8eOI4JBJgkTaAQ78kL-cSSMkr9dl-SCPWgnQJKkpSINo+j4DQ4lKgAUSw8lNhnNMS0IrMezI48KP3Ji7JQgj5wLKA3yfUgNy3HdyL3D1HLck9q0Cgt-WYoj5NstzKMs1yaLotcGNChs2OvFtbwjQcBx7FSIBynMMmcrsJIK3sPI-F9BwyCrgMU8DZJ0aras-UDpOUos1O0ZrAM8zSGqK08IDUqgJLykr5IyHSkvgUcDOgAAxEyUztdA8ygTh1r4daHQZFznSgawjtS9jOJoLt0AyTgLqumqbs4GqMky5xbr4J6Mny2MMIAcWWnDVvWzaGXcna832yxDsO0ZIZYxsOObdAX3QfqZK65H6pkq60ZR5SHr4bGMdxmqcbCAm2q00JXpJynkDJxCib4an3uG0ogA)
