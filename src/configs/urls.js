const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500'
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list'

const urls = {
    getMovieId: '/movie',
    getMovies: '/discover/movie',
    search: '/search/movie',
}

export {
    baseURL,
    posterURL,
    genreURL,
    urls
}
