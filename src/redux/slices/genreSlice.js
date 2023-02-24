import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";

const initialState = {
    genre: [],
    setGenre: null,
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenre: (state, action) => {
            state.setFilms = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genre = genres
            })
})

const {reducer: genreReducer, actions: {setGenre}} = genreSlice

const genreActions = {
    getAll,
    setGenre
}

export {
    genreReducer,
    genreActions
}