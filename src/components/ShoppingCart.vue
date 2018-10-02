
<template>
    <div class="product">
        <h1>Shopping cart</h1>
        <ul>
            <li v-for="product in products">
                {{product.title}} - {{product.price}}- {{product.quantity}}
            </li>
        </ul>
    </div>
</template>

<script>
    let ShoppingCart = {
        name: 'ShoppingCart',
        computed: {
            products(){
                return this.$store.getters.cartProducts
            }
        }
    };
    export default ShoppingCart;
</script>

<style scoped>

</style>
