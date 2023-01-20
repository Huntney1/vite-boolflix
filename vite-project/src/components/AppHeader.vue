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

    //* chiamata api e collegamento film al imput search! 
    searchFilm(input) {
      let apiCall = store.api_Url + input;
      axios.get(apiCall).then((response) => {
        store.movieArr = response.data.results;
      });
    },

    //* chiamata api e collegamento serie al imput search! 
    searchSerie(input) {
      let Serie = store.apiSerie + input;
      axios.get(Serie).then((response) => {
        store.serieArr = response.data.results;
      });
    },

    //* ricerca film & serie
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
            <div class="row d-flex p-3  align-items-center">
                <div class="col-4">
                  <!--* Logo Boolflix -->
                    <div>
                        <a href="https://fontmeme.com/netflix-font/">
                          <img src="https://fontmeme.com/permalink/230119/38f1434baa5a03813a7f7a2bc56dafc2.png" alt="netflix-font" border="0"></a>
                    </div>
                </div>
                <div class="col-5 ">
                    <Search @buttonClick="ricercaTutto"></Search>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use "../components/style/partials/variables" as *;
@use "../components/style/partials/mixins" as *;

header{

    height: 7em;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items:center ;
    padding: 1rem;
    border-bottom: 4px solid #C50914;
   
}

</style>