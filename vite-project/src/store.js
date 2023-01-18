import { reactive } from 'vue'

export const store = reactive({
    apiKey: 'e7fcd33c417cee689daaf756efeb4299',
    url: 'https://api.themoviedb.org/3/movie/550?api_key=e7fcd33c417cee689daaf756efeb4299&language=en-US&query=',
   
    moviesArr: [],
    selectMovie: 'Fight Club',


});