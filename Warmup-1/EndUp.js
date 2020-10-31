// Warmup-1 -- endUp
// https://codingjs.wmcicompsci.ca/exercise.html?name=endUp&title=Warmup-1

// Given a string, return a new string where the
// last 3 chars are now in upper case. If the string
// has less than 3 chars, uppercase whatever is there.
// Note that str.toUpperCase() returns the uppercase
// version of a string.

// Examples

// endUp('Hello') → HeLLO
// endUp('hi there') → hi thERE
// endUp('hi') → HI

function endUp(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    let sum = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
    let sliceStr = str.slice(0, str.length - 3);
    let result = sliceStr + sum.toUpperCase();
    return result;
  }
}
