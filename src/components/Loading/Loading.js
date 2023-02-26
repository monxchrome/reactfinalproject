import React from 'react';
import css from './styles/loading.module.css'

const Loading = () => {
        return (
            <div>
                <div className={css.centered}>
                    <div className={css.blob1}></div>
                    <div className={css.blob2}></div>
                </div>
            </div>
        );
};

export {Loading};