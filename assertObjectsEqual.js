const eqObjects = function(objectOne, objectTwo) {
  if (!testLengthSame(objectOne, objectTwo)) {
    return false;
  }
  for (const keyOne in objectOne) {
    let keyTwo = keyMatch(keyOne, objectTwo);
    if (!(keyTwo && objectOne[keyOne] === objectTwo[keyTwo])) {
      if (Array.isArray(objectOne[keyOne]) && Array.isArray(objectTwo[keyTwo])) {
        if (eqArrays(objectOne[keyOne], objectTwo[keyTwo])) {
          continue;
        }
      }
      return false;
    }
  }
  return true;
};

const keyMatch = function(key, object) {
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

const eqArrays = (firstArray, secondArray) => {
  let arrayLength = 0;
  if (firstArray.length === secondArray.length) {
    arrayLength = firstArray.length;
  } else {
    return false;
  }

  for (let i = 0; i < arrayLength; i++) {
    if (!(firstArray[i] === secondArray[i])) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅`);
  } else {
    console.log(`❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ❌`);
  }
};
