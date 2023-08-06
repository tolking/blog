---
title: Vue中的过滤器
description: Vue中的过滤器,自定义过滤器，可被用于一些常见的文本格式化
image: https://picsum.photos/536/354?random&date=2019-05-15
date: 2019-05-15
vssue-title: vue-filters
tags:
  - vue
categories:
  - learn
---

在 `Vue` 中自定义过滤器，可被用于一些常见的文本格式化

<!-- more -->

## 定义过滤器

全局过滤器 `src-> main.js` (在创建 Vue 实例之前)

``` js
Vue.filter('capitalize', value => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

在一个组件的选项中定义本地的过滤器

``` js
filters: {
  price (value) {
    let val = Number(value)
    let	pri = ''

    if(val < 1000) {
    	pri = val
    } else if (val >= 1000 && val < 10000){
    	val = val / 1000
    	pri = val + '千'
    } else if(val >= 10000){
    	val = val / 10000
    	pri = val + '万'
    }
    return pri
  }
}
```

## 使用过滤器

``` vue
{{ value | price }}

<!-- or -->

<div :price="value | capitalize"></div>
```

过滤器可以串联

``` vue
{{ value | price | toRMB }}
```
