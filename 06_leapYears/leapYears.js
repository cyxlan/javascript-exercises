const leapYears = function(year) {
  function divisibleBy(num) {
    if ((year / num) % 1 === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  if (divisibleBy(4) && (!divisibleBy(100) || divisibleBy(400))) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
