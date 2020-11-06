// String-2 -- repeatSeparator
// https://codingjs.wmcicompsci.ca/exercise.html?name=repeatSeparator&title=String-2

// Given two strings, word and a separator sep, return
// a big string made of count occurrences of the word,
// separated by the separator string.

// Examples

// repeatSeparator('Word', 'X', 3) → WordXWordXWord
// repeatSeparator('This', 'And', 2) → ThisAndThis
// repeatSeparator('This', 'And', 1) → This

function repeatSeparator(word, sep, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    if (i === count - 1) {
      result += word;
    } else {
      result += word + sep;
    }
  }
  return result;
}
