//utiliser le fetch
//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

fetch("quiz.json")
    .then(function(response) { return response.json(); })
    .then(function(donnée) {

        console.log(donnée.thème)
            //Création via HTML
            /*const thème = document.querySelector(".thème");
            const nombreQts = document.querySelector(".nombreQts");
            const question1posée = document.querySelector(".questionposée");
            const Qt1option1 = document.querySelector(".Qt1option1");
            const Qt1option2 = document.querySelector("Qt1option2");
            const Qt1option3 = document.querySelector("Qt1option3");
            const Qt1option4 = document.querySelector("Qt1option4");
            //Affichage et récupération via JSON & HTML
            document.querySelector('.thème').innerHTML = donnée.thème;
            document.querySelector('.nombreQts').innerHTML = donnée.nombreQts;
            document.querySelector('.questionposée').innerHTML = donnée.question.question1.question1posée;
            document.querySelector('.Qt1option1').innerHTML = donnée.question.question1.Qt1option1;
            document.querySelector('.Qt1option2').innerHTML = donnée.question.question1.Qt1option2;
            document.querySelector('.Qt1option3').innerHTML = donnée.question.question1.Qt1option3;
            document.querySelector('.Qt1option4').innerHTML = donnée.question.question1.Qt1option4;*/

        /*const questionNumber = document.querySelector(".question-number");
        const questionText = document.querySelector(".question-text");
        const optionContainer = document.querySelector(".option-container");

        let questionCounter = 0;
        let currentQuestion;
        let availableQuestions = [];

        function setavailableQuestions() {
            const totalQuestion = donnée.question.length;
            for(let i = 0; i < totalQuestion; i++) {
                console.log(i);
            }
        }

        window.onload = function() {
            setavailableQuestions();
        }*/
    });