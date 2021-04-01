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
                console.log(error.response)
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
                console.log(error.response)
            })
    },
    ACTION_CREATE_SEND_AXIOS(context, form)
    {
        const config = {headers: { 'content-type': 'multipart/form-data' }};
        let formData = new FormData();

        formData.append('name', form.input);
        formData.append('image', form.image);

        return axios.post('http://127.0.0.1:8000/api/geometricPatterns', formData, config)
            .then(res =>
            {
                context.commit('CREATE_ITEM', res.data)
            })
            .catch(error => {
                console.log(error, 'error')
            })
    },
    ACTION_UPDATE_SEND_AXIOS(context, form)
    {
        const config = {headers: { 'content-type': 'multipart/form-data' }};

        let formData = new FormData();
        formData.append('id', form.id);
        formData.append('name', form.name);
        formData.append('image', form.image);
        formData.append('update', true);

        return axios.post('http://127.0.0.1:8000/api/geometricPatterns', formData, config)
            .then(res =>
            {
                context.commit('UPDATE_ITEM', res.data);
                return res.data;
            })
            .catch(error => {
                console.log(error, 'error')
            })
        // return axios.put('http://127.0.0.1:8000/api/geometricPatterns/'+form.id, formData, config)
        //     .then(res =>
        //     {
        //         console.log(res.data)
        //         // context.commit('UPDATE_ITEM', res.data)
        //     })
        //     .catch(error => {
        //         console.log(error.response, 'error')
        //     })
    },
    ACTION_DELETE_SEND_AXIOS(context, data)
    {
        return axios.delete('http://127.0.0.1:8000/api/geometricPatterns/'+data.id)
            .then(res =>
            {
                if (res.data.success){
                    context.commit('DELETE_ITEM', res.data.success)
                }
            })
            .catch(error => {
                console.log(error.response, 'error')
            })
    },
}
