import moviesData from "../content/movies.json";
const movies = moviesData.results;

function CategoryScroll({ category, movies }) {
  const categoryMovies = movies
    .filter((m) => m.genre_ids.includes(category.id))
    .slice(0, 15);

  return (
    <section className="category-scroll-section">
      <h2 className="categoryTitle">
        <a href={`/movies?genre=${category.id}`}>{category.name}</a>
      </h2>
      <div className="category-scroll">
        {categoryMovies.map((movie) => (
          <article className="card movie-poster" key={movie.id}>
            <a href={`./movie/info/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </a>
            <h4 className="movieTitle">{movie.title}</h4>
            <button className="add-to-cart" data-movieid={movie.id}> Add to cart </button>
            <div className="rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 115.53 110.12"
                className="star-icon"
              >
                <polygon
                  className="starSvg"
                  points="57.77 2.5 74.84 37.1 113.03 42.65 85.4 69.59 91.92 107.62 57.77 89.66 23.61 107.62 30.13 69.59 2.5 42.65 40.69 37.1 57.77 2.5"
                />
              </svg>
              <span className="star-rating">{movie.vote_average.toFixed(1)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryScroll;
