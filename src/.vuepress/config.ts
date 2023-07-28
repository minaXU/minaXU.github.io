import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";

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

  // Enable it with pwa
  // shouldPrefetch: false,
});
