// String-1 -- left2
// https://codingjs.wmcicompsci.ca/exercise.html?name=left2&title=String-1

// Given a string, return a "rotated left 2" version where the first
// 2 chars are moved to the end. The string length will be at least 2.

// Examples

// left2('Hello') → lloHe
// left2('java') → vaja
// left2('Hi') → Hi

function left2(str) {
  let result = "";
  if (str.length < 3) {
    return str;
  }
  let front = str.slice(0, 2);
  let back = str.slice(2);
  result = back + front;
  return result;
}
