export default function handleSearch(movies) {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchOverlay = document.getElementById('search-overlay');
    const searchResults = document.getElementById('search-results');
    const closeOverlay = document.getElementById('close-overlay');
  
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        const results = movies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        );
  
        searchResults.innerHTML = results
          .map(
            (movie) => `
            <li>
              <img src="${movie.poster_path}" alt="${movie.title}" />
              <h3>${movie.title}</h3>
              <p>${movie.overview}</p>
            </li>
          `
          )
          .join('');
  
        searchOverlay.classList.add('active');
      }
    });
  
    closeOverlay.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchOverlay.classList.remove('active');
      }
    });
  }
  