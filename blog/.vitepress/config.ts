import { defineConfigWithTheme } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { genFeed } from './rss'
import type { Theme } from 'vitepress-theme-ououe'

export default withPwa(defineConfigWithTheme<Theme>({
  title: '雨无声',
  description: '润雨细无声，何已湿衣襟',
  cleanUrls: true,
  lastUpdated: true,
  lang: 'zn-CN',
  outDir: '../dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/homescreen144.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/homescreen144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'author', content: 'tolking <w13131wang@gmail.com>' }],
    ['meta', { name: 'copyright', content: '网站内容版权所有，转载请注明出处' }],
    ['meta', { name: "keywords", content: "雨无声, tolking, 前端技巧, 前端总结, 前端分享, ououe.com" }],
  ],
  themeConfig: {
    cover: '/img/cover.jpg',
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '项目', link: '/lib/' },
      { text: '标签', link: '/tag' },
      { text: '分类', link: '/category' },
      { text: '关于', link: '/about/' }
    ],
    tag: '/tag',
    category: '/category',
    socialLinks: [
      {
        ariaLabel: 'GitHub',
        link: 'https://github.com/tolking',
        icon: 'github',
      },
    ],
    pagination: [
      {
        match: (path) => /^\/($|index|page-)/.test(path),
        filter: (page) => page.display === 'home',
      },
      {
        dir: 'posts',
        prev: '上一页',
        next: '下一页',
      },
      {
        dir: 'lib',
        prev: '上一页',
        next: '下一页',
      },
    ],
    excerpt: '<!-- more -->',
    createTime: {
      text: '创建时间',
      format: (date) => new Date(date).toLocaleDateString(),
    },
    lastUpdated: {
      text: '最近更新',
      format: (date) => new Date(date).toLocaleDateString(),
    },
    footer: {
      copyright: '雨无声 © 2018',
    },
    search: {
      provider: 'local',
    },
  },
  buildEnd(siteConfig) {
    genFeed(siteConfig)
  },
  sitemap: {
    hostname: 'https://ououe.com',
  },
  pwa: {
    outDir: '../dist',
    manifestFilename: 'manifest.json',
    filename: 'service-worker.js',
    manifest: {
      id: '/',
      name: "雨无声",
      short_name: "雨无声",
      start_url: "/index.html",
      display: "standalone",
      background_color: "#000",
      theme_color: "#3eaf7c",
      description: "润雨细无声，何已湿衣襟",
      icons: [{
        src: "/img/homescreen48.png",
        sizes: "48x48",
        type: "image/png"
      }, {
        src: "/img/homescreen72.png",
        sizes: "72x72",
        type: "image/png"
      }, {
        src: "/img/homescreen96.png",
        sizes: "96x96",
        type: "image/png"
      }, {
        src: "/img/homescreen144.png",
        sizes: "144x144",
        type: "image/png"
      }, {
        src: "/img/homescreen168.png",
        sizes: "168x168",
        type: "image/png"
      }, {
        src: "/img/homescreen192.png",
        sizes: "192x192",
        type: "image/png"
      }],
    },
  },
}))
