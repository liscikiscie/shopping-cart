/* eslint-disable */
<template>
    <div class="product-list">
        <h1>Product List</h1>
        <img
                v-if="loading"
                src="https://i.imgur.com/JfPpwOA.gif"
                height="150"
        >
        <ul v-else>
            <li v-for="product in products">
                {{product.title}} - {{product.price | currency}} => {{product.inventory}}
                <button
                        :disabled="!productIsInStock(product)"
                        @click="addProductToCart(product)"
                >Add to cart
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    let ProductList = {
        name: 'ProductList',
        data() {
            return {
                loading: false,
                productIndex: 1
            }
        },
        methods: {
            ...mapActions({
                fetchProducts: 'products/fetchProducts',
                addProductToCart: 'cart/addProductToCart'
            })
        },
        computed: {
            ...mapState('products', {
                products: state => state.items
            }),
            ...mapGetters({
                productIsInStock: 'products/productIsInStock'
            }),
        },
        created() {
            this.loading = true;
            this.fetchProducts()
                .then(() => this.loading = false)
        }
    };
    export default ProductList;
</script>

<style scoped>

</style>
