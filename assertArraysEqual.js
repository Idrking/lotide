const eqArrays = require('./eqArrays');

const assertArraysEqual = (firstArray, secondArray) => {

  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅Assertion Passed: ${firstArray} === ${secondArray} ✅`);
  } else {
    console.log(`❌Assertion Failed: ${firstArray} !== ${secondArray} ❌`);
  }
};

module.exports = assertArraysEqual;