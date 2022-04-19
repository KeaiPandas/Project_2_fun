import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import ('../views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import ('../views/user')
      },
      {
        path: '/mail',
        name: 'mail',
        component: () => import('../views/mail')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/other/page1.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/other/page2.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]

const router =  new VueRouter({
  mode: 'history',
  routes
})

export default router