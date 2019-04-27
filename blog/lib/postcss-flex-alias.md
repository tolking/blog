---
title: postcss-flex-alias 参数介绍
lang: zh-CN
image: https://picsum.photos/1920/1080/?random&date=2019-04-05
date: 2019-04-05
tags:
  - css
  - postcss
categories:
  - documentation
---

postcss plugin easily write flex

<!-- more -->

<Flex/>

::: tip
- 拉动上方右下角，可以改变主体大小
- 根据内部元素数量，效果可能不同，增加或减少数量查看
:::

## Explain

**display: flex-[`flex-flow`][`justify-content`][`align-items`][`align-content`]**


### flex-flow

- `x`: row nowrap
- `y`: column nowrap
- `w`: row wrap
- `m`: column warp

### justify-content

- `s`: flex-start
- `a`: space-around
- `b`: space-between
- `c`: center
- `e`: flex-end

### align-items

- `s`: flex-start
- `b`: baseline
- `c`: center
- `e`: flex-end
- `h`: stretch

### align-content

- `s`: flex-start
- `a`: space-around
- `b`: space-between
- `c`: center
- `e`: flex-end
