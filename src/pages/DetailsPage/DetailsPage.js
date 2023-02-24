import React from 'react';
import {MoviesDetails} from "../../components/Movies/MoviesDetails";
import {useParams} from "react-router-dom";

const DetailsPage = () => {
    const {movieID} = useParams()
    console.log(movieID)
        return (
            <div>
                <MoviesDetails movieID={movieID}/>
            </div>
        );
};

export {DetailsPage};