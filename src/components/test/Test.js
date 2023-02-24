import React, {useEffect, useState} from 'react';
import css from './test.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {filmActions} from "../../redux/slices/filmSlice";
import {Movie} from "../Movies/Movie";
import {filmService} from "../../services/filmService";
import {genreService} from "../../services/genreService";

const Test = () => {
    const {films, page} = useSelector(state => state.films)

        return (
            <div>
                <div className={css.Wraps}>
                    <nav className={css.navMenu}>
                        <div className={css.Wrap}>
                            <a href="#">Action</a>
                            <a href="#">Adventure</a>
                            <a href="#">Animation</a>
                            <a href="#">Comedy</a>
                        </div>
                        <div className={css.Wrap2}>
                            <a href="#">Crime</a>
                            <a href="#">Documentary</a>
                            <a href="#">Drama</a>
                            <a href="#">Family</a>
                        </div>
                        <div className={css.Wrap3}>
                            <a href="#">Fantasy</a>
                            <a href="#">History</a>
                            <a href="#">Horror</a>
                            <a href="#">Music</a>
                        </div>
                        <div>
                            <a href="#">Mystery</a>
                            <a href="#">Romance</a>
                            <a href="#">Science Fiction</a>
                            <a href="#">TV Movie</a>
                        </div>
                        <div>
                            <a href="#">Thriller</a>
                            <a href="#">War</a>
                            <a href="#">Western</a>
                        </div>
                        <div className={css.dot}></div>
                    </nav>
                </div>
                {films.map(item => <Movie key={item.id} films={item}/>)}
            </div>
        );
};

export {Test};