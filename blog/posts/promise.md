---
title: ES6 promise对象
lang: zh-CN
description: 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理
image: https://picsum.photos/536/354?random&date=2018-02-15
date: 2018-02-15
vssue-title: promise
tags:
  - js
  - es6
categories:
  - learn
--- 

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。

<!-- more -->

## Promise对象有以下两个特点。

1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

## 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用stream模式是比部署Promise更好的选择。

``` js
function getJSON(url) {
  let promise = new Promise((resolve, reject) => {
    let client = new XMLHttpRequest()
    client.open("GET", url)
    client.responseType = "json"
    client.setRequestHeader("Accept", "application/json")
    client.send()

    client.onreadystatechange = () => {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  })
  return promise
}

getJSON("/posts.json")
  .then(json => {
    console.log('Contents: ' + json)
  })
  .catch(error => {
    console.error('error', error)
  })
```

### Promise.prototype.then()

Promise实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为Promise实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

### Promise.prototype.catch()

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数

### Promise.all()

Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例

``` js
const p = Promise.all([p1, p2, p3])
```

Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例

### Promise.race()

Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。

``` js
var p = Promise.race([p1, p2, p3])
```

上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数

### Promise.resolve()

有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用

``` js
var jsPromise = Promise.resolve($.ajax('/whatever.json'))
```

### Promise.reject()

Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected。它的参数用法与Promise.resolve方法完全一致

``` js
var p = Promise.reject('出错了');
// 等同于
var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s){
  console.log(s)
});
// 出错了
```