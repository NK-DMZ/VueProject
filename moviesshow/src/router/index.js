import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/categorize',
    name: 'categorize',
    component:() => import(/* webpackChunkName: "about" */ '../views/Categorize.vue')
  },
  {
    path: '/message',
    name: 'message',
    component:() => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  {   
    path: '/me',
    name: 'me',
    component:() => import(/* webpackChunkName: "about" */ '../views/Me.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
