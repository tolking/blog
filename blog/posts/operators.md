---
title: js运算符
description: JavaScript 的运算符，包括了赋值，比较，算数，位运算，逻辑，字符串，三元等等
image: https://picsum.photos/536/354?random&date=2019-06-24
date: 2019-06-24
vssue-title: operators
tags:
  - js
categories:
  - learn
--- 

整理了 `JavaScript` 中的运算符

<!-- more -->

## 运算符

### 算术运算符

`算术运算符`使用数值作为操作数并返回一个数值

``` js
// 加法运算符
10 + 3 // 13

// 减法运算符
10 - 3 // 7

// 除法运算符
10 / 3 // 3

// 乘法运算符
10 * 3 // 30

// 取模运算符
10 % 3 // 1

// 自增运算符
var x = 10
x++
x // 11

// 自减运算符
x--
x // 10

// 指数运算符
2 ** 3 // 8
```

### 赋值运算符

一个`赋值运算符`将它右边操作数的值赋给它左边的操作数

``` js
// 赋值
var x = 10
x // 10

// 加法赋值
x += 10 // (x = x + 10)
x // 20

// 减法赋值
x -= 10 // (x = x - 10)
x // 10

// 乘法赋值
x *= 10 // (x = x * 10)
x // 100

// 除法赋值
x /= 10 // (x = x / 10)
x // 10

// 求余赋值
x %= 4 // (x = x % 4)
x // 2

// 求幂赋值
x **= 4 // (x = x ** 4)
x // 16

// 左移位赋值
x <<= 2 // (x = x << 2)
x // 64

// 右移位赋值
x >>= 2 // (x = x >> 2)
x // 16

// 无符号右移位赋值
x >>>= 2 // (x = x >>> 2)
x // 4

// 按位与赋值
x &= 3 // (x = x & 3)
x // 0

// 按位异或赋值
x ^= 3 // (x = x ^ 3)
x // 3

// 按位或赋值
x |= 4 // (x = x | 4)
x // 7

// 解构赋值
var arr = [1, 2, 3]
var [a, b, c] = arr
a // 1
b // 2
c // 3

var obj = {
  d: 'd',
  e: 'e',
  f: 'f'
}
var { d, e, f } = obj
d // "d"
e // "e"
f // "f"
```

### 比较运算符

`比较运算符`比较它的操作数并返回一个基于表达式是否为真的逻辑值

``` js
// 等于
3 == '3' // true

// 不等于
3 != '3' // false

// 全等
3 === '3' // false

// 不全等
3 !== '3' // true

// 大于
4 > '3' // true

// 大于或等于
4 >= '3'  // true

// 小于
4 < '3' // false

// 小于或等于
4 <= '3' // false
```

### 位运算符

`位运算符`将它的操作数视为32位元的**二进制串**并返回一个标准的JavaScript数值

``` js
// 按位与 (每一个对应的位都为1则返回1， 否则返回0)
10 & 3 // 2

// 按位或 (每一个对应的位，只要有一个为1则返回1， 否则返回0)
10 | 3 // 11

// 按位异或 (每一个对应的位，两个不相同则返回1，相同则返回0)
10 ^ 3 // 9

// 按位非 (反转被操作数的位)
~ 10 // -11

// 左移 (将 10.01 的二进制串向左移动 3 位,右边移入0)
10.01 << 3 // 80

// 算术右移 (将 10.01 的二进制表示向右移动 3 位，丢弃被移出的所有位)
10.01 >> 3 // 1

// 无符号右移 (将 10.01 的二进制表示向右移动 3 位，丢弃被移出的所有位，并把左边空出的位都填充为0)
10.01 >>> 3 // 1
```

### 逻辑运算符

`逻辑运算符`常用于布尔值或逻辑之间。当操作数都是布尔值时，返回值也是布尔值。当它用于非布尔值的时候，返回值就可能是非布尔值

``` js
// 逻辑与
true && true // true
true && false // false
false && true // false

true && console.log('ok') // "ok"

// 逻辑或
true || true // true
false || true // true
true || false // true

function log(a) {
  console.log(a || 'a不存在')
}
log('true') // "true"
log() // "a不存在"
log(false) // "a不存在"

// ??
true ?? 'ok' // true
false ?? 'ok' // false
undefined ?? 'ok' // ok

function log(a) {
  console.log(a ?? 'a不存在')
}
log('true') // "true"
log() // "a不存在"
log(false) // false

// 逻辑非 (返回布尔值)
!'test' // false
!!'test' // true
```

### 字符串运算符

使用 `+` 与 `+=` 可以用来拼接字符串

``` js
var str = 'string' + 1
str // "string1"
str += 'add'
str // "string1add"
```

### 三元运算符

`三元运算符`根据给定条件在两个值中取其一

`条件` ? `值1` : `值2`

