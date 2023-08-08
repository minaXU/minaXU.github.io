---
date: 2023-08-08
title: vue2项目改造使用vite
category:
  - 前端
tag:
  - 前段架构
---

vite推出后因为它在开发环境速度极快的体验，很快得到了大家的认可，我们有些vue2的老项目是webpack做打包服务的，用vite改造了下，效果明显。

## Step #1：更新依赖

移除Vue CLI相关的依赖

```json
// package.json
"@vue/cli-plugin-babel": "~4.5.0", // remove
"@vue/cli-plugin-eslint": "~4.5.0", // remove
"@vue/cli-plugin-router": "~4.5.0", // remove
"@vue/cli-plugin-vuex": "~4.5.0", // remove
"@vue/cli-service": "~4.5.0", // remove
```

移除css预编译的loader，vite内置了对常用的预处理器的支持,node-sass已经更新了，改用sass。[vite文档](https://cn.vitejs.dev/config/shared-options.html#css-modules)

```json
// package.json
"node-sass": "^8.0.2" // remove
"sass-loader": "^8.0.2" // remove
"sass": "^1.64.2", // add
```

安装vite需要的依赖 vite、vite-plugin-vue2。

*Note：⚠️vite-plugin-vue2适合vue2.6 以下的版本，vue2.7以上需要使用官方的插件*

```json
// package.json
"vite-plugin-vue2" : "^2.0.3" // add for Vue 2
"vite": "^2.5.4",
```

因为使用了 vite-plugin-vue2插件， vue template compiler也可以删除

```json
// package.json
"vue-template-compiler": "^2.6.11" //remove (SFC support provided by vite vue plugin)
```

其他可以删除的：

- `cross-env`: vite 开发和构建命令不同，预置了不同的环境变量**`import.meta.env.MODE`**，自定义环境变量可以用`.env`文件,这里可以不用 `cross-env`
- `webpack` 相关的一些配置，webpack实现的压缩、分包等功能需要重新实现

```json
"cross-env": "^7.0.3", 
"webpack-bundle-analyzer": "^4.4.1",
"compression-webpack-plugin": "6.1.1",
```

## Step #2：设置对现代浏览器的支持

vite是面向下一代的编译工具，只支持现代的浏览器会让速度更快，移除babel的支持，移除 `babel.config.js`文件

```json
// package.json
"babel-eslint": "^10.1.0", // remove
"core-js": "^3.6.5", // remove
```

## Step #3：如果仍然需要支持es5

vite官方给出了[插件](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)，安装依赖,插件使用terser做压缩处理，所以必须安装terser

```json
// package.json
"@vitejs/plugin-legacy": "*",
"terser": "*",
```

```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy'

export default {
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
}
```

## Step #4：添加vite配置

vite通过项目根目录的 `vite.config.js`文件配置，下边是基础的配置

```js
// vite.config.js

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
})
```

增加别名的配置

相关的 `~`在webpack总默认支持会去查找 node_modules文件夹，尝试使用别名解决无果，但是可以去掉`~`，例如`~elementUI/xxx`改成`elementUI/xxx`可直接使用

```js
// vite.config.js

import {resolve} from 'path'
export default defineConfig({
  //...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

scss相关的配置, `additionalData`设置全局依赖变量，`quietDeps`和`logger`是为了关闭sass在控制台的 被遗弃的api的警告，sass api变化比较大，警告非常多。

```js
// vite.config.js

export default defineConfig({
  //...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/var.scss";',
        quietDeps: true,
        logger: sass.Logger.silent,
      },
    }
  },
});
```

配置代理, 注意webpack使用`pathWrite`，而vite使用`rewrite`函数

```js
// vite.config.js

