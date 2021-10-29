import React from "react";
// import { compose } from "redux";
import {addtofavourite}  from "../actions"
import {removefromfavourite} from "../actions"

class MovieCard extends React.Component {

    favouriteClickListener = () => {
        const { movie} = this.props;
        this.props.dispatch(addtofavourite(movie));
        console.log(this.props.getState());
    }

    unfavouriteClickListener = () => {
        const {movie} = this.props;
        this.props.dispatch(removefromfavourite(movie));
        console.log(this.props.getState())
    }
    render () {
        const {movie , isFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>       
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ?<button onClick={this.unfavouriteClickListener} className="unfavourite-btn">Unfavourite</button>
                            :<button onClick={this.favouriteClickListener} className="favourite-btn">Favourite</button>
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;