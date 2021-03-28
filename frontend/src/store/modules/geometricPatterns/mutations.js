import axios from "axios";

export default {
    GET_ARRAY_ITEMS: (state, data) =>
    {
        state.arrayItems = data;
        state.arrayItemsStatus = !data.length;
        /*
        *
        if (res.data.length){
            state.arrayItemsLength = true;
        } else{
            state.arrayItemsLength = false
        }
        * */
        // state.arrayItemsStatus = !!data.length;
    },
    CREATE_ITEM: (state, data) =>
    {
        state.arrayItems.push(data);
    },
    GET_SHOW_ITEM: (state, data) =>
    {
        state.showItem = data;
    }
}