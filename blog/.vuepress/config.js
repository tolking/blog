module.exports = {
  title: '雨无声',
  description: '润雨细无声，何已湿衣襟',
  base: '/',
  dest: 'dist/',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'tolking <w13131wang@gmail.com>' }],
    ['meta', { name: 'copyright', content: '网站内容版权所有，转载请注明出处' }],
    ['meta', { name: "keywords", content: "m-less, less, mixins, 常用 mixins 文件, mixins 总结, mixins 整理, less 总结整理, less 技巧, css 简写, ououe, 雨无声, tolking, 前端技巧, 前端总结, 前端分享, ououe.com" }]
  ],
  theme: 'ououe',
  themeConfig: {
    cover: '/img/cover.jpg',
    logo: '/img/logo.png',
    useVssue: false,
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
  },
  markdown: {
    lineNumbers: true
  },
  postcss: {
    plugins: [
      require('postcss-propro'),
      require('postcss-flex-alias'),
      require('autoprefixer')
    ]
  },
  plugins: {
    'blog-multidir': {
      postsDir: {
        posts: 'posts/:year/:month/:day/:slug'
      }
    },
    // '@vssue/vuepress-plugin-vssue': {
    //   platform: 'github',
    //   owner: 'tolking',
    //   repo: 'blog',
    //   clientId: '32058bd2babe34bdc824',
    //   clientSecret: '9ce6c5a88c8e23fead191752511009827c4319d0',
    // },
    'sitemap': {
      hostname: 'https://ououe.com',
      changefreq: 'weekly'
    }
  }
}
