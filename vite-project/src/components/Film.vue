
<script>
import { store } from "../store";
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: {
    movie: Object,
  },
  methods: {
    getLenguage(valore) {
      let leng = "";
      if (valore.original_language) {
        switch (valore.original_language) {
          case "en":
            leng = "gb";
            break;
          case "ja":
            leng = "jp";
            break;
          case "ko":
            leng = "kr";
          default:
            leng = valore.original_language;
            break;
        }
        let upperLeng = leng.toUpperCase();
        return upperLeng;
      }
    },
    imageEmpty() {
      if (this.movie.poster_path != null) {
        return `https://image.tmdb.org/t/p/w342/${this.movie.poster_path}`;
      } else {
        return "non presente ";
      }
    },
    //* genero icone di stelle in base al voto medio di un valore
    stars(valore) {
      let num = Math.floor(valore.vote_average / 2);
      let starsarray = [];
      for (let i = 0; i < num; i++) {
        starsarray.push("fa-solid fa-star");
      }
      let starEmpty = 5 - num;
      for (let i = 0; i < starEmpty; i++) {
        starsarray.push("fa-regular fa-star");
      }
      return starsarray;
    },
    descriptionCut() {
      if (this.movie.overview.lenght > 150) {
        this.movie.overview = this.movie.overview.substring(0, 150) + "...";
        return this.movie.overview;
      }
      return this.movie.overview;
    },
  },
};
</script>
<template lang="">

<!--* creo mouse hover sull'immagine -->
<div class="card" @mouseenter=" hover = true" @mouseleave=" hover = false">
<img class="img-cover" :src="imageEmpty()" alt="movie.title">

<!--* contenuto hover con info -->
<div class="card-info" v-if="hover">
    <h3 class="card-title">{{movie.title}}</h3>
    <h3 class="titolo">titolo: {{movie.name}}</h3>
    <p>{{descriptionCut()}}</p>
    <h3>lingua {{movie.original_language}}</h3> 
    <!--  -->
    <div class="container-voto">

        <!--* utilizzo il ciclo v-for per generare le icone star diviso 2 per creare una media -->
        <i class="fa-solid fa-star stella-piena" v-for="(item, index) in Math.floor(movie.average / 2) "></i>

        <!--* genero icone piene per il numero di stelle rimanenti ( meno le stelle gia generate in precedenza ) -->
        <!--? la propriet?? `oggetto.everage` permette di calcolare il numero di stelle piene per il voto medio da visualizzare  -->
        <i class="fa-solid fa-star stella-piena" v-for="(item, index) in (5 - Math.floor(movie.average / 2)) "></i>

        <!--* stampo voto medio del film -->
        <h3 class="voto">voto {{movie.average}}</h3> 

    </div>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(movie)}.png`" alt="{{ movie.original_language }}">
    </div>
</div>
</template>

<style lang="scss">
.card {
  height: 100%;
}

.titolo {
  color: #e50914;
}

.voto {
  color: #e50914;
}
</style>