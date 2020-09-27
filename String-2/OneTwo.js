// String-2 -- oneTwo
// https://codingjs.wmcicompsci.ca/exercise.html?name=oneTwo&title=String-2

// Given a string, compute a new string by moving
// the first char to come after the next two chars,
// so "abc" yields "bca". Repeat this process for
// each subsequent group of 3 chars, so "abcdef"
// yields "bcaefd". Ignore any group of fewer
// than 3 chars at the end.

// Examples

// oneTwo('abc') → bca
// oneTwo('tca') → cat
// oneTwo('tcagdo') → catdog

function oneTwo(str) {
  let splitStr = str.split("");
  let result = "";
  let accumulator = [];
  let counter = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (counter < 2) {
      counter += 1;
      accumulator.push(splitStr[i]);
      console.log(accumulator);
    } else {
      counter = 0;
      accumulator.push(splitStr[i]);
      console.log("preshift", accumulator);
      accumulator.push(accumulator.shift());
      console.log("postshift", accumulator);
      result += accumulator.join("");
      accumulator = [];
    }
  }
  if (accumulator.length) {
    result += accumulator.join("");
  }
  return result;
}

console.log(oneTwo("xy"));
