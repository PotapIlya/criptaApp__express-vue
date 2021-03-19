import { createRouter, createWebHistory } from 'vue-router'

import Index from './../views/Index'

import RecordsIndex from './../views/records/Index'
import RecordsCreate from './../views/records/Create'
import RecordsShow from './../views/records/Show'

import currencyPairsIndex from './../views/currencyPairs/Index'
import currencyPairsCreate from './../views/currencyPairs/Create'

const routes = [

    { path: '/', name: 'Index', component: Index },

    { path: '/records',  name: 'RecordsIndex',  component: RecordsIndex},
    { path: '/records/create',  name: 'RecordsCreate',  component: RecordsCreate},
    { path: '/records/:id',  name: 'RecordsShow',  component: RecordsShow},

    { path: '/currencyPairs',  name: 'currencyPairsIndex',  component: currencyPairsIndex},
    { path: '/currencyPairs/create',  name: 'currencyPairsCreate',  component: currencyPairsCreate},


    // { path: '*', redirect: '/' },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
