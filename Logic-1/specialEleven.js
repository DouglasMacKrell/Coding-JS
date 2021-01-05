// Logic-1 -- specialEleven
// https://codingjs.wmcicompsci.ca/exercise.html?name=specialEleven&title=Logic-1

// We'll say a number is special if it is a multiple of 11 or if it is one more than
// a multiple of 11. Return true if the given non-negative number is special.
// Use the % "mod" operator.

// Examples

// specialEleven(22) → true
// specialEleven(23) → true
// specialEleven(24) → false

function specialEleven(n) {
  let modCheck = n % 11;
  let plusOneCheck = (n - 1) % 11;
  if (n >= 0) {
    if (modCheck === 0 || plusOneCheck === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
