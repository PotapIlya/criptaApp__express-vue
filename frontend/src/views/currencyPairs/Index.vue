<template>
    <div>
        <h1>Валюты</h1>
        <router-link to="/currencyPairs/create">
            Add
        </router-link>

        <ul v-if="arrayItems.length">
            <li v-for="item in arrayItems"
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
    name: "Index",
    data: () => ({
        input: '',
        arrayItems: [],
    }),
    computed: {
        ...mapGetters([
            'GET_HREF',
            'GET_CURRENCY_PAIRS'
        ]),

    },
    methods:{
        ...mapActions([
            'ACTION_SEND_AXIOS'
        ]),

    },
    mounted()
    {

        console.log(
            this.$store.dispatch('someAsyncTask')
        )


        // console.log(this.GET_CURRENCY_PAIRS, '!!')


        //
        // axios.get( this.GET_HREF+'currencyPairs')
        //     .then(res => {
        //         this.arrayItems = res.data;
        //     })
        //     .catch(error => {
        //         console.log(error.body)
        //     })
    }
}
</script>

