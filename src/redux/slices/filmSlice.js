import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filmService} from "../../services/filmService";

const initialState = {
    films: [],
    searchFilms: [],
    next: null,
    prev: null,
    loading: null,
    setFilms: null,
    genres: [],
    query: null,
    video: []
}

const getAll = createAsyncThunk(
    'filmSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await filmService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getByGenre = createAsyncThunk(
    'genreSlice/getByGenre',
    async ({page, id}, thunkAPI) => {
        try {
            const {data} = await filmService.getWithGenres(page, id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'filmSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await filmService.getById(id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getVideo = createAsyncThunk(
    'filmSlice/getVideo',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await filmService.getVideo(id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const filmSlice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers: {
        setFilmsUpdate: (state, action) => {
            state.setFilms = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
            const {page, results} = action.payload
            state.films = results
            state.page = page
            state.page = page
            })
            .addCase(getByGenre.fulfilled, (state, action) => {
                const {page, results} = action.payload

                state.genres = results
                state.page = page
                state.page = page
            })
            .addCase(getById.fulfilled, (state, action) => {
                const {results} = action.payload
                state.films = results
            })
            .addCase(getVideo.fulfilled, (state, action) => {
                const {results} = action.payload
                state.video = results
            })
})


const {reducer: filmReducer, actions: {setFilmsUpdate}} = filmSlice

const filmActions = {
    getAll,
    getById,
    getByGenre,
    setFilmsUpdate
}

export {
    filmReducer,
    filmActions
}