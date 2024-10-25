import{_ as a,c as n,a0 as l,a as s,z as t,o as e}from"./chunks/framework.C1tv1HY1.js";const c=JSON.parse('{"title":"Vue中的自定义指令","description":"Vue中的自定义指令，对普通 DOM 元素进行底层操作","frontmatter":{"title":"Vue中的自定义指令","description":"Vue中的自定义指令，对普通 DOM 元素进行底层操作","image":"https://picsum.photos/536/354?random&date=2019-05-17","date":"2019-05-17T00:00:00.000Z","vssue-title":"vue-directive","tags":["vue"],"categories":["learn"]},"headers":[],"relativePath":"posts/vue-directive.md","filePath":"posts/vue-directive.md","lastUpdated":1729819822000}'),h={name:"posts/vue-directive.md"};function p(k,i,d,E,r,o){return e(),n("div",null,i[0]||(i[0]=[l(`<p>在 <code>Vue</code> 中自定义自定义指令，对普通 DOM 元素进行底层操作</p><h2 id="定义自定义指令" tabindex="-1">定义自定义指令 <a class="header-anchor" href="#定义自定义指令" aria-label="Permalink to &quot;定义自定义指令&quot;">​</a></h2><p>全局自定义指令 <code>src-&gt; main.js</code> (在创建 Vue 实例之前)</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> roles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;del&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">directive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;action&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binding</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">roles.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arg) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (el.style.display </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>在一个组件的选项中定义本地的自定义指令</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">directives</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (el, binding) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binding</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">roles.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arg) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (el.style.display </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用自定义指令" tabindex="-1">使用自定义指令 <a class="header-anchor" href="#使用自定义指令" aria-label="Permalink to &quot;使用自定义指令&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;add&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;del&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;put&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>仅显示 <code>add</code> 与 <code>del</code></p><h2 id="钩子函数" tabindex="-1">钩子函数 <a class="header-anchor" href="#钩子函数" aria-label="Permalink to &quot;钩子函数&quot;">​</a></h2><p>一个指令定义对象可以提供如下几个钩子函数 (均为可选)：</p><ul><li>bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置</li><li>inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)</li><li>update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新</li><li>componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用</li><li>unbind：只调用一次，指令与元素解绑时调用</li></ul><h2 id="钩子函数参数" tabindex="-1">钩子函数参数 <a class="header-anchor" href="#钩子函数参数" aria-label="Permalink to &quot;钩子函数参数&quot;">​</a></h2>`,13),s("ul",null,[s("li",null,"el：指令所绑定的元素，可以用来直接操作 DOM"),s("li",null,[t("binding：一个对象，包含以下属性： "),s("ul",null,[s("li",null,"name：指令名，不包括 v- 前缀"),s("li",null,'value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2'),s("li",null,"oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用"),s("li",null,'expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"'),s("li",null,'arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"'),s("li",{"foo:":"","true,":"","bar:":"",true:""},"modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为")])]),s("li",null,"vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情"),s("li",null,"oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用")],-1),s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"提示"),s("p",null,[s("strong",null,"除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行")])],-1)]))}const y=a(h,[["render",p]]);export{c as __pageData,y as default};