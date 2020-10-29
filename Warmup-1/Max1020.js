// Warmup-1 -- max1020
// https://codingjs.wmcicompsci.ca/exercise.html?name=max1020&title=Warmup-1

// Given 2 positive int values, return the
// larger value that is in the range 10..20
// inclusive, or return 0 if neither is in that range.

// Examples

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

function max1020(a, b) {
  let aCheck = false;
  let bCheck = false;
  if (a <= 20 && a >= 10) {
    aCheck = true;
  }
  if (b <= 20 && b >= 10) {
    bCheck = true;
  }
  if (aCheck && bCheck) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else if (aCheck) {
    return a;
  } else if (bCheck) {
    return b;
  } else {
    return 0;
  }
}
