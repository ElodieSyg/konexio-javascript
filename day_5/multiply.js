// 02 - Table //

const multiply = (number) => {
    let res = 0;
    
    if (!number) {
        console.log("error");
        return;
    }

    for (var i = 1; i <= 10; i++) {
        res = number * i; 
        console.log(`${number} x ${i} = ${res}`);
    } 
    
}

module.exports = multiply;