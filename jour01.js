// 01 - Hello World //
console.log("Hello World !");


// 02 - String //
var test;
test = "My name is Elodie";

console.log(test)

// 03 - Concatenation //

var name;
name = "Elodie";

console.log("Nice to meet you" + " " + name)

/* console.log(`Nice to meet you ${name}`);
 */

// 04 - String Length //

var testLength;
testLength = "I'm very long !";

console.log(test.length);

// 05 - Replace //

var food;
food = "croissant is meh";

var food = "croissant is meh";
food = food.replace("meh", "so good");

console.log(food);

// 06 - Up and Down //

var basic = "This is Cool";

basicDown = basic.toLowerCase()
basicUp = basic.toUpperCase()

/* console.log(basic);
console.log(basicUp);
console.log(basicDown); */

console.log(basicDown, basicUp);

// 07 - Split //

var word = "banana";

var letters = word.split("");

console.log(letters);

// 08 - Template //

var age;
age = 24;

var template;
template = "I'm years old"

console.log(`I'm ${age} years old`);