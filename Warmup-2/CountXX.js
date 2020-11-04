// Warmup-2 -- countXX
// https://codingjs.wmcicompsci.ca/exercise.html?name=countXX&title=Warmup-2

// Count the number of 'xx' in the given string.
// We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

// Examples

// countXX('abcxx') → 1
// countXX('xxx') → 2
// countXX('xxxx') → 3

function countXX(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" && str[i + 1] === "x") {
      counter += 1;
    }
  }
  return counter;
}
