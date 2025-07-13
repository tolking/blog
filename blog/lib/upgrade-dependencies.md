---
title: Upgrade Dependencies
description: Upgrade Dependencies 是一个用于提示更新依赖的 VSCode 扩展
image: https://picsum.photos/536/354?random&date=2025-07-13
date: 2025-07-13
vssue-title: upgrade-dependencies
tags:
  - vscode
  - extension
categories:
  - project
---

Upgrade Dependencies 是一个用于提示更新依赖的 VSCode 扩展

<!-- more -->

## 起因

团开发的过程中，可能会遇到不同成员安装不同依赖项版本的问题。例如，如果团队成员更新依赖项并提交代码，您可能没有意识到需要更新依赖项，从而导致代码执行错误。

所以我就想到写一个 VSCode 扩展来自动检测依赖项版本的变化，并提示更新。

## 实现的功能

- 自动检测锁文件的变化，并在发生变化时提示更新依赖项

![Information](https://github.com/tolking/upgrade-dependencies/raw/HEAD/images/information.png)

- 在 package.json 页面右上角添加手动更新和升级依赖项的按钮

![Navigation](https://github.com/tolking/upgrade-dependencies/raw/HEAD/images/navigation.png)

## 底层原理

该扩展会在激活的时候读取当前工作区中的 lock 文件并生成一个 MD5 值，用于和之前缓存的 MD5 值进行对比，如果不一致则说明 lock 文件发生了变化，提示用户更新依赖项。

同时也会检测 lock 文件的变化，如果发生变化则会提示用户更新依赖项。

[源码](https://github.com/tolking/upgrade-dependencies)
