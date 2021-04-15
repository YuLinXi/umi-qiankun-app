import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      routes: [
        {
          path: '/app1',
          microApp: 'app1'
        },
        {
          path: '/app2',
          microApp: 'app2'
        }
      ]
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1',
          entry: '//localhost:9521',
        },
        {
          name: 'app2',
          entry: '//localhost:9522',
        },
      ],
    },
  },
});
