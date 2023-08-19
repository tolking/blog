---
title: element-plus-nuxt
description: element-plus-nuxt 是一个为 Nuxt 项目准备的自动引入模块
image: https://picsum.photos/536/354?random&date=2023-08-19
date: 2023-08-19
vssue-title: element-plus-nuxt
tags:
  - vue
  - element-plus
  - nuxt
categories:
  - project
---

element-plus-nuxt 是一个为 [Element Plus](https://element-plus.org) 组件库能够在 [Nuxt](https://nuxt.com) 中方便使用而制作的模块

<!-- more -->

## 起因

1. 在之前如果在 Nuxt 中使用 Element Plus 组件库或多或少都会遇到一些水合错误的警告。虽然可以使用 `ClientOnly` 组件来解决，但是这样会导致内容在客户端才被渲染，不是最好的方案。

2. Element Plus 在 Nuxt 中使用无法自动引入组件及样式。

所以我就想着能不能制作一个模块来解决这些问题。

## 原理

1. 为了处理水合错误这个问题我翻阅 Nuxt 的源码，发现 `app:rendered` 这个钩子，从这个钩子中可以获取渲染后的 teleports 数据，同时 Nuxt 会将 `teleports.body` 的内容注入到最终生成的界面中。所以我就利用这些特性，将 Element Plus 的组件在服务端渲染的 teleports 注入到 `teleports.body` 中，这样就可以直接注入到最终的界面中避免水合错误的警告了。

2. Nuxt 原生支持组件的自动引入，但对于 Element Plus 这样的组件库来说，无法按照 Nuxt 的规则来自动引入样式。所以我就参考 Nuxt 处理自动引入组件的逻辑，制作了一个插件来自动引入 Element Plus 的样式。

在处理完成这些问题后，我就将这些功能封装成了一个模块，方便在 Nuxt 中使用 Element Plus。

[源码](https://github.com/element-plus/element-plus-nuxt)
