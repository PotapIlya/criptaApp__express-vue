import axios from "axios";

export default {
    GET_ARRAY_ITEMS: (state, data) =>
    {
        state.arrayItems = data;
        // state.arrayItems = data.data;
        // state.arrayLinks = data.links;
        state.arrayLinks = [];

        // if (data.data.length){
        //     state.arrayItemsStatus = false;
        // } else{
        //     state.arrayItemsStatus = true
        // }
    },
    CREATE_ITEM: (state, data) => {
        if (state.arrayItems.length !== 0){
            state.arrayItems.push(data)
        }
    },
    GET_SHOW_ITEM: (state, data) =>
    {
        state.showItem = data;
    },
    GET_PAGINATE: (state, data) =>
    {
        state.arrayItems = data.data;
        state.arrayLinks = data.links;
    },
}

