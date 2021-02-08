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

        /*const numeroQuestion = document.querySelector(".numero-question");
        document.querySelector('.numero-question').innerHTML = ;*/

        const nombreQts = document.querySelector(".nombre-question");
        nombreQts.innerHTML = donnée.nombreQuestion;

        const q = []; //questions
        //Permet d'avoir dans une variable les questions
        for (let i = 0; i < donnée.question.length; i++) {
            let qT = donnée.question[i].q;
            q.push(qT);
            //console.log(q);
        }

        let tab = []
        for (let i = 0; i < donnée.question.length; i++) {
            tab.push(donnée.question[i]);
        }
        //console.log(tab[1].option[1]);

        document.querySelector('.btn-next').addEventListener('click', () => {
            let min = 0;
            let max = q.length;
            let random = Math.floor(Math.random() * (max - min)) + min;
            if (q.length == 0) {
                return;
            } else {
                document.querySelector('.question-text').innerHTML = q[random];
                //console.log(q[random]);
                q.splice(random, 1);
                for (let i = 0; i < donnée.question[random].option.length; i++) {
                    let button = document.createElement("button");
                    button.classList.add("option");
                    button.innerHTML = tab[0].option[i];
                    document.querySelector('.option-container').appendChild(button);
                    //tab[0].option[i].splice();
                    //console.log(donnée.question.option[length]);
                }

            }
        })


    });