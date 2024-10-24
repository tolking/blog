---
title: swagger-transform
description: swagger-transform 是一个用于将 swagger 文档转换为 TS 类型的工具
image: https://picsum.photos/536/354?random&date=2024-10-24
date: 2024-10-24
vssue-title: swagger-transform
tags:
  - swagger
categories:
  - project
---

swagger-transform 是一个用于将 swagger 文档转换为 TS 类型的工具

<!-- more -->

## 起因

我在之前的两篇文章中 [vue3 组合函数中优雅的复用增删改查](../lib/vue-composables-crud.md) 和 [使用 createFetch 替代 Axios 在 Vue 中进行请求封装](../lib/createFetch.md) 提到封装 hooks 用于请求。在使用的过程中，我发现我花费大量时间用于书写 TS 类型，在使用的时候也需要去找对应类型。影响开发节奏。由于后端生成的接口文档是基于 swagger，所以我就想到了能否通过 swagger 文档自动生成 TS 类型。

当然市面上已经有众多类似工具（如 [swagger-editor](https://editor.swagger.io/#/)），但这些工具生成的 TS 类型无法和我写的 hooks 结合使用，所以我就想到了自己实现一个。

## 不同

和其它工具不同的是，我在生成 TS 类型的同时，也会生成一个文件记录所有接口对应的类型信息和一个包含所有接口的文件。这样我就能够通过这两个文件推断出对应的类型。

// 所有接口对应的类型信息
```ts
// ...
export interface AllApis {
  '/pet': {
    /** Add a new pet to the store */
    post: {
      responses: undefined
      body: Pet
    }
    /** Update an existing pet */
    put: {
      responses: undefined
      body: Pet
    }
  }
  '/pet/findByStatus': {
    /** Finds Pets by status */
    get: {
      responses: Pet[]
      query: FindPetsByStatusQuery
    }
  }
}
```

// 所有接口
```ts
export const Apis = {
  /** Add a new pet to the store */
  addPet: '/pet',
  /** Update an existing pet */
  updatePet: '/pet',
  /** Finds Pets by status */
  findPetsByStatus: '/pet/findByStatus',
} as const
```

## 推断

下面的推断只提供一个参考，具体的推断还需要根据实际情况进行调整。

先提供一些辅助类型用于简化推断

```ts
export type ApisMethod = 'get' | 'post' | 'put' | 'delete'
export type ApisType = 'path' | 'header' | 'query' | 'body' | 'responses'

/** 获取 Apis 中的指定内容的类型 */
export type GetAllApisType<
  T extends keyof AllApis,
  Q extends ApisMethod,
  M extends ApisType,
> = Q extends keyof AllApis[T]
  ? M extends keyof AllApis[T][Q]
    ? AllApis[T][Q][M]
    : never
  : never

/** 选取符合请求方式的 api 键值 */
export type PickAllApisKey<T extends ApisMethod> = {
  [K in keyof AllApis]: T extends keyof AllApis[K] ? K : never
}[keyof AllApis]
```

然后改进 hooks 的类型推断，下面提供部分简单参考

```ts
export function useGet<T extends PickAllApisKey<'get'>>(
  url: MaybeRef<T>,
  query?: MaybeRef<GetAllApisType<T, 'get', 'query'>>,
  path?: MaybeRef<GetAllApisType<T, 'get', 'path'>>,
): UseFetchReturn<GetAllApisType<T, 'get', 'responses'>> {
  //...
  // _url = unref(url) replace path, and add qs.stringify(unref(query))
  return useMyFetch<GetAllApisType<T, 'get', 'responses'>>(_url).json()
}

export function usePost<T extends PickAllApisKey<'post'>>(
  url: MaybeRef<T>,
  payload?: MaybeRef<GetAllApisType<T, 'post', 'body'>>,
  path?: MaybeRef<GetAllApisType<T, 'post', 'path'>>,
): UseFetchReturn<GetAllApisType<T, 'post', 'responses'>> {
  //...
  // _url = unref(url) replace path
  return useRequest<GetAllApisType<T, 'post', 'responses'>>(link).post(payload).json()
}

//...
```

## 使用

在使用时，只需要找到对应的接口，然后传入对应的参数即可。

```ts
const { data, isFetching, execute } = useGet(Apis.findPetsByStatus, { status: ['available'] })
```

data 将会被推断为 Pet[] 类型；

useGet 只能接受 get 请求地址，如果传入 post 请求地址将会报错（如：Apis.addPet）；

useGet 的第二个参数 query 将会被推断为 FindPetsByStatusQuery 类型；

## 其它功能

除了生成标准的 TS 类型外，还支持生成 TS 类型加 class 的组合类型，这样就可以在鸿蒙开发中使用了。

[源码](https://github.com/tolking/swagger-transform)
