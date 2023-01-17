<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import axios from "axios";
import { store } from "./store.js";

export default{
  components:{
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store
  }
},
}

</script>

<template lang="">
  <AppHeader />
  <AppMain />
    
</template>

<style lang="scss">

@use "./components/style/generals.scss" as *;

</style>
