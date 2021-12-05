---
title: vue3 组合函数中优雅的复用增删改查
display: home
description: 如何在 vue3 的组合函数中优雅的复用增删改查
image: https://picsum.photos/536/354?random&date=2021-12-05
date: 2021-12-05
vssue-title: vue-composables-crud
tags:
  - vue
categories:
  - summary
---

在 vue3 新增的 `setup` 函数中我们可以更好抽离公用代码，通过组合函数在不同的地方使用，更好的复用代码

<!-- more -->

## 起因

在日常的业务中经常会遇到处理增删改查的情况，以前只是单纯封装api地址便于管理。但在每个业务逻辑中或多或少都会存在获取列表、获取详情、提交表单、修改表单、删除某项等需求，为什么不把这部分代码抽离出来复用呢？

## 思路

将增删改查拆分为 `查询列表` `查询详情` `增/改表单` `删除某项`，然后在在组合函数中处理相关所有逻辑。函数接收api地址等配置参数，返回页面中所需要的参数及函数。**如下是根据我的习惯封装，仅供参考**

### 查询列表

一般查询列表需要分页，同时可能包括一个搜索表单

#### 封装

``` js
import { computed, ref, unref } from 'vue'

/**
 * 封装获取列表
 * @param {string|Ref<string>} url 请求地址
 * @param {boolean} immediate 是否在初始化时加载，默认: `true`
 * @param {function} transform 转换搜索表单
 */
export function useList({ url, transform, immediate = true }) {
  const page = ref(1)
  const limit = ref(20)
  const total = ref(0)
  const query = ref({})
  // 请求上传的表单
  const payload = computed(() => {
    const _query = transform ? transform(unref(query)) : query.value
    return Object.assign({}, _query, {
      page: page.value, // 请求的当前页字段
      limit: limit.value, // 请求的条数字段
    })
  })
  const list = ref([])

  immediate && loadList()

  async function loadList() {
    // TODO: 请求api及赋值
  }

  function refreshList() {
    page.value = 1
    list.value = []
    loadList()
  }


  return {
    query,
    page,
    limit,
    total,
    list,
    loadList,
    refreshList,
  }
}
```

对于 TypeScript 可以通过向 useList 传递泛型优化类型

``` ts
export function useList<Item = Record<string, unknown>, Serach = Item>() {
  // code...
}
```

#### 在 setup 中使用

``` js
const {
  query, // 用于绑定查询表单
  page, // 用于绑定当前页
  limit, // 用于绑定查询条数
  total, // 记录列表总数
  list, // 当前列表
  loadList, // 获取列表数据
  refreshList, // 用于搜索，更新列表数据
} = useList({ url: '/api/xxx' })
```

如果查询列表具有初始值，可以通过指定 `immediate: false` 后手动赋值 query 再加载列表

``` js
const { query, loadList } = useList({ url: '/api/xxx', immediate: false })

query.value.type = 1
loadList()
```

如果需要修改查询列表参数，可以通过 `transform` 完成

``` js
const { query, loadList } = useList({ url: '/api/xxx', transform })

function transform(form) {
  const _form = { ...form }
  if (_form.time && _form.time.length) {
    _form.startDate = _form.time[0]
    _form.endDate = _form.time[1]
    _form.time = undefined
  }
  return _form
}
```

### 查询详情

查询详情一般需要指定一个id

#### 封装

``` js
import { computed, ref, unref, watch } from 'vue'

function suffixId(url, id) {
  // TODO: 处理url和id的关系
}

/**
 * 封装获取详情
 * @param {string|Ref<string>} url 请求地址
 * @param {boolean} immediate 是否在id变动时加载，默认: `true`
 */
export function useDetail({ url, immediate = true }) {
  const id = ref('')
  const detail = ref({})
  // 请求api的地址
  const _url = computed(() => suffixId(unref(url), unref(id)))

  immediate && watch(id, loadDetail)

  async function loadDetail() {
    // TODO: 请求api及赋值
  }

  return {
    id,
    detail,
    loadDetail,
  }
}
```

对于 TypeScript 可以通过向 useDetail 传递泛型优化类型

``` ts
export function useDetail<Detail = Record<string, unknown>>() {
  // code...
}
```

#### 在 setup 中使用

``` js
const {
  id, // 当前的id值
  detail, // 当前id详情信息
} = useDetail({ url: '/api/xxx' })

id.value = 1
```

### 增/改表单

增加和修改属于同类操作，一般api请求方式不同或者修改需要在地址后增加id

#### 封装

``` js
import { computed, ref, unref } from 'vue'

function suffixId(url, id) {
  // TODO: 处理url和id的关系
}

/**
 * 封装表单提交
 * @param {string|Ref<string>} url 请求地址
 * @param {string} type 提交请求方式 post | put，默认: `post`
 * @param {function} transform 转换表单
 */
export function useForm({ url, transform, type = 'post' }) {
  const form = ref({})
  const payload = computed(() => {
    return transform ? transform(unref(form)) : form.value
  })
  // 处理修改需要绑定id
  const _url = computed(() => suffixId(unref(url), form.value?.id))

  async function submit(reqType = type) {
    if (reqType === 'post') {
      // TODO: 提交新增表单，使用 url
    } else {
      // TODO: 提交修改表单，使用 _url
    }
  }

  return {
    form,
    submit,
  }
}
```

对于 TypeScript 可以通过向 useForm 传递泛型优化类型

``` ts
export function useForm<Form = Record<string, unknown>>() {
  // code...
}
```

#### 在 setup 中使用

``` js
const {
  form, // 用于绑定表单
  submit, // 提交表单
} = useForm({ url: '/api/xxx' })
```

如果是提交删除表单可以指定 `type: 'put'`

``` js
const { form, submit } = useForm({ url: '/api/xxx', type: 'put' })
// 或者
submit('put')
```

通过 transform 可以在提交表单前转化表单格式同 `useList`

### 删除某项

删除时一般也是需要指定一个id，也不需要传递参数，相对比较简单就不举例了。然后你可以将删除确认弹窗封装进里面

## 进阶

### api 管理

将api地址分散在不便于管理，这时可以单独创建一个文件管理api列表

``` js
export const Api = {
  xxx: '/api/xxx',
  // ...
}
```

使用时直接绑定 `({ url: Api.xxx })`

### 动态 url

上面举例都是制定 url 为 string 类型，当然也可以直接传一个响应url，只需要在请求时解构url即可

``` js
const url = computed(() => {
  // ...
  return url
})

const { list } = useList({ url })
```

``` js
export function useList({ url, transform, immediate = true }) {
  // ...
  async function loadList() {
    const res = await get(unref(url), payload.value)
    // ...
  }
  // ...
}
```

### useCrud

上面将增删改查分开，方便管理。当然都到这里了，是时候考虑重新合并了。

上面故意将 id 与 url 分离的原因就是为了在 useCrud 使用同一个 url (当然受到api接口格式影响)。如果你感兴趣，这部分就留作练习了

## 结语

我在日常中大量这种方式，能够减少业务页面大量重复代码，页面逻辑也更为清晰。当然组合函数可以运用到更多地方，我这里仅仅是通过业务中常见的增删改查举例，希望对你有所帮助。

示例中我隐藏与组件或请求相关的代码，可以根据具体情况灵活使用。如果有更好的方式，欢迎讨论交流
