// Logic-1 -- old35
// https://codingjs.wmcicompsci.ca/exercise.html?name=old35&title=Logic-1

// Return true if the given non-negative number is a multiple of 3 or 5,
// but not both. Use the % "mod" operator.

// Examples

// old35(3) → true
// old35(10) → true
// old35(15) → false

function old35(n) {
  if (n % 3 === 0 && n % 5 !== 0) {
    return true;
  } else if (n % 3 !== 0 && n % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
