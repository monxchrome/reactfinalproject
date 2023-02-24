import React, { useState } from "react";
import css from './styles/search.module.css'
import {filmService} from "../../services/filmService";
import {SearchMovie} from "./SearchMovie";

const SearchMovies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        try {
            // const response = await axios.get(url);
            const response = await filmService.searchMovies(query)
            setMovies(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={css.Form}>
            <form onSubmit={searchMovies}>
                <input
                    type="search"
                    placeholder="Search for a movie"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            <div className={css.over}>
                {movies.map((movie) => (
                        // <div key={movie.id} item={movie}>{movie.title}</div>
                    <SearchMovie key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default SearchMovies;
