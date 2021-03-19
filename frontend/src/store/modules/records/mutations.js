import axios from "axios";

export default {
    GET_AXIOS: (state) =>
    {
        axios.get( 'http://127.0.0.1:8000/api/records')
            .then(res => {
                state.arrayItems = res.data;
            })
            .catch(error => {
                console.log(error.body)
            })
    },
    CREATE_AXIOS: (state, form) => {
        axios.post('http://127.0.0.1:8000/api/records',
            {
                currencyPairs: form.currencyPairs,
                title: form.title,
                description: form.description,
                image: form.image,
                price_start: form.price_start,
                price_end: form.price_end,
                count: form.count,
                profit: form.profit,
                side: form.side,
            })
            .then(res =>
            {
                if ( state.arrayItems.length !== 0 ){
                    state.arrayItems.push(res.data)
                }
            })
            .catch(error => {
                console.log(error.body)
            })
    },
    SHOW_AXIOS: (state, id) =>
    {
        axios.get('http://127.0.0.1:8000/api/records/'+id)
            .then(res =>
            {
                state.showItem = res.data;
            })
            .catch(error => {
                console.log(error.body)
            })
    }
}

