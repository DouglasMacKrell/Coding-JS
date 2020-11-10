// String-1 -- frontAgain
// https://codingjs.wmcicompsci.ca/exercise.html?name=frontAgain&title=String-1

// Given a string, return true if the first 2 chars
// in the string also appear at the end of the string,
// such as with "edited".

// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str) {
  if (str.length < 2) {
    return false;
  }
  let front = str.substring(0, 2);
  let back = str.substring(str.length - 2, str.length);
  if (front === back) {
    return true;
  } else {
    return false;
  }
}
