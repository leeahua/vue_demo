import About from '../pages/about.vue'
import User from '../pages/user/user.vue'
import Login from "../pages/project/login.vue";
import Register from "../pages/project/register.vue";
import Dashboard from '../pages/project/dashboard.vue'
import Message from '../pages/project/message.vue'
import Newsfeeds from '../pages/project/newsfeeds.vue'
import Notifications from '../pages/project/notifications.vue'
import Privacy from '../pages/project/privacy.vue'
import Request from '../pages/project/request.vue'
import Settings from '../pages/project/settings.vue'
import Chat from '../pages/project/chat.vue'
import Router from "vue-router";

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'User',
    path: '/user',
    component: User
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'Message',
    path: '/message',
    component: Message
  },
  {
    name: 'Newsfeeds',
    path: '/newsfeeds',
    component: Newsfeeds
  },
  {
    name: 'Notifications',
    path: '/notifications',
    component: Notifications
  },
  {
    name: 'Privacy',
    path: '/privacy',
    component: Privacy
  },
  {
    name: 'Request',
    path: '/request',
    component: Request
  },
  {
    name: 'Settings',
    path: '/settings',
    component: Settings
  },
  {
    name: 'Chat',
    path: '/chat',
    component: Chat
  }

]


// mode 说明了我们使用的是history模式，如果不设置mode，则会使用默认的hash模式。
const router = new Router({
  routes
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('jere')
  console.log(to.path)
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    console.log(token)
    if (token === null || token === '') {
      next('/login');
    } else {
      console.log('to-->path', to.path)
      next();
    }
  }
});

export default router