// Logic-1 -- maxMod5
// https://codingjs.wmcicompsci.ca/exercise.html?name=maxMod5&title=Logic-1

// Given two int values, return whichever value is larger. However if the two values
// have the same remainder when divided by 5, then the return the smaller value.
// However, in all cases, if the two values are the same, return 0.
// Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

// Examples

// maxMod5(2, 3) → 3
// maxMod5(6, 2) → 6
// maxMod5(3, 2) → 3

function maxMod5(a, b) {
  if (a === b) {
    return 0;
  } else if (a % 5 === b % 5) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  } else if (a > b) {
    return a;
  } else {
    return b;
  }
}
