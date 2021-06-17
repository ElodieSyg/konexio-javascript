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
    for (var i = 1; i <= num; i++) {
        num = num + i;
    }
    console.log(num)
}

addUp(12)

