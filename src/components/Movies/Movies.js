import React, {useEffect} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filmActions} from "../../redux/slices/filmSlice";
import {Movie} from "./Movie";

import css from './styles/film.module.css'

const Movies = () => {
    const {films, page} = useSelector(state => state.films)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        dispatch(filmActions.getAll({page: query.get('page')}))
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
            {films.map(item => <Movie key={item.id} films={item}/>)}
        </div>
    );
};

export {Movies};