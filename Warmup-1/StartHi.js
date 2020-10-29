// Warmup-1 -- startHi
// https://codingjs.wmcicompsci.ca/exercise.html?name=startHi&title=Warmup-1

// Given a string, return true if the string
// starts with 'hi' and false otherwise.

// Examples

// startHi('hi there') → true
// startHi('hi') → true
// startHi('hello hi') → false

function startHi(str) {
  if (str[0] === "h" && str[1] === "i") {
    return true;
  } else {
    return false;
  }
}
