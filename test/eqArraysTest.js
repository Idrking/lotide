const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  
  it("should return true if the arrays match", () => {
    let result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(result);
  });

  it("should return false if the values are the same, but the order is different", () => {
    let result = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(result);
  });

  it("should return false if the data types are not the same", () => {
    let result = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(result);
  });
});
