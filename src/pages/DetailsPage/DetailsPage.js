import React from 'react';

import {MoviesDetail} from "../../components";
import {useParams} from "react-router-dom";

const DetailsPage = () => {
    const {movieID} = useParams()
        return (
            <div>
                <MoviesDetail movieID={movieID}/>
            </div>
        );
};

export {DetailsPage};