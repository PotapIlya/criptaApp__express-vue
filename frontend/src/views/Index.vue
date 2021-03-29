<template>
    <div>
      312321
        <h1 @click="click">12 3</h1>
    </div>

    <button @click="error">error</button>

</template>

<script>
    import { mapGetters } from 'vuex'


    export default {
        name: "Index",
        computed:{

        },
        methods:{
            error(){
                this.$store.dispatch('basic/SEND_MESSAGE_ALERT', 'dawdaw')
            }
        },
        mounted() {
            //
        }
    }
</script>

