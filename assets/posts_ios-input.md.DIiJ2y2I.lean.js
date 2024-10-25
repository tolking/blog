import{_ as i,c as a,a0 as t,o as n}from"./chunks/framework.C1tv1HY1.js";const o=JSON.parse('{"title":"ios 输入法将页面往上顶","description":"ios 输入法将页面往上顶，输入法收回后下方留下空白区域","frontmatter":{"title":"ios 输入法将页面往上顶","description":"ios 输入法将页面往上顶，输入法收回后下方留下空白区域","image":"https://picsum.photos/536/354?random&date=2019-01-12","date":"2019-01-12T00:00:00.000Z","vssue-title":"ios-input","tags":["html","ios","problem"],"categories":["summary"]},"headers":[],"relativePath":"posts/ios-input.md","filePath":"posts/ios-input.md","lastUpdated":1729819822000}'),p={name:"posts/ios-input.md"};function h(k,s,l,e,E,r){return n(),a("div",null,s[0]||(s[0]=[t(`<p>ios 输入法将页面往上顶，输入法收回后下方留下空白区域</p><p>​Android 没有这种问题，to经过测试没有办法通过纯 css 解决 后来考虑通过 js 在输入框失去焦点是将页面滚动到顶部</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> input</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementsByTagName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input[i].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onblur</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrollTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>经过测试方案可行，对在 body 里面 设置 ontouchmove=event.preventDefault() 的不能滚动的页面也生效</p>`,4)]))}const g=i(p,[["render",h]]);export{o as __pageData,g as default};