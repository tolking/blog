module.exports = {
  title: '雨无声',
  description: '润雨细无声，何已湿衣襟',
  base: '/',
  dest: 'dist/',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'}],
    ['meta', { name: 'renderer', content: "webkit"}],
    ['meta', { name: 'author', content: 'tolking <w13131wang@gmail.com>'}],
    ['meta', { name: 'description', content: '润雨细无声，何已湿衣襟|前端干货, 记录分享我的前端之路, 分享我进阶过程中遇到的坑, 希望对你有所帮助, 主要风向为前端 vue 全家桶、postcss、svg、canvas, 后端 nodejs、nuxt、graphQL、prisma' }],
    ['meta', { name: "keywords", content: "m-less, less, mixins, 常用 mixins 文件, mixins 总结, mixins 整理, less 总结整理, less 技巧, css 简写, ououe, 雨无声, tolking, 前端技巧, 前端总结, 前端分享, ououe.com"}],
    ['meta', { name: 'copyright', content: '网站内容版权所有，转载请注明出处' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  postcss: {
    plugins: [
      require('postcss-propro'),
      require('autoprefixer')
    ]
  },
  theme: 'ououe',
  themeConfig: {
    cover: '/img/cover.jpg',
    logo: '/img/logo.png',
    postTime: {
      createTime: '创建时间',
      lastUpdated: '最后修改'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
      { text: 'Lib', link: '/lib/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/'},
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/tolking' }
    ]
  }
}
