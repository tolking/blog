---
title: ES6 Module (模块)
lang: zh-CN
description: 通过 Module 的 export 与 import 来分割代码，集中相同的代码，优化逻辑
image: https://picsum.photos/1920/1080/?random&date=2018-04-01
date: 2018-04-01
vssue-title: module
tags:
  - js
  - es6
categories:
  - learn
--- 

Module基本用法
- 通过 Module 的 export 与 import 来分割代码，集中相同的代码，优化逻辑

<!-- more -->

::: tip 提示
注意：浏览器中使用时需要指定 type="module"
:::

``` html
<script type="module" src=""></script>
```

- ES6的模块自动采用 严格模式

export命令
- 可以直接在任何变量或者函数前面加上一个 export 关键字，就可以将它导出

``` js
// export.js
export var name = 'Michael';
export function multiply (x, y) {
  return x * y;
};
// 或者
var name = 'Michael';
function multiply (x) {
  return x * x;
}
export { name, multiply };
```

- export 输出的变量就是本来的名字，但是可以使用as关键字重命名
``` js
function v1 () {
  // ... some code
}
function v2 () {
  // ... some code
}
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```
- 默认导出，指定一个变量作为默认值导出。默认导出的时候不需要指定一个变量名，它默认就是文件名

``` js
// myFunc.js
export default function () {
  // ... some code
};
```

import命令
- 使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块(文件)

``` js
// import.js
import { multiply } from './export';

multiply(5)  // 25
```

- import 命令要使用as关键字，将输入的变量重命名
``` js
import { name as surname } from './export';
```

- 用星号（*）指定一个对象，所有输出值都加载在这个对象上面
``` js
import * as test from './export';

test.name  // 'Michael'
```

- 加载默认导出，
``` js
import myFunc from 'myFunc';
```

模块的继承
``` js
export * from 'myFunc';
export var e = 2.71828182846;
```