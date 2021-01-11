const takeUntil = (array, callback) => {
  const results = [];
  for (let ele of array) {
    if (!callback(ele)) {
      results.push(ele);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;