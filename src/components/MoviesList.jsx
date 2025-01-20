import React, { useState } from "react";
import moviesData from "../content/movies.json";
import "../styles/moviesList.css";

const itemsPerPage = 6;

function MovieCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [trendingIndex, setTrendingIndex] = useState(0);

  const movies = moviesData.results;
  const trendingMovies = movies.filter((movie) => movie.trending);
  const currentMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  const truncateTitle = (title, maxLength) => (title.length > maxLength ? `${title.slice(0, maxLength)}...` : title);

  function startSlideshow() {
    setInterval(() => {
      setTrendingIndex((prevIndex) => (prevIndex + 1) % trendingMovies.length);
    }, 5000);
  }

  if (!trendingMovies._slideshowStarted) {
    trendingMovies._slideshowStarted = true;
    startSlideshow();
  }

  function goToNextPage() {
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
    <div className="movie-page-horizontal">
      <div className="trending-section">
        <h2>Trending</h2>
        {trendingMovies.length > 0 ? (
          <div className="trending-movie">
            <img
              src={`https://image.tmdb.org/t/p/w300${trendingMovies[trendingIndex].poster_path}`}
              alt={trendingMovies[trendingIndex].title}
              style={{ width: "300px", height: "400px", objectFit: "contain" }}
            />
            <h3 style={{ position: "relative" }}>{trendingMovies[trendingIndex].title}</h3>
          </div>
        ) : (
          <p>No trending movies available</p>
        )}
      </div>

      <div className="carousel-section">
        <h2>All Movies</h2>
        <div className="carousel-wrapper">
          <button onClick={goToPreviousPage}>←</button>

          <div className="carousel-items">
            {currentMovies.length > 0 ? (
              currentMovies.map((movie) => (
                <div className="movie-item" key={movie.id}>
                  <a href={`./movie/info/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-poster"
                      style={{
                        width: "150px",
                        height: "200px",
                        objectFit: "contain",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                      }}
                    />
                    <h4>{truncateTitle(movie.title, 20)}</h4>
                  </a>
                </div>
              ))
            ) : (
              <p>No movies available</p>
            )}
          </div>

          <button onClick={goToNextPage}>→</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCarousel;
