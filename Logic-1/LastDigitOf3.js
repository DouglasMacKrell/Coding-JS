// Logic-1 -- lastDigitOfThree
// https://codingjs.wmcicompsci.ca/exercise.html?name=lastDigitOfThree&title=Logic-1

// Given three ints, a b c, return true if two or more of them have the same
// rightmost digit. The ints are non-negative. Note: the % "mod" operator
// computes the remainder, e.g. 17 % 10 is 7.

// Examples

// lastDigitOfThree(23, 19, 13) → false
// lastDigitOfThree(23, 19, 12) → false
// lastDigitOfThree(23, 19, 3) → true

function lastDigitOfThree(a, b, c) {
  let aR = a % 10;
  let bR = b % 10;
  let cR = c % 10;
  if (aR === bR) {
    return true;
  } else if (bR === cR) {
    return true;
  } else if (aR === cR) {
    return true;
  } else {
    return false;
  }
}
