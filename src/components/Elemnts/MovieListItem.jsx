import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from "react-router-dom";
import Styled from 'styled-components'
import {Theme} from "../styled/Them";


const MoviePoster = Styled.div` 
    padding : 1rem;
    transition : background 200ms ease-out;
    border:1px solid #1c2e558c;
    
    h4 {
        color:  ${Theme.FontColor};
        margin-bottom : 10px;
    }
    p {
         color:  ${Theme.FontColor}
    }
     
    &:hover { 
        background :rgba(255,255,255,0.1)
    }
    
    @media (min-width: 576px) { 
        flex: 1 0 100%;
    }
    
    @media (min-width: 768px) { 
        flex: 1 0 50%;
    }
    
    @media (min-width: 992px) { 
        flex: 1 0 33.333333%; 
    }
    
    
`
const ImageCont = Styled.div`

    overflow: hidden;
    margin-bottom : 10px;
    text-align: center;
    
    img {
        cursor: pointer;
        width : 100%;
        border 2px solid ${Theme.BorderColor};
    }
 `

function MovieListItem(props) {
//    this Will Render the Movie Item

    let history = useHistory();

    const handelClick = e => {
        history.push(e.target.name);
    }

    const {Title, Year, imdbID, Poster} = props.movie
    return (
        <MoviePoster onClick={e => handelClick(e)}>
            <ImageCont>
                <img src={Poster} alt="{Title}" name={imdbID}/>
            </ImageCont>
            <h4>{Title}</h4>
            <p>{Year}</p>

        </MoviePoster>
    );
}

export default MovieListItem

MovieListItem.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        imdbID: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired
    })
}