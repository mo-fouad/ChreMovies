import {
    LOADING_MOVIES,
    LOADING_MOVIES_DONE,
    LOADING_MOVIES_FAILED
} from './_ActionsTypes'


export const LoadingMovies = (data) => {
    return {
        type: LOADING_MOVIES,
        payload: data
    }
}

export const LoadingMoviesDone = data => {
    return {
        type: LOADING_MOVIES_DONE,
        payload: data
    }
}

export const LoadingMoviesFailed = data => {
    return {
        type: LOADING_MOVIES_FAILED,
        payload: data
    }
}