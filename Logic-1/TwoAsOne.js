// Logic-1 -- twoAsOne
// https://codingjs.wmcicompsci.ca/exercise.html?name=twoAsOne&title=Logic-1

// Given three ints, a b c, return true if it is possible to add two of the ints
// to get the third.

// Examples

// twoAsOne(1, 2, 3) → true
// twoAsOne(3, 1, 2) → true
// twoAsOne(3, 2, 2) → false

function twoAsOne(a, b, c) {
  if (a + b === c) {
    return true;
  } else if (a + c === b) {
    return true;
  } else if (b + c === a) {
    return true;
  } else {
    return false;
  }
}
