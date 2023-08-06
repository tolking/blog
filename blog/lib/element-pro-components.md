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

## 起因

在工作中需要开发及维护多个后台管理系统。经常在想如何更优雅的处理不同项目间的协同开发，尝试过 [git单模板多项目的探索](../posts/git-template-project) 的方法优化，但还是觉得不够彻底。增加公共功能和修复公共的BUG，都需要前往 template 项目修改，完成后手动同步到各个需要的项目。后来尝试将公共的组件分离到一个单独的本地仓库中，通过 npm 能够安装本地包的特点，在需要的项目中安装。这样安装、修改、更新比起 template 都要方便不少，于是就有了做这个项目的想法。

当然这也仅仅是一个自用顺带分享的项目，不太可能像一些模版项目完善。它的目标不是代替模版项目，而是提供一套简单的组件任你自由发挥制作一套属于自己的模版项目

## 优势

- 通过更新依赖版本及可同步组件变动，方便使用
- 不需要花时间精简模版中未使用的依赖
- 支持按需引入组件及样式
- api 风格贴近 element-plus
- 基于 TypeScript 开发，完善的类型推断
- 与业务完全脱离，避免不同业务的组件混用产生错误
- 提供完善的代码提示

## 组件

### 布局相关

- [Layout](https://tolking.github.io/element-pro-components/zh-CN/components/layout) 基础的布局组件，能够自动从 vue-router 获取路由信息生成菜单
- [Menu](https://tolking.github.io/element-pro-components/zh-CN/components/menu) 自动从 vue-router 获取路由信息生成菜单，已包含在 Layout 组件中
- [Breadcrumb](https://tolking.github.io/element-pro-components/zh-CN/components/breadcrumb) 根据当前页面路由信息自动生成面包屑
- [Tabs](https://tolking.github.io/element-pro-components/zh-CN/components/tabs) 记录浏览的历史页面自动生成 tabs
- [Link](https://tolking.github.io/element-pro-components/zh-CN/components/link) 方便处理内部和外部跳转

### 表单相关

- [Form](https://tolking.github.io/element-pro-components/zh-CN/components/form) 根据 columns 配置信息动态生成表单，具体使用请查看文档
- [Radio](https://tolking.github.io/element-pro-components/zh-CN/components/radio) 根据 data 信息生成单选组，方便在 Form 中使用单选
- [RadioButton](https://tolking.github.io/element-pro-components/zh-CN/components/radio#radiobutton) 同 Radio
- [Checkbox](https://tolking.github.io/element-pro-components/zh-CN/components/checkbox) 根据 data 信息生成多选组，方便在 Form 中使用多选
- [CheckboxButton](https://tolking.github.io/element-pro-components/zh-CN/components/checkbox#checkboxbutton) 同 Checkbox
- [Select](https://tolking.github.io/element-pro-components/zh-CN/components/select) 根据 data 信息生成选择器，方便在 Form 中使用选择器
- [TreeSelect](https://tolking.github.io/element-pro-components/zh-CN/components/tree-select) 树形结构选择器
- [InputTag](https://tolking.github.io/element-pro-components/zh-CN/components/input-tag) 多标签输入框
- [AutocompleteTag](https://tolking.github.io/element-pro-components/zh-CN/components/input-tag#autocompletetag) 同 InputTag，额外提供输入建议

### 表格相关

- [Table](https://tolking.github.io/element-pro-components/zh-CN/components/table) 根据 columns 配置信息动态生成表格，具体使用请查看文档
- [Crud](https://tolking.github.io/element-pro-components/zh-CN/components/crud) 基于 Form 和 Table 用于快速构建增删改查页面
- [ColumnSetting](https://tolking.github.io/element-pro-components/zh-CN/components/column-setting) 配合 Table 或 Crud 使用，动态控制表格中某一项的显示与隐藏

### 其它

- [Descriptions](https://tolking.github.io/element-pro-components/zh-CN/components/descriptions) 根据 columns 配置信息动态列表形式的展示字段，具体使用请查看文档

## 国际化

同 elememt-plus 一样可以通过 ElConfigProvider 注入国际化配置，暂未提供配置文件

## 自定义主题

TODO: 等待 elememt-plus 深色主题推出后会相关进行同步更新。目前可以直接通过 css-variables 修改

## 路由格式

由于布局相关的组件需要从 vue-router 中获取路由信息，我们规范了路由格式详细可以查看 [路由和菜单](https://tolking.github.io/element-pro-components/zh-CN/guide/router)

## 贡献

组件库还处于开发阶段，部分功能还需要完善。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/tolking/element-pro-components/pulls)。如果只是简单的文档相关的错误修正，你可以直接 PR。但如果是 BUG、新功能、新组件等，最好优先提 [issues](https://github.com/tolking/element-pro-components/issues)

git 提交信息风格参考 [vue commit-convention](https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md)

## 链接

[文档](https://tolking.github.io/element-pro-components) 文档也是基于组件库开发的

[源码](https://github.com/tolking/element-pro-components)
