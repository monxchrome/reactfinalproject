import React, {useEffect, useState} from 'react';
import {MovieDetails} from "./MovieDetails";
import {filmService} from "../../services/filmService";

const MoviesDetails = ({movieID}) => {
    const [film, setFilm] = useState([])

    useEffect(() => {
        filmService.getById(movieID).then(({data}) => setFilm([data]))
    }, [movieID])

        return (
            <div>
                {film.map(item => <MovieDetails key={item.id} film={item}/>)}
            </div>
        );
};

export {MoviesDetails};