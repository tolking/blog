module.exports = {
  title: '雨无声',
  description: '润雨细无声，何已湿衣襟',
  base: '/',
  dest: 'dist/',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'author', content: 'tolking <w13131wang@gmail.com>' }],
    ['meta', { name: 'copyright', content: '网站内容版权所有，转载请注明出处' }],
    ['meta', { name: "keywords", content: "m-less, less, mixins, 常用 mixins 文件, mixins 总结, mixins 整理, less 总结整理, less 技巧, css 简写, ououe, 雨无声, tolking, 前端技巧, 前端总结, 前端分享, ououe.com" }]
  ],
  theme: 'ououe',
  themeConfig: {
    cover: '/img/cover.jpg',
    logo: '/img/logo.png',
    backgroundImage: false,
    useVssue: true,
    postTime: {
      createTime: '创建时间',
      lastUpdated: '最后修改'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '档案', link: '/lib/' },
      { text: '标签', link: '/tag/' },
      { text: '分类', link: '/category/'},
      { text: '关于', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/tolking' }
    ]
  },
  postcss: {
    plugins: [
      require('postcss-propro'),
      require('postcss-flex-alias'),
      require('autoprefixer')
    ]
  },
  plugins: [
    // Preventing sitemap errors
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        return new Date(timestamp).toISOString()
      }
    }],
    // permalink for posts
    ['blog-multidir', {
      postsDir: {
        posts: 'posts/:year/:month/:day/:slug'
      }
    }],
    // add vuepress-plugin-reading-progress
    ['reading-progress', {
      readingDir: ['posts', 'lib']
    }],
    // add vuepress-plugin-container
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="warning"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    // add @vssue/vuepress-plugin-vssue
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'tolking',
      repo: 'blog',
      clientId: '32058bd2babe34bdc824',
      clientSecret: '9ce6c5a88c8e23fead191752511009827c4319d0'
    }],
    // add vuepress-plugin-sitemap
    ['sitemap', {
      hostname: 'https://ououe.com',
      changefreq: 'weekly'
    }],
    // add pwa
    ['@vuepress/pwa', {
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }]
  ]
}
