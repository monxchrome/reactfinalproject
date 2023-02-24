import {apiService} from "./apiService";
import {urls} from "../configs";

const filmService = {
    getAll: (page = 1) => apiService.get(urls.getMovies, {params:{page}}),
    getWithGenres: (page = 1, id) => apiService.get(`${urls.getMovies}?page=${page}&with_genres=${id}`),
    searchMovies: (query) => apiService.get(`${urls.search}?query=${query}&page=1&include_adult=false`),
    getById: (id) => apiService.get(`${urls.getMovieId}/${id}`),
    getVideo: (id) => apiService.get(`${urls.getMovieId}/${id}/videos`)
}

export {
    filmService
}