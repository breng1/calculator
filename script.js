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

let buttonArray = document.querySelectorAll("button");
let currentDisplay = document.querySelector(".display");

buttonArray.forEach ((button) => {
    button.addEventListener('click', () => {
        compute(button);
    });
});

function compute(button) {
    if (button.classList.contains("digit")) {
        if (currentOperation == "") {
            numA += button.value;
            display(numA);
        }
        else {
            numB += button.value;
            display(numB);
        }
    }
    else if (button.classList.contains("operator")){
        display(button.textContent);
        if (currentOperation == "" && numA != "") {
            currentOperation = button.value;
        }
        else if (currentOperation != "") {
            numA = operate(operators[currentOperation], Number(numA), Number(numB));
            display(numA);
            numB = "";
            currentOperation = button.value;
        }
    }
    else if (button.value="enter" && numB != "") {
        numA = operate(operators[currentOperation], Number(numA), Number(numB));
        display(numA);
        numB = "";
        currentOperation = "";
    }
}


// Displays text in the calculator display
function display(text) {
    currentDisplay.textContent = text;
}




