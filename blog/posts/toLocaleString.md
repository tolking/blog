---
title: toLocaleString 的使用
display: home
description: 使用 toLovaleString 来国际化日期或者数字格式
image: https://picsum.photos/536/354/?random&date=2019-12-06
date: 2019-12-06
vssue-title: toLocaleString
tags: 
  - js
categories:
  - summary
---

使用 toLovaleString 来国际化日期或者数字格式

<!-- more -->

## Date.prototype.toLocaleString()

### 不带参数

根据时区和语言环境返回

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString()
// "2019/12/6 上午11:35:00"
```

### 可选参数 locales

是一个 BCP 47 语言标记的字符串，或者是一个包括多个语言标记的数组 [参考](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

> 通过 `navigator.language` 可以获取浏览器的默认设置

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('zh-CN')
// "2019/12/6 上午11:35:00"

date.toLocaleString('en-US')
// "12/6/2019, 11:35:00 AM"

date.toLocaleString('ar-EG')
// "٦‏/١٢‏/٢٠١٩ ١١:٣٥:٠٠ ص"

date.toLocaleString('ja-JP-u-ca-japanese')
// "1/12/6 11:35:00"
```

### 可选参数 options

#### dateStyle, timeStyle
- `full`, `long`, `medium`, `short`

``` js
const date = new Date('2019-12-06 11:35')

// dateStyle
// full
date.toLocaleString('zh-CN', { dateStyle: 'full' })
// "2019年12月6日星期五"

date.toLocaleString('en-US', { dateStyle: 'full' })
// "Friday, December 6, 2019"

// long
date.toLocaleString('zh-CN', { dateStyle: 'long' })
// "2019年12月6日"

date.toLocaleString('en-US', { dateStyle: 'long' })
// "December 6, 2019"

// medium
date.toLocaleString('zh-CN', { dateStyle: 'medium' })
// "2019年12月6日"

date.toLocaleString('en-US', { dateStyle: 'medium' })
// "Dec 6, 2019"

// short
date.toLocaleString('zh-CN', { dateStyle: 'short' })
// "2019/12/6"

date.toLocaleString('en-US', { dateStyle: 'short' })
// "12/6/19"

// timeStyle
// full
date.toLocaleString('zh-CN', { timeStyle: 'full' })
// "中国标准时间 上午11:35:00"

date.toLocaleString('en-US', { timeStyle: 'full' })
// "11:35:00 AM China Standard Time"

// long
date.toLocaleString('zh-CN', { timeStyle: 'long' })
// "GMT+8 上午11:35:00"

date.toLocaleString('en-US', { timeStyle: 'long' })
// "11:35:00 AM GMT+8"

// medium
date.toLocaleString('zh-CN', { timeStyle: 'medium' })
// "上午11:35:00"

date.toLocaleString('en-US', { timeStyle: 'medium' })
// "11:35:00 AM"

// short
date.toLocaleString('zh-CN', { timeStyle: 'short' })
// "上午11:35"

date.toLocaleString('en-US', { timeStyle: 'short' })
// "11:35 AM"
```

#### timeZone

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
// "2019/12/6 上午11:35:00"

date.toLocaleString('zh-CN', { timeZone: 'America/New_York' })
// "2019/12/5 下午10:35:00"
```

#### timeZoneName
- `long`, `short`

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('zh-CN', { timeZoneName: 'long' })
// "2019/12/6 中国标准时间 上午11:35:00"

date.toLocaleString('zh-CN', { timeZoneName: 'short' })
// "2019/12/6 GMT+8 上午11:35:00"
```

#### hour12

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('zh-CN', { hour12: true })
// "2019/12/6 上午11:35:00"

date.toLocaleString('zh-CN', { hour12: false })
// "2019/12/6 11:35:00"
```

#### hourCycle
- `h11`, `h12`, `h23`, `h24`

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('zh-CN', { hourCycle: 'h12' })
// "2019/12/6 上午11:35:00"

date.toLocaleString('zh-CN', { hourCycle: 'h23' })
// "2019/12/6 11:35:00"
```

