import{_ as a,r as d,o as l,c as r,a as e,b as n,d as i,f as t}from"./app-e12fe570.js";const o={},c=t(`<h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; npm init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建中的选项 都能用的上，全部选yes</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>✔ Project name: … <span class="token operator">&lt;</span>your-project-name<span class="token operator">&gt;</span>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router <span class="token keyword">for</span> Single Page Application development? … No / Yes
✔ Add Pinia <span class="token keyword">for</span> state management? … No / Yes
✔ Add Vitest <span class="token keyword">for</span> Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint <span class="token keyword">for</span> code quality? … No / Yes
✔ Add Prettier <span class="token keyword">for</span> code formatting? … No / Yes

Scaffolding project <span class="token keyword">in</span> ./<span class="token operator">&lt;</span>your-project-name<span class="token operator">&gt;</span><span class="token punctuation">..</span>.
Done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目,这里建议使用pnpm获得更快的install速度体验：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; cd &lt;your-project-name&gt;
&gt; pnpm install
&gt; pnpm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为vsCode安装Volar扩展，Volar支持class提示、语法高亮、vue文件import等等，带来比vue2中的vetur更好的体验，这里推荐安装：</p><ul><li><strong>TypeScript Vue Plugin (Volar)</strong></li><li><strong>Vue Language Features (Volar)</strong></li><li><strong>ESLint</strong></li><li><strong>Prettier - Code formatter</strong></li><li><strong>SCSS Formatter</strong></li><li><strong>Sass (.sass only)</strong></li><li><strong>Sass (.sass only)</strong></li><li><strong>Auto Rename Tag</strong></li><li><strong>Auto Close Tag</strong></li><li><strong>Path Intellisense</strong></li></ul><h2 id="创建vue应用" tabindex="-1"><a class="header-anchor" href="#创建vue应用" aria-hidden="true">#</a> 创建Vue应用</h2>`,9),u=e("strong",null,"创建实例",-1),v={href:"https://cn.vuejs.org/api/application.html#createapp",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"createApp",-1),m=e("strong",null,"应用实例",-1),g=t('<p><strong>根组件</strong>: 例如名字叫App： <code>const app = createApp(App)</code></p><p><strong>挂载应用</strong>：<code>app.mount(&#39;#app&#39;)</code>, #app 可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串,应用根组件的内容将会被渲染在容器元素里面。容器元素自己将<strong>不会</strong>被视为应用的一部分。</p><p><strong>根组件模版</strong>：当根组件没有设置 <code>template</code> 选项时，Vue 将自动使用容器的 <code>innerHTML</code> 作为模板，主要用在服务端渲染。一般是用App.vue。</p><p><strong>应用配置</strong>：<code>app.config.errorHandler</code>全局异常捕捉、<code>app.component</code>注册全局组件</p><p><strong>多个应用实例</strong>：<code>createApp</code> API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。</p><h2 id="模版语法" tabindex="-1"><a class="header-anchor" href="#模版语法" aria-hidden="true">#</a> 模版语法</h2><p><strong>文本插值</strong>：大括号 <code>&lt;span&gt;Message: {{ msg }}&lt;/span&gt;</code></p><p><strong>原始 HTML</strong>：使用 v-html绑定，注意 v-html 不能用来组合模版</p><p><strong>Attribute 绑定</strong>：<code>v-bind</code> 可简写为 <code>:</code>,v-bind<code>指令指示 Vue 将元素的</code>id<code>attribute 与组件的</code>dynamicId` 属性保持一致。因为现在使用ref绑定响应数据，初始值是null、undefined 也没关系，这里和vue2不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-bind:id=&quot;dynamicId&quot;&gt;&lt;/div&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>动态绑定多个值</strong>: <code>objectOfAttrs = {id: 1, class: &#39;good&#39;}</code>, <code>&lt;div v-bind=&quot;objectOfAttrs&quot;&gt;&lt;/div&gt;</code></p><p><strong>js表达式</strong>：可以调用函数，可以运算，只能是一句，判断标准是 是否能被 return返回</p><p><strong>指令 Directives</strong>：<code>DirectiveName:[eventName].modifier</code>,例如：<code>v-on:[click].prevent</code> = <code>@click.prevent</code></p><h2 id="响应式基础" tabindex="-1"><a class="header-anchor" href="#响应式基础" aria-hidden="true">#</a> 响应式基础</h2><p><strong>声明响应式状态</strong>：<code>ref()</code>, <code>ref()</code> 接收参数，并将其包裹在一个带有 <code>.value</code> 属性的 ref 对象中返回。在模版中使用ref时，不需要附加 <code>.value</code>,会自动解包，这里需要时顶级的ref。</p><p>**<code>&lt;script setup&gt;</code>：**在 <code>setup()</code> 函数中手动暴露大量的状态和方法非常繁琐。使用 <code>&lt;script setup&gt;</code> 来大幅度地简化代码，可以理解为模板是在同一作用域内声明的一个 JavaScript 函数——它自然可以访问与它一起声明的所有内容</p><p><strong>为什么要使用 ref</strong>：在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。但是我们可以拦截属性的 get 和 set 操作。</p><p><strong>深层响应性</strong>：Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 <code>Map</code>。此处数组不再需要vue2中 只能使用制定方法更新。</p>',18),b=e("strong",null,"shallow ref:",-1),h={href:"https://cn.vuejs.org/api/reactivity-advanced.html#shallowref",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,".value",-1),x=t(`<p><strong>DOM更新的时机</strong>：next tick</p><p><strong>reactive()</strong>：生命响应式状态 <code>const state = reactive({ count: 0 })</code>,只适合非基础类型，不能替换响应式对象，结构之后会失去响应性，因此建议主要使用 ref</p><p><strong>ref 作为 reactive 对象的属性自动解包</strong>：被访问和修改时自动解包</p><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 一个计算属性 ref
const publishedBooksMessage = computed(() =&gt; {
  return author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>计算属性 vs 方法</strong>：一个计算属性仅会在其响应式依赖更新时才重新计算。方法调用<strong>总是</strong>会在重渲染发生时再次执行函数。</p><h1 id="class-与-style-绑定" tabindex="-1"><a class="header-anchor" href="#class-与-style-绑定" aria-hidden="true">#</a> Class 与 Style 绑定</h1><p><strong>共存</strong><code>:class</code> 指令也可以和一般的 <code>class</code> attribute 共存<br><strong>合并</strong>：对于只有一个根元素的组件，当你使用了 <code>class</code> attribute 时，这些 class 会被添加到根元素上并与该元素上已有的 class 合并。</p><p><strong>style可以绑定数组</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div :style=&quot;[baseStyles, overridingStyles]&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h1><p><strong>v-show</strong>:<code>v-show</code> 不支持在 <code>&lt;template&gt;</code> 元素上使用，因为template不存在于真实的dom上，也不能和 <code>v-else</code> 搭配使用。</p><p><strong>V-if 和 v-show</strong>: v-if 会优先执行，这里和vue2是不一样的</p><h1 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h1><p><strong>解构</strong>：注意 <code>v-for</code> 是如何对应 <code>forEach</code> 回调的函数签名的。实际上，你也可以在定义 <code>v-for</code> 的变量别名时使用解构，和解构函数参数类似：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ message } in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ message }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 有 index 索引时 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>({ message }, index) in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ message }} {{ index }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>遍历对象</strong>：你也可以使用 <code>v-for</code> 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 <code>Object.keys()</code> 的返回值来决定。</p><p><strong>key</strong>:<code>key</code> 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 <code>v-for</code> 的 key:</p><p><strong>v-for对数组的响应</strong>：Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：</p><ul><li><code>push()</code></li><li><code>pop()</code></li><li><code>shift()</code></li><li><code>unshift()</code></li><li><code>splice()</code></li><li><code>sort()</code></li><li><code>reverse()</code></li></ul><h1 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h1><p><strong>在内联事件处理器中访问事件参数</strong>:有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 <code>$event</code> 变量，或者使用内联箭头函数</p><h1 id="表单输入绑定" tabindex="-1"><a class="header-anchor" href="#表单输入绑定" aria-hidden="true">#</a> 表单输入绑定</h1><p><strong>v-model修饰符</strong>：.lazy、.number、.trim</p><h1 id="生命周期钩子" tabindex="-1"><a class="header-anchor" href="#生命周期钩子" aria-hidden="true">#</a> <s>生命周期钩子</s></h1><h1 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器" aria-hidden="true">#</a> 侦听器</h1><p><strong>watch</strong>:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { ref, watch } from &#39;vue&#39;

const question = ref(&#39;&#39;)
const answer = ref(&#39;Questions usually contain a question mark. ;-)&#39;)

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) =&gt; {
  if (newQuestion.indexOf(&#39;?&#39;) &gt; -1) {
    answer.value = &#39;Thinking...&#39;
    try {
      const res = await fetch(&#39;https://yesno.wtf/api&#39;)
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = &#39;Error! Could not reach the API. &#39; + error
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不能直接侦听响应式对象的属性值</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = reactive({ count: 0 })

// 错误，因为 watch() 得到的参数是一个 number
watch(obj.count, (count) =&gt; {
  console.log(\`count is: \${count}\`)
})

// 提供一个 getter 函数
watch(
  () =&gt; obj.count,
  (count) =&gt; {
    console.log(\`count is: \${count}\`)
  }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>深层侦听</strong>：默认是一个深层侦听器，当使用getter时是浅层侦听，此时可以使用 deep 强制转换 深层监听。</p><p><strong>watchEffect()</strong>：<code>watchEffect()</code> 允许我们自动跟踪回调的响应式依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watchEffect(async () =&gt; {
  const response = await fetch(
    \`https://jsonplaceholder.typicode.com/todos/\${todoId.value}\`
  )
  data.value = await response.json()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>watchEffect</code> 仅会在其<strong>同步</strong>执行期间，才追踪依赖。在使用异步回调时，只有在第一个 <code>await</code> 正常工作前访问到的属性才会被追踪。</p><p><strong>回调的触发时机</strong>: 如果想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: &#39;post&#39;</p><p><strong>停止侦听器</strong>:如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let unwatch
// ...这个则不会！
setTimeout(() =&gt; {
  unwatch = watchEffect(() =&gt; {})
}, 100)

// ...当该侦听器不再需要时
unwatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="模板引用" tabindex="-1"><a class="header-anchor" href="#模板引用" aria-hidden="true">#</a> 模板引用</h1><p><strong>ref引用模版</strong>：声明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { ref, onMounted } from &#39;vue&#39;

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() =&gt; {
  input.value.focus()
})
&lt;/script&gt;

&lt;template&gt;
  &lt;input ref=&quot;input&quot; /&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ref引用子组件</strong>：如果一个子组件使用的是选项式 API 或没有使用 <code>&lt;script setup&gt;</code>，被引用的组件实例和该子组件的 <code>this</code> 完全一致;使用了 <code>&lt;script setup&gt;</code> 的组件是<strong>默认私有</strong>的：一个父组件无法访问到一个使用了 <code>&lt;script setup&gt;</code> 的子组件中的任何东西，除非子组件在其中通过 <code>defineExpose</code> 宏显式暴露：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const a = 1
const b = ref(2)

// 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  a,
  b
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="组件基础" tabindex="-1"><a class="header-anchor" href="#组件基础" aria-hidden="true">#</a> 组件基础</h1><p><strong>defineProps</strong>:</p><p><strong>defineEmits</strong>: <code>$emit</code>无法直接访问</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;enlarge-text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;enlarge-text&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 3.3+: alternative, more succinct syntax</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineEmits</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  change<span class="token operator">:</span> <span class="token punctuation">[</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span>
  update<span class="token operator">:</span> <span class="token punctuation">[</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>动态组件</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;component :is=&quot;tabs[currentTab]&quot;&gt;&lt;/component&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,49),_=e("code",null,'<component :is="...">',-1),k={href:"https://cn.vuejs.org/guide/built-ins/keep-alive.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> <s>组件注册</s></h2><h1 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 使用 &lt;script setup&gt;
defineProps({
  title: String,
  likes: Number
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q=e("strong",null,"可读性",-1),w={href:"https://cn.vuejs.org/guide/components/registration.html#component-name-casing",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;MyComponent greeting-message=&quot;hello&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Prop 校验</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>defineProps({
  // 基础类型检查
  // （给出 \`null\` 和 \`undefined\` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: &#39;hello&#39; }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return [&#39;success&#39;, &#39;warning&#39;, &#39;danger&#39;].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return &#39;Default function&#39;
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>defineProps()</code> 宏中的参数<strong>不可以访问 <code>&lt;script setup&gt;</code> 中定义的其他变量</strong>，因为在编译时整个表达式都会被移到外部的函数中。</p><p><strong>Boolean 类型转换</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>defineProps({
  disabled: Boolean
})


&lt;!-- 等同于传入 :disabled=&quot;true&quot; --&gt;
&lt;MyComponent disabled /&gt;

&lt;!-- 等同于传入 :disabled=&quot;false&quot; --&gt;
&lt;MyComponent /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p><strong>事件校验</strong>：</p><p>这个 emits 选项还支持对象语法，它允许我们对触发事件的参数进行验证：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
const emit = defineEmits({
  submit(payload) {
    // 通过返回值为 \`true\` 还是为 \`false\` 来判断
    // 验证是否通过
  }
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><p><strong>使用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- MyComponent.vue --&gt;
&lt;script setup&gt;
defineProps([&#39;title&#39;])
defineEmits([&#39;update:title&#39;])
&lt;/script&gt;

&lt;template&gt;
  &lt;input
    type=&quot;text&quot;
    :value=&quot;title&quot;
    @input=&quot;$emit(&#39;update:title&#39;, $event.target.value)&quot;
  /&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),A=e("strong",null,[n("多个 "),e("code",null,"v-model"),n(" 绑定")],-1),S={href:"https://cn.vuejs.org/guide/components/v-model.html#v-model-arguments",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"v-model",-1),E=e("code",null,"v-model",-1),M=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;UserName
  v-model:first-name=&quot;first&quot;
  v-model:last-name=&quot;last&quot;
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>处理 <code>v-model</code> 修饰符</strong>:可以自定义v-model修饰符，做处理</p><p><strong>多个<code>v-model</code>使用多个修饰符</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;UserName
  v-model:first-name.capitalize=&quot;first&quot;
  v-model:last-name.uppercase=&quot;last&quot;
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
const props = defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: { default: () =&gt; ({}) },
  lastNameModifiers: { default: () =&gt; ({}) }
})
defineEmits([&#39;update:firstName&#39;, &#39;update:lastName&#39;])

console.log(props.firstNameModifiers) // { capitalize: true }
console.log(props.lastNameModifiers) // { uppercase: true}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="透传-attributes" tabindex="-1"><a class="header-anchor" href="#透传-attributes" aria-hidden="true">#</a> 透传 Attributes</h2>`,6),V={href:"https://cn.vuejs.org/guide/components/props.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://cn.vuejs.org/guide/components/events.html#defining-custom-events",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"v-on",-1),T=e("code",null,"class",-1),D=e("code",null,"style",-1),F=e("code",null,"id",-1),I=t(`<p><strong>对 <code>class</code> 和 <code>style</code> 的合并</strong>:</p><p><strong><code>v-on</code> 监听器继承</strong>:</p><p><strong>禁用 Attributes 继承</strong>: 如果你<strong>不想要</strong>一个组件自动地继承 attribute，你可以在组件选项中设置 <code>inheritAttrs: false</code>。我们想要所有像 <code>class</code> 和 <code>v-on</code> 监听器这样的透传 attribute 都应用在内部的 <code>&lt;button&gt;</code> 上而不是外层的 <code>&lt;div&gt;</code> 上。我们可以通过设定 <code>inheritAttrs: false</code> 和使用 <code>v-bind=&quot;$attrs&quot;</code> 来实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;btn-wrapper&quot;&gt;
  &lt;button class=&quot;btn&quot; v-bind=&quot;$attrs&quot;&gt;click me&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多根节点的 Attributes 继承</strong>:有着多个根节点的组件没有自动 attribute 透传行为</p><p><strong>在 JavaScript 中访问透传 Attributes</strong>: 使用 <code>useAttrs()</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { useAttrs } from &#39;vue&#39;

const attrs = useAttrs()
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p><strong>作用域插槽</strong>：通过子组件标签上的 <code>v-slot</code> 指令，直接接收到了一个插槽 props 对象：</p><h2 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入" aria-hidden="true">#</a> <s>依赖注入</s></h2><h2 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件" aria-hidden="true">#</a> 异步组件</h2><p>例如：异步路由导入</p><h2 id="组合式函数" tabindex="-1"><a class="header-anchor" href="#组合式函数" aria-hidden="true">#</a> 组合式函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// mouse.js
import { ref } from &#39;vue&#39;
import { useEventListener } from &#39;./event&#39;

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, &#39;mousemove&#39;, (event) =&gt; {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是它在组件中使用的方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { useMouse } from &#39;./mouse.js&#39;

const { x, y } = useMouse()
&lt;/script&gt;

&lt;template&gt;Mouse position is at: {{ x }}, {{ y }}&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应式参数</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// fetch.js
import { ref, watchEffect, toValue } from &#39;vue&#39;

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  watchEffect(() =&gt; {
    // 在 fetch 之前重置状态
    data.value = null
    error.value = null
    // toValue() 将可能的 ref 或 getter 解包
    fetch(toValue(url))
      .then((res) =&gt; res.json())
      .then((json) =&gt; (data.value = json))
      .catch((err) =&gt; (error.value = err))
  })

  return { data, error }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),L=e("code",null,"toValue()",-1),O={href:"https://cn.vuejs.org/api/reactivity-utilities.html#unref",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"unref()",-1),Y=t(`<p><strong>通过抽取组合式函数改善代码结构</strong>:抽取组合式函数不仅是为了复用，也是为了代码组织。随着组件复杂度的增高，你可能会最终发现组件多得难以查询和理解。组合式 API 会给予你足够的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { useFeatureA } from &#39;./featureA.js&#39;
import { useFeatureB } from &#39;./featureB.js&#39;
import { useFeatureC } from &#39;./featureC.js&#39;

const { foo, bar } = useFeatureA()
const { baz } = useFeatureB(foo)
const { qux } = useFeatureC(baz)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$={href:"https://vueuse.org/",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"自定义指令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义指令","aria-hidden":"true"},"#"),n(),e("s",null,"自定义指令")],-1),H=e("h2",{id:"插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),n(" 插件")],-1),J=e("p",null,"插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：",-1),Q={href:"https://cn.vuejs.org/api/application.html#app-component",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"app.component()",-1),R={href:"https://cn.vuejs.org/api/application.html#app-directive",target:"_blank",rel:"noopener noreferrer"},X=e("code",null,"app.directive()",-1),G={href:"https://cn.vuejs.org/api/application.html#app-provide",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"app.provide()",-1),W={href:"https://cn.vuejs.org/guide/components/provide-inject.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://cn.vuejs.org/api/application.html#app-config-globalproperties",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"app.config.globalProperties",-1),ne=t('<h1 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> <s>Transition</s></h1><h1 id="keepalive" tabindex="-1"><a class="header-anchor" href="#keepalive" aria-hidden="true">#</a> KeepAlive</h1><p>它的功能是在多个组件间动态切换时缓存被移除的组件实例</p><h2 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h2><p><code>&lt;Teleport&gt;</code> 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。这类场景最常见的例子就是全屏的模态框。理想情况下，我们希望触发模态框的按钮和模态框本身是在同一个组件中，因为它们都与组件的开关状态有关。但这意味着该模态框将与按钮一起渲染在应用 DOM 结构里很深的地方。这会导致该模态框的 CSS 布局代码很难写。</p><h1 id="suspense" tabindex="-1"><a class="header-anchor" href="#suspense" aria-hidden="true">#</a> Suspense</h1><p><code>&lt;Suspense&gt;</code> 是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。</p>',7);function se(ie,te){const s=d("ExternalLinkIcon");return l(),r("div",null,[c,e("p",null,[u,n("： 每个 Vue 应用都是通过 "),e("a",v,[p,i(s)]),n(" 函数创建一个新的 "),m]),g,e("p",null,[b,n(),e("a",h,[n("shallow ref"),i(s)]),n(" 来放弃深层响应性。对于浅层 ref，只有 "),f,n(" 的访问会被追踪。浅层 ref 可以用于避免对大型数据的响应性开销来优化性能、或者有外部库管理其内部状态的情况。")]),x,e("p",null,[n("当使用 "),_,n(" 来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过 "),e("a",k,[n("`` 组件"),i(s)]),n("强制被切换掉的组件仍然保持“存活”的状态。")]),y,e("p",null,[q,n("：对于组件名我们推荐使用 "),e("a",w,[n("PascalCase"),i(s)]),n("，因为这提高了模板的可读性，能帮助我们区分 Vue 组件和原生 HTML 元素。然而对于传递 props 来说，使用 camelCase 并没有太多优势，因此我们推荐更贴近 HTML 的书写风格。")]),j,e("p",null,[A,n(":利用刚才在 "),e("a",S,[N,n(" 参数"),i(s)]),n("小节中学到的指定参数与事件名的技巧，我们可以在单个组件实例上创建多个 "),E,n(" 双向绑定。")]),M,e("p",null,[n("“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 "),e("a",V,[n("props"),i(s)]),n(" 或 "),e("a",P,[n("emits"),i(s)]),n(" 的 attribute 或者 "),C,n(" 事件监听器。最常见的例子就是 "),T,n("、"),D,n(" 和 "),F,n("。")]),I,e("p",null,[L,n(" 是一个在 3.3 版本中新增的 API。它的设计目的是将 ref 或 getter 规范化为值。如果参数是 ref，它会返回 ref 的值；如果参数是函数，它会调用函数并返回其返回值。否则，它会原样返回参数。它的工作方式类似于 "),e("a",O,[B,i(s)]),n("，但对函数有特殊处理。")]),Y,e("ul",null,[e("li",null,[e("a",$,[n("VueUse"),i(s)]),n("：一个日益增长的 Vue 组合式函数集合。源代码本身就是一份不错的学习资料。")])]),z,H,J,e("ol",null,[e("li",null,[n("通过 "),e("a",Q,[U,i(s)]),n(" 和 "),e("a",R,[X,i(s)]),n(" 注册一到多个全局组件或自定义指令。")]),e("li",null,[n("通过 "),e("a",G,[K,i(s)]),n(" 使一个资源"),e("a",W,[n("可被注入"),i(s)]),n("进整个应用。")]),e("li",null,[n("向 "),e("a",Z,[ee,i(s)]),n(" 中添加一些全局实例属性或方法")])]),ne])}const de=a(o,[["render",se],["__file","index.html.vue"]]);export{de as default};
