import css from './styles/mainpage.module.css'
import React, {useState} from "react";
import {filmService} from "../../services/filmService";
import {SearchMovie} from "../../components/Search/SearchMovie";

const MainPage = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        try {
            const response = await filmService.searchMovies(query)
            setMovies(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

        return (
            <div className={css.Father}>
                <div className={css.BG}>
                    <div className={css.BannerTextDiv}>
                        <h4 className={css.BannerText}>Watch our films everywhere</h4>
                        <h4 className={css.BannerDesc}>Unlimited movies, TV shows, and more.</h4>
                        <div className={css.Form}>
                            <form onSubmit={searchMovies}>
                                <input
                                    type="search"
                                    placeholder="Search for a movie"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </form>
                            <div className={css.over}>
                                {movies.map((movie) => (
                                    <SearchMovie key={movie.id} movie={movie}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.TVDiv}>
                    <div className={css.TextDiv}>
                        <h4 className={css.TVText}>Enjoy on TV</h4>
                    </div>
                    <div className={css.DescDiv}>
                        <h5 className={css.TVDesc}> Watch our films on Smart TVs, Playstation, Xbox, Chromecast,
                            Apple TV, Blu-ray players, and more.
                        </h5>
                    </div>
                    <div className={css.TVImgDiv}>
                        <div className={css.TVImg}></div>
                    </div>
                </div>
                <div className={css.TVDiv}>
                    <div className={css.TextDiv}>
                        <h4 className={css.TVText}>Watch everywhere</h4>
                    </div>
                    <div className={css.DescDiv}>
                        <h5 className={css.TVDesc}> Stream unlimited movies and TV shows on your phone, tablet,
                            laptop, and TV without paying more.
                        </h5>
                    </div>
                    <div className={css.ImgFather}>
                        <div className={css.TVImgDiv}>
                            <div className={css.MacbookImg}></div>
                        </div>
                        <div className={css.TVImgDiv}>
                            <div className={css.iMacImg}></div>
                        </div>
                        <div className={css.TVImgDiv}>
                            <div className={css.iPhoneImg}></div>
                        </div>
                    </div>
                </div>
                <div className={css.TVDiv}>
                    <div className={css.TextDiv}>
                        <h4 className={css.TVText}>Our partners</h4>
                    </div>
                    <div className={css.DescDiv}>
                        <h5 className={css.TVDesc}> They helped us become who we are.</h5>
                    </div>
                    <div className={css.ImgFather}>
                        <div className={css.TVImgDiv}>
                            <div className={css.OktenImg}></div>
                        </div>
                        <div className={css.TVImgDiv}>
                            <div className={css.NetflixImg}></div>
                        </div>
                        <div className={css.TVImgDiv}>
                            <div className={css.ReduxImg}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export {MainPage};