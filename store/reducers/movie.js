import {SET_MOVIES} from '../actions/movies';

const initialState = {
    availableMovies: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVIES:
            return {
                ...state,
                availableMovies: action.movies,
            };
    }
    return state;
}