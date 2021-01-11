const eqArrays = require('./eqArrays');

const eqObjects = function(objectOne, objectTwo) {
  // Tests that both objects have the same amount of keys, otherwise returns false
  if (!testLengthSame(objectOne, objectTwo)) {
    return false;
  }
  for (const keyOne in objectOne) {
    // for each key in Object one, attempts to find a match in all of the Object two keys
    let keyTwo = keyMatch(keyOne, objectTwo);
    // If a key is found, and the values for both keys are the same, nothing happens, otherwise the below starts
    if (!(keyTwo && objectOne[keyOne] === objectTwo[keyTwo])) {
      // the above may have returned false because both values were an array, so it checks for that
      if (Array.isArray(objectOne[keyOne]) && Array.isArray(objectTwo[keyTwo])) {
        // if both of the values are arrays, compares the two. If they are the same, it continues the loop
        if (eqArrays(objectOne[keyOne], objectTwo[keyTwo])) {
          continue;
        }
      }
      // if they're not arrays, checks if they are objects and compares them recursively. If they match, continue the loop
      if (checkIfObjects(objectOne[keyOne], objectTwo[keyTwo])) {
        if (eqObjects(objectOne[keyOne], objectTwo[keyTwo])) {
          continue;
        }
      }
      // If no matching key is found, or a match is found but the values don't match (after array/object comparison), returns false
      return false;
    }
  }
  return true;
};

const checkIfObjects = (valueOne, valueTwo) => {
  if (typeof valueOne === 'object' && typeof valueTwo === 'object') {
    if (!Array.isArray(valueOne) && !Array.isArray(valueTwo)) {
      return true;
    }
  }
  return false;
};

const keyMatch = function(key, object) {
  // checks if a provided key matches any of the keys in object two. Returns the key if true, and false otherwise
  for (const keys in object) {
    if (keys === key) {
      return keys;
    }
  }
  return false;
};

const testLengthSame = function(objectOne, objectTwo) {
  if (Object.keys(objectOne).length === Object.keys(objectTwo).length) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;


