import React from 'react';

function CategoryScroll({ category, movies }) {
  const categoryMovies = movies
    .filter((m) => m.genre_ids.includes(category.id))
    .slice(0, 15);

  return (
    <section className="category-scroll-section">
      <h2>{category.name}</h2>
      <div className="category-scroll">
        {categoryMovies.map((movie) => (
          <article className="card movie-poster" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
            <span>Rating: {movie.vote_average}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryScroll;
