import Vue from 'vue'
import App from './App.vue'
import router from './router';
import uiFramed from 'ui-framed';
import 'ui-framed/dist/ui-framed.css';

Vue.config.productionTip = false;

Vue.use(uiFramed);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
