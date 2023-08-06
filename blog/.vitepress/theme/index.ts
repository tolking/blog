import Theme from 'vitepress-theme-ououe'
import FlexAlias from '../components/FlexAlias.vue'
import type { Theme as DefaultTheme } from 'vitepress'
import './index.css'

const theme: DefaultTheme = {
  ...Theme,
  enhanceApp({ app, router }) {
    const permalinkRegExp = /\/posts\/\d+\/\d+\/\d+\/([^/]*)\//
    const math = router.route.path.match(permalinkRegExp)

    math && router.go(`/posts/${math[1]}`)

    app.component('FlexAlias', FlexAlias)
  },
}

export default theme
