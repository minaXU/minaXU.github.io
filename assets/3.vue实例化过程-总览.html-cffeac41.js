import{_ as n,o as s,c as a,f as e}from"./app-e12fe570.js";const t={},i=e(`<h1 id="vue实例化" tabindex="-1"><a class="header-anchor" href="#vue实例化" aria-hidden="true">#</a> vue实例化</h1><div class="language-plantuml line-numbers-mode" data-ext="plantuml"><pre class="language-plantuml"><code>
<span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">start</span>
partition <span class="token string">&quot;/core/instance/index&quot;</span> <span class="token punctuation">{</span>
<span class="token punctuation">:</span>initMixin<span class="token punctuation">;</span>
<span class="token keyword">note</span>
设置<span class="token variable">$_init</span>
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>stateMixin<span class="token punctuation">;</span>
<span class="token keyword">note</span>
设置<span class="token variable">$data</span><span class="token punctuation">,</span><span class="token variable">$props</span><span class="token punctuation">,</span><span class="token variable">$set</span><span class="token punctuation">,</span><span class="token variable">$delete</span><span class="token punctuation">,</span><span class="token variable">$watch</span>
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>eventsMixin<span class="token punctuation">;</span>
<span class="token keyword">note</span>
设置<span class="token variable">$emit</span><span class="token punctuation">,</span><span class="token variable">$off</span><span class="token punctuation">,</span><span class="token variable">$once</span><span class="token punctuation">,</span><span class="token variable">$on</span>
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>lifecycleMixin<span class="token punctuation">;</span>
<span class="token keyword">note</span>
设置_update<span class="token punctuation">,</span><span class="token variable">$destroy</span><span class="token punctuation">,</span><span class="token variable">$forceUpdate</span>
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>renderMixin<span class="token punctuation">;</span>
<span class="token keyword">note</span>
设置<span class="token variable">$nextTick</span><span class="token punctuation">,</span>_render
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>exec _init<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
partition <span class="token string">&quot;/core/instance/init&quot;</span> <span class="token punctuation">{</span>
<span class="token punctuation">:</span>mergeOptions<span class="token punctuation">;</span>
<span class="token punctuation">:</span>initLifecycle<span class="token punctuation">;</span>
<span class="token keyword">note</span>
设置<span class="token variable">$parent</span>、<span class="token variable">$root</span>、<span class="token variable">$children</span>、<span class="token variable">$refs</span>
设置 _isMounted，_inactive，_isDestroyed
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>initEvents<span class="token punctuation">;</span>
<span class="token keyword">note</span>
处理接收事件
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>initRender<span class="token punctuation">;</span>
<span class="token keyword">note</span>
设置 <span class="token variable">$slots</span><span class="token punctuation">,</span><span class="token variable">$scopedSlots</span><span class="token punctuation">,</span><span class="token variable">$createElement</span>
设置 <span class="token variable">$listeners</span><span class="token punctuation">,</span><span class="token variable">$attrs</span> 响应性
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>callHook<span class="token punctuation">(</span>vm<span class="token punctuation">,</span> &#39;beforeCreate&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">:</span>initInjections<span class="token punctuation">;</span>
<span class="token punctuation">:</span>initState<span class="token punctuation">;</span>
<span class="token keyword">note</span>
data<span class="token punctuation">,</span>props<span class="token punctuation">,</span>watch<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>method
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>initProvide<span class="token punctuation">;</span>
<span class="token punctuation">:</span>callHook<span class="token punctuation">(</span>vm<span class="token punctuation">,</span> &#39;created&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">note</span>
至此完成所有数据加载
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>vm.<span class="token variable">$mount</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
partition <span class="token string">&quot;/core/instance/lifecycle&quot;</span> <span class="token punctuation">{</span>
<span class="token punctuation">:</span>mountComponent<span class="token punctuation">;</span>
<span class="token punctuation">:</span>vm.<span class="token variable">$el</span> = el<span class="token punctuation">;</span>
<span class="token keyword">note</span>
建立联系
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>callHook<span class="token punctuation">(</span>vm<span class="token punctuation">,</span> &#39;beforeMount&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">:</span>vm._update<span class="token punctuation">(</span>vm._render<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">note</span>
插入虚拟DOM
<span class="token keyword">end note</span>
<span class="token punctuation">:</span>callHook<span class="token punctuation">(</span>vm<span class="token punctuation">,</span> &#39;mounted&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token delimiter punctuation">@enduml</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","3.vue实例化过程-总览.html.vue"]]);export{d as default};
