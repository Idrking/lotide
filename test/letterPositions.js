const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {

  it("should return the correct indices for each letter", () => {
    let actual = letterPositions('hello');
    let expected = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4]
    };

    assert.deepEqual(actual, expected);
  });

  it("should skip over spaces and not assign them to the final object", () => {
    let actual = letterPositions('hell ooh');
    let expected = {
      h: [0, 7],
      e: [1],
      l: [2, 3],
      o: [5, 6]
    };

    assert.deepEqual(actual, expected);
    assert.notProperty(actual, ' ');
  });
});