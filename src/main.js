import Vue from 'vue';
import App from './App.vue';
import api from './api';
import router from './router';
import uiFramed from 'ui-framed';
import 'ui-framed/dist/ui-framed.css';
import Icon from 'vue-svg-icon/Icon.vue';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(uiFramed);

Vue.component('icon', Icon);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
