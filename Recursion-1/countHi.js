// String-2 -- countHi
// https://codingjs.wmcicompsci.ca/exercise.html?name=countHi&title=Recursion-1

// Return the number of times that the string "hi" appears anywhere 
// in the given string.

// Examples

// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

function countHi(str){
  if (str.length === 0) return 0;
  if (str[0] === "h" && str[1] === "i") {
    return 1 + countHi(str.slice(1));
  } else {
    return countHi(str.slice(1));
  }
}