import Vue from 'vue';
import Router from 'vue-router';
import Portal from '../view/portal';
import Article from '../view/article';
import User from '../view/user';
import About from '../view/about';

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
      component: Article,
      // components: {
      //   main: Article,
      //   sider: Sider,
      // },
    },
    {
      path: '/user/:name',
      name: 'User',
      component: User
    },
    {
      path: '/about',
      components: {
        main: About
      }
    }
  ],
});
