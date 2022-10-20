// script.js

// Adds two numbers
function add (a,b) {
    return a + b;
}

// Subtracts two numbers
function subtract (a, b) {
    return a - b;
}

// Multiplies two numbers
function multiply (a, b) {
    return a * b;
}

// Divides two numbers 
function divide (a,b) {
    return a/b;
}

// Performs operation on two numbers
function operate (operator, a, b) {
    return operator(a,b);
}

// Create object to store operators 
const operators = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
}

let numA = "";
let numB = "";
let currentOperation = "";
let isNew = false;

let buttonArray = document.querySelectorAll("button");
let currentDisplay = document.querySelector(".display");

buttonArray.forEach ((button) => {
    button.addEventListener('click', () => {
        compute(button);
    });
});

function compute(button) {
    if (button.classList.contains("digit")) {
        if (currentOperation != "") {
            numB += button.value;
            display(numB);
        }
        else if (!isNew) {
            numA += button.value;
            display(numA);
        }
        else if (isNew){
            numA = button.value;
            display(numA);
            isNew = false;
        }
    }

    else if (button.classList.contains("operator")){
        display(button.textContent);
        if (numA != "" && numB == "") {
            currentOperation = button.value;
        }
        else if (numA != "" && numB != "") {
            calculate();
            currentOperation = button.value;
        }
    }

    else if (button.value="enter" && numB != "") {
        calculate();
    }
}

// Calculates result, given strings: operator name, operand 1, and operand 2
function calculate () {
    numA = operate(operators[currentOperation], Number(numA), Number(numB));
    display(numA);
    numB = "";
    isNew = true;
    currentOperation = "";
}

// Displays text in the calculator display
function display(text) {
    currentDisplay.textContent = text;
}




