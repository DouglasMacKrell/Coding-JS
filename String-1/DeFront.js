// String-1 -- deFront
// https://codingjs.wmcicompsci.ca/exercise.html?name=deFront&title=String-1

// Given a string, return a version without the first 2 chars.
// Except keep the first char if it is 'a' and keep the second
// char if it is 'b'. The string may be any length.
// Harder than it looks.

// Examples

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay

function deFront(str) {
  let result = "";
  if (str[0] === "a") {
    result += str[0];
  }
  if (str[1] === "b") {
    result += str[1];
  }
  if (str.length < 3) {
    return result;
  } else {
    result += str.slice(2);
    return result;
  }
}
