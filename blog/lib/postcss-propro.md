---
title: postcss-propro
lang: en-US
description: a postcss plugin adds and extends some properties
image: https://picsum.photos/536/354?random&date=2018-12-07
date: 2018-12-07
vssue-title: postcss-propro
tags:
  - css
  - postcss
categories:
  - project
---

a postcss plugin adds and extends some properties

<!-- more -->

> 已经废弃，不建议使用。可以尝试 [UnoCSS](https://github.com/unocss/unocss)

## Options

example
``` js
'postcss-propro': {
  backgroundColor: '#39cccc',
  lineColor: '#ff851b'
}
```

| parameter | default | work |
| :- | :- | :- |
| backgroundColor | #0074d9 | btn |
| lineColor | #ccc | arrow spread |

---

## Use

### arrow

| parameter | value | default |
| :- | :- | :- |
| type | top | * |
|  | bottom | * |
|  | left | * |
|  | right | * |
|  | top-left | * |
|  | top-right | * |
|  | bottom-left | * |
|  | bottom-right | * |
| size | size | 10px |
| color | color | lineColor |

example
``` css
:root {
  --c-line: #ccc;
}
.foo {
  arrow: top-left 20px var(--c-line);
}
```

### box min-box max-box

| parameter | value | default |
| :- | :- | :- |
| width | (min/max)width | * |
| height | (min/max)height | auto/none(max-height) |

example
``` css
.foo {
  box: 100%;
  min-box: 5rem 2rem;
  max-box: 10rem 20vh;
}
```

### btn

| parameter | value | default |
| :- | :- | :- |
| width | width | * |
| height | height | width |
| radius | border-radius | 0 |
| color | background-color | backgroundColor |
| time | transition-duration | 1s |

example
``` css
:root {
  --c-blue: #0074d9;
}
.foo {
  btn: 100px 40px 10px var(--c-blue);
}
```

### font-cc

| parameter | value | default |
| :- | :- | :- |
| height | line-height | * |

example
``` css
.foo {
  font-cc: 2rem;
}
```

### font-hidden

| parameter | value | default |
| :- | :- | :- |
| row | number | * |

example
``` css
.foo {
  font-hidden: 1;
}
.other {
  // best with max-height if row greater than 1
  max-height: 60px;
  font-hidden: 3;
}
```

### position

| parameter | value | default |
| :- | :- | :- |
| position | absolute | * |
|  | fixed | * |
|  | relative | * |
| top | top | * (same like margin) |
| right | right | top |
| bottom | bottom | top |
| left | left | right |

example
``` css
.foo {
  position: fixed 0;
}
```

### position-cc

| parameter | value | default |
| :- | :- | :- |
| null |  | (by transform) |
| width | width | * (by margin) |
| height | height | width |

example
``` css
.foo {
  position-cc: 10rem 4rem;
}
.other {
  position-cc: ;
}
```

### spread

| parameter | value | default |
| :- | :- | :- |
| type | top | * |
|  | bottom | * |
|  | left | * |
|  | right | * |
|  | top-bottom | * |
|  | bottom-top | * |
|  | left-right | * |
|  | right-left | * |
| width | width | 100% or 1px(left right) |
| height | height | 100% or 1px(top bottom) |
| color | color | lineColor |

example
``` css
:root {
  --c-line: #da3;
}
.foo {
  // best with line-height if type is bottom
  box: 8rem 4rem;
  line-height: calc(4rem - 2px);
  spread: bottom 100% 2px var(--c-line);
}
.other {
  spread: top-bottom var(--c-line);
}
```
