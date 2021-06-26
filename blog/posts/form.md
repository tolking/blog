---
title: 探索 vue 的动态生成表单组件
display: home
description: 在日常开发中我们经常会运用到表单，如何复用复用表单一直是我所探究的内容
image: https://picsum.photos/536/354?random&date=2021-06-26
date: 2021-06-26
vssue-title: form
tags:
  - vue
categories:
  - summary
---

在日常开发中我们经常会运用到表单，如何复用复用表单一直是我所探究的内容

<!-- more -->

## 常规表单

``` vue
<template>
  <form>
    <label>用户名</label>
    <input v-model="username" placeholder="请输入用户名" />
    <label>密码</label>
    <input v-model="password" placeholder="请输入密码" />
    <button>提交</button>
  </form>
</template>
```

如果想要在别的页面中复用当前表单内容，应该如何优雅地实现呢？

## 如何实现

当然这种功能可以通过公共组件实现，但不适用需要在公共组件中插入内容的情况；当然使用 render 和 jsx 也可以实现，但始终是静态化的内容。我想要一个动态化生成表单的方式，后来我想到了 `<component is="" />` 的方式实现动态生成。

``` vue
<template>
  <form>
    {{ form }}
    <div
      v-for="item in config"
      :key="item.prop"
    >
      <label :for="item.prop">
        {{ item.label }}
      </label>
      <component
        :is="item.component"
        :id="item.prop"
        :name="item.prop"
        :value="form[item.prop]"
        @input="e => form[item.prop] = e.target.value"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'  

const form = ref({})
const config = [
  { label: '用户名', component: 'input', prop: 'username' },
  { label: '密码', component: 'input', prop: 'password' },
]
</script>
```

通过约定的对象数组配置及可以动态渲染出表单内容，这样非常方便复用表单，甚至可以通过后台返回的数据生成表单

当然这只是简单的实现，更复杂的功能实现参考 [element-pro-components form](https://github.com/tolking/element-pro-components/blob/master/src/Form/Form.vue)
