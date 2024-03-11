import{_ as e,o as t,c as p,f as a,a as n,b as s}from"./app-e12fe570.js";const o={},i=a(`<h1 id="主线脉络" tabindex="-1"><a class="header-anchor" href="#主线脉络" aria-hidden="true">#</a> 主线脉络</h1><div class="language-plantuml line-numbers-mode" data-ext="plantuml"><pre class="language-plantuml"><code>
<span class="token delimiter punctuation">@startuml</span>

top to bottom direction

<span class="token keyword">file</span> <span class="token string">&quot;platforms/web/runtime-with-compiler&quot;</span> <span class="token color symbol">#aqua</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> card <span class="token punctuation">[</span>
<span class="token text string">        + options.render
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token keyword">file</span> <span class="token string">&quot;platforms/web/runtime/index&quot;</span> <span class="token color symbol">#aqua</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> card2 <span class="token punctuation">[</span>
<span class="token text string">        + Vue.prototype.$mount
        ----
        + Vue.prototype.~__patch__
        ----
        Diff 算法
        ....
        虚拟DOM
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/instance/lifecycle&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> card3 <span class="token punctuation">[</span>
<span class="token text string">        initLifecycle
        ----
        lifecycleMixin
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;platforms/web/compiler/index&quot;</span> <span class="token color symbol">#aqua</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> compiler <span class="token punctuation">[</span>
<span class="token text string">        生成 compileToFunctions
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;compiler/index&quot;</span> <span class="token color symbol">#aqua</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> compiler_index <span class="token punctuation">[</span>
<span class="token text string">        createCompilerCreator
        ----
        生成 render
        ....
        生成 staticRenderFns
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;compiler/parser/index&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> parser <span class="token punctuation">[</span>
<span class="token text string">        parse
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;compiler/optimizer&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> optimizer <span class="token punctuation">[</span>
<span class="token text string">        optimizer
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;compiler/codegen/index&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> codegen <span class="token punctuation">[</span>
<span class="token text string">        codegen
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/index&quot;</span>  <span class="token color symbol">#aqua</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> card4 <span class="token punctuation">[</span>
<span class="token text string">        引入Vue
        ----
        执行 initGlobalAPI
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/global-api/index&quot;</span> <span class="token color symbol">#aqua</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> global_api <span class="token punctuation">[</span>
<span class="token text string">        initGlobalAPI
        ----
        + Vue.use
        ....
        + Vue.mixin
        ....
       + Vue.extend
       ....
       ...
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/components/index&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> components <span class="token punctuation">[</span>
<span class="token text string">        builtInComponents
        ----
        keepalive
        ....
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/instance/index&quot;</span> <span class="token color symbol">#aqua</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> instance <span class="token punctuation">[</span>
<span class="token text string">        init Vue实例
        ----
        initMixin(vm)(执行vm初始化方法，调用hooks)
        ....
        stateMixin($set,$watch,$data,$props)
        ....
        eventsMixin($on,$off)
        ....
        lifecycleMixin($forceUpdate,$destroy)
        ....
        ...
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/instance/state&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> instance_state <span class="token punctuation">[</span>
<span class="token text string">        init props
        ----
        init data
        ----
        init computed
        ----
        init watch
        ----
        init method
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/instance/render&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> instance_render <span class="token punctuation">[</span>
<span class="token text string">        init render
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/vdom&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> vdom <span class="token punctuation">[</span>
<span class="token text string">        createElement
        ----
        VNode
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">file</span> <span class="token string">&quot;core/observer/index&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">card</span> observer <span class="token punctuation">[</span>
<span class="token text string">        Dep
        ----
        Watcher
        ----
        Observer
    </span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token string">&quot;platforms/web/runtime-with-compiler&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;platforms/web/runtime/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;platforms/web/runtime/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/instance/lifecycle&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;platforms/web/runtime-with-compiler&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;platforms/web/compiler/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;platforms/web/compiler/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;compiler/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;platforms/web/runtime/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;core/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/instance/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;core/instance/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/instance/state&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;core/instance/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/instance/render&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;core/instance/render&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/vdom&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;core/instance/state&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/observer/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;core/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/global-api/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;core/global-api/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;core/components/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;compiler/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;compiler/parser/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;compiler/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;compiler/optimizer&quot;</span> <span class="token punctuation">:</span> import
<span class="token string">&quot;compiler/index&quot;</span> <span class="token arrow operator">--&gt;</span> <span class="token string">&quot;compiler/codegen/index&quot;</span> <span class="token punctuation">:</span> import
<span class="token delimiter punctuation">@enduml</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/src/platforms/web/runtime-with-compiler.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;core/config&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> warn<span class="token punctuation">,</span> cached <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/util/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mark<span class="token punctuation">,</span> measure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/util/perf&#39;</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;./runtime/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./util/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compileToFunctions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./compiler/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  shouldDecodeNewlines<span class="token punctuation">,</span>
  shouldDecodeNewlinesForHref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./util/compat&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;types/component&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> GlobalAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;types/global-api&#39;</span>

<span class="token comment">// 带缓存的 querySelector，返回内部的html字符串</span>
<span class="token keyword">const</span> idToTemplate <span class="token operator">=</span> <span class="token function">cached</span><span class="token punctuation">(</span><span class="token parameter">id</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token keyword">return</span> el <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>innerHTML
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;runtime-with-compiler.ts-----1&#39;</span><span class="token punctuation">,</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$mount<span class="token punctuation">)</span>
<span class="token keyword">const</span> mount <span class="token operator">=</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$mount
<span class="token comment">// 这一步是为了给实例加上render函数，core 模块中的 mountComponent 方法会调用实例的 render 函数生成虚拟节点</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  el<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Element<span class="token punctuation">,</span> <span class="token comment">// 挂载的目标元素，例如 #app</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// 服务端渲染相关的，客户端补水</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>

  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token operator">===</span> document<span class="token punctuation">.</span>body <span class="token operator">||</span> el <span class="token operator">===</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    __DEV__ <span class="token operator">&amp;&amp;</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Do not mount Vue to &lt;html&gt; or &lt;body&gt; - mount to normal elements instead.</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;runtime-with-compiler.ts-----2&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token comment">// resolve template/el and convert to render function</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> template <span class="token operator">=</span> options<span class="token punctuation">.</span>template
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> template <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          template <span class="token operator">=</span> <span class="token function">idToTemplate</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;runtime-with-compiler.ts-----3&#39;</span><span class="token punctuation">,</span> template<span class="token punctuation">)</span>
          <span class="token comment">/* istanbul ignore if */</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn</span><span class="token punctuation">(</span>
              <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Template element not found or is empty: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>options<span class="token punctuation">.</span>template<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
              <span class="token keyword">this</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        template <span class="token operator">=</span> template<span class="token punctuation">.</span>innerHTML
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;invalid template option:&#39;</span> <span class="token operator">+</span> template<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-expect-error</span>
      template <span class="token operator">=</span> <span class="token function">getOuterHTML</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token comment">// 获取元素的 outerHTML,html字符串</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;runtime-with-compiler.ts-----4&#39;</span><span class="token punctuation">,</span> template<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;compile&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// compileToFunctions 会将 template 编译成 render 函数</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> staticRenderFns <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">compileToFunctions</span><span class="token punctuation">(</span>
        template<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">outputSourceRange</span><span class="token operator">:</span> __DEV__<span class="token punctuation">,</span>
          shouldDecodeNewlines<span class="token punctuation">,</span>
          shouldDecodeNewlinesForHref<span class="token punctuation">,</span>
          <span class="token literal-property property">delimiters</span><span class="token operator">:</span> options<span class="token punctuation">.</span>delimiters<span class="token punctuation">,</span>
          <span class="token literal-property property">comments</span><span class="token operator">:</span> options<span class="token punctuation">.</span>comments
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">this</span>
      <span class="token punctuation">)</span>
      options<span class="token punctuation">.</span>render <span class="token operator">=</span> render
      <span class="token comment">// 静态渲染函数,不会变动的部分</span>
      options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> staticRenderFns
      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;compile end&#39;</span><span class="token punctuation">)</span>
        <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> compile</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;compile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;compile end&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">mount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */</span>
<span class="token keyword">function</span> <span class="token function">getOuterHTML</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">el</span><span class="token operator">:</span> Element</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>outerHTML<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> el<span class="token punctuation">.</span>outerHTML
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> container<span class="token punctuation">.</span>innerHTML
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span>compile <span class="token operator">=</span> compileToFunctions

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue <span class="token keyword">as</span> GlobalAPI

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>platforms/web/runtime/index</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;core/index&#39;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;core/config&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> extend<span class="token punctuation">,</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mountComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/instance/lifecycle&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> devtools<span class="token punctuation">,</span> inBrowser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/util/index&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  query<span class="token punctuation">,</span>
  mustUseProp<span class="token punctuation">,</span>
  isReservedTag<span class="token punctuation">,</span>
  isReservedAttr<span class="token punctuation">,</span>
  getTagNamespace<span class="token punctuation">,</span>
  isUnknownElement
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;web/util/index&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./patch&#39;</span>
<span class="token keyword">import</span> platformDirectives <span class="token keyword">from</span> <span class="token string">&#39;./directives/index&#39;</span>
<span class="token keyword">import</span> platformComponents <span class="token keyword">from</span> <span class="token string">&#39;./components/index&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;types/component&#39;</span>

<span class="token comment">// install platform specific utils</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>mustUseProp <span class="token operator">=</span> mustUseProp <span class="token comment">// 属性设置了必须用，例如option 的 selected 属性</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>isReservedTag <span class="token operator">=</span> isReservedTag <span class="token comment">// 是否保留字</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>isReservedAttr <span class="token operator">=</span> isReservedAttr
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>getTagNamespace <span class="token operator">=</span> getTagNamespace
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>isUnknownElement <span class="token operator">=</span> isUnknownElement <span class="token comment">// 是否未知元素</span>

<span class="token comment">// install platform runtime directives &amp; components</span>
<span class="token comment">// 添加平台相关指令，例如 v-show</span>
<span class="token function">extend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>options<span class="token punctuation">.</span>directives<span class="token punctuation">,</span> platformDirectives<span class="token punctuation">)</span>
<span class="token comment">// 添加平台相关组件，例如 transition</span>
<span class="token function">extend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>options<span class="token punctuation">.</span>components<span class="token punctuation">,</span> platformComponents<span class="token punctuation">)</span>

<span class="token comment">// install platform patch function</span>
<span class="token comment">// 原型上添加平台相关的方法补丁，web端的方法 例如：虚拟dom创建、diff算法、DOM更新等</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__patch__ <span class="token operator">=</span> inBrowser <span class="token operator">?</span> patch <span class="token operator">:</span> noop

<span class="token comment">// public mount method</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> inBrowser <span class="token operator">?</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// devtools global hook</span>
<span class="token comment">/* istanbul ignore next */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>inBrowser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>devtools<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>devtools<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        devtools<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span> Vue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// @ts-expect-error</span>
        console<span class="token punctuation">[</span>console<span class="token punctuation">.</span>info <span class="token operator">?</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;log&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Download the Vue Devtools extension for a better development experience:\\n&#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;https://github.com/vuejs/vue-devtools&#39;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      __DEV__ <span class="token operator">&amp;&amp;</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">&amp;&amp;</span>
      config<span class="token punctuation">.</span>productionTip <span class="token operator">!==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span>
      <span class="token keyword">typeof</span> console <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-expect-error</span>
      console<span class="token punctuation">[</span>console<span class="token punctuation">.</span>info <span class="token operator">?</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;log&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">You are running Vue in development mode.\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Make sure to turn on production mode when deploying for production.\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">See more tips at https://vuejs.org/guide/deployment.html</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：补充了web的 指令、components方法、添加虚拟DOM相关的prototype.__patch__、初始化$mount</p><p>附带知识点：</p>`,8),c=n("ul",null,[n("li",null,[s("vue中，$xxx(例如"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"e"),n("mi",null,"m"),n("mi",null,"i"),n("mi",null,"t"),n("mo",{separator:"true"},",")]),n("annotation",{encoding:"application/x-tex"},"emit,")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"mi"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mpunct"},",")])])]),s("on) 都是公共的实例方法，__xx__(例如：__patch__)表示内部方法，外部不应该访问该方法")]),n("li",null,"Vue.xx 和 Vue.prototype.xx 区别，例如 Vue.delete、Vue.use 和 Vue.prototype.$emit、Vue.prototype.$forceUpdate,前者和实例无关，更多是提供一些全局的方法，放在Vue上更容易找到，后者是跟实例强相关的，实例可直接调用。"),n("li",null,"有些方法 例如 Vue.nextTick Vue.prototype.$nextTick 实例和全局都可能要用到，方便使用两个地方都挂了，实现是同一个实现")],-1),l=a(`<p>core/global-api/index</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;../config&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initUse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./use&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mixin&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initExtend <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./extend&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initAssetRegisters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./assets&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> set<span class="token punctuation">,</span> del <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../observer/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ASSET_TYPES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/constants&#39;</span>
<span class="token keyword">import</span> builtInComponents <span class="token keyword">from</span> <span class="token string">&#39;../components/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> observe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/observer/index&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  warn<span class="token punctuation">,</span>
  extend<span class="token punctuation">,</span>
  nextTick<span class="token punctuation">,</span>
  mergeOptions<span class="token punctuation">,</span>
  defineReactive
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> GlobalAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;types/global-api&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initGlobalAPI</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// config</span>
  <span class="token keyword">const</span> <span class="token literal-property property">configDef</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  configDef<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> config
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configDef<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Do not replace the Vue.config object, set individual fields instead.&#39;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>Vue<span class="token punctuation">,</span> <span class="token string">&#39;config&#39;</span><span class="token punctuation">,</span> configDef<span class="token punctuation">)</span>

  <span class="token comment">// exposed util methods.</span>
  <span class="token comment">// NOTE: these are not considered part of the public API - avoid relying on</span>
  <span class="token comment">// them unless you are aware of the risk.</span>
  Vue<span class="token punctuation">.</span>util <span class="token operator">=</span> <span class="token punctuation">{</span>
    warn<span class="token punctuation">,</span>
    extend<span class="token punctuation">,</span>
    mergeOptions<span class="token punctuation">,</span>
    defineReactive
  <span class="token punctuation">}</span>

  Vue<span class="token punctuation">.</span>set <span class="token operator">=</span> <span class="token keyword">set</span>
  Vue<span class="token punctuation">.</span>delete <span class="token operator">=</span> del
  Vue<span class="token punctuation">.</span>nextTick <span class="token operator">=</span> nextTick

  <span class="token comment">// 2.6 explicit observable API</span>
  Vue<span class="token punctuation">.</span>observable <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token constant">T</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> obj
  <span class="token punctuation">}</span>

  <span class="token comment">// 初始化 Vue.options 对象，并设置 Vue.options.components 为一个空对象</span>
  Vue<span class="token punctuation">.</span>options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">type</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// this is used to identify the &quot;base&quot; constructor to extend all plain-object</span>
  <span class="token comment">// components with in Weex&#39;s multi-instance scenarios.</span>
  Vue<span class="token punctuation">.</span>options<span class="token punctuation">.</span>_base <span class="token operator">=</span> Vue

  <span class="token function">extend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>options<span class="token punctuation">.</span>components<span class="token punctuation">,</span> builtInComponents<span class="token punctuation">)</span>

  <span class="token comment">// 注册 Vue.use() 方法</span>
  <span class="token function">initUse</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
  <span class="token comment">// 注册 Vue.mixin() 方法</span>
  <span class="token function">initMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
  <span class="token comment">// 注册 Vue.extend() 方法</span>
  <span class="token function">initExtend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
  <span class="token comment">// 注册 Vue.component()、Vue.directive()、Vue.filter() 方法</span>
  <span class="token function">initAssetRegisters</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：这个代码比较短，没有总结，直接看代码注释</p><h2 id="compiler-index" tabindex="-1"><a class="header-anchor" href="#compiler-index" aria-hidden="true">#</a> /compiler/index</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./parser/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> optimize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./optimizer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> generate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./codegen/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createCompilerCreator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./create-compiler&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CompilerOptions<span class="token punctuation">,</span> CompiledResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;types/compiler&#39;</span>

