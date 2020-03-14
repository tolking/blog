---
title: vuepress-theme-default-prefers-color-scheme
description: add prefers-color-scheme for vuepress default theme
image: https://picsum.photos/536/354?random&date=2019-08-23
date: 2019-08-23
vssue-title: vuepress-theme-default-prefers-color-scheme
tags:
  - vue
  - vuepress
categories:
  - project
--- 

vuepress-theme-default-prefers-color-scheme 是为了让 vuepress 的 [默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html) 支持 `浅色` 与 `深色` 模式的主题

<!-- more -->

[详细文档及演示](https://tolking.github.io/vuepress-theme-default-prefers-color-scheme)

## 原理

主要是基于下一代 css 技术中的 [prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) 与 [CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*) 实现

#### 查看支持浏览器

- [prefers-color-scheme](https://www.caniuse.com/#search=prefers-color-scheme)
- [CSS Variables](https://www.caniuse.com/#search=CSS%20Variables)

**对于 `prefers-color-scheme` 还需要你的操作系统支持切换浅色与深色模式**

- mac Mojave ^10.14
- windows 10 ^1809

**对于都不支持的浏览器将显示与默认主题几乎相同的样式**

::: tip
当然只需简单的配置就可以支持为更多的浏览器带来深色模式
:::
