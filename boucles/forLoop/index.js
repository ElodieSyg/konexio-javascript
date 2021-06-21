// 01 - Somme des carrés //

/* function pow () {
    var total = 0;

    for (var i = 5; i <= 10; i++) {
        total = i * i  + total
    }

    return total;
}

var resultat = pow();
console.log(resultat);
 */

// 02 - Comptons //
/* let total = 0;

for (var i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
    total = total + 1
    }
} 
console.log(total);
 */

// 03 - Chanceux //
/* let total = 0;
let min = 1;
let max = 6;

for (var i = 0; i <= 20; i++) {
    const random = Math.floor(Math.random() * (max - min) + min);
    console.log(random)
        if (random >= 5) {
            total = total + random;
        }
}
console.log(total);
 */

// 04 - Des boîtes // 
/* var box1 = 12;
var box2 = 5;

// 2 itérations
// i = 12
// i = 13        TANT QUE i < 14
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
    // i++
}

console.log(box1);
console.log(box2);
console.log(i);

// Variables
// box1 : 17
// box2 : 30

// Affichages :
// 10
// 34
// 17
// 30
// 14
 */

// 05 - De setiob //

/* var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);
 */
// 4 Itérations
// i = 12 / i = 9 / i = 6 / i = 3

// Variables :
// box1 = 24
// box1 = 33

// Affichages : 
// 12
// 24
// 33
// 39
// 42

// console.log(box1); 42
// console.log(i); 0

// 06 - Encore des boîtes //

var box1 = 0;
var box2 = 3;

for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);

// 3 itérations 

// Première itération :
// i = 0
// console.log() = 0
// box2 = 4

// Seconde itération :
// i = -1
// console.log() = -3
// box1 = -1 

// Troisième itération :
// i = -2
// console.log() = -3
// box2 = 5

// Quatrième itération : 


// Affichages :
// i = 0: 0
// i = -1: 3
// i = -2: -3
// i = -3: 2
// box1 = -2
// box2 = 5
// i = -4
