<template>
    <div>
        <div v-if="loadind">
            <div>
                id: {{ item.id }}
                title: {{ item.title }}
            </div>

<!--            <img :src="GET_basicPathImage" alt="">-->
            <!--        <img src="./../backend/public/storage/image/KDqbwQCO7zPl9mLLiz1AkwfykhyHDeLS9qlgCwYi.jpg" alt="">-->
            <!--        <img :src=" '/backend/public/storage/' + GET_SHOW_ITEM.image " alt="">-->
        </div>
        <div v-else>
            <h1>
                1221
            </h1>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "RecordsShow",
    data: () => ({
        loadind: false,

        item : null,
    }),
    computed:{
        ...mapGetters('records', ['GET_SHOW_ITEM']),
        ...mapGetters('basic', ['GET_basicPathImage'])
    },
    async created() {

    },
    async mounted()
    {
        this.$store.dispatch('records/ACTION_SHOW_SEND_AXIOS', this.$route.params.id).then( () => {
            // setTimeout(() => {
            //     console.log(this.GET_SHOW_ITEM)
            // }, 500)
            this.loadind = true;
            this.item = this.GET_SHOW_ITEM
        })

    }
}
</script>

