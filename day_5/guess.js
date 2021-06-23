var prompt = require("prompt");
// 04 - Guess //

let min = 1;
let max = 100;
let mysteryNum = Math.floor(Math.random() * (max - min) + min);
console.log(`Résultat : ${mysteryNum}`);

prompt.start();

function onErr() {
    console.log("Erreur, ce n'est pas un chiffre. Essaie encore !");
}

function play() {
    prompt.get(["number"], function (err, res) {
                if (isNaN(res.number)) {
                    return onErr(err);
                } else if (res.number > mysteryNum) {
                    console.log("C'est moins !");
                    play();
                } else if (mysteryNum > res.number) {
                    console.log("C'est plus !");
                    play();
                } else {
                    console.log("Bravo !!!");
                    console.log("Le nombre est :")
                    console.log("=>" + res.number);            
                } 
    });
}

play();