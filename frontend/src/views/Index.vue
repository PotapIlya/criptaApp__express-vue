<template>
    <div>
      312321
        <h1 @click="click">12 3</h1>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        name: "Index",
        computed:{
          // ...mapState({
          //   userAvatar: state => state.user.userAvatar
          // }),
          ...mapGetters('user', ['getActiveUsers'])
          // ...mapActions("user", ["getUserInfo"]),
        },
        methods:{
            click(){
              console.log( this.getActiveUsers )
            }
        },
        mounted()
        {
          // this.$store.commit('user/setUserInfo', 'POTAP')
          // this.$store.dispatch('user/getUserInfo')
          // console.log( this.getActiveUsers )
          // this.getUserInfo
          // this.$store.dispatch('user/getUserInfo')



        }
    }
</script>

