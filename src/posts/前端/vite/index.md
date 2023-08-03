---
date: 2023-08-03
title: vite介绍
category:
  - 前端
tag:
  - 前段架构
---

vite是基于浏览器原生ES imports的开发服务器，主要解决的问题就是提升开发环节的编译和更新速度

#### vite特点总结：

- **立即启动：**基于浏览器原生ES imports，可以跳过编译，使用时在根据浏览器的需求按需编译。使用**esbuild**构建依赖，比JavaScript编写的打包器快10-100倍。效率是实际使用首次加载路由可能会有卡顿
- **构建效率不会随着项目规模增大而增加**：原因同上
- **更快的HMR**：HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活[[1\]](https://cn.vitejs.dev/guide/why.html#footnote-1)（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 `304 Not Modified` 进行协商缓存，而依赖模块请求则会通过 `Cache-Control: max-age=31536000,immutable` 进行强缓存，因此一旦被缓存它们将不需要再次请求。
- **生产环境使用rollup打包**：尽管原生 ESM 现在得到了广泛支持，但由于嵌套导入会导致额外的网络往返，在生产环境中发布未打包的 ESM 仍然效率低下（即使使用 HTTP/2）。为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更好的缓存）。



推荐阅读文章：

 面向未来的前端构建工具-vite： https://juejin.cn/post/6869915676501835783

React团队回应用Vite替换Create React App的建议： https://juejin.cn/post/7195398724040785976

## 参考

- [为什么选 Vite](https://cn.vitejs.dev/guide/why.html)


