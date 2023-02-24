import css from './styles/genres-list.module.css'
import {NavLink} from "react-router-dom";
const GenresList = () => {



    return (
        <div>
            <div className={css.Wraps}>
                <nav className={css.navMenu}>
                    <div>
                        <NavLink to={'action'}><a href="#">Action</a></NavLink>
                        <a href="#">Adventure</a>
                        <a href="#">Animation</a>
                        <a href="#">Comedy</a>
                    </div>
                    <div>
                        <a href="#">Crime</a>
                        <a href="#">Documentary</a>
                        <a href="#">Drama</a>
                        <a href="#">Family</a>
                    </div>
                    <div>
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
        </div>
    );
};

export {GenresList};