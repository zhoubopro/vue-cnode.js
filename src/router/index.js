import Vue from 'vue';
import Router from 'vue-router';
import Portal from '../view/portal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Portal',
      component: Portal,
      // components: {
      //   main: Portal,
      //   sider: Sider
      // },
    },
    {
      path: '/topic/:id',
      name: 'Article',
      component: import('../view/article')
    },
    {
      path: '/user/:name',
      name: 'User',
      component: () => import('../view/user')
    },
    {
      path: '/about',
      component: () => import('../view/about')
    },
    {
      name: 'NotMatch',
      path: '*',
      component: () => import('../view/404')
    }
  ],
});
