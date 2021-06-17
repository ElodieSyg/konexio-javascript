// 01 - Object //

let cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}

// console.log(cat);
// console.log(cat.age);

if (cat.isCute !== false) {
//    console.log("So cute !")
}

// 02 - Combine //

let cat2 = {
    name: "Minou",
    age: 5,
    isCute: false,
}

let cats = [cat, cat2];
// console.log(cats);

// console.log(cat.age);
// console.log(cat["age"]);

// console.log(cat2.isCute);
// console.log(cat2["isCute"]);

// 03 - Even //

function checkIfEven (num) {
    if (num % 2 === 0) {
        // console.log("even");
    } else {
        // console.log("odd");
    }
}

checkIfEven (13)

// 04 - Compare //

function compare (num1, num2) {
    if (num1 > num2) {
       // console.log("num 1 is bigger")
    } else if (num1 === num2) {
       // console.log("both are the same")
    } else {
       // console.log("num2 is bigger")
    }
}

// compare(2,3)

// 05 - Add up // 

function addUp (num) {
    var limit = num;
    for (var i = 1; i < limit; i++) {
        num = num + i;
    }
    // console.log(num)
}

addUp(12)

// 06 - Time //

function format (num) {
    let hours = (num / 3600) // 3600 = nombre de secondes dans une heure
    let hoursTotal = Math.floor(hours)
    num %= 3600;
    let minutes = Math.floor(num / 60) // 60 = minutes dans une heure
    let second = num % 60;

    //console.log(hoursTotal, ":", minutes,":", second,":");
    console.log(`${hoursTotal}:${minutes}:${second}`)
}

format(4550)

// Bonus 01 //

function generatePassword (num) {
    if ( num < 6 || num > 15 ) {
        console.log("Error")
        return;
    }   

    var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var stringLength = num;
    var randomString = "";

    for (var i = 0; i < stringLength; i++) {
        var index = Math.floor(Math.random() * string.length);
        randomString += string.charAt(index);
    }
    console.log(randomString);
}

generatePassword(8)

// Bonus 02 //

function launchDice (numberOfDice) {
    var dice = [1, 2, 3, 4, 5, 5];


    for ( var i = 0; i < numberOfDice; i++ ) {
        var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        console.log(random);
    }
return;
}
    launchDice(6)

