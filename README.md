# MovieStore-Lab 2025

## General Info

This project is a web application designed to provide movie-related information to users. It utilizes the [TMDB (The Movie Database)](https://www.themoviedb.org/) API to fetch and display movie data.

## Project Information

This Project was created by PMC, Dilan and Sowmya. 
- [PMC](https://github.com/PMC)
- [Dilan](https://github.com/dc91)
- [Sowmyak059](https://github.com/Sowmyak059)

This project was created as part of Lexicon learning Course and was part of a Group Project in 2025. We decided to learn to use
Astro, React and JavaScript to create a simple Movie store that uses TMDB.org API to display information about movies the user
potentially want to buy. 

## Features

- **Movie Search**: Users can search for movies by title and view relevant details.
- **Add to Cart**: Add movies to the Cart.
- **Popular Movies**: Displays a list of currently popular movies in each category.
- **Movie Details**: Provides detailed information about selected movies, including release date, overview, and ratings.
- **Display movie categories**: display movies in different categories.
  
## Getting Started

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PMC/moviestore-lab.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd moviestore-lab
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Configure the API**:
   - Create a `.env` file in the root of the project.
   - Add your TMDB API key to the `.env` file:
     ```env
     API_SECRET_TOKEN=YOUR_TMDB_API_KEY
     ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:4321`.

## Technologies Used

- **Astro**: A modern static site builder.
- **Tailwind CSS**: For styling the application.
- **TMDB API**: Provides movie data for the application.
- **Pico CSS**: Minimal CSS from Pico

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [Astro Quick Start Course](https://youtu.be/XoIHKO6AkoM)

## Other resources (add if you find anything)

- [5 ways to load data](https://youtu.be/aS5id2273gY?si=4ukuxpXhy0GvO2ly) also watch this guy youtube channel because he has a lot of astro videos.
- [Picocss documentation](https://picocss.com/docs)
- [Example themes from Astro own repo](https://github.com/withastro/astro/tree/latest/examples)
- [Live Code: Dev Learning Portfolio App in Astro](https://www.youtube.com/watch?v=4xJsAgQYVkE)


