import Vue from 'vue'
import VueRouter from 'vue-router'

import PostsWall from '../views/PostsWall.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/postwall',
    name: 'PostsWall',
    component: PostsWall
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
