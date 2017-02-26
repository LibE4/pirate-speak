function getPossibleWords(jumbleLetters, dictionary) {
  var N = jumbleLetters.length;
  var letterCollection = jumbleLetters.split("");
  var counter = [];
  var possibleWords = [];
  var dictionaryToApply = dictionary.filter(function(wordOfLength){
    return wordOfLength.length == jumbleLetters.length;
  });
  console.log("dictionary applied: ", dictionaryToApply);
  var letterCombination = [jumbleLetters];
  for (var i = 0; i < N; i++) {
    counter[i] = 0;
  }
  var i = 0;
  while (i < N) {
      if (counter[i] < i) {
          swap(letterCollection, i % 2 === 1 ? counter[i] : 0, i);
          counter[i]++;
          i = 0;
          letterCombination.push(letterCollection.join(''));
      } else {
          counter[i] = 0;
          i++;
      }
  }

  for (var i = 0; i < letterCombination.length; i++) {
    for(var j = 0; j < dictionary.length; j++) {
      if (letterCombination[i] === dictionary[j]) {
        possibleWords.push(letterCombination[i]);
      }
    }
  }
console.log("possible letter combination (non-recursive):", letterCombination);
  return possibleWords;

  function swap(chars, i, j) {
      var tmp = chars[i];
      chars[i] = chars[j];
      chars[j] = tmp;
  }
}

console.log("possible words: ", getPossibleWords ("ortsp", ["sport", "parrot", "ports", "matey"]));

