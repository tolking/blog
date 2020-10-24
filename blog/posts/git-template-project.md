---
title: git单模板多项目的探索
display: home
description: 我在用单模板进行多项目开发的尝试和探索
image: https://picsum.photos/536/354?random&date=2020-10-23
date: 2020-10-23
vssue-title: git-template-project
tags:
  - git
categories:
  - summary
---

我在用单模板进行多项目开发的尝试和探索

<!-- more -->

## 起因

由于工作需要经常写后台管理界面，由于除了新管理后台界面新增的业务，其它大多数东西都是通用的。最初开发的时候就新建一个分支，然后进行新业务的开发。然后随着后面项目变多，各种缺点就暴露出来了。

## 多分支开发

如果你只需要对少数项目开发，且不需要同时开发时，多分支开发还是比较实用的方式。

在不同的分支开发不同的项目的业务逻辑，相互不影响。但无法对多个分支同时操作，对公共部分的修改也得复制到多个分支。

## 多仓库开发

多仓库间相互间完全没有影响，不存在多分支的问题。但也没有关联，这也不是我想要的。

于是后面就想到创建一个模板仓库 `template`，在这个仓库里面对公共的模板进行开发。然后新建的项目就克隆这个仓库进行开发，根据需要同步 `template` 仓库的变动即可。

### 上手

1. 对 `template` 仓库的开发就和普通开发流程一样，但建议在 `README.md` 中增加对使用的说明。

2. 克隆 `template` 并配置好对 `template` 仓库的依赖以便于对新项目的开发。

``` sh
git clone template.git project # template.git-为 template 的仓库地址；project-为子项目文件夹名称，防止重名
cd project
git remote rename origin template # 将现在的远程地址重命名为 template
git checkout -b template # 创建 template 分支
git checkout master # 切换回主分支
```

3. 然后新项目的业务就基于 `master` 分支开发。

4. 绑定子项目的远程分支，如果不想提交到远程可以忽略。

``` sh
git remote add origin project.git # project.git-子项目的远程仓库
git push -u origin master # 推送 master 到远程
git push origin template:template # 推送 template 到远程 template 分支
```

5. 同步 `template` 仓库的变动。

``` sh
git checkout template # 切换到 template 分支
git pull template template # 同步 template 仓库的变动
git checkout master # 切换回 master 分支
git rebase template # 将 template 变动合并到 master 分支
```
