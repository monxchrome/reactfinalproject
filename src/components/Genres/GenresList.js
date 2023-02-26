import css from './styles/genres-list.module.css'
import {NavLink} from "react-router-dom";
const GenresList = () => {



    return (
        <div>
            <div className={css.Wraps}>
                <nav className={css.navMenu}>
                    <div>
                        <NavLink to={'action'}><h3>Action</h3></NavLink>
                        <NavLink to={'adventure'}><h3>Adventure</h3></NavLink>
                        <NavLink to={'animation'}><h3 href="#">Animation</h3></NavLink>
                        <NavLink to={'comedy'}><h3>Comedy</h3></NavLink>
                    </div>
                    <div>
                        <NavLink to={'crime'}><h3>Crime</h3></NavLink>
                        <NavLink to={'documentary'}><h3>Documentary</h3></NavLink>
                        <NavLink to={'drama'}><h3>Drama</h3></NavLink>
                        <NavLink to={'family'}><h3>Family</h3></NavLink>
                    </div>
                    <div>
                        <NavLink to={'fantasy'}><h3>Fantasy</h3></NavLink>
                        <NavLink to={'history'}><h3>History</h3></NavLink>
                        <NavLink to={'horror'}><h3>Horror</h3></NavLink>
                        <NavLink to={'music'}><h3>Music</h3></NavLink>
                    </div>
                    <div>
                        <NavLink to={'mystery'}><h3>Mystery</h3></NavLink>
                        <NavLink to={'romance'}><h3>Romance</h3></NavLink>
                        <NavLink to={'science-fiction'}><h3>Science Fiction</h3></NavLink>
                    </div>
                    <div>
                        <NavLink to={'thriller'}><h3>Thriller</h3></NavLink>
                        <NavLink to={'war'}><h3>War</h3></NavLink>
                        <NavLink to={'western'}><h3>Western</h3></NavLink>
                        <NavLink to={'tv-movie'}><h3>TV Movie</h3></NavLink>
                    </div>
                    <div className={css.dot}></div>
                </nav>
            </div>
        </div>
    );
};

export {GenresList};