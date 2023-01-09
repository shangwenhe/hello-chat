import { defineConfig } from "@umijs/max";

export type APP_ENV = 'dev' | 'test' | 'prod';
export enum EEnv {
  DEV = 'dev',
  TEST = 'test',
  PROD = 'prod',
}

interface IHistoryType {
  [key: string]:  "browser" | "hash" | "memory";
}
const HistoryType: IHistoryType  = {
  [EEnv.DEV]: 'browser',
  [EEnv.TEST]: 'browser' ,
  [EEnv.PROD]: 'hash',
}

const historyType = HistoryType[process.env.APP_ENV as APP_ENV || 'prod'];

export default defineConfig({
  history: {
    type: historyType
  },
  npmClient: 'npm',
  model: {},
  request: {},
  define: {
    'process.env': process.env,
  },
  scripts: [{
    src: 'cordova.js',
    defer: false
  // }, {
  //   src: 'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js',
  // }, {
  //   content: `var vConsole = new VConsole()`,
  //   charset: 'utf-8',
  //   type: 'text/javascript'
  }],
  routes: [
    { path: '/', redirect: '/discover' },
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
        {
          path: '/user/service',
          component: '@/pages/user/service'
        },
        {
          path: '/user/collection',
          component: '@/pages/user/collection'
        },
        {
          path: '/discover/findout',
          component: '@/pages/discover/findout',
        },
        {
          path: '/discover/video',
          component: '@/pages/discover/video',
        },
        {
          path: '/discover/search',
          component: '@/pages/discover/search',
        },
        {
          path: '/discover/friend',
          component: '@/pages/discover/friend',
        },
        {
          path: '/discover/todo',
          component: '@/pages/discover/todo',
        },
      ]
    },
  ],
});
