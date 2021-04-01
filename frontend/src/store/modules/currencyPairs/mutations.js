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
    GET_SHOW_ITEM: (state, data) =>
    {
        state.showItem = data;
    },
    CREATE_ITEM: (state, data) =>
    {
        state.arrayItems.push(data);
    },
    UPDATE_ITEM: (state, data) =>
    {
        state.arrayItems.forEach( (item, index) => {
            if (item.id === data.id){
                state.arrayItems.splice(index, 1, data)
                return true;
            }
        })
        // state.showItem = data;
    },
    DELETE_ITEM: (state, id) =>
    {
        state.arrayItems.forEach( (item, index) => {
            if (item.id === id){
                state.arrayItems.splice(index, 1)
                return true;
            }
        })
        state.showItem = null;
    },
}
