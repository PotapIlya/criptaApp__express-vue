import axios from "axios";

export default
{
    ACTION_GET_SEND_AXIOS(context)
    {
        return axios.get('http://127.0.0.1:8000/api/currencyPairs')
            .then(res =>
            {
                context.commit('GET_ARRAY_ITEMS', res.data)
            })
            .catch(error => {
                console.log(error.body)
            })

    },
    ACTION_CREATE_SEND_AXIOS(context, data)
    {
        return axios.post('http://127.0.0.1:8000/api/currencyPairs', {
                data
            })
            .then(res =>
            {
                context.commit('CREATE_ITEM', res.data)
            })
            .catch(error => {
                console.log(error.body)
            })
    },
    ACTION_SHOW_SEND_AXIOS(context, id)
    {
        return axios.get('http://127.0.0.1:8000/api/currencyPairs/'+id)
            .then(res =>
            {
                context.commit('GET_SHOW_ITEM', res.data);
            })
            .catch(error => {
                console.log(error.body)
            })
    }
}