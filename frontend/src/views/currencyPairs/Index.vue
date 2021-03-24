<template>
    <div>
        <h1>Валюты</h1>
        <router-link to="/currencyPairs/create">
            Add
        </router-link>



        <table
            v-if="GET_ARRAY_ITEMS.length"
            class="table table-hover"
        >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>

            <tr
                v-for="item in GET_ARRAY_ITEMS"
                :key="item.id"
            >
                <td> {{ item.id }}</td>
                <td> {{ item.name }}</td>
                <td>
                    <router-link class="btn btn-info" :to="'/currencyPairs/'+item.id ">
                        Show
                    </router-link>
                </td>
            </tr>

            </tbody>
        </table>

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

