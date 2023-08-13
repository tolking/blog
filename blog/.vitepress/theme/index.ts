import { h } from 'vue'
import Theme from 'vitepress-theme-ououe'
import PwaPopup from '../components/PwaPopup.vue'
import FlexAlias from '../components/FlexAlias.vue'
import { type Theme as DefaultTheme, inBrowser } from 'vitepress'
import './index.css'

const theme: DefaultTheme = {
  Layout() {
    return h(Theme.Layout!, null, {
      'footer-after': () => h(PwaPopup)
    })
  },
  enhanceApp({ app, router }) {
    if (inBrowser) {
      // 重定向之前的永久链接
      const permalinkRegExp = /\/posts\/\d+\/\d+\/\d+\/([^/]*)\//
      const math = location.href.match(permalinkRegExp)
      math && router.go(`/posts/${math[1]}`)
    }

    app.component('FlexAlias', FlexAlias)
  },
}

export default theme
