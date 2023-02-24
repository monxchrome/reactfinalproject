import {filmReducer} from "./slices/filmSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer} from "./slices/genreSlice";

const rootReducer = combineReducers({
    films: filmReducer,
    genres: filmReducer,
    genre: genreReducer
})

const setup = () => configureStore({
    reducer: rootReducer
})

export {
    setup
}