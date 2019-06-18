---
title: m-less 参数介绍
lang: zh-CN
description: 个人自用less maixins 介绍
image: https://picsum.photos/1920/1080/?random&date=2018-10-20
date: 2018-10-20
tags:
  - css
  - less
categories:
  - documentation
---

``` html
<div class="btn">btn</div>
```
``` less
.btn {
  .m(20px);
  .btn(100px, 40px, 10px, @c-blue);
  .box>.shadow;
  .font(20px, @c-white);
}
```
**效果**

<Btn/> 

## 简介

- 自用的less文件  [github](https://github.com/tolking/m-less)
- 包含常用属性简写、常用的 mixins、常用的 flex 类名、颜色及字体定义、清除浏览器默认样式
- 默认只对少数几个属性进行了浏览器前缀处理，建议使用 Autoprefixer 处理浏览器前缀兼容
- 或者手动引入 -old 文件
- 使用最好有些 less 基础
- 如果属性的所有的参数都有默认值，可以省略()，否则需要传人所需参数
- 如果一个默认值为空，说明当没有当前参数时，只触发前面的属性，当前及后面的属性

::: tip
手动引入 -old
**仅对内置属性处理**
1. 将 mixins.less 里面的 `alias` 改为 `alias-old`
1. 将 mixins.less 里面的 `flex` 改为 `flex-old`
:::

## 目录结构

```
+- less
  +- mixins mixins 相关文件
    ...
  +- styles
    +- alias.less 属性简写（默认）
    +- main.less 样式文件
  +- mixins.less 输出 mixins 文件
  +- styles.less 输出文件
  +- variable.less 变量文件
```

## 默认字体列表

@f-base: -apple-system,BlinkMacSystemFont,Microsoft YaHei,Segoe UI,Roboto,Source Han Sans SC,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neu,sans-serif

## 默认颜色

必须颜色，只能够修改，不可删除

- @c-text: @c-gray; // 字体默认颜色
- @c-line: @c-silver; // 线条默认颜色
- @c-btn: @c-blue; // 按键背景
- @c-shadow: fade(@c-black, 30%); // 阴影默认颜色
- @c-t: transparent; // 透明

参考颜色
<DefaultsColor/>

## 属性简写

``` less
/* 例如 */
width: 100px;
/* 简写 */
.w(100px);
```

简写对照表
- 整理了部分常用的css样式属性

| 属性 |	简写 |	参数 |	默认值 |	说明 |
| :--- | :--- | :--- | :--- | :--- |
| width |	.w |	width |  |  |
| height | .h |	height |  |  |
| min-width |	.minw |	min-width |  |  |
| min-height | .minh | min-height |  |  |
| max-width |	.maxw |	max-width |  |  |
| max-height | .maxh | max-height |  |  |
| box-shadow | .bs | x, y, blur, color, | ...	0, 1px, 6px, @c-shadow | 最后加 inset 可变成内阴影 |
| box-shadow inset | .bs>.inset |	x, y, blur, color |	0, 1px, 6px, @c-shadow |  |
| border | .bd | width, color, style | 1px, @c-line, solid|  |
| border-top | .bdt |	width, color, style |	1px, @c-line, solid	|  |
| border-bottom | .bdb | width, color, style | 1px, @c-line, solid |  |
| border-left | .bdl | width, color, style | 1px, @c-line, solid |  |
| border-right | .bdr | width, color, style | 1px, @c-line, solid |  |
| border-image | .bdi |	... |  |  |
| border-radius |	.br |	... |  |  |
| box-sizing | .bsiz | box-sizing |  |  |
| outline-offset | .oo | outline-offset |  |  |
| box-reflect |	.bref |	box-reflect |  |  |
| resize | .res |	resize |  |  |
| font | .f |	... |  |  |
| font-size |	.fs |	font-size |  |  |
| color |	.c | color |  |  |
| font-family | .ff | font-family |  |  |
| text-indent | .ti | text-indent |  |  |
| text-align | .ta | text-align |  |  |
| line-height | .lh | line-height |  |  |
| font-weight | .fw | font-weight |  |  |
| text-shadow | .ts | x, y, blur, color |	0, 1px, 4px, @c-shadow|   |
| text-stroke |	.tstr |	width, color |  |  |
| text-decoration |	.td |	text-decoration |  |  |
| text-overflow |	.to |	text-overflow |  |  |
| white-space |	.ws |	white-space |  |  |
| font-style | .fsty | font-style |  |  |
| column-count | .cc | column-count |  |  |
| column-gap | .cg | column-gap |  |  |
| column-rule |	.cr |	column-rule |  |  |
| margin | .m	| ... |  |  |
| margin-top | .mt | margin-top |  |  |
| margin-bottom	| .mb |	margin-bottom |  |  |
| margin-left |	.ml | margin-left |  |  |
| margin-right | .mr | margin-right |  |  |
| padding | .p | ... |  |  |
| padding-top | .pt | padding-top |  |  |
| padding-bottom | .pb | padding-bottom |  |  |
| padding-left | .pl | padding-left |  |  |
| padding-right | .pr | padding-right |  |  |
| display	| .d | display |  |  |
| vertical-align | .va | vertical-align |  |  |
| visibility | .v | visibility |  |  |
| overflow | .of | ... |  |  |
| flex-direction | .fxd | flex-direction |  |  |
| flex-wrap |	.fxw | flex-wrap |  |  |
| flex-flow |	.fxf | flex-flow |  |  |
| justify-content | .js | justify-content |  |  |
| align-items |	.ai |	align-items |  |  |
| align-content |	.ac |	align-content |  |  |
| order | .ord |order |  |  |
| flex-grow | .fxg |flex-grow |  |  |
| flex-shrink | .fxs |flex-shrink |  |  |
| flex-basis | .fxb |flex-basis |  |  |
| flex | .fx | ... |  |  |
| align-self | .as | align-self |  |  |
| position | .pos |	position |  |  |
| top | .t | top |  |  |
| bottom | .b | bottom |  |  |
| left | .l | left |  |  |
| right | .r | right |  |  |
| z-index |	.zi |	z-index |  |  |
| background | .bg | ... |  |  |
| background-color | .bgc | background-color |  |  |
| background-image | .bgi | background-image |  |  |
| background-position | .bgp | ... |  |  |
| background-size | .bgs | ... |  |  |
| background-repeat | .bgr | ... |  |  |
| background-attachment | .bga | background-attachment |  |  |
| background-origin | .bgo | background-origin |  |  |
| background-clip | .bgcl |	background-clip |  |  |
| transform	| .tf |	... |  |  |
| transform-origin | .tfo | ... |  |  |
| filter | .fil	| ... |  |  |
| animation |	.an	| ... |  |  |
| animation-name | .ann |	animation-name |  |  |
| animation-duration | .andur	| animation-duration |  |  |
| animation-delay	| .andel | animation-delay |  |  |
| animation-direction	| .andir | animation-direction |  |  |
| animation-iteration-count	| .anc | animation-iteration-count |  |  |
| animation-timing-function	| .amtf |	animation-timing-function |  |  |
| transition | .ts | ... |  |  |
| transition-property	| .tsp | transition-property | transform | 默认只播放transform动画，需要播放所有动画改为all |
| transition-duration |	.dstur | transition-duration |  |  |
| transition-delay | .tsdel |	transition-delay |  |  |
| transition-timing-function | .tstf | transition-timing-function |  |  |
| opacity |	.op |	opacity |  |  |
| cursor | .cur | cursor |  |  |
| content |	.con | content |  |  |
| user-select |	.us |	user-select |	none |  |

## 处理前缀

::: warning
通过下面方法可以增加特定属性的前缀 需要传入完整属性名，不可简写
:::

| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .pre | property, value | -webkit-, -moz-, -ms-, -o-, property |
| .prew | property, value | -webkit-, property |
| .prewm | property, value | -webkit-, -ms-, property |

## 常用简写

| 简写 | 说明 |
| :-- | :-- |
| .cur-p | cursor: pointer; user-select: none; -webkit-tap-highlight-color: transparent; |
| .pos-r | position: relative |
| .d-n | display: none |
| .d-b | display: block |
| .d-fx | display: flex |
| .d-ib | display: inline-block |
| .d-ibt | display: inline-block; vertical-align: top |
| .d-ibm | display: inline-block; vertical-align: middle |
| .v-h | visibility: hidden |
| .v-v | visibility: visible |
| .of-h | overflow: hidden |
| .of-v | overflow: visible |
| .of-s | overflow: scroll; ---overflow-scrolling: touch |
| .of-hs | overflow: hidden scroll; ---overflow-scrolling: touch |
| .res-b | resize: both; overflow: auto |
| .res-w | resize: horizontal; overflow: auto |
| .res-h | resize: vertical; overflow: auto |

## Mixins 混合

可以通过下面方法简写
``` less
.box(5rem, 2rem);
.box>.radius(0.5rem);
.box>.shadow;
// 简写
.box(5rem, 2rem);
.radius(0.5rem);
.shadow;
```

### box
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .box | width, height | auto, auto |
| .box>.min | min-width, min-height, width, height | auto, auto, , auto |
| .box>.max | max-width, max-height, width, height | auto, auto, , auto |
| .box>.shadow | x, y, blur, color, width, height | 0, 1px, 6px, @c-shadow, , auto |
| .box>.border | weight, color, style, width, height | 1px, @c-line, solid, , auto |
| .box>.border>.top | weight, color, style, width, height | 1px, @c-line, solid, , auto |
| .box>.border>.bottom | weight, color, style, width, height | 1px, @c-line, solid, , auto |
| .box>.border>.left | weight, color, style, width, height | 1px, @c-line, solid, , auto |
| .box>.border>.right | weight, color, style, width, height | 1px, @c-line, solid, , auto |
| .box>.radius | radius, width, height | , , width |

### font
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .font | size, color | 1rem, @c-text	|
| .font>.indent | indent, size, color | , , @c-text |
| .font>.height | line-height, size, color | , , @c-text |
| .font>.weight | weight, size, color | normal, , @c-text |
| .font>.shadow | x, y, blur, color, size, color | 0, 1px, 4px, @c-shadow, , @c-text |
| .font>.stroke | stroke-weight, stroke-color, weight, size, color | , , , , @c-text |
| .font>.style | style, size, color |	italic, , @c-text |
| .font | size, color, family	|  |  |

::: warning
如果 .font 后面带了三个参数，后面接着的 font 里面的内容不能改简写
``` less
 .test {
   .font(.8rem, #333);
   .height(2rem);
   // ok
   .font(.8rem, #333, Arial);
   .height(2rem);
   // error
 }
 ```
由于 box 与 font 中都有 shadow，简写 shadow 容易出错，合理运用
:::

### font-cc 文字居中
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .font-cc | line-height |  |  |

### font-hidden 文本隐藏
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .font-hidden>.nowrap |  | 	|	单行生效 |
| .font-hidden>.wrap | n |  | 指定在行隐藏（仅对部分 -webkit- 生效，建议配合 max-heigh 使用） |

### font-column 文本分列
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .font-column | count, column-gap, width, color, style |	, , 1px, @c-line, solid |	列数, 之间距离, 分割线样式 |

### position
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .position | position, z-index, top, right, bottom, left | absolute, 1, 0, top, top, right |	方位的输入与 margin padding 差不多 |
| .position>.top | position, z-index | absolute, 1, 0 |  |
| .position>.bottom | position, z-index, bottom | absolute, 1, 0 |  |
| .position>.left | position, z-index, left | absolute, 1, 0 |  |
| .position>.right | position, z-index, right | absolute, 1, 0 |  |
| .position>.top-left | position, z-index, top, left | absolute, 1, 0, 0 |  |
| .position>.top-right | position, z-index, top, right | absolute, 1, 0, 0 |  |
| .position>.bottom-left | position, z-index, bottom, left | absolute, 1, 0, 0 |  |
| .position>.bottom-right | position, z-index, bottom, right | absolute, 1, 0, 0 |  |

### fixed
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .fixed | z-index, top, right, bottom, left | 1, 0, top, top, right |	方位的输入与 margin padding 差不多 |
| .fixed>.top | z-index | 1, 0 |  |
| .fixed>.bottom | z-index, bottom | 1, 0 |  |
| .fixed>.left | z-index, left | 1, 0 |  |
| .fixed>.right | z-index, right | 1, 0 |  |
| .fixed>.top-left | z-index, top, left | 1, 0, 0 |  |
| .fixed>.top-right | z-index, top, right | 1, 0, 0 |  |
| .fixed>.bottom-left | z-index, bottom, left | 1, 0, 0 |  |
| .fixed>.bottom-right | z-index, bottom, right | 1, 0, 0 |  |

### absolute
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .absolute | z-index, top, right, bottom, left | absolute, 1, 0, top, top, right |	方位的输入与 margin padding 差不多 |
| .absolute>.top | z-index | 1, 0 |  |
| .absolute>.bottom | z-index, bottom | 1, 0 |  |
| .absolute>.left | z-index, left | 1, 0 |  |
| .absolute>.right | z-index, right | 1, 0 |  |
| .absolute>.top-left | z-index, top, left | 1, 0, 0 |  |
| .absolute>.top-right | z-index, top, right | 1, 0, 0 |  |
| .absolute>.bottom-left | z-index, bottom, left | 1, 0, 0 |  |
| .absolute>.bottom-right | z-index, bottom, right | 1, 0, 0 |  |

### relative
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .relative | z-index, top, right, bottom, left | 1, 0, top, top, right |	方位的输入与 margin padding 差不多 |
| .relative>.top | z-index | 1, 0 |  |
| .relative>.bottom | z-index, bottom | 1, 0 |  |
| .relative>.left | z-index, left | 1, 0 |  |
| .relative>.right | z-index, right | 1, 0 |  |
| .relative>.top-left | z-index, top, left | 1, 0, 0 |  |
| .relative>.top-right | z-index, top, right | 1, 0, 0 |  |
| .relative>.bottom-left | z-index, bottom, left | 1, 0, 0 |  |
| .relative>.bottom-right | z-index, bottom, right | 1, 0, 0 |  |

### position-cc
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .position-cc | z-index	| 1 | 基于 translate 居中 |
| .position-cc | z-index, width, height |	1, , width | 基于 margin 居中 |

### matrix
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .matrix |	a1 ~ a6 | 0 ~ 0 | 需要6个点 |
| .matrix>.matrix3d |	a1 ~ a16 | 0 ~ 0 | 需要16个点 |

### translate
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .translate | x, y |	0, 0 |  |
| .translate>.x | x |	0 |  |
| .translate>.y | y |	0 |  |
| .translate>.z | z |	0 |  |
| .translate>.translate3d | x, y, z |	0, 0, 0 |  |

### scale
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .scale | x, y |	0, 0 |  |
| .scale>.x | x |	0 |  |
| .scale>.y | y |	0 |  |
| .scale>.z | z	0 |  |
| .scale>.scale3d | x, y, z |	0, 0, 0 |  |

### rotate
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .rotate | rotate | 0deg |  |
| .rotate>.x | x | 0 |  |
| .rotate>.y | y | 0 |  |
| .rotate>.z | z | 0 |  |
| .rotate>.rotate3d |	x, y, z, rotate | 0, 0, 0, 0deg |  |

### skew
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .skew | x, y | 0deg, 0deg	|  |
| .skew>.x | x | 0deg	|  |
| .skew>.y | y | 0deg	|  |

### bg-img
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .bg-img |	url, background-size, background-position, background-repeat | , 100%, center, no-repeat |  |

### bg-sprite
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .bg-sprite |	url, background-position, background-repeat | , , no-repeat |  |

### bg-line
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .bg-line | rotate, color, ... |	, @c-black, fade(color-1, 0%), ... |	支持输入1~5的颜色渐变 |
| .bg-line-rainbow | rotate |	90deg |	彩虹渐变 |

**例如**
<BgLine/>

### bg-radial
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .bg-radial | type, color, ... |	, @c-black, fade(color-1, 0%), ... | 支持输入1~5的颜色渐变 |
| .bg-radial-rainbow | type |	circle | 彩虹渐变 |


### spread 扩散线条
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| ,spread>.top | width, heigh, color, time | 100%, 1px, @c-line, 1s | 顶部发散线条 |
| ,spread>.bottom | width, heigh, color, time | 100%, 1px, @c-line, 1s | 底部发散线条（配合行高） |
| ,spread>.left | width, heigh, color, time | 1px, 100%, @c-line, 1s | 左部发散线条（需要固定高度或者父级有固定高度） |
| ,spread>.right | width, heigh, color, time | 1px, 100%, @c-line, 1s | 右部发散线条（需要固定高度或者父级有固定高度） |
| ,spread>.top-bottom | width, heigh, color, time | 100%, 100%, @c-line, 1s | 顶部到底部发散线条 |
| ,spread>.bottom-top | width, heigh, color, time | 100%, 100%, @c-line, 1s | 底部到顶部发散线条（配合行高） |
| ,spread>.left-right | width, heigh, color, time | 100%, 100%, @c-line, 1s | 左部到右部发散线条（需要固定高度或者父级有固定高度） |
| ,spread>.right-left | width, heigh, color, time | 100%, 100%, @c-line, 1s | 右部到左部发散线条（需要固定高度或者父级有固定高度） |

``` less
  .d(inline-block);
  .m(0.5rem);
  .box(8rem, 4rem);
  .border;
  .font-cc(calc(3rem - 2px));
  .spread>.bottom(100%, 2px, #da3);
```
**效果**
<Spread/>

### reflect 渐隐镜像效果
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .reflect | l, opacity, length | 0, 0.3, 70% | 镜像效果距离主体距离, 效果透明度, 效果渐变长度(默认为向下镜像，仅对部分浏览器生效) |
| .reflect>.above | l, opacity, length | 0, 0.3, 70% | 向上镜像 |
| .reflect>.top | l, opacity, length | 0, 0.3, 70% | 向上镜像 |
| .reflect>.below | l, opacity, length | 0, 0.3, 70% | 向下镜像 |
| .reflect>.bottom | l, opacity, length | 0, 0.3, 70% | 向下镜像 |
| .reflect>.left | l, opacity, length | 0, 0.3, 70% | 向左镜像 |
| .reflect>.right | l, opacity, length | 0, 0.3, 70% | 向右镜像 |

### btn 按钮
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .btn | width, height, radius, bg-color, time, darken, lighten |	, width, 0, @c-btn, 1s, 5%, 70% |	宽, 高, 圆角, 背景色, 动画时间, hover变暗程度, active时水波纹变亮程度 |

**效果**
<Btn/>

### arrow 箭头
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .arrow>.top | size, color | 5px, @c-line | 箭头尖角指向方向 |
| .arrow>.bottom | size, color | 5px, @c-line |  |
| .arrow>.left | size, color | 5px, @c-line |  |
| .arrow>.right | size, color | 5px, @c-line |  |
| .arrow>.top-left | size, color | 5px, @c-line |  |
| .arrow>.top-right | size, color | 5px, @c-line |  |
| .arrow>.bottom-left | size, color | 5px, @c-line |  |
| .arrow>.bottom-right | size, color | 5px, @c-line |  |

**效果**
<Arrow/>

### filter 滤镜
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .filter | ...	|  |  |	
| .blur | blur |  | 高斯模糊 |
| .grayscale | grayscale |  | 灰度 |
| .sepia | sepiav |  | 褐色 |
| .saturate | saturate |  | 饱和度 |
| .hue-rotate | hue-rotate |  | 色相旋转 |
| .invert | invert |  | 反色 |
| .opacity | opacity |  | 透明度 |
| .brightness | brightness |  | 亮度 |
| .contrast | contrast |  | 对比度 |
| .drop-shadow | drop-shadow |  | 阴影 |

### animation
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .animation | name, duration, delay, count |	, 1s, 0s, infinite | 动画名, 持续时间, 延迟播放, 播放次数 |
| .animation-state | duration, delay, count |	1s, 0s, infinite | 持续时间, 延迟播放, 播放次数 |

### transition
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .transition |	property, duration, delay |	transformv, 1s, 0s | 过度元素, 持续时间, 延迟播放 |

### svg 图片
| 简写 | 参数 |	默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| .svg-* | color, background-size, background-position, background-repeat |	@c-line, 100%, center, no-repeat | 正在寻找一套简单的单色模版，未来可能有较大变化 |
