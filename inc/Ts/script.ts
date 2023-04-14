import { apiKey } from "./api";

const baseUrl = `https://api.themoviedb.org/3/`;

const baseUrlImage = `https://image.tmdb.org/t/p/w185/`;
/* les plus populaire */
const popularMovie = `https://api.themoviedb.org/3/movie/popular?${apiKey}&language=fr-FR&page=1`;
/* les Mieux Notés  */
const TopRated = `https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=fr-FR&page=1`;
/* film A venir */
const UpComing = `https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=fr-FR&page=1`;

const Moreview = ``;

/* début de film populaire */
async function getDataPopular() {
  try {
    const response = await fetch(popularMovie);
    const data = await response.json();

    const tableauEntier = data.results;
    console.log(tableauEntier);

    for (let i = 0; i < tableauEntier.length; i++) {
      const div = document.createElement("div");
      document.getElementById("moviepopular")?.appendChild(div);
      div.classList.add("popularMovie");
      const img = document.createElement("img");

      const imagePath = baseUrlImage + tableauEntier[i].poster_path;

      img.setAttribute("src", imagePath);
      img.addEventListener("click", async () => {
        console.log(tableauEntier[i].id);

        const filmId = tableauEntier[i].id;
        const filmUrl = `${baseUrl}movie/${filmId}?api_key=${apiKey}`;
        console.log(filmUrl);

        // Récupérer les informations du film en utilisant l'ID
        const response = await fetch(filmUrl);
        const data = await response.json();

        // Création de la popup pour afficher les informations du film//
        const popup = document.createElement("div");
        popup.classList.add("popup");
        console.log(popup);

        // Ajout des informations du film à la popup//
        const titre = document.createElement("h1");
        titre.textContent = data.original_title;
        popup.appendChild(titre);

        const réalisateur = document.createElement("p");
        réalisateur.textContent = `Réalisateur : ${data.director}`;
        popup.appendChild(réalisateur);

        const dateSortie = document.createElement("p");
        dateSortie.textContent = `Date de sortie : ${data.release_date}`;
        popup.appendChild(dateSortie);
        
        const note = document.createElement("p");
        note.textContent = `Note : ${data.vote_average}`;
        popup.appendChild(note);
        
        const synopsis = document.createElement("p");
        synopsis.textContent = data.overview;
        popup.appendChild(synopsis);

        // Affichage de la popup//
        document.body.appendChild(popup);


        // Création du bouton "Fermer"
const closeButton = document.createElement("span");
closeButton.textContent = "Fermer";
closeButton.classList.add("close-button");
popup.appendChild(closeButton);

// Ajout de l'écouteur d'événements pour le bouton "Fermer"
closeButton.addEventListener("click", () => {
  popup.remove(); // Supprime la popup de la page
});

// Ajout de l'écouteur d'événements pour la popup
popup.addEventListener("click", (event) => {
  // Vérifie si l'événement est sur le contenu de la popup ou le bouton "Fermer"
  if (!event.target?.closest(".popup-content")) {
    popup.remove(); // Supprime la popup de la page
  }
});

      });

        

      document.querySelector(".popularMovie")?.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  }
}

getDataPopular();


/*fin de film populaire */

/* début de film les mieux notés */

async function getTopRated() {
  try {
    const response = await fetch(TopRated);
    const data = await response.json();

    const tableauEntier = data.results;

    for (let i = 0; i < tableauEntier.length; i++) {
      const div = document.createElement("div");
      document.getElementById("TopRated")?.appendChild(div);
      div.classList.add("RatedTop");
      const img = document.createElement("img");

      const imagePath = baseUrlImage + tableauEntier[i].poster_path;

      img.setAttribute("src", imagePath);
      document.querySelector(".RatedTop")?.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  }
}

getTopRated();

/* fin de film les mieux notés */

/* début de film a venir */

async function getUpComing() {
  try {
    const response = await fetch(UpComing);
    const data = await response.json();

    const tableauEntier = data.results;

    for (let i = 0; i < tableauEntier.length; i++) {
      const div = document.createElement("div");
      document.getElementById("UpComing")?.appendChild(div);
      div.classList.add("ComingUp");
      const img = document.createElement("img");

      const imagePath = baseUrlImage + tableauEntier[i].poster_path;

      img.setAttribute("src", imagePath);
      document.querySelector(".ComingUp")?.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  }
}

getUpComing();
/* fin de film a venir */
