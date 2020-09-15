// String-2 -- xyBalance
// https://codingjs.wmcicompsci.ca/exercise.html?name=xyBalance&title=String-2

// We'll say that a String is xy-balanced if for
// all the 'x' chars in the string, there exists
// a 'y' char somewhere later in the string.
// So "xxy" is balanced, but "xyx" is not.
// One 'y' can balance multiple 'x's.
// Return true if the given string is xy-balanced.

// Examples

// xyBalance('aaxbby') → true
// xyBalance('aaxbb') → false
// xyBalance('yaaxbb') → false

function xyBalance(str) {
  let xFound = false;
  let yFound = false;
  let isBalanced = true;
  for (let char of str) {
    if (xFound && yFound) {
      isBalanced = false;
    }
    if (char === "x") {
      xFound = true;
      isBalanced = false;
    }
    if (char === "y") {
      xFound = false;
      yFound = true;
      isBalanced = true;
    }
  }
  return isBalanced;
}
