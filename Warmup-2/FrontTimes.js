// Warmup-2 -- frontTimes
// https://codingjs.wmcicompsci.ca/exercise.html?name=frontTimes&title=Warmup-2

// Given a string and a non-negative int n,
// we'll say that the front of the string is
// the first 3 chars, or whatever is there if
// the string is less than length 3. Return n
// copies of the front.

// Examples

// frontTimes('Chocolate', 2) → ChoCho
// frontTimes('Chocolate', 3) → ChoChoCho
// frontTimes('Abc', 3) → AbcAbcAbc

function frontTimes(str, n) {
  let result = "";
  if (str.length === 0) {
    return result;
  } else if (str.length <= 3) {
    for (let i = 0; i < n; i++) {
      result += str;
    }
    return result;
  } else {
    let sum = str[0] + str[1] + str[2];
    for (let i = 0; i < n; i++) {
      result += sum;
    }
    return result;
  }
}
