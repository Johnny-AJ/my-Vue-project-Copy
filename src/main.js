import Vue from 'vue'
import App from './App.vue'
// 引入组件
import router from '@/router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 添加导航守卫
router.beforeEach((to, from, next) => {
  // 获取token
  let mytoken = localStorage.getItem('CCStore')
  // 判断
  if (mytoken || to.path === '/login') {
    // 判断成功进入主页
    next()
  } else {
    // 重定向
    next({ path: '/login' })
  }
})

new Vue({
  // 注入路由
  router,
  render: h => h(App)
}).$mount('#app')
