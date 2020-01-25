import React, { Component } from 'react';
import MovieComponent from './MovieComponent';

const Content = (props) => {
    console.log("******************", props);
        return (
            <div className='app-container'>
                <div className="datascreen">
                    {props.movies.map((movie, index) => (<MovieComponent
                                                            name = {movie.name}
                                                            director = {movie.director}
                                                            popularity = {movie.popularity}
                                                            imdb_score = {movie.imdb_score}
                                                            genres = {movie.genre}
                                                        />)
                                            )}
                </div>
            </div>
        );
}
export default Content;
