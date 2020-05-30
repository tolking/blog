---
title: 小米5 PixelExperience 体验
lang: zh-CN
display: home
description: 突然发现 PixelExperience 这个 ROM 包，花了些时间刷机体验下，用起来比 MIUI 好很多 漂亮、流畅、没有注入广告
image: https://picsum.photos/536/354?random&date=2020-05-30
date: 2020-05-30
vssue-title: PixelExperience
tags:
  - PixelExperience
categories:
  - dailylife
--- 

突然发现 PixelExperience 这个 ROM 包，花了些时间刷机体验下，用起来比 MIUI 好很多 漂亮、流畅、没有注入广告

<!-- more -->

## 初始工作

- 找出遗落在垃圾箱的小米5开机。。。插电开机。。。
- 看了下膨胀的电池，去X包随便下单一个电池
- 装上顺利开机

## 刷机前准备

- 下载配置adb和驱动、[解锁BL](https://www.miui.com/unlock/download.html)、最好从[开发版](http://bigota.d.miui.com/8.11.22/miui_MI5_8.11.22_f9ead04910_8.0.zip)开始刷机
- 下载 [TWRP](https://dl.twrp.me/gemini/)、[miui_MI5_V10](https://pan.baidu.com/s/1fV02cjhJjO_JWe8ynXQDcg) 提取码: 74fj、[PixelExperience](https://download.pixelexperience.org/gemini)

## 刷机

- 使用adb工具刷入临时 TWRP recovery (**记住不要重启到系统，不然会恢复到官方 recovery**)
- 使用四清
- 将手机链接至电脑，将ROM发送到手机 (或者可以使用 ADB Sideload)
- 先刷 **miui_MI5_V10** 再刷 **PixelExperience ROM**
- 刷完重启过几分钟就可以体验了

## 使用

- 由于404的关系，你最好先手动修改时间。不然你可能会遇到部分软件、网站无法联网。不要问我为什么
- 整体视觉效果都和我的 pixel 3 差不多
- 系统有两个相机，一个同 LineageOS 差不多，一个更接近 pixel
- 系统默认为虚拟按键，可以在按键中设置实体按键
- 整体比原生 MIUI 更流畅、也没有预装垃圾软件、更没有MIUI广告，除了404外简直不要太好，i了i了

![mi5_1](/img/mi5_1.png =360x640)
![mi5_2](/img/mi5_2.jpg =360x640)