import React from "react";
import {data} from "../data"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";
import {setShowFavourite} from "../actions"

class App extends React.Component{
  componentDidMount(){
    
    this.props.store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    })

    this.props.store.dispatch(addMovies(data));

    console.log(this.props.store.getState());
  }

  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourite } = movies;

    const index = favourite.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  setShow(val) {
    this.props.store.dispatch(setShowFavourite(val));
  }

  render(){
  const { movies ,search } = this.props.store.getState();
  const {list , favourite , showFavourite} = movies;
  const displayTab = showFavourite?favourite:list;
  console.log('RENDER');
    return (
      <div className="App">
        <Navbar 
          dispatch={this.props.store.dispatch}
          search = {search}
        />
        <div  className="main">
          <div className="tabs">
            <div className={`${showFavourite?'tab':'active-tabs'}`} onClick= {()=>this.setShow(false)} >Movies</div>
            <div className={`${showFavourite?'active-tabs':'tab'}`} onClick={()=>this.setShow(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayTab.map((movie, index) =>(
              <MovieCard  
                movie={movie} 
                key={`movies-${index}`}
                getState={this.props.store.getState} 
                dispatch={this.props.store.dispatch}
                isFavourite = {this.isFavourite(movie)}
              />      //unclear
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
