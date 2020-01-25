import React, { Component } from 'react';


//Header React Componet, COntains Search Controls
class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            search_query: '',
            genre_tab: 'Genre'
        };

        this.handleChange = this.handleChange.bind(this);               //Give access to 'this' keyword to handleChange
        this.handleSubmit = this.handleSubmit.bind(this);               //Give access to 'this' keyword to handleSubit
 
    }

    handleChange(event) {
        this.props.update(event.target);
        switch(event.target.id){                    //Identify event target
            case 'search-box':                      //Update search-query in state if 'Seachbox'          
                this.setState({search_query: event.target.value})
                break;
            case 'genre-menu':                      //Update genre-tab in state if 'genre-menu'
                this.setState({genre_tab: event.target.value})

                break;
            default:
                console.log('Invalid Input Element ID')
            
        }
      }
    
    handleSubmit(event) {
        console.log('Form Submitted.', this.state);
        event.preventDefault();
    }

    render(){
        return <section className="hero is-dark">
            <div className="hero-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="field has-addons">
                            <div className="control is-expanded has-icons-left">
                                <input id="search-box" className="input" type="text" value={this.state.search_query} onChange={this.handleChange} placeholder="Type Here"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                            <div className="control">
                                <span className="select">
                                <select id="genre-menu" value={this.state.genre_tab} onChange={this.handleChange}>
                                    <option>Genre</option>
                                    <option>Action</option>
                                    <option>Adventure</option>
                                    <option>Animation</option>
                                    <option>Biography</option>
                                    <option>Comedy</option>
                                    <option>Crime</option>
                                    <option>Documentary</option>
                                    <option>Drama</option>
                                    <option>Family</option>
                                    <option>Fantasy</option>
                                    <option>Film-Noir</option>
                                    <option>Game-Show</option>
                                    <option>History</option>
                                    <option>Horror</option>
                                    <option>Music</option>
                                    <option>Mystery</option>
                                    <option>News</option>
                                    <option>Reality-TV</option>
                                    <option>Romance</option>
                                    <option>Sci-Fi</option>
                                    <option>Short</option>
                                    <option>Sport</option>
                                    <option>Talk-Show</option>
                                </select>
                                </span>
                            </div>
                            <div className="control">
                                <a type="submit" value="Submit" className="button is-info" onClick={this.handleSubmit}>
                                    Search
                                </a>
                            </div>
                        </div>
                    <h2 className="subtitle">
                        Search by Movie Title, Director
                    </h2>
                    </div>
                </form>
            </div>
        </section>;
    }
}

export default Header;