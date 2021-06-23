// 02 - Max //
let number = [];
let result = 0;

for (var i = 0; i < 50; i++) {
    let random = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    number.push(random);
}

console.log(number);

let max = 0;

for (var i = 0; i < 50; i++) {
    if (number[i] > max) {
        max=number[i];
    }
}

console.log(`Le chiffre maximal est : ${max}`);

