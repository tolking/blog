---
title: vuepress-theme-ououe
image: https://picsum.photos/1920/1080/?random&date=2019-02-25
date: 2019-02-25
--- 

come soon...

The post intro uses the `<!-- more -->` tag

<!-- more -->

# h1
## h2
### h3
#### h4
##### h5
###### h6

``` sh
npm install -d vuepress-theme-ououe
```

``` js{2}
const app = 'app'
console.log(app)
```

---

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

---

## themeConfig

### cover

全局封面图，可以通过在 index.md 文件中单独设置 image

### logo

logo 图

### search

是否显示搜索组建，默认 `true`

### postTime

是否在博客页面显示时间，默认 { createTime: 'Create Time', lastUpdated: 'Last Updated' }

可以是设为 `false` 将不显示相关时间

### nav

导航栏数据，默认 `[]`

### footer

页脚友情链接数据，默认 `[]`

.vuepress/config.js
``` js
module.exports = {
  ...
  theme: 'ououe',
  themeConfig: {
    cover: '/cover.jpg',
    logo: '/logo.png',
    search: true,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated'
    },
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts/'
    }, {
      text: 'About',
      link: '/about.html'
    }],
    footer: [{
      text: 'Github',
      link: 'https://github.com/tolking'
    }]
  }
}
```

...