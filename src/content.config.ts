import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const apiMovies = defineCollection({
    loader: file("src/content/movies.json", { parser: (text) => JSON.parse(text).results })
});

const movieInfo = defineCollection({
    loader: file("src/content/939243.json", { parser: (text) => JSON.parse(text).results })
});


 export const collections = {
     apiMovies,movieInfo
 };