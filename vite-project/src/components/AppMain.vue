<script>
import { store } from "../store.js";


import Film from "./Film.vue";
import Serie from "./Serie.vue";


export default {
    components: {
        Film,
        Serie,
    },
    data() {
        return {
            store,
            
        };
    },
   
};
</script>

<template lang="">
    <div class="container my-4">
  <div id="text-white">
      ho trovato - {{store.movieArr.length}} - contenuti 
  </div>
   
  <div class="row row-cols-6 gap-4 justify-content-between ">
      <cardFilm v-for="(item, index) in store.movieArr" :key="index" :movie="item"></cardFilm>
      <Serie v-for="(item, index) in store.serieArr" :key="index" :cardSerie="item"></Serie>
  
  </div>

</div>
</template>

<style lang="scss" scoped>
@use '../components/style/partials/mixins' as *;
@use '../components/style/partials/variables' as *;

#text-white{
    color: white;
    font-size: 1.5em;
    margin-top: 2em
}
</style>