import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {filmActions} from "../../redux";
import {Movie} from "./Movie";
import css from './styles/film.module.css'

const MoviesAction = () => {
    const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch();
    const [query] = useSearchParams({page: '1'})

    useEffect(() => {
        // dispatch(filmActions.getAll({page: query.get('page')}))
        dispatch(filmActions.getById({page: query.get('page'), id: 27}))
    }, [dispatch, query])

        return (
            <div className={css.Father}>
                {genres.map(item => <Movie key={item.id} films={item}/>)})}
            </div>
        );
};

export {MoviesAction};