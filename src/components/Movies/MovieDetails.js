import React, {useEffect, useState} from 'react';
import StarIcon from "@mui/icons-material/Star";
import {styled} from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import {Button} from "@mui/material";

import css from './styles/detail.module.css'
import {posterURL} from "../../configs";
import {GenresDetails} from "../Genres/GenresDetails";
import {filmService} from "../../services";
import {Video} from "../Video/Video";
import {Trailers} from "../Video/Trailers";

const MovieDetails = ({film}) => {
    const [video, setVideo] = useState([])
    const [playing, setPlaying] = useState(true)
    const {poster_path, original_title, vote_average, overview, genres, id} = film
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ffffff',
        },
        '& .MuiRating-iconHover': {
            color: '#6e6e6e',
        },
    });


    useEffect(() => {
        filmService.getVideo(id).then(({data}) => setVideo([data]))
    }, [id])

        return (
            <div>
                <div className={css.Mother}>
                        <div className={css.VideoDiv}>
                            {video.map(item => <Video key={item.id} video={item} playing={playing}/>)}
                        </div>

                    <div className={css.ImgDiv}>
                        <img src={posterURL+poster_path} alt="" className={css.Img}/>
                    </div>


                    <div className={css.Wrap}>
                        <div className={css.TitleDiv}>
                            <h4 className={css.Title}>{original_title}</h4>
                        </div>
                        <div>
                            {playing? (
                                <Button variant="contained" onClick={() => setPlaying(false)}>Stop</Button>
                            ) : (
                                <Button variant="contained" onClick={() => setPlaying(true)}>Play</Button>
                            )}
                        </div>

                        <div>
                            <div className={css.WrapG}>
                                {genres.map(item => <GenresDetails genres={item}/>)}
                            </div>
                        </div>

                        <div className={css.RatingDiv}>
                            <h5 className={css.TitleText}>Rating:</h5>
                            <StyledRating name="text-feedback"
                                          value={vote_average}
                                          readOnly
                                          precision={0.5}
                                          max={10}
                                          size="large"
                                          emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white' }} fontSize="inherit" />}
                            />
                        </div>
                        <h5 className={css.DescText}>Overview:</h5>
                        <div className={css.DescDiv}>
                                <div className={css.DescDiv2}>
                                    <p className={css.Desc}>{overview}</p>
                                </div>
                        </div>

                        <div className={css.TrailersDiv}>
                            <div>
                                {video.map(item => <Trailers key={item.id} video={item} film={film}/>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
};

export {MovieDetails};