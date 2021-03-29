
export default {
    SEND_MESSAGE_ALERT(context, message)
    {
        context.commit('ON_ALERT');
        context.commit('INSERT_MESSAGE_ALERT', message);
    },
    OFF_ALERT(context)
    {
        context.commit('OFF_ALERT');
    }
}