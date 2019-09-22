---
title: ubuntu 下安装 nodejs 踩坑
lang: zh-CN
description: 在 ubuntu 下安装 nodejs 的踩坑记录
image: https://picsum.photos/536/354?random&date=2018-12-20
date: 2018-12-20
vssue-title: ubuntu-nodejs
tags:
  - ubuntu
  - nodejs
categories:
  - summary
--- 

我的需求就是在服务器上安装 nodejs 来跑之前用 nuxt 重构的网站程序，过程不出所料的磕磕碰碰

<!-- more -->

要来服务器的账号，小心翼翼的输入账号，然后轻轻松松就连接上服务器了，开头可是无比顺利。

输入 node -v 提示没有安装 nodejs 使用 apt-get install ... 安装，心想 ubuntu 居然这么人性，田牌要好好学学。

然后按照指示顺利安装 nodejs，接着是 npm 都这里都是无比顺利。

然后直接 cd 到文件存放目录下安装依赖，直接 npm install 然后就理所当然的遇到了神秘力量，换上局域网版本后，cnpm install 然后报错。

![An image](/img/doubt.jpeg)

what？？？ 居然连 const 都不支持，我之前安装的是 nodejs 吗？

输入 node -v 瞬间傻眼，版本 0.1.14 ，最新的版本不是都到 11.+ 了吗，这难道是 ubunt 专供 nodejs 版本，不，它可能仅仅只是上古版本而已。

**垃圾 apt-get 浪费我人生**

接着想用 n 来管理 nodejs版本 可惜 npm cnpm 都安装不了。

查询一番认为下面的比较简单

``` sh
sudo npm cache clean -f     // 如果已经安装了上古版本
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -     // 10.x 为版本号
sudo apt-get install nodejs
```

然后 node -v 版本就到了 10.15.0