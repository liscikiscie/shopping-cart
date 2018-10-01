import Vuex from 'vuex'
import Vue from 'vue'
import shop from '../api/shop'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {    //data
        products: []
    },
    getters: {
        availableProducts( state, getters ) {
            return state.products.filter(products => products.inventory > 0)
        }
    },
    actions: {
        fetchProducts( {commit} ) {
            return new Promise(( resolve, reject ) => {
                //make the call
                //run setProducts mutation
                shop.getProducts(products => {
                    commit('setProducts', products)
                    resolve()
                })
            })
        }
        // addToCart( context, product ) {
        //     if ( product.inventory > 0 ) {
        //         context.commit('pushProductToCart', product);
        //     } else {
        //         //out of stock message
        //     }
        // }
    },
    mutations: {
        setProducts( state, products ) {
            //update products
            state.products = products;
        }
    }
});
