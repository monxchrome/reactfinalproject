import React from 'react';
import css from './styles/header.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

import {useTheme} from '../../hooks'

const Header = () => {
    const {theme, setTheme} = useTheme()

    const darkTheme = () => {
        setTheme('dark')
    }

    const lightTheme = () => {
        setTheme('light')
    }

        return (
            <div className={css.Father}>
                <div className={css.Mother}>
                    <div className={css.Wrap}>
                        <div>
                            <NavLink to={'/'}>
                                <div className={css.LogoDiv}>
                                    <h4 className={css.Logo}>KINOKTEN</h4>
                                </div>
                            </NavLink>
                        </div>

                        <div className={css.UserDiv}>
                            <NavLink to={'/me'}>
                                <img src='https://i.pinimg.com/564x/e8/d5/2b/e8d52bf998a1c137c5caddb1008a62e3.jpg' alt="" className={css.User}/>
                            </NavLink>
                        </div>

                        <div className={css.SwitcherDiv}>
                            <Button variant="contained" color="warning" disabled={false} onClick={theme === 'dark'? lightTheme : darkTheme}>{theme === 'dark'? 'Light Mode':'Dark Mode'}</Button>
                        </div>
                    </div>
                    <div className={css.MoviesListDiv}>
                    <NavLink to={'/movies'}>
                            <h4 className={css.MoviesList}>MOVIES LIST</h4>
                    </NavLink>
                    </div>
                </div>
            </div>
        );
};

export {Header};