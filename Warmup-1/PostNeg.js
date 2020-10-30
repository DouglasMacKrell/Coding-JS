// Warmup-1 -- posNeg
// https://codingjs.wmcicompsci.ca/exercise.html?name=posNeg&title=Warmup-1

// Given 2 int values, return true if one is 
// negative and one is positive. Except if the 
// parameter "negative" is true, then return 
// true only if both are negative.

// Examples

// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

function posNeg(a,b,negative){
  if (negative) {
      if (a < 0 && b < 0) {
          return true
      } else {
          return false
      }
  } else {
      if (a < 0 && b >= 0 || a >= 0 && b < 0) {
          return true
      } else {
          return false
      }
  }
}