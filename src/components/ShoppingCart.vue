<template>
    <div class="product">
        <h1>Shopping cart</h1>
        <ul>
            <li v-for="product in products">
                {{product.title}} - {{product.price | currency}}- {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total | currency}}</p>
        <button @click="$store.dispatch('checkout')">CheckOut</button>
        <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
    </div>
</template>

<script>
    let ShoppingCart = {
        name: 'ShoppingCart',
        computed: {
            products() {
                return this.$store.getters.cartProducts
            },
            total() {
                return this.$store.getters.cartTotal
            }
        }
    };
    export default ShoppingCart;
</script>

<style scoped>

</style>
