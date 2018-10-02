<template>
    <div id="app">
        <ProductList/>
        <hr>
        <ShoppingCart/>
    </div>
</template>

<script>
    import ProductList from './components/ProductList.vue';
    import ShoppingCart from './components/ShoppingCart.vue';

    let App = {
        name: 'app',
        components: {
            ProductList,
            ShoppingCart
        }
    };
    export default App;
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
