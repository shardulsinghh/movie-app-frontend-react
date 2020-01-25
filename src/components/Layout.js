import React, { Component } from 'react';
import Header from './HOC/Header';
import Content from './Content';
import Loading from './Loading';



import axios from "axios";
import { GET_MOVIES_URL } from '../constants';

class Layout extends Component{

    constructor(props){
        super(props);

        this.state = {
            search_query: '',
            genre_tab: 'Genre',
            movie_list : [],
            display_list: [],
            content_loading : true
        };

        this.updateQuery = this.updateQuery.bind(this);               //Give access to 'this' keyword to updateQuery
        this.updateDisplay = this.updateDisplay.bind(this);
    }

    updateDisplay(queryElement){
        const movies = this.state.movie_list;
        var displayList = [];
        switch(queryElement.id){
            case 'search-box':;
                console.log("Fresh")
                const query = queryElement.value;
                if(query.trim()===''){
                    this.setState({display_list: movies});
                    return;
                }

                movies.forEach(function(movie){
                    if(movie.name.includes(query)){
                        displayList.push(movie);
                        return;
                    }
                    if(movie.director.includes(query)){
                        displayList.push(movie);
                        return;
                    }
        
                });
                break;
            case 'genre-menu':
                const filterList = []
                console.log(queryElement.value)
                let listToDisplay;
                if(this.state.search_query.trim().length > 0){
                    listToDisplay = this.state.display_list;
                }
                else{
                    listToDisplay = this.state.movie_list;
                }
                const selectedGenre = queryElement.value;
                if(selectedGenre === 'Genre' && this.state.search_query.trim()===''){
                    displayList = movies;
                }
                listToDisplay.forEach(function(movie){
                    if(movie["genre"].indexOf(selectedGenre) > -1){
                        filterList.push(movie);
                        return;
                    }
                    else{
                        return;
                        
                    }
                });
                displayList = filterList;
        }
        if(this.state.search_query.trim() === '' && this.state.genre_tab === 'Genre'){
            this.setState({display_list: movies});
        }

        if(displayList.length === 0){
            //Return Error Here forresults found 
        }
       
        this.setState({display_list: displayList},()=>{console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   DISPLAY LIST:   ", this.state)});
    }

    updateQuery(targetElement){

        switch(targetElement.id){
            case 'search-box':
                this.setState({search_query:targetElement.value},this.updateDisplay(targetElement));
                break;
            case 'genre-menu':
                this.setState({genre_tab:targetElement.value},this.updateDisplay(targetElement));
                break;
        }
    }

    componentWillMount(){
        this.refreshMovieList();
        console.log("AFRTER MOUNT",this.state);
    }

    refreshMovieList = () =>{
        axios.get(GET_MOVIES_URL)
          .then(response => this.setState({movie_list: response.data}, ()=>{
              this.setState({content_loading : false}, ()=> {
                  const display_items = this.state.movie_list;
                  this.setState({display_list: display_items})
              });
            }))
          .catch( err => console.error("Error: ", err)
          );
        
        if(this.state.search_query){
            const display_items = this.state.movie_list;
            this.setState({display_list:display_items});
        }
      }

    render(){
        return (
            <div>
                <Header update={this.updateQuery}/>
                {this.state.content_loading? <Loading/> : <Content movies = {this.state.display_list}/>}
                
            </div>
        );
    }
}

export default Layout;