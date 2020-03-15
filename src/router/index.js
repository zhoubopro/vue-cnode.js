import Vue from 'vue';
import Router from 'vue-router';
import Portal from '../view/portal';
import Article from '../view/article';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Portal',
      component: Portal,
    },
    {
      path: '/topic/:id',
      name: 'Article',
      component: Article,
    }
  ],
});
