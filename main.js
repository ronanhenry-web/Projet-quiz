//utiliser le fetch
//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

fetch("quiz.json")
    .then(function(response) { return response.json(); })
    .then(function(donnée) {

        //Menu start
        const thème = document.querySelector(".theme");
        thème.innerHTML = donnée.theme;

        document.querySelector('.btn-start').addEventListener('click', () => {
            document.querySelector('.home-box').classList.add('hide');
            document.querySelector('.quiz-box').classList.remove('hide');
            document.querySelector('.result-box').classList.add('hide');
            start();
        });

        const nombreQts = document.querySelector(".nombre-question");
        nombreQts.innerHTML = donnée.nombreQuestion;
    });