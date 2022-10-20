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

let a = "";
let b = "";
let currentOperation = "";
let entry = "";


let buttonArray = document.querySelectorAll("button");
let currentDisplay = document.querySelector(".display");

buttonArray.forEach ((button) => {
    button.addEventListener('click', () => {
        compute(button);
    });
});

function compute(button) {
    entry = button.value;
    if (button.classList.contains("digit")) {
        if (currentOperation == "") {
            a += entry;
            display(a);
        }
        else {
            b += entry;
            display(b);
        }
    }
    else if (button.classList.contains("operator")){
        display(button.textContent);
        if (currentOperation == "" && a != "") {
            currentOperation = entry;
        }
        else if (currentOperation != "") {
            a = operate(operators[currentOperation], Number(a), Number(b));
            display(a);
            b = "";
            currentOperation = entry;
        }
    }
    else if (button.value="enter" && b != "") {
        a = operate(operators[currentOperation], Number(a), Number(b));
        display(a);
        b = "";
        currentOperation = "";
    }
}

// Displays text in the calculator display
function display(text) {
    currentDisplay.textContent = text;
}




