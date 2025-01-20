import React, { useState } from "react";
import moviesData from "../content/movies.json"; // Import movies data
import "../styles/moviesList.css";

const itemsPerPage = 4;

function MovieCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const movies = moviesData.results;

  const currentMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  function goToNextPage() {
    console.log("Button clicked!");
    console.log(
      "goToNextPage startIndex: " + startIndex + " itemsPerPage: " + itemsPerPage + " length: " + movies.length
    );
    if (startIndex + itemsPerPage < movies.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  }

  function goToPreviousPage() {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  }

  return (
    <div className="movie-carousel">
      <button onClick={goToPreviousPage}>←</button>

      <div className="carousel-items">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => (
            <div className="movie-item" key={movie.id}>
              <a href={`./movie/info/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <h3>{movie.title}</h3>
              </a>
            </div>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>

      <button onClick={goToNextPage}>→</button>
    </div>
  );
}

export default MovieCarousel;
