const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(...nums) {
  return nums.reduce((product, current) => product * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }
  result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
