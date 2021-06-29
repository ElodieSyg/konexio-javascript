var prompt = require("prompt");

prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

function compare (mystere, result) {
    let index = [];

    for ( var i = 0; mystere[i]; i++ ) {
        if ( mystere[i] === result[i] ) {
            console.log(`Index : ${i} lettre : ${mystere[i]}`);
            index.push(i);
        }
    }
return(index);
}

const play = () => {
        prompt.get("word"), function(err, res) {

            let mysteryWord = "konexio";
            let regex = mysteryWord.replace(/[a-z]gi/, "_");
            console.log(regex);

            let count = 10;
            const result = compare(mysteryWord, res.word);

            if (err) {
                return onErr;
            }

            if (mysteryWord[i] !== res.word[i]) {
                console.log(res.word[i].red);
            } else {
                console.log("Try again...");
                play();
            }

            for (var i = 0; i <= count; i++) {
            } if (mysteryWord === res.word) {
                console.log("It's win !!");
            } else {
                console.log(`Oups... plus que ${count-1} chances`);
                play();
            }
        }
}

play();