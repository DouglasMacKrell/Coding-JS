// String-3 -- equalIsNot
// https://codingjs.wmcicompsci.ca/exercise.html?name=equalIsNot&title=String-3

// Given a string, return true if the number of appearances of "is" anywhere in the
// string is equal to the number of appearances of "not" anywhere in the string
// (case sensitive).

// Examples

// equalIsNot('This is not') → false
// equalIsNot('This is notnot') → true
// equalIsNot('noisxxnotyynotxisi') → true

function equalIsNot(str) {
  let isCount = 0;
  let notCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "i") {
      if (str[i + 1] === "s") {
        isCount += 1;
      }
    } else if (str[i] === "n") {
      if (str[i + 1] === "o" && str[i + 2] === "t") {
        notCount += 1;
      }
    }
  }
  if (isCount === notCount) {
    return true;
  } else {
    return false;
  }
}
