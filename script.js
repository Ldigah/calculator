function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate (operator, numA, numB) {
    switch (true) {
        case (operator == '+'):
            return add(numA, numB);
            break;
        case (operator == '-'):
            return subtract(numA, numB);
            break;
        case (operator == '*'):
            return multiply(numA, numB);
            break;
        case (operator == '/'):
            return divide(numA, numB);
            break;
        default:
            alert('Something has gone wrong. Please refresh.');
            clearCalc();
    }
}



