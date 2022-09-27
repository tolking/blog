---
title: 如何优雅的注销 Service Worker
display: home
description: 基于 Service Worker 请求流程说明应该如何正确注销
image: https://picsum.photos/1920/1080/?random&date=2022-09-27
date: 2022-09-27
vssue-title: unregister-service-worker
tags:
  - service worker
  - pwa
categories:
  - summary
---

有时候我们不在需要 PWA 或者其它基于 Service Worker 的功能，那应该如何优雅的注销 Service Worker 呢？

<!-- more -->

## Service Worker 如何工作

在了解如何注销 Service Worker 前，我们先大致了解下 Service Worker 如何工作


### 初次安装

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
```

在注册 Service Worker 文件后，开始将指定的一些静态资源进行离线缓存，然后 Service Worker 就会激活

### 再次访问

当再次访问时，所有的请求都会经过 Service Worker

这时候如果缓存命中，就直接返回缓存内容

如果缓存没有命中，则可以新建 fetch 请求加载相关内容

### Service Worker 更新

如果浏览器检测到 Service Worker 存在更新，就会下载新的 Service Worker 文件，执行同初次安装的缓存激活等行为

## 如何注销 Service Worker

ServiceWorkerRegistration 接口存在 [unregister](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/unregister) 方法，用于取消对 Service Worker 的注册。

于是可以修改原本的注册

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach(sw => sw.unregister())
  })
}
```

但这样不够完整，很有可能无法注销 Service Worker。

### 原因

虽然修改了注销代码，但是 Service Worker 可能没有更新。导致浏览器本地的缓存依然是旧版本，没有更新注销代码，所以可能无法注销 Service Worker。

### 解决方法

更新 Service Worker 文件，并清空缓存内容

```js
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((t) => {
      return Promise.all(
        t.map((n) => {
          return caches.delete(n)
        })
      )
    })
  )
})
self.skipWaiting()
```

由于 Service Worker 文件存在更新，浏览器则会更新最新的 Service Worker 文件。在执行新 Service Worker 文件时，清空本地所有缓存。然后所有的请求都走服务器，所以就可以正常执行注销代码
