// Logic-1 -- more20
// https://codingjs.wmcicompsci.ca/exercise.html?name=more20&title=Logic-1

// Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

// Examples

// more20(20) → false
// more20(21) → true
// more20(22) → true

function more20(n) {
  if ((n - 1) % 20 === 0) {
    return true;
  } else if ((n - 2) % 20 === 0) {
    return true;
  } else {
    return false;
  }
}
