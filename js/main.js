let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = '';
    }
    currentInput += value;
    display.innerHTML = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    operand1 = '';
    operand2 = '';
    display.innerHTML = currentInput;
}

function calculate() {
    if (currentInput === '') return;
    
    if (currentInput.endsWith('+') || currentInput.endsWith('-') || currentInput.endsWith('*') || currentInput.endsWith('/')) {
        currentInput = currentInput.slice(0, -1);
    }
    
    let expression = currentInput;
    let result = eval(expression);
    display.innerHTML = result;
    currentInput = result.toString();
}