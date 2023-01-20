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

.card{
   min-width: 18em;
    min-height: 27em;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
    padding: 0.25rem;
    background-color: #C50914;

    .img-cover{
      height: 100%;
      object-fit: cover;
      border-radius: 0.2em;
    }

    .card-info{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color:rgba(0, 0, 0, 0.8) ;
      color:white
    }
    .language-img{
      width: 30px;
    }

    .titolo{
      margin-bottom: 1rem;
      color: #C50914;
    }
}


</style>
