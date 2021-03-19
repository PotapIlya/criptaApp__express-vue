<template>
    <div>
        <h1>Валюты</h1>
        <router-link to="/currencyPairs/create">
            Add
        </router-link>

        <ul v-if="GET_ARRAY_ITEMS.length">
            <li v-for="item in GET_ARRAY_ITEMS"
            :key="item.id">
                {{ item.name }}
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "currencyPairsIndex",
    data: () => ({
        input: '',
    }),
    computed: {
        ...mapGetters('currencyPairs', ['GET_ARRAY_ITEMS']),

        ...mapActions('currencyPairs', ['ACTION_GET_SEND_AXIOS'])
    },
    methods:{

    },
    created()
    {
        if ( this.GET_ARRAY_ITEMS.length === 0 ){
            this.$store.dispatch('currencyPairs/ACTION_GET_SEND_AXIOS')
        }
    }
    // async created()
    // {
    //     if ( this.GET_ARRAY_ITEMS.length === 0 ){
    //         await this.$store.dispatch('currencyPairs/ACTION_GET_SEND_AXIOS')
    //             .then( () => {
    //                 console.log(this.GET_ARRAY_ITEMS)
    //             })
    //     }
    // }
}
</script>

