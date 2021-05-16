import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Avideo from '../components/Video.vue'
import Pmusic from '../views/Pmusic.vue'
import Pbook from '../views/Pbook.vue'
import data from '../views/data.vue'
Vue.use(VueRouter)

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
  }, {
    path: '/video',
    name: 'Avideo',
    component: Avideo
  }, {
    path: '/music',
    name: 'Pmusic',
    component: Pmusic
  }, {
    path: '/book',
    name: 'Pbook',
    component: Pbook
  }, {
    path: '/data',
    name: 'Pdata',
    component: data
  }
]

const router = new VueRouter({
  routes
})

export default router
