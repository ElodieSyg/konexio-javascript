/*     // 01 - Array //

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);

    // 02 - Access //

var ingredients = ["eggs", "milk", "butter"];

// Faire apparaître "milk" :
console.log(ingredients[0]);

// Faire apparaître l'index de butter :
console.log(ingredients.indexOf("butter"));

    // 03 - Add and remove //

var objects = ["pen", "book", "lamp"];

// Ajouter "chair" au début du tableau :
objects.unshift("chair");
console.log(objects);

// Enlevez "lamp" :
objects.pop("lamp");
console.log(objects);

// Ajouter "laptop" à la fin du tableau :
objects.push("laptop");
console.log(objects);

// Enlevez "chair" :
objects.shift("chair");
console.log(objects);

    // 04 - Order //

var numbers = [4, 10, 8, 12, 6];

const reverse = numbers.reverse();
console.log(reverse);

const sort = numbers.sort((a, b) => b - a);
console.log(sort);

    // 05 - Boucle //

var total = 0;
var limit = 10;

// i++ = i + 1
for (var i = 0; i <= limit; i++) {
    total = total + i;
    console.log(total);}
 
     // 06 - Reverse //

var sentence = "Hello Konexio";
var reverseSentence = "";

for (var i = 12; i >= 0; i--) {
    reverseSentence = reverseSentence + sentence[i];
}

console.log(reverseSentence);
 */
    //01 - Bonus //

var start = 0;
var end = 100;

for (var i = 0; i <= end; i ++) {
} if ( i % 3 === 0 && i % 5 == 0 ) {
    console.log("Fizzbuzz", i);
    } else if ( i % 3 === 0 ) {
        console.log("Fizz", i);
    } else if ( i % 5 === 0 ) {
        console.log("Buzz", i);
    } else if ( i % 7 === 0) {
        console.log(i)
    } else {
        console.log(i);
    }
} 

    // 02 - Bonus //
/* 
var total = 0;
var limit = 10;
var i = 1;

while (i <= limit) {
    total = total + i;
    i++;
}

console.log(total);

    // 03 - Bonus //

var promo = ["Eliott", "Julien", "Anthony", "Laura", "Elisabeth", "Baydir", "Amadou", "Kévin", "Victor", "Andy", "Ange", "Artha", "Emran", "Yangchen", "Rahmad", "Amar", "Asaad"];

const random = Math.random(promo);
console.log(random);vneosf$espjôj */