<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <search-filter></search-filter>
            </div>
            
            <div class="col-md-8">                
                <product-list></product-list>
            </div>
            <div class="col-md-4">
                <shoping-cart></shoping-cart>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShopingCart from './components/ShopingCart.vue'
import SearchFilter from './components/SearchFilter.vue'

export default {
    name: 'app',
    components: {
        'product-list': ProductList,
        'shoping-cart': ShopingCart,
        'search-filter': SearchFilter
    }
}
</script>

<style>
body{
    font-family: Ubuntu;
}
</style>