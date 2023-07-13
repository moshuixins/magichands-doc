import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MagicHands",
  description:
    "一个基于JavaScript的移动端的开源自动化框架，支持nodejs、python、java。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/main" },
    ],

    sidebar: [
      {
        items: [
          { text: "文档", link: "/main" },
          {
            text: "在github上查看",
            link: "https://github.com/5tiaowu/MagicHands",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/5tiaowu/MagicHands" },
    ],
  },
});
