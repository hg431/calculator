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

function operate(a, b, function) {
    if function == "add" {
      return add(a,b);
    } else if function == "subtract" {
      return subtract(a,b);
    } else if function == "multiply" {
      return multiply(a,b) 
    } else if function == "divide" {
      return divide(a,b);
    } else {
      return "Function not specified";
    };
};

// Debug

document.getElementByID("debug").textContent += "Add 5 and 4 " + add(5,4) 
                                              + "Subtract 5 from 4 " + subtract(4,5) 
                                              + "Multiply 5 and 4 " + multiply(5,4) 
                                              + "Divide 10 by 2 " + divide(10,2)
                                              + "Operate function 10 add 2" + operate(10,2,"add");