// Addition

const add = function (a, b) {
  return Number(a) + Number(b);
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
  if (b == 0) {
    return screen.textContent = "Error";
  };
  return (a / b).toFixed(3);
};

// Operate
let operator = "";

const operate = function(a, b, operator) {
  if (operator == "+") {
    return add(a,b);
  } else if (operator == "−") {
    return subtract(a,b);
  } else if (operator == "×") {
    return multiply([a,b]) 
  } else if (operator == "÷") {
    return divide(a,b);
  } else {
    return "Function not specified";
  };
};

let displayValue = "0";

// Add event listeners to numbers 0-9 and decimal

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

document.getElementById("decimal").addEventListener("click", function() {
  buttonClick("decimal")
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

// Add event listeners for clear and equals

const screen = document.getElementById("screen");

document.getElementById("clear").addEventListener("click", function() {
  displayValue = "0";
  screen.textContent = "0";
});

document.getElementById("equals").addEventListener("click", function() {

  console.log("displayValue " + displayValue);
   
  let finalAnswer = displayValue.split(/([+×÷−])/);
  console.log("Initial finalAnswer: " + finalAnswer);

  // If multiple decimal places in each number, return an error

  if ((finalAnswer.slice(0,1).toString().match(/\./g) || []).length > 1 
      || (finalAnswer.slice(2,3).toString().match(/\./g) || []).length > 1 
      || (finalAnswer.slice(4,5).toString().match(/\./g) || []).length > 1 
      || (finalAnswer.slice(6,7).toString().match(/\./g) || []).length > 1) {
    return screen.textContent = "Error";
  };

  while (finalAnswer.length > 1) {

    let intermediateAnswer = operate(finalAnswer[0],finalAnswer[2],finalAnswer[1]);
    console.log("Intermediate answer: " + intermediateAnswer);

    finalAnswer.splice(0, 3, intermediateAnswer);
    console.log("Final answer: " + finalAnswer);
  };

  screen.textContent = finalAnswer.toString();
  displayValue = finalAnswer;

});

// Function to update the screen and the variable every time a button is clicked

function buttonClick(e) {
  if (e == 0 || e == 1 || e == 2 || 
      e == 3 || e == 4 || e == 5 || 
      e == 6 || e == 7 || e == 8 || e == 9) {
    if (screen.textContent == "0") {
      screen.textContent = e;
      displayValue = e;
    } else {
      screen.textContent += e;
      displayValue += e;
    };
  } else if (e == "add") {
    screen.textContent += "+";
    displayValue += "+";
  } else if (e == "multiply") {
    screen.textContent += "×";
    displayValue += "×";
  } else if (e == "divide") {
    screen.textContent += "÷";
    displayValue += "÷";
  } else if (e == "subtract") {
    screen.textContent += "−";
    displayValue += "−";
  } else if (e == "decimal") {
    screen.textContent += ".";
    displayValue += ".";
  };
};

// Start the screen off with 0

document.getElementById("screen").textContent = "0";