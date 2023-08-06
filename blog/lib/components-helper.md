---
title: components-helper
description: components-helper 是一个通过解析 markdown 文档为 vue 组件库生成代码提示的工具
image: https://picsum.photos/536/354?random&date=2021-05-05
date: 2021-05-05
vssue-title: components-helper
tags:
  - vue
categories:
  - project
---

components-helper 是一个通过解析 markdown 文档为 vue 组件库生成代码提示的工具

<!-- more -->

由于 `vue` 文件的特殊性，我们往往都需要为组件库提供一种特殊的代码提示文件。这个工具就是自动化实现这个功能的一种方式，当然也不是最优秀的方式。

使用该工具不再需要手动维护代码提示文件，仅仅需要维护文档。该工具会解析特定格式的内容用来生成提示信息。大体格式[参考](https://github.com/tolking/components-helper/tree/main/test)，同时提供了大量的配置统一与默认格式不一样的情况。

[设计思路](../posts/components-helper)

[源码](https://github.com/tolking/components-helper)
