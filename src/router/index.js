import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login'
import SecondHome from '@/views/home/secondhome'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: SecondHome
      }, {
        path: '/home/comment', // 评论列表
        component: () => import('@/views/comment') // 按需加载
      }, {
        path: '/home/material', // 评论列表
        component: () => import('@/views/material') // 按需加载
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
