// 03 - Separate Table //

const addition = (number) => {
    let res = 0;
    
    if (!number) {
        console.log("error");
        return;
    }

    for (var i = 1; i <= 10; i++) {
        //res = parseInt(number) + i;
        res = Number(number) + i;
        console.log(`${number} + ${i} = ${res}`);
    } 
}

module.exports = addition;
