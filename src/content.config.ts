import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const apiMovies = defineCollection({
    loader: file("src/content/movies.1.json", { parser: (text) => JSON.parse(text).results })
});


 export const collections = {
     apiMovies
 };