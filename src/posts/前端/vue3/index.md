---
date: 2023-08-03
title: vue3构建项目体验
category:
  - 前端
tag:
  - 前段架构
---



## 项目初始化

```
> npm init vue@latest
```

构建中的选项 都能用的上，全部选yes

```shell
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

启动项目,这里建议使用pnpm获得更快的install速度体验：

```
> cd <your-project-name>
> pnpm install
> pnpm run dev
```

为vsCode安装Volar扩展，Volar支持class提示、语法高亮、vue文件import等等，带来比vue2中的vetur更好的体验，这里推荐安装：

- **TypeScript Vue Plugin (Volar)**
- **Vue Language Features (Volar)**
- **ESLint**
- **Prettier - Code formatter**
- **SCSS Formatter**
- **Sass (.sass only)**
- **Sass (.sass only)**
- **Auto Rename Tag**
- **Auto Close Tag**
- **Path Intellisense**

## 创建Vue应用

**创建实例**： 每个 Vue 应用都是通过 [`createApp`](https://cn.vuejs.org/api/application.html#createapp) 函数创建一个新的 **应用实例**

**根组件**: 例如名字叫App： `const app = createApp(App)`

**挂载应用**：`app.mount('#app')`, #app 可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串,应用根组件的内容将会被渲染在容器元素里面。容器元素自己将**不会**被视为应用的一部分。

**根组件模版**：当根组件没有设置 `template` 选项时，Vue 将自动使用容器的 `innerHTML` 作为模板，主要用在服务端渲染。一般是用App.vue。

**应用配置**：`app.config.errorHandler`全局异常捕捉、`app.component`注册全局组件

**多个应用实例**：`createApp` API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。

## 模版语法

**文本插值**：大括号 `<span>Message: {{ msg }}</span>`

**原始 HTML**：使用 v-html绑定，注意 v-html 不能用来组合模版

**Attribute 绑定**：`v-bind` 可简写为 `:`,v-bind` 指令指示 Vue 将元素的 `id` attribute 与组件的 `dynamicId` 属性保持一致。因为现在使用ref绑定响应数据，初始值是null、undefined 也没关系，这里和vue2不同。

```
<div v-bind:id="dynamicId"></div>
```

**动态绑定多个值**: `objectOfAttrs = {id: 1, class: 'good'}`, `<div v-bind="objectOfAttrs"></div>`

**js表达式**：可以调用函数，可以运算，只能是一句，判断标准是 是否能被 return返回

**指令 Directives**：`DirectiveName:[eventName].modifier`,例如：`v-on:[click].prevent` = `@click.prevent`

## 响应式基础

**声明响应式状态**：`ref()`, `ref()` 接收参数，并将其包裹在一个带有 `.value` 属性的 ref 对象中返回。在模版中使用ref时，不需要附加 `.value`,会自动解包，这里需要时顶级的ref。

**`<script setup>`：**在 `setup()` 函数中手动暴露大量的状态和方法非常繁琐。使用 `<script setup>` 来大幅度地简化代码，可以理解为模板是在同一作用域内声明的一个 JavaScript 函数——它自然可以访问与它一起声明的所有内容

**为什么要使用 ref**：在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。但是我们可以拦截属性的 get 和 set 操作。

**深层响应性**：Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 `Map`。此处数组不再需要vue2中 只能使用制定方法更新。

