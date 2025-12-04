import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "我的日记本",
  description: "记录生活的点点滴滴",
  base: "/time-capsule/",
  bundler: viteBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "时瑾",
    authorAvatar: "https://github.com/sj817.png",
    lastUpdatedText: "最后更新",
    navbar: [
      { text: "首页", link: "/" },
      { text: "日记", link: "/categories/diary/1.html" },
      { text: "时间轴", link: "/timeline.html" },
      { text: "标签", link: "/tags/life/1.html" },
      { text: "关于", link: "/about.html" },
    ],
    // 评论功能（可选配置）
    // commentConfig: {
    //   type: 'valine',
    //   options: {
    //     appId: 'your-appId',
    //     appKey: 'your-appKey',
    //     placeholder: '留下你的足迹...',
    //   },
    // },
  }),
});
