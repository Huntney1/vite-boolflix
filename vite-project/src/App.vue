<script>
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


}
</script>

<template lang="">
 
    <AppHeader />
    <AppMain />
  
</template>

<style lang="scss">
 @import 'node_modules/bootstrap/scss/bootstrap';
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
  background-color: #141414;
  font-family: 'Bebas Neue', cursive, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
}

</style>
