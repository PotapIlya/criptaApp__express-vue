<template>
    <div
        v-if="GET_statusAlert && GET_messageAlert"
        @click="stopShow"
        :class="{ 'active' : !statusTimer }"
         class="alert__custom alert alert-danger h4"
        role="alert"
    >
        {{ GET_messageAlert }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Alert",
    computed:{
        ...mapGetters('basic', ['GET_statusAlert', 'GET_messageAlert'])
    },
    data: () => ({
        statusTimer: true,
    }),
    watch: {
        GET_statusAlert()
        {
            if (this.GET_statusAlert )
            {
                this.on_off_timer();
            }
        }
    },
    methods:{
        stopShow(){
            this.statusTimer = !this.statusTimer;
            if (this.statusTimer){
                this.on_off_timer();
            }
        },
        on_off_timer()
        {
            setTimeout(() => {
                if ( this.statusTimer ) {
                    this.$store.dispatch('basic/OFF_ALERT')
                }
            }, 5000)
        }
    },
}
</script>
