const { assert } = require('chai');
const countOnly = require('../countOnly');
describe('#countOnly', () => {
  
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("should count Jason once when passed firstNames", () => {
    assert.propertyVal(result1, 'Jason', 1);
  });

  it("should count Fang once when passed firstNames", () => {
    assert.propertyVal(result1, 'Fang', 2);
  });

  it("should not create a property for names who don't appear in the list", () => {
    assert.notProperty(result1, 'Karima');
    assert.notProperty(result1, 'Agouhanna');
  });
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