**shallow ref:** [shallow ref](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 来放弃深层响应性。对于浅层 ref，只有 `.value` 的访问会被追踪。浅层 ref 可以用于避免对大型数据的响应性开销来优化性能、或者有外部库管理其内部状态的情况。

**DOM更新的时机**：next tick

**reactive()**：生命响应式状态 `const state = reactive({ count: 0 })`,只适合非基础类型，不能替换响应式对象，结构之后会失去响应性，因此建议主要使用 ref

**ref 作为 reactive 对象的属性自动解包**：被访问和修改时自动解包

## 计算属性

```
// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
```

**计算属性 vs 方法**：一个计算属性仅会在其响应式依赖更新时才重新计算。方法调用**总是**会在重渲染发生时再次执行函数。

# Class 与 Style 绑定

**共存**`:class` 指令也可以和一般的 `class` attribute 共存
**合并**：对于只有一个根元素的组件，当你使用了 `class` attribute 时，这些 class 会被添加到根元素上并与该元素上已有的 class 合并。

**style可以绑定数组**:

```
<div :style="[baseStyles, overridingStyles]"></div>
```

# 条件渲染

**v-show**:`v-show` 不支持在 `<template>` 元素上使用，因为template不存在于真实的dom上，也不能和 `v-else` 搭配使用。

**V-if 和 v-show**: v-if 会优先执行，这里和vue2是不一样的

# 列表渲染

**解构**：注意 `v-for` 是如何对应 `forEach` 回调的函数签名的。实际上，你也可以在定义 `v-for` 的变量别名时使用解构，和解构函数参数类似：

```vue
<li v-for="{ message } in items">
  {{ message }}
</li>

<!-- 有 index 索引时 -->
<li v-for="({ message }, index) in items">
  {{ message }} {{ index }}
</li>
```

**遍历对象**：你也可以使用 `v-for` 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 `Object.keys()` 的返回值来决定。

**key**:`key` 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 `v-for` 的 key:

**v-for对数组的响应**：Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

# 事件处理

**在内联事件处理器中访问事件参数**:有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数

# 表单输入绑定

**v-model修饰符**：.lazy、.number、.trim

# ~~生命周期钩子~~

# 侦听器

**watch**:

```vue
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
```

**不能直接侦听响应式对象的属性值**：

```
const obj = reactive({ count: 0 })

// 错误，因为 watch() 得到的参数是一个 number
watch(obj.count, (count) => {
  console.log(`count is: ${count}`)
})

// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
```

**深层侦听**：默认是一个深层侦听器，当使用getter时是浅层侦听，此时可以使用 deep 强制转换 深层监听。

**watchEffect()**：`watchEffect()` 允许我们自动跟踪回调的响应式依赖。

```
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```

`watchEffect` 仅会在其**同步**执行期间，才追踪依赖。在使用异步回调时，只有在第一个 `await` 正常工作前访问到的属性才会被追踪。

**回调的触发时机**: 如果想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: 'post'

**停止侦听器**:如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏

```
let unwatch
// ...这个则不会！
setTimeout(() => {
  unwatch = watchEffect(() => {})
}, 100)

// ...当该侦听器不再需要时
unwatch()
```

# 模板引用

**ref引用模版**：声明

```
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```

**ref引用子组件**：如果一个子组件使用的是选项式 API 或没有使用 `<script setup>`，被引用的组件实例和该子组件的 `this` 完全一致;使用了 `<script setup>` 的组件是**默认私有**的：一个父组件无法访问到一个使用了 `<script setup>` 的子组件中的任何东西，除非子组件在其中通过 `defineExpose` 宏显式暴露：

```
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

// 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  a,
  b
})
</script>
```

# 组件基础

**defineProps**:

**defineEmits**: `$emit`无法直接访问

```js
<script setup>
const emit = defineEmits(['enlarge-text'])

emit('enlarge-text')
</script>
```

```typescript
// 3.3+: alternative, more succinct syntax
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
```

**动态组件**：

```
<component :is="tabs[currentTab]"></component>
```

当使用 `<component :is="...">` 来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过 [`` 组件](https://cn.vuejs.org/guide/built-ins/keep-alive.html)强制被切换掉的组件仍然保持“存活”的状态。

## ~~组件注册~~

# Props

```
// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})
```

**可读性**：对于组件名我们推荐使用 [PascalCase](https://cn.vuejs.org/guide/components/registration.html#component-name-casing)，因为这提高了模板的可读性，能帮助我们区分 Vue 组件和原生 HTML 元素。然而对于传递 props 来说，使用 camelCase 并没有太多优势，因此我们推荐更贴近 HTML 的书写风格。

```
<MyComponent greeting-message="hello" />
```

**Prop 校验**:

```
defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
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
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
```

`defineProps()` 宏中的参数**不可以访问 `<script setup>` 中定义的其他变量**，因为在编译时整个表达式都会被移到外部的函数中。

**Boolean 类型转换**:

```
defineProps({
  disabled: Boolean
})


<!-- 等同于传入 :disabled="true" -->
<MyComponent disabled />

<!-- 等同于传入 :disabled="false" -->
<MyComponent />
```

## 事件

**事件校验**：

这个 emits 选项还支持对象语法，它允许我们对触发事件的参数进行验证：

```
<script setup>
const emit = defineEmits({
  submit(payload) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // 验证是否通过
  }
})
</script>
```

## v-model

**使用**

```
<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

**多个 `v-model` 绑定**:利用刚才在 [`v-model` 参数](https://cn.vuejs.org/guide/components/v-model.html#v-model-arguments)小节中学到的指定参数与事件名的技巧，我们可以在单个组件实例上创建多个 `v-model` 双向绑定。

```
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```

**处理 `v-model` 修饰符**:可以自定义v-model修饰符，做处理

**多个`v-model`使用多个修饰符**:

```
<UserName
  v-model:first-name.capitalize="first"
  v-model:last-name.uppercase="last"
/>
```

```
<script setup>
const props = defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: { default: () => ({}) },
  lastNameModifiers: { default: () => ({}) }
})
defineEmits(['update:firstName', 'update:lastName'])

console.log(props.firstNameModifiers) // { capitalize: true }
console.log(props.lastNameModifiers) // { uppercase: true}
</script>
```

## 透传 Attributes

“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 [props](https://cn.vuejs.org/guide/components/props.html) 或 [emits](https://cn.vuejs.org/guide/components/events.html#defining-custom-events) 的 attribute 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

**对 `class` 和 `style` 的合并**:

**`v-on` 监听器继承**:

**禁用 Attributes 继承**: 如果你**不想要**一个组件自动地继承 attribute，你可以在组件选项中设置 `inheritAttrs: false`。我们想要所有像 `class` 和 `v-on` 监听器这样的透传 attribute 都应用在内部的 `<button>` 上而不是外层的 `<div>` 上。我们可以通过设定 `inheritAttrs: false` 和使用 `v-bind="$attrs"` 来实现：

```
<div class="btn-wrapper">
  <button class="btn" v-bind="$attrs">click me</button>
</div>
```

**多根节点的 Attributes 继承**:有着多个根节点的组件没有自动 attribute 透传行为

**在 JavaScript 中访问透传 Attributes**: 使用 `useAttrs()`

```
<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>
```

## 插槽

**作用域插槽**：通过子组件标签上的 `v-slot` 指令，直接接收到了一个插槽 props 对象：

## ~~依赖注入~~

## 异步组件

例如：异步路由导入

## 组合式函数

```
// mouse.js
import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}
```

下面是它在组件中使用的方式：

```
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

