---
title: element-pro-components
description: element-pro-components 是一个基于 element-plus, vue, vue-router 的一个适用于中后台开发的一套组件库
image: https://picsum.photos/536/354?random&date=2021-01-31
date: 2021-01-31
vssue-title: element-pro-components
tags:
  - vue
  - vue-router
  - element-plus
categories:
  - project
---

element-pro-components 是一个基于 [element-plus](https://element-plus.org/), [vue](https://v3.vuejs.org/), [vue-router](https://next.router.vuejs.org/) 的一个适用于中后台快速开发的一套组件库

<!-- more -->

由于工作需要，去年开发及维护多个后台管理系统。经常在想如何更优雅的处理不同项目间的协同开发，尝试过 [git单模板多项目的探索](/posts/2020/10/23/git-template-project/) 的方法优化，但还是觉得不够彻底。增加公共功能和修复公共的BUG，都需要前往 template 项目修改，完成后手动同步到各个需要的项目。后来尝试将公共的组件分离到一个单独的本地仓库中，通过 npm 能够安装本地包的特点，在需要的项目中安装。这样安装、修改、更新比起 template 都要方便不少，于是就有了做这个项目的想法

当然这也仅仅是一个自用顺带分享的项目，不太可能像一些模版项目完善。它的目标不是代替模版项目，而是提供一套简单的组件任你自由发挥制作一套属于自己的模版项目

当然为了以后升级 vue3，项目是面向 vue3 的。不会也没有办法处理 vue2 的兼容

[文档](https://tolking.github.io/element-pro-components)

[源码](https://github.com/tolking/element-pro-components)
