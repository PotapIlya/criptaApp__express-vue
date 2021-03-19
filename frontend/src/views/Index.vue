<template>
    <div>
        <h1>123</h1>
    </div>
</template>

<script>
    import {mapGetters } from 'vuex'
    export default {
        name: "Index",
        computed:{
            ...mapGetters([
                'getData'
            ])
        },
        mounted() {
            console.log(this.$store.dispatch('actionData'))
            console.log(this.getData)
        }
    }
</script>

