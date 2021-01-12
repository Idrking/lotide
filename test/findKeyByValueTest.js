const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {

  it("should return the key 'dog' when passed {dog:1, cat:2} and 1", () => {
    let object = {dog:1, cat:2};
    let actual = findKeyByValue(object, 1);
    let expected = 'dog';
    assert.strictEqual(actual, expected);
  });

  it("should return undefined when no value matches", () => {
    let object = {dog:1, cat:2};
    let actual = findKeyByValue(object, 'Find me the key dog');
    assert.isUndefined(actual);
  });
});