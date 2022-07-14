import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Router from 'vue-router'
import router from "./router/index";
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)
let vm = new Vue({
  render: h => h(App),
  router
})
vm.$mount('#app')
