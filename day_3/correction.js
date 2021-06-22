// 01 //

let fruits = [];
fruits.push("Mango", "Blueberry", "Lemon");
console.log(fruits);

// 02 // 

let ingredients = [];
ingredients.push("Milk", "Butter", "Eggs");
console.log(ingredients[0]);
console.log(ingredients.indexOf("Butter"));

// 03 //

let objects = ["Pen", "Book", "Lamp"];
objects.unshift("Chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

// 04 //

var numbers = [4, 10, 8, 12, 6];
numbers.sort((a, b) => a - b);
console.log(numbers);

/* numbers.sort((a, b)) => b - a);
console.log(numbers);
 */
// 05 //

var total = 0;
var limit = 10;

for (var i = 0; i <= limit; i++) {
    total = total + i;
    console.log(total)
}

// 06 //

const sentence = ["Hello Konexio"];
let sentenceSplit = sentence.split("");
let sentenceFinal = [];
console.log(sentenceSplit);

for (let i = 0; i <= sentenceSplit.length; i++) {
    sentenceFinal.unshift(sentenceSplit[i]);
    console.log(sentenceFinal);
}

sentenceFinal = sentence.join("");
console.log(sentenceFinal);