import React, {useEffect, useState} from 'react';

import css from './styles/trailers.module.css'
import {filmService} from "../../services";
import ReactPlayer from "react-player";

const Trailers = ({video, film}) => {
    const [videos, setVideos] = useState()
    const videoArr = videos?.results
    const Arr3 = videoArr?.slice(-3)
    const Arr2 = videoArr?.slice(-2)
    const Arr1 = videoArr?.slice(-1)

    useEffect(() => {
        filmService.getVideo(film.id).then(({data}) => setVideos(data))
    }, [film.id])

        return (
            <div>

                {Arr3?.length >= 3 ?
                    <div className={css.TrailersDiv}>
                        <div className={css.Trailer}>
                            <ReactPlayer
                                width="300px"
                                height="200px"
                                url={`https://www.youtube.com/embed/${Arr3[0]?.key}?autoplay=1`}
                                title="Youtube Player"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>

                        <div className={css.Trailer}>
                            <ReactPlayer
                                width="300px"
                                height="200px"
                                url={`https://www.youtube.com/embed/${Arr3[1]?.key}?autoplay=1`}
                                title="Youtube Player"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>

                        <div className={css.Trailer}>
                            <ReactPlayer
                                width="300px"
                                height="200px"
                                url={`https://www.youtube.com/embed/${Arr3[2]?.key}?autoplay=1`}
                                title="Youtube Player"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                : Arr2?.length >= 2 ?
                        <div className={css.TrailersDiv}>
                            <div className={css.Trailer}>
                                <ReactPlayer
                                    width="300px"
                                    height="200px"
                                    url={`https://www.youtube.com/embed/${Arr2[0]?.key}?autoplay=1`}
                                    title="Youtube Player"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>

                            <div className={css.Trailer}>
                                <ReactPlayer
                                    width="300px"
                                    height="200px"
                                    url={`https://www.youtube.com/embed/${Arr2[1]?.key}?autoplay=1`}
                                    title="Youtube Player"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                        </div> :
                        Arr2?.length >= 2?
                            <div className={css.TrailersDiv}>
                                <div className={css.Trailer}>
                                    <ReactPlayer
                                        width="300px"
                                        height="200px"
                                        url={`https://www.youtube.com/embed/${Arr1[0]?.key}?autoplay=1`}
                                        title="Youtube Player"
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            : <div></div>
                }
            </div>
        );
};

export {Trailers};