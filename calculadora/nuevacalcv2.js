let result;
let number1 = [];
let number2 = [];

function mathOp() {
    let num1 = prompt('Enter first number: ');
    while (isNaN(num1)) {
        num1 = prompt('Enter A VALID first number: ');
    }
    number1.push(num1);

    let num2 = prompt('Enter second number: ');
    if (num2 === '') {
        console.log(
            `'The square root of ${number1} is ${Math.sqrt(number1)};'`
        );
        return false;
    }

    while (isNaN(num2)) {
        num2 = prompt('Enter A VALID second number: ');
    }
    if (!isNaN(num2)) {
        number2.push(num2);
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result.toFixed(2)}`);
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result.toFixed(2)}`);
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);
        result = number1 += number2;
        console.log(`${number1} + ${number2} = ${result}`);
    }
}
mathOp();
