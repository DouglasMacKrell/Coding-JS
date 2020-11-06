// String-1 -- lastTwo
// https://codingjs.wmcicompsci.ca/exercise.html?name=lastTwo&title=String-1

// Given a string of any length, return a new string where
// the last 2 chars, if present, are swapped, so "coding"
// yields "codign".

// Examples

// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba

function lastTwo(str) {
  if (str.length > 1) {
    let result = str.slice(0, str.length - 2);
    let swap = str[str.length - 1] + str[str.length - 2];
    return result + swap;
  } else {
    return str;
  }
}
