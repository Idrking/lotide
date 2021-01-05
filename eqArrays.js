const eqArrays = (firstArray, secondArray) => {
  let arrayLength = 0;
  if (firstArray.length === secondArray.length) {
    arrayLength = firstArray.length;
  } else {
    return false;
  };

  for (let i = 0; i < arrayLength; i++) {
    if (!(firstArray[i] === secondArray[i])) {
      return false;
    };
  };

  return true;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};


assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), true);