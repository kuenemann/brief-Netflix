import { error } from "jquery";
import { apiKey } from "./api";
/* base url */
const baseUrl = `https://api.themoviedb.org/3/`;
/* url imge */
const baseUrlImage = `https://image.tmdb.org/t/p/w185/`;
/* les plus populaire */
const popularMovie = `https://api.themoviedb.org/3/movie/popular?${apiKey}&language=fr-FR&page=1`;
/* les Mieux Notés  */
const TopRated = `https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=fr-FR&page=1`;
/* film A venir */
const UpComing = `https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=fr-FR&page=1`;
/* api recherche */
const searchMovie = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=fr-FR&page=1&include_adult=false`;

/* const Moreview = ``; */
console.log(popularMovie);

/* début de film populaire */
async function getDataPopular() {
  try {
    const response = await fetch(popularMovie);
    const data = await response.json();

    const tableauEntier = data.results;
    console.log(tableauEntier);
    let movieId;
    for (let i = 0; i < tableauEntier.length; i++) {
      movieId = tableauEntier[i].id;
      console.log(movieId);

      const div = document.createElement("div");
      document.getElementById("moviepopular")?.appendChild(div);
      div.classList.add("popularMovie");
      const img = document.createElement("img");

      const imagePath = baseUrlImage + tableauEntier[i].poster_path;

      img.setAttribute("src", imagePath);
      document.querySelector(".popularMovie")?.appendChild(img);

      // Écoutez le clic sur l'image
      img.addEventListener("click", async () => {
        // Créez une div pour la popup
        const popup = document.createElement("div");
        popup.classList.add("popup");

        // Ajoutez chemin de l'affiche image

        const imagePath = baseUrlImage + tableauEntier[i].poster_path;
        const img = document.createElement("img");
        img.src = imagePath;

        popup.classList.add("popup");
        popup.appendChild(img);
        document.body.appendChild(popup);

        // Ajoutez le titre du film à la popup
        const title = document.createElement("h2");
        title.textContent = tableauEntier[i].title;
        popup.appendChild(title);

        // Ajoutez la description du film à la popup
        const overview = document.createElement("p");
        overview.textContent = tableauEntier[i].overview;
        popup.appendChild(overview);

        // Ajoutez un bouton de fermeture à la popup
        const closeButton = document.createElement("button");
        closeButton.textContent = "Fermer";
        closeButton.style.position = "absolute";
        closeButton.style.top = "0";
        closeButton.style.right = "0";
        closeButton.addEventListener("click", () => {
          popup.remove();
        });
        popup.appendChild(closeButton); /*  */

        // Ajoutez la popup à la page
        document.body.appendChild(popup);

        // Créez une constante pour déterminer si la popup est affichée
        const popupAffichee = true;

        // Ajoutez la popup à la page
        document.body.appendChild(popup);

        // Désactivez le scroll de la page si la popup est affichée
        if (popupAffichee) {
          // Enregistrez la position actuelle de la page
          const positionPage = window.pageYOffset;

          // Désactivez le scroll en modifiant la propriété CSS "overflow" de la page
          document.body.style.overflow = "hidden";

          // Remettez la page à sa position précédente
          window.scrollTo(0, positionPage);
        }

        // Ajoutez un gestionnaire d'événements pour fermer la popup
        popup.addEventListener("click", function () {
          // Fermez la popup
          popup.style.display = "none";

          // Mettez à jour la constante pour indiquer que la popup est fermée
          popupAffichee = false;

          // Réactivez le scroll de la page
          document.body.style.overflow = "auto";
        });

        // Ajoutez un gestionnaire d'événements à la fenêtre pour réactiver le scroll lorsque la popup est fermée
        window.addEventListener("scroll", function () {
          if (!popupAffichee) {
            // Réactivez le scroll en modifiant la propriété CSS "overflow" de la page
            document.body.style.overflow = "auto";
          }
        });
      });
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

