import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './../views/Index'

import RecordsIndex from './../views/records/Index'
import RecordsCreate from './../views/records/Create'

import currencyPairsIndex from './../views/currencyPairs/Index'
import currencyPairsCreate from './../views/currencyPairs/Create'


Vue.use(VueRouter)

const routes = [

    { path: '/',  name: 'index',  component: Index},

    { path: '/records',  name: 'index',  component: RecordsIndex},
    { path: '/records/create',  name: 'create',  component: RecordsCreate},

    { path: '/currencyPairs',  name: 'index',  component: currencyPairsIndex},
    { path: '/currencyPairs/create',  name: 'create',  component: currencyPairsCreate},


    { path: '*', redirect: '/' }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
