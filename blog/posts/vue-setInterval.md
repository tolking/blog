---
title: vue 清除定时器
description: 安全的清除 vue 中的定时器
image: https://picsum.photos/536/354?random&date=2018-09-08
date: 2018-09-08
vssue-title: vue-setInterval
tags:
  - vue
  - problem
categories:
  - summary
---

由于是单页面，在页面切换后，定时器没有被清除，在再次回到页面时，使得两个定时器同时工作，时间流逝加倍。使用 beforeDestroy() 来清除定时器

<!-- more -->

**所需要做的就是在页面销毁之前将可能没用完成的定时器清除，大致代码如下**

``` html vue
<template>
  <p>{{ time }}</p>
  <buttom @click="start()">start</buttom>
</template>

<script>
export default {
  data() {
    return{
      time: 60
    };
  },
  methods: {
    start () {
      let timer = setInterval(() =>{
      	if (this.time > 0) {
      	  this.time--;
      	} else {
      	  clearInterval(timer);
          timer = null;
        }
      }, 1000);  
      this.$once('hook:beforeDestroy', () => {
      	clearInterval(timer);
      });
    }
  },
  // beforeDestroy 在销毁前将页面的定时器清除
  beforeDestroy() {
    clearInterval(this.timer);    
    this.timer = null;
  }
};
</script>
```