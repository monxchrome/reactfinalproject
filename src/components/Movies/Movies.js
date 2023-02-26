import React, {useEffect} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {filmActions} from "../../redux";
import {Movie} from "./Movie";
import css from './styles/film.module.css'
import {Loading} from "../Loading/Loading";

const Movies = () => {
    const {films, page, loading} = useSelector(state => state.films)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        dispatch(filmActions.getAll({page: query.get('page')}))
    }, [dispatch, query])

    return (
        <div className={css.FatherWrap}>
            <div className={css.Father}>
                <div className={css.MainWrap}>
                        <nav className={css.navMenu}>
                            <NavLink to={'/genres'}><a href="/genres">Genres</a></NavLink>
                            <div className={css.dot}></div>
                        </nav>
                    <div className={css.Wr}>
                        <div className={css.ButtonsDiv}>
                            <button className={css.bubblyButton} disabled={page === 1} onClick={() => setQuery(query => ({page: +query.get('page') -1}))}>Previous Page</button>
                            <button className={css.bubblyButton} disabled={page === 500} onClick={() => setQuery(query => ({page: +query.get('page') +1}))}>Next Page</button>
                        </div>
                    </div>
                    <div className={css.TextDiv}>
                        <h4 className={css.Text}>Movies</h4>
                    </div>
                </div>
            </div>
            <div className={css.loading}>
                {loading && <Loading/>}
            </div>
            <div className={css.films}>
                {films.map(item => <Movie key={item.id} films={item}/>)}
            </div>
        </div>
    );
};

export {Movies};