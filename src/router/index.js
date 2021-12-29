import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'zapp',
    component: () => import('../views/Zapp.vue')
  },
  {
    path: '/getir',
    name: 'Getir',
    component: () => import('../views/Getir.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
