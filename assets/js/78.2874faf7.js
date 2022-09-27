(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{312:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("记录使用 "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),s("OutboundLink")],1),t._v(" 以来所遇到的坑及解决办法")]),t._v(" "),s("ol",[s("li",[t._v("修改 build 的输出目录")])]),t._v(" "),s("p",[s("code",[t._v("vuepress")]),t._v(" 的默认输出目录在 "),s("code",[t._v(".vuepress/dist")]),t._v(" 不是很方便，可以通过下面方法改写输出目录")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dest")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist/'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("使用 "),s("code",[t._v("vuepress-plugin-sitemap")]),t._v(" 与 "),s("code",[t._v("@vuepress/last-updated")]),t._v(" 报错")])]),t._v(" "),s("p",[t._v("主要是由于 "),s("code",[t._v("@vuepress/last-updated")]),t._v(" 插件将 "),s("code",[t._v("lastUpdated")]),t._v(" 编译为 "),s("code",[t._v("lang")]),t._v(" 所在时间格式。转换后的中文时间格式没有办法被 "),s("code",[t._v("vuepress-plugin-sitemap")]),t._v(" 识别引起的")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("transformer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("timestamp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toISOString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("为你的主题增加自定义容器")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("vuepress-plugin-container")]),t._v(" 来增加自定义容器")]),t._v(" "),s("div",{staticClass:"tip"},[s("p",{staticClass:"title"},[t._v("TIP")]),s("p",[t._v("默认主题是自带的，其他需要自己手动增加")])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tip'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("info")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div class="tip"><p class="title">')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</p>")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</div>'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/tolking/blog/blob/master/blog/.vuepress/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-styl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-styl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .vuepress/styles/index.styl */")]),t._v("\n.tip")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left-width")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".5")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left-style")]),t._v(" solid")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#f3f5f7")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#42b983")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),t._v(" bold")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/tolking/blog/blob/master/blog/.vuepress/styles/index.styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1)]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("GitHub Pages and Travis CI 自动化部署")])]),t._v(" "),s("ul",[s("li",[t._v("在项目的根目录创建 "),s("code",[t._v(".travis.yml")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("查考"),s("OutboundLink")],1),t._v(" 配置文件，或者复制下面的配置")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn build\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("committer_from_gh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),s("ul",[s("li",[t._v("进入 "),s("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),s("OutboundLink")],1),t._v(" 获取 token\n"),s("ul",[s("li",[t._v("settings -> Developer settings -> Personal access tokens -> Generate new token")]),t._v(" "),s("li",[t._v("输入 Note 同时勾选所有 -> Generate token")]),t._v(" "),s("li",[t._v("复制 token")])])]),t._v(" "),s("li",[t._v("进入 "),s("a",{attrs:{href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis ci"),s("OutboundLink")],1),t._v(" 创建 "),s("code",[t._v("GITHUB_TOKEN")]),t._v(" "),s("ul",[s("li",[t._v("进入你对应仓库的 settings")]),t._v(" "),s("li",[t._v("在 Environment Variables 下面的 NAME 中输入 "),s("code",[t._v("GITHUB_TOKEN")]),t._v("，在 VALUE 中粘贴从 github 中复制的值")]),t._v(" "),s("li",[t._v("点击 add 增加环境变量")])])])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("修改网站的默认语言")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("locales")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-CN'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("注册第三方的全局组建")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/enhanceApp.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XXX'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[t._v("设置别名")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);