import axios from "axios";

export default {
    GET_AXIOS: (state) =>
    {
        axios.get( 'http://127.0.0.1:8000/api/records')
            .then(res => {
                console.log(res.data)
                state.arrayItems = res.data.data;
            })
            .catch(error => {
                console.log(error.body)
            })
    },
    CREATE_AXIOS: (state, form) => {

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
                console.log( res.data )
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

