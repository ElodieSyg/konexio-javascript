// 01 - Number //

var integer = 102;
var float = 13.9;

console.log(integer, float);

// 02 - Couvert //

var basic = 34;
var stringfield = basic.toString();

console.log(stringfield);

// 03 - Round //

var num = 1.5;
var rounded = (Math.round(1.5))

console.log(Math.round(1.5));

// 04 - Arithmétique //

var test = 12;
var bis = 5;

console.log(test + bis);
console.log(test - bis);
console.log(test / bis);
console.log(test * bis);
console.log(test ** bis);
console.log(test % bis);

// 05 - Comparaison //

var test = 143;
var bis = 219;

console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test === bis);
console.log(test !== bis);

// 06 - Condition //

var limit = 50;
var score = 64;

if (score >= limit) {
    console.log("Ok good !")
} else {
    console.log("Oh noooo...")
}

// 07 - Condition II //

var password = "azerty";
/* var minPassword = 5;
 */

if (password.length < 5) {
    console.log("The password is insecure")
}

// 08 - Conditions III //

var limit = 50;
var score = 40;
var password = "azerty";

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

// Bonus 1 //

var min = 1;
var max = 6;

var random = Math.ceil(Math.random() * (max - min + 1) + min);

console.log(Math.random());
 
if (random >= 6) {
    console.log("Yes I win !")
} else {
    console.log("So close...")
}

// Bonus 2 //
