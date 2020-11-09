// String-1 -- makeOutWord
// https://codingjs.wmcicompsci.ca/exercise.html?name=makeOutWord&title=String-1

// Given an "out" string length 4, such as "<<>>",
// and a word, return a new string where the word is
// in the middle of the out string, e.g. "<<word>>".
// Note: use str.substring(i, j) to extract the String
// starting at index i and going up to but not including index j.

// Examples

// makeOutWord('<<>>', 'Yay') → <>
// makeOutWord('<<>>', 'WooHoo') → <>
// makeOutWord('[[]]', 'word') → [[word]]

function makeOutWord(out, word) {
  let front = out.substring(0, 2);
  let end = out.substring(2, 4);
  return front + word + end;
}

console.log(makeOutWord("[[]]", "word"));
