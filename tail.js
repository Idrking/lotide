const tail = (array) => array.slice(1);

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};
