import React from 'react';
import {posterURL} from "../../configs";
import css from './styles/search.module.css'
import {NavLink} from "react-router-dom";

const SearchMovie = ({movie}) => {
    const {poster_path, overview, original_title, id} = movie
        return (
            <NavLink to={`movies/${id.toString()}`}>
                <div className={css.Mother}>
                    <div className={css.Father}>
                        <div className={css.Wrap}>
                            <img src={posterURL+poster_path} alt="" className={css.Img}/>
                            <div>
                                <div className={css.TitleDiv}>
                                    <h4 className={css.Title}>{original_title}</h4>
                                </div>
                                <div className={css.DescDiv}>
                                    <h5 className={css.Desc}>{overview}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </NavLink>
        );
};

export {SearchMovie};