---
title: 如何在 vite.config 中使用 env 环境变量
display: home
description: 通过简单的方法在 vite.config 中使用 env 环境变量
image: https://picsum.photos/536/354?random&date=2021-06-05
date: 2021-06-05
vssue-title: vite-env
tags:
  - vite
  - env
categories:
  - summary
---

手写简单的几行代码，实现在 vite.config 中使用 env 环境变量

<!-- more -->

## 起因

多人开发时难免会遇到不同人需要请求不同的代理服务器开发，通过 `.env.local` 能够很好实现这个需求

## 通过vite内部方法获取

``` ts
import { defineConfig, loadEnv } from 'vite'

const config = loadEnv('development', './')

export default defineConfig({
  server: {
    proxy: {
      '/api/': config.VITE_PROXY_URL, // 配置需要前缀 VITE_
    },
  },
})
```

## 手动获取

vite 配置文件是在 nodejs 中执行的，所以只需要通过 nodejs 读取环境变量文件，然后解析文件就行了

``` ts
import { existsSync, readFileSync } from 'fs'

/** 解析后环境变量 */
const config = getEnvConfig()

/** 读取环境变量文件 */
function getEnvConfig() {
  const path = existsSync('.env.local') ? '.env.local' : '.env' // 判断根目录中是否存在 local 文件并优先使用
  const content = readFileSync(path, 'utf-8')
  return parse(content)
}

/** 解析环境变量内容 */
function parse(string: string) {
  const obj: Record<string, string> = {}
  const regExp = '(\\S+)\\s*=\\s*(\\S+)' // 通过正则匹配符合 `A=b` 的结构。如果需要处理带引号的参数，可以优化正则为 `'(\\S+)\\s*=\\s*"(\\S+)"'` 适配双引号
  const list = string.match(new RegExp(regExp, 'g'))
  // 去除空格并组合为键值对
  list && list.forEach((item) => {
    const data = item.match(new RegExp(regExp))
    const key = data ? data[1].trim() : undefined
    const value = data ? data[2].trim() : undefined
    key && (obj[key] = value)
  })
  return obj
}
```

然后通过 `config` 就可以在 vite.config 中使用环境变量了

``` ts
export default defineConfig({
  server: {
    proxy: {
      '/api': config.API,
    },
  },
})
```