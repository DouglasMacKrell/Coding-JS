// Warmup-1 -- nearHundred
// https://codingjs.wmcicompsci.ca/exercise.html?name=nearHundred&title=Warmup-1

// Given an int n, return true if it is
// within 10 of 100 or 200. Note: Math.abs(num)
// computes the absolute value of a number.

// Examples

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false

function nearHundred(n) {
  if (n >= 90 && n <= 110) {
    return true;
  } else if (n >= 190 && n <= 210) {
    return true;
  } else {
    return false;
  }
}
