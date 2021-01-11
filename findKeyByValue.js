const findKeyByValue = function(object, value) {
  for (const keys in object) {
    if (object[keys] === value) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;