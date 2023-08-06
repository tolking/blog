import{_ as s,v as n,b as a,R as l}from"./chunks/framework.0e3a4111.js";const A=JSON.parse('{"title":"nuxt 踩坑记录","description":"为了实现更好的 seo，不得不考虑将之前的 vue 单页面程序托到服务器上渲染​，看了官方的 ssr 和 nuxt，最后选择通过 nuxt 实现","frontmatter":{"title":"nuxt 踩坑记录","description":"为了实现更好的 seo，不得不考虑将之前的 vue 单页面程序托到服务器上渲染​，看了官方的 ssr 和 nuxt，最后选择通过 nuxt 实现","image":"https://picsum.photos/536/354?random&date=2018-11-08","date":"2018-11-08T00:00:00.000Z","vssue-title":"nuxt","tags":["vue","nuxt"],"categories":["summary"]},"headers":[],"relativePath":"posts/nuxt.md","filePath":"posts/nuxt.md","lastUpdated":1691317087000}'),p={name:"posts/nuxt.md"},o=l(`<p>为了实现更好的 seo，不得不考虑将之前的 vue 单页面程序托到服务器上渲染​，看了官方的 ssr 和 nuxt，最后选择通过 nuxt 实现。 下面分享一些我在构建过程中踩的坑</p><ol><li>通过设置 nuxt.cinfig.js 里面的 webpack riuke 实现 vue 里面的 style lang=“postcss” 高亮且不报错</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">extend</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rules</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">postcss</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      use</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-style-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">postcss-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="2"><li><p>在 nuxt.config.js 里面的全局 css，不建议直接在入口文件里面写 postcss，建议通过 @ 引入 postcss，虽然所有的样式都会经过 postcss-loader 处理，但我就遇到过没有被编译的 css 变量（或许是我改了 webpack 的原因）</p></li><li><p>动态路由的 name</p></li></ol><ul><li>name 是由文件夹名 + -id 组成的，如果文件夹还有父级，还需要将父级文件夹名加上，直到 page</li></ul><ol start="4"><li>由于是后端渲染，所以没有 Window 对象，需要注意。很多方法无法使用，插件是一样，需要寻找支持 ssr 的插件。或者在 created 后调用。</li><li>对于需要通过 import 引入的插件，会报错误 window or document undefined 需要先在 plugins 目录下新建 js 文件引入资源。然后再 nuxt.config.js 中引入并设置 ssr: false，再通过 process.client 判断后由 require 引入</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 改为</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">client) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">test</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="6"><li><p>asyncData 与 fetch 仅对 page 里面的页面生效</p></li><li><p>使用 head 渲染页面标签 script 时，标签内的 innerHTML 内容会转换，这是由于 nuxt 使用的 vue-meta 产生的，是一种保护措施，需要加入 __dangerouslyDisableSanitizers 防止编译（不是特殊情况不推荐这么做）</p></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  script: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">innerHTML</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">console.log(&quot;ok?&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  __dangerouslyDisableSanitizers: [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span></code></pre></div><ol start="8"><li>正确引入搜索引擎的认证<code>meta</code>标签</li></ol><ul><li>在根目录建立 <code>app.html</code></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">{{</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">HTML_ATTRS</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">}}</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ HEAD }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">{{</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">BODY_ATTRS</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">}}</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ APP }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,12),t=[o];function e(c,r,D,F,y,i){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{A as __pageData,u as default};
