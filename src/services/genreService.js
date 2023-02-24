import {apiService} from "./apiService";
import {genreURL} from "../configs";

const genreService = {
    getAll: () => apiService.get(genreURL)
}

export {
    genreService
}