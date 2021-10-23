import React from "react";
import {data} from "../data"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

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
    const { favourite } = this.props.store.getState();

    const index = favourite.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }
  render(){
  const {list} = this.props.store.getState();
  console.log('RENDER');
    return (
      <div className="App">
        <Navbar />
        <div  className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) =>(
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
