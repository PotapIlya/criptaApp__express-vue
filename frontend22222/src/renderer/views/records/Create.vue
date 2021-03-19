<template>
    <div>



        <select v-model="currencyPairs" name="" id="">
            <option v-for="item in arrayCurrencyPairs" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>
        </select>

        <input type="text" v-model="title">
        <textarea name="" v-model="description" id="description" cols="30" rows="10"></textarea>

        <input type="number" v-model="price_start">
        <input type="number" v-model="price_end">
        <input type="number" v-model="count">
        <input type="number" v-model="profit">
        <input type="text" v-model="side">


        <button @click="send">Send</button>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "Create",
    data: () => ({
       // FORM
        currencyPairs: null,
        title: '',
        description: '',
        image: '',
        price_start: '',
        price_end: '',
        count: '',
        profit: '',
        side: false,
        // END FORM

        arrayCurrencyPairs: [],


    }),
    computed: {
        ...mapGetters([
            'GET_HREF'
        ])
    },
    mounted() {
        axios.get( this.GET_HREF+'currencyPairs')
            .then(res => {
                this.arrayCurrencyPairs = res.data;


            })
            .catch(error => {
                console.log(error.body)
            })
    },
    methods:{
        send()
        {

            axios.post( this.GET_HREF+'records',
        {
            currencyPairs: this.currencyPairs,
            title: this.title,
            description: this.description,
            image: this.image,
            price_start: this.price_start,
            price_end: this.price_end,
            count: this.count,
            profit: this.profit,
            side: this.side,
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error.body)
            })
        }
    }
}
</script>

