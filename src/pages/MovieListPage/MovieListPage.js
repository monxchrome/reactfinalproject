import 'normalize.css';
import css from './styles/movielist.module.css';
import {Movies} from "../../components/Movies/Movies";

const MovieListPage = () => {

        return (
            <div className={css.Body}>
                <div className={css.TextDiv}>
                        <h4 className={css.Text}>Movies</h4>
                </div>


                <div>
                    <Movies/>
                </div>

            </div>
        );
};

export {MovieListPage};