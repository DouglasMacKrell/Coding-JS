// String-2 -- xyzMiddle
// https://codingjs.wmcicompsci.ca/exercise.html?name=xyzMiddle&title=String-2

// Given a string, does "xyz" appear in the middle of the string?
// To define middle, we'll say that the number of chars to the left
// and right of the "xyz" must differ by at most one. This problem
// is harder than it looks.

// Examples

// xyzMiddle('AAxyzBB') → true
// xyzMiddle('AxyzBB') → true
// xyzMiddle('AxyzBBB') → false

function xyzMiddle(str) {
  if (str.length % 2 === 0) {
    let center = Math.floor(str.length / 2);
    if (
      str[center - 1] === "x" &&
      str[center] === "y" &&
      str[center + 1] === "z"
    ) {
      return true;
    } else if (
      str[center] === "x" &&
      str[center + 1] === "y" &&
      str[center + 2] === "z"
    ) {
      return true;
    } else if (
      str[center - 2] === "x" &&
      str[center - 1] === "y" &&
      str[center] === "z"
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    let center = Math.floor(str.length / 2);
    if (
      str[center - 1] === "x" &&
      str[center] === "y" &&
      str[center + 1] === "z"
    ) {
      return true;
    } else {
      return false;
    }
  }
}
