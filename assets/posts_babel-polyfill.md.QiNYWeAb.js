import{_ as s,c as i,o as a,g as l}from"./chunks/framework.OjRHjQ2q.js";const b=JSON.parse('{"title":"babel-polyfill的引用和使用","description":"使用babel-polyfill来解决一些低版本的浏览器对es6新语法的不支持","frontmatter":{"title":"babel-polyfill的引用和使用","description":"使用babel-polyfill来解决一些低版本的浏览器对es6新语法的不支持","image":"https://picsum.photos/536/354?random&date=2017-11-15","date":"2017-11-15T00:00:00.000Z","vssue-title":"babel-polyfill","tags":["js"],"categories":["summary"]},"headers":[],"relativePath":"posts/babel-polyfill.md","filePath":"posts/babel-polyfill.md","lastUpdated":1704029564000}'),e={name:"posts/babel-polyfill.md"},n=l(`<p>使用 <code>babel-polyfill</code> 来解决一些低版本的浏览器对es6新语法的不支持</p><ol><li>引入 babel-polyfill</li></ol><ul><li>对于通过vue-cli 2.X 构建的项目(其他同理)</li><li>引入babel-polyfill到你的项目中</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> babel-polyfill</span></span></code></pre></div><ul><li>在你的入口文件main.js中引入babel-polyfill</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// src -&gt; main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;babel-polyfill&#39;</span></span></code></pre></div><ul><li>修改webpack的配置文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// build -&gt; webpack.base.conf.js</span></span>
<span class="line"><span>entry: {</span></span>
<span class="line"><span>  // app: &#39;./src/main.js&#39;</span></span>
<span class="line"><span>  app: [&#39;babel-polyfill&#39;, &#39;./src/main.js&#39;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>测试你的项目，如果低版本浏览器能够打开就不用继续下面步骤。如果编译错误，可以测试下面方法</li></ol><ul><li>继续修改配置文件</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// build -&gt; webpack.base.conf.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   test: /\\.js$/,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   include: [resolve(&#39;src&#39;), resolve(&#39;test&#39;)]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    use: [{ loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;babel-loader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, options: { cacheDirectory: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    exclude:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">node_modules(?!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">webpack-dev-server)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><ul><li>将webpack-dev-server的版本回退到2.7.1</li><li>先卸载webpack-dev-server</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack-dev-server</span></span></code></pre></div><ul><li>在安装指定版本的webpack-dev-server</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack-dev-server@2.7.1</span></span></code></pre></div>`,15),p=[n];function t(h,k,d,o,c,r){return a(),i("div",null,p)}const y=s(e,[["render",t]]);export{b as __pageData,y as default};
