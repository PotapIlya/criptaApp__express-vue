export default
{


    // ALERT
    ON_ALERT: (state) =>
    {
        state.statusAlert = true;
    },
    INSERT_MESSAGE_ALERT: (state, message) =>
    {
        state.messageAlert = message;
    },
    OFF_ALERT: (state) =>
    {
        state.statusAlert = false;
        state.messageAlert = null;
    },

}