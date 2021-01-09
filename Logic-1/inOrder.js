// Logic-1 -- inOrder
// https://codingjs.wmcicompsci.ca/exercise.html?name=inOrder&title=Logic-1

// Given three ints, a b c, return true if b is greater than a, and c is greater than b.
// However, with the exception that if "bOk" is true, b does not need to be greater than a.

// Examples

// inOrder(1, 2, 4, false) → true
// inOrder(1, 2, 1, false) → false
// inOrder(1, 1, 2, true) → true

function inOrder(a, b, c, bOk) {
  if (bOk) {
    if (b < c) {
      return true;
    } else {
      return false;
    }
  } else if (a < b && b < c) {
    return true;
  } else {
    return false;
  }
}
