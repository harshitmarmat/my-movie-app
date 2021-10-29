import { combineReducers } from "redux";

import { 
    ADD_MOVIES, 
    ADD_TO_FAVOURITE, 
    REMOVE_FROM_FAVOURITE, 
    SET_SHOW_FAVOURITE 
} from "../actions";

const intialMovieList = {
    list : [],
    favourite : [],
    showFavourite : false
}

function movies(state = intialMovieList, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...intialMovieList,
    //         list : action.movies
    //     }
    // } 
    // return state;
    switch(action.type) {
        case ADD_MOVIES :
            return {
                ...state,
                list : action.movies
            }
        case ADD_TO_FAVOURITE : 
            return {
                ...state,
                favourite : [action.movie,...state.favourite]
            }
        case REMOVE_FROM_FAVOURITE :
            
            const filteredMovie = state.favourite.filter(
                movie => movie.Title !==action.movie.Title
            );
            return{
                ...state,
                favourite : filteredMovie
            }
        case SET_SHOW_FAVOURITE :
            return{
                ...state,
                showFavourite : action.val
            }
        default :
            return state;
    }
}

const initialSearchState = {
    result : {}
}

function search (state = initialSearchState , action ){
    return state;
}

// const intialRootState = {
//     movies : intialMovieList,
//     search : initialSearchState
// }

// export default function rootReducer(state = intialRootState , action){
//     return {
//         movies : movies(state.movies,action),
//         search : search(state.search,action)

//     }
// }

export default combineReducers({
    movies,
    search
})