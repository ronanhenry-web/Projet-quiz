//utiliser le fetch
//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
//voir quiz prof utilise le meme principe pour importer des donnes pour le JSON
fetch("quiz.json")
    .then(function(response) { return response.json(); })
    .then(function(donne) {

        const theme = document.querySelector(".theme");
        const questionNumber = document.querySelector(".total-question");

        document.querySelector('.theme').innerHTML = donne.theme;
        document.querySelector('.total-question').innerHTML = donne.nombreQts;

    });