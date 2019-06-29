---
title: js中隐性类型转换
lang: zh-CN
image: https://picsum.photos/1920/1080/?random&date=2017-09-15
date: 2017-09-15
tags:
  - js
categories:
  - summary
meta:
  - name: description
    content: 只需要一点点时间学会使用js中隐性类型转换，更加轻松的处理部分类型
--- 

只需要一点点时间学会使用js中隐性类型转换，更加轻松的处理部分类型

<!-- more -->

## 在所有加减乘除等需要数字类型的地方，JS会自动使用Number构造函数对变量进行转换

``` js
'1' - '2'  // -1  
1 + '2'  // 12 (加号+比较特殊,其他类型和字符串相加都会转换成字符串)
1 + +'2'  // 3 (两个"+"必须分开，+'2'是隐形转换将字符串'2'转换为数值2)
'1' - true   // 0  
'1' * {}   // NaN  
'1' - 'a'  // NaN
```

## 字符串自动转换主要表现为字符串的拼接，字符串和其他类型用加号(+)拼接时，其他类型都自动转换为字符串
``` js
'1' + '2'  // 12  
'1' + 'a'  // 1a  
'1' + 1  // 11  
'a' + null   // anull  
'1' + undefined  // 1undefined  
'a' + {}   // a[object Object]  
'a' + true   // atrue  
```

## 当在任意需要布尔类型的地方，系统都会自动调用Boolean()构造函数将值转换为Boolean类型

::: tip 提示
null、0、-0、+0、''、undefined、NaN这些都会转换为false，其他的值都会转换为true
:::