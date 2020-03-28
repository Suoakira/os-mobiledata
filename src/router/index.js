import Vue from 'vue'
import VueRouter from 'vue-router'
import OSHome from "../components/OSHome.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'OSHome',
    component: OSHome
  },
  {
    path: '/read-me',
    name: 'ReadMe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/OSReadMe.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
