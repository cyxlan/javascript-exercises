const palindromes = function (str) {
  // strip non-alphanumeric chars
  let arr = str.toLowerCase().replaceAll(/\W/g, '').split('');
  return arr.every((item, i) => item === arr.reverse()[i]);
};

// Do not edit below this line
module.exports = palindromes;
