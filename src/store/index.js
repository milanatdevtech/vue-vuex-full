 import { createStore } from 'vuex'

const store = createStore({
    strict: true,
    state: {
        products: [
            {id: 1, name: 'Product 001', price: 20, description: 'Lorem ipsum dolor sit amet'},
            {id: 2, name: 'Product 002', price: 40, description: 'Lorem ipsum dolor sit amet'},
            {id: 3, name: 'Product 003', price: 60, description: 'Lorem ipsum dolor sit amet'},
            {id: 4, name: 'Product 004', price: 80, description: 'Lorem ipsum dolor sit amet'},
            {id: 5, name: 'Product 005', price: 100, description: 'Lorem ipsum dolor sit amet'}
        ],
        cart: [],
        searchFilter: '',
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map( product => {
                return {
                    id: product.id,
                    name:  '***' + product.name + '***',
                    price: product.price / 2,
                    description: product.description,
                };
            });
            return saleProducts.filter(
                product => product.name.toLowerCase().includes(state.searchFilter.toLowerCase())
            );
        },
        carts: (state) => {
            var cartProducts = state.cart.map( product => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                };
            });
            console.error(state.cart);
            return cartProducts;
        },
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach( product => {
                product.price -= payload
            });
        },
        
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        },
        
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        }, 

        SET_SEARCH_FILTER(state, search) {
            state.searchFilter = search;
        }      
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload);
            }, 2000);
        },

        addToCart(context, payload) {
            console.log('add to cart action: ', payload);
            context.commit('ADD_TO_CART', payload);
        },

        removeFromCart(context, productId) {
            context.commit('REMOVE_FROM_CART', productId);
        },
        setSearchFilter(context, payload) {
            context.commit('SET_SEARCH_FILTER', payload);
        }
    }
});

export default store;