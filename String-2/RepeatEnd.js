// String-2 -- repeatEnd
// https://codingjs.wmcicompsci.ca/exercise.html?name=repeatEnd&title=String-2

// Given a string and an int n,
// return a string made of n repetitions
// of the last n characters of the string.
// You may assume that n is between 0
// and the length of the string, inclusive.

// Examples

// repeatEnd('Hello', 3) → llollollo
// repeatEnd('Hello', 2) → lolo
// repeatEnd('Hello', 1) → o







function repeatEnd(str, n) {
  let reverseIndexFinder = str.length - n;
  let tail = str.slice(reverseIndexFinder);
  let result = "";
  for (let i = 0; i < n; i++) {
    result += tail;
  }
  return result;
}

console.log(repeatEnd("Hello", 3));
