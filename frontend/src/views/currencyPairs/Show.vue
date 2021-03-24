<template>
    <div v-if="item !== null">
        {{ item.name }}
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
    }),
    mounted() {
        this.$store.dispatch('currencyPairs/ACTION_SHOW_SEND_AXIOS', this.$route.params.id).then( () => {
            this.item = this.GET_SHOW_ITEM
        })
    }
}
</script>