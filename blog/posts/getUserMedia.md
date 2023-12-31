---
title: getUserMedia 使用踩坑
display: home
description: 记录在使用 getUserMedia 时遇到的问题
image: https://picsum.photos/536/354?random&date=2023-12-31
date: 2023-12-31
vssue-title: getUserMedia
tags:
  - getUserMedia
categories:
  - summary
---

记录在使用 getUserMedia 时遇到的问题

<!-- more -->

## 什么是 getUserMedia

[MediaDevices.getUserMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia) 是一个由浏览器提供的可以调用用户摄像头和麦克风的 API，可以用来获取用户的媒体流。通过这个API可以实现拍照、录像、音视频通话、人脸认证前端显示界面、纯前端实现二维码识别等功能。

## 使用

```html
<video id="video" preload="auto" playsinline webkit-playsinline="true" autoplay loop muted />
```

``` js
navigator.mediaDevices
  .getUserMedia({
    audio: true,
    video: { width: 1920, height: 1080, facingMode: 'user' },
  })
  .then(function (stream) {
    /* 将这个 stream 赋值到 video，开始播放 */
    const video = document.querySelector("video")
    video.srcObject = mediaStream
    video.onloadedmetadata = () => {
      video.play()
    }
  })
  .catch(function (err) {
    /* 返回的 err.name 可以判断用户是否拒绝 */
  });
```

## 踩坑

- 在使用 getUserMedia 时需要 https 协议，如果没有就会报错。
- 配置 video 的 width 和 height，其值是和屏幕显示相反的。
- 在指定 video 的 width 和 height 后，浏览器会调用最接近分辨率的摄像头。但用户可能有多个摄像头，这时候可以通过 `navigator.mediaDevices.enumerateDevices()` 来获取摄像头列表，然后通过 `deviceId` 来指定摄像头。
- 当调用前置摄像头时，video 显示的视频不是镜像的效果，这时可以通过 css `transform: scaleX(-1)` 翻转。
- 尽管支付宝内置浏览器是基于 `chrome 69` 的，但安卓手机却不支持调用 getUserMedia。
- 在 ios 上，微信和支付宝内置浏览器都可能遇到调用失败的情况。这时候需要确保 `video` 上配置有 `playsinline` 属性；然后在第一次调用摄像头后终止 stream，再重新调用一次，这时候就可以正常调用了。
