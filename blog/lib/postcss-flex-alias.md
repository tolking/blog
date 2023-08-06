---
title: postcss-flex-alias
lang: en-US
description: postcss plugin easily write flex
image: https://picsum.photos/536/354?random&date=2019-04-05
date: 2019-04-05
vssue-title: postcss-flex-alias
tags:
  - css
  - postcss
categories:
  - project
---

postcss plugin easily write flex

<!-- more -->

<FlexAlias/>

::: tip TIP
- Pull the upper right and lower corner, you can change the size of the box body
- Depending on the number of internal elements, the effect may vary, increasing or decreasing the number of views
:::

## Explain

**display: flex-[`flex-flow`][`justify-content`][`align-items`][`align-content`]**

Use `_` to denote null values, and last `_` values can be omitted (display: flex-wb_s)

### flex-flow

- `x`: row nowrap
- `y`: column nowrap
- `w`: row wrap
- `m`: column wrap

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
