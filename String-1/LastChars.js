// String-1 -- lastChars
// https://codingjs.wmcicompsci.ca/exercise.html?name=lastChars&title=String-1

// Given 2 strings, a and b, return a new string made of the first
// char of a and the last char of b, so "yo" and "java" yields "ya".
// If either string is length 0, use '@' for its missing char.

// Examples

// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@

function lastChars(a, b) {
  let first = "";
  let last = "";
  if (a.length === 0) {
    first = "@";
  } else {
    first = a[0];
  }
  if (b.length === 0) {
    last = "@";
  } else {
    last = b[b.length - 1];
  }
  return first + last;
}
