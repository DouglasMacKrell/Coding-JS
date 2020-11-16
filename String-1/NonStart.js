// String-1 -- nonStart
// https://codingjs.wmcicompsci.ca/exercise.html?name=nonStart&title=String-1

// Given 2 strings, return their concatenation, except omit the first
// char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a, b) {
  let shortA = a.slice(1);
  let shortB = b.slice(1);
  return shortA + shortB;
}
