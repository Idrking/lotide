const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {

  it("should return [1, 2, 3] when passed [1, [2, 3]", () => {
    let actual = flatten([1, [2, 3]]);
    let expected = [1, 2, 3];
    assert.deepEqual(actual, expected);
  });

  it("should return [1, 2, 'dog'] when passed [1, [2, 'dog']", () => {
    let actual = flatten([1, [2, 'dog']]);
    let expected = [1, 2, 'dog'];
    assert.deepEqual(actual, expected);
  });

  it("should return an identical array if no nested elements are present", () => {
    let actual = flatten([1, 2, 3]);
    let expected = [1, 2, 3];
    assert.deepEqual(actual, expected);
  });

  it("should not modify the original array", () => {
    let original = [1, [3, 4]];
    flatten(original);
    assert.strictEqual(original.length, 2);
  });
});