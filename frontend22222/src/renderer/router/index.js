import Vue from 'vue'
import Router from 'vue-router'
import Index from './../views/Index'

import RecordsIndex from './../views/records/Index'
import RecordsCreate from './../views/records/Create'

import currencyPairsIndex from './../views/currencyPairs/Index'
import currencyPairsCreate from './../views/currencyPairs/Create'

Vue.use(Router)

export default new Router({
  routes: [

    { path: '/',  name: 'index',  component: Index},

    { path: '/records',  name: 'index',  component: RecordsIndex},
    { path: '/records/create',  name: 'create',  component: RecordsCreate},

    { path: '/currencyPairs',  name: 'index',  component: currencyPairsIndex},
    { path: '/currencyPairs/create',  name: 'create',  component: currencyPairsCreate},


    { path: '*', redirect: '/' }
  ]
})
