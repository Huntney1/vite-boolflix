<script>
import { store } from "../store";
import Search from "./Search.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Search,
  },

  methods: {
    searchFilm(input) {
      let apiCall = store.api_Url + input;
      axios.get(apiCall).then((response) => {
        store.movieArr = response.data.results;
      });
    },
    searchSerie(input) {
      let Serie = store.apiSerie + input;
      axios.get(Serie).then((response) => {
        store.serieArr = response.data.results;
      });
    },
    ricercaTutto(input) {
      this.searchFilm(input);
      this.searchSerie(input);
    },
  },
};
</script>

<template lang="">

    <header>
    
        <div class="container">
            <div class="row d-flex p-3 justify-content-between align-items-center">
                <div class="col-4">
                    <div>
                        <h1 class="m-0 text-danger">BOOLFLIX</h1>
                    </div>
                </div>
                <div class="col-8 ">
                    <Search @buttonClick="ricercaTutto"></Search>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use "../components/style/partials/variables" as *;
@use "../components/style/partials/mixins" as *;
</style>