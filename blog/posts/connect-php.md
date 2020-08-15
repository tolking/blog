---
title: axios 将 json 转化为 formData
description: axios 将 json 转化为 formData
image: https://picsum.photos/536/354?random&date=2019-05-15
date: 2019-05-15
vssue-title: connect-php
tags:
  - json
  - axios
categories:
  - summary
--- 

基于 axios 的 transformRequest 将传入的 json 转化为 formData 对象

<!-- more -->

对于简单的转化

``` js
const service = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [
    data => {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }
  ]
})
```

对于复杂的 json 可已使用第三方插件，例如：[qs](https://www.npmjs.com/package/qs)

对于其它可能需要定义一个函数处理转化