<span class="token comment">// \`createCompilerCreator\` allows creating compilers that use alternative</span>
<span class="token comment">// parser/optimizer/codegen, e.g the SSR optimizing compiler.</span>
<span class="token comment">// Here we just export a default compiler using the default parts.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> createCompiler <span class="token operator">=</span> <span class="token function">createCompilerCreator</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">baseCompile</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">template</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> CompilerOptions</span>
<span class="token punctuation">)</span><span class="token operator">:</span> CompiledResult <span class="token punctuation">{</span>
  <span class="token comment">// parse 会将 template 转换成 AST</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>optimize <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 优化抽象语法树,例如添加静态标记</span>
    <span class="token function">optimize</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 生成代码</span>
  <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">generate</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token comment">// 生成了抽象语法树，render函数，静态render函数</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    ast<span class="token punctuation">,</span>
    <span class="token literal-property property">render</span><span class="token operator">:</span> code<span class="token punctuation">.</span>render<span class="token punctuation">,</span>
    <span class="token literal-property property">staticRenderFns</span><span class="token operator">:</span> code<span class="token punctuation">.</span>staticRenderFns
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：主要是 parse 会将 template 转换成 AST、optimize 优化抽象语法树,例如添加静态标记、generate 生成代码</p><p>附带知识点：</p><ul><li>这里发现staticRenderFns总是[],研究了下，使用v-once或者节点是静态切包含静态children时会被标记staticRoot，此时 staticRenderFns 就有值了</li></ul>`,8),u=[i,c,l];function r(d,k){return t(),p("div",null,u)}const m=e(o,[["render",r],["__file","2.总览-主线脉络.html.vue"]]);export{m as default};
