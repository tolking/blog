import { resolve } from 'path'
import { writeFileSync } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import type { SiteConfig } from "vitepress"

export function genSitemap(siteConfig: SiteConfig) {
  const stream = new SitemapStream({ hostname: 'https://ououe.com' })
  
  siteConfig.pages.forEach((url) => {
    stream.write({
      url: url.replace(/\.md$/, ''),
      changefreq: 'monthly',
      priority: 0.8
    })
  })

  stream.end()
  streamToPromise(stream).then((data) => {
    const filePath = resolve(siteConfig.outDir, 'sitemap.xml')

    writeFileSync(filePath, data.toString())
  })
}
