const eqArrays = (firstArray, secondArray) => {
  let arrayLength = 0;
  if (compareLength(firstArray, secondArray)) {
    arrayLength = firstArray.length;
  } else {
    return false;
  }

  for (let i = 0; i < arrayLength; i++) {
    
    if (Array.isArray(firstArray[i]) && Array.isArray(secondArray[i])) {
      if (eqArrays(firstArray[i], secondArray[i])) {
        continue;
      }
    }
    
    if (!(firstArray[i] === secondArray[i])) {
      return false;
    }
  }

  return true;
};

const compareLength = (firstArray, secondArray) => {
  return firstArray.length === secondArray.length;
};

module.exports = eqArrays;
