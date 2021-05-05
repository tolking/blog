---
title: 开发 vue 组件库代码提示生成工具的总结
display: home
description: components-helper 是一个通过解析 markdown 文档为 vue 组件库生成代码提示的工具
image: https://picsum.photos/536/354?random&date=2021-05-05
date: 2021-05-05
vssue-title: components-helper-summary
tags:
  - vue
categories:
  - summary
---

之前基于 [element-plus](https://element-plus.org/) 开发了组件库 [element-pro-components](/lib/element-pro-components)。但为了更好的用于实际开发中需要提供代码提示文件用于更好的代码提示。

<!-- more -->

由于 `element-plus` 当时并没有代码提示文件(或者说是同 `element-ui` 一样的代码提示文件)，所以在编写 `element-pro-components` 的代码提示文件前，我为 `element-plus` 编写了代码提示文件。在编写的过程中我逐渐发现要单独维护代码提示文件将会是相当困难的事情，后来我就逐渐尝试通过各种方式生成代码提示文件，最后选择通过文档生成代码提示文件，这样更加适用于 `element-plus`。

## 整体理念

- 通过 `markdown` 文档生成代码提示文件
- 同时适用单文档生成单组件及多组件的情况
- 组件名可以被改写
- 属性值可以被改写

## 整体流程

### 读取文件

借助于 [fast-glob](https://github.com/mrmlnc/fast-glob#pattern-syntax) 生成需要读取的文件地址，通过 nodejs 获取文档文件

### 解析文件

由于需要解析的文档的格式类似于

```md
## componets-name

description


## Attributes

| Name | ...
|----- |...
| Attributes | ...
```

借助 `string.match` 通过正则就可以匹配文档中符合格式的内容。同时由于正则携带修饰符 `g` 时将匹配文档中全部符合要求内容，而不携带修饰符 `g` 时将解析正则中括号包含内容的这种特殊性。我将 `titleRegExp` `tableRegExp` 设计成正则字符串，通过四次正则匹配解析文档内容生成相关文档数据

### 转化数据

转化数据内容，准备用于生成代码提示文件

### 生成代码提示文件

根据 `vetur` `webstorm` 的代码提示格式要求，通过转化后的数据生成相关信息

### 导出代码提示文件

通过 nodejs 导出 json 格式的代码提示文件

## 兼容性处理

1. windows 的 `\\` 路径

手动将路径转化为 `/`

2. windows 的 `\r\n` 换行符

手动在解析文档前将换行符转化为 `\n`

3. table column 的兼容

```md
| x | xxx | xx |

|x|xxx|xx|

x | xxx | xx

x|xxx|xx

|||

|x\|xx|xxx|xx\|x|
```

由于上面的情况都说可以生成表格列的格式，所以无法直接通过 `split('|')` 来分割。需要在分割前通过正则统一格式，并用正则格式进行分割
