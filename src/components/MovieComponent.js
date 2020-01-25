import React from 'react';
import Zoom from 'react-reveal/Zoom';


//This is our Movie Component, it renders a Card like view on the screen
//Card content/data is passed is as Props

const MovieComponent = (props) => {
  console.log("$#$#$#$#$#$#$#$#$$##$#$#$", props.genres)

    return <div className="component-contianer">
      <Zoom>
      <div className="box">
            <article className="media">
             <div className="media-left">
              <figure className="image is-64x64">
               <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
              </figure>
             </div>
             <div className="media-content">
              <div className="content">
               <p>
                <strong>{props.name}</strong> <small>{props.director}</small><br></br> <small>IMDB Score: <div className="imdb-rating">{props.imdb_score}</div></small>
                <br/>
                {/* Popularity: {props.popularity} */}
                <nav className="genre-container">
                {props.genres.map(function(genre,i){
                  return <span className="genre">
                    <button class="button is-dark">{genre}</button>
                  </span>;
                })}
                </nav>
          </p>
        </div>
      </div>
      
    </article>
  </div>
      </Zoom>
 </div>;
};

export default MovieComponent;
