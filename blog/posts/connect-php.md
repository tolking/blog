---
title: 向php发送json的一种处理方法
lang: zh-CN
description: 向php发送json的一种处理方法
image: https://picsum.photos/1920/1080/?random&date=2019-05-15
date: 2019-05-15
vssue-title: connect-php
tags:
  - json
  - php
  - axios
categories:
  - summary
--- 

由于`PHP`的默认接收方式为 `'Content-Type": "application/x-www-form-urlencoded"`，如果直接向 PHP 发送 json 则 PHP 解析不到数据。需要前端或者后端修改一下

<!-- more -->

### 前端修改

基于 `axios`, 修改请求头并改变数据格式

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