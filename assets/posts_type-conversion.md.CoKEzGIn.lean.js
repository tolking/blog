import{_ as i,c as a,a0 as n,o as t}from"./chunks/framework.C1tv1HY1.js";const F=JSON.parse('{"title":"js中隐性类型转换","description":"只需要一点点时间学会使用js中隐性类型转换，更加轻松的处理部分类型","frontmatter":{"title":"js中隐性类型转换","description":"只需要一点点时间学会使用js中隐性类型转换，更加轻松的处理部分类型","image":"https://picsum.photos/536/354?random&date=2017-09-15","date":"2017-09-15T00:00:00.000Z","vssue-title":"type-conversion","tags":["js"],"categories":["summary"]},"headers":[],"relativePath":"posts/type-conversion.md","filePath":"posts/type-conversion.md","lastUpdated":1729775426000}'),h={name:"posts/type-conversion.md"};function l(e,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<p>只需要一点点时间学会使用js中隐性类型转换，更加轻松的处理部分类型</p><h2 id="在所有加减乘除等需要数字类型的地方-js会自动使用number构造函数对变量进行转换" tabindex="-1">在所有加减乘除等需要数字类型的地方，JS会自动使用Number构造函数对变量进行转换 <a class="header-anchor" href="#在所有加减乘除等需要数字类型的地方-js会自动使用number构造函数对变量进行转换" aria-label="Permalink to &quot;在所有加减乘除等需要数字类型的地方，JS会自动使用Number构造函数对变量进行转换&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // -1  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 12 (加号+比较特殊,其他类型和字符串相加都会转换成字符串)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 3 (两个&quot;+&quot;必须分开，+&#39;2&#39;是隐形转换将字符串&#39;2&#39;转换为数值2)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 0  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// NaN  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // NaN</span></span></code></pre></div><h2 id="字符串自动转换主要表现为字符串的拼接-字符串和其他类型用加号-拼接时-其他类型都自动转换为字符串" tabindex="-1">字符串自动转换主要表现为字符串的拼接，字符串和其他类型用加号(+)拼接时，其他类型都自动转换为字符串 <a class="header-anchor" href="#字符串自动转换主要表现为字符串的拼接-字符串和其他类型用加号-拼接时-其他类型都自动转换为字符串" aria-label="Permalink to &quot;字符串自动转换主要表现为字符串的拼接，字符串和其他类型用加号(+)拼接时，其他类型都自动转换为字符串&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 12  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 1a  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 11  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // anull  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 1undefined  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a[object Object]  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // atrue</span></span></code></pre></div><h2 id="当在任意需要布尔类型的地方-系统都会自动调用boolean-构造函数将值转换为boolean类型" tabindex="-1">当在任意需要布尔类型的地方，系统都会自动调用Boolean()构造函数将值转换为Boolean类型 <a class="header-anchor" href="#当在任意需要布尔类型的地方-系统都会自动调用boolean-构造函数将值转换为boolean类型" aria-label="Permalink to &quot;当在任意需要布尔类型的地方，系统都会自动调用Boolean()构造函数将值转换为Boolean类型&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>null、0、-0、+0、&#39;&#39;、undefined、NaN这些都会转换为false，其他的值都会转换为true</p></div>`,7)]))}const g=i(h,[["render",l]]);export{F as __pageData,g as default};
