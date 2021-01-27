// Array-2 -- fizzArray2
// https://codingjs.wmcicompsci.ca/exercise.html?name=fizzArray2&title=Array-2

// Given a number n, create and return a new string array of length n,
// containing the strings "0", "1" "2" .. through n-1. N may be 0, in which
// case just return a length 0 array. Note: String(xxx) will make the String
// form of most types.

// Examples

// fizzArray2(4) → 0,1,2,3
// fizzArray2(10) → 0,1,2,3,4,5,6,7,8,9
// fizzArray2(2) → 0,1

function fizzArray2(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let num = i;
    let strNum = num.toString();
    result.push(strNum);
  }
  return result;
}
