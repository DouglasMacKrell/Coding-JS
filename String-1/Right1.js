// String-1 -- right2
// https://codingjs.wmcicompsci.ca/exercise.html?name=right2&title=String-1

// Given a string, return a "rotated right 2" version where
// he last 2 chars are moved to the start. The string length
// will be at least 2.

// Examples

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi

function right2(str) {
  let last2 = str.slice(str.length - 2);
  let front = str.slice(0, str.length - 2);
  return last2 + front;
}
