import { Movie } from "../models/Movie";

export const getMovies = () => {
  return fetch("https://imdb-api.com/en/API/Top250Movies/k_k1tnzzj5")
    .then((res) => res.json())
    .then((movies) => movies.map((movie) => userObjToModel(movie)));
};

export const userObjToModel = (movie) =>
  new Movie(movie.id, movie.title, movie.image);
