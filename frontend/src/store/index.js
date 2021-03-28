import { createStore } from 'vuex'

import basic from './modules/basic/index'

import currencyPairs from './modules/currencyPairs/index'
import records from './modules/records/index'

import geometricPatterns from './modules/geometricPatterns/index'

export default createStore({

    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        basic,
        currencyPairs,
        records,
        geometricPatterns
    }
})

