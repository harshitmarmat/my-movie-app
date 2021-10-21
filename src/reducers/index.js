import { ADD_MOVIES } from "../actions";

const intialMovieList = {
    list : [],
    favourite : []
}

export default function movies(state = intialMovieList, action){
    if(action.type === ADD_MOVIES){
        return {
            ...intialMovieList,
            list : action.movies
        }
    } 
    return state;
}