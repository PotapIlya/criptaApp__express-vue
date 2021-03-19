const state = {
    currencyPairs: [],
}

const mutations = {
    SEND_AXIOS (state) {
        state.currencyPairs.push('123')
    }
}

const actions = {
    ACTION_SEND_AXIOS ({ commit }) {
        console.log(12)
        commit('SEND_AXIOS')
    }
}

const getters = {
    GET_CURRENCY_PAIRS(state)
    {
        return state.currencyPairs
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
