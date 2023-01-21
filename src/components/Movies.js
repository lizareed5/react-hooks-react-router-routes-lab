import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => 
        <div key={movie.title}>
          <h2>Name: {movie.title}</h2>
          <h4>Time: {movie.time}</h4>
          <h4>Genres:</h4>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>)}
    </div>
  )
}

export default Movies;
