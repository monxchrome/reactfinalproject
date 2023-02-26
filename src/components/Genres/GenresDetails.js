import React from 'react';

import css from './styles/genre-details.module.css'

const GenresDetails = ({genres}) => {
    const {name} = genres;
        return (
            <div>
                <div className={css.NameDiv}>
                    <div className={css.Border}>
                        <h4 className={css.Name}>{name}</h4>
                    </div>
                </div>
            </div>
        );
};

export {GenresDetails};