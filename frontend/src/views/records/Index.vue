<template>
    <div>
        <h1>Записи</h1>
        <router-link to="/records/create">
            Add
        </router-link>


        <ul v-if="arrayItems.length">
            <li v-for="item in arrayItems"
                :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: "Index",
    data: () => ({
        arrayItems: [],
    }),
    computed:{
        ...mapGetters([
            'GET_HREF'
        ])
    },
    mounted() {
        axios.get( this.GET_HREF+'records')
            .then(res => {
                this.arrayItems = res.data;
            })
            .catch(error => {
                console.log(error.body)
            })
    }
}
</script>

