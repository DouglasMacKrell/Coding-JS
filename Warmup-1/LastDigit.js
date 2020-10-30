// Warmup-1 -- lastDigit
// https://codingjs.wmcicompsci.ca/exercise.html?name=lastDigit&title=Warmup-1

// Given two non-negative int values, 
// return true if they have the same last digit, 
// such as with 27 and 57. Note that the % 'mod' 
// operator computes remainders, so 17 % 10 is 7.

// Examples

// lastDigit(7, 17) → true
// lastDigit(6, 17) → false
// lastDigit(3, 113) → true

function lastDigit(a,b){
  let strA = a.toString()
  let strB = b.toString()
  if (strA[strA.length - 1] === strB[strB.length - 1]) {
      return true
  } else {
      return false
  }
}

console.log(lastDigit(6, 17))