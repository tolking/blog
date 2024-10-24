import{_ as i,c as a,a0 as e,o as n}from"./chunks/framework.C1tv1HY1.js";const o=JSON.parse('{"title":"如何优雅的注销 Service Worker","description":"基于 Service Worker 请求流程说明应该如何正确注销","frontmatter":{"title":"如何优雅的注销 Service Worker","display":"home","description":"基于 Service Worker 请求流程说明应该如何正确注销","image":"https://picsum.photos/1920/1080/?random&date=2022-09-27","date":"2022-09-27T00:00:00.000Z","vssue-title":"unregister-service-worker","tags":["service worker","pwa"],"categories":["summary"]},"headers":[],"relativePath":"posts/unregister-service-worker.md","filePath":"posts/unregister-service-worker.md","lastUpdated":1729775426000}'),r={name:"posts/unregister-service-worker.md"};function t(h,s,k,p,l,E){return n(),a("div",null,s[0]||(s[0]=[e(`<p>有时候我们不在需要 PWA 或者其它基于 Service Worker 的功能，那应该如何优雅的注销 Service Worker 呢？</p><h2 id="service-worker-如何工作" tabindex="-1">Service Worker 如何工作 <a class="header-anchor" href="#service-worker-如何工作" aria-label="Permalink to &quot;Service Worker 如何工作&quot;">​</a></h2><p>在了解如何注销 Service Worker 前，我们先大致了解下 Service Worker 如何工作</p><h3 id="初次安装" tabindex="-1">初次安装 <a class="header-anchor" href="#初次安装" aria-label="Permalink to &quot;初次安装&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;serviceWorker&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> navigator) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  navigator.serviceWorker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/sw.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在注册 Service Worker 文件后，开始将指定的一些静态资源进行离线缓存，然后 Service Worker 就会激活</p><h3 id="再次访问" tabindex="-1">再次访问 <a class="header-anchor" href="#再次访问" aria-label="Permalink to &quot;再次访问&quot;">​</a></h3><p>当再次访问时，所有的请求都会经过 Service Worker</p><p>这时候如果缓存命中，就直接返回缓存内容</p><p>如果缓存没有命中，则可以新建 fetch 请求加载相关内容</p><h3 id="service-worker-更新" tabindex="-1">Service Worker 更新 <a class="header-anchor" href="#service-worker-更新" aria-label="Permalink to &quot;Service Worker 更新&quot;">​</a></h3><p>如果浏览器检测到 Service Worker 存在更新，就会下载新的 Service Worker 文件，执行同初次安装的缓存激活等行为</p><h2 id="如何注销-service-worker" tabindex="-1">如何注销 Service Worker <a class="header-anchor" href="#如何注销-service-worker" aria-label="Permalink to &quot;如何注销 Service Worker&quot;">​</a></h2><p>ServiceWorkerRegistration 接口存在 <a href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/unregister" target="_blank" rel="noreferrer">unregister</a> 方法，用于取消对 Service Worker 的注册。</p><p>于是可以修改原本的注册</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;serviceWorker&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> navigator) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  navigator.serviceWorker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegistrations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">registrations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    registrations.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sw.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unregister</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>但这样不够完整，很有可能无法注销 Service Worker。</p><h3 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h3><p>虽然修改了注销代码，但是 Service Worker 可能没有更新。导致浏览器本地的缓存依然是旧版本，没有更新注销代码，所以可能无法注销 Service Worker。</p><h3 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><p>更新 Service Worker 文件，并清空缓存内容</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">self.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;activate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">waitUntil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    caches.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        t.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> caches.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">self.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">skipWaiting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>由于 Service Worker 文件存在更新，浏览器则会更新最新的 Service Worker 文件。在执行新 Service Worker 文件时，清空本地所有缓存。然后所有的请求都走服务器，所以就可以正常执行注销代码</p>`,23)]))}const g=i(r,[["render",t]]);export{o as __pageData,g as default};
