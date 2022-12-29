import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'npm',
  routes: [
    { path: '/', component: '@/pages/wechat' },
    { path: '/user', component: '@/pages/user' },
    // { path: '/contacts', component: '@/pages/contacts' },
    // { path: '/me', component: '@/pages/me' },
  ],
});
