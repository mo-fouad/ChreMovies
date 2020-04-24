import React, {useEffect} from 'react'
import {Container, Row} from "../components/styled/GridSystem";
import Styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'

import * as MoviesActions from '../Redux/actions/MoviesAction'
import Loading from "../components/Fragments/Loading.jsx";
import {MoviesListURL} from '../APICalls/Movies'
import MovieListItem from "../components/Elemnts/MovieListItem";
import LoadingError from "../components/Fragments/LoadingError";

const MoviesListWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
`

function MoviesList() {

    const {LoadingMovies, moviesData} = useSelector(state => state.MoviesReducer)

    // const [loading, setLoading] = useState(LoadingMovies)

    // will give us the Dispatch object so we can use the Actions to alter the State
    const dispatch = useDispatch()


    // Fetching Data // Actions Creator
    const getMoviesData = async () => {

        // Dipatch that we are Loading the Movies
        dispatch(MoviesActions.LoadingMovies({LoadingMovies: true, moviesData: []}));

        // now Go Get the Movies
        const MoviesData = await fetch(MoviesListURL)
        const MoviesDataJson = await MoviesData.json();

        if (MoviesDataJson.Response = "true") {

            // Getting the Search Data
            const SearchData = MoviesDataJson.Search;

            // now Dispatch that we have loaded tha Data
            await dispatch(MoviesActions.LoadingMoviesDone({LoadingMovies: false, moviesData: SearchData}))

        } else {

            // now Dispatch that we have Failed to loaded and We have Error
            dispatch(MoviesActions.LoadingMoviesFailed({LoadingMovies: false, moviesData: []}))
        }
    }


    // Using Use Effect to load Data
    useEffect(() => {
        // Loading Movies Data and Dispatching Actions
        getMoviesData();
    }, [])

    console.log(moviesData)

    return (
        <Container>
            {LoadingMovies && <Loading/>}
            {
                moviesData && moviesData.length > 0 ?

                    <MoviesListWrapper>
                        {moviesData.map((movie, index) =>
                            <MovieListItem movie={movie} key={index}/>
                        )}
                    </MoviesListWrapper>
                    :
                    <LoadingError message="Looks Like We Have SomeThing worng in the API "/>
            }

        </Container>
    );
}

export default MoviesList
