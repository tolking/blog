---
title: ios 输入法将页面往上顶
lang: zh-CN
description: ios 输入法将页面往上顶，输入法收回后下方留下空白区域
image: https://picsum.photos/536/354?random&date=2019-01-12
date: 2019-01-12
vssue-title: ios-input
tags:
  - html
  - ios
  - problem
categories:
  - summary
--- 

ios 输入法将页面往上顶，输入法收回后下方留下空白区域

<!-- more -->

​Android 没有这种问题，to经过测试没有办法通过纯 css 解决
后来考虑通过 js 在输入框失去焦点是将页面滚动到顶部


``` js
const input = document.getElementsByTagName('input');
for(let i = 0; i < input.length; i++) {
  input[i].onblur = () => window.scrollTo(0, 0);
}
```

经过测试方案可行，对在 body 里面 设置 ontouchmove=event.preventDefault() 的不能滚动的页面也生效