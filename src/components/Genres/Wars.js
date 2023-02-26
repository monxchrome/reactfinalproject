import React, {useEffect, useState} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {filmActions} from "../../redux";
import {Movie} from "../Movies/Movie";

import css from '../Movies/styles/film.module.css'
import {genreService} from "../../services";
import {Loading} from "../Loading/Loading";

const Wars = () => {
    const {genres, page, loading} = useSelector(state => state.genres)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'})
    const [genre, setGenre] = useState([])
    const genresArr = genre.genres;
    const filterGenres = genresArr?.filter(item => item.name === 'War')
    const takeObj = filterGenres?.[0];
    const actionID = takeObj?.id


    useEffect(() => {
        dispatch(filmActions.getByGenre({page: query.get('page'), id: actionID}))
        genreService.getAll().then(({data}) => setGenre(data))
    }, [dispatch, query, actionID])

    return (
        <div>
            <div className={css.Father}>
                <div>
                    <div className={css.Wraps}>
                        <nav className={css.navMenu}>
                            <NavLink to={'/genres'}><a href="/genres">Genres</a></NavLink>
                            <div className={css.dot}></div>
                        </nav>
                    </div>
                    <div className={css.Wr}>
                        <div className={css.ButtonsDiv}>
                            <button className={css.bubblyButton} disabled={page === 1} onClick={() => setQuery(query => ({page: +query.get('page') -1}))}>Previous Page</button>
                            <button className={css.bubblyButton} disabled={page === 500} onClick={() => setQuery(query => ({page: +query.get('page') +1}))}>Next Page</button>
                        </div>
                    </div>
                </div>
                <div className={css.TextDiv}>
                    <h4 className={css.Text}>Movies</h4>
                </div>
            </div>
            <div className={css.loading}>

            </div>
            <div className={css.loading}>
                {loading && <Loading/>}
            </div>
            <div className={css.films}>
                {genres.map(item => <Movie key={item.id} films={item}/>)}
            </div>
        </div>
    );
};

export {Wars};