// Logic-1 -- lessBy10
// https://codingjs.wmcicompsci.ca/exercise.html?name=lessBy10&title=Logic-1

// Given three ints, a b c, return true if one of them is 10 or more less than
// one of the others.

// Examples

// lessBy10(1, 7, 11) → true
// lessBy10(1, 7, 10) → false
// lessBy10(11, 1, 7) → true

function lessBy10(a, b, c) {
  if (a <= b - 10) {
    return true;
  } else if (a <= c - 10) {
    return true;
  } else if (b <= a - 10) {
    return true;
  } else if (b <= c - 10) {
    return true;
  } else if (c <= a - 10) {
    return true;
  } else if (c <= b - 10) {
    return true;
  } else {
    return false;
  }
}
