// String-1 -- twoChar
// https://codingjs.wmcicompsci.ca/exercise.html?name=twoChar&title=String-1

// Given a string and an index, return a string length 2 starting
// at the given index. If the index is too big or too small to
// define a string length 2, use the first 2 chars.
// The string length will be at least 2.

// Examples

// twoChar('java', 0) → ja
// twoChar('java', 2) → va
// twoChar('java', 3) → ja

function twoChar(str, index) {
  if (str.length < 3) {
    return str;
  } else if (index > str.length - 2 || index < 0) {
    return str.slice(0, 2);
  } else {
    let result = str.slice(index, index + 2);
    return result;
  }
}
