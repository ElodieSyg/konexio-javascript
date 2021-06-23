// 03 -  Unique //
let number = [];
let result = 0;
let count = 0;

for (var i = 0; i < 50; i++) {
    let random = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    number.push(random);
}

console.log(number);

let x = 0;
let first = number[x];

while ( (first >= 75 && first <= 100) !== true ) {
    first = number[x];
    x++
}

console.log(`Le resultat est : ${first}`);