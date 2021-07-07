import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/home.vue')
const login = () => import('../components/login/login.vue')
const register = () => import('../components/register/register.vue')
const join = () => import('../components/join/join.vue')
const feedback = () => import('../components/feedback/feedback.vue')


Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/join',
    component: join
  },
  {
    path: '/feedback',
    component: feedback
  },
]
const router = new Router({
  routes,
  mode: 'history'
})

export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
