<template>
    <div id="cart">
        <h2>Shoping cart</h2>
        <ul>
            <li v-for="product in carts" :key="product.id">
                <div class="name">{{ product.name }}</div>
                <div class="price">£{{ product.price }}</div>
                <div class="text-end col-md-12">
                    <button class="btn btn-danger" @click="removeFromCart(product.id)"><i class="fa fa-danger"></i> remove</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
    //     carts(){
    //         return this.$store.state.carts;
    //     }
   
    ...mapGetters([
            'carts', 
        ]),
    // ...mapActions([
    //     'removeFromCart'
    // ])
    },
    methods: {
        removeFromCart(id) {
            console.log('removing ', id);
            this.$store.dispatch('removeFromCart', id);
        } 
    }

}
</script>

<style scoped>
    #cart ul li {
        list-style: none;
        min-height: 50px;
        border: 1px solid #f0e4e4;
        padding: 0.6rem;
        margin-top:20px;
    }
   
</style>