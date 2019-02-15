const numButtons = document.querySelectorAll('.num-button');
const opButtons = document.querySelectorAll('.op-button');
const delButton = document.querySelector('#delete');
const equalButton = document.querySelector('#equals');
const backspaceButton = document.querySelector('#backspace');
const decButton = document.querySelector('#decimal');
const userInput = document.querySelector('.userInput');
const result = document.querySelector('.result');

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    if (a == '0' || b == '0') {
        alert('Can\'t divide by zero!');
    } else {
        return a / b;
    }
}

function operate (operator, a, b) {
    if(operator == "+") {
        return add(a,b);
    } else if(operator == "-") {
        return subtract(a,b);
    } else if(operator == "x") {
        return multiply(a,b);
    } else if(operator == "÷") {
        return divide(a,b);
    }
}