export default defineConfig({
  //...
     proxy: {
      '/api': {
        target: 'http://172.17.11.205:8080', // 目标 API 地址
        changeOrigin: true,
        timeout: 9000000,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

## Step #5：移动Index.html 

vite将index.html放在了根目录而不是 public目录，移动位置同时做一些修改，如果用到了`<%= htmlWebpackPlugin.options.title %>`把它改成硬编码的

```html
// index.html

<!--remove-->
<title><%= htmlWebpackPlugin.options.title %></title> 
<!--add-->
<title>Hard Coded Title</title>

//...
<!--remove-->
<strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
<!--add-->
<strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
```

使用硬编码替换 `<%= BASE_URL %>`

```html
// index.html

<!--remove-->
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<!--add-->
<link rel="icon" href="/favicon.ico">
```

最后，因为应用不再自动插入了，我们需要这样注入,在index.html body中添加：

```js
<script type="module" src="/src/main.js"></script>
```

## Step #6：更新脚本

把vue-cli-service的脚本改成使用vite

```json
// package.json
"serve": "vue-cli-service serve", // remove
"build": "vue-cli-service build", // remove
"dev": "vite",
"build": "vite build",
"serve": "vite preview",
```

*Note：vite不再使用serve作为开发环境的服务器用dev代替，serve用作生产环境的本地预览*

## Step #7：更新环境变量

定义环境变量的文件名仍然和一起一样，但是不能再使用process获取环境变量，改用import.meta.env

```js
// router/index.js
base: process.env.BASE_URL, //remove
base: import.meta.env.BASE_URL,
```

同时，之前自定义环境变量必须以`VUE_APP_`开头，现在必须使用`VITE_`开头，用到的地方都需要修改

## Step #8：为导入添加`.vue`后缀

新版本的Vue-Cli已经这么做了，如果是老的版本可能需要修改，如果不想每个文件都改一遍，那么可以通过配置项添加默认支持

```js
// vite.config.js
//...
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    //...
  },
});
```

需要注意，如果条件允许应该尽量避免这样统一添加.vue扩展,因为[vite官方文档](https://cn.vitejs.dev/config/shared-options.html#resolve-extensions):"不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持"

## Step #9：清理webpack魔法注释

```js
// router/index.js
import(
    /* webpackChunkName: "about" */  // remove
    "../views/About.vue"
),
```

vite自动使用文件名加上 哈希值作为分块的命名,例如：About.37a9fa9f.js

## Step #10：/deep/语法修改

vite使用`dart sass`代替 `node-sass`,它不支持`/deep/`的写法，需要改成`::v-deep`

## Step #11：require语法修改

`webpack`下对`require`自动做了转换，vite中无法直接使用

```js
// 静态资源引用示例

const imgUrl = new URL('./img.png', import.meta.url).href

document.getElementById('hero-img').src = imgUrl
```



```js
// 引用包示例
const getDeviceId = async () => {
  const { v4: uuidv4 } = await import("uuid")
  return uuidv4()
}

//async 环境中
await getDeviceId()
```

`require`转换有[三方插件](https://github.com/wangzongming/vite-plugin-require)，如果用到的地方很多，不想改代码，可以考虑使用插件

## Step #12：TS相关配置修改

如果之前的项目配置了ts，则需要一些额外的修改

tsconfig.json 文件, types增加 `vite/client`,`vite-plugin-vue2/client`,删除 `webpack-env`

```json
// tsconfig.json

"types": ["node", "vite/client", "vite-plugin-vue2/client"],
```

## Step #13：Vite分包设置、雪碧图、首屏预加载

## Step #14：done！

现在启动项目就可以了

改造后的关键文件完整版

```html
// index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="">
    <title>h6-web</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```



```js
// vite.config.js

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import {resolve} from 'path'
import sass from 'sass'

export default defineConfig({
  server: {
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://172.17.11.205:8080', //测试环境的api地址
        // 如果要代理 websockets
        // ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        timeout: 9000000,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    createVuePlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/var.scss";',
        quietDeps: true,
        logger: sass.Logger.silent,
      },
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      "~": resolve(__dirname, "./node_modules"),
    },
  },
})
```

## 参见

- vite plugin-legacy：https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
- How to Migrate from Vue CLI to Vite：https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/