// 01 - Calculator //

const argv1 = process.argv[2];
const argv2 = process.argv[3];
const argv3 = process.argv[4];

function calculate (num, num1, operator) {
    let res = 0;

    switch (operator) {
        case 'x':
            res = num * num1;
            break;
        case '/':
            res = num / num1;
            break;
        case '+':
            res = num + num1;
            break;
        case '-':
            res = num - num1;
            break;
        case '%':
            res = num % num1;
            break;
        default:
            console.log("Error");
            break;
    }
    return res;
}

const result = calculate(argv1, argv2, argv3);
console.log(result);