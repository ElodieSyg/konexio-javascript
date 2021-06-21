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

let dice = null;
let count = 0;

let min = 0;
let max = 6;

while ( dice !== 6 ) {
    dice = Math.floor(Math.random() * (max - min + 1) + min);
    count++
} 

console.log(count);


