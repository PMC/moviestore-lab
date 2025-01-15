import { defineCollection } from "astro:content";

const apiMovies = defineCollection({
    loader: async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)"
        );
        const data = await response.json();
        
        return [];
    }

})

export const collections = {
    apiMovies
};