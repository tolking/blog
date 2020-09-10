---
title: html页面加载优化
description: 通过使用 preload、prefetch 来优化页面加载
image: https://picsum.photos/536/354?random&date=2018-08-19
date: 2018-08-19
vssue-title: html-preload
tags:
  - html
categories:
  - summary
--- 

通过使用 preload、prefetch 来优化页面加载

<!-- more -->

``` html
<head>
  <link rel="preload"> <!-- 指定页面加载后很快会被用到的资源 -->
  <link rel="prefetch"> <!-- 利用空闲时间提前获取用户未来可能会访问的内容 -->
</head>
```

## preload
- 能够让你在你的HTML页面中 head 元素内部书写一些声明式的资源获取请求
- 可以指明哪些资源是在页面加载完成后即刻需要的，在浏览器的主渲染机制介入前就进行预加载
- 这一机制使得资源可以更早的得到加载并可用，且更不易阻塞页面的初步渲染，进而提升性能

### 通过 as 属性指定加载类型
- audio: 音频文件。
- document: 一个将要被嵌入到 frame 或 iframe 内部的HTML文档。
- embed: 一个将要被嵌入到 embed 元素内部的资源
- fetch: 那些将要通过fetch和XHR请求来获取的资源，比如一个ArrayBuffer或- JSON文件
- font: 字体文件
- image: 图片文件
- object: 一个将会被嵌入到 embed 元素内的文件
- script: JavaScript文件
- style: 样式表
- track: WebVTT文件
- worker: 一个JavaScript的web worker或shared worker
- video: 视频文件
``` html
<head>
  <link as="style" href="style.css" rel="preload">
  <link as="script" href="main.js" rel="preload">
</head>
```

### 通过 type 属性指定加载MIME类型
- 指明加载的MIME类型
- 浏览器如果支持，则会进行这一类型资源的预加载
- 否则便对其加以忽略
``` html
<head>
  <!-- 对字体文件预加载，优化初始字体显示 -->
  <link as="font" href="font.woff2" type="font/woff2" crossorigin rel="preload">
</head>
```

### 通过 crossorigin 属性指定跨域资源
- 预加载那些跨域资源
- 需要后端服务器支持

### 通过 media 属性使用媒体查询
- 接受媒体类型或有效的媒体查询作为属性值
- 根据不同的条件使用响应式的预加载
``` html
<head>
  <link as="image" href="icon_max_320,png" media="(max-width: 320px)" rel="preload">
  <link as="image" href="icon_min_321.png" media="(min-width: 321px)" rel="preload">
</head>
```

## prefetch
- 利用空闲时间提前获取用户未来可能会访问的内容
- 与使用 preload 的资源相比使用 prefetch 的资源相对优先级较低
``` html
<head>
  <link href="image.jpg" rel="prefetch">
  <link href="main.js" rel="prefetch">
</head>
```