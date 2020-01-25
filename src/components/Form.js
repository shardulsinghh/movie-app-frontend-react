import React, { Component } from 'react';
import POST_MOVIE_URL from '../constants';

import axios from 'axios';

import '../../../moviedata.json';


class FormComponent extends Component{
    handleFormSubmit = (event, requestType, movieID) => {
        event.preventDefault();

        switch( requestType ){
            case 'post':
                console.log("POST REQ");
                const movieName = event.target.
                axios.post(POST_MOVIE_URL, {

                })
        }
    }
    render(){
        return <div>
            <h3>Form Component</h3>
        </div>;
    }
}