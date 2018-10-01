<template>
    <div class="product">
        <ul>
            <li>{{productTitle}} - {{productPrice}}</li>
        </ul>
    </div>
</template>

<script>
    let Product = {
        name: 'Product',
        props: {
            id: Number,
            title: String,
            price: Number
        },
        data() {
            return {
                productId: this.id,
                productTitle: this.title,
                productPrice: this.price
            }
        }
    };
    export default Product;
</script>

<style scoped>

</style>
