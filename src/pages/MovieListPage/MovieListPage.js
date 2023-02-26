import 'normalize.css';
import css from './styles/movielist.module.css';
import {Movies} from "../../components";

const MovieListPage = () => {

        return (
            <div className={css.Body}>
                <div>
                    <Movies/>
                </div>
            </div>
        );
};

export {MovieListPage};