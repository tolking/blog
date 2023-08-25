import{_ as s,o as a,c as l,x as p}from"./chunks/framework.f6ec665f.js";const d=JSON.parse('{"title":"backdrop-filter 的使用","description":"backdrop-filter 属性可以为一个元素后面区域添加图形效果，如模糊或颜色偏移等","frontmatter":{"title":"backdrop-filter 的使用","description":"backdrop-filter 属性可以为一个元素后面区域添加图形效果，如模糊或颜色偏移等","image":"https://picsum.photos/1920/1080/?random&date=2019-10-26","date":"2019-10-26T00:00:00.000Z","vssue-title":"backdrop-filter","tags":["css","cssnext"],"categories":["summary"]},"headers":[],"relativePath":"posts/backdrop-filter.md","filePath":"posts/backdrop-filter.md","lastUpdated":1692967289000}'),o={name:"posts/backdrop-filter.md"},n=p(`<p>这个属性可以为一个元素后面区域添加图形效果，如模糊或颜色偏移等</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这是一个新特性，查看<a href="https://caniuse.com/#feat=css-backdrop-filter" target="_blank" rel="noreferrer">支持浏览器</a></p></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这个属性需要在部分透明的元素上生效</p></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">blur</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">brightness</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">60%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">contrast</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">40%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">drop-shadow</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grayscale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hue-rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">120deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">invert</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">70%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">opacity</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sepia</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">saturate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">80%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h2><p>你可以留意一下，当前网页的导航就使用了这个属性</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header-navbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">.8</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">backdrop-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">blur</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="与-filter-的差别" tabindex="-1">与 <code>filter</code> 的差别 <a class="header-anchor" href="#与-filter-的差别" aria-label="Permalink to &quot;与 \`filter\` 的差别&quot;">​</a></h2><ul><li>使用 <code>filter</code> 的效果</li></ul><div class="demo-item filter-item"><img src="https://picsum.photos/200/200?random" class="item-img"><div class="item-mask"><img src="https://picsum.photos/200/200?random" class="mask-img"><p class="mask-title">filter</p></div></div><ul><li>使用 <code>backdrop-filter</code> 的效果</li></ul><div class="demo-item backdrop-item"><img src="https://picsum.photos/200/200?random" class="item-img"><div class="item-mask"><p class="mask-title">backdrop-filter</p></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>从上面可以看出来，两者在显示上没有区别</p><p>但当相对位置变化时两者的差别就出来了</p></div><p><strong>将鼠标移动到图片上，注意观察动画变化时的效果</strong></p><ul><li>使用 <code>filter</code> 的效果</li></ul><div class="demo-item filter-item hover-item"><img src="https://picsum.photos/200/200?random" class="item-img"><div class="item-mask"><img src="https://picsum.photos/200/200?random" class="mask-img"><p class="mask-title">filter</p></div></div><ul><li>使用 <code>backdrop-filter</code> 的效果</li></ul><div class="demo-item backdrop-item hover-item"><img src="https://picsum.photos/200/200?random" class="item-img"><div class="item-mask"><p class="mask-title">backdrop-filter</p></div></div>`,19),e=[n];function t(c,r,i,D,F,C){return a(),l("div",null,e)}const A=s(o,[["render",t]]);export{d as __pageData,A as default};