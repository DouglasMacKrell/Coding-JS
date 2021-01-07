// Logic-1 -- shareDigit
// https://codingjs.wmcicompsci.ca/exercise.html?name=shareDigit&title=Logic-1

// Given two ints, each in the range 10..99, return true if there is a digit
// that appears in both numbers, such as the 2 in 12 and 23. (Note: division,
// e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

// Examples

// shareDigit(12, 23) → true
// shareDigit(12, 43) → false
// shareDigit(12, 44) → false

function shareDigit(a, b) {
  let aBack = Math.floor(a % 10);
  let aFront = Math.floor(a / 10);
  let bBack = Math.floor(b % 10);
  let bFront = Math.floor(b / 10);
  if (aFront === bFront) {
    return true;
  } else if (aBack === bBack) {
    return true;
  } else if (aFront === bBack) {
    return true;
  } else if (aBack === bFront) {
    return true;
  } else {
    return false;
  }
}

console.log(shareDigit(12, 23));