<template>
    <div class="product">
        <h1>Shopping cart</h1>
        <ul>
            <li v-for="product in products">
                {{product.title}} - {{product.price | currency}}- {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total | currency}}</p>
        <button @click="checkout">CheckOut</button>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    let ShoppingCart = {
        name: 'ShoppingCart',
        computed: {

            ...mapGetters('cart', {
                products: 'cartProducts',
                total: 'cartTotal'
            }),

            ...mapState('cart', {
                checkoutStatus: state => state.checkoutStatus
            })
        },
        methods: {
            ...mapActions('cart', [ 'checkout' ])
        }
    };
    export default ShoppingCart;
</script>

<style scoped>

</style>
