---
title: 重构线性地图开发总结
description: 使用 svg 开发简单的线性地图总结
image: https://picsum.photos/536/354?random&date=2020-12-06
date: 2020-12-06
vssue-title: minecraft-map-v2
tags:
  - minecraft
  - vue
  - svg
categories:
  - dailylife
---

之前制作过一份简单的 [minecraft](https://www.minecraft.net/) 线性地图，现在基于 svg 重构了一版。现在是时候总结两者的区别了

<!-- more -->

之前的文章 [canvas 地图开发总结](../posts/minecraft-map) 中最后提到

> 总感觉选 canvas 是个巨大失误，如果用 svg 的话...

但事实并不是我想象的样子，在 svg 版地图的开发中我还是遇到了些我意想之外的问题

## 选择框架

整体基于 svg 的话，只好将 svg 嵌入到 DOM 中。在重构之前 vue3 也正式发布，所以就计划使用 vue 来生成 DOM，一边也正式使用下 vue3。同时 vite 也适合项目的要求，所以就一同加入。但 hammer 不支持 ESM 模块导入，后来找到 @egjs/hammerjs，不但支持模块导入，而且还可以按需加载

所以整体的构架就是 svg [vue 3](https://github.com/vuejs/vue-next) [vite](https://github.com/vitejs/vite) [@egjs/hammerjs](https://www.npmjs.com/package/@egjs/hammerjs)

## 开发

整体的逻辑和功能都和之前的版本保持一致，最明显的区别就是现在的地图只在最初绘制一次，避免 canvas 经过操作后需要重新绘制，增强拖动和缩放的性能

同时加入 css变量 与 自适应地浅色和深色模式，增加一些加载和过度动画

#### svg 地图绘制

- 通过 viewBox 来定义绘制的范围
- 通过 rect 和 circle 标签绘制正方形边界与圆形边界
- 通过 path 来实现自定义地图线路
- 通过 text 标签显示文本信息

整体难度和 canvas 差不多

同时由于 svg 良好的交互性，我实现了在 canvas 中比较难实现的显示线路的 notes 信息的功能。当鼠标移动到有记录 notes 信息的线路上就会显示提示信息

#### 缩放和拖动

由于要兼容手机和电脑，所以依然选择之前的方案。但由于地图只绘制一次，会造成文本的大小和线路的粗细不好随缩放变化，影响视觉。所以就利用 css 变量动态传值，动态改变其值

然后当数据较多和放大过大会引起性能严重下降，缩放和拖动卡到不行，最后不得已限制了缩放的最大程度。canvas 版本在这方面表现就更加优秀些

## 总结

- svg 与 canvas 各有优势和缺点，最好按照需求选择
- svg 更加适用于具有交互性的小型项目，比如可变色的图标、小型的图标动画或者按照路径移动的动画
- canvas 更加适合数据变动比较大的项目
- vite 使用很方便，开发启动和更新很快，没有配置文件也可以正常启动和打包
- vue3 的 setup 和 组合式API 配合使用拆分代码使用还是挺容易
- vue3 的 teleport 可以将内容发送到DOM的任意节点，包括 title 标签来实现动态改变网页标题。我似乎想到了一个黑科技用法
- vue3 的 emits 无法与 多个根节点 同时使用

[​地图](https://map.ououe.com)

[查看源码](https://github.com/tolking/map)