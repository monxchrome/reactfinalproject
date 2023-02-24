import React from 'react';
import css from './styles/film.module.css'
import {posterURL} from "../../configs";
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import {NavLink} from "react-router-dom";

const Movie = ({films}) => {
    const {poster_path, vote_average, original_title, overview, id} = films

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ffffff',
        },
        '& .MuiRating-iconHover': {
            color: '#6e6e6e',
        },
    });
        return (
            <div className={css.Father}>

                <div className={`${css.Mother} ${css.pulseBox}`}>

                    <div className={css.ImgDiv}>
                        <img src={posterURL+poster_path} alt="" className={css.Img}/>
                    </div>
                    <NavLink to={id.toString()}>


                    <div className={css.Wrap}>

                        <div className={css.TitleDiv}>
                            <h4 className={css.Title}>{original_title}</h4>
                        </div>

                        <div className={css.RatingDiv}>
                            <StyledRating name="text-feedback"
                                    value={vote_average}
                                    readOnly
                                    precision={0.5}
                                    max={10}
                                    size="small"
                                    emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white' }} fontSize="inherit" />}
                            />
                        </div>

                        <div className={css.DescDiv}>
                            <p className={css.Desc}>{overview}</p>
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>
        );
};

export {Movie};