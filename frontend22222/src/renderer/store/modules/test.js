const state = {
    data: 0,
}

const mutations = {
    resetData(state){
        state.data = 12;
    }
}

const actions = {
    actionData(context){
        context.commit('resetData')
    }
}

const getters = {
    getData(state){
        return state.data;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
