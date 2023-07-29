---
date: 2023-07-28
category:
  - 独立开发
tag:
  - github
  - vue
---

# 使用Github搭建个人博客

开发者需要经常学习新的知识，学完之后通过博客记录整理能对自己形成二次的提升，一直没有写太多博客其实是因为没有学习太多新知识了，希望后边能改善。

在平台的选择上，主要是个人建站和使用网络平台（CSDN、掘金、博客园等）两中选择，考虑到网络平台的版面比较复杂，阅读体验并不好，另外自认为不是什么技术大牛，文章主要用来记录自己的技术成长，分享互动排名等是次要，因此决定自己建站，顺便可以感受下建站的全过程。

建站最终方案：

- 静态网站托管：github pages
- 网站模版： [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)
- 评论系统： Waline

#### 1. 创建Github账号和仓库

- [github官方指导](https://docs.github.com/zh/pages/quickstart)

#### 2. 创建vuepress模版项目

- vuepress有很多主题可选,可以多搜一搜 [链接](https://vuepress.vuejs.org/zh/theme/blog-theme.html#%E7%BD%91%E7%AB%99)
- 这里使用 [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/),非常适合做博客，标签、搜索、时间线、评论、浏览量等都可以逐一支持（有额外工作量）
- 项目创建步骤 [教程](https://theme-hope.vuejs.press/zh/guide/get-started/install.html)

#### 3. 自动部署

- 如果第一步使用的仓库名称是这样的 `<USERNAME>.github.io`,那么现在项目就ok了，其他情况可以参考 [部署项目](https://theme-hope.vuejs.press/zh/cookbook/tutorial/deploy.html)

- 提交代码到main分支即可触发 github 工作流，相关代码在项目目录 `.github/workflows/deploy-docs.yml`
- 现在到自己的仓库 `<USERNAME>.github.io`查看Actions，这时基本已经成功了, 分支gh-pages已经有了最新的编译后的静态文件，去settings -> pages 修改 Build and deployment -> Branch ,改为 gh-pages
- 访问 https://\<USERNAME\>.github.io 已经可以成功  部署完成！

#### 4. 修改网站布局

做了主题配置修改，包括移除导航中的菜单，让导航更清爽[guide](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)；侧边栏只留文章让网站尽量精简[guide](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html)；接入了必应的home背景[guide](https://theme-hope.vuejs.press/zh/guide/advanced/presets.html#%E5%BF%85%E5%BA%94%E5%A3%81%E7%BA%B8);修改主题色、修改字体等；

#### 5. 接入评论

- 使用 Waline + LeanCloud + Vercel
- [LeanCloud 设置](https://plugin-comment2.vuejs.press/zh/guide/waline.html)
- [Vercel部署](https://waline.js.org/guide/deploy/vercel.html)
- 修改项目中 config.ts  theme.plugins.comment.serverURL 为上一步点击visit后打开的地址

#### 6. 接入搜索

- [教程](https://theme-hope.vuejs.press/zh/guide/feature/search.html)

最终效果 [link](https://minaxu.github.io/)

#### The end！！！