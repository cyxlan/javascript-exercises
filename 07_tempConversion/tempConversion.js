const convertToCelsius = function(f) {
  let result = (f - 32) * (5/9);
  if (result % 1 !== 0) {
    result = +result.toFixed(1);
  }
  return result;
};

const convertToFahrenheit = function(c) {
  let result = c * (9/5) + 32;
  if (result % 1 !== 0) {
    result = +result.toFixed(1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
