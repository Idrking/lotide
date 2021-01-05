const without = (source, itemsToRemove) => {
  let returnedArray = source;
  for (let items of itemsToRemove) {
    returnedArray = returnedArray.filter(element => element !== items);
  }

  return returnedArray;
};
