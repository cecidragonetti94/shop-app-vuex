import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  },
   {
    path: '/compras',
    name: 'Compras',
  
  component: () => import('../views/Compras.vue')
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
