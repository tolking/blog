---
title: ES6 class
lang: zh-CN
display: home
image: https://picsum.photos/1920/1080/?random&date=2018-02-19
date: 2018-02-19
tags:
  - js
  - es6
categories:
  - learn
  - summary
meta:
  - name: description
    content: ES6引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已
--- 

ES6引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

<!-- more -->

``` js
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

const point = new Point(2, 3)

point.toString() // (2, 3)
```

### 不存在变量提升

``` js
new Foo() // ReferenceError
class Foo {}
```

### this的指向
类的方法内部如果含有this，它默认指向类的实例

### Class的继承

Class之间可以通过extends关键字实现继承

``` js
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```

### Class的取值函数（getter）和存值函数（setter）

``` js
class CustomHTMLElement {
  constructor(element) {
    this.element = element
  }

  get html() {
    return this.element.innerHTML
  }

  set html(value) {
    this.element.innerHTML = value
  }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html")

"get" in descriptor  // true
"set" in descriptor  // true
```

### Class的Generator方法

如果某个方法之前加上星号（*），就表示该方法是一个Generator函数。

``` js
class Foo {
  constructor(...args) {
    this.args = args
  }
  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg
    }
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log(x)
}
// hello
// world
```

### Class的静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”

``` js
class Foo {
  static classMethod() {
    return 'hello'
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo()
foo.classMethod() // TypeError: foo.classMethod is not a function
```