import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'npm',
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
      path: '/webview',
      component: '@/layouts/webview',
      routes: [
        {
          path: '/webview',
          component: '@/pages/webview/news'
        },
      ]
    },

    // { path: '/me', component: '@/pages/me' },
  ],
});
