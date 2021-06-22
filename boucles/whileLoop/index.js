// 01 - Comptons //

/* function pair () {
    let start = 50;
    let limit = 200; 

while (start <= limit) {
     if (start % 2 === 0) {
        console.log(`${start} is pair !`);
        start += 1;
    } else {
        console.log(`${start} is impair !`)
        start += 1;
    }
}
}

pair()
 */

// 02 - Try again //

/* let dice = null;
let count = 0;

let min = 0;
let max = 6;

while ( dice !== 6 ) {
    dice = Math.floor(Math.random() * (max - min + 1) + min);
    count++
} 

console.log(count);
 */
// 03 - Course //

let ussainBolt = 0;
let tysonGay = 0;
let min = 1;
let max = 10;

while (ussainBolt < 100 && tysonGay < 100) {
    let random1 = Math.floor(Math.random() * (max - min + 1) + min);
    let random2 = Math.floor(Math.random() * (max - min + 1) + min);

    ussainBolt += random1;
    tysonGay += random2;

    console.log(ussainBolt, tysonGay);
} 

if (ussainBolt > tysonGay) {
    console.log("The winner is Ussain Bolt !");
} else if (tysonGay > ussainBolt) {
    console.log("The winner is Tyson Gay !");
} else {
    console.log("Egality");
}

// 04 - Des boîtes //

var box1 = 12;
var box2 = 5;

while (box1 > 0) {
    console.log(box2);
    box1 -= 10;
    console.log(box1);
}

// Affichage :
// 5
// 2
// 5
// -8

// 05 - Encore des boîtes //

var i = 0;
var box1 = 7;

while (i > 0) {
    i++;
    console.log(box1 + i);
}
console.log(i);
console.log(box1);

// 1 
// 8
