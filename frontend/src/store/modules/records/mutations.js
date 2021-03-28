import axios from "axios";

export default {
    GET_ARRAY_ITEMS: (state, data) =>
    {
        state.arrayItems = data.data;
        state.arrayLinks = data.links;

        // console.log(data.data)
        if (data.data.length){
            state.arrayItemsStatus = false;
        } else{
            state.arrayItemsStatus = true
        }
    },
    CREATE_ITEM: (state, data) => {
        state.arrayItems.push(data)
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

