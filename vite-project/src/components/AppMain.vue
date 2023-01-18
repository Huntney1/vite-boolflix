<script>
import Card from "./Card.vue";

import { store } from "../store.js";

export default {
    components: {
        Card,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col m-3">
                <Card v-for="(item, index) in store.moviesList" :key="index" :movie="item"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../components/style/partials/mixins' as *;
@use '../components/style/partials/variables' as *;
</style>