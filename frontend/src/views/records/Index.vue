<template>
    <div>
        <h1>Записи</h1>
        <router-link to="/records/create">
            Add
        </router-link>


        <ul v-if="GET_ARRAY_ITEMS.length">
            <li v-for="item in GET_ARRAY_ITEMS"
                :key="item.id">
                <router-link :to=" '/records/'+item.id ">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>


    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "RecordsIndex",
    data: () => ({

    }),
    computed:{
        ...mapGetters('records', ['GET_ARRAY_ITEMS'])
    },
    created() {
        if ( this.GET_ARRAY_ITEMS.length === 0 ){
            this.$store.dispatch('records/ACTION_GET_SEND_AXIOS')
        }
    }
}
</script>

