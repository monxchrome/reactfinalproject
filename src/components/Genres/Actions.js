import React, {useEffect, useState} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";
import {Movie} from "../Movies/Movie";

import css from '../Movies/styles/film.module.css'
import {genreService} from "../../services/genreService";

const Actions = () => {
    const {genres, page} = useSelector(state => state.genres)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'})
    const [genre, setGenre] = useState([])
    const genresArr = genre.genres;
    const filterGenres = genresArr?.filter(item => item.name === 'Action')
    const takeObj = filterGenres?.[0]
    const actionID = takeObj?.id


    useEffect(() => {
        dispatch(filmActions.getByGenre({page: query.get('page'), id: actionID}))
        genreService.getAll().then(({data}) => setGenre(data))
    }, [dispatch, query])

    return (
        <div className={css.Father}>
            <div className={css.Wraps}>
                <nav className={css.navMenu}>
                    <NavLink to={'/genres'}><a href="/genres">Genres</a></NavLink>
                    <div className={css.dot}></div>
                </nav>
            </div>
            <div className={css.ButtonsDiv}>
                <button role='button' className={css.bubblyButton} disabled={page === 1} onClick={() => setQuery(query => ({page: +query.get('page') -1}))}>Previous Page</button>
                <button role='button' className={css.bubblyButton} disabled={page === 500} onClick={() => setQuery(query => ({page: +query.get('page') +1}))}>Next Page</button>
            </div>
            {genres.map(item => <Movie key={item.id} films={item}/>)}
        </div>
    );
};

export {Actions};