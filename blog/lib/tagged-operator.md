---
title: tagged-operator
description: tagged-operator 是一个通过带标签的模板字符串模拟实现操作符重载的功能的库
image: https://picsum.photos/536/354?random&date=2022-05-01
date: 2022-05-01
vssue-title: tagged-operator
tags:
  - operator
categories:
  - project
---

tagged-operator 是一个通过带标签的模板字符串模拟实现操作符重载的功能的库

<!-- more -->

## 起因

JavaScript 本身目前并不支持操作符重载这种功能，很多时候如果需要处理不是数字的话很麻烦。或许你会封装成函数处理，但类似这样的代码却不是很直观。

```js
const object = div(add(a, b), sub(c, add(d, mul(e, f))))
```

如果支持操作符重载能够像下面这样多好

```js
const object = (a + b) / (c - (d + e * f))
```

## 方案

1. 当然可以通过 Babel 插件在编译时修改源码实现，npm 中也存在一些这样的插件，但这样的代码仅能够在编译后运行。而且这样的代码在 TypeScript 中会直接报错。

2. 后来我就想到可以通过 [带标签的模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals#%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%9A%84%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2) 来模拟实现。

## 原理

```js
const calc = (strings, ...arg) => {
  console.log(strings) // ['', ' + ', '']
  console.log(arg) // [a, b]
}

const object = calc`${a} + ${b}`
```

带标签的模板字符串其实将模版字符串拆分传递给了一个函数，这时就可以用函数解析模板字符串内容。

第一个参数包含一个字符串值的数组，其余的参数与表达式相关。这样只需遍历 `strings` 找到对应位置上的操作符、参数，将数据进行对应处理就完成了。

一个简单的字符串例子

```js
function string(strings, ...arg) {
  return strings.reduce((all, item, index) => {
    const type = item.trim()

    switch (type) {
      case '+':
        all = String(all) + String(arg[index])
        break
      case '-':
        all = String(all).replace(String(arg[index]), '')
        break
      case '*':
        if (typeof all === 'number' && typeof arg[index] === 'string') {
          all = arg[index].repeat(all)
        } else {
          all = String(all).repeat(+arg[index])
        }
        break
      case '/':
        all = String(all).replaceAll(String(arg[index]), '')
        break
      default:
        all = index === 0 ? arg[index] : all
        break
    }

    return all
  }, '')
}

string`${'Hello'} + ${' world!'}` // Hello world!
```

当然上面例子仅仅是按照顺序计算的。但按照习惯，操作符或许还应该具有一定的优先级，而且还要实现分组操作符等功能

## 优势

1. 这种方式相比调用函数看起来会更直观些
2. 这里操作符其实就是普通字符串，理论上可以用任何符号、文字等作为操作符
3. 原生支持，而且理论上经过 Babel 编译最低可以运行在 ES2015 以上
4. 支持在 TypeScript 中使用，能够进行统一的类型限制

## 劣势

1. 第一见这种代码可能比较难以理解，如果滥用一些奇怪的符号可能更加让人摸不到头脑
2. 写法依旧有些笨重
3. 类型支持不能像封装成函数那样限制每个参数类型，仅能够统一每个参数类型

[源码](https://github.com/tolking/tagged-operator)
