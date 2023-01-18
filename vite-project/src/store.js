import { reactive } from 'vue'

export const store = reactive({
    apiKey: 'e7fcd33c417cee689daaf756efeb4299',
    url: 'https://api.themoviedb.org/3/search/movie?api_key=e7fcd33c417cee689daaf756efeb4299&language=en-US&query=',
    moviesArr: [],
    selectMovie: 'Harry Potter',


});