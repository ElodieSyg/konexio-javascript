// 01 - Somme des carrés //

function pow () {
    var total = 0;

    for (var i = 5; i <= 10; i++) {
        total = i * i  + total
    }

    return total;
}

//var resultat = pow();
//console.log(resultat);

// 02 - Comptons //
let total = 0

for (var i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
    total = total + 1
    }
} 

//console.log(total);

