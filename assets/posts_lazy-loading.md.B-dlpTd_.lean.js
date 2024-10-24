import{_ as a,c as s,a0 as t,o as l}from"./chunks/framework.C1tv1HY1.js";const g=JSON.parse('{"title":"原生的图片和框架懒加载","description":"使用浏览器的原生懒加载来实现对网页内部的图片与框架的懒加载","frontmatter":{"title":"原生的图片和框架懒加载","description":"使用浏览器的原生懒加载来实现对网页内部的图片与框架的懒加载","image":"https://picsum.photos/1920/1080/?random&date=2019-10-25","date":"2019-10-25T00:00:00.000Z","vssue-title":"lazy-loading","tags":["html"],"categories":["summary"]},"headers":[],"relativePath":"posts/lazy-loading.md","filePath":"posts/lazy-loading.md","lastUpdated":1729775426000}'),e={name:"posts/lazy-loading.md"};function n(p,i,h,o,r,k){return l(),s("div",null,i[0]||(i[0]=[t(`<p>使用浏览器的原生懒加载来实现对网页内部的图片与框架的懒加载</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这是一个新特性，查看<a href="https://caniuse.com/#feat=loading-lazy-attr" target="_blank" rel="noreferrer">支持浏览器</a></p></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>只需要向 <code>img</code> 或 <code>iframes</code> 标签增加 <code>loading=&quot;lazy</code> 属性即可</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;img.jpg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lazy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">iframes</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lazy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>基于 <code>lazy-loading</code> 的<a href="https://tolking.github.io/vuepress-plugin-img-lazy/preview.html" target="_blank" rel="noreferrer">演示</a></p><h2 id="loading-支持的参数" tabindex="-1">loading 支持的参数 <a class="header-anchor" href="#loading-支持的参数" aria-label="Permalink to &quot;loading 支持的参数&quot;">​</a></h2><ul><li>auto</li></ul><p>默认值。图片或框架基于浏览器自己的策略进行加载</p><ul><li>lazy</li></ul><p>图片或框架懒加载，也就是元素资源快要被看到的时候加载</p><ul><li>eager</li></ul><p>图片或框架无视一切进行加载</p><h3 id="判断浏览器是否支持" tabindex="-1">判断浏览器是否支持 <a class="header-anchor" href="#判断浏览器是否支持" aria-label="Permalink to &quot;判断浏览器是否支持&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> supportLoading</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;loading&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HTMLImageElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span></span></code></pre></div><p>对与不支持的浏览器，你可以使用其它的方式来实现懒加载</p><ul><li>参考 <a href="https://github.com/tolking/vue-lazy-loading" target="_blank" rel="noreferrer">vue-lazy-loading</a> <a href="https://github.com/tolking/vuepress-plugin-img-lazy" target="_blank" rel="noreferrer">vuepress-plugin-img-lazy</a> 的实现</li></ul>`,17)]))}const c=a(e,[["render",n]]);export{g as __pageData,c as default};
