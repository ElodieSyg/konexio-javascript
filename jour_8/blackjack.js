var prompt = require("prompt");
var colors = require('colors');
prompt.start();

function onErr(err) {
    return console.log("It's lose".red)
}

let score = 0;
let bank = Math.floor(Math.random() * (16 - 22) + 22);
console.log(bank);

const play = () => {
    prompt.get({name: "card", description: "souhaitez-vous tirer une carte? oui ou non"}, function (err, res) {

        if (res.card === "oui") {
            score += Math.floor(Math.random() * (10 - 1) + 1);
            console.log(score);
            play();
        }

        if (score > 21) {
            onErr(err);
        }

        if (score === 21) {
            console.log("BLACK JACK!".red)
        }

        if (res.card === "non") {
            if (score > 21) {
                console.log(`Your score is ${score}`)
                console.log("It's lose...".red);
            } else if (score === 21) {
                console.log("BLACK JACK!".red);
            } else if (score > bank) {
                console.log("IT'S WIN!".red);
            } else if (score <= bank) {
                console.log(`Your score is ${score}`)
                console.log("It's lose...".red);
            }
        } 

        if (score > 16) {
            console.log("pass");
            return;
        }
    });
};
play();
