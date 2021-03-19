<template>
    <div id="app">
          <Nav />
          <router-view></router-view>
    </div>
</template>

<script>
    import Nav from './components/basic/Nav'
    export default {
        name: 'frontend',
        components:{
            Nav
        },

    }
</script>


<style>

input, textarea{
    border: 1px solid #000 !important;
}
</style>