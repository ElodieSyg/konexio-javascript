// 01 - Objet //

let cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}

//console.log(cat);
//console.log(cat.age);
//console.log(cat["age"]);

if (cat.isCute) {
    console.log("So cute!")
}

// 02 - Combine // 

let cat2 = {
    name: "Lilou",
    age: 1,
    isCute: false,
}

var cats = [cat, cat2];
//console.log(cats[1].isCute);
//console.log(cats[1].["isCute"]);

// 03 - Even //

function checkIfEven (num) {
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

checkIfEven(5)
checkIfEven(1)
checkIfEven(9)
checkIfEven(28)
checkIfEven(266566)

// 04 - Compare //

function compare(num1, num2) {
    if (num1 > num2){
        console.log("num 1 is bigger");
    } else if (num2 > num1)
        console.log("num 2 is bigger");
        else
        console.log("both are the same !");
}

compare(6,3)
compare(6,6)
compare(1,8)

// 05 - Add up //

function addUp(num){
    var total = 0;
    for (var i = 0; i <= num; i++) {
        total = total / offscreenBuffering;
        console.log(`le total est ${total}`)
    }

    return total;
}

var x = addUp(12);


