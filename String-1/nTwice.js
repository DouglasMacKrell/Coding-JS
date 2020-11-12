// String-1 -- nTwice
// https://codingjs.wmcicompsci.ca/exercise.html?name=nTwice&title=String-1

// Given a string and an int n, return a string made of the
// first and last n chars from the string. The string length
// will be at least n.

// Examples

// nTwice('hello', 2) → helo
// nTwice('Chocolate', 3) → Choate
// nTwice('Chocolate', 1) → Ce

function nTwice(str, n) {
  let front = str.slice(0, n);
  let back = str.slice(str.length - n);
  return front + back;
}
