---
title: git的一些常用命令
display: home
description: git的一些常用命令，搜集整理，开始轻松使用git
image: https://picsum.photos/536/354?random&date=2019-08-18
date: 2019-08-18
vssue-title: git
tags:
  - git
categories:
  - learn
---

搜集整理一些 `git` 的常用命令

<!-- more -->

## 配置用户

- `git config --global user.name 'your name'`

设置全局的用户名

- `git config --global user.email 'your email'`

设置全局的邮箱

## 创建仓库

- `git init`

将当前的文件夹初始化为一个 git 仓库

- `git clone ...`

克隆一个仓库

## 暂存区相关

- `git status`

查看当前工作区和暂存区文件的状态

- `git add ...`

增加文件到缓存区，通过 `git add *` 增加所有

- `git checkout -- ...`

丢弃工作区的文件修改

- `git rm ...`

将文件从版本库中删除

- `git commit -m '...'`

创建提交信息

- `git reset`

把暂存区的修改回退到工作区

- `git reset --hard [commit_id]`

版本回退，使用 `git log` 查看 **commit_id**

## 分支相关

- `git branch`

查看当前分支

- `git checkout -b ...`

创建分支...

- `git branch -d ...`

删除分支...

- `git checkout ...`

切换到...分支

- `git rebase ...`

将...分支的内容合并到当前分支上

## 标签

- `git tag ...`

查看所有标签

- `git tag ...`

创建标签

- `git tag -d ...`

删除标签

## 推送改动到远程

- `git remote add origin ...`

增加远程仓库

- `git push origin ...`

提交改动到远端仓库，使用 `git push origin master` 推送到远程主分支

## 更新与合并

- `git pull`

更新本地仓库至最新改动

- `git merge ...`

将...分支的内容合并到当前分支上

## 配置别名

- `git config --global alias.[...] ...`

为指令配置别名

##### 例如

``` sh
git config --global alias.st status

git st
```