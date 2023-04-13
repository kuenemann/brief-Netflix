// Définir l'URL de l'API et la clé API

import { apiKey } from "./api";

const baseUrl = `https://api.themoviedb.org/3/`;

const baseUrlImage = `https://image.tmdb.org/t/p/w185/`;

const popularMovie = `https://api.themoviedb.org/3/movie/popular?${apiKey}&language=fr-FR&page=1`;
/* const popularMovie = `https://api.themoviedb.org/3/movie/popular?${apiKey}&language=fr-FR&page=15e61d1843c2d222ebce46137`; */

const Moreview = ``;


async function getDataPopular() {
  try {
    const response = await fetch(popularMovie);
    const data = await response.json();

    const tableauEntier = data.results;
    console.log(tableauEntier);
    

    for (let i = 0; i < tableauEntier.length; i++) {
      const div = document.createElement("div");
      document.getElementById("movie-info")?.appendChild(div);
      div.classList.add("movie-info");
      const img = document.createElement("img");

      const imagePath = baseUrlImage + tableauEntier[i].poster_path;

      img.setAttribute("src",imagePath);
      document.querySelector(".movie-info")?.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  }
}

getDataPopular();

/* async function getDataView() {
  try {
    const response = await fetch(popularMovie);
    const data = await response.json();

    const tableauEntier = data.results;

    for (let i = 0; i < tableauEntier.length; i++) {
      const div = document.createElement("div")
      document.getElementById('movie-info')?.appendChild(div)
      div.classList.add("movie-info");
      const img = document.createElement("img");

      const imagePath = baseUrlImage + tableauEntier[i].poster_path;

      img.setAttribute("src", imagePath);
      document.querySelector(".movie-info")?.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  } 
}

getDataView(); */
