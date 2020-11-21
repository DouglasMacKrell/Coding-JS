// String-2 -- wordEnds
// https://codingjs.wmcicompsci.ca/exercise.html?name=wordEnds&title=String-2

// Given a string and a non-empty word string, return a string
// made of each char just before and just after every appearance
// of the word in the string. Ignore cases where there is no char
// before or after the word, and a char may be included twice if
// it is between two words.

// Examples

// wordEnds('abcXY123XYijk', 'XY') → c13i
// wordEnds('XY123XY', 'XY') → 13
// wordEnds('XY1XY', 'XY') → 11

function wordEnds(str, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let hasWord = 0;
    for (let j = 0; j < word.length; j++) {
      if (str[i + j] === word[j]) {
        hasWord += 1;
      }
    }
    if (hasWord === word.length) {
      if (str[i - 1]) {
        result += str[i - 1];
      }
      if (str[i + word.length]) {
        result += str[i + word.length];
      }
    }
  }
  return result;
}
