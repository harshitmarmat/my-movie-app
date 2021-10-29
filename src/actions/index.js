
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';

export function addMovies (movies){
    return ({
        type : ADD_MOVIES,
        movies 
      });
}

export function addtofavourite (movie){
  return ({
    type : ADD_TO_FAVOURITE,
    movie
  });
}

export function removefromfavourite(movie){
  return({
    type : REMOVE_FROM_FAVOURITE,
    movie
  });
}

export function setShowFavourite(val){
  return({
    type : SET_SHOW_FAVOURITE,
    val
  })
}

export function handleMovieSearch (movie) {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

  return function(dispatch){
    fetch(url)
      .then(response => response.json())
      .then(movie => console.log(movie));
  }
}