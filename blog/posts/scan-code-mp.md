---
title: 关于通过二维码打开微信小程序
display: home
description: 微信小程序不但可以通过扫描专门的微信小程序二维码打开，而且还可以配置通过普通链接二维码打开，同时还可以向小程序传递参数
image: https://picsum.photos/536/354?random&date=2020-02-22
date: 2020-02-22
vssue-title: scan-code-mp
tags:
  - mp
categories:
  - summary
---

微信小程序不但可以通过扫描专门的微信小程序二维码打开，而且还可以配置通过普通链接二维码打开，同时还可以向小程序传递参数

<!-- more -->

## 扫普通链接二维码打开小程序

需要登录小程序后台，进入 `设置` -> `开发设置` -> `扫普通链接二维码打开小程序`，开启功能参考说明即可配置二维码规则

发布后通过微信扫一扫扫描所有符合匹配规则的二维码，将跳转至指定的小程序页面

**二维码中包含参数可以在小程序中获取**

## 通过小程序码传参

可以通过调用[服务端接口](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)传入 `scene`，打开小程序时可以获取其值

## 获取参数

在小程序的 `onLaunch` 与 `onLoad` 生命周期中，可以获取传递的参数

::: tip
由于 `onLaunch` 仅在小程序初始化执行，如果仅在 `onLaunch` 获取参数。当小程序处于后台时，扫描不同的二维码再次打开小程序时，不会触发 `onLaunch` 将无法获取新的参数。**所以最好在打开页面的 `onLoad` 生命周期中获取参数**
:::

``` js
// app.js
App({
  onLaunch(options) {
    if (options.query.scene) {
      console.log('微信二维码', decodeURIComponent(options.query.scene))
    }
    if (options.query.q) {
      console.log('普通二维码', decodeURIComponent(options.query.q))
    }
  }
})
```

``` js
Page({
  onLoad(options) {
    if (options.scene) {
      console.log('微信二维码', decodeURIComponent(options.scene))
    }
    if (options.q) {
      console.log('普通二维码', decodeURIComponent(options.q))
    }
  }
})
```

普通二维码将获取到二维码的原始信息，小程序二维码将获得scene值，获取到参数就可以进行相关逻辑处理了

## 分享传参 (附带)

最近发现直接在 `onShareAppMessage` 的 link 后加上参数，在小程序的页面直接就可以获取参数

``` js
page({
  onLoad(options) {
    console.log('options: ', options)
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onShareAppMessage() {
    return {
      title: '分享测试',
      path: 'pages/index/index?id=1&type=0'
    }
  },
})
```

::: tip
安卓与IOS测试通过，微信开发者工具无法打开链接

如果需要，可以通过兼容处理

``` js
App({
  onLaunch(option) {
    if (option.path.includes('?')) {
      uni.reLaunch({
        url: option.path
      })
    }
  }
})
```

:::
