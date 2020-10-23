(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{269:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我在用单模板进行多项目开发的尝试和探索")]),t._v(" "),a("h2",{attrs:{id:"起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[t._v("#")]),t._v(" 起因")]),t._v(" "),a("p",[t._v("由于工作需要经常写后台管理界面，由于除了新管理后台界面新增的业务，其它大多数东西都是通用的。最初开发的时候就新建一个分支，然后进行新业务的开发。然后随着后面项目变多，各种缺点就暴露出来了。")]),t._v(" "),a("h2",{attrs:{id:"多分支开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多分支开发"}},[t._v("#")]),t._v(" 多分支开发")]),t._v(" "),a("p",[t._v("如果你只需要对少数项目开发，且不需要同时开发时，多分支开发还是比较实用的方式。")]),t._v(" "),a("p",[t._v("在不同的分支开发不同的项目的业务逻辑，相互不影响。但无法对多个分支同时操作，对公共部分的修改也得复制到多个分支。")]),t._v(" "),a("h2",{attrs:{id:"多仓库开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多仓库开发"}},[t._v("#")]),t._v(" 多仓库开发")]),t._v(" "),a("p",[t._v("多仓库间相互间完全没有影响，不存在多分支的问题。但也没有关联，这也不是我想要的。")]),t._v(" "),a("p",[t._v("于是后面就想到创建一个模板仓库 "),a("code",[t._v("template")]),t._v("，在这个仓库里面对公共的模板进行开发。然后新建的项目就克隆这个仓库进行开发，根据需要同步 "),a("code",[t._v("template")]),t._v(" 仓库的变动即可。")]),t._v(" "),a("h3",{attrs:{id:"上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上手"}},[t._v("#")]),t._v(" 上手")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("对 "),a("code",[t._v("template")]),t._v(" 仓库的开发就和普通开发流程一样，但建议在 "),a("code",[t._v("README.md")]),t._v(" 中增加对使用的说明。")])]),t._v(" "),a("li",[a("p",[t._v("克隆 "),a("code",[t._v("template")]),t._v(" 并配置好对 "),a("code",[t._v("template")]),t._v(" 仓库的依赖以便于对新项目的开发。")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone template.git project "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# template.git-为 template 的仓库地址；project-为子项目文件夹名称，防止重名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" project\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" origin template "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将现在的远程地址重命名为 template")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b template "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 template 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换回主分支")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("然后新项目的业务就基于 "),a("code",[t._v("master")]),t._v(" 分支开发。")])]),t._v(" "),a("li",[a("p",[t._v("绑定子项目的远程分支，如果不想提交到远程可以忽略。")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin project.git "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# project.git-子项目的远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送 master 到远程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin template:template "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送 template 到远程 template 分支")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("同步 "),a("code",[t._v("template")]),t._v(" 仓库的变动。")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout template "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到 template 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull template template "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步 template 仓库的变动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换回 master 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase template "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 template 变动合并到 master 分支")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);