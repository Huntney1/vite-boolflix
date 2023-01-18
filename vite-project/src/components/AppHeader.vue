<script>

import Search from "./Search.vue";

export default{
    data() {
        return {
            
        }
    },
    components: {
        Search,
    }
};

</script>

<template lang="">

    <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-9">
        <div>
          <h1 class="m-0 text-danger">BOOLFLIX</h1>
        </div>
      </div>
      <div class="col-3">
        <AppSearch></AppSearch>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../components/style/partials/variables' as *;
@use '../components/style/partials/mixins' as *;


header {
  background-color: black;
  color: white;
  padding: 20px;
}

</style>