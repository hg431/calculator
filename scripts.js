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
    if function == "add"
}