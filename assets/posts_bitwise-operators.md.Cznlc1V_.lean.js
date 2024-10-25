import{_ as i,c as a,a0 as t,o as e}from"./chunks/framework.C1tv1HY1.js";const c=JSON.parse('{"title":"js按位运算符及运用","description":"js按位运算符/二进制运算符的简单简绍和使用","frontmatter":{"title":"js按位运算符及运用","description":"js按位运算符/二进制运算符的简单简绍和使用","image":"https://picsum.photos/536/354?random&date=2017-12-03","date":"2017-12-03T00:00:00.000Z","vssue-title":"bitwise-operators","tags":["js"],"categories":["summary"]},"headers":[],"relativePath":"posts/bitwise-operators.md","filePath":"posts/bitwise-operators.md","lastUpdated":1729819822000}'),h={name:"posts/bitwise-operators.md"};function l(n,s,p,k,d,r){return e(),a("div",null,s[0]||(s[0]=[t('<p>js按位运算符/二进制运算符的简单简绍和使用</p><blockquote><p>&amp;、|、^、~、&lt;&lt;、&gt;&gt;</p></blockquote><h2 id="按位与-两数同位是1对应位才是1" tabindex="-1"><code>&amp;</code> 按位与，两数同位是1对应位才是1 <a class="header-anchor" href="#按位与-两数同位是1对应位才是1" aria-label="Permalink to &quot;`&amp;` 按位与，两数同位是1对应位才是1&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 0 (0001 且 0010 = 0000 = 0)</span></span></code></pre></div><h2 id="按位或-两数同位是0对应位才是0" tabindex="-1"><code>|</code> 按位或，两数同位是0对应位才是0 <a class="header-anchor" href="#按位或-两数同位是0对应位才是0" aria-label="Permalink to &quot;`|` 按位或，两数同位是0对应位才是0&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 3 (0001 或 0010 = 0011 = 3)</span></span></code></pre></div><h2 id="按位异或-两数同位相同都取0-不同都取1" tabindex="-1"><code>^</code> 按位异或，两数同位相同都取0，不同都取1 <a class="header-anchor" href="#按位异或-两数同位相同都取0-不同都取1" aria-label="Permalink to &quot;`^` 按位异或，两数同位相同都取0，不同都取1&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 3 (0001 异或 0010 = 0011 = 3)</span></span></code></pre></div><h2 id="按位非-每位取反的补码" tabindex="-1"><code>~</code> 按位非，每位取反的补码 <a class="header-anchor" href="#按位非-每位取反的补码" aria-label="Permalink to &quot;`~` 按位非，每位取反的补码&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // -3</span></span></code></pre></div><h2 id="左移-二进制所有位都左移规定的次数" tabindex="-1"><code>&lt;&lt;</code> 左移，二进制所有位都左移规定的次数 <a class="header-anchor" href="#左移-二进制所有位都左移规定的次数" aria-label="Permalink to &quot;`&lt;&lt;` 左移，二进制所有位都左移规定的次数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 2 (0001 左移 1 = 0010 = 2)</span></span></code></pre></div><h2 id="右移-二进制所有位都右移规定的次数" tabindex="-1"><code>&gt;&gt;</code> 右移，二进制所有位都右移规定的次数 <a class="header-anchor" href="#右移-二进制所有位都右移规定的次数" aria-label="Permalink to &quot;`&gt;&gt;` 右移，二进制所有位都右移规定的次数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 2 (0001 右移 1 = 0000 = 0)</span></span></code></pre></div><h2 id="运用" tabindex="-1">运用 <a class="header-anchor" href="#运用" aria-label="Permalink to &quot;运用&quot;">​</a></h2><h3 id="用位运算符来小数取整" tabindex="-1">用位运算符来小数取整 <a class="header-anchor" href="#用位运算符来小数取整" aria-label="Permalink to &quot;用位运算符来小数取整&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.14</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 3</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.14</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // -3</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.14</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 3 </span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.14</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 3</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.14</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 3</span></span></code></pre></div><h3 id="用-运算符判断一个数的奇偶" tabindex="-1">用&amp;运算符判断一个数的奇偶 <a class="header-anchor" href="#用-运算符判断一个数的奇偶" aria-label="Permalink to &quot;用&amp;运算符判断一个数的奇偶&quot;">​</a></h3><p>n &amp; 1 如果值为0，n是偶数；值为1，n为奇数</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 1</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 0</span></span></code></pre></div><h3 id="生成一个随机颜色值" tabindex="-1">生成一个随机颜色值 <a class="header-anchor" href="#生成一个随机颜色值" aria-label="Permalink to &quot;生成一个随机颜色值&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>',22)]))}const g=i(h,[["render",l]]);export{c as __pageData,g as default};