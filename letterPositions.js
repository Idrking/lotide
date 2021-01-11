const letterPositions = function(sentence) {
  const results = {};
  let str = sentence;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
