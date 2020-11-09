// String-1 -- middleTwo
// https://codingjs.wmcicompsci.ca/exercise.html?name=middleTwo&title=String-1

// Given a string of even length, return a string made
// of the middle two chars, so the string "string" yields
// "ri". The string length will be at least 2.

// Examples

// middleTwo('string') →
// middleTwo('code') →
// middleTwo('Practice') →

function middleTwo(str) {
  let first = str[str.length / 2 - 1];
  let second = str[str.length / 2];
  return first + second;
}
