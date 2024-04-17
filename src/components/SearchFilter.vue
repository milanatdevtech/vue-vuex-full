<template>
    <div class="alert alert-secondary">
        <div class="input-group mb-3">
            <button class="btn btn-secondary" @click="searchMe">Search</button>
            <input type="text" class="form-control" v-model="search"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: ''
            }
        },
        methods: {
            searchMe() {
                this.$store.dispatch('setSearchFilter', this.search);
            }
        }
    }
</script>