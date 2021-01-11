const countLetters = function(sentence) {
 const numberOfOccurences = {};
 let sentenceNoSpaces = sentence.split(' ').join('');

 for (const letter of sentenceNoSpaces) {
   if (numberOfOccurences[letter]) {
     numberOfOccurences[letter]++;
   } else {
     numberOfOccurences[letter] = 1;
   }
 }
 return numberOfOccurences;
};

module.exports = countLetters;

