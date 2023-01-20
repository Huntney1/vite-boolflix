<script>
export default {
    data(){
        return{
            value: ''
        }
    }
    
}
</script>
<template lang="">
<div class="input-group mb-3">

<!--* ricerca film e serie ( input & button ) + Keyup.Enter -->
<input type="text" class="form-control" placeholder="Cerca film o serie  " aria-label="Recipient's username" aria-describedby="button-add2"
v-model="value" @keyup.enter="$emit ('buttonClick', value)">
<button class="btn btn-outline-secondary" type="button" id="button-2" @click="$emit ('buttonClick', value)">cerca</button>

</div>
</template>
<style lang="scss">

/*.form-control{
     width: 400px; 
    height: 2rem;
    border: 2px solid #e50914; 
}*/

#button-2{
    /* border: none; */
    width: 5em;
    letter-spacing: 1.5px;
    background-color: #e50914;
    color: black;
    margin-left: 0.1em;
    font-size: 15px;
    padding: 0.2em;
    border: 2px solid  #e50914;
    text-shadow: 0px 1px 1px #141414;

    &:hover{
        color: #e50914;
        background-color: black;
        text-shadow: 1px 1.5px 3px #e50914 ;
    }
}


</style>