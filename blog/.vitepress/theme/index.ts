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
  enhanceApp({ app }) {
    if (inBrowser) {
      // 重定向之前的永久链接
      const permalinkRegExp = /\/posts\/\d{4}\/\d{2}\/\d{2}\/([^/]*)\//
      const math = location.href.match(permalinkRegExp)
      math && (location.href = `/posts/${math[1]}`)
    }

    app.component('FlexAlias', FlexAlias)
  },
}

export default theme
