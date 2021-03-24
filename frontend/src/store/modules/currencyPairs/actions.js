
export default {
    ACTION_GET_SEND_AXIOS(context)
    {
        context.commit('GET_AXIOS')
    },
    ACTION_CREATE_SEND_AXIOS(context, data)
    {
        context.commit('CREATE_AXIOS', data)
    },
    ACTION_SHOW_SEND_AXIOS(context, id)
    {
        context.commit('SHOW_AXIOS', id)
    }
}