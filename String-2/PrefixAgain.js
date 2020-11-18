// String-2 -- prefixAgain
// https://codingjs.wmcicompsci.ca/exercise.html?name=prefixAgain&title=String-2

// Given a string, consider the prefix string made of the first N
// chars of the string. Does that prefix string appear somewhere
// else in the string? Assume that the string is not empty and that
// N is in the range 1..str.length().

// Examples

// prefixAgain('abXYabc', 1) → true
// prefixAgain('abXYabc', 2) → true
// prefixAgain('abXYabc', 3) → false

function prefixAgain(str, n) {
  let prefix = str.slice(0, n);
  let postfix = str.slice(n);
  if (postfix.indexOf(prefix) > -1) {
    return true;
  } else {
    return false;
  }
}
