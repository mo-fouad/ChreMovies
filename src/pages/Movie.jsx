import React, {useEffect, useState} from 'react'
import {Container, Row} from "../components/styled/GridSystem";
import Styled from 'styled-components'

import {useParams} from 'react-router-dom'
import Loading from "../components/Fragments/Loading";
import {Theme} from '../components/styled/Them'
import LoadingError from "../components/Fragments/LoadingError";

const ImageCol = Styled.div`
    flex:1 0 33.333%;
    padding: 1rem;
    text-align: center; 
    
    img {
        border:1px solid ${Theme.BorderColor};
        transition : box-shadow 200ms ease-out;
        &:hover {
            box-shadow: 0px 0 15px rgba(255,255,255,0.5);
        }
    }
`
const DescriptionCol = Styled.div`
    flex:1 0 66.666%; 
    padding: 1rem;
    color: ${Theme.FontColor};
    
    h3 {
        padding : 10px 0;
        border-bottom:1px solid ${Theme.BorderColor};
    }
    
    p {
        margin: 10px 0;
        font-size: 1.25rem;
    }
`

function Movie() {
    let {Movie} = useParams();
    const [loading, setLoading] = useState(true);
    const [moveData, setMoveData] = useState({});
    const [errLoading, setErrLoading] = useState(false);


    const MovieAPI = async () => {
        const MovieRaw = await fetch(`https://www.omdbapi.com/?apikey=f7351c22&i=${Movie}`)
        const MovieJson = await MovieRaw.json();

        if (MovieJson.Response === "True") {
            setMoveData(MovieJson);
            setLoading(false);
            setErrLoading(false)
        } else {
            setMoveData({});
            setLoading(false)
            setErrLoading(true)
        }
    }

    // todo : Transform this Fetch to Redux;
    useEffect(() => {
        MovieAPI()
    }, [])


    return (
        <Container>
            {loading &&
            <Loading/>
            }
            {moveData && 'Title' in moveData &&
            <Row>
                <ImageCol>
                    <img src={moveData.Poster} alt=""/>
                </ImageCol>
                <DescriptionCol>
                    <h3>{moveData.Title}</h3>
                    <p>Year : {moveData.Year}</p>
                    <p>Released : {moveData.Released}</p>
                    <p>Genre : {moveData.Genre}</p>
                    <p>Director : {moveData.Director}</p>
                    <p>Writer : {moveData.Writer}</p>
                    <p>Actors : {moveData.Actors}</p>
                    <p>Plot : {moveData.Plot}</p>

                </DescriptionCol>
            </Row>
            }

            {errLoading &&
            <LoadingError message ="Error in Loading Movie Data"/>}
        </Container>
    );
}

export default Movie
