import Vue from 'vue';
import App from './App.vue';
import api from './api';
import router from './router';
import uiFramed from 'ui-framed';
import 'ui-framed/dist/ui-framed.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Icon from 'vue-svg-icon/Icon.vue';
import moment from 'moment';
// 设置使用中文
moment.locale('zh-cn');

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$moment = moment;
Vue.use(ElementUI);
Vue.use(uiFramed);

Vue.component('icon', Icon);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
