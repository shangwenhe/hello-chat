import { defineConfig } from "umi";

export default defineConfig({
  // history: {
  //   type: 'hash'
  // },
  publicPath: '/chat/',
  npmClient: 'npm',
  model: {},
  request: {},
  routes: [
    { path: '/', redirect: '/user' },
    {
      path: '/',
      component: '@/layouts/main',
      routes: [
        {
          path: '/user',
          component: '@/pages/user',
        },
        {
          path: '/discover',
          component: '@/pages/discover',
        },
        {
          path: '/contacts',
          component: '@/pages/contacts',
        },
        {
          path: '/wechat',
          component: '@/pages/wechat',
        }
      ]
    },
    {
      path: '/',
      component: '@/layouts/webview',
      routes: [
        {
          path: '/search',
          component: '@/pages/webview/search'
        },
        {
          path: '/news',
          component: '@/pages/webview/news'
        },
        {
          path: '/wechat/:userId',
          component: '@/pages/wechat/information'
        },
        {
          path: '/contacts/:userId',
          component: '@/pages/contacts/detail'
        },
        {
          path: '/contacts/:userId/settings',
          component: '@/pages/contacts/settings'
        },
        {
          path: '/user/settings',
          component: '@/pages/user/settings'
        },

      ]
    },
  ],
});
