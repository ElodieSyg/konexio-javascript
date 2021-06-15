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

// Bonus 01 //

var min = 1;
var max = 6;

var random = Math.floor(Math.random() * (max - min + 1) + min);

console.log(random);
 
if (random >= 6) {
    console.log("Yes I win !")
} else {
    console.log("So close...")
}

// Bonus 02 //

var month = "April";

switch (month) {
    case "January":
            console.log("It's Winter !");
        break;
    case "February":
        console.log("It's Winter !");
        break;
    case "March":
        console.log("It's Winter !");
        break;
    case "April":
        console.log("It's Spring !"); 
    break;
    case "May":
        console.log("It's Spring !"); 
    break;
    case "June":
        console.log("It's Spring !"); 
    break;
    case "July":
        console.log("It's Summer !"); 
    break;
    case "August":
        console.log("It's Summer !"); 
    break;
    case "Septembre":
        console.log("It's Summer !"); 
    break;
    case "October":
        console.log("It's Fall !"); 
    break;
    case "November":
        console.log("It's Fall !"); 
    break;
    case "December":
        console.log("It's Fall !"); 
    break;
}

// Bonus 03 //

const roundedNumber = 4830.1;

/* var rounded = Math.round(3.6)
console.log(rounded)
 */

if (roundedNumber % 1 >= 0.5) {
    console.log(Math.floor(roundedNumber));
} else {
    console.log(Math.ceil(roundedNumber));
}

if (roundedNumber % 1 >= 0.5) {
    const res = Math.floor(roundedNumber).toString();
    console.log(res);
} else {
    const res = Math.ceil(roundedNumber).toString();
    console.log(res)
}

// Syntaxe ternaire : première place la condition, seconde place le if et on termine par le else //

const res = roundedNumber % 1 >= 0.5 ? Math.floor(roundedNumber).toString() : Math.ceil(roundedNumber).toString();
console.log(res)

