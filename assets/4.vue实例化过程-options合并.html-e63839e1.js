import{_ as n,o as s,c as a,f as t}from"./app-e12fe570.js";const e={},i=t(`<h1 id="vue实例化过程-options合并" tabindex="-1"><a class="header-anchor" href="#vue实例化过程-options合并" aria-hidden="true">#</a> vue实例化过程-options合并</h1><div class="language-plantuml line-numbers-mode" data-ext="plantuml"><pre class="language-plantuml"><code>
<span class="token delimiter punctuation">@startuml</span>

partition <span class="token string">&quot;/core/instance/index&quot;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">:</span>mergeOptions<span class="token punctuation">(</span>
    resolveConstructorOptions<span class="token punctuation">(</span>vm.constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
    options || <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vm
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

partition <span class="token string">&quot;/core/global-api/index.js&quot;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">:</span>extend<span class="token punctuation">(</span>Vue<span class="token arrow operator">.o</span>ptions.components<span class="token punctuation">,</span> builtInComponents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

partition <span class="token string">&quot;/platforms/web/runtime/index.js&quot;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">:</span>extend<span class="token punctuation">(</span>Vue<span class="token arrow operator">.o</span>ptions.directives<span class="token punctuation">,</span> platformDirectives<span class="token punctuation">)</span>
    extend<span class="token punctuation">(</span>Vue<span class="token arrow operator">.o</span>ptions.components<span class="token punctuation">,</span> platformComponents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

partition <span class="token string">&quot;/core/util/options.js&quot;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">:</span>mergeOptions <span class="token punctuation">(</span>parent<span class="token punctuation">:</span> Object<span class="token punctuation">,</span>child<span class="token punctuation">:</span> Object<span class="token punctuation">,</span>vm?<span class="token punctuation">:</span> Component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">:</span>mergeField<span class="token punctuation">;</span>
    <span class="token punctuation">:</span>
    合并的策略strats
    ----
    props<span class="token punctuation">,</span>methods<span class="token punctuation">,</span>inject<span class="token punctuation">,</span>computed -- 独立匿名函数
    <span class="token punctuation">...</span>.
    lifecycle<span class="token punctuation">(</span>activated<span class="token punctuation">,</span>beforeCreate<span class="token punctuation">...</span><span class="token punctuation">)</span> -- mergeHook
    <span class="token punctuation">...</span>.
    components<span class="token punctuation">,</span>filters<span class="token punctuation">,</span>directives -- mergeAssets
    <span class="token punctuation">...</span>.
    data -- mergeDataOrFn
    <span class="token punctuation">...</span>.
    provide -- 独立匿名函数
    <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token delimiter punctuation">@enduml</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点</p><ul><li>hooks 合并同时保存了父子实现，先执行父级的hook,在执行自己的hook</li><li>一般的options，父子的都会保留，如果同名子级覆盖父级</li></ul>`,4),p=[i];function o(c,u){return s(),a("div",null,p)}const d=n(e,[["render",o],["__file","4.vue实例化过程-options合并.html.vue"]]);export{d as default};
