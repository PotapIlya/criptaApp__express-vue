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
export default {
    name: "currencyPairsCreate",
    data: () => ({
        input: '',
    }),
    computed: {
    },
    methods:{
        send()
        {
            if ( this.name !== '' )
            {
                this.$store.dispatch('currencyPairs/ACTION_CREATE_SEND_AXIOS', this.input).then( () => {
                  this.input = '';
                })
            }
        }
    }
}
</script>

