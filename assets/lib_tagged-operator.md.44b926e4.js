import{_ as s,o as a,c as l,x as n}from"./chunks/framework.f6ec665f.js";const C=JSON.parse('{"title":"tagged-operator","description":"tagged-operator 是一个通过带标签的模板字符串模拟实现操作符重载的功能的库","frontmatter":{"title":"tagged-operator","description":"tagged-operator 是一个通过带标签的模板字符串模拟实现操作符重载的功能的库","image":"https://picsum.photos/536/354?random&date=2022-05-01","date":"2022-05-01T00:00:00.000Z","vssue-title":"tagged-operator","tags":["operator"],"categories":["project"]},"headers":[],"relativePath":"lib/tagged-operator.md","filePath":"lib/tagged-operator.md","lastUpdated":1692967289000}'),p={name:"lib/tagged-operator.md"},o=n(`<p>tagged-operator 是一个通过带标签的模板字符串模拟实现操作符重载的功能的库</p><h2 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;">​</a></h2><p>JavaScript 本身目前并不支持操作符重载这种功能，很多时候如果需要处理不是数字的话很麻烦。或许你会封装成函数处理，但类似这样的代码却不是很直观。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">div</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sub</span><span style="color:#A6ACCD;">(c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(d</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mul</span><span style="color:#A6ACCD;">(e</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> f))))</span></span></code></pre></div><p>如果支持操作符重载能够像下面这样多好</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> (c </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> (d </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> e </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> f))</span></span></code></pre></div><h2 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;">​</a></h2><ol><li><p>当然可以通过 Babel 插件在编译时修改源码实现，npm 中也存在一些这样的插件，但这样的代码仅能够在编译后运行。而且这样的代码在 TypeScript 中会直接报错。</p></li><li><p>后来我就想到可以通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals#%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%9A%84%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank" rel="noreferrer">带标签的模板字符串</a> 来模拟实现。</p></li></ol><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> calc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">strings</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">strings</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// [&#39;&#39;, &#39; + &#39;, &#39;&#39;]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// [a, b]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> + </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}\`</span></span></code></pre></div><p>带标签的模板字符串其实将模版字符串拆分传递给了一个函数，这时就可以用函数解析模板字符串内容。</p><p>第一个参数包含一个字符串值的数组，其余的参数与表达式相关。这样只需遍历 <code>strings</code> 找到对应位置上的操作符、参数，将数据进行对应处理就完成了。</p><p>一个简单的字符串例子</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">strings</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">all</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">repeat</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">repeat</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replaceAll</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">all</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">all</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">all</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">\`\${&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;}</span><span style="color:#C3E88D;"> + </span><span style="color:#89DDFF;">\${&#39;</span><span style="color:#C3E88D;"> world!</span><span style="color:#89DDFF;">&#39;}\`</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Hello world!</span></span></code></pre></div><p>当然上面例子仅仅是按照顺序计算的。但按照习惯，操作符或许还应该具有一定的优先级，而且还要实现分组操作符等功能</p><h2 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h2><ol><li>这种方式相比调用函数看起来会更直观些</li><li>这里操作符其实就是普通字符串，理论上可以用任何符号、文字等作为操作符</li><li>原生支持，而且理论上经过 Babel 编译最低可以运行在 ES2015 以上</li><li>支持在 TypeScript 中使用，能够进行统一的类型限制</li></ol><h2 id="劣势" tabindex="-1">劣势 <a class="header-anchor" href="#劣势" aria-label="Permalink to &quot;劣势&quot;">​</a></h2><ol><li>第一见这种代码可能比较难以理解，如果滥用一些奇怪的符号可能更加让人摸不到头脑</li><li>写法依旧有些笨重</li><li>类型支持不能像封装成函数那样限制每个参数类型，仅能够统一每个参数类型</li></ol><p><a href="https://github.com/tolking/tagged-operator" target="_blank" rel="noreferrer">源码</a></p>`,20),e=[o];function t(c,r,y,F,D,A){return a(),l("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};