<script>
import axios from "axios"
import { store } from "./store.js";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";


export default{
  data() {
    return {
      store
    }
  },

  components:{
    AppHeader,
    AppMain,
  },

  created() {
    this.getMovies();
  },

  methods: {
    getMovies() {
      let myUrl = `${store.url}${store.selectedMovie}`
      axios.get(myUrl).then((response) => {
        store.moviesArr = response.data.results;
      });
    }
  }
}
</script>

<template lang="">
 <header>
    <AppHeader></AppHeader>
  </header>
  <main class="bg-secondary">
    <AppMain></AppMain>
  </main>
</template>

<style lang="scss">
  @use "./components/styles/generals.scss" as *;
</style>
