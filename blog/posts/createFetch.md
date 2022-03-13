---
title: 使用 createFetch 替代 Axios 在 Vue 中进行请求封装
display: home
description: 使用 createFetch 替代 Axios 在 Vue 中进行请求封装
image: https://picsum.photos/536/354?random&date=2022-03-13
date: 2022-03-13
vssue-title: createFetch
tags:
  - vue
  - ts
categories:
  - summary
---

随着组合式函数在 Vue 中推行，是时候考虑换一种方式封装请求了

<!-- more -->

## 差别

[vueuse](https://vueuse.org/core/useFetch/) 中提供了 `useFetch` `createFetch` 实现请求。与 Axios 最大的区别除了是基于 Fetch 实现的外，还有它可以接收响应式参数同时返回响应式数据

``` ts
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

const url = ref('https://my-api.com/user/1')
const { data } = useFetch(url)
// or
const { data } = useFetch('https://my-api.com/user/1')
```

返回的 `data` 是一个响应式数据，直接可以在模版中使用。如果在 setup 函数中使用，这种方式相比更方便点

## 封装

就如同封装 Axios 一样，为了使用方便，我们需要进一步封装以更加适用于项目中。createFetch 就提供了这种能力，下面仅提供简单的示例，更全面的配置请参考文档 CreateFetchOptions 类型描述

``` ts
import { createFetch } from '@vueuse/core'

const useMyFetch = createFetch({
  baseUrl: '', // 基础路由
  options: {
    immediate: false, // 是否在使用 useMyFetch 时自动运行 (推荐手动运行)
    timeout: 30000, // 请求过期时间
    // 在请求前修改配置，如：注入 token 值
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
    // 在请求后处理数据，如：拦截错误、处理过期
    afterFetch({ data, response }) {
      // code...
      return { data, response }
    },
    // 请求错误
    onFetchError({ data, error }) {
      console.error(error)
      return { data, error }
    },
  },
  fetchOptions: {
    mode: 'cors',
    credentials: 'include', // 请求时携带 cookie 值
  },
})
```

然后就可以像使用 useFetch 一样使用了

当然也可以根据使用情况进一步封装 `useGet` `usePost` `usePut` `useDelete`

## 使用

返回数据可以参考类型 UseFetchReturn，经常使用的

- data: 返回的响应式数据
- isFetching: 是否在请求中
- execute: 手动提交

``` vue
<template>
  <form>
    <input v-model="form.message" placeholder="edit me" />
  </form>
  <button :disabled="isFetching" @click="execute">提交</button>
  <p>{{ data }}</p>
</template>

<script setup>
const form = ref({})
const { data, isFetching, execute } = useMyFetch('/api/form').post(form).json()
</script>
```

[参考代码](https://github.com/tolking/element-admin-template/blob/main/src/composables/request.ts)
