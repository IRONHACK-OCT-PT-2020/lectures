import React, { Component } from 'react';
import { movies } from './movies'

class AddMovie extends Component {
    state = {
        title: "...",
        director: '...',
        movies: movies
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit movie')
        console.log(this.state)
        let copyMovies = [...this.state.movies]
        copyMovies.unshift({
            director: this.state.director,
            title: this.state.title
        })
        this.setState({ movies: copyMovies })

    }
    showMovies = () => {
        return this.state.movies.map((eachMovie, i) => {
            return <li key={i}>{eachMovie.title} {eachMovie.director}</li>
        })
    }

    render() {
        return (
            <>
                <h3>Title: {this.state.title}</h3>
                <h3>Director: {this.state.director}</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="title" onChange={this.handleChange} />

                    <input type="text" name="director" placeholder="director" onChange={this.handleChange} />

                    <button>Add Movie</button>
                </form>
                <ul>

                    {this.showMovies()}


                    {/* ALTERNATIVE OPTIONS {showTheMovies()}  <ShowDeesMovies /> */}
                </ul>

            </>
        );
    }
}







// function showTheMovies() {
//     return 'show THE movies'
// }

// function ShowDeesMovies() {
//     return 'show DEES movies'
// }


export default AddMovie;



