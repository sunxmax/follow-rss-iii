import { defineConfig } from 'vitepress'


import {RSSOptions, RssPlugin} from 'vitepress-plugin-rss'

const RSS: RSSOptions = {
  title: 'follow',
  baseUrl: 'https://follow-rss-iii.vercel.app/',
  copyright: 'Copyright (c) 2021-present, follow-rss-iii',
  description: 'feedId:68575158365448192+userId:68479353307954176'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "follow-rss-iii",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Follow', link: '/follow-airdrop' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
