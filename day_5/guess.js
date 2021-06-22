// 04 - Guess //

let min = 1;
let max = 100;
let mysteryNum = Math.floor(Math.random() * (max - min) + min);
//console.log(mysteryNum);

var prompt = require("prompt");

prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

prompt.get(["number"], function (err, res) {
    if (err) {
        return onErr(err);
    }

    console.log("Le nombre est :")
    console.log("=>" + res.number);

while (res.number !== mysteryNum) {

}
});

