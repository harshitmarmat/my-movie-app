import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const intialMovieList = {
    list : [],
    favourite : []
}

export default function movies(state = intialMovieList, action){
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
        case ADD_FAVOURITE : 
            return {
                ...state,
                favourite : [action.movie,...state.favourite]
            }
        default :
            return state;
    }
}