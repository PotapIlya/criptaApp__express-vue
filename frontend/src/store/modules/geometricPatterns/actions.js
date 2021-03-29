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
        // console.log(form)

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
                console.log(error.response, 'error')
            })
    },
    ACTION_UPDATE_SEND_AXIOS(context, form)
    {
        const config = {headers: { 'content-type': 'multipart/form-data' }}
        let formData = new FormData();

        console.log(form.name)
        formData.append('name', form.name);
        formData.append('image', form.image);


        return axios.put('http://127.0.0.1:8000/api/geometricPatterns/'+form.id, formData, config)
            .then(res =>
            {
                console.log(res.data)
                // context.commit('UPDATE_ITEM', res.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    ACTION_DELETE_SEND_AXIOS(context, data)
    {
        return axios.delete('http://127.0.0.1:8000/api/geometricPatterns/'+data.id, {
            data
        })
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