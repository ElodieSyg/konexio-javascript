var prompt = require("prompt");
var colors = require ('colors');
const { publicEncrypt } = require("crypto");
// Bonus - Motus //

prompt.start();

function onErr(err) {
    console.log("It's lose...".red);
    return;
}

function compare (mystere, result) {
    let index = [];

    for ( var i = 0; mystere[i]; i++ ) {
        if ( mystere[i] === result[i] ) {
          console.log(`Index : ${i} lettre : ${mystere[i]}`);
            index.push(i);
//          index.join("");
        }
    }
return(index);
}

const play = () => {
    let mysteryWord = "motus";
    let limit = 6;

    console.log("Find the wold. This word contains 5 letters :)".blue)
    console.log("If the color is red, the letter is at the good place.".blue)
    console.log("If the color is yellow, try again.".blue)

    prompt.get(["word"], function (err, res) {
        const result = compare(mysteryWord, res.word);

        if (res.word.length !== mysteryWord.length) {
            return onErr(err);
        }

        for ( var i = 0; i <= 6; i++) {
            if (mysteryWord[i] === res.word[i]) {
                console.log(res.word[i]);
            } else {
                 console.log((res.word[i]).yellow);
            }
        }
    });
}

play();