#### era, weekday
- `long`, `short`, `narrow`

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('en-US', { era: 'long' })
// "12 6, 2019 Anno Domini, 11:35:00 AM"

date.toLocaleString('en-US', { era: 'short' })
// "12 6, 2019 AD, 11:35:00 AM"

date.toLocaleString('en-US', { era: 'narrow' })
// "12 6, 2019 A, 11:35:00 AM"

date.toLocaleString('zh-CN', { weekday: 'long' })
// "星期五"

date.toLocaleString('zh-CN', { weekday: 'short' })
// "周五"

date.toLocaleString('zh-CN', { weekday: 'narrow' })
// "五"
```

#### year, day, hour, minute, second
- `numeric`, `2-digit`

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('zh-CN', { year: 'numeric' })
// "2019年"

date.toLocaleString('zh-CN', { year: '2-digit' })
// "19年"

date.toLocaleString('zh-CN', { day: 'numeric' })
// "6日"

date.toLocaleString('zh-CN', { day: '2-digit' })
// "06日"
```

#### month
- `numeric`, `2-digit`, `long`, `short`, `narrow`

``` js
const date = new Date('2019-12-06 11:35')

date.toLocaleString('en-US', { month: 'numeric' })
// "12"

date.toLocaleString('en-US', { month: '2-digit' })
// "12"

date.toLocaleString('en-US', { month: 'long' })
// "December"

date.toLocaleString('en-US', { month: 'short' })
// "Dec"

date.toLocaleString('en-US', { month: 'narrow' })
// "D"
```

## Number.prototype.toLocaleString()

### locales

同上

``` js
const number = 1024.1234

number.toLocaleString('zh-CN')
// "1,024.123"

number.toLocaleString('zh-Hans-CN-u-nu-hanidec')
// "一,〇二四.一二三"

number.toLocaleString('de-DE')
// "1.024,123"

number.toLocaleString('ar-EG')
// "١٬٠٢٤٫١٢٣"
```

### options

#### style
- `decimal`, `currency`, `percent`

``` js
const number = 1024

number.toLocaleString('zh-CN', { style: 'decimal' })
// "1,024"

number.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
// "￥1,024.00"

number.toLocaleString('zh-CN', { style: 'percent' })
// "102,400%"
```

#### currency

当 `style` 为 `currency` 时，需要指定货币格式符号 [查考](https://www.currency-iso.org/dam/downloads/lists/list_one.xml)

#### currencyDisplay
- `symbol`, `code`, `name`

``` js
const number = 1024

number.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY', currencyDisplay: 'symbol' })
// "￥1,024.00"

number.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY', currencyDisplay: 'code' })
// "CNY 1,024.00"

number.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY', currencyDisplay: 'name' })
// "1,024.00人民币"
```

#### useGrouping

``` js
const number = 1024

number.toLocaleString('zh-CN', { useGrouping: true })
// "1,024"

number.toLocaleString('zh-CN', { useGrouping: false })
// "1024"
```

#### minimumIntegerDigits

使用的整数数字的最小数目(默认 1) 1 ~ 21

#### minimumFractionDigits

使用的小数位数的最小数目 0 ~ 20

#### maximumFractionDigits

使用的小数位数的最大数目 0 ~ 20

``` js
const number = 1024.1234

number.toLocaleString('zh-CN', { minimumIntegerDigits: 5, minimumFractionDigits: 0, maximumFractionDigits: 2 })
// "01,024.12"
```

#### minimumSignificantDigits

使用的有效数字的最小数目(默认 1) 1 ~ 21

#### maximumSignificantDigits

使用的有效数字的最大数量(默认 minimumsignificantdigits) 1 ~ 21

``` js
const number = 1024.1234

number.toLocaleString('zh-CN', { minimumSignificantDigits: 3, maximumSignificantDigits: 5 })
// "1,024.1"
```
