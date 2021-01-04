const head = (array) => array[0];

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

