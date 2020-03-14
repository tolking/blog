---
title: 关于通过二维码打开微信小程序
display: home
description: 对于微信小程序可以通过扫码打开，同时也可以通过二维码传递参数，不但有专门的微信小程序二维码而且还支持普通的二维码，根据自己的经验总结一下两者的使用
image: https://picsum.photos/536/354?random&date=2020-02-22
date: 2020-02-22
vssue-title: scan-code-mp
tags:
  - mp
categories:
  - summary
--- 

对于微信小程序可以通过扫码打开，同时也可以通过二维码传递参数，不但有专门的微信小程序二维码而且还支持普通的二维码，根据自己的经验总结一下两者的使用。

<!-- more -->

对于简单的打开小程序的需求，两者都是支持的，区别是对于参数的获取方式。

## 初次获取参数

``` js
// app.js
App({
  onLaunch(options) {
    if (options.query.scene) {
      console.log('微信二维码', decodeURIComponent(options.query.scene))
    }
    if (options.q) {
      console.log('普通二维码', decodeURIComponent(options.q))
    }
  }
})
```

这样就获取二维码中传递的数据了

## 再次获取参数

对于已经启动并未被清理的小程序，是不会在执行 `onLaunch` 生命周期，通过 `wx.getLaunchOptionsSync()` 获取的数据是初次打开的数据，获取不到再次通过二维码打开传递的参数。

- 这时对于微信二维码，可以在页面的 `onLoad` 生命周期获取新的参数

``` js
Page({
  onLoad(options) {
    if (options.scene) {
      console.log('微信二维码', decodeURIComponent(options.scene))
    }
  }
})
```

- 对于普通的二维码，这时只有调用扫描重新获取参数了

## 其它

- 微信二维码其它扫描软件并不能打开
- 普通的二维码是一个网址，几乎所有的扫描软件都能打开
