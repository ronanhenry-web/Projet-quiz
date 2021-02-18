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

        //Menu quiz
        let tab = []
        for (let i = 0; i < donnée.question.length; i++) {
            tab.push(donnée.question[i]);
        }

        let nombreQt = 0;

        document.querySelector('.btn-next').addEventListener('click', () => {
            start();
        })

        function start(){  
            //Random
            let min = 0;
            let max = tab.length;
            let random = Math.floor(Math.random() * (max - min) + min);
            

            let containerQuestion = document.querySelector('.option-container');
            nombreQt = nombreQt + 1;
            document.querySelector('.numero-question').innerHTML = nombreQt;
            
            while (containerQuestion.firstChild) {
                containerQuestion.removeChild(containerQuestion.firstChild);
            }
            //Stop si toute les valeurs sont passées
            if (tab.length == 0) {
                return;
            } else {
                document.querySelector('.question-text').innerHTML = tab[random].q;

                for (let i = 0; i < tab[random].option.length; i++) {
                    let button = document.createElement("button");
                    button.classList.add("option");
                    button.value = tab[random].option[i];
                    button.innerHTML = tab[random].option[i];
                    let reponse = tab[random].reponse;
                    
                    /*button.addEventListener('click', () => {
                        //console.log(reponse);
                        if(button.value == reponse) {
                            totalCorrect = totalCorrect + 1;
                            button.classList.add("correct");
                            //console.log("bravo");
                            console.log(totalCorrect);
                        } else {
                            button.classList.add("faux");
                            //console.log("dommage");
                        } 
                    });*/
                    
                    document.querySelector('.option-container').appendChild(button);
                    //console.log(donnée.question.option[length]);
                }
                tab.splice(random, 1);
            }
        };
    });