``` js
function checkScores(scores) {
  console.log(scores >= 60 ? '及格' : '不及格')
}
checkScores(59) // "不及格"
checkScores(60) // "及格"
```

### 逗号操作符

`逗号操作符`对两个操作数进行求值并返回最终操作数的值

``` js
let arr = []
for(let i = 0, j = 0; i < 5; i++, j += 2){
  arr.push([i, j])
}
arr // [[0, 0], [1, 2], [2, 4], [3, 6], [4, 8]]

function a(){
  console.log('a')
  return 'a'
}
function b(){
  console.log('b')
  return 'b'
}
function c(){
  console.log('c')
  return 'c'
}
console.log((a(), b(), c()))
// "a"
// "b"
// "c"
// "c"
```

### 一元操作符

- `delete`

`delete操作符`删除一个对象或一个对象的属性或者一个数组中某一个键值

``` js
var obj = {
  a: 1,
  b: 2,
  c: 3
}
delete obj.b // true
obj // {a: 1, c: 3}
```

- `typeof`

`typeof操作符`返回一个表示 operand 类型的字符串值。operand 可为字符串、变量、关键词或对象，其类型将被返回

``` js
var fun =  function(a, b) {
  return a + b
}
var str = "round"
var num = 1
var date = new Date()

typeof fun // "function"
typeof str // "string"
typeof num // "number"
typeof date // "object"
typeof true // "boolean"
typeof null // "object"
```

- `void`

`void运算符`表明一个运算没有返回值

``` html
<a href="javascript:void(0)">Click here</a>
```

### 关系操作符

- `in`

`in操作符`如果所指定的属性确实存在于所指定的对象中，则会返回true

``` js
var obj = {
  a: 1,
  b: 2,
  c: 3
}
'a' in obj // true
2 in obj // false
```

- `instanceof`

`instanceof操作符`如果所判别的对象确实是所指定的类型，则返回true

``` js
var arr = [1, 2, 3, 4]
arr instanceof Object // true
arr instanceof Array // true
```

## 运算符优先级

| 优先级 | 运算类型 |	关联性 | 运算符 |
|:-- |:-- |:-- |:-- |
| 20 | 圆括号 | n/a | `( … )` |
| 19 | 成员访问 | 从左到右 | … `.` … |
| | 需计算的成员访问 | 从左到右 | … `[ … ]` |
| | new (带参数列表) | n/a | `new` … ( … ) |
| | 函数调用 | 从左到右 | `… ( … )` |
| 18 | new (无参数列表) |	从右到左 | `new` … |
| 17 | 后置递增(运算符在后) |	n/a | … `++` |
| | 后置递减(运算符在后) | | … `--` |
| 16 | 逻辑非 | 从右到左 | `!` … |
| | 按位非 | | `~` … |
| | 一元加法 | | `+` … |
| | 一元减法 | | `-` … |
| | 前置递增 | | `++` … |
| | 前置递减 | | `--` … |
| | typeof | | `typeof` … |
| | void | | `void` … |
| | delete | | `delete` … |
| | await | | `await` … |
| 15 | 幂 | 从右到左 | … `**` … |
| 14 | 乘法 | 从左到右 | … `*` … |
| | 除法| | … `/` … |
| | 取模| | … `%` … |
| 13 | 加法 | 从左到右 | … `+` … |
| | 减法 | | … `-` … |
| 12 |按位左移 | 从左到右 | … `<<` … |
| | 按位右移 | | … `>>` … |
| | 无符号右移 | | … `>>>` … |
| 11 |小于 | 从左到右 | … `<` … |
| | 小于等于 | | … `<=` … |
| | 大于 | | … `>` … |
| | 大于等于 | | … `>=` … |
| | in | | … `in` … |
| | instanceof | | … `instanceof` … |
| 10 |等号 | 从左到右 | … `==` … |
| | 非等号 | | … `!=` … |
| | 全等号 | | … `===` … |
| | 非全等号 | | … `!==` … |
| 9 | 按位与 | 从左到右 | … `&` … |
| 8 | 按位异或 | 从左到右 | … `^` … |
| 7 | 按位或 | 从左到右 | … `|` … |
| 6 | 逻辑与 | 从左到右 | … `&&` … |
| 5 | 逻辑或 | 从左到右 | … `||` … |
| 4 | 条件运算符 | 从右到左 | … `?` … `:` … |
| 3 | 赋值 | 从右到左 | … `=` … |
| | | | … `+=` … |
| | | | … `-=` … |
| | | | … `*=` … |
| | | | … `/=` … |
| | | | … `%=` … |
| | | | … `<<=` … |
| | | | … `>>=` … |
| | | | … `>>>=` … |
| | | | … `&=` … |
| | | | … `^=` … |
| | | | … `|=` … |
| 2 | yield | 从右到左 | `yield` … |
| | yield* | | `yield*` … |
| 1 | 展开运算符 | n/a | `...` … |
| 0 | 逗号 | 从左到右 |	… `,` … |