import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
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
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  }
]

const router = new VueRouter({
  routes
})

export default router
