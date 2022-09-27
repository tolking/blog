(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{309:function(v,_,t){"use strict";t.r(_);var a=t(3),i=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("搜集整理一些 "),_("code",[v._v("git")]),v._v(" 的常用命令")]),v._v(" "),_("h2",{attrs:{id:"配置用户"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置用户"}},[v._v("#")]),v._v(" 配置用户")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git config --global user.name 'your name'")])])]),v._v(" "),_("p",[v._v("设置全局的用户名")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git config --global user.email 'your email'")])])]),v._v(" "),_("p",[v._v("设置全局的邮箱")]),v._v(" "),_("h2",{attrs:{id:"创建仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[v._v("#")]),v._v(" 创建仓库")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git init")])])]),v._v(" "),_("p",[v._v("将当前的文件夹初始化为一个 git 仓库")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git clone ...")])])]),v._v(" "),_("p",[v._v("克隆一个仓库")]),v._v(" "),_("h2",{attrs:{id:"暂存区相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#暂存区相关"}},[v._v("#")]),v._v(" 暂存区相关")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git status")])])]),v._v(" "),_("p",[v._v("查看当前工作区和暂存区文件的状态")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git add ...")])])]),v._v(" "),_("p",[v._v("增加文件到缓存区，通过 "),_("code",[v._v("git add *")]),v._v(" 增加所有")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git checkout -- ...")])])]),v._v(" "),_("p",[v._v("丢弃工作区的文件修改")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git rm ...")])])]),v._v(" "),_("p",[v._v("将文件从版本库中删除")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git commit -m '...'")])])]),v._v(" "),_("p",[v._v("创建提交信息")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git reset")])])]),v._v(" "),_("p",[v._v("把暂存区的修改回退到工作区")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git reset --hard [commit_id]")])])]),v._v(" "),_("p",[v._v("版本回退，使用 "),_("code",[v._v("git log")]),v._v(" 查看 "),_("strong",[v._v("commit_id")])]),v._v(" "),_("h2",{attrs:{id:"分支相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分支相关"}},[v._v("#")]),v._v(" 分支相关")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git branch")])])]),v._v(" "),_("p",[v._v("查看当前分支")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git checkout -b ...")])])]),v._v(" "),_("p",[v._v("创建分支...")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git branch -d ...")])])]),v._v(" "),_("p",[v._v("删除分支...")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git checkout ...")])])]),v._v(" "),_("p",[v._v("切换到...分支")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git rebase ...")])])]),v._v(" "),_("p",[v._v("将...分支的内容合并到当前分支上")]),v._v(" "),_("h2",{attrs:{id:"标签"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[v._v("#")]),v._v(" 标签")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git tag ...")])])]),v._v(" "),_("p",[v._v("查看所有标签")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git tag ...")])])]),v._v(" "),_("p",[v._v("创建标签")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git tag -d ...")])])]),v._v(" "),_("p",[v._v("删除标签")]),v._v(" "),_("h2",{attrs:{id:"推送改动到远程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#推送改动到远程"}},[v._v("#")]),v._v(" 推送改动到远程")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git remote add origin ...")])])]),v._v(" "),_("p",[v._v("增加远程仓库")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git push origin ...")])])]),v._v(" "),_("p",[v._v("提交改动到远端仓库，使用 "),_("code",[v._v("git push origin master")]),v._v(" 推送到远程主分支")]),v._v(" "),_("h2",{attrs:{id:"更新与合并"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更新与合并"}},[v._v("#")]),v._v(" 更新与合并")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git pull")])])]),v._v(" "),_("p",[v._v("更新本地仓库至最新改动")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git merge ...")])])]),v._v(" "),_("p",[v._v("将...分支的内容合并到当前分支上")]),v._v(" "),_("h2",{attrs:{id:"配置别名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置别名"}},[v._v("#")]),v._v(" 配置别名")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git config --global alias.[...] ...")])])]),v._v(" "),_("p",[v._v("为指令配置别名")]),v._v(" "),_("h5",{attrs:{id:"例如"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#例如"}},[v._v("#")]),v._v(" 例如")]),v._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("git")]),v._v(" config "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[v._v("--global")]),v._v(" alias.st status\n\n"),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("git")]),v._v(" st\n")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);