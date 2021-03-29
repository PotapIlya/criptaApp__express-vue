<template>
    <div id="app">
        <div class="container">
            <Nav />
            <Alert />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Nav from './components/basic/Nav'
    import Alert from './components/basic/Alert'
    export default {
        name: 'frontend',
        components:{
            Nav,
            Alert
        },

    }
</script>


<style>

input, textarea{
    border: 1px solid #000 !important;
}
</style>