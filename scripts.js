// Addition

const add = function (a, b) {
  return a + b;
};

// Subtract

const subtract = function (a, b) {
  return a - b;
};

// Multiply

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

// Division

const divide = function (a, b) {
  return a / b;
};

// Operate
let operator = "";

const operate = function(a, b, operator) {
  if (operator == "add") {
    return add(a,b);
  } else if (operator == "subtract") {
    return subtract(a,b);
  } else if (operator == "multiply") {
    return multiply([a,b]) 
  } else if (operator == "divide") {
    return divide(a,b);
  } else {
    return "Function not specified";
  };
};

// Debug

console.log("Operate Add 5 and 4 " + operate(5,4,"add"));
console.log("Operate Subtract 5 from 4 " + operate(4,5,"subtract"));
console.log("Operate Multiply 5 and 4 " + operate(5,4,"multiply"));
console.log("Operate Divide 10 by 2 " + operate(10,2,"divide"));

let displayValue = "0";

// Add event listeners to each button

const zeroClick = document.getElementById("0");
zeroClick.addEventListener("click", function() {
  buttonClick("0")
});

// Repeat for all numbers

// Operators

const divideClick = document.getElementById("divide");
divideClick.addEventListener("click", function() {
  buttonClick("divide")
});

// Repeat for all operators

const screen = document.getElementById("screen");

const clearClick = document.getElementById("clear");
clearClick.addEventListener("click", function() {
  displayValue = "0";
  screen.textContent = "0";
});


function buttonClick(e) {
  screen.textContent = "buttonClick " + e;
};

document.getElementById("screen").textContent = "Testing";