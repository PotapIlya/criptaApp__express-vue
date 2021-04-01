<template>
    <div v-if="form.id !== null">
        <input type="text" v-model="form.name">

        <router-link class="btn btn-info" to="/currencyPairs">
            Валюты
        </router-link>

        <button @click="deleteItem">
            delete
        </button>
        <button @click="updateItem">
            update
        </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "currencyPairsShow",
    computed:{
        ...mapGetters('currencyPairs', ['GET_SHOW_ITEM']),
    },
    data: () => ({
        item: null,
        form: {
            id: null,
            name: '',
        }
    }),
    watch:{
        GET_SHOW_ITEM(){
            this.checkShowItem();
        }
    },
    mounted() {
        this.$store.dispatch('currencyPairs/ACTION_SHOW_SEND_AXIOS', this.$route.params.id).then( () =>
        {
           this.checkShowItem();
        })
    },
    methods: {
        checkShowItem(){
            if (this.GET_SHOW_ITEM === null){
                this.$router.push('../currencyPairs')
            } else{
                this.form.id = this.GET_SHOW_ITEM.id;
                this.form.name = this.GET_SHOW_ITEM.name;
            }
        },
        updateItem(){
           if (this.form.name !== '')
           {
               this.$store.dispatch('currencyPairs/ACTION_UPDATE_SEND_AXIOS', this.form).then( (res) => {
                   if ( res.status === 200 ){
                       this.$store.dispatch('basic/SEND_MESSAGE_ALERT', 'Success')
                   }
               })
           }
        },
        deleteItem(){
            this.$store.dispatch('currencyPairs/ACTION_DELETE_SEND_AXIOS', this.form).then( (res) => {

                if ( res.status === 500 ){
                    this.$store.dispatch('basic/SEND_MESSAGE_ALERT', res.data.message)
                }
            })
        },
    }
}
</script>