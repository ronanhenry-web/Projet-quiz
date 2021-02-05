//utiliser le fetch
//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

fetch("quiz.json")
    .then(function(response) { return response.json(); })
    .then(function(donnée) {
        //console.log(donnée.theme)

        const thème = document.querySelector(".theme");
        thème.innerHTML = donnée.theme;

        const nombreQts = document.querySelector(".nombre-question");
        nombreQts.innerHTML = donnée.nombreQuestion;

        /*const numeroQuestion = document.querySelector(".numero-question");
        document.querySelector('.numero-question').innerHTML = ;*/

        const q = []; //questions
        //Permet d'avoir dans une variable les questions
        for (let i = 0; i < donnée.question.length; i++) {
            let qT = donnée.question[i].q;
            q.push(qT);
            //console.log(q);
        }

        let o = [] //responses
        for (let i = 0; i < donnée.length; i++) {
            let option = donnée.question[i].option;
            o.push(option);
            for (let i = 0; i <= 4; i++) {
                let rep = document.querySelector('.option').innerHTML = donnée.option[i];
                o.push(rep);
            }
        }
        console.log(o);

        document.querySelector('.btn-next').addEventListener('click', () => {
            let min = 0;
            let max = q.length;
            let random = Math.floor(Math.random() * (max - min)) + min;
            if (q.length == 0) {
                return "Fin du quiz";
            } else {
                document.querySelector('.question-text').innerHTML = q[random];
                console.log(q[random]);
                q.splice(random, 1);
            }
        })


    });