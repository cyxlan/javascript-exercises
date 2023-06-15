const removeFromArray = function(array, ...values) {
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    array = removeValue(value);
  }

  function removeValue(value) {
    valueIndex = array.indexOf(value);
    // if the value is not present, return the array unchanged
    if (valueIndex === -1) {
      return array;
    }
    arrayLeft = array.slice(0, valueIndex);
    arrayRight = array.slice(valueIndex);
    arrayRight.shift();
    result = arrayLeft.concat(arrayRight);
    return result;
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
