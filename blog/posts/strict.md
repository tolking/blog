---
title: 严格模式下主要限制
lang: zh-CN
description: 在头部加上 "use strict" 启用严格模式，使用严格模式能够有效的降低bug，开始需要适应
image: https://picsum.photos/1920/1080/?random&date=2018-01-08
date: 2018-01-08
vssue-title: strict
tags:
  - js
  - strict
categories:
  - learn
--- 

在头部加上 "use strict" 启用严格模式，使用严格模式能够有效的降低bug，开始需要适应

<!-- more -->

严格模式主要有以下限制
- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用with语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀0表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
- eval不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.callee
- 不能使用arguments.caller
- 禁止this指向全局对象
- 不能使用fn.caller和fn.arguments获取函数调用的堆栈
- 增加了保留字（比如protected、static和interface）