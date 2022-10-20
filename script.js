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


let buttonArray = document.querySelectorAll("button");
let currentDisplay = document.querySelector(".display");

buttonArray.forEach ((button) => {
    button.addEventListener('click', () => {
        compute(button);
    });
});

function compute(button) {
    display(button.textContent);
    console.log(button.value);
}

// Displays text in the calculator display
function display(text) {
    currentDisplay.textContent = text;
}



