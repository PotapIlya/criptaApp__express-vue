import axios from "axios";

export default {
    GET_ARRAY_ITEMS: (state, data) =>
    {
        state.arrayItems = data;
        if (data.length){
            state.arrayItemsStatus = false;
        } else{
            state.arrayItemsStatus = true
        }
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
        if ( !state.arrayItemsStatus )
        {
            state.arrayItems.push(data);
        }
    },
    GET_SHOW_ITEM: (state, data) =>
    {
        state.showItem = data;
    }
}