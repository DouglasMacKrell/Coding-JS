// Array-3 -- linearIn
// https://codingjs.wmcicompsci.ca/exercise.html?name=linearIn&title=Array-3

// Given two arrays of ints sorted in increasing order,
// outer and inner, return true if all of the numbers
// in inner appear in outer. The best solution makes
// only a single "linear" pass of both arrays, taking
// advantage of the fact that both arrays are already
// in sorted order.

// Examples

// linearIn([1, 2, 4, 6], [2, 4]) → true
// linearIn([1, 2, 4, 6], [2, 3, 4]) → false
// linearIn([1, 2, 4, 4, 6], [2, 4]) → true

function linearIn(outer, inner) {
  let outerSet = new Set(outer);
  let result = true;
  for (let num of inner) {
    if (!outerSet.has(num)) {
      result = false;
    }
  }
  return result;
}

console.log(linearIn([1, 2, 4, 6], [2, 3, 4]));
