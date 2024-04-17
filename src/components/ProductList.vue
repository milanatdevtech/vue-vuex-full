<template>
    <div>
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-12">
                                <h5><span class="glyphicon glyphicon-shopping-cart"></span> Product List</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row"  v-for="product in saleProducts" :key="product.id">
            
                        <div class="col-md-3"><img class="img-responsive" src="http://placehold.it/100x70">
                        </div>
                        <div class="col-md-5">
                            <h4 class="product-name"><strong>{{ product.name }}</strong></h4>
                            <p>{{ product.description }}</p>
                        </div>
                        <div class="col-md-4">
                            <div class="col-md-12 text-end">
                                <h6 class="price">${{ product.price }}</h6>
                            </div>
                           
                            <div class="col-md-12 text-end">
                                <button class="btn btn-primary" @:click="addToCart(product.id)">Add To Cart</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="row text-center">
                        <div class="col-md-9">
                                &nbsp;
                        </div>
                        <div class="col-md-3 text-end">
                            <button class="btn btn-danger" v-on:click="reducePrice(4)">Reduce Price</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        products(){
            return this.$store.state.products;
        },
        ...mapGetters([
            'saleProducts'
        ])
    },
    methods: {
        ...mapActions([
            'reducePrice'
        ]),
        addToCart(id) {
            console.log('add to cart')
            this.$store.dispatch('addToCart', this.saleProducts.find(x => x.id === id));
        }

    }
}
</script>

<style scoped>
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>