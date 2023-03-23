var screen = document.getElementById('result');
var operand1 = 0;
var operand2 = null;
var operator = null;

function addToScreen(number) {
    screen.value += number;
}

function clearScreen() {
    screen.value = '';
    operand1 = 0;
    operand2 = null;
    operator = null;
}

function backspace() {
    var currentScreen = screen.value;
    var newScreen = currentScreen.substring(0, currentScreen.length - 1);
    screen.value = newScreen;
}

function performOperation() {
    if (operator === '+') {
        operand1 += operand2;
    } else if (operator === '-') {
        operand1 -= operand2;
    } else if (operator === '*') {
        operand1 *= operand2;
    } else if (operator === '/') {
        operand1 /= operand2;
    }
}

function calculate() {
    operand2 = parseFloat(screen.value);
    performOperation();
    screen.value = operand1;
    operand2 = null;
    operator = null;
}

function setOperator(op) {
    if (operator != null) {
        calculate();
    }
    operand1 = parseFloat(screen.value);
    operator = op;
    screen.value = '';
}