// Logic-1 -- sortaSum
// https://codingjs.wmcicompsci.ca/exercise.html?name=sortaSum&title=Logic-1

// Given 2 ints, a and b, return their sum. However, sums in the range 10..19
// inclusive, are forbidden, so in that case just return 20.

// Examples

// sortaSum(3, 4) → 7
// sortaSum(9, 4) → 20
// sortaSum(10, 11) → 21

function sortaSum(a, b) {
  if (a + b >= 10 && a + b <= 19) {
    return 20;
  } else {
    return a + b;
  }
}
