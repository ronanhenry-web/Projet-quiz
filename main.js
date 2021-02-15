//utiliser le fetch
//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
fetch("quiz.json")
    .then(function(response) { return response.json(); })
    .then(function(donnée) {
        //console.log(donnée.theme)

        const thème = document.querySelector(".theme");
        thème.innerHTML = donnée.theme;

    });

fetch("quiz.json")
    .then(function(response) { return response.json(); })
    .then(function(donnée) {

        const nombreQts = document.querySelector(".nombre-question");
        nombreQts.innerHTML = donnée.nombreQuestion;

        let tab = []
        for (let i = 0; i < donnée.question.length; i++) {
            tab.push(donnée.question[i]);
        }
        //console.log(tab[0].option);
        //console.log(tab[1].option[1]);

        let nombreQt = 0;

        document.querySelector('.btn-start').addEventListener('click', () => {
            document.querySelector('.home-box').classList.add('hide');
            document.querySelector('.quiz-box').classList.remove('hide');
            document.querySelector('.result-box').classList.add('hide');
        });

        document.querySelector('.btn-next').addEventListener('click', () => {
            let min = 0;
            let max = tab.length;
            let random = Math.floor(Math.random() * (max - min) + min);
            //console.log(tab[random].q);
            let containerQuestion = document.querySelector('.option-container');
            nombreQt = nombreQt + 1;
            document.querySelector('.numero-question').innerHTML = nombreQt;
            while (containerQuestion.firstChild) {
                containerQuestion.removeChild(containerQuestion.firstChild);
            }
            if (tab.length == 0) {
                return;
            } else {
                document.querySelector('.question-text').innerHTML = tab[random].q;
                //console.log(q[random]);
                for (let i = 0; i < tab[random].option.length; i++) {
                    let button = document.createElement("button");
                    button.classList.add("option");
                    button.innerHTML = tab[random].option[i];
                    button.addEventListener('click', () => {
                        console.log("coucou")
                    });
                    document.querySelector('.option-container').appendChild(button);
                    //console.log(donnée.question.option[length]);
                }
                tab.splice(random, 1);
            }
        })

        document.querySelector('.btn-score').addEventListener('click', () => {
            document.querySelector('.home-box').classList.add('hide');
            document.querySelector('.quiz-box').classList.add('hide');
            document.querySelector('.result-box').classList.remove('hide');
        });

        document.querySelector('.btn-restart').addEventListener('click', () => {
            document.querySelector('.home-box').classList.add('hide');
            document.querySelector('.quiz-box').classList.remove('hide');
            document.querySelector('.result-box').classList.add('hide');
        });

        document.querySelector('.btn-menu').addEventListener('click', () => {
            document.querySelector('.home-box').classList.remove('hide');
            document.querySelector('.quiz-box').classList.add('hide');
            document.querySelector('.result-box').classList.add('hide');
        });
    });