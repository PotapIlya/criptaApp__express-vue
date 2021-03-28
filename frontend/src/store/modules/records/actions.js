import axios from "axios";

export default {
    ACTION_GET_SEND_AXIOS(context)
    {
        return axios.get( 'http://127.0.0.1:8000/api/records')
            .then(res =>
            {
                context.commit('GET_ARRAY_ITEMS', res.data)

            })
            .catch(error => {
                console.log(error.body)
            })
    },
    ACTION_CREATE_SEND_AXIOS(context, form)
    {
        const config = {headers: { 'content-type': 'multipart/form-data' }}
        let formData = new FormData();

        formData.append('currencyPairs', form.currencyPairs);
        formData.append('image', form.image);
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('price_start', form.price_start);
        formData.append('price_end', form.price_end);
        formData.append('count', form.count);
        formData.append('profit', form.profit);
        formData.append('side', form.side);

        axios.post('http://127.0.0.1:8000/api/records', formData, config)
            .then(res =>
            {
                if ( state.arrayItems.length !== 0 ){
                    context.commit('CREATE_ITEM', res.data)
                }
            })
            .catch(error => {
                console.log(error.body, 'error')
            })


    },
    ACTION_SHOW_SEND_AXIOS(context, id)
    {
        return axios.get('http://127.0.0.1:8000/api/records/'+id)
            .then(res =>
            {
                context.commit('GET_SHOW_ITEM', res.data)
            })
            .catch(error => {
                console.log(error.body)
            })
    },
    ACTION_PAGINATE(context, url)
    {
        return axios.get(url)
            .then(res =>
            {
                context.commit('GET_PAGINATE', res.data)
            })
            .catch(error => {
                console.log(error.body)
            })
    }

}