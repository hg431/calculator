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
    return multiply(a,b) 
  } else if (operator == "divide") {
    return divide(a,b);
  } else {
    return "Function not specified";
  };
};


// Debug

console.log("Add 5 and 4 " + add(5,4));
console.log("Subtract 5 from 4 " + subtract(4,5));
console.log("Multiply 5 and 4 " + multiply([5,4]));
console.log("Divide 10 by 2 " + divide(10,2));
console.log("Operate function 10 add 2" + operate(10,2,"add"));