import Context from '../pages/context.vue'
import About from '../pages/about.vue'
import Main from '../pages/main.vue'
import Router from "vue-router";
// 这块就是配置我们的路由信息了，一个是首页 home，一个是关于页面 about
// 其中 name: 'Home' 是我们的别名， path: '/',是我们的路由路径，component是我们路由对应的组件。

const routes = [
  {
    name: 'Context',
    path: '/context',
    component: Context
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'main',
    path: '/',
    component: Main
  }
]


// mode 说明了我们使用的是history模式，如果不设置mode，则会使用默认的hash模式。
const router = new Router({
  routes
})

export default router