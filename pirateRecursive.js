function getPossibleWords(jumbleLetters, dictionary) {
  var letterCollection = jumbleLetters.split("");
  var possibleWords = [];
  var letterCombination = [];
  var dictionaryToApply = dictionary.filter(function(wordOfLength){
    return wordOfLength.length == jumbleLetters.length;
  });
  console.log("dictionary applied: ", dictionaryToApply);
  generateCombinatioFor(jumbleLetters.length, letterCollection);
  for (var i = 0; i < letterCombination.length; i++) {
    for(var j = 0; j < dictionary.length; j++) {
      if (letterCombination[i] === dictionary[j]) {
        possibleWords.push(letterCombination[i]);
      }
    }
  }
  console.log("possible letter combination (recursive):", letterCombination);

  return possibleWords;

  function generateCombinatioFor(N, letterCollection) {
    if (N == 1) {
      letterCombination.push(letterCollection.join(""));
    } else {
      for (var i = 0; i < N - 1; i++) {
        generateCombinatioFor(N - 1, letterCollection);
        if (N % 2 === 1) {
          swap(letterCollection, 0, N - 1);
        } else {
          swap(letterCollection, i, N - 1);
        }
      }
      generateCombinatioFor(N - 1, letterCollection);
    } //end if
  }

  function swap(chars, i, j) {
      var tmp = chars[i];
      chars[i] = chars[j];
      chars[j] = tmp;
  }
}

console.log("possible words: ", getPossibleWords ("ortsp", ["sport", "parrot", "ports", "matey"]));

