import { reactive } from 'vue'

export const store = reactive({
    apiKey: 'e7fcd33c417cee689daaf756efeb4299',

    api_Url: 'https://api.themoviedb.org/3/search/movie?api_key=e7fcd33c417cee689daaf756efeb4299&language=en-US&query=',
    apiSerie: 'https://api.themoviedb.org/3/search/tv?api_key=e7fcd33c417cee689daaf756efeb4299&language=en-US&query=',
    
    apiFlags: 'https://countryflagsapi.com/png/ae',
    
    
    movieArr: [],
    serieArr: [],
    


});