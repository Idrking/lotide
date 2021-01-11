const tail = require('../tail');
const assert = require('chai').assert;

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {

  it("should return ['Lighthouse', 'Labs'] when passed ['Hello', 'Lighthouse', 'Labs]", () => {
    let actual = tail(['Hello', 'Lighthouse', 'Labs']);
    let expected = ['Lighthouse', 'Labs'];
    assert.deepEqual(actual, expected);
  });

  it("should return [2, 3] when passed [1, 2, 3]", () => {
    let actual = tail([1, 2, 3]);
    let expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it('should not change the length of the original array', () => {
    let original = ['This', 'is', 'Sparta'];
    tail(original);
    assert.strictEqual(original.length, 3);
  });
});