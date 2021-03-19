<template>
    <div>
        id: {{ GET_SHOW_ITEM.id }}
        title: {{ GET_SHOW_ITEM.title }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "RecordsShow",
    computed:{
        ...mapGetters('records', ['GET_SHOW_ITEM'])
    },
    created() {
        this.$store.dispatch('records/ACTION_SHOW_SEND_AXIOS', this.$route.params.id)
    }
}
</script>

