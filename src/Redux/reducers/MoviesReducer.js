import {
    LOADING_MOVIES,
    LOADING_MOVIES_DONE,
    LOADING_MOVIES_FAILED
} from '../actions/_ActionsTypes'

import {initialStat} from "../initialState";

export default function MoviesReducer(state = initialStat, action) {
    switch (action.type) {
        case LOADING_MOVIES:
            return Object.assign({}, state, action.payload);

        case LOADING_MOVIES_DONE:
            return Object.assign({}, state, action.payload);

        case LOADING_MOVIES_FAILED:
            return Object.assign({}, state, action.payload);

        default :
            return state
    }
}
