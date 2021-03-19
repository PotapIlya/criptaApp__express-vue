<template>
    <div>

        <label style="display: flex" for="">
            <span>Name:</span>
            <input type="text" v-model="input">
        </label>

        <button @click="send">Send</button>

    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "Create",
    data: () => ({
        input: '',
    }),
    computed: {
        ...mapGetters([
            'GET_HREF'
        ])
    },
    methods:{
        send()
        {
            if ( this.name !== null && this.name !== '' )
            {
                axios.post( this.GET_HREF+'currencyPairs',
                    {
                        name : this.input,

                    })
                    .then(res =>
                    {
                        this.input = ''
                        //
                    })
                    .catch(error => {
                        console.log(error.body)
                    })
            }

        }
    }
}
</script>

