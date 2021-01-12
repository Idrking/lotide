const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it("should return true if given identical objects", () => {
    let objectOne = {dog: 2, cat: 1}
    let objectTwo = {dog: 2, cat: 1}
    assert.isTrue(eqObjects(objectOne, objectTwo));
  });

  it("should return false if the keys match, but the values are different", () => {
    let objectOne = {dog: 1, cat: 1}
    let objectTwo = {dog: 2, cat: 1}
    assert.isFalse(eqObjects(objectOne, objectTwo));
  });

  it("should return false is the values match but the keys are different", () => {
    let objectOne = {reginald: 2, cat: 1}
    let objectTwo = {dog: 2, cat: 1}
    assert.isFalse(eqObjects(objectOne, objectTwo));
  });

  it("should return true if some values are arrays", () => {
    let objectOne = {dog: 2, cat: [1]}
    let objectTwo = {dog: 2, cat: [1]}
    assert.isTrue(eqObjects(objectOne, objectTwo));
  });

  it("should return true if some values are nested arrays", () => {
    let objectOne = {dog: 2, cat: [1, [2]]}
    let objectTwo = {dog: 2, cat: [1, [2]]}
    assert.isTrue(eqObjects(objectOne, objectTwo));
  });

  it("should return true for nested objects", () => {
    let objectOne = {dog: 2, cat: {legs: 'too many'}}
    let objectTwo = {dog: 2, cat: {legs: 'too many'}}
    assert.isTrue(eqObjects(objectOne, objectTwo));
  });
});