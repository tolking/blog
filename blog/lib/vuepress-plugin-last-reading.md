---
title: vuepress-plugin-last-reading
description: 该插件在页面关闭时，记录当前浏览的位置信息。用来在下一次访问时，展示一个前往该位置的弹窗
image: https://picsum.photos/536/354?random&date=2020-10-23
date: 2020-10-23
vssue-title: vuepress-plugin-last-reading
tags:
  - vue
  - vuepress
categories:
  - project
---

该插件在页面关闭时，记录当前浏览的位置信息。用来在下一次访问时，展示一个前往该位置的弹窗

<!-- more -->

该插件主要是在页面关闭时，记录当前的路由和位置等信息

然后在页面重新加载时，获取到上次浏览的信息。如果时访问同一个页面则直接跳转到上次浏览的位置，如果不是同一个页面则弹出一个弹窗提示可以返回到上次浏览的位置

[详细文档](https://tolking.github.io/vuepress-plugin-last-reading/)

[源码](https://github.com/tolking/vuepress-plugin-last-reading)
