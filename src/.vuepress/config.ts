import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";


const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "minaXU 的博客",
  description: "vuepress-theme-hope 的博客演示",
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
