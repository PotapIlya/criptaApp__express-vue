import axios from "axios";

export default {
    GET_AXIOS: (state) =>
    {
        axios.get('http://127.0.0.1:8000/api/currencyPairs')
            .then(res =>
            {
                state.arrayItems = res.data;
            })
            .catch(error => {
                console.log(error.body)
            })
    },
    CREATE_AXIOS: (state, data) =>
    {
        axios.post('http://127.0.0.1:8000/api/currencyPairs',
            {
                data
            })
            .then(res =>
            {
                if (state.arrayItems.length !== 0){
                    state.arrayItems.push(res.data);
                }
            })
            .catch(error => {
                console.log(error.body)
            })
    }
}