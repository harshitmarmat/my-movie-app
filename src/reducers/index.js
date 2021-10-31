import { combineReducers } from "redux";

import { 
    ADD_MOVIES, 
    ADD_TO_FAVOURITE, 
    REMOVE_FROM_FAVOURITE, 
    SET_SHOW_FAVOURITE,
    ADD_SEARCH_MOVIE,
    ADD_MOVIE_SEARCH_RESULT,
    ADD_MOVIE_TO_LIST
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
        case ADD_MOVIE_TO_LIST :
            return {
                ...state,
                list : [action.movie, ...state.list]
            }
        default :
            return state;
    }
}

const initialSearchState = {
    result : {},
    showSearchResults : false
}

function search (state = initialSearchState , action ){
    switch(action.type) {
        case ADD_MOVIE_SEARCH_RESULT :
            return {
                ...state,
                result : action.movie,
                showSearchResults : true
            }
        case ADD_SEARCH_MOVIE :
            return {
                ...state,
                result :action.movie,
                // showSearchResults : false
            }   
        case ADD_MOVIE_TO_LIST :
            return {
                ...state,
                showSearchResults : false
            }
        default :
            return state;
    }
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