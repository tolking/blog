---
title: babel-polyfill的引用和使用
lang: zh-CN
image: https://picsum.photos/1920/1080/?random&date=2017-11-15
date: 2017-11-15
tags:
  - js
categories:
  - summary
meta:
  - name: description
    content: 使用babel-polyfill来解决一些低版本的浏览器对es6新语法的不支持
--- 

使用babel-polyfill来解决一些低版本的浏览器对es6新语法的不支持

<!-- more -->

1. 引入 babel-polyfill
- 对于通过vue-cli构建的项目(其他同理)
- 引入babel-polyfill到你的项目中
```
npm install --save-dev babel-polyfill
```

- 在你的入口文件main.js中引入babel-polyfill
``` js
// src -> main.js
import 'babel-polyfill'
```

- 修改webpack的配置文件
```
// build -> webpack.base.conf.js
entry: {
  // app: './src/main.js'
  app: ['babel-polyfill', './src/main.js']
}
```

2. 测试你的项目，如果低版本浏览器能够打开就不用继续下面步骤。如果编译错误，可以测试下面方法

- 继续修改配置文件
```
// build -> webpack.base.conf.js
rules: [
  // {
  //   test: /\.js$/,
  //   loader: 'babel-loader',
  //   include: [resolve('src'), resolve('test')]
  // },
  {
    test: /\.js$/,
    use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
    exclude: /node_modules(?!\/webpack-dev-server)/
  }
]
```

- 将webpack-dev-server的版本回退到2.7.1
- 先卸载webpack-dev-server
```
npm uninstall webpack-dev-server
```

- 在安装指定版本的webpack-dev-server
```
npm install --save-dev webpack-dev-server@2.7.1
```