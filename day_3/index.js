    // 01 - Array //

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
    console.log(i);
    total++
}

console.log(total);



    // 06 - Reverse //

var sentence = "Hello Konexio";
var length = sentence.length;

for (var i = sentence.length; i >= 0; i--) {
    console.log(i);
}