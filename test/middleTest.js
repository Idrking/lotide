const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {
  
  it("should return an empty array when passed [1]", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  
  it("should return an empty array when passed [1, 2]", () => {
    const actual = middle([1, 2]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  
  it("should return [2] when passed [1, 2, 3]", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });

  it("should return [3] when passed [1, 2, 3, 4, 5]", () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert.deepEqual(actual, expected);
  });
  
  it("should return [2, 3] when passed [1, 2, 3, 4]", () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it("should return [3, 4] when passed [1, 2, 3, 4, 5, 6]", () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });
});