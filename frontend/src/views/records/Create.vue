<template>
    <ul style="display: flex; flex-direction: column">

        <li style="display: flex">
            <span>Валюта</span>
            <select v-model="form.currencyPairs" name="" id="">
                <option v-for="item in GET_ARRAY_ITEMS" :key="item.id" :value="item.id">
                    {{ item.name }}
                </option>
            </select>
        </li>
        <li style="display: flex">
            <span>Заголовок</span>
            <input type="text" v-model="form.title">
        </li>
        <li style="display: flex">
            <span>description</span>
            <textarea name="" v-model="form.description" id="description" cols="30" rows="10"></textarea>
        </li>
        <li style="display: flex">
            <span>price_start</span>
            <input type="number" v-model="form.price_start">
        </li>
        <li style="display: flex">
            <span>price_end</span>
            <input type="number" v-model="form.price_end">
        </li>
        <li style="display: flex">
            <span>count</span>
            <input type="number" v-model="form.count">
        </li>
        <li style="display: flex">
            <span>profit</span>
            <input type="number" v-model="form.profit">
        </li>
        <li style="display: flex">
            <span>side</span>
            <input type="text" v-model="form.side">
        </li>



        <button @click="send">Send</button>
    </ul>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "RecordsCreate",
    data: () => ({
       // FORM
        form: {
            currencyPairs: null,
            title: '',
            description: '',
            image: '',
            price_start: '',
            price_end: '',
            count: '',
            profit: '',
            side: false,
        },
        // END FORM

        arrayCurrencyPairs: [],


    }),
    computed: {
        ...mapGetters('currencyPairs', ['GET_ARRAY_ITEMS']),


        ...mapActions('currencyPairs', ['ACTION_GET_SEND_AXIOS'])
    },
    created() {
        if ( this.GET_ARRAY_ITEMS.length === 0 ){
           this.$store.dispatch('currencyPairs/ACTION_GET_SEND_AXIOS')
        }
    },
    mounted() {
        // this.currencyPairs = this.GET_ARRAY_ITEMS[0].id
    },

    methods:{
        send(){
            this.$store.dispatch('records/ACTION_CREATE_SEND_AXIOS', this.form)
        }

    }
}
</script>

