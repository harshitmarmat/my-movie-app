import React from "react";
// import { data } from '../data';
import {  handleMovieSearch } from '../actions';

class Navbar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            showSearchResults : true, 
            searchText : ''
        };
    }

    // handleAddToMovies = (movies) => {
    //     this.props.dispatch()
    // }

    handleSearch = () =>{
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) =>{
        this.setState({
            searchText : e.target.value
        })
    }

    render () {
        // console.log("NAv");
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>          
            </div>
        );
    }
}

export default Navbar;
