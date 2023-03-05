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

let displayValue = "0";

// Add event listeners to numbers 0-9

document.getElementById("0").addEventListener("click", function() {
  buttonClick("0")
  });

document.getElementById("1").addEventListener("click", function() {
  buttonClick("1")
  });
    
document.getElementById("2").addEventListener("click", function() {
buttonClick("2")
});

document.getElementById("3").addEventListener("click", function() {
buttonClick("3")
});

document.getElementById("4").addEventListener("click", function() {
buttonClick("4")
});

document.getElementById("5").addEventListener("click", function() {
buttonClick("5")
});

document.getElementById("6").addEventListener("click", function() {
  buttonClick("6")
});

document.getElementById("7").addEventListener("click", function() {
  buttonClick("7")
});

document.getElementById("8").addEventListener("click", function() {
  buttonClick("8")
});

document.getElementById("9").addEventListener("click", function() {
  buttonClick("9")
});

// Add event listeners for add, multiply, subtract, divide

document.getElementById("add").addEventListener("click", function() {
  buttonClick("add")
});

document.getElementById("multiply").addEventListener("click", function() {
  buttonClick("multiply")
});

document.getElementById("subtract").addEventListener("click", function() {
  buttonClick("subtract")
});

document.getElementById("divide").addEventListener("click", function() {
  buttonClick("divide")
});

const screen = document.getElementById("screen");

document.getElementById("clear").addEventListener("click", function() {
  displayValue = "0";
  screen.textContent = "0";
});

function buttonClick(e) {
  if (e == 0 || e == 1 || e == 2 || 
      e == 3 || e == 4 || e == 5 || 
      e == 6 || e == 7 || e == 8 || e == 9) {
    if (screen.textContent == "0") {
      screen.textContent = e;
    } else {
      screen.textContent += e;
    };
  } else if (e == "add") {
    screen.textContent += "add";
    // screen.textContent += "\u43";
  };
};

document.getElementById("screen").textContent = "0";