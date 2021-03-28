<template>
    <div>
        <div v-if="item !== null">
            <div>
                id: {{ item.id }}
                title: {{ item.title }}
            </div>

<!--            <img :src="GET_basicPathImage" alt="">-->
            <!--        <img src="./../backend/public/storage/image/KDqbwQCO7zPl9mLLiz1AkwfykhyHDeLS9qlgCwYi.jpg" alt="">-->
            <!--        <img :src=" '/backend/public/storage/' + GET_SHOW_ITEM.image " alt="">-->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "RecordsShow",
    data: () => ({
        item : null,
    }),
    computed:{
        ...mapGetters('records', ['GET_SHOW_ITEM']),
        ...mapGetters('basic', ['GET_basicPathImage'])
    },
    mounted()
    {
        this.$store.dispatch('records/ACTION_SHOW_SEND_AXIOS', this.$route.params.id).then( () => {
            this.item = this.GET_SHOW_ITEM

            console.log(this.item)
        })

    }
}
</script>

