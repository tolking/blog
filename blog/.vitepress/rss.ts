import { resolve } from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'
import type { Theme } from 'vitepress-theme-ououe'

const baseUrl = `https://ououe.com`

export async function genFeed(siteConfig: SiteConfig<Theme>) {
  const feed = new Feed({
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    id: baseUrl,
    link: baseUrl,
    language: siteConfig.site.lang,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: siteConfig.site.themeConfig.footer?.copyright || '',
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.filter((item) => {
    return !(/\[[^\]]*\]\./.test(item.url) || ['page', 'tag', 'category'].includes(item.frontmatter.layout))
  }).sort((a, b) => {
    if (!b.frontmatter.date || !a.frontmatter.date) return 0
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  }).forEach((post) => {
    feed.addItem({
      title: post.frontmatter.title || '',
      id: `${baseUrl}${post.url}`,
      link: `${baseUrl}${post.url}`,
      description: post.excerpt || post.frontmatter.description,
      content: post.html,
      image: post.frontmatter.image,
      date: new Date(post.frontmatter.date || '')
    })
  })

  const filePath = resolve(siteConfig.outDir, 'feed.rss')

  writeFileSync(filePath, feed.rss2())
}
