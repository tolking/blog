import{_ as e,c as a,o as s,g as n}from"./chunks/framework.OjRHjQ2q.js";const u=JSON.parse('{"title":"开发 vue 组件库代码提示生成工具的总结","description":"components-helper 是一个通过解析 markdown 文档为 vue 组件库生成代码提示的工具","frontmatter":{"title":"开发 vue 组件库代码提示生成工具的总结","display":"home","description":"components-helper 是一个通过解析 markdown 文档为 vue 组件库生成代码提示的工具","image":"https://picsum.photos/536/354?random&date=2021-05-05","date":"2021-05-05T00:00:00.000Z","vssue-title":"components-helper-summary","tags":["vue"],"categories":["summary"]},"headers":[],"relativePath":"posts/components-helper.md","filePath":"posts/components-helper.md","lastUpdated":1704029564000}'),i={name:"posts/components-helper.md"},t=n(`<p>之前基于 <a href="https://element-plus.org/" target="_blank" rel="noreferrer">element-plus</a> 开发了组件库 <a href="/lib/element-pro-components">element-pro-components</a>。但为了更好的用于实际开发中需要提供代码提示文件用于更好的代码提示。</p><p>由于 <code>element-plus</code> 当时并没有代码提示文件(或者说是同 <code>element-ui</code> 一样的代码提示文件)，所以在编写 <code>element-pro-components</code> 的代码提示文件前，我为 <code>element-plus</code> 编写了代码提示文件。在编写的过程中我逐渐发现要单独维护代码提示文件将会是相当困难的事情，后来我就逐渐尝试通过各种方式生成代码提示文件，最后选择通过文档生成代码提示文件，这样更加适用于 <code>element-plus</code>。</p><h2 id="整体理念" tabindex="-1">整体理念 <a class="header-anchor" href="#整体理念" aria-label="Permalink to &quot;整体理念&quot;">​</a></h2><ul><li>通过 <code>markdown</code> 文档生成代码提示文件</li><li>同时适用单文档生成单组件及多组件的情况</li><li>组件名可以被改写</li><li>属性值可以被改写</li></ul><h2 id="整体流程" tabindex="-1">整体流程 <a class="header-anchor" href="#整体流程" aria-label="Permalink to &quot;整体流程&quot;">​</a></h2><h3 id="读取文件" tabindex="-1">读取文件 <a class="header-anchor" href="#读取文件" aria-label="Permalink to &quot;读取文件&quot;">​</a></h3><p>借助于 <a href="https://github.com/mrmlnc/fast-glob#pattern-syntax" target="_blank" rel="noreferrer">fast-glob</a> 生成需要读取的文件地址，通过 nodejs 获取文档文件</p><h3 id="解析文件" tabindex="-1">解析文件 <a class="header-anchor" href="#解析文件" aria-label="Permalink to &quot;解析文件&quot;">​</a></h3><p>由于需要解析的文档的格式类似于</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## componets-name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Attributes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Name | ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|----- |...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Attributes | ...</span></span></code></pre></div><p>借助 <code>string.match</code> 通过正则就可以匹配文档中符合格式的内容。同时由于正则携带修饰符 <code>g</code> 时将匹配文档中全部符合要求内容，而不携带修饰符 <code>g</code> 时将解析正则中括号包含内容的这种特殊性。我将 <code>titleRegExp</code> <code>tableRegExp</code> 设计成正则字符串，通过四次正则匹配解析文档内容生成相关文档数据</p><h3 id="转化数据" tabindex="-1">转化数据 <a class="header-anchor" href="#转化数据" aria-label="Permalink to &quot;转化数据&quot;">​</a></h3><p>转化数据内容，准备用于生成代码提示文件</p><h3 id="生成代码提示文件" tabindex="-1">生成代码提示文件 <a class="header-anchor" href="#生成代码提示文件" aria-label="Permalink to &quot;生成代码提示文件&quot;">​</a></h3><p>根据 <code>vetur</code> <code>webstorm</code> 的代码提示格式要求，通过转化后的数据生成相关信息</p><h3 id="导出代码提示文件" tabindex="-1">导出代码提示文件 <a class="header-anchor" href="#导出代码提示文件" aria-label="Permalink to &quot;导出代码提示文件&quot;">​</a></h3><p>通过 nodejs 导出 json 格式的代码提示文件</p><h2 id="兼容性处理" tabindex="-1">兼容性处理 <a class="header-anchor" href="#兼容性处理" aria-label="Permalink to &quot;兼容性处理&quot;">​</a></h2><ol><li>windows 的 <code>\\\\</code> 路径</li></ol><p>手动将路径转化为 <code>/</code></p><ol start="2"><li>windows 的 <code>\\r\\n</code> 换行符</li></ol><p>手动在解析文档前将换行符转化为 <code>\\n</code></p><ol start="3"><li>table column 的兼容</li></ol><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| x | xxx | xx |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|x|xxx|xx|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x | xxx | xx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x|xxx|xx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|||</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|x\\|xx|xxx|xx\\|x|</span></span></code></pre></div><p>由于上面的情况都说可以生成表格列的格式，所以无法直接通过 <code>split(&#39;|&#39;)</code> 来分割。需要在分割前通过正则统一格式，并用正则格式进行分割</p>`,25),l=[t];function o(p,c,d,r,h,m){return s(),a("div",null,l)}const x=e(i,[["render",o]]);export{u as __pageData,x as default};
