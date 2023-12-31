import{_ as s,c as i,o as a,g as e}from"./chunks/framework.OjRHjQ2q.js";const g=JSON.parse('{"title":"让网站支持黑暗模式","description":"通过媒体查询 prefers-color-scheme 让你的网站支持黑暗模式及其更好的兼容","frontmatter":{"title":"让网站支持黑暗模式","description":"通过媒体查询 prefers-color-scheme 让你的网站支持黑暗模式及其更好的兼容","image":"https://picsum.photos/536/354?random&date=2019-06-27","date":"2019-06-27T00:00:00.000Z","vssue-title":"prefers-color-scheme","tags":["css","cssnext"],"categories":["summary"]},"headers":[],"relativePath":"posts/prefers-color-scheme.md","filePath":"posts/prefers-color-scheme.md","lastUpdated":1704029564000}'),n={name:"posts/prefers-color-scheme.md"},l=e(`<p>通过媒体查询 <code>prefers-color-scheme</code> 让你的网站支持黑暗模式</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这个属性目前还是实验性的，要使用需要满足下面的几个条件</p><ol><li>MacOS 在 Mojave 10.14 版本以上或者 windows 10 在 1809 以上</li><li>使用<a href="https://caniuse.com/#search=prefers-color-scheme" target="_blank" rel="noreferrer">支持浏览器</a></li></ol></div><p>然后你就可以编写你的样式了</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (prefers-color-scheme: light) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .prefers-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    --bgColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#f3f5f7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    --textColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#282c34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (prefers-color-scheme: dark) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .prefers-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    --bgColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#282c34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    --textColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#f3f5f7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.prefers-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--textColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--bgColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h5><div class="prefers-color"></div><p>当然目前这样的兼容性比较差，如果你需要更好的兼容性。你可以参考<a href="https://github.com/csstools/css-prefers-color-scheme" target="_blank" rel="noreferrer">css-prefers-color-scheme</a></p>`,7),p=[l];function t(h,r,k,o,E,c){return a(),i("div",null,p)}const y=s(n,[["render",t]]);export{g as __pageData,y as default};
