
export default {
    ACTION_GET_SEND_AXIOS(context)
    {
        context.commit('GET_AXIOS')
    },
    ACTION_CREATE_SEND_AXIOS(context, form)
    {
        context.commit('CREATE_AXIOS', form)
    },
    ACTION_SHOW_SEND_AXIOS(context, id)
    {
        context.commit('SHOW_AXIOS', id)
    }

}