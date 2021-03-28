import axios from "axios";

export default
{
    ACTION_GET_SEND_AXIOS(context)
    {
        return axios.get('http://127.0.0.1:8000/api/geometricPatterns')
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
        console.log(form)

        const config = {headers: { 'content-type': 'multipart/form-data' }}
        let formData = new FormData();

        formData.append('name', form.input);
        formData.append('image', form.image);

        return axios.post('http://127.0.0.1:8000/api/geometricPatterns', formData, config)
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
        return axios.get('http://127.0.0.1:8000/api/geometricPatterns/'+id)
            .then(res =>
            {
                context.commit('GET_SHOW_ITEM', res.data);
            })
            .catch(error => {
                console.log(error.body)
            })
    }
}