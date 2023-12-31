---
title: vuepress 踩坑记录
description: 记录使用 vuepress 以来所遇到的坑及解决办法
image: https://picsum.photos/536/354?random&date=2019-07-07
date: 2019-07-07
vssue-title: vuepress
tags:
  - vue
  - vuepress
categories:
  - summary
---

记录使用 [vuepress](https://v1.vuepress.vuejs.org) 以来所遇到的坑及解决办法

<!-- more -->

1. 修改 build 的输出目录

`vuepress` 的默认输出目录在 `.vuepress/dist` 不是很方便，可以通过下面方法改写输出目录

``` js
// .vuepress/config.js
module.exports = {
  // ...
  dest: 'dist/'
}
```

2. 使用 `vuepress-plugin-sitemap` 与 `@vuepress/last-updated` 报错

主要是由于 `@vuepress/last-updated` 插件将 `lastUpdated` 编译为 `lang` 所在时间格式。转换后的中文时间格式没有办法被 `vuepress-plugin-sitemap` 识别引起的

``` js
// .vuepress/config.js
module.exports = {
  // ...
  plugins: [
    ['@vuepress/last-updated', {
      transformer: timestamp => {
        return new Date(timestamp).toISOString()
      }
    }]
  ]
}
```

3. 为你的主题增加自定义容器

使用 `vuepress-plugin-container` 来增加自定义容器

::: tip
默认主题是自带的，其他需要自己手动增加
:::

``` js
// .vuepress/config.js
module.exports = {
  // ...
  plugins: [
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }]
  ]
}
```
[参考](https://github.com/tolking/blog/blob/master/blog/.vuepress/config.js)
``` styl
/* .vuepress/styles/index.styl */
.tip
  padding 1rem 1.5rem
  border-left-width .5rem
  border-left-style solid
  margin 1rem 0
  background-color #f3f5f7
  border-color #42b983
  .title
    font-weight bold
```
[参考](https://github.com/tolking/blog/blob/master/blog/.vuepress/styles/index.styl)

4. GitHub Pages and Travis CI 自动化部署

- 在项目的根目录创建 `.travis.yml`
- [查考](https://docs.travis-ci.com/user/deployment/pages/) 配置文件，或者复制下面的配置

``` yml
language: node_js
node_js:
  - lts/*
install:
  - yarn
cache:
  directories:
    - node_modules
script:
  - yarn build
deploy:
  committer_from_gh: true
  provider: pages
  skip-cleanup: true
  local_dir: dist
  github-token: $GITHUB_TOKEN
  keep-history: true
  on:
    branch: master
```

- 进入 [github](https://github.com) 获取 token 
  + settings -> Developer settings -> Personal access tokens -> Generate new token
  + 输入 Note 同时勾选所有 -> Generate token
  + 复制 token
- 进入 [travis ci](https://travis-ci.org) 创建 `GITHUB_TOKEN`
  + 进入你对应仓库的 settings
  + 在 Environment Variables 下面的 NAME 中输入 `GITHUB_TOKEN`，在 VALUE 中粘贴从 github 中复制的值
  + 点击 add 增加环境变量

5. 修改网站的默认语言

``` js
// .vuepress/config.js
module.exports = {
  // ...
  locales: { '/': { lang: 'zh-CN' }}
}
```

6. 注册第三方的全局组建

``` js
// .vuepress/enhanceApp.js
import XXX from 'XXX'

export default ({ Vue }) => {
  Vue.use(XXX)
}

```

7. 设置别名

``` js
// .vuepress/config.js
const path = require('path')

module.exports = {
  // ...
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../src'))
  }
}
```
