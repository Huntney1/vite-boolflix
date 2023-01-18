<script>
export default {
    props: {
        movie: Object,
    },
    data() {
        return {
            index: 0,
        }
    },
};
</script>

<template lang="">
    <div class="card">
        <img class="img-fluid" :src="movie.poster_pat"></img>
        <h4>Titolo:"{{ movie.title }}"</h4>
            <h5>Titolo originale:"{{ movie.original_title }}"</h5>
        <div>
            <p>lingua:"{{ movie.original_language }}"</p>
            <p>voto:"{{ movie.vote_average }}"</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}
</style>