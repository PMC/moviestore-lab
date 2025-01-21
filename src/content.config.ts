import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const apiMovies = defineCollection({
    loader: file("src/content/movies.json", { parser: (text) => JSON.parse(text).results })
});

const movieCategories = defineCollection({
    loader: file("src/content/categories.json", { parser: (text) => JSON.parse(text).genres })
});




 export const collections = {
     apiMovies, movieCategories
 };