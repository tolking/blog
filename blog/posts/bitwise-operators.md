---
title: js按位运算符及运用
lang: zh-CN
image: https://picsum.photos/1920/1080/?random&date=2017-12-03
date: 2017-12-03
tags:
  - js
categories:
  - summary
meta:
  - name: description
    content: js按位运算符/二进制运算符的简单简绍和使用
--- 

js按位运算符/二进制运算符的简单简绍和使用
-  &、|、^、~、<<、>>

<!-- more -->

## & 按位与，两数同位是1对应位才是1
``` js
1 & 2  // 0 (0001 且 0010 = 0000 = 0)
```

## | 按位或，两数同位是0对应位才是0
``` js
1 | 2  // 3 (0001 或 0010 = 0011 = 3)
```

## ^ 按位异或，两数同位相同都取0，不同都取1
``` js
1 ^ 2  // 3 (0001 异或 0010 = 0011 = 3)
```

## ~ 按位非，每位取反的补码
``` js
~2  // -3
```

## << 左移，二进制所有位都左移规定的次数
``` js
1 << 1  // 2 (0001 左移 1 = 0010 = 2)
```

## >> 右移，二进制所有位都右移规定的次数
``` js
1 >> 1  // 2 (0001 右移 1 = 0000 = 0)
```

## 运用

### 用位运算符来小数取整
``` js
~~3.14  // 3
~~-3.14  // -3
3.14 | 0  // 3 
3.14 >> 0  // 3
3.14 << 0  // 3 
```

### 用&运算符判断一个数的奇偶
n & 1 如果值为0，n是偶数；值为1，n为奇数
``` js
7 & 1  // 1
8 & 1  // 0
```

### 生成一个随机颜色值
``` js
'#' + (~~(Math.random() * (1 << 24))).toString(16)
```