const flatten = (array) => {
  let arrayToFlatten = [...array];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      let tempArray = arrayToFlatten[i];
      arrayToFlatten.splice(i, 1);
      for (let j = tempArray.length - 1; j >= 0; j--) {
        arrayToFlatten.splice(i, 0, tempArray[j]);
      }
    }
  }
  return arrayToFlatten;
};

module.exports = flatten;