const middle = function(array) {
  let target = checkLength(array);
  if (target) {
    return returnIndices(target, array);
  } else {
    return [];
  }
};

const checkLength = array => {
  return array.length <= 2 ? false : array.length % 2 === 0 ? 'even' : 'odd';
};

const returnIndices = (oddOrEven, array) => {
  let startIndex = Math.floor(array.length / 2);
  return oddOrEven === 'even' ? [array[startIndex - 1], array[startIndex]] : [array[startIndex]];
};

module.exports = middle;

