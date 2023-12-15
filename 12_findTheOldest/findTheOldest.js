const findTheOldest = function(people) {
  let oldestPerson;
  people.reduce((oldestAge, currentPerson) => {
    let currentAge;
    if ("yearOfDeath" in currentPerson) {
      currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    } else {
      currentAge = new Date().getFullYear() - currentPerson.yearOfBirth;
    }
    if (oldestAge < currentAge) {
      oldestPerson = currentPerson;
      oldestAge = currentAge;
    }
    return oldestAge;
  }, 0);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
