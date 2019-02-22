module.exports = {
  title: '雨无声',
  description: '润雨细无声，何已湿衣襟',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
  theme: '',
  themeConfig: {
    cover: '/img/cover.jpg',
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
      { text: 'Lib', link: '/lib/' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/tolking' }
    ]
  }
}
