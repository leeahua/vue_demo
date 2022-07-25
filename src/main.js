import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Router from 'vue-router'
import router from "./router/index"
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'
import VueResource from 'vue-resource'
import store from './store/index'
import LemonIMUI from 'lemon-imui';
import 'lemon-imui/dist/index.css';
Vue.use(LemonIMUI);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueResource)
let vm = new Vue({
  store,
  router,
  render: h => h(App)
})
vm.$mount('#app')
