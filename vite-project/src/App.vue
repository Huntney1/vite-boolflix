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
      let myUrl = `${store.url}${store.selectMovie}`
      axios.get(myUrl).then((response) => {
        store.moviesArr = response.data.results;
      });
    }
  }
}
</script>

<template lang="">
 <header>
    <AppHeader />
  </header>
  <main class="bg-secondary">
    <AppMain />
  </main>
</template>

<style lang="scss">
 @import 'node_modules/bootstrap/scss/bootstrap';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
