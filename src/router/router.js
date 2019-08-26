import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录
import login from '@/view/login.vue'
// 主页
import home from '@/view/home.vue'
// 欢迎页面
import welcome from '@/view/welcome.vue'
// 用户里列表页面
import users from '@/view/users/users.vue'
Vue.use(VueRouter)

// 创建路由对象
let router = new VueRouter({
  routes: [
    {
      name: 'router',
      path: '/',
      redirect: { name: 'home' }
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'home',
      path: '/home',
      component: home,
      redirect: { name: 'welcome' },
      children: [
        {
          name: 'welcome',
          path: 'welcome',
          component: welcome
        },
        {
          name: 'users',
          path: 'users',
          component: users
        }
      ]
    }
  ]
})

export default router