**响应式参数**：

```
// fetch.js
import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  watchEffect(() => {
    // 在 fetch 之前重置状态
    data.value = null
    error.value = null
    // toValue() 将可能的 ref 或 getter 解包
    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  })

  return { data, error }
}
```

`toValue()` 是一个在 3.3 版本中新增的 API。它的设计目的是将 ref 或 getter 规范化为值。如果参数是 ref，它会返回 ref 的值；如果参数是函数，它会调用函数并返回其返回值。否则，它会原样返回参数。它的工作方式类似于 [`unref()`](https://cn.vuejs.org/api/reactivity-utilities.html#unref)，但对函数有特殊处理。

**通过抽取组合式函数改善代码结构**:抽取组合式函数不仅是为了复用，也是为了代码组织。随着组件复杂度的增高，你可能会最终发现组件多得难以查询和理解。组合式 API 会给予你足够的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数：

```
<script setup>
import { useFeatureA } from './featureA.js'
import { useFeatureB } from './featureB.js'
import { useFeatureC } from './featureC.js'

const { foo, bar } = useFeatureA()
const { baz } = useFeatureB(foo)
const { qux } = useFeatureC(baz)
</script>
```

- [VueUse](https://vueuse.org/)：一个日益增长的 Vue 组合式函数集合。源代码本身就是一份不错的学习资料。

## ~~自定义指令~~

## 插件

插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：

1. 通过 [`app.component()`](https://cn.vuejs.org/api/application.html#app-component) 和 [`app.directive()`](https://cn.vuejs.org/api/application.html#app-directive) 注册一到多个全局组件或自定义指令。
2. 通过 [`app.provide()`](https://cn.vuejs.org/api/application.html#app-provide) 使一个资源[可被注入](https://cn.vuejs.org/guide/components/provide-inject.html)进整个应用。
3. 向 [`app.config.globalProperties`](https://cn.vuejs.org/api/application.html#app-config-globalproperties) 中添加一些全局实例属性或方法

# ~~Transition~~

# KeepAlive

它的功能是在多个组件间动态切换时缓存被移除的组件实例

## Teleport

`<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。这类场景最常见的例子就是全屏的模态框。理想情况下，我们希望触发模态框的按钮和模态框本身是在同一个组件中，因为它们都与组件的开关状态有关。但这意味着该模态框将与按钮一起渲染在应用 DOM 结构里很深的地方。这会导致该模态框的 CSS 布局代码很难写。

# Suspense

`<Suspense>` 是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。

