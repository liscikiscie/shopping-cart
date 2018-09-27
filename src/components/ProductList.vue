<template>
    <div class="product-list">
        <Product
                v-for="product in products"
                :key="product.id"
                :title="product.title"
                :price="product.price"
        />
    </div>
</template>

<script>
    import Product from './ProductList';
    import shop from '../api/shop'

    let ProductList = {
        name: 'ProductList',
        components: {
            Product
        },
        data() {
            return {
                products: []
            }
        },
        created() {
            shop.getProducts(products => {
                this.products = products
            })
        }
    };
    export default ProductList;
</script>

<style scoped>

</style>
