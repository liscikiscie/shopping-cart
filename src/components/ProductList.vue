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
                {{product.title}} - {{product.price}}
            </li>
        </ul>
    </div>
</template>

<script>

    let ProductList = {
        name: 'ProductList',
        data() {
            return {
                loading: false
            }
        },
        computed: {
            products() {
                return this.$store.getters.availableProducts;
            }
        },
        created() {
            this.loading = true;
            this.$store.dispatch('fetchProducts')
                .then(() => this.loading = false)
        }
    };
    export default ProductList;
</script>

<style scoped>

</